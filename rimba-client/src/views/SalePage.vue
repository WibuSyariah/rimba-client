<script>
import { mapActions, mapWritableState } from "pinia";
import { useSaleStore } from "../stores/sale";
export default {
  name: "SalePage",
  data() {
    return {
      CustomerId: null,
      code_transaksi: "",
      tanggal_transaksi: "",
      ItemIds: "",
      qty: "",
    };
  },
  created() {
    this.getSales();
  },
  computed: {
    ...mapWritableState(useSaleStore, ["sales"]),
  },
  methods: {
    ...mapActions(useSaleStore, ["getSales", "createSale"]),

    async createSaleHandler() {
      try {
        const response = await this.createSale({
          CustomerId: this.CustomerId,
          code_transaksi: this.code_transaksi,
          tanggal_transaksi: this.tanggal_transaksi,
          ItemIds: this.ItemIds,
          qty: this.qty,
        });

        this.getSales();

        this.$toast.success("Sale Created", {
          position: "top-right",
          duration: 1500,
        });

        this.CustomerId = null;
        this.code_transaksi = "";
        this.tanggal_transaksi = "";
        this.ItemIds = "";
        this.qty = "";
      } catch (error) {
        this.$toast.error(error.response.data.message, {
          position: "top-right",
          duration: 1500,
        });
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-col h-screen relative items-center">
    <div
      class="shadow-xl bg-gray-300 rounded-xl w-fit m-8 p-8 flex items-center flex-col"
    >
      <table class="table-auto">
        <thead>
          <tr class="text-center p-4">
            <th class="text-center p-4">Code Transaksi</th>
            <th class="text-center p-4">Tanggal Transaksi</th>
            <th class="text-center p-4">Nama Customer</th>
            <th class="text-center p-4">Id Customer</th>
            <th class="text-center p-4">Item Ids</th>
            <th class="text-center p-4">Quantity</th>
            <th class="text-center p-4">Total Diskon</th>
            <th class="text-center p-4">Total Harga</th>
            <th class="text-center p-4">Total Bayar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sale in sales" v-bind:key="sale.id">
            <td class="text-center p-4">{{ sale.code_transaksi }}</td>
            <td class="text-center p-4">{{ sale.tanggal_transaksi }}</td>
            <td class="text-center p-4">{{ sale.Customer.nama }}</td>
            <td class="text-center p-4">{{ sale.CustomerId }}</td>
            <td class="text-center p-4">{{ sale.ItemIds }}</td>
            <td class="text-center p-4">{{ sale.qty }}</td>
            <td class="text-center p-4">{{ sale.total_diskon }}</td>
            <td class="text-center p-4">{{ sale.total_harga }}</td>
            <td class="text-center p-4">{{ sale.total_bayar }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="shadow-xl bg-gray-300 rounded-xl w-fit m-8 p-8 flex items-center flex-col"
    >
      <form
        @submit.prevent="createSaleHandler"
        class="flex flex-col items-center"
      >
        <input
          v-model="CustomerId"
          class="p-2 m-2"
          type="number"
          placeholder="CustomerId"
        />
        <input
          v-model="code_transaksi"
          class="p-2 m-2"
          type="text"
          placeholder="Code Transaksi"
        />
        <input
          v-model="tanggal_transaksi"
          class="p-2 m-2"
          type="date"
          placeholder="Tanggal Transaksi"
        />
        <label class="text-center text-wrap p-2 m-2"
          >PENTING ItemIds dan Quantity harus berurutan menurut Item dan
          Quantity masing masing, pisahkan tiap Item dan quantity dengan
          koma(,)</label
        >
        <div class="w-fit h-fit flex flex-col items-center justify center">
          <input
            v-model="ItemIds"
            class="p-2 m-2"
            type="text"
            placeholder="ItemIds, ex: 1,2,3"
          />
          <input
            v-model="qty"
            class="p-2 m-2"
            type="text"
            placeholder="Quantity, ex:3,5,7"
          />
        </div>
        <button
          class="p-2 m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
