import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import("../components/MainContentComp/DetailProduct.vue"),
  },
  {
    path: "/shoppingbag",
    name: "MyOrders",
    component: () => import("../components/MainContentComp/MyOrders.vue"),
  },
  {
    path: "/sellerpanel",
    name: "sellerDashboard",
    component: () => import("../components/Seller/MyProducts.vue"),
  },
  {
    path: "/sellerpanel/create",
    name: "Create",
    component: () => import("../components/Seller/CreateProduct.vue"),
  },
  {
    path: "/sellerpanel/update/:id",
    name: "Update",
    component: () => import("../components/Seller/UpdateProduct.vue"),
  },
  {
    path: "/sellerpanel/productlist",
    name: "ProductList",
    component: () => import("../components/Seller/MyProducts.vue"),
  },
  {
    path: "/sellerpanel/profile",
    name: "Profile",
    component: () => import("../components/Seller/MyProfile.vue"),
  },

  {
    path: "/sellerpanel/orders",
    name: "Orders",
    component: () => import("../components/Seller/IncomingOrders.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
