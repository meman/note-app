import _ from 'lodash';

const Mutations = {
  ADD_NOTE(state){
    state.notes = _.isUndefined(state.notes)?[]:state.notes;
    const newNote = {
      title:'New Title',
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
}

export default Mutations;
