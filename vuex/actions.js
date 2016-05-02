export const addNote = ({dispatch}) => {
  dispatch('ADD_NOTE');
};

export const toggleFavorite = ({dispatch}) =>{
  dispatch('TOGGLE_FAVORITE');
};

export const deleteNote = ({dispatch})=>{
  dispatch('DELETE_NOTE');
};

export const selectNote = ({dispatch},note)=>{
  dispatch('SET_ACTIVE_NOTE',note);
};

export const editNoteTitle = ({dispatch},event)=>{
  dispatch('EDIT_NOTE_TITLE',event);
};

export const editNoteBody = ({dispatch},event)=>{
  dispatch('EDIT_NOTE_BODY',event);
};
