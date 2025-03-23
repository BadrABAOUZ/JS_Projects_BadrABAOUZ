import Vue from "vue";
import Router from "vue-router";
import HomePage from "../components/Home.vue"; // Updated import

Vue.use(Router); // Use the Router plugin

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage", // Updated name
      component: HomePage, // Updated component
    },
  ],
});
