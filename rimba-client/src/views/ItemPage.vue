<script>
import { mapActions, mapWritableState } from "pinia";
import { useItemStore } from "../stores/item";
export default {
  name: "ItemPage",
  created() {
    this.getItems();
  },
  computed: {
    ...mapWritableState(useItemStore, ["items"]),
  },
  methods: {
    ...mapActions(useItemStore, ["getItems"]),
  },
};
</script>

<template>
  <div class="flex flex-col h-screen relative items-center">
    <div
      class="shadow-xl bg-gray-300 rounded-xl w-1/3 m-8 p-8 flex items-center flex-col"
    >
      <table class="table-auto">
        <thead>
          <tr class="text-center p-4">
            <th class="text-center p-4">Nama</th>
            <th class="text-center p-4">Unit</th>
            <th class="text-center p-4">Stok</th>
            <th class="text-center p-4">Harga Satuan</th>
            <th class="text-center p-4">Barang</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" v-bind:key="item.id">
            <td class="text-center p-4">{{ item.nama_item }}</td>
            <td class="text-center p-4">{{ item.unit }}</td>
            <td class="text-center p-4">{{ item.stok }}</td>
            <td class="text-center p-4">{{ item.harga_satuan }}</td>
            <td class="items-center p-4">
              <img class="h-32 w-32" :src="item.barang" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped></style>
