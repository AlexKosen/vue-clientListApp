<script>
import { RouterLink, RouterView } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";

export default {
  components: {},
};
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterView />
    </nav>
  </div>
</template>

<style>
.wrapper {
  max-width: 1180px;
  margin: 0 auto;
  height: 100vh; 
}
</style>
