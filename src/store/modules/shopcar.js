import {reqCarList} from '../../util/request'

const state = {
    list: []
}

const mutations = {
    changeShopcarList(state, arr) {
        state.list = arr
    }
}

const actions = {
    getShopcarList(context, params) {
        reqCarList(params).then(res => {
            console.log(res);
            context.commit('changeShopcarList', res.data.list)
        })
    }

}

const getters = {
    shopcarList(state) {
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