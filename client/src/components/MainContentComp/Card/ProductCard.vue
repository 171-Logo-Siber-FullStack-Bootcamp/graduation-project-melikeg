<template>
  <div class="col-sm-6 col-md-3 col-lg-2">
    <div v-for="products in productsList" :key="products.productid" class="box">
      <div class="img-box rads">
        <img src="../../../../public/img/p1.png" alt="product-image" />
        <!--
          <a href="" class="add_cart_btn">
          <span> Add To Cart </span>
        </a>
        -->
      </div>
      <div class="detail-box">
        <h5>{{ products.productname }}</h5>
        <div class="product_info">
          <h5><span>₺</span>{{ products.price }}</h5>
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
