<template>
  <button @click="login">登陆</button>
</template>

<script>
import JSBridge from './utils/JSBridge.js';
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    login(){
      //登录
      JSBridge.invoke('app', 'login1000000000', {
        loginCallBackName: res=>{
          console.log('res...', res);
        },
        a: 1,
        b: 2,
        c: 3
      });
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
