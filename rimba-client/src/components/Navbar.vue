<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div class="flex bg-yellow-300 shadow-xl justify-around">
    <router-link to="/items">
      <button class="p-4 hover:bg-yellow-100">Item</button>
    </router-link>
    <router-link to="/customers">
      <button class="p-4 hover:bg-yellow-100">Customer</button>
    </router-link>
    <router-link to="/sales">
      <button class="p-4 hover:bg-yellow-100">Sales</button>
    </router-link>
  </div>
</template>
