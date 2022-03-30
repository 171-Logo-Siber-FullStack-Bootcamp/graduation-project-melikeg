<template>
  <div class="container position-absolute top-50 start-50 translate-middle">
    <div class="offset-4 col-4">
      <div class="alert alert-success" role="alert" v-if="false">
        Successfully registered!
      </div>
      <h3><center>Merhaba,</center></h3>
      <p class="ms-4">Trendyol’a kayıt ol, indirimleri kaçırma!</p>
      <div class="p-5 border rounded">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              ><i class="fa fa-user me-2" aria-hidden="true"></i>Email
              address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              ><i class="fa fa-address-book-o" aria-hidden="true"></i> Name
            </label>
            <input
              type="text"
              class="form-control"
              id="addon-wrapping"
              aria-describedby="emailHelp"
              v-model="name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              ><i class="fa fa-key me-2" aria-hidden="true"></i>Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="password"
            />
          </div>
          <div class="input-group mb-3 d-flex justify-content-center">
            <div class="form-check pe-5">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="user"
                v-model="role"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                User
              </label>
            </div>
            <div class="form-check ps-5">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                v-model="role"
                value="seller"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Seller
              </label>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button
              @click="signup"
              type="submit"
              class="btn btn-outline-warning col-4"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      role: "",
    };
  },
  methods: {
    async signup() {
      try {
        await axios.post("http://localhost:3000/api/signup", {
          email: this.email,
          fullname: this.name,
          password: this.password,
          role: this.role,
        });
        this.email = "";
        this.name = "";
        this.password = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.form-check-input:checked {
  background-color: #ffc107;
}

.form-check-inputchecked {
  background-color: #ffc107;
}
</style>
