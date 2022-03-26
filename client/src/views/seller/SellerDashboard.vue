<template>
  <MyProducts />
  <router-view />
</template>

<script>
import MyProducts from "../../components/Seller/MyProducts.vue";
export default {
  name: "SellerDashboard",
  components: {
    MyProducts,
  },
};
</script>

<style></style>
