<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

#app {
  font-family: "Noto Sans TC", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: auto;
  scroll-snap-type: y mandatory;
  max-height: 100vh;
  font-size: 1rem;
  letter-spacing: 1.25px;
  min-height: 100vh;
  background: #e6ebe0;
}

.container {
  scroll-snap-align: start;
}
</style>
