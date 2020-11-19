import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = '/api'

axios.interceptors.response.use((res) => {
    console.log(res);
    return res
},(err) => {
    console.log(err);
})

// 会员注册
export const reqRegister = (form) => {
    return axios({
        url: '/api/register',
        method: 'post',
        data: qs.stringify(form)
    })
}

// 会员登录
export const reqLogin = (form) => {
    return axios({
        url: '/api/login',
        method: 'post',
        data: qs.stringify(form)
    })
}

// 首页
// 限时秒杀信息
export const reqSeckill = () => {
    return axios({
        url: '/api/getseckill',
        method: 'get'
    })
}

// 获取商品信息
export const reqIndexGoods = () => {
    return axios({
        url: '/api/getindexgoods',
        method: 'get'
    })
}

// 获取轮播图信息
export const reqBanner = () => {
    return axios({
        url: '/api/getbanner',
        method: 'get'
    })
}

// 获取获取分类信息
export const reqCate = () => {
    return axios({
        url: '/api/getcate',
        method: 'get'
    })
}

// 获取分类树形结构
export const reqCatetree = () => {
    return axios({
        url: '/api/getcatetree',
        method: 'get'
    })
}

// 获取分类商品
export const reqgoods = () => {
    return axios({
        url: '/api/getgoods',
        method: 'get'
    })
}

// 获取购物车列表
export const reqCarList = (params) => {
    return axios({
        url: '/api/cartlist',
        method: 'get',
        params: params
    })
}

// 购物车添加
export const reqCarAdd = (params) => {
    return axios({
        url: '/api/cartadd',
        method: 'post',
        data: params
    })
}

// 购物车添加
export const reqGoodsinfo = (params) => {
    return axios({
        url: '/api/getgoodsinfo',
        method: 'get',
        params: params
    })
}

// 购物车修改
export const reqGoodsEdit = (params) => {
    return axios({
        url: '/api/cartedit',
        method: 'post',
        data: params
    })
}

// 购物车删除
export const reqGoodsDel = (params) => {
    return axios({
        url: '/api/cartdelete',
        method: 'post',
        data: params
    })
}



