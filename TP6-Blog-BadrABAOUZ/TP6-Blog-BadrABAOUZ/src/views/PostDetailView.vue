<template>
  <div>
    <NavBar />
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <div>
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <router-link to="/">
        <button>Back to Home</button>
      </router-link>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import { fetchPost } from '../composables/getPost.js';

export default {
  components: { NavBar },
  data() {
    return {
      post: null
    };
  },
  async created() {
    const postId = this.$route.params.id;
    this.post = await fetchPost(postId);
  }
};
</script>

<style scoped>
.tag {
  margin-right: 0.5rem;
  background-color: #f4f4f4;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
</style>