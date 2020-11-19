<template>
 <div>
     <header>
         <h2>登录</h2>
         <div class="register" @click="register">注册</div>
     </header>
     <article>
         <div>
             <p>账号：</p>
             <input type="text" v-model="form.phone">
         </div>
         <div>
             <p>密码：</p>
             <input type="password" v-model="form.password">
         </div>
         <p class="forget">忘记密码</p>
        <div>
            <button @click="login">登录</button>
        </div>
     </article>

 </div>
</template>

<script>
import {reqLogin} from '../../util/request'
import {success, warning} from '../../util/alert'

export default {
 data() {
 return {
     form: {
         phone: '',
         password: ''
     }
 };
 },
 computed:{
 },
 watch:{
 },
 methods: {
     register() {
         this.$router.push('/register');
     },
     login() {
         reqLogin(this.form).then(res => {
             console.log(res);
             
            success(res.data.msg);

            if(res.data.code == 200) {
                sessionStorage.setItem('uid',res.data.list.uid);
                this.$router.push('/index');
            }
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
    right: 0.15rem;
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
.forget {
    float: right;
    font-size: 0.14rem;
    margin-bottom: 0.15rem;
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
