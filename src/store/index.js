import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        allScores: [],
        
    },
    mutations: {
        increment (state) {
            state.count++
          },
        returnToZero (state) {
            state.count = 0
        },
        pushScoreInAllScores (state, score) {
            state.allScores.push(score)
        }

    },
    actions: {
        

    },
    plugins: [createPersistedState()],
})