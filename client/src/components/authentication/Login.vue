<template>
<div class="authPage">

  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <div class="content">
        <h3>Login <i class="fas fa-sign-in-alt"></i></h3>
        <br>
      </div>
      <form class="ui form">
        <div class="ui segment">
          <!-- Flash Messages -->
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="username" placeholder="Username">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="Password">
            </div>
          </div>
          <button class="ui fluid large submit button" type="submit">Login</button>
        </div>
      </form>
      <div class="ui message">
        New member? <router-link to="register">Sign Up</router-link>
      </div>
      <div class="backButtom">
        <div class="ui fluid inverted secondary item menu">
          <router-link to="/" class="item coolFont">
            <i class="angle left icon"></i> Home
          </router-link>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script scoped>
export default {
  name: "Login"
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
