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

        <div class="left item">
          <div v-if="loggedUser.length > 0" class="ui dropdown" id="dropdown">
            <i class="user icon"></i>
            {{ loggedUser }}
            <i class="dropdown icon"></i>
            <div class="menu">
              <a href="/aurigae/v1/auth/logout" class="item">Logout</a>
            </div>
          </div>
        </div>

        <div class="right item">
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
  logout() {

  },
  mounted: function() {
    // Semantic UI Dropdown on Home Page
    this.$('#dropdown').dropdown();
  }
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
