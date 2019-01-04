<template>
  <div>
    <h1>首页</h1>
    <Upload/>
    <TypePicker/>
    <CityPicker/>
    <router-link to="/faq">常见问题?</router-link>
    <button @click="pay">立即支付</button>
  </div>
</template>

<script>
import Upload from '@/components/Upload'
import TypePicker from '@/components/TypePicker'
import CityPicker from '@/components/CityPicker'
import {doPay} from '@/api/index'

export default {
  data(){
    return {

    }
  },
  created() {
  },
  components: {
    Upload,
    TypePicker,
    CityPicker
  },
  methods: {
    pay(){
      doPay();
    }
  }
}
</script>
