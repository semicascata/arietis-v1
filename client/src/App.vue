<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
    Header
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
