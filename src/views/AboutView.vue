<script>

export default {

}
</script>

<template>
  <body>
    <div class="client-list">
      <div class="client">
        <div class="img-container">
          <img src="/image/handsome-man-with-glasses.jpg" alt="Client 1" />
        </div>
        <p>Ivan Petrov</p>
      </div>
      <div class="client">
        <div class="img-container">
          <img
            src="/image/wepik-export-20240129121943gNjv.jpeg"
            alt="Client 2"
          />
        </div>
      </div>
      <div class="client">
        <div class="img-container">
          <img src="/image/handsome-man-with-glasses.jpg" alt="Client 3" />
        </div>
      </div>
      <div class="client">
        <div class="img-container">
          <img
            src="/image/wepik-export-20240129121943gNjv.jpeg"
            alt="Client 4"
          />
        </div>
      </div>
    </div>
  </body>
</template>

<style>
body {
   /* background: linear-gradient(135deg,  rgb(181,189,200) 0%,rgb(130,140,149) 36%,rgb(40,52,59) 100%); */
}

.client-list {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.client {
  width: 400px;
  height: 300px;
  background: linear-gradient(135deg,  rgb(255,255,255) 0%,rgb(229,229,229) 100%);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.img-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 390px;
  height: 200px;
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
