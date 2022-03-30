<template>
  <div>
    <NavBar />
    <div class="offset-2">
      <div class="container mt-3">
        <div class="row">
          <table class="table table-striped table-borderless">
            <thead class="table-warning">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">User</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="orders in orderList" :key="orders.id">
                <th scope="row">{{ orders.id }}</th>
                <td>{{ orders.productname }}</td>
                <td>{{ orders.quantity }}</td>
                <td>-</td>
                <td>
                  <button
                    @click="removeOrders(orders.id)"
                    type="button"
                    class="btn btn-danger"
                  >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
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
import NavBar from "./NavBar.vue";
export default {
  name: "IncomingOrders",
  components: {
    NavBar,
  },
  setup() {
    const orderList = ref([]);

    const API_URL = "http://localhost:3000/api/orders";

    onMounted(() => {
      getOrders();
    });

    async function getOrders() {
      const response = await fetch(API_URL);
      const json = await response.json();
      orderList.value = json;
    }

    async function removeOrders(id) {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      getOrders();
      console.log(response);
    }
    return {
      getOrders,
      removeOrders,
    };
  },
};
</script>

<style></style>
