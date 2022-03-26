<template>
  <div>
    <HeaderContent></HeaderContent>
    <router-view></router-view>
    <FooterContent></FooterContent>
  </div>
</template>

<script>
import HeaderContent from "./components/HeaderContent.vue";
import FooterContent from "./components/FooterContent.vue";
export default {
  components: {
    HeaderContent,
    FooterContent,
  },
};
</script>

<style>
@import "../public/style/style.css";
@import "../public/style/responsive.css";
</style>
