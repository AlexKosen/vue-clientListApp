<script>
export default {};
</script>

<template>
    <div class="client-list">
      <div class="client">
        <i class='far fa-times-circle' style='font-size:16px;color:red'></i>
        <div class="img-container">
          <img src="/image/handsome-man-with-glasses.jpg" alt="Client 1" />
        </div>
        <p>Ivan Petrov</p>
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
.fa-times-circle {
 right: 0;
}

.img-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 580px;
  height: 350px;
}

.client:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
