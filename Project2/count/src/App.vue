<template>
  <div>
    <button @click="changeNum('+')">+</button>
    <span>{{num}}</span>
    <span>千分符分割之后的数据： {{formatNum}}</span>
    <button @click="changeNum('-')">-</button>
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  computed: {
    ...mapState({
      num: state=>state.app.num
    }),
    ...mapGetters({
      formatNum: 'app/formatNum'
    })
  },
  mounted() {
    console.log('this.$store', this.$store, this.$store.getters)
  },
  methods: {
    ...mapMutations({
      changeNumSync: 'app/changeNum'
    }),
    ...mapActions({
      changeNumAsync: 'app/changeNumAsync'
    }),
    changeNum(type){
      // this.$store.commit('changeNum', {payload: type});
      // 提交一个mutation
      // this.$store.commit({
      //   type: 'app/changeNum',
      //   payload: type
      // })
      // 提交一个commit
      this.changeNumAsync(type).then(res=>{
        console.log('异步操作完成了!!!!');
      })
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
