import {reqSeckill} from '../../util/request'

const state = {
    list: []
}

const mutations = {
    changeList(state, arr) {
        state.list = arr
    }
}

const actions = {
    getSeckillList(context) {
        reqSeckill().then(res => {
            console.log(res);
        })
    }

}

const getters = {
    seckillList(state) {
        return state.list
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}