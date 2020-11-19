import {reqBanner} from '../../util/request'

const state = {
    list: []
}

const mutations = {
    changeList(state, arr) {
        state.list = arr
    }
}

const actions = {
    getBannerList(context) {
        reqBanner().then(res => {
            // console.log(res);
            context.commit('changeList', res.data.list)
        })
    }

}

const getters = {
    bannerList(state) {
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