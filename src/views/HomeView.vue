<script>
import { mapState, mapActions } from "pinia";
import { useUsersStore } from "../store/TheUsersStore";

import TheUserItem from "@/components/TheUserItem.vue";
import TheBaseButton from "@/components/layout/TheBaseButton.vue";

export default {
  components: {
    TheUserItem,
    TheBaseButton,
  },

  data() {
    return {
      hoveredButtons: {},
      currentPage: 1,
    };
  },

  computed: {
    ...mapState(useUsersStore, ["usersData", "totalPages"]),
  },

  methods: {
    ...mapActions(useUsersStore, ["getUserList"]),

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
    }
  },

  mounted() {
    this.getUserList(this.currentPage);
  },
};
</script>

<template>
  <h1 class="title">User List</h1>

  <ul class="user-list">
    <li class="user-list-item" v-for="user in usersData" :key="user.id">
      <TheUserItem :user_data="user" />
      <div class="user-actions">
        <TheBaseButton
          class="button-list"
          @mouseover="() => handleMouse('userDetails', true)"
          @mouseout="() => handleMouse('userDetails', false)"
        >
          User Details
        </TheBaseButton>

        <TheBaseButton
        class="button-list"
          @mouseover="() => handleMouse('delete', true)"
          @mouseout="() => handleMouse('delete', false)"
        >
          Delete
        </TheBaseButton>
      </div>
    </li>
  </ul>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">
      <i class="fa">&#xf100;</i>
    </button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      <i class="fa">&#xf101;</i>
    </button>
  </div>
</template>

<style>
.title {
  text-align: center;
  color: gray;
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
.pagination button {
  border: none;
}
.fa {
  font-size: 16px;
  color: gray;
}
</style>
