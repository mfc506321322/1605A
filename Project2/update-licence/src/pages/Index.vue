<template>
  <div>
    <h1>首页</h1>
    <Upload/>
    <TypePicker/>
    <CityPicker/>
    <router-link to="/faq">常见问题?</router-link>
    <button @click="pay">立即支付</button>

    <div>
      <input type="file" @change="fileUpload">
      图片上传
    </div>
     <img :src="src">

    <router-link to="/address">去收货地址页面</router-link>
    <canvas id="canvas"></canvas>
    <div class="bottom">
      <button id="cc">跳转客服</button>
      <a href="mailto:342690199@qq.com">打电话</a>
    </div>
  </div>
</template>

<script>
import Upload from '@/components/Upload'
import TypePicker from '@/components/TypePicker'
import CityPicker from '@/components/CityPicker'
import {doPay, uploadBase64} from '@/api/index'

export default {
  data(){
    return {
      src: ''
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
    },
    async fileUpload(e){
      console.log('e.target...', e.target.files)
      let reader = new FileReader();
      // 判断图片是否过多
      if (e.target.files[0].size > 1024*300){

      }
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = ()=>{
        this.src = reader.result;
        console.log('reader.result...', reader.result);
         var img = new Image();
         img.src = reader.result;
         img.onload = async ()=>{
           console.log(img.width, img.height);
           var canvas = document.getElementById('canvas');
           var context = canvas.getContext('2d');
           canvas.width = img.width;
           canvas.height = img.height;
           // 压缩画布
          context.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width/2, img.height/2);

          // 绘制一张网络图片
          var img2 = new Image();
          img2.crossOrigin = 'anonymous'
          var url = 'http://123.206.55.50:11000/static/9c5ab5222bb94e9beec79ded.jpg';
          let data = await imageToBase64(url)
          console.log('data...', data);
          img2.src = 'data:image/jpeg;base64,'+data;
          img2.onload = async ()=>{
            context.drawImage(img2, 0, 0, img2.width, img2.height, 50, 50, img2.width/2, img2.height/2);
             // toDataUrl时，设置为jpeg或者图片质量
            var baseStr1 = canvas.toDataURL('image/jpeg', 0.7);
            var baseStr2 = canvas.toDataURL('image/png', 1);
            // console.log(baseStr1, baseStr2);
            let res1 = await uploadBase64(baseStr1);
            let res2 = await uploadBase64(baseStr2);
            console.log('res1...', res1, 'res2...', res2);
          }
          //  console.log(canvas.toDataURL());
         }
      }
    }
  }
}
</script>

<style lang="scss">
.bottom{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 90%;
  margin: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  button,a{
    width: 100%;
    height: 30px;
    text-align: center;
    position: relative;
  }
  button{
    border-top: 1px solid #c0c0c0;
  }
  button::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    height: 1px;
    width: 100%;
    background: #c0c0c0;
  }
}
@mixin scale($ratio){
  transform: scaleY($ratio)
}
// 2倍屏
@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .bottom button::after{
    // transform: scaleY(0.5);
    @include scale(0.5)
  }
}
// 3倍屏
@media screen and (-webkit-min-device-pixel-ratio: 3) {
  .bottom button::after{
    // transform: scaleY(0.33);
    @include scale(0.33)
  }
}
// 响应式
@media screen and (min-width: 400px){

}
</style>
