import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage.vue";
import AboutUs from "../components/AboutusPage.vue";
import Products from "../components/ProductPage.vue";
import Contact from "../components/ContactPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: AboutUs },
  { path: "/products", component: Products },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
