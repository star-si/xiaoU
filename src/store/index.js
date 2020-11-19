import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import seckill from './modules/seckill'
import indexGoods from './modules/indexGoods'
import banner from './modules/banner'
import classify from './modules/classify'
import shopcar from './modules/shopcar'

export default new Vuex.Store({
    modules: {
        seckill,
        indexGoods,
        banner,
        classify,
        shopcar
    }
})