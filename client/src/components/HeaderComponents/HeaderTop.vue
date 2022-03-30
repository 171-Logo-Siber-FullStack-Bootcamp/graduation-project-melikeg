<template>
  <div class="header_top">
    <div class="container-fluid">
      <div class="top_nav_container col-12">
        <a class="navbar-brand col-2" href="/">
          <span> MINICS </span>
        </a>
        <from class="search_form col-6">
          <input
            type="text"
            class="form-control"
            placeholder="Ürün, kategori, marka ara..."
          />
          <button class="" type="submit">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </from>
        <div class="user_option_box col-3">
          <button
            type="button"
            class="btn btn-outline-warning"
            @click="goToSignIn()"
          >
            <i class="fa fa-user" aria-hidden="true"></i>
            <span> Hesabım </span>
          </button>
          <div class="col-1"></div>
          <button
            type="button"
            class="btn btn-outline-warning"
            @click="goToCart()"
          >
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <span> Sepetim </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    async function goToSignIn() {
      router.push({
        name: "SignIn",
      });
    }

    async function goToCart() {
      router.push({
        name: "MyOrders",
      });
    }

    return {
      goToSignIn,
      goToCart,
    };
  },
};
</script>

<style></style>
