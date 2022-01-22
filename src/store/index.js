import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        allScores: [],
        name: '',
        finish: false,
        gameRunning: false,
        setNewGame: false,
        maxPair: 8,

        
    },
    mutations: {
        increment (state) {
            state.count++
          },
        updateName(state, newName) {
            state.name = newName;
        },
        newGame(state) {
            state.finish = false;
            state.count = 0;
            state.gameRunning = true;
            state.setNewGame = true; 
        },
        finish(state, score) {
            state.finish = true;
            state.allScores.push(score);
            state.gameRunning = false;
        },

    },
    actions: {
        

    },
    plugins: [createPersistedState()],
})