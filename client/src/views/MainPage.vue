<template>
  <HeaderContent />
  <MainContent />
  <FooterContent />
</template>

<script>
import MainContent from "../components/MainContent.vue";
import HeaderContent from "../components/HeaderContent.vue";
import FooterContent from "../components/FooterContent.vue";
export default {
  name: "MainPage",
  components: {
    HeaderContent,
    MainContent,
    FooterContent,
  },
};
</script>

<style></style>
