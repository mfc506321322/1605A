<template>
  <div>
    <h1>首页</h1>
    <Upload/>
    <TypePicker/>
    <CityPicker/>
  </div>
</template>

<script>
import Upload from '@/components/Upload'
import TypePicker from '@/components/TypePicker'
import CityPicker from '@/components/CityPicker'

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

  }
}
</script>
