<template>
  <div class="pop-excl">
    <ax-form :model="person" :rules="rules" ref="axLoginFrom">
      <ax-form-item label="用户名" prop="username">
        <ax-input type="text" v-model="person.username"></ax-input>
      </ax-form-item>
      <ax-form-item label="密码" prop="password">
        <ax-input type="password" v-model="person.password"></ax-input>
      </ax-form-item>
    </ax-form>
    <br/>
    <el-button type="success" @click="popExcl">导出excl</el-button>
    <el-table
      border
      :data="tableData"
      style="width: 100%">
      <el-table-column prop="date" label="日期" width="auto"/>
      <el-table-column prop="name" label="姓名" width="auto"/>
      <el-table-column prop="province" label="省份" width="auto"/>
      <el-table-column prop="city" label="市区" width="auto"/>
      <el-table-column prop="address" label="地址" width="auto"/>
      <el-table-column prop="zip" label="邮编" width="auto"/>
    </el-table>
  </div>
</template>

<script>
import exportExcel from '@/utils/exportExcel.js'
import baseContainer from '@/components/base'
import axInput from '@/components/axForm/axInput'
import axForm from '@/components/axForm/axForm'
import axFormItem from '@/components/axForm/axFormItem'
export default {
  components: {
    baseContainer,
    axInput,
    axFormItem,
    axForm
  },
  data() {
    return {
      person: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: '请输入用户名'}],
        password: [{required: true, message: '请输入密码'}]
      },
      slotInfo: 'slot-info',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    popExcl() {
      // excel的表头。
      const header = ['日期', '姓名', '省份', '市', '地址', '邮编']
      // 辅助遍历excel(table数组每一项里的字段名)
      const filterVal = ['date', 'name', 'province', 'city', 'address', 'zip']
      // 遍历后的数据。
      const data = this.formData(filterVal, this.tableData)
      exportExcel({
        header,
        data,
        filename: 'seeeeeeee',
        autoWidth: true,
        bookType: 'xlsx'
      })
    },
    formData(filterVal, data) {
      return data.map(item => filterVal.map(v => {
        return item[v]
      }))
    }
  }
}
</script>

<style scoped>
.is-brict {
  background: yellow
}
</style>
