<template>
    <div class="user-form">
      <h2>Додати нового користувача</h2>
  
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            v-model="user.name"
            :class="{ 'invalid': !validateForm() && !user.name }"
          />
          <span v-if="!user.name" class="error-message">Це поле обов'язкове</span>
        </div>
  
        <div class="form-group">
          <label for="email">Електронна пошта:</label>
          <input
            type="email"
            id="email"
            v-model="user.email"
            :class="{ 'invalid': !validateForm() && !user.email }"
          />
          <span v-if="!user.email" class="error-message">Це поле обов'язкове</span>
        </div>
  
        <div class="form-group">
          <label for="age">Вік:</label>
          <input
            type="number"
            id="age"
            v-model="user.age"
            :class="{ 'invalid': !validateForm() && !user.age }"
          />
          <span v-if="!user.age" class="error-message">Це поле обов'язкове</span>
        </div>
  
        <button type="submit">Додати користувача</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          age: null,
        },
      };
    },
    methods: {
      validateForm() {
        return this.user.name && this.user.email && this.user.age;
      },
      submitForm() {
        if (this.validateForm()) {
          // Тут ви можете виконати додаткові дії для додавання користувача
          console.log('Додавання користувача:', this.user);
        } else {
          console.log('Форма неправильно заповнена');
        }
      },
    },
  };
  </script>
  
  <style>
  .user-form {
    max-width: 400px;
    margin: 0 auto;
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
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
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
  