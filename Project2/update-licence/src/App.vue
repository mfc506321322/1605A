<template>
  <button @click="login">登陆</button>
</template>

<script>
const JSBridge = require('./utils/JSBridge.js');
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    login(){
      //登录
      chelunJSBridge.invoke('app', 'login', {
        loginCallBackName: res=>{
          console.log('res...', res);
        }
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
