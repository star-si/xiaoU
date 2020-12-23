<template>
    <div>
         <header>
             <h2>分类</h2>
        </header>
       <div class="box">
            <div class="left-box">
                <ul>
                    <li class="left" v-for="(item,index) in list" :key="item.id" @click="get(index)">{{item.catename}}</li>
                </ul>
            </div>
            <div class="right-box">
                <ul>
                    <li v-for="item in rightList" :key="item.id">
                        <p class="title">{{item.catename}}</p>
                        <p><img :src="$preImg + item.img" alt=""></p>
                    </li>
                </ul>
            </div>
       </div>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return{
            rightList:[]
        }
    },
    computed:{
        ...mapGetters({
            list:'classify/list'
        })
    },
    methods:{
        ...mapActions({
            reqCateList:'classify/reqCateList'
        }),
        get(index){     
            this.rightList = this.list[index].children;
        }
    },
    mounted(){
        this.reqCateList();
        setTimeout(() => {
            this.rightList = this.list[0].children;
            
        })
    }
}
</script>

<style scoped>
header {
    width: 100vw;
    height: 0.38rem;
    background: #FF9900;
    color: white;
    font-size: 0.2rem;
    line-height: 0.38rem;
}
h2 {
    width: 100%;
    height: 0.38rem;
    text-align: center;
}
.box{
    width: 100%;
    display: flex;
}
.left-box{
    height: 100vh;
    width: 1.2rem;
}
.left{
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.18rem;
    text-align: center;
}
.left:hover {
    background: #ff9955;
    color: white;
}

.right-box li{
    width: 1rem;
    height: 1rem;
    margin: 0.2rem;
    position: relative;
}
img{
    width: 1rem;
    height: 1rem;
}
.right-box ul{
    display: flex;
    width: 3rem;
    flex-wrap: wrap;
}
.right-box .title{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    background: lightskyblue;
    color: #fff;
}
</style>