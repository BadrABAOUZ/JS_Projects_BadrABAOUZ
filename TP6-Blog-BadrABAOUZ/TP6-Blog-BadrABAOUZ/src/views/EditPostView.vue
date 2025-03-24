<template>
  <div>
    <NavBar />
    <h1>Edit Post</h1>
    <form @submit.prevent="updatePost">
      <div>
        <label for="title">Title:</label>
        <input v-model="post.title" id="title" required />
      </div>
      <div>
        <label for="body">Body:</label>
        <textarea v-model="post.body" id="body" required></textarea>
      </div>
      <div>
        <label for="tags">Tags (comma-separated):</label>
        <input v-model="post.tags" id="tags" required />
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import { fetchPost, updatePost } from '../composables/getPost.js';

export default {
  components: { NavBar },
  data() {
    return {
      post: {
        title: '',
        body: '',
        tags: ''
      }
    };
  },
  async created() {
    const postId = this.$route.params.id;
    const fetchedPost = await fetchPost(postId);
    this.post = {
      ...fetchedPost,
      tags: fetchedPost.tags.join(', ')
    };
  },
  methods: {
    async updatePost() {
      const updatedPost = {
        ...this.post,
        tags: this.post.tags.split(',').map(tag => tag.trim())
      };

      await updatePost(this.$route.params.id, updatedPost);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input, textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #369f6e;
}
</style>