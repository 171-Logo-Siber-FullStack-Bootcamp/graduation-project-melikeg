<template>
  <div>
    <nav class="navbar navbar-success sticky-top bg-success">
      <div class="container-fluid">
        <a class="navbar-brand text-light">Navbar</a>
        <form class="d-flex">
          <button class="btn btn-outline-light" type="submit">LOGOUT</button>
        </form>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="position-sticky pt-3">
            <ul class="nav flex-column mt-3 ms-3">
              <li class="nav-item mb-2">
                <button
                  @click="goToProfile()"
                  type="button"
                  class="btn nav-link text-success"
                >
                  <i class="fa fa-user me-2" aria-hidden="true"></i>
                  Profile
                </button>
              </li>
              <li class="nav-item mb-2">
                <button
                  @click="goToProducts()"
                  type="button"
                  class="btn nav-link text-success"
                >
                  <i class="fa fa-shopping-cart me-2" aria-hidden="true"></i>
                  Products
                </button>
              </li>
              <li class="nav-item mb-2">
                <button
                  @click="goToOrders()"
                  type="button"
                  class="btn nav-link text-success"
                >
                  <i class="fa fa-truck me-2" aria-hidden="true"></i>Orders
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div class="offset-2 col-lg-9">
          <router-view />
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
    /*
    onMounted(() => {
      getProducts();
    });
*/
    async function goToProducts() {
      router.push({
        name: "ProductList",
      });
    }
    async function goToProfile() {
      router.push({
        name: "Profile",
      });
    }
    async function goToOrders() {
      router.push({
        name: "Orders",
      });
    }

    return {
      goToProducts,
      goToProfile,
      goToOrders,
    };
  },
};
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgb(0 0 0 / 10%);
}
</style>
