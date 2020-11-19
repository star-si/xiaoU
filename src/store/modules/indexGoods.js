import {reqIndexGoods} from '../../util/request'

const state = {
    list: []
}

const mutations = {
    changeList(state, arr) {
        state.list = arr
    }
}

const actions = {
    getGoodsList(context) {
        reqIndexGoods().then(res => {
            console.log(res);
            context.commit('changeList', res.data.list[2].content)
        })
    }

}

const getters = {
    goodsList(state) {
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