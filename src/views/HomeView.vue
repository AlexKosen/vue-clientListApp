<script>
import { mapState, mapActions } from "pinia";
import { useUsersStore } from "../store/TheUsersStore";

import TheUserItem from "@/components/TheUserItem.vue";
import TheBaseButton from "@/components/layout/TheBaseButton.vue";
import TheModalWindow from "@/views/TheModalWindow.vue"

export default {
  components: {
    TheUserItem,
    TheBaseButton,
    TheModalWindow
  },

  data() {
    return {
      hoveredButtons: {},
      currentPage: 1,
      showModal: false,
      userItem: {}
    };
  },

  computed: {
    ...mapState(useUsersStore, ["usersData", "totalPages"]),
  },

  methods: {
    ...mapActions(useUsersStore, ["getUserList", "deleteUser"]),

    handleMouse(button, userId, isHovered) {
      this.hoveredButtons[userId + button] = isHovered;
    },

    nextPage() {
      if(this.totalPages >= this.currentPage) {
        this.currentPage ++
        this.getUserList(this.currentPage)
      }
    },
    prevPage() {
      if(this.currentPage > 1) {
        this.currentPage = this.currentPage -1
        this.getUserList(this.currentPage)
      }
    },
    deleteHundle(userId) {
      this.deleteUser(userId);
      this.getUserList(this.currentPage)
      console.log("delete", userId);
    },

    showDetails(user) {
      this.showModal = true; 
      this.userItem = user
    },
    closeDetails() {
      this.showModal = false; 
    },
  },

  mounted() {
    this.getUserList(this.currentPage);
  },
};
</script>

<template>
  <TheModalWindow 
  v-if="showModal"
  :userItem = userItem
  @closeModal="closeDetails"
  />
  <h1 class="title">User List</h1>

  <ul class="user-list">
    <li class="user-list-item" v-for="user in usersData" :key="user.id">
      <TheUserItem :user_data="user" />
      <div class="user-actions">
        <TheBaseButton
          class="button-list"
          @mouseover="() => handleMouse('userDetails', true)"
          @mouseout="() => handleMouse('userDetails', false)"
          @click="() => showDetails(user)"
        >
          User Details
        </TheBaseButton>

        <TheBaseButton
        class="button-list"
          @mouseover="() => handleMouse('delete', true)"
          @mouseout="() => handleMouse('delete', false)"
          @click="() => deleteHundle(user.id)"
        >
          Delete
        </TheBaseButton>
      </div>
    </li>
  </ul>
  <div class="pagination">
    <button class="pagination-btn" @click="prevPage" :disabled="currentPage === 1">
      <i class="fa">&#xf100;</i>
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button class="pagination-btn" @click="nextPage" :disabled="currentPage === totalPages">
      <i class="fa">&#xf101;</i>
    </button>
  </div>
</template>

<style>
.title {
  text-align: center;
  color: gray;
  padding: 20px 0;
}
.user-list {
  list-style-type: none;
  padding: 0;
}

.user-list-item {
  display: flex;
  background: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
  margin-bottom: 10px;
}

.user-list-item:hover {
  background: #e9ecee;
  transition: 0.3s ease;
}
.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: bold;
  color: gray;
}

.user-email {
  color: gray;
}

.user-actions {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.user-action-button {
  margin-left: 10px;
}
.button-list {
  margin-left: 8px;
}

.pagination {
  display: flex;
  justify-content: space-around;
  max-width: 150px;
  margin: 0 auto;
  padding:20px 0;
}
.pagination-btn {
  border: 1px solid rgb(0, 106, 255);
  transition: all 0.3s ease;
  outline: transparent;
  border-radius: 3px;
  padding: 0 4px;
}
.pagination-btn:hover {
  background-color:rgb(0, 106, 255);
}

.fa {
  font-size: 16px;
  color: rgb(0, 106, 255);
}
.fa:hover {

  color: #fff;
}
</style>
