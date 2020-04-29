<template>
<div class="authPage">

  <h3>New Member <i class="user plus icon"></i></h3>
    <div class="ui segment">
      <!-- Flash Messages -->
      <form @submit.prevent="register" class="ui form">
        <!-- Username Input -->
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="username" placeholder="Username" v-model="user">
          </div>
        </div>
        <!-- Email Input -->
        <div class="field">
          <div class="ui left icon input">
            <i class="envelope icon"></i>
            <input type="email" name="email" placeholder="Email" v-model="email">
          </div>
        </div>
        <!-- Password Input -->
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Create Password" v-model="password">
          </div>
        </div>
        <!-- Confirm Password Input -->
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password2" placeholder="Confirm Password" v-model="password2">
          </div>
        </div>
        <button class="ui fluid submit button" type="submit">Register</button>
      </form>
    </div>

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
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      user: "",
      email: "",
      password: "",
      password2: ""
    }
  },
  methods: {
    async register() {
      await axios.post("oncrises/v1/auth/register", {
        user: this.user,
        email: this.email,
        password: this.password,
        password2: this.password2
      })
      .then((res) => {
        console.log(res);
        this.$router.push("/login");
      })
      .catch((err) => {
        console.log(err);
        this.$router.push("/register");
      });
    }
  }
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
