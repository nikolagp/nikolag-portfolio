---
title: Stop Supabase From Pausing Your Project (GitHub Actions Guide)
date: 2026-09-03
description: Supabase pauses free projects after 7 days of inactivity. Here's how I stopped losing access to mine — and how you can too, with a free GitHub Action
image: ''
tags: ['Software Engineering', 'Database']
---
Supabase is very nice and its generous free plan is my first option when I build a project that needs a relational database. But like every free plan, there are some constraints. I'll definitely pay for the Pro plan once my project is production-ready and delivering a service that customers pay a subscription for, but during the development phase, I stick with the free plan.

## My first hit to the wall - paused project for 90 days

I totally understand that in order to keep their resources spent at a minimum for free plan projects, they have to limit how long a project stays active without use. That time is 7 days. So, Supabase Free Tier projects automatically pause after **7 days of inactivity**, and allow direct dashboard restoration for up to **90 days** after pausing.

I was working on a side project whenever I could find the time. The gap between my commits was never longer than 2-3 weeks, depending on how much free time I had as a full-time employee and father. Every time the project got paused, I knew I had 90 days to restore it. But one day, when I went to resume it, I hit the wall: **"Project can no longer be restored through the dashboard."** Honestly, I'm not sure how it happened - I was sure I'd touched that project within the 90 days - but it happened anyway. Luckily it wasn't a production-ready project, so I took it as a chance to learn how to restore one, and I managed it successfully. There were two recovery options, and I went with the first: restore the backup to a new Supabase project. The other option was restoring the backup on your local machine.

## Solution for keeping it alive

This can happen again, I thought, so I needed a fix. Recently I was working on a project where I used a daily cron job through Vercel (since that project was hosted there). My intention was to fetch some event data for that particular day, not to keep my Supabase project alive - but that turned out to be a nice side effect.

The project I'm talking about here was also hosted on Vercel, but I wanted to explore other options too. That's how I found an even cheaper one: GitHub Actions. Below, I'll walk you through step by step how you can keep your project alive (but don't be rude and waste Supabase's generous offer - if you're done with a project, just delete it or let it stay paused) for those times you're tired of resuming a project every time you go quiet on it for more than 7 days (but you know you'll be back within the next 83, for sure).

## Setting up a GitHub action

### Step 1: **Get your Supabase API keys**

Go to your Supabase project dashboard → Project Settings (gear icon) → API. 

Copy the 'Project URL' (looks like https://abcdefgh.supabase.co) and the 'anon public' key. You'll need both in a later step.

### Step 2: **Open your GitHub repo**

Go to github.com and open the repository connected to this project. If your Supabase project isn't already linked to a GitHub repo, just create a new empty repo - this workflow doesn't need to touch your actual app code.

### Step 3: **Create the workflow folder structure**

In your repo, click 'Add file' → 'Create new file'. In the filename box, type: .github/workflows/keep-alive.yml — GitHub will automatically create the .github and workflows folders for you as you type the slashes.

### Step 4: **Paste in the workflow code**

In the file content box, paste:

```yaml
name: Keep Supabase Alive
on:
  schedule:
    - cron: '0 0 */3 * *'
  workflow_dispatch:

jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Ping Supabase
        run: |
          curl -X GET "${{ secrets.SUPABASE_URL }}/rest/v1/YOUR_TABLE_NAME?select=id&limit=1" \
          -H "apikey: ${{ secrets.SUPABASE_ANON_KEY }}" \
          -H "Authorization: Bearer ${{ secrets.SUPABASE_ANON_KEY }}"
```

Replace `YOUR_TABLE_NAME` with a real table name from your Supabase project. You can find your table names in the Supabase dashboard under **Table Editor**

Then click 'Commit changes' at the bottom (commit directly to main is fine).

### Step 5: **Add your Supabase keys as GitHub secrets**

In your repo, go to Settings (top tab) → Secrets and variables → Actions → 'New repository secret'. Add two secrets: name it `SUPABASE_URL` with value being your Project URL from step 1, then add another named `SUPABASE_ANON_KEY` with your anon key. Secrets keep these hidden from anyone viewing your repo.

### Step 6: **Test it manually**

Go to the 'Actions' tab at the top of your repo. Click on 'Keep Supabase Alive' in the left sidebar, then click the 'Run workflow' dropdown button on the right and hit the green 'Run workflow' button. This triggers it immediately using the workflow_dispatch trigger, so you don't have to wait 3 days to see if it works.

### Step 7: **Check the run succeeded**

After ~10-20 seconds, refresh the Actions tab and click into the run. If you see a green checkmark, it worked. Click into the 'ping' job and expand the 'Ping Supabase' step to see the actual curl response and you should see some JSON back from Supabase, not an error. Mine looks like this:

!Screenshot 2026-09-03 at 11.21.51.png

## And that’s it - l**et it run automatically from here**

Problem solved. GitHub will now run this every 3 days on its own schedule (the `*/3` in the cron line). No further action needed.

Note: GitHub may skip or delay scheduled runs by a few minutes on the free tier, which is why running every 3 days (instead of exactly 7) gives you a safety buffer.

Have fun, and keep on creating, unbothered.

P.S. And don't forget to buy the Pro plan once you succeed, so someone else can use the free tier too.
