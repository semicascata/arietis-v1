<template>
  <div class="singleNote">
    <div class="ui column grid">
      <div class="column">
        <div class="ui raised segment">
          <router-link to="#" class="ui red ribbon label"> {{note.title}} </router-link>
          <p> {{note.text}} </p>
          <h4> {{ errors }} </h4>
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
      errors: ""
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
  text-align: justify;
  padding: 14px;
}

.backButtomCont {
  width: 100px;
  margin: 10px auto;
}

.coolFont {
  font-family: 'Bree Serif', serif;
}
</style>
