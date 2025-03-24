<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body.substring(0, 50) }}...</p>
    <div>
      <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <router-link :to="`/post/${post.id}`">Read More</router-link>
    <button @click="confirmDelete(post.id)">Delete</button>
    <router-link :to="`/edit-post/${post.id}`">
      <button>Edit</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    confirmDelete(id) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.$emit('delete', id);
      }
    }
  }
};
</script>

<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
.tag {
  margin-right: 0.5rem;
  background-color: #f4f4f4;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}
</style>