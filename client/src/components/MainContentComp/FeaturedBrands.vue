<template>
  <div class="hero_area col-10 offset-1">
    <div class="header_section mt-3">
      <div class="mb-5">
        <div class="mt-2">
          <div class="layout_main">
            <div class="service_section slider_padding">
              <div class="service_section_2">
                <h4 class="baslik mb-5">Öne Çıkan Markalar</h4>
                <div class="row">
                  <div class="col">
                    <a href="">
                      <div class="service_box">
                        <div>
                          <img
                            class="breakfast_img"
                            src="../../../public/img/xiaomi13.png"
                          />
                        </div>
                      </div>
                    </a>
                    <h4 class="breakfast_text">Adidas</h4>
                  </div>
                  <div class="col">
                    <a href="">
                      <div class="service_box">
                        <div>
                          <img
                            class="breakfast_img"
                            src="../../../public/img/xiaomi13.png"
                          />
                        </div>
                      </div>
                    </a>
                    <h4 class="breakfast_text">Penti</h4>
                  </div>
                  <div class="col">
                    <a href=""
                      ><div class="service_box">
                        <div>
                          <img
                            class="breakfast_img"
                            src="../../../public/img/xiaomi13.png"
                          />
                        </div></div
                    ></a>
                    <h4 class="breakfast_text">Lacoste</h4>
                  </div>
                  <div class="col">
                    <a href=""
                      ><div class="service_box">
                        <div>
                          <img
                            class="breakfast_img"
                            src="../../../public/img/xiaomi13.png"
                          />
                        </div></div
                    ></a>
                    <h4 class="breakfast_text">Mavi</h4>
                  </div>
                  <div class="col">
                    <a href=""
                      ><div class="service_box">
                        <div>
                          <img
                            class="breakfast_img"
                            src="../../../public/img/xiaomi13.png"
                          />
                        </div></div
                    ></a>
                    <h4 class="breakfast_text">Puma</h4>
                  </div>
                  <div class="col">
                    <a href=""
                      ><div class="service_box">
                        <img
                          class="breakfast_img"
                          src="../../../public/img/xiaomi13.png"
                        />
                        <h4 class="breakfast_text">Pull&Bear</h4>
                      </div></a
                    >
                  </div>
                  <div class="col">
                    <a href=""
                      ><div class="service_box">
                        <div>
                          <img
                            class="breakfast_img"
                            src="../../../public/img/xiaomi13.png"
                          />
                        </div></div
                    ></a>
                    <h4 class="breakfast_text">Hummel</h4>
                  </div>
                  <div class="col">
                    <a href=""
                      ><div class="service_box">
                        <div>
                          <img
                            class="breakfast_img"
                            src="../../../public/img/xiaomi13.png"
                          />
                        </div></div
                    ></a>
                    <h4 class="breakfast_text">Xiaomi</h4>
                  </div>
                  <div class="col">
                    <a href=""
                      ><div class="service_box">
                        <img
                          class="breakfast_img"
                          src="../../../public/img/xiaomi13.png"
                        />
                        <h4 class="breakfast_text">Apple</h4>
                      </div></a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.service_section_2 {
  width: 100%;
  float: left;
  padding-top: 30px;
}

.service_box {
  display: flex !important;
  flex-direction: column;
  align-items: center;
}
.breakfast_img {
  border-radius: 50%;
  height: 60px;
  width: 60px;
  object-fit: cover;
}

/*
text-align: center;
  padding: 20px 20px 20px 20px;
  min-height: 138px;
  align-items: center;
  justify-content: center;
*/

.breakfast_text {
  width: 100%;
  font-size: 12px;
  color: #000;
  text-align: center;
  margin: 0 auto;
  padding-top: 10px;
}
.seemore_bt {
  width: 150px;
  margin: 0 auto;
  text-align: center;
  padding-top: 10px;
}

.seemore_bt a {
  width: 100%;
  float: left;
  font-size: 16px;
  color: #fefbfb;
  background-color: #8eb50b;
  text-align: center;
  padding: 10px 0px;
  font-weight: bold;
  text-transform: uppercase;
}

.seemore_bt a:hover {
  color: #fefbfb;
  background-color: #ff9800;
}

.service_section {
  width: 100%;
  float: left;
  padding-top: 0px;
}
.slider_padding {
  padding-top: 20px;
}
.layout_main {
  width: 100%;
  background-color: white;
  height: auto;
  background-size: cover;
  float: left;
}
</style>
