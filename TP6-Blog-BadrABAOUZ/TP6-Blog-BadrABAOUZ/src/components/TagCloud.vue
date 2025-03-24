<template>
  <div>
    <h3>Tags</h3>
    <div>
      <router-link
        v-for="tag in tags"
        :key="tag"
        :to="`/tags/${tag}`"
        class="tag"
      >
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tags']
};
</script>

<style scoped>
.tag {
  margin-right: 0.5rem;
  background-color: #f4f4f4;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  text-decoration: none;
}
</style>