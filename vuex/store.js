// store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state ={
  notes:[],
  selectedNote:{}
};

export default new Vuex.Store({
  state,
  mutations
});
