import Vue from "vue";
import Router from "vue-router";
import Welcome from "./components/Welcome.vue";
import Contact from "./components/Contact.vue";
import Register from "./components/authentication/Register.vue";
import Login from "./components/authentication/Login.vue";
import Notes from "./components/notes/Notes.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "welcome", component: Welcome },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/register", name: "register", component: Register },
    { path: "/login", name: "login", component: Login },
    { path: "/notes", name: "notes", component: Notes }
  ]
});
