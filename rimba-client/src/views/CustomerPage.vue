<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";
export default {
  name: "CustomerPage",
  created() {
    this.getCustomers();
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["customers"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["getCustomers"]),
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
            <th class="text-center p-4">Id</th>
            <th class="text-center p-4">Nama</th>
            <th class="text-center p-4">Contact</th>
            <th class="text-center p-4">Email</th>
            <th class="text-center p-4">Alamat</th>
            <th class="text-center p-4">Diskon</th>
            <th class="text-center p-4">Tipe Diskon</th>
            <th class="text-center p-4">KTP</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" v-bind:key="customer.id">
            <td class="text-center p-4">{{ customer.id }}</td>
            <td class="text-center p-4">{{ customer.nama }}</td>
            <td class="text-center p-4">{{ customer.contact }}</td>
            <td class="text-center p-4">{{ customer.email }}</td>
            <td class="text-center p-4">{{ customer.alamat }}</td>
            <td class="text-center p-4">{{ customer.diskon }}</td>
            <td class="text-center p-4">{{ customer.tipe_diskon }}</td>
            <td class="items-center p-4">
              <img class="h-32 w-32" :src="customer.ktp" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
