---
title: Beyond the Vibe - Building Apps That Survive Contact With Reality
date: 2026-06-30
description: AI can build a working app in hours, but can it survive real users, growing traffic, and future maintenance? Learn how Reliability, Scalability, and Maintainability (RSM) can help you build AI-assisted software that lasts.
image: ''
tags: ['Software Engineering', 'AI Coding', 'System Design']
---
AI coding assistants have made it incredibly easy to turn an idea into a working prototype in just a few hours, sometimes even less.

That's exciting. But it's also why so many “vibe-coded” applications fall apart the moment they face real users, larger datasets, or a second developer joining the project.

The code works. It just wasn't built to last.

The answer isn't to use AI less. It's to review every AI-generated line of code through three simple questions before it reaches production:

- **Will this still work when things go wrong?** *(Reliability)*
- **Will this still work as usage grows?** *(Scalability)*
- **Will someone—including future me—be able to understand and change this six months from now?** *(Maintainability)*

These three principles aren't new, but they're more important than ever in the age of AI-assisted development.

## What inspired this post

This article actually started with a chapter from a book.

As the father of a young daughter, most of my free time belongs to her. Between work, family, and trying to stay healthy (both mentally and physically) I usually find time to read only with my morning coffee or before bed.

This morning I started reading *Designing Data-Intensive Applications* by Martin Kleppmann. I had barely finished the first chapter before it made me stop and think about my own development process.

The chapter introduces three qualities of well-designed systems:

> 
> 
> 
> *Reliability*
> The system should continue to work correctly (performing the correct function at
> the desired performance) even in the face of adversity (hardware or software
> faults, and even human error).
> 
> *Scalability*
> As the system grows (in data volume, traffic volume or complexity), there should
> be reasonable ways of dealing with that growth.
> 
> *Maintainability*
> Over time, many different people will work on the system (engineering and oper‐
> ations, both maintaining current behavior and adapting the system to new use
> cases), and they should all be able to work on it productively.
> 

Those definitions are excellent, but here's how I think about them in everyday development:

- **Reliability** means your application behaves correctly even when something goes wrong.
- **Scalability** means performance and costs grow predictably as your application grows.
- **Maintainability** means someone else, or future you, can understand and safely change the code without introducing new problems.

Let's see what that looks like from a frontend developer's perspective.

## Reliability: Assume something will fail

Most developers (or AI models left unsupervised) optimize for the happy path.

The better question is:

**"What happens when something breaks?"**

Imagine you're building a checkout form.

A typical AI-generated implementation might display a loading spinner and assume the request either succeeds or fails cleanly.

A reliability-focused implementation asks tougher questions:

- What if the request times out, but the order was actually created? You don't want users clicking "Submit" five times and placing five identical orders.
- What if the network connection drops halfway through the request? Instead of showing a generic error, the UI should honestly communicate uncertainty: *"We're checking whether your order was received..."*
- What if a third-party analytics or chat widget fails to load? That shouldn't prevent customers from completing their purchase.

Reliability isn't about preventing failures. It's about designing for them.

## Scalability: Your demo isn't your production environment

Frontend scalability isn't only about servers. It's also about what happens inside the browser.

Some common examples:

- A dashboard that performs perfectly with 200 rows but becomes unusable with 20,000 because every component re-renders on every state change.
- Fetching an entire dataset on page load instead of using pagination, infinite scrolling, or lazy loading. It works beautifully during development with ten records, until production has ten thousand.
- Gradually increasing bundle size because every AI suggestion introduces another dependency. A scalable frontend isn't only capable of handling more users, it also stays fast as the codebase grows.

Scalability isn't just about surviving growth. It's about growing predictably.

## Maintainability: Future you is part of the team

Maintainability is where frontend developers feel the pain every day.

Some familiar examples:

- Instead of extending an existing reusable form component, AI generates another standalone version, duplicating validation logic and bugs.
- Colors, spacing, and typography are hardcoded throughout the application instead of using design tokens in a centralized place. Six months later, marketing changes the brand color and you're editing dozens of files.
- Every new feature introduces another way of managing state. Some components use local state, others use Context, others use Redux or another global store. Individually they all work. Together they become difficult to reason about. And then next promp introduces Zustand as a better alternative. Mind-blowing. The latest actually happened to me when I tested some early versions of the free plan by GitHub Copilot in 2025.

Code is read far more often than it's written. Maintainable code respects the next person who has to work on it even if that person is you.

## The same principles apply everywhere

These ideas can sound abstract at first, but they're relevant regardless of your role.

Whether you're building frontend interfaces, backend services, or designing entire systems, you're ultimately asking the same three questions:

- What breaks?
- What happens as the system grows?
- Who has to maintain this later?

Only the context changes.

| Role | Reliability | Scalability | Maintainability |
| --- | --- | --- | --- |
| **Frontend** | Handle failed requests and uncertain network states | Efficiently render large datasets and keep bundle sizes under control | Reuse components, design tokens, and consistent state management |
| **Backend** | Idempotent operations, retries, timeouts, resilient external calls | Avoid N+1 queries, scale horizontally, use queues where appropriate | Keep business logic centralized and easy to extend |
| **Architecture** | Graceful degradation, recovery strategies, rollback plans | Design for increasing traffic, data volume, and service boundaries | Document architectural decisions and maintain clear service boundaries |

Same principles. Different altitude.

## Where AI helps - and where it doesn't

AI isn't the enemy of reliability, scalability, or maintainability. In fact, when used intentionally, it can significantly improve all three.

### AI is great at:

- Reviewing architecture before you write code.
- Generating repetitive but important code such as retries, validation, migrations, and test scaffolding.
- Explaining design trade-offs instead of simply generating solutions.
- Performing focused code reviews for race conditions, N+1 queries, missing error handling, or edge cases.
- Writing documentation, READMEs, Architecture Decision Records (ADRs), and onboarding material that developers often postpone.

Used this way, AI becomes another (if I may say “experienced”) engineer in the room.

### AI still needs supervision

AI also has blind spots. It optimizes for code that *looks correct*, not necessarily code that's correct for your production environment.

Some common pitfalls:

- It doesn't know your expected traffic unless you tell it.
- It doesn't remember your entire codebase unless you provide the context.
- It usually generates the most common solution, not necessarily the best one for your situation.
- It often sounds confident even when the underlying design is flawed.

A useful habit is separating **generation** from **review**. Use AI to create the first draft. Then use AI again but with a completely different prompt to critique that draft.

Our job is to make the final decisions between those two steps.

# Things We Often Forget

Some of the biggest long-term problems aren't in the code AI generates, they're in the questions we never ask.

### Plan migrations, not just schemas

Generating a database schema is easy. Planning how that schema evolves without downtime months later is much harder.

### Remember that scalability includes cost

A system that handles ten times more traffic but costs five times more to operate isn't necessarily scalable. Performance and economics both matter.

### The second developer test

Could someone who has never seen this project understand the code from the implementation and documentation alone? If the answer is no, the feature probably isn't finished.

### Feature flags and rollback plans

Reliability isn't only about surviving failures. It's also about recovering quickly when a deployment goes wrong.

### Don't over-engineer

RSM doesn't mean building enterprise infrastructure for a five-user MVP. It means making deliberate decisions about which shortcuts are safe today and which ones will become expensive tomorrow.

### Keep a decision log

Whenever AI suggests an architectural decision, write down in one sentence why you accepted or rejected it. Six months later, that note may be more valuable than the code itself. 

# Final Thoughts

AI didn't invent fragile software. It simply removed the friction that used to slow developers down and force them to think more carefully.

Reliability, Scalability, and Maintainability put that healthy friction back into the process.

Before accepting the first working solution whether it came from AI or from yourself ask three questions:

- **What breaks?**
- **What happens as this grows?**
- **Who will maintain it later?**

Those questions change how you build software. They also change how you use AI.

Instead of treating AI as something that writes code for you, treat it as a partner that helps you challenge assumptions, explore trade-offs, document decisions, and strengthen your designs.

I'm only one chapter into *Designing Data-Intensive Applications*, and it's already reshaped the way I think about software engineering. Hopefully the rest of the book inspires more posts like this.

And if nothing else, researching and writing this article with AI helping me think through the ideas rather than simply generating them, taught me a lot about the relationship between AI and building systems that actually last. 

Stay tuned.
