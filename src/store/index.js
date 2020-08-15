/**
 * @Classname store.js
 * @Description TODO
 * @Date 2019-07-05 17:15
 * @Created by 123
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loading: false // 页面的loading
  },
  getters: {
    getLoading: (state) => {
      return state.loading
    }
  },
  mutations: {
    'setLoading': (state, res) => {
      state.loading = res;
    }
  },
  actions: {
    setLoading: ({ commit }, res) => {
      commit('setLoading', res);
    }
  }
})

export default store;
