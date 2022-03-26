<template>
  <!-- product section -->
  <section class="product_section layout_padding">
    <div class="col-10 offset-1">
      <h4 class="baslik">Yeni Ürünleri Keşfet</h4>
      <div class="row">
        <!-- Product card model -->
        <div
          v-for="products in productsList"
          :key="products.productid"
          class="col-sm-6 col-md-3 col-lg-2"
        >
          <div class="box">
            <div class="img-box rads">
              <img src="../../../public/img/p1.png" alt="" />
            </div>
            <div class="detail-box">
              <h5 class="product-name">{{ products.productname }}</h5>
              <div class="product_info">
                <h5 class="product-price">
                  <span>₺</span>{{ products.price }}
                </h5>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Product card model end -->
      </div>
      <div class="btn_box">
        <a href="" class="view_more-link"> View More </a>
      </div>
    </div>
  </section>

  <!-- end product section -->
</template>

<script>
import { ref, onMounted } from "vue";
//import { useRouter } from 'vue-router';

export default {
  setup() {
    const productsList = ref([]);

    const API_URL = "http://localhost:3000/api/products";

    onMounted(() => {
      getProducts();
    });

    async function getProducts() {
      const response = await fetch(API_URL);
      const json = await response.json();
      productsList.value = json;
    }
    return {
      productsList,
    };
  },
};
</script>

<style></style>
