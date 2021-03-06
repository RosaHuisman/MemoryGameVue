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
        memoryCards: [],
        returnedCards: [],
        fruits: [ 'fraise', 'orange', 'kiwi', 'poire', 'cerise', 'ananas', 'citron', 'banane' ],
        fruits2: [ 'fraise2', 'orange2', 'kiwi2', 'poire2', 'cerise2', 'ananas2', 'citron2', 'banane2' ],        
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
        finish(state, group) {
            state.finish = true;
            console.log(group);
            state.allScores.push(group);
            state.gameRunning = false;
        },
        reinitializeGame(state) {
            state.finish = true;
            state.gameRunning = false;

        },

    },
    actions: {
        

    },
    plugins: [createPersistedState()], 
})