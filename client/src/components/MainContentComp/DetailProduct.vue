<template>
  <div>
    <HeaderContent />
    <section class="container mt-3">
      <div class="row">
        <div class="col-lg-6">
          <img
            :src="'localhost:3000/api/products/' + productImage"
            alt=""
            id="myimage"
            class="offset-1 col-10 p-5"
            width="300"
          />
        </div>
        <div class="col-lg-6">
          <p>Kategori</p>
          <div class="mt-3 text-uppercase">
            <h4>{{ productName }}</h4>
          </div>
          <div class="mt-3 text-warning">
            <h2>{{ productPrice }}₺</h2>
          </div>
          <div class="row">
            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
              v-show="isShow"
            >
              Sepete Eklendi
            </div>
            <div class="col-lg-2">
              <div class="input-group me-5">
                <select
                  class="form-select"
                  id="inputGroupSelect04"
                  aria-label="Example select with button addon"
                  v-model="productQuantity"
                >
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <button
              @click="addToBag"
              v-on:click="isShow = true"
              type="button"
              class="btn btn-warning col-lg-8"
            >
              Sepete Ekle
            </button>

            <button
              @click="isActive = !isActive"
              class="btn btn-warning ms-2 col-lg-1"
            >
              <div v-if="isActive">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
              </div>
              <div v-else>
                <i class="fa fa-heart" aria-hidden="true"></i>
              </div>
            </button>
          </div>
          <div class="mt-5 txt-align pe-2">
            <p>{{ productDescription }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import HeaderContent from "../HeaderContent.vue";
export default {
  name: "DetailProduct.vue",
  components: {
    HeaderContent,
  },
  data() {
    return {
      isActive: true,
      isShow: false,
      productName: "",
      productDescription: "",
      productPrice: "",
      productImage: "",
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    async getProductById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/${this.$route.params.id}`
        );
        this.productName = response.data[0].productname;
        this.productPrice = response.data[0].price;
        this.productDescription = response.data[0].description;
        this.productImage = response.data[0].image;
      } catch (err) {
        console.log(err);
      }
    },
    async addToBag() {
      try {
        await axios.post("http://localhost:3000/api/orders", {
          productname: this.productName,
          quantity: this.productQuantity,
          price: this.productPrice,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.txt-align {
  text-align: justify;
}
.wd {
  float: left;
}
</style>
