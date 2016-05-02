import _ from 'lodash';

const Mutations = {
  ADD_NOTE(state){
    state.notes = _.isUndefined(state.notes)?[]:state.notes;

    const newNote = {
      title:'New Title',
      body:'',
      favorite:false
    };
    state.notes.push(newNote);
    state.selectedNote = newNote;
  },
  TOGGLE_FAVORITE(state){
    state.selectedNote = _.isUndefined(state.selectedNote) ? {} : state.selectedNote;
    if(!_.isEmpty(state.selectedNote)){
        state.selectedNote.favorite = _.isBoolean(state.selectedNote.favorite) ? !state.selectedNote.favorite : false;
    }
  },
  SET_ACTIVE_NOTE(state,note){
    state.selectedNote = _.isUndefined(note) ? {} : note;
  },
  EDIT_NOTE_TITLE(state,event){
    var title = event.target.value;
    state.selectedNote.title = title;
  },
  EDIT_NOTE_BODY(state,event){
    state.selectedNote.body = event.target.value;
  },
  DELETE_NOTE (state) {
    var index = state.notes.indexOf(state.selectedNote);
    state.notes.$remove(state.selectedNote);
    state.selectedNote = state.notes[index-1] || state.notes[0] || {};
  },
};

export default Mutations;
