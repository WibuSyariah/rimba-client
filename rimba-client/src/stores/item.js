import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = "http://localhost:3000";

export const useItemStore = defineStore({
  id: "itemStore",
  state: () => ({
    items: [],
  }),
  actions: {
    async getItems() {
      try {
        let response = await axios.get(`${baseUrl}/items`);
        this.items = response.data.Items;
        console.log(this.items);
      } catch (error) {
        console.log(error);
        this.$toast.error("Something went wrong", {
          position: "top-right",
          duration: 3000,
        });
      }
    },
  },
});
