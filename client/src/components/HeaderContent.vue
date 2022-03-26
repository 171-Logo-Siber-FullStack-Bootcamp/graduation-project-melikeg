<template>
  <div class="hero_area col-10 offset-1">
    <!-- header section strats -->
    <header class="header_section mt-3">
      <HeaderTop></HeaderTop>
      <HeaderBottom></HeaderBottom>
    </header>
    <!-- end header section -->
  </div>
</template>

<script>
import HeaderTop from "./HeaderComponents/HeaderTop.vue";
import HeaderBottom from "./HeaderComponents/HeaderBottom.vue";
export default {
  components: {
    HeaderTop,
    HeaderBottom,
  },
};
</script>

<style></style>
