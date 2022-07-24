import { createRouter, createWebHistory } from "vue-router";
import ItemPage from "../views/ItemPage.vue";
import CustomerPage from "../views/CustomerPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: HomeView,
    // },
    {
      path: "/",
      name: "item",
      component: ItemPage,
    },
    {
      path: "/items",
      name: "item",
      component: ItemPage,
    },
    {
      path: "/customers",
      name: "customer",
      component: CustomerPage,
    },
  ],
});

export default router;
