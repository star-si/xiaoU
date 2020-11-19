<template>
 <div class="index">
     <div class="router">
         <router-view></router-view>
     </div>
     <footer>
         <router-link to = '/index/home' tag = 'div' active-class = 'active'>
             <i class="el-icon-s-home"></i>
             <p>首页</p>
         </router-link>
         <router-link to = '/index/classify' tag = 'div' active-class = 'active'>
             <i class="el-icon-menu"></i>
             <p>分类</p>
         </router-link>
         <router-link to = '/index/shopcar' tag = 'div' active-class = 'active'>
             <i class="el-icon-goods"></i>
             <p>购物车</p>
         </router-link>
         <router-link to = '/index/mine' tag = 'div' active-class = 'active'>
             <i class="el-icon-user"></i>
             <p>我的</p>
         </router-link>
     </footer>
 </div>
</template>

<script>
export default {
 data() {
 return {
 };
 },
 computed:{
 },
 watch:{
 },
 methods: {},
 mounted() {},
};
</script>

<style lang='' scoped>
.index {
    width: 100vw;
    overflow: hidden;
}
.router {
    width: 100vw;
    overflow: hidden;
    margin-bottom: 0.6rem;
}
footer {
    width: 100vw;
    height: 0.48rem;
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    color: #333;
    background: white;
}
footer div {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0.24rem;
    font-size: 0.16rem;
    margin-top: 0.04rem;
}
.active{
    color: #ff6700;
}
</style>
