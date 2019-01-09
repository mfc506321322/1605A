<template>
  <!-- <button @click="login">登陆</button> -->
  <keep-alive exclude="Index">
     <router-view></router-view>
  </keep-alive>
</template>

<script>
import JSBridge from './utils/JSBridge.js';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  provide(){
    return {
      // num: 10000,
      login: ()=>{
        console.log('调用了login');
        this.login();
      }
    }
  },
  methods: {
    login(){
      //登录
      JSBridge.invoke('app', 'login', {
        loginCallBackName: res=>{
          console.log('res...', res);
        }
      });
    }
  }
}
</script>

<style lang="scss">
@import './scss/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
