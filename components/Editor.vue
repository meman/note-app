<template>
  <form class="editor">
    <input type="text" name='note-title' placeholder="Note title" class='editor-header' :value='selectedNote.title' @input='editNoteTitle'/>
    <textarea name="note-text" rows="8" cols="40" placeholder="Note Body" class="editor-body" :value='selectedNote.body' @input='editNoteBody'></textarea>
  </form>
</template>
<script>
  import {editNoteTitle,editNoteBody} from '../vuex/actions';

  export default  {
    vuex:{
      getters:{
        selectedNote:state=>state.selectedNote
      },
      actions:{
        editNoteTitle,
        editNoteBody
      }
    }
  };
</script>
