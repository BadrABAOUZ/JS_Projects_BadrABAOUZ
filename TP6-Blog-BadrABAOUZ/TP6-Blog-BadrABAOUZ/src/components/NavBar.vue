<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add-post">Add Post</router-link> |
    <router-link to="/edit-post">Edit Post</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
nav {
  padding: 1rem;
  background-color: #f4f4f4;
}
</style>