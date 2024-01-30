<script>
import { RouterLink, RouterView } from "vue-router";
import TheAddUserButton from "./layout/TheAddUserButton.vue";

export default {
  components: {
    TheAddUserButton
  },
};
</script>

<template>
  <div class="wrapper">
    <TheAddUserButton/>
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
