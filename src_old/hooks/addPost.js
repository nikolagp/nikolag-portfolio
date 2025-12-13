import { ref } from "vue";

const addPost = () => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts/", {
        method: "POST",
        body: JSON.stringify({
          // data to add to db.json file
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!data.ok) {
        throw Error("The post does not exist");
      }
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default addPost;
