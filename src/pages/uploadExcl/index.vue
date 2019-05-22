<template>
  <div>
    <upload-excel-component :on-success="handleSuccess" :fileSize="fileSize"/>
    <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
      {{tableHeader}}
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from './uploadExcel'
export default {
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [],
      tableHeader: [],
      fileSize: 1 // 以m兆来计算
    }
  },
  methods: {
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
    }
  }
}
</script>

<style>

</style>
