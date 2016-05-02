<template>
  <div id="app">
    <toolbar></toolbar>
    <note-list></note-list>
  </div>
</template>

<script>
  import Toolbar from './Toolbar.vue';
  import NoteList from './NoteList.vue';
  export default {
    components:{
      Toolbar,
      NoteList
    }
  };

</script>
