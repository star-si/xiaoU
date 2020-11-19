<template>
 <div class="shopcar">
     <header>
        <h2>购物车</h2>
    </header>
    <ul>
        <li v-for="item in list" :key="item.id">
            <div>
                <input type="checkbox" @click="checkOne()" class="select">
            </div>
            <figure>
                <img :src="$preImg + item.img" alt="">
            </figure>
            <div class="desc">
                <p class="desc-title">{{item.goodsname}}</p>
                <div class="changeNum">
                    <button @click="editNum({id:item.id, type: 1})">-</button>
                    <span>{{item.num}}</span>
                    <button @click="editNum({id:item.id, type: 2})">+</button>
                </div>
                <div class="sum">
                    总价：{{item.num * item.price}}
                </div>
            </div>
            <div class="price">
                {{'￥' + item.price}}
                <div class="del" @click="del(item.id)">
                    删除
                </div>
            </div>
        </li>
    </ul>
    <div class="buyall">
        <div class="all">
            <input type="checkbox" class="selectall" v-model="checkedall" @click="changeCheck" >
            <p>全选</p>
        </div>
        <div class="edit">
            <div class="all">
                <input type="checkbox" name="" id="">
                <p>编辑</p>
            </div>
            <div class="sumPrice">
                <p>合计： {{sumprice}}</p>
                <p>(不含运费)</p>
            </div>
        </div>
        <div class="buy-btn">
            去结算
        </div>
    </div>
 </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import {reqGoodsinfo, reqGoodsEdit, reqGoodsDel} from '../../../util/request'
import {success} from '../../../util/alert'

export default {
 data() {
 return {
     checkedall: false,
     sumprice: 0,
     selects: []
 };
 },
 computed:{
     ...mapGetters({
         list: 'shopcar/shopcarList'
     })
 },
 watch:{
 },
 methods: {
     ...mapActions({
         getShopcarList: 'shopcar/getShopcarList'
     }),
     // 数量增减
     editNum(obj) {
         reqGoodsEdit(obj).then(res => {
             console.log(res);
             this.getShopcarList({uid:sessionStorage.getItem('uid')});
             success(res.data.msg)
         })
     },
     // 删除
     del(id) {
        reqGoodsDel({id:id}).then(res => {
            this.getShopcarList({uid:sessionStorage.getItem('uid')});
             success(res.data.msg)
        })    
     },
     // 全选
     changeCheck(){
         this.checkedall = !this.checkedall;
         this.selects = document.getElementsByClassName('select');
        for(let i = 0; i < this.selects.length; i++) {
            this.selects[i].checked = this.checkedall 
        }
     },
     checkOne() {
         this.selects = document.getElementsByClassName('select');
        for(let i = 0; i < this.selects.length; i++) {
            if(this.selects[i].checked == false) {
                this.checkedall = false
                return
            }else {
                this.checkedall = true
            }
        }

     }
 },
 mounted() {
     let uid = sessionStorage.getItem('uid');
     this.getShopcarList({uid});
    
 },
};
</script>

<style lang='' scoped>

.shopcar {
    width: 100%;
    overflow: hidden;
}
.del {
    width: 0.6rem;
    background: #FF9900;
    text-align: center;
    color: white;
    font-size: 0.2rem;
}
.buy-btn {
    width: 1rem;
    background: #FF9900;
    color: white;
    margin-left: 0.66rem;
    line-height: 0.55rem;
    text-align: center;
    font-size: 0.2rem;
}
.edit {
    display: flex;
    margin-left: 0.1rem;
}
.edit .sumPrice p{
    font-size: 0.16rem;
    color: #666;
    margin-top: 0.08rem;
}
.buyall {
    width: 100vw;
    height: 0.55rem;
    position: fixed;
    bottom: 0.5rem;
    left: 0;
    display: flex;
    border-top: 1px solid #ccc;
}
.all {
    text-align: center;
    margin: 0.1rem 0.15rem;
}
.all p {
    margin-top: 0.05rem;
    font-size: 0.16rem;
    color: #666;
}
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
li input[type='checkbox'] {
    margin: 0.5rem 0.15rem 0;
}
input[type='checkbox'] {
    width: 0.2rem;
    height: 0.2rem;
    border: 1px solid #ff6700;
    border-radius: 50%;
}
li {
    width: 100%;
    display: flex;
    height: 1.2rem;
    overflow: hidden;
}
figure {
    margin-top: 0.225rem;
}
img {
    width: 0.75rem;
    height: 0.75rem;
}
.desc {
    margin: 0.15rem 0.2rem;
    font-size: 0.2rem;
}
.desc-title {
    margin-bottom: 0.15rem;
}
.changeNum {
    border: 1px solid #ccc;
}
.desc .changeNum button{
    font-size: 0.26rem;
    width: 0.4rem;
    height: 0.3rem;
    line-height: 0.3rem;
    vertical-align: middle;
    background: #fff;
}
.changeNum span {
    display: inline-block;
    width: 0.4rem;
    height: 0.3rem;
    text-align: center;
    line-height:0.3rem;
    border: 1px solid #ccc;
    border-top: none;
    border-bottom: none;
}
.sum {
    font-size: 0.16rem;
    margin-top: 0.1rem;
}
.price {
    line-height: 0.5rem;
    font-size: 0.2rem;
}

</style>
