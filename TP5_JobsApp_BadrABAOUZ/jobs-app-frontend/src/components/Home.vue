<template>
  <div class="home">
    <h1>Home | About</h1>
    <p>Welcome to Your Vue.js App</p>
    <p>
      For a guide and recipes on how to configure / customize this project,
      check out the vue-cli documentation.
    </p>
    <h2>Installed CLI Plugins</h2>
    <ul>
      <li>babel</li>
      <li>router</li>
      <li>vuex</li>
      <li>eslint</li>
    </ul>
    <h2>Essential Links</h2>
    <ul>
      <li>Core Docs</li>
      <li>Forum</li>
      <li>Community Chat</li>
      <li>Twitter</li>
      <li>News</li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>vue-router</li>
      <li>vuex</li>
      <li>vue-devtools</li>
      <li>vue-loader</li>
      <li>awesome-vue</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  padding: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}
</style>
