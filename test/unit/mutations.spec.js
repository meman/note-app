import mutations from '../../vuex/mutations';

const { ADD_NOTE,TOGGLE_FAVORITE,SET_ACTIVE_NOTE} = mutations ;

describe('mutations.add_note', () => {
  var state;

  beforeEach(()=>{
    state ={
      notes:[],
      selectedNote:{}
    };
  });

  it('should add a new note and set active note to the new one',()=>{
    ADD_NOTE(state);
    expect(state.notes).toContain({
      title:'New Title',
      favorite:false
    });
  });

  it('should return a array with a new note if the current value is undefined',()=>{
    state.notes=undefined;
    ADD_NOTE(state);
    expect(state.notes).toContain({
      title:'New Title',
      favorite:false
    });
  });

});

describe('mutations.toggle_favorite', () => {
  var state;

  beforeEach(()=>{
    state ={
      notes:[],
      selectedNote:{
        title:'New Title',
        favorite:false
      }
    };
  });

  it('should toggle the value of favorite',()=>{
    TOGGLE_FAVORITE(state);
    expect(state.selectedNote.favorite).toBe(true);
  });

  it('should set the value of favorite to false if the current value is not a boolean',()=>{
    state.selectedNote.favorite = 'grr';
    TOGGLE_FAVORITE(state);
    expect(state.selectedNote.favorite).toBe(false);
  });

  it('should leave selectedNote object untouch if empty',()=>{

    state.selectedNote = {};
    TOGGLE_FAVORITE(state);
    expect(state.selectedNote).toEqual({});

  });

  it('should assign a empty object to selectedNote if it is undefined',()=>{

    state.selectedNote = undefined;
    TOGGLE_FAVORITE(state);
    expect(state.selectedNote).toEqual({});

  });
});

describe('mutations.set_active_note', () => {
  var state;
  var note = {
    title:'New Title',
    favorite:false
  }

  beforeEach(()=>{
    state ={
      notes:[],
      selectedNote:{}
    };
  });

  it('should set the value of selectedNote to the new note',()=>{
    SET_ACTIVE_NOTE(state,note);
    expect(state.selectedNote).toEqual(note);
  });

  it('should ignore Setting selectedNote if the note is undefined',()=>{
    SET_ACTIVE_NOTE(state,undefined);
    expect(state.selectedNote).toEqual({});
  });
  
});
