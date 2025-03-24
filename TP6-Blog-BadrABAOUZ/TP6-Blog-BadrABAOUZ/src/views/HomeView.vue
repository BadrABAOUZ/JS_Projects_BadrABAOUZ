<template>
  <div>
    <NavBar />
    <PostList />
    <TagCloud :tags="tags" />
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import { fetchPosts } from '../composables/getPosts.js';

export default {
  components: { NavBar, PostList, TagCloud },
  data() {
    return {
      tags: []
    };
  },
  async created() {
    const posts = await fetchPosts();
    this.tags = [...new Set(posts.flatMap(post => post.tags))];
  }
};
</script>