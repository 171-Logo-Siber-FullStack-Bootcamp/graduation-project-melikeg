<template>
  <div>
    <NavBar />
    <!-- updating products -->
    <div class="container my-5">
      <div class="col-8 offset-2">
        <form>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label"
              >Product Name</label
            >
            <input
              type="text"
              class="form-control"
              name="title"
              v-model="productName"
              id="formGroupExampleInput"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label"
              >Description</label
            >
            <textarea
              v-model="productDescription"
              class="form-control"
              rows="6"
              aria-label="With textarea"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label"
              >Quantity</label
            >
            <input
              v-model="productQuantity"
              type="text"
              class="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Price</label>
            <input
              v-model="productPrice"
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <!--
        <div class="form-group mb-3">
          <input type="file" name="image" class="form-control-file rounded-0" />
        </div>
-->
          <button @click="updateProduct" type="submit" class="btn btn-primary">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import axios from "axios";
//import { useRoute } from "vue-router";
export default {
  name: "UpdateProduct.vue",
  components: {
    NavBar,
  },
  data() {
    return {
      productName: "",
      productDescription: "",
      productPrice: "",
      productQuantity: "",
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    // Get Product By Id
    async getProductById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/${this.$route.params.id}`
        );
        this.productName = response.data[0].productname;
        this.productDescription = response.data[0].description;
        this.productQuantity = response.data[0].quantity;
        this.productPrice = response.data[0].price;
      } catch (err) {
        console.log(err);
      }
    },

    // Update product
    async updateProduct() {
      try {
        await axios.put(
          `http://localhost:3000/api/products/${this.$route.params.id}`,
          {
            productname: this.productName,
            description: this.productDescription,
            quantity: this.productQuantity,
            price: this.productPrice,
          }
        );
        this.productName = "";
        this.productDescription = "";
        this.productQuantity = "";
        this.productPrice = "";
        this.$router.push("/seller");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
