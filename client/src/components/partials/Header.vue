<template>
<div class="mainNavbar">
  <div class="ui inverted vertical center">
    <div class="ui container">

      <div class="ui secondary inverted menu">
        <router-link to="/login" v-if="loggedUser.length === 0" class="ui inverted button" style="margin-right: 10px;">
          Log In <i class="fas fa-sign-in-alt"></i>
        </router-link>
        <router-link to="/register" v-if="loggedUser.length === 0" class="ui inverted button">
          Sign Up <i class="fas fa-user-plus"></i>
        </router-link>

        <div v-if="loggedUser.length > 0" class="left item">
          <div class="coolFont">
            <i class="user icon"></i>
            {{ loggedUser }}
          </div>
          <a href="#" @click="logout()" class="item coolFont">Logout</a>
        </div>

        <div class="right item">
          <router-link to="/" class="item coolFont">Home</router-link>
          <router-link to="/notes" class="item coolFont">Notes</router-link>
          <router-link to="/contact" class="item coolFont">Contact</router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Header',
  data() {
    return {
      loggedUser: ""
    }
  },
  async created() {
    try {
      await axios.get("/oncrises/v1/auth/user")
        .then((res) => {
          let userParse = res.data;
          this.loggedUser = userParse.replace(/^./, userParse[0].toUpperCase());
        })
        .catch(err => console.log(err));

    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async logout() {
      await axios.get("/oncrises/v1/auth/logout")
      .then((res) => {
        console.log(res);
        return window.location.href = "/login";
      })
      .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
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

.left.item .item {
  margin-left: 10px;
}

.coolFont {
  font-family: 'Bree Serif', serif;
}
</style>
