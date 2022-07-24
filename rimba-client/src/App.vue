<script>
import { RouterLink, RouterView } from "vue-router";

import ItemPage from "./views/ItemPage.vue";
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<template>
  <Navbar></Navbar>
  <router-view />
</template>

<style></style>
