<template>
  <div class="note-list">
    <div class="list-header">
      <h2>Notes <label class="badge">{{notes.length}}</label></h2>
      <div class="btn-group btn-group-justified" role="group">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" :class='{active:filter == "all"}' @click='toggleFilter'>All Notes</button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" :class='{active:filter == "favorited"}' @click='toggleFilter'>Favorited Notes</button>
        </div>
      </div>
    </div>
    <ul class='list-body list-unstyled'>
      <li v-for="(i, note)  in filterNotes" @click='selectNote(note)' class="note-item"
      :class="{active: selectedNote === note}">
        <span v-show='note.title !== ""' class='title'>{{note.title}}</span>
        <span v-else>#Note {{i + 1}}</span>
        <i class='glyphicon glyphicon-star pull-right' v-show='note.favorite'></i>
      </li>
    </ul>
  </div>
</template>

<script>
  import {selectNote} from '../vuex/actions';
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
      },
      actions:{
        selectNote
      }
    },
    methods:{
      toggleFilter:function(){
        var targetValue = event.target.innerHTML.split(" ")[0].toLowerCase();
        this.filter = targetValue;
      }
    },
    computed:{
      filterNotes:function(){
        if(this.filter == "favorited"){
          return this.notes.filter((note)=>note.favorite);
        }
        return this.notes;
      }
    }
  };
</script>
