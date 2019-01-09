<template>
  <button @click="share">果断分享</button>
</template>

<script>
import {doShare} from '@/api/index';
export default {
  created() {
    console.log(55555);
    // 分享到朋友圈
    window['CHELUN_SHARE_DATA_WXTIMELINE'] = {
      title: '分享一张大图',
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546919478716&di=b8a7d34022e91d86cd0d31fc9d6ec346&imgtype=0&src=http%3A%2F%2Fimg0.pclady.com.cn%2Fpclady%2F1606%2F30%2F1536947_14.jpg',
      type: 'photo'
    },
    // 分享到会话
    window['CHELUN_SHARE_DATA_WXMESSAGE'] = {
      title: '五年工作经验，一年模拟',
      desc: '微信分享秘籍',
      link: 'https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419317332&token=&lang=zh_CN',
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546919682884&di=4dceaceab6cc8f5763a9a4e384b54843&imgtype=0&src=http%3A%2F%2Fn1.itc.cn%2Fimg8%2Fwb%2Frecom%2F2017%2F04%2F30%2F149348371823762056.JPEG'
    }
  },
  methods: {
    share(){
      doShare();
    }
  }
}
</script>
