<template>
  <div>
    <h1>Blog Posts</h1>
    <LoadingSpinner v-if="loading" />
    <p v-if="error" class="error">Failed to load posts. Please try again later.</p>
    <SinglePost
      v-for="post in posts"
      v-else
      :key="post.id"
      :post="post"
      @delete="deletePost"
    />
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import { fetchPosts } from '../composables/getPosts.js';

export default {
  components: { SinglePost, LoadingSpinner },
  data() {
    return {
      posts: [],
      loading: true,
      error: false
    };
  },
  async created() {
    try {
      this.posts = await fetchPosts();
    } catch (error) {
      this.error = true;
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async deletePost(id) {
      await fetch(`http://localhost:3000/posts/${id}`, { method: 'DELETE' });
      this.posts = this.posts.filter(post => post.id !== id);
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>