<template>
  <div>
    <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload"/>
    <el-table :data="results">
      <template v-for="(item, index) in header">
        <el-table-column v-if="item!='avatar'"  :key="index"
          :label="item.toUpperCase()" :prop="item"></el-table-column>
        <el-table-column v-else :key="index">
          <template slot-scope="scope">
              <img :src="scope.row.avatar" class="avatar">
          </template>
        </el-table-column>
      </template>

    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel/index.vue'
export default {
  data(){
    return {
      header: [],
      results: []
    }
  },
  components: {
    UploadExcelComponent
  },
  methods: {
    beforeUpload(file){
      console.log('file...', file);
      return true;
    },
    handleSuccess(res){
      console.log('res...', res);
      this.header = res.header;
      this.results = res.results;
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar{
  width: 60px;
}
</style>
