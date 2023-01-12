import { createRouter, createWebHistory } from "vue-router";
import FrontPage from "../components/FrontPage.vue";
import EachProduct from "../components/EachProduct.vue";
import CartPage from "../components/Cart/CartPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: FrontPage,
  },
  {
    path: "/home/:id",
    name: "eachProduct",
    component: EachProduct,
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
