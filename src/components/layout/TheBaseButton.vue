
<template>
  <button class="button" 
  :class="{ hovered: isHovered }" 
  @mouseover="handleMouse(true)" 
  @mouseout="handleMouse(false)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
    };
  },
  methods: {
    handleMouse(isHovered) {
      this.isHovered = isHovered;
    },
  },
};
</script>

<style scoped>
.button {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 106, 255);
  color: rgb(0, 106, 255);
  border-radius: 4px;
  padding: 9px 16px;
  font-weight: 700;
  transition: all 0.3s ease;
  outline: transparent;
}
.button.hovered {
  background-color: rgb(0, 106, 255);
  cursor: pointer;
  color: rgb(255, 255, 255);
}
</style>
