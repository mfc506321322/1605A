<template>
  <h1>当前路径：{{this.$route.path}}</h1>
</template>

<script>
export default {
  data(){
    return {
      path: this.$route
    }
  },
  created() {
    console.log(this.$route);
  },
}
</script>
