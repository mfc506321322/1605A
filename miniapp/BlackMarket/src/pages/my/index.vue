<template>
  <div>
    <i-button type="success" shape="circle" size="small">我是按钮</i-button>
    <i-tag
    class="i-tags"
    name="标签一"
    type="border"
    color="red">
    标签一
</i-tag>
<i-tag
    class="i-tags"
    name="标签一"
    color="green"
    type="border">
    标签一
</i-tag>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },

  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
