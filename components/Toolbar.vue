<template>
  <div class="toolbar">
    <i class="glyphicon glyphicon-plus" @click='addNote'></i>
    <i v-bind:class="['glyphicon',
      selectedNote.favorite?'glyphicon-star':'glyphicon-star-empty']" @click='toggleFavorite'></i>
    <i class="glyphicon glyphicon glyphicon-remove" @click='deleteNote'></i>
  </div>
</template>

<script>
  import {addNote,toggleFavorite,deleteNote} from '../vuex/actions';

  export default{
    vuex:{
      getters:{
        selectedNote:state => state.selectedNote
      },
      actions:{
        addNote,
        toggleFavorite,
        deleteNote
      }
    }
  }
</script>
