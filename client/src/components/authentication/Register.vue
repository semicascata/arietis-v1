<template>
<div class="authPage">

  <h3>New Member <i class="user plus icon"></i></h3>
  <form action="register" method="POST">
    <!-- Registering Process POST Request -->
    <div class="ui segment">
      <!-- Flash Messages -->
      <div class="ui form">
        <!-- Username Input -->
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="username" placeholder="Username">
          </div>
        </div>
        <!-- Email Input -->
        <div class="field">
          <div class="ui left icon input">
            <i class="envelope icon"></i>
            <input type="email" name="email" placeholder="Email">
          </div>
        </div>
        <!-- Password Input -->
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Create Password">
          </div>
        </div>
        <!-- Confirm Password Input -->
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password2" placeholder="Confirm Password">
          </div>
        </div>
        <button class="ui fluid submit button" type="submit">Register</button>
      </div>
    </div>
  </form>

  <div class="backButtom">
    <div class="ui fluid inverted secondary item menu">
      <router-link to="/login" class="item coolFont">
        <i class="angle left icon"></i> Login
      </router-link>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>
/* Register/Login Page */
.backButtom {
  width: 100px;
  margin: 5px auto 60px;
}

.authPage {
  font-family: 'Bree Serif', serif;
  text-align: center;
  width: 300px;
  margin: 70px auto 20px;
}

.authPage .ui.input {
  margin: 3px auto;
}

.authPage h3 {
  font-family: 'Bree Serif', serif;
  color: #faf4ff;
  font-size: 2.5rem;
}

.coolFont {
  font-family: 'Bree Serif', serif;
}
</style>
