<template>
  <div class="change-admin">
    <p>您的当前权限: {{switchRoles}}</p>
    <el-radio-group v-model="switchRoles" @change="handleChange">
      <el-radio-button label="editor" />
      <el-radio-button label="admin" />
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchRoles: localStorage.getItem('roles')
    }
  },
  methods: {
    handleChange() {
      localStorage.setItem('roles', this.switchRoles)
    }
  }
}
</script>

<style>

</style>
