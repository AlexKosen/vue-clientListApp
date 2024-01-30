<script>
import { mapState, mapActions } from "pinia";
import { useUsersStore } from "../store/TheUsersStore";


export default {
  
  data() {
    return {
      user: {
        name: "",
        email: "",
        age: null,
      },
    };
  },
  methods: {
    ...mapActions(useUsersStore, ["sendUserData"]),
    validateForm() {
      return this.user.name && this.user.email && this.user.age;
    },
    submitForm() {
      if (this.validateForm()) {
        this.sendUserData(this.user)
        this.user.name = '';
        this.user.email = '';
        this.user.age = null;
      } else {
        console.log("Форма неправильно заповнена");
      }
    },
    cancel() {
      this.$router.go(-1);
    }
  },
};
</script>

<template>
  <div class="user-form">
    <h2>Add new user</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          v-model="user.name"
          :class="{ invalid: !validateForm() && !user.name }"
        />
        <span v-if="!user.name" class="error-message">This field is required</span>
      </div>

      <div class="form-group">
        <label for="email">E-mail:</label>
        <input
          type="email"
          id="email"
          v-model="user.email"
          :class="{ invalid: !validateForm() && !user.email }"
        />
        <span v-if="!user.email" class="error-message"
          >This field is required</span
        >
      </div>

      <div class="form-group">
        <label for="age">Age:</label>
        <input
          type="number"
          id="age"
          v-model="user.age"
          :class="{ invalid: !validateForm() && !user.age }"
        />
        <span v-if="!user.age" class="error-message">This field is required</span>
      </div>
      <div class="btn-container">
        <button type="submit">Add user</button>
        <button @click.prevent="cancel">Cancel</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.user-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  height: 100vh; /* Наступні три рядки важливі для центрування по вертикалі */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.btn-container {
display: flex;
justify-content: space-between;
}

button {
  background-color: rgb(0, 106, 255);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgb(0, 103, 250);
}

.invalid {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
