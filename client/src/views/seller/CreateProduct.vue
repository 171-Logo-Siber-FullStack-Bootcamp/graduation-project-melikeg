<template>
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
          <label for="formGroupExampleInput" class="form-label">Quantity</label>
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
        <button @click="addProduct" type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productName: "",
      productDescription: "",
      productQuantity: "",
      productPrice: "",
    };
  },
  methods: {
    goSellerDashboard() {
      this.$router.push("/seller");
    },
    // Create New product
    async addProduct() {
      try {
        await axios.post("http://localhost:3000/api/products", {
          productname: this.productName,
          description: this.productDescription,
          quantity: this.productQuantity,
          price: this.productPrice,
        });
        this.productName = "";
        this.productDescription = "";
        this.productQuantity = "";
        this.productPrice = "";
        this.goSellerDashboard();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
