import { defineStore } from "pinia";
import axios from "axios";

export const useUsersStore = defineStore("users", {
  state: () => ({
    userList: null,
    url: "https://reqres.in",
    totalPage: null,
    userItem: ""
  }),

  getters: {
    usersData: (state) => state.userList,
    totalPages: (state) => state.totalPage,
    getUserEddit: (state) => state.userItem
  },

  actions: {
    async getUserList(n) {
      try {
        const users = await axios.get(`${this.url}/api/users?page=${n}`);
        this.userList = users.data.data;
        this.totalPage = users.data.total_pages;
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser(userId) {
      try {
        const response = await axios.delete(`${this.url}/api/users/${userId}`);
        alert("Користувач успішно видалений");
        console.log("Користувач успішно видалений");
      } catch (error) {
        console.error("Помилка при видаленні користувача:", error);
      }
    },

    async sendUserData(newUser) {
      try {
        const response = await axios.post(`${this.url}/api/users/`, newUser);
        alert(
          `User with successfully added!`
        );
      } catch {
        console.error("Помилка при додаванні нового користувача:", error);
      }
    },

    async editUserData(user, id) {
      try {
        const response = await axios.put(`${this.url}/api/users/${id}`, user);
        alert(
          `User successfully updated!`
        );
      } catch {
        console.error("Помилка при оновленні користувача:", error);
      }
    },
  },
});
