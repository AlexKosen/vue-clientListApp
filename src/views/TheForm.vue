<script>
import { mapState, mapActions } from "pinia";
import { useUsersStore } from "../store/TheUsersStore";

export default {
  data() {
    return {
      store: useUsersStore(),
      user_id: null,
      user: {
        first_name: "",
        last_name: "",
        phone: "",
        address: "",
        avatar: "",
        email: "",
        age: null,
      },
    };
  },

  computed: {
    ...mapState(useUsersStore, ["getUserEddit"]),
  },

  methods: {
    ...mapActions(useUsersStore, ["sendUserData", "editUserData"]),

    validateForm() {
      return (
        this.user.first_name.length >= 3 &&
        this.user.last_name.length >= 3 &&
        this.user.phone.length >= 10 &&
        this.user.address.length >= 3 &&
        this.user.avatar.length >= 3 &&
        this.user.email.includes("@") &&
        this.user.age !== null
      );
    },

    cleanerUser() {
      this.user_id = null
      this.store.userItem = "";
      return (this.user = {
        first_name: "",
        last_name: "",
        phone: "",
        address: "",
        avatar: "",
        email: "",
        age: null,
      });
    },

    submitForm() {
      if (this.validateForm()) {
        this.sendUserData(this.user);
        this.cleanerUser();
      } else {
        alert("Form is not corrected!");
      }
    },

    updateUser() {
      if (this.validateForm()) {
      this.editUserData(this.user, this.user_id)
      this.cleanerUser();
    } else {
      alert("Form is not corrected!");
    }
    },

    canceled() {
      this.$router.go(-1);
      this.cleanerUser();
    },
  },

  mounted() {
    if (this.getUserEddit) {
      this.user_id = this.getUserEddit?.id ?? "";
      this.user.first_name = this.getUserEddit?.first_name ?? "";
      this.user.last_name = this.getUserEddit?.last_name ?? "";
      this.user.phone = this.getUserEddit?.phone ?? "";
      this.user.address = this.getUserEddit?.address ?? "";
      this.user.avatar = this.getUserEddit?.avatar ?? "";
      this.user.email = this.getUserEddit?.email ?? "";
      this.user.age = this.getUserEddit?.age ?? null;
    };

    window.addEventListener("popstate", this.cleanerUser);
  },
};
</script>
<template>
  <div class="user-form">
    <h2 v-if="!this.getUserEddit ? true : false">Add new user</h2>
    <h2 v-if="this.getUserEddit ? true : false">Eddit user</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          v-model="user.first_name"
          :class="{ invalid: !validateForm() && !user.first_name }"
        />
        <span v-if="!user.first_name" class="error-message"
          >This field is required (min 3 characters)</span
        >
      </div>

      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          v-model="user.last_name"
          :class="{ invalid: !validateForm() && !user.last_name }"
        />
        <span v-if="!user.last_name" class="error-message"
          >This field is required (min 3 characters)</span
        >
      </div>

      <div class="form-group">
        <label for="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          v-model="user.phone"
          :class="{ invalid: !validateForm() && !user.phone }"
        />
        <span v-if="!user.phone" class="error-message"
          >This field is required (min 10 number)</span
        >
      </div>

      <div class="form-group">
        <label for="address">Address:</label>
        <input
          type="text"
          id="address"
          v-model="user.address"
          :class="{ invalid: !validateForm() && !user.address }"
        />
        <span v-if="!user.address" class="error-message"
          >This field is required (min 3 characters)</span
        >
      </div>

      <div class="form-group">
        <label for="avatar">Avatar URL:</label>
        <input
          type="text"
          id="avatar"
          v-model="user.avatar"
          :class="{ invalid: !validateForm() && !user.avatar }"
        />
        <span v-if="!user.avatar" class="error-message"
          >This field is required (min 3 characters)</span
        >
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
          >This field is required (must include @)</span
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
        <span v-if="!user.age" class="error-message"
          >This field is required (enter a number)</span
        >
      </div>

      <div class="btn-container">
        <button v-if="!this.getUserEddit ? true : false" type="submit">
          Add user
        </button>
        <button @click.prevent="updateUser" v-if="this.getUserEddit ? true : false">
          Eddit user
        </button>
        <button @click.prevent="canceled">Cancel</button>
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
  height: 100vh;
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
