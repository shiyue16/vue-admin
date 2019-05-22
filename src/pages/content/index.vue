<template>
  <div class="date-tools">
    <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
    <el-table
      :data="tableList"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="brithday"
        label="生日">
      </el-table-column>
      <el-table-column
        prop="interest"
        label="兴趣">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加新list" :visible.sync="dialogFormVisible">
      <el-form :model="persen">
        <el-form-item label="姓名" label-width="120px">
          <el-input v-model="persen.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" label-width="120px">
          <el-input v-model="persen.sex" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" label-width="120px">
          <el-input v-model="persen.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="生日" label-width="120px">
          <el-input v-model="persen.brithday" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="兴趣" label-width="120px">
          <el-input v-model="persen.interest" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" label-width="120px">
          <el-input v-model="persen.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddOrEditList">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import * as axios from '@/api'

export default {
  data() {
    return {
      tableList: [],
      persen: {
        name: '',
        sex: '',
        age: '',
        brithday: '',
        interest: '',
        address: ''
      },
      dialogFormVisible: false
    }
  },
  mounted() {
    this.getTableList()
  },
  methods: {
    getTableList() {
      axios.tableList().then(res => {
        this.tableList = res.list
      })
    },
    // 添加或编辑list
    handleAddOrEditList() {
      this.dialogFormVisible = false
      if(this.persen.id) {
        // 修改list
        axios.editTableList(this.persen).then(res => {
          this.$delete(this.persen, 'id')
          this.changePerson()
          if(res.code === 0) {
            this.tableList = res.list
          } else {
            this.$message({
              message: res.msg,
              type: 'warning'
            })
          }
        })
      } else {
        // 添加list
        axios.addTableList(this.persen).then(res => {
          this.changePerson()
          if(res.code === 0) {
            this.tableList = res.list
          } else {
            this.$message({
              message: res.msg,
              type: 'warning'
            })
          }
        })
      }
    },
    // 编辑此条信息。
    handleEdit(obj) {
      this.persen = {...this.persen, ...obj}
      this.dialogFormVisible = true
    },
    handleDelete(obj) {
      axios.removeTableList({
        id: obj.id
      }).then(res => {
        if(res.code === 0) {
          this.getTableList()
          this.$message({
            message: res.msg,
            type: 'success'
          })
        }
      })
    },
    // 还原this.person
    changePerson() {
      this.persen = {
        name: '',
        sex: '',
        age: '',
        brithday: '',
        interest: '',
        address: ''
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.date-tools {
  width: 100%;
  min-height: 120px;
  background: #fff;
  box-sizing: border-box;
}
</style>
