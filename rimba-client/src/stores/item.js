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
      let response = await axios.get(`${baseUrl}/items`);
      this.items = response.data.Items;
      console.log(this.items);
    },
  },
});
