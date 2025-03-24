<template>
  <div>
    <NavBar />
    <h1>Create a New Post</h1>
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">Title:</label>
        <input v-model="title" id="title" required />
      </div>
      <div>
        <label for="body">Body:</label>
        <textarea v-model="body" id="body" required></textarea>
      </div>
      <div>
        <label for="tags">Tags (comma-separated):</label>
        <input v-model="tags" id="tags" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: { NavBar },
  data() {
    return {
      title: '',
      body: '',
      tags: ''
    };
  },
  methods: {
    async submitPost() {
      const newPost = {
        title: this.title,
        body: this.body,
        tags: this.tags.split(',').map(tag => tag.trim())
      };

      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });

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