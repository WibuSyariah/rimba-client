import { defineStore } from "pinia";
import axios from "axios";

let baseUrl = "http://localhost:3000";

export const useSaleStore = defineStore({
  id: "saleStore",
  state: () => ({
    sales: [],
  }),
  actions: {
    async getSales() {
      try {
        let response = await axios.get(`${baseUrl}/sales`);
        this.sales = response.data.Sales;
        console.log(this.sales);
      } catch (error) {
        console.log(error);
        this.$toast.error("Something went wrong", {
          position: "top-right",
          duration: 3000,
        });
      }
    },
    createSale(sale) {
      return axios.post(`${baseUrl}/sales`, sale);
    },
  },
});
