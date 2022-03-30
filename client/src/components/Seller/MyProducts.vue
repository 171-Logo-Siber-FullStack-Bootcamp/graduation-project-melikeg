<template>
  <div>
    <NavBar />
    <!-- table listing products, delete and update operations -->
    <div class="offset-2">
      <div class="container mt-3">
        <div class="row">
          <div class="col-4 mb-3">
            <button
              type="button"
              class="btn btn-success"
              @click="goCreateProductPage()"
            >
              Create New Product
            </button>
          </div>

          <table class="table table-striped table-borderless">
            <thead class="table-success">
              <tr>
                <th scope="col">#</th>
                <th scope="col">İmage</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="products in productsList" :key="products.productid">
                <th scope="row">{{ products.productid }}</th>
                <td>
                  <img
                    data-original="{{ products.image }}"
                    v-bind:src="`/server/uploads/${products.image}`"
                    alt=""
                  />
                </td>
                <td>{{ products.productname }}</td>
                <td>{{ products.description }}</td>
                <td>{{ products.quantity }}</td>
                <td>{{ products.price }}</td>
                <td>
                  <button
                    @click="removeProduct(products.productid)"
                    type="button"
                    class="btn btn-danger"
                  >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                </td>
                <td>
                  <button
                    @click="editProduct(products.productid)"
                    type="button"
                    class="btn btn-success"
                  >
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import NavBar from "./NavBar.vue";
export default {
  name: "MyProducts",
  components: {
    NavBar,
  },
  setup() {
    const productsList = ref([]);
    const router = useRouter();

    const API_URL = "http://localhost:3000/api/products";

    onMounted(() => {
      getProducts();
    });

    async function goCreateProductPage() {
      router.push({
        name: "Create",
      });
    }

    async function getProducts() {
      const response = await fetch(API_URL);
      const json = await response.json();
      productsList.value = json;
    }

    async function removeProduct(productid) {
      const response = await fetch(`${API_URL}/${productid}`, {
        method: "DELETE",
      });
      getProducts();
      console.log(response);
    }

    async function editProduct(productid) {
      router.push({
        name: "Update",
        params: {
          id: productid,
        },
      });
    }

    return {
      productsList,
      removeProduct,
      editProduct,
      goCreateProductPage,
    };
  },
};
</script>

<style></style>
