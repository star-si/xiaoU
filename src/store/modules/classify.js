import {reqCatetree} from '../../util/request';
//初始数据
const state = {
    list:[]
}
const mutations = {
    getList(state,arr){
        state.list = arr
    }
}
//异步操作
const actions = {
    reqCateList(context){
        reqCatetree().then(res=>{
            context.commit('getList',res.data.list)
            console.log(res.data);
        })
    }
}
 //导出数据
 const getters = {
     list(state){
         return state.list
     }
 }
 export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true 
 }