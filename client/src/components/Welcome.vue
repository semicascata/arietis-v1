<template>
<div class="ui container">
  <div class="ui inverted column">
    <h1>ARIETIS - O. C.</h1>
  </div>

  <div class="introLax">
    <div class="parallaxEffect">
    </div>
  </div>

  <div class="postParallax">
    <h3>Post Parallax</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt. Leo vel fringilla est ullamcorper eget. Arcu cursus vitae congue mauris rhoncus
      aenean vel elit. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa
      tincidunt. Leo vel fringilla est ullamcorper eget. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
    </p>
  </div>

</div>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style scoped>
.ui.container {
  width: 100%;
  margin: 0 auto;
}

.ui.inverted.column {
  text-align: center;
}

h1 {
  font-family: 'Bree Serif', serif;
  color: #eb4559;
  font-size: 6rem;
  margin: 80px auto;
}

.introLax {
  margin: 40px 0 60px;
}

.parallaxEffect {
  width: 100%;
  height: 300px;
  /* Parallax Scrolling */
  background-image: url("../assets/images/pathologic2.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.postParallax {
  margin: 20px auto;
  text-align: center;
}

.postParallax h3 {
  font-family: 'Pacifico', cursive;
  color: #eb4559;
  font-size: 2rem;
  margin: 0 auto 20px;
}

.postParallax p {
  width: 420px;
  margin: 10px auto 100px;
  text-align: justify;
  font-family: 'Slabo 27px', serif;
  font-size: 1rem;
  color: #faf4ff;
}
</style>
