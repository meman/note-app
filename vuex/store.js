// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state ={
  notes:[],
  selectedNote:{}
};

const mutations={
  ADD_NOTE(state){
    console.log(state);
  }
}

export default new Vuex.Store({
  state,
  mutations
});
