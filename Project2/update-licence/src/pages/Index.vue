<template>
  <div>
    <h1>首页</h1>
    <Upload/>
    <section>
      <li @click="clickType">
        <span>服务类型</span>
        <span>{{info.type}}</span>
      </li>
    </section>
    <section>
      <van-popup v-model="showType" position="bottom" :overlay="true">
        <van-picker :columns="typeArray" @change="onChange"  @cancel="onCancel" show-toolbar title="请选择服务类型" @confirm="onConfirm"/>
      </van-popup>
    </section>
  </div>
</template>

<script>
import Upload from '@/components/Upload'
export default {
  data(){
    return {
      showType: false,
      typeArray: ["补驾照", "换驾照"],
      info: {
        type: ''
      }
    }
  },
  components: {
    Upload
  },
  methods: {
    onChange(picker, values){
      console.log('picker...', picker, values);
    },
    onCancel(e){
      this.showType = false;
    },
    onConfirm(value){
      console.log('value...', value);
      this.info.type = value;
      this.onCancel();
    },
    clickType(){
      this.showType = true;
    }
  }
}
</script>
