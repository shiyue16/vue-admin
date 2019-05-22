<template>
  <div class="login-container">
    <el-form :model="userInfo" :rules="userInfoRules" label-width="100px" class="user-form">
      <h1 class="login-tit">登录</h1>
      <el-form-item prop="username">
        <el-input v-model="userInfo.username" type="text" placeholder="请输入账号" autocomplete="off" @keyup.enter.native="watchKeyCode"/>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="userInfo.password" type="text" maxlength="8" placeholder="请输入密码" autocomplete="off" @keyup.enter.native="watchKeyCode"/>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click="userLogin">主要按钮</el-button>
    </el-form>
  </div>
</template>

<script>
const username = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('账号不能为空'))
  }
}
const password = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('密码不能为空'))
  }
}
export default {
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      userInfoRules: {
        username: [
          { validator: username, trigger: 'change' }
        ],
        authCode: [
          { validator: password, trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    watchKeyCode() {

    },
    userLogin() {
      if (this.userInfo.username !== '' && this.userInfo.password !== '') {
        localStorage.setItem('roles', 'admin')
        localStorage.setItem('token', 'asdhfa123asaFSADs=asddbfas[;asnddanv')
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
  position: relative;
  color: #fff;
  .user-form {
    width: 400px;
    min-height: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.login-container /deep/ .el-form-item__content {
  background: rgba(0, 0, 0, 0.1);
  margin-left: 0!important;
  height: 56px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  .el-input {
    height: 100%;
  }
  .el-input__inner {
    height: 100%;
    background: none;
    border: none;
    color: #fff;
  }
  .el-form-item__error {
    left: 5px;
  }
}
.login-tit {
  text-align: center;
  margin-bottom: 20px;
}
.login-btn {
  width: 100%;
  height: 48px;
}
</style>
