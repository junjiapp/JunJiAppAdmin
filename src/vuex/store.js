import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const mutations = {
    // 加法
    ADD_ITEM : (state,num) =>{
        state.num += num;
    },
    // 减法
    SUB_ITEM : (state,num) =>{
        state.num -= num;
    }
};

const state = {
    // 数字
    num: 100,
};

const getters = {
    num: state => state.num
}

const store = new Vuex.Store({
    getters,
    state,
    mutations
})

export default store
