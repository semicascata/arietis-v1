<template>
<div class="singleNote">
  <div class="notesTitle">
    <div class="notesImg">
      <img src="../../assets/images/dogheads.png" alt="Dogheads">
    </div>
  </div>
  <div class="ui column grid">
    <div class="column">
      <div class="ui raised segment">
        <router-link to="#" class="ui red ribbon label"> {{note.title}} </router-link>
        <p> {{note.text}} </p>
        <button v-if="isAdmin === 'admin'" @click="deleteNote(note._id)" class="circular ui icon red button" type="submit" :value="note._id">
          <i class="trash icon"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="backButtomCont">
    <div class="ui fluid secondary inverted item menu">
      <router-link to="/notes" class="item coolFont">
        <i class="angle left icon"></i> Back
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Note",
  props: ["id"],
  data() {
    return {
      note: [],
      errors: "",
      isAdmin: ""
    }
  },
  async created() {
    try {
      await axios.get("/oncrises/v1/auth/user")
        .then((res) => {
          this.isAdmin = res.data;
        });
    } catch (err) {
      console.log(err);
    }
  },
  mounted() {
    // Will call this after render page
    axios.get(`/oncrises/v1/notes/${this.id}`)
      .then(res => {
        this.note = res.data;
        // console.log(this.note);
      })
      .catch((err) => {
        this.$router.push("/notes");
        this.errors = err;
      })
  },
  methods: {
    async deleteNote(id) {
      await axios.delete(`/oncrises/v1/notes/${id}`)
      .then((res) => {
        if(res.status === 204) {
          alert("Note deleted...");
          this.$router.push("/notes");
        }
      });
    }
  }
}
</script>

<style scoped>
.singleNote {
  width: 480px;
  margin: 50px auto 80px;
}

.circular.ui.icon.button {
  margin-left: 400px;
}

.ui.column.grid .ui.red.ribbon.label {
  font-family: 'Slabo 27px', serif;
  font-size: 1rem;
}

.ui.column.grid p {
  font-family: 'Slabo 27px', serif;
  word-wrap: break-word;
  text-align: justify;
  padding: 14px;
}

.circular.ui.icon.button {
  margin-left: 400px;
}

.backButtomCont {
  width: 100px;
  margin: 10px auto;
}

.coolFont {
  font-family: 'Bree Serif', serif;
}

.notesTitle {
  margin: 20px auto 15px;
  text-align: center;
}

.notesImg {
  margin: 40px auto 40px;
  text-align: center;
}

.notesImg img {
  width: 160px;
}
</style>
