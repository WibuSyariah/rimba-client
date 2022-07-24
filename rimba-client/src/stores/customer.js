import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = "http://localhost:3000";

export const useCustomerStore = defineStore({
  id: "customerStore",
  state: () => ({
    customers: [],
  }),
  actions: {
    async getCustomers() {
      let response = await axios.get(`${baseUrl}/customers`);
      this.customers = response.data.Customers;
      console.log(this.customers);
    },
  },
});
