<template>
  <div>
    <header>
      <figure class="logo">
        <img :src="img" alt="" />
      </figure>
      <div class="search">
          <input type="text" placeholder="寻找商品">
      </div>
    </header>
    <article>
        <section class="banner">
            <ul>
                <li v-for="item in bannerList" :key="item.id">
                    <a href="javascript:;">
                        <img :src="$preImg + item.img" alt="">
                    </a>
                </li>
            </ul>
        </section>

        <section class="nav">
            <ul>
                <li>
                    <div class="nav_box"></div>
                    <p>限时抢购</p>
                </li>
                <li>
                    <div class="nav_box"></div>
                    <p>积分商城</p>
                </li>
                <li>
                    <div class="nav_box"></div>
                    <p>练习我们</p>
                </li>
                <li>
                    <div class="nav_box"></div>
                    <p>商品分类</p>
                </li>
            </ul>
        </section>

        <section class="seckill">
            <ul>
                <li v-for="item in goodsList" :key="item.id">
                    <figure class="seckill_img">
                        <img :src="$preImg + item.img" alt="">
                    </figure>
                    <div class="seckill_desc">
                        <h3 class="seckill_title">{{item.goodsname}}</h3>
                        <p class="seckill_price">{{'￥' + item.price}}</p>
                        
                            <button @click='addCar(item.id)'>立即抢购</button>
                        
                    </div>
                </li>
            </ul>
        </section>
    </article>
  </div>
</template>

<script>
import logo from "../../../assets/img/home/cart_logo.jpg";
import {mapGetters, mapActions} from 'vuex'
import {reqCarAdd} from '../../../util/request'
import { success } from '../../../util/alert';

export default {
  data() {
    return {
        img: logo,
        bannerlist: []
    };
  },
  computed: {
      ...mapGetters({
          seckillList: 'seckill/seckillList',
          goodsList: 'indexGoods/goodsList',
          bannerList: 'banner/bannerList'
      })
  },
  watch: {},
  methods: {
      ...mapActions({
          getSeckillList: 'seckill/getSeckillList',
          getGoodsList: 'indexGoods/getGoodsList',
          getBannerList: 'banner/getBannerList'
      }),
      addCar(id) {
          console.log(id);
          let obj = {
              uid: sessionStorage.getItem('uid'),
              goodsid: id,
              num: 1
          }
          reqCarAdd(obj).then(res => {
              console.log(res);
              success(res.data.msg)
          })
      }
  },
  mounted() {
      this.getSeckillList()
      this.getGoodsList()
      this.getBannerList()
  },
};
</script>

<style lang='' scoped>
header {
    height: 0.5rem;
    width: 100%;
    display: flex;
}
.logo {
   margin: 0.075rem 0.15rem;
}
.logo img {
    width: 1.2rem;
    height: 0.35rem;
}
.search {
    margin: 0.125rem 0 0 0.5rem;
}
.search input {
    width: 0.82rem;
    height: 0.25rem;
    background: lightgray;
    border-radius: 0.1rem;
}
::-webkit-input-placeholder {
    color: #333;
    text-align: center;
}

/* 轮播图 */
.banner,
.banner li {
    width: 100%;
    height: 1.8rem;
}
.banner img {
    width: 100%;
    height: 100%;
}

/* 秒杀 */
.nav ul{
    display: flex;
    justify-content: space-around;
}
.nav ul li {
    margin-top: 0.1rem;
    text-align: center;
}
.nav ul li p {
    margin-top: 0.05rem;
    font-size: 0.16rem;
    color: #666;
}
.nav_box {
    width: 0.75rem;
    height: 0.7rem;
    background: #eee;
}

/* 商品 */
.seckill {
    margin-top: 0.1rem;
}
.seckill ul li {
    display: flex;
    margin-bottom: 0.1rem;
}
.seckill_img {
    width: 1rem;
    height: 1rem;
    margin: 0 0.1rem;
}
.seckill_img img {
    width: 100%;
    height: 100%;
}
.seckill_desc .seckill_title {
    font-size: 0.2rem;
    margin-top: 0.05rem;
}
.seckill_desc .seckill_price {
    margin-top: 0.2rem;
    font-weight: 700;
    font-size: 0.16rem;
    color:#E23838;
}
.seckill_desc button {
    width: 0.86rem;
    height: 0.35rem;
    background: #FF9900;
    border-radius: 0.1rem;
    margin-top: 0.05rem;
    color: white;
}
</style>
