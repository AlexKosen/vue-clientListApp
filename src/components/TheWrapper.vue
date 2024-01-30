<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {},
};
</script>

<template>
  <div class="wrapper">
    <nav>
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
