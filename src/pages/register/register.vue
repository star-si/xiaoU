<template>
 <div>
     <header>
         <h2>注册</h2>
         <div class="register" @click="$router.go(-1)">返回</div>
     </header>
     <article>
         <div>
             <p>手机号：</p>
             <input type="tel" v-model="form.phone">
         </div>
         <div>
             <p>昵称：</p>
             <input type="text" v-model="form.nickname">
         </div>
         <div>
             <p>密码：</p>
             <input type="password" v-model="form.password">
         </div>
        
        <div>
            <button @click="registe">注册</button>
        </div>
     </article>

 </div>
</template>

<script>
import {reqRegister} from '../../util/request'
import {success, warning} from '../../util/alert'

export default {
 data() {
 return {
     form: {
         phone: '',
         nickname: '',
         password: ''
     }
 }
 },
 computed:{
 },
 watch:{
 },
 methods: {
     registe(){
         reqRegister(this.form).then(res => {
             success(res.data.msg);
             this.$router.push('/login');
         })
     }
 },
 mounted() {},
};
</script>

<style lang='' scoped>
header {
    width: 100%;
    height: 0.38rem;
    background: #FF9900;
    color: white;
    font-size: 0.2rem;
    line-height: 0.38rem;
    position: relative;
}
h2 {
    width: 100%;
    height: 0.38rem;
    text-align: center;
}
.register {
    position: absolute;
    left: 0.15rem;
    top: 0;
}
input {
    width: 100%;
    border-bottom: 1px solid #999;
    font-size: 0.16rem;
    text-indent: 4em;
}
article {
    width: 80%;
    margin: 1.1rem auto;
    font-size: 0.16rem;
}
article div {
    width: 100%;
    margin: 0.3rem 0;
}
button {
    width: 100%;
    height: 0.45rem;
    background: #FF9900;
    text-align: center;
    color: white;
    font-size: 0.18rem;
    border-radius: 0.1rem;
}
</style>
