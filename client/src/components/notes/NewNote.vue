<template>
<div>
  <div class="notesTitle">
    <h3>What's so hard to comprehend?</h3>
    <div class="notesImg">
      <img src="../../assets/images/dogheads.png" alt="Dogheads">
    </div>
  </div>
  <form class="ui inverted form">

    <div class="field">
      <label>Note Title:</label>
      <input v-model="note.title" type="text" name="title" placeholder="Title">
    </div>

    <div class="field">
      <label>Description:</label>
      <textarea v-model="note.text" name="text" style="height: 125px;"></textarea>
    </div>

    <button @click="createNote()" class="ui button" type="button">Create</button>
  </form>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewNote",
  data() {
    return {
      note: {
        title: "",
        text: ""
      },
      isAdmin: ""
    };
  },
  async created() {
    await axios.get("/oncrises/v1/auth/user")
      .then((res) => {
        this.isAdmin = res.data;

        if(this.isAdmin !== "admin" || !this.isAdmin || this.isAdmin === "") {
          this.$router.push("/notes");
        }
      })
      .catch(err => console.log(err));
  },
  methods: {
    createNote() {
      axios.post("/oncrises/v1/notes/", this.note)
      .then((res) => {
        if(res.status === 401) {
          alert(res);
        }
        alert(res.data);
        this.$router.push("/notes");
      })
      .catch((err) => {
        alert(err);
        this.$router.push("/newnote");
      });
    }
  }
}
</script>

<style scoped>
.ui.form {
  width: 400px;
  margin: 0 auto;
  text-align: center;
}

.ui.inverted.form label {
  text-align: left;
  font-family: 'Bree Serif', serif;
  font-size: 1.2rem;
}

.notesTitle {
  margin: 20px auto 15px;
  text-align: center;
}

.notesTitle h3 {
  font-family: 'Pacifico', cursive;
  color: #eb4559;
  font-size: 1.8rem;
}

.notesImg {
  margin: 40px auto 40px;
  text-align: center;
}

.notesImg img {
  width: 260px;
}
</style>
