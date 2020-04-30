<template>
<div class="allNotes">
  <div
  class="ui column grid"
  v-for="(note, index) in notes"
  v-bind:item="note"
  v-bind:index="index"
  v-bind:key="note._id"
  >
    <div class="column">
      <div class="ui raised segment">
        <a @click="singleNote(note._id)" class="ui red ribbon label"> {{note.title}} </a>
        <p> {{note.text}} </p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import NotesService from "../../NotesService";

export default {
  name: "Notes",
  data() {
    return {
      notes: [],
      errors: ""
    };
  },
  async created() {
    try {
      this.notes = await NotesService.getNotes();
    } catch(err) {
      this.$router.push("/login");
      this.errors = err;
    }
  },
  methods: {
    singleNote(id) {
      this.$router.push("/notes/" + id);
    }
  }
}
</script>

<style scoped>
.allNotes {
  width: 480px;
  margin: 50px auto 80px;
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
</style>
