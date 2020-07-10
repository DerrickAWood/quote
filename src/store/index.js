import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "./AxiosStore";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quotes: []
  },
  mutations: {
    setQuote(state, quote){
      state.quotes = quote
    }
  },
  actions: {
   async getQuote({commit}){
      let res = await api.get("")
      commit("setQuote", res.data)
    }
  },
  modules: {
  }
})
