<template>
<div class="mainNavbar">
  <div class="ui inverted vertical center">
    <div class="ui container">

      <div class="ui secondary inverted menu">
        <a href="#" class="ui inverted button" style="margin-right: 10px;">
          Log In <i class="fas fa-sign-in-alt"></i>
        </a>
        <a href="#" class="ui inverted button">
          Sign Up <i class="fas fa-user-plus"></i>
        </a>
        
        <div class="right item">
          <a href="#" class="item coolFont">Contact</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
/* Navbar */
.mainNavbar {
  width: 880px;
  margin: 14px auto 15px;
}

.menu .right.item {
  font-family: 'Bree Serif', serif;
  font-size: 1rem;
  color: #faf4ff;
}

.mainNavbar .ui.inverted.button {
  margin-top: 10px;
  height: 38px;
  width: 110px;
}

.contactButtom {
  font-family: 'Bree Serif', serif;
}
</style>
