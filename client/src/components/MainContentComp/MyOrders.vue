<template>
  <div>
    <HeaderContent />
    <div class="container">
      <div class="row m-5">
        <h3 class="text-warning">Sepetim</h3>
        <div class="col-lg-7" v-for="orders in ordersList" :key="orders.id">
          <!-- Order Card Start -->
          <div class="row card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="'/server/uploads/'"
                  class="img-fluid rounded-start p-4"
                  alt=""
                  width="200px"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <div class="row">
                    <h5 class="card-title mt-2 col-lg-10">
                      {{ orders.productname }}
                    </h5>
                    <button
                      @click="removeOrders(orders.id)"
                      type="button"
                      class="btn btn-link black col-lg-2"
                    >
                      <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                  <p class="card-text fw-bold mt-3 text-warning">
                    {{ orders.price }}₺
                  </p>
                  <input
                    type="number"
                    name="points"
                    step="1"
                    v-model="orders.quantity"
                    min="1"
                    max="5"
                  />
                  <!--<p class="card-text mt-3">Adet : 1</p>-->
                </div>
              </div>
            </div>
          </div>
          <!-- Order Card End -->
        </div>
        <!-- Payment Start -->
        <div class="col-lg-4 mt-0 d-md-block sidebar collapse position-sticky">
          <div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">ÖDEME</h5>
                <hr />
                <div class="card-text">
                  <a href="#" class="text-warning">
                    <i class="fa fa-bolt" aria-hidden="true"></i> 2. Ürüne 5 TL
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    indirim
                  </a>
                  <p class="mt-3">{{ sumOfPrice }}: ₺</p>

                  <button type="button" class="btn btn-light">
                    <i class="fa fa-ticket" aria-hidden="true"></i> İndirim Kodu
                  </button>
                  <br />
                  <p class="mt-3 badge bg-success text-wrap">KARGO BEDAVA</p>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="button" class="btn btn-warning">
                    Sepeti Onayla
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Payment End -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import HeaderContent from "../HeaderContent.vue";
export default {
  components: {
    HeaderContent,
  },
  setup() {
    const ordersList = ref([]);
    const API_URL = "http://localhost:3000/api/orders";

    onMounted(() => {
      getOrders();
    });

    async function getOrders() {
      const response = await fetch(API_URL);
      const json = await response.json();
      ordersList.value = json;
    }

    async function removeOrders(id) {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      getOrders();
      console.log(response);
    }

    return {
      ordersList,
      removeOrders,
    };
  },
  computed: {
    sumOfPrice() {
      return this.ordersList.reduce((sum, orders) => {
        return (sum += parseFloat(orders.price) * parseFloat(orders.quantity));
      }, 0);
    },
  },
};
</script>

<style>
.black {
  color: grey;
}
.btn-link:hover {
  color: black;
}
</style>
