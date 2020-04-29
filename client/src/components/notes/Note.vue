<template>
  <div class="singleNote">
    <div class="ui column grid">
      <div class="column">
        <div class="ui raised segment">
          <router-link to="#" class="ui red ribbon label"> {{note.title}} </router-link>
          <p> {{note.text}} </p>
        </div>
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
    axios.get(`/oncrises/v1/notes/${this.id}`)
    .then(res => {
      this.note = res.data;
      console.log(this.note);
    })
    .catch(err => {
      console.log(err);
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
</style>
