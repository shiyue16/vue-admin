<template>
  <div class="home">
    <menu-list class="home-menu"/>
    <el-container>
      <el-header>
        <div>welcome </div>
        <div class="header-top">
          <el-dropdown @command="change">
            <div>切换语言<i class="el-icon-menu"></i></div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh">zh</el-dropdown-item>
              <el-dropdown-item command="en">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown @command="exitLoginType" class="avter">
            <div class="avter"><img src="@/assets/user/avter.gif" alt=""></div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="tc">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import Cookies from 'js-cookie'
import menuList from './menu'
import * as utils from '@/utils/index'
export default {
  components: {
    menuList
  },
  mounted() {
    // 监听窗口变化来改变侧边栏的width
    this.changeMenuWidth = utils.throttle(() => {
      if(document.body.clientWidth < 1200) {
        this.$bus.$emit('changeMenuWidth', true)
      }
      if(document.body.clientWidth > 1200) {
        this.$bus.$emit('changeMenuWidth', false)
      }
    }, 200)
    window.addEventListener('resize', this.changeMenuWidth)
    window.addEventListener('load', this.changeMenuWidth)
  },
  methods: {
    // 更改语言
    change(lang) {
      this.$i18n.locale = lang
      Cookies.set('language', lang)
    },
    // 退出登录
    exitLoginType(type) {
      if (type === 'tc') {
        localStorage.removeItem('token')
        localStorage.removeItem('roles')
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.home {
  width: 100%;
  height: 100%;
  display: flex;
}
.home-menu {
  min-width: 70px;
  max-width: 200px;
}
.el-header {
  height: 80px!important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }
  .header-top {
    .el-dropdown {
      height: 70px;
      background: #f5f5f5;
      line-height: 70px;
      float: left;
    }
    .avter {
      background: none;
      float: right;
    }
  }
}
.el-main {
  width: 100%;
  background: #f5f5f5;
}
</style>
