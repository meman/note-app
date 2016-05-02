<template>
  <div class="note-list">
    <div class="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default">All Notes</button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default">Favorited Notes</button>
        </div>
      </div>
    </div>
    <ul class='list-body list-unstyled'>
      <li v-for="note in notes">
        {{note.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        filter:'all'
      }
    },
    vuex:{
      getters:{
        notes:state=>state.notes,
        selectedNote:state=>state.selectedNote
      }
    }
  };
</script>
