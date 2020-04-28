<template>
  <div class="container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  height: auto;
  background-color: #363636;
}

.container {
  width: auto;
  margin: 0 auto;
}
</style>
