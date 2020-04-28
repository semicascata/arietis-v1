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
        <router-link to="#" class="ui red ribbon label"> {{note.title}} </router-link>
        <p> {{note.text}} </p>
        <div class="ui link list">
        </div>

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
      error: "",
      text: ""
    };
  },
  async created() {
    try {
      this.notes = await NotesService.getNotes();
    } catch (err) {
      this.error = err;
    }
  }
}
</script>

<style scoped>
/* Notes Page */
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

.ui.column.grid span {
  font-family: 'Bree Serif', serif;
  font-size: 0.9rem;
  text-align: center;
  padding: 0 14px;
}

.ui.link.list .item {
  font-size: 0.8rem;
}

.ui.link.list {
  width: 50px;
  margin-top: 2px;
  padding: 0 14px 10px;
}
</style>
