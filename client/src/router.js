import Vue from "vue";
import Router from "vue-router";
import Welcome from "./components/Welcome.vue";
import Contact from "./components/Contact.vue";
import Register from "./components/authentication/Register.vue";
import Login from "./components/authentication/Login.vue";
import Notes from "./components/notes/Notes.vue";
import Note from "./components/notes/Note.vue";
import NewNote from "./components/notes/NewNote.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", name: "welcome", component: Welcome },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/register", name: "register", component: Register },
    { path: "/login", name: "login", component: Login },
    { path: "/notes", name: "notes", component: Notes },
    { path: "/newnote", name: "newnote", component: NewNote },
    { path: "/notes/:id", name: "note", component: Note, props: true }
  ]
});
