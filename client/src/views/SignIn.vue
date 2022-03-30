<template>
  <div class="container position-absolute top-50 start-50 translate-middle">
    <div class="offset-4 col-lg-4 col-md-3 col-sm-2">
      <div class="alert alert-success" role="alert" v-if="msg">
        {{ msg }}
      </div>
      <h3><center>Merhaba,</center></h3>
      <p class="ms-4">Trendyol’a giriş yap, indirimleri kaçırma!</p>
      <div class="p-5 border rounded">
        <form @submit.prevent="signin">
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
                checked
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
              @click="signin"
              ype="submit"
              class="btn btn-outline-warning col-4"
            >
              SIGN IN
            </button>
          </div>
          <p class="mt-4">
            Dont have an account? Click
            <router-link class="text-warning" to="/signup"> here </router-link>
            to sign up
          </p>
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
      password: "",
      role: "",
      msg: "",
    };
  },
  methods: {
    //@click="signin"
    async signin() {
      /*try { */
      try {
        const res = await axios.post("http://localhost:3000/api/signin", {
          email: this.email,
          password: this.password,
          role: this.role,
        });
        if (res.data.NotFound) {
          console.log(res.data.message);
        } else {
          sessionStorage.setItem("session", JSON.stringify(res.data));
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error.res.data.message);
      }

      /* console.log(res.data);
      if (res.data.accessToken) {
        localStorage.setItem("token", JSON.stringify(res.data));
        this.email = "";
        this.password = "";
        this.$router.push("/");
      } else {
        console.log("Error", res);
      }*/
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
