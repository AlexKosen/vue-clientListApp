<script>
export default {
  props: ['userItem',],

  methods: {
    closeDetails() {
      this.$emit("closeModal")
    }
  }
};
</script>

<template>
    <div class="client-list">
      <div class="client">
        <i class='fas fa-times' @click="closeDetails"></i>
        <div class="img-container">
          <img :src="userItem.avatar" alt="Client avatar" />
        </div>
        <span>Name: {{ userItem.first_name }} {{ userItem.last_name }}</span>
        <span>Email: {{ userItem.email }}</span>
        <span>Phone: </span>
        <span>Address: </span>
      </div>
    </div>
</template>

<style>
.client-list {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
}

.client {
  position: relative;
  width: 600px;
  height: 450px;
  background: linear-gradient(
    135deg,
    rgb(255, 255, 255) 0%,
    rgb(229, 229, 229) 100%
  );
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}
.fas.fa-times {
  position: absolute;
  top: 5px;
  right: 6px;
  font-size:18px;
  color:#006aff
}

.img-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  height: 300px;
}

.client:hover {
  cursor: pointer;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
