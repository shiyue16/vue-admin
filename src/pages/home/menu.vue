<template>
  <div class="menu-list" :min-width="menuWidth">
    <el-menu
      router
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      background-color="#2d3a4b"
      text-color="#fff"
      :collapse="isCollapse"
      active-text-color="#ffd04b">
      <!-- 主菜单 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>{{ $t('menu.main') }}</span>
        </template>
        <el-menu-item index="/excl">{{ $t('menu.excl') }}</el-menu-item>
        <el-menu-item index="/content">{{ $t('menu.info') }}</el-menu-item>
        <el-menu-item index="/uploadExcl">{{ $t('menu.uploadExcl') }}</el-menu-item>
      </el-submenu>
      <!-- 配置 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>{{ $t('menu.config') }}</span>
        </template>
        <el-menu-item index="/admin">{{ $t('menu.change') }}</el-menu-item>
      </el-submenu>
      <!-- 图标 -->
      <el-menu-item index="/echarts">
        <template>
          <i class="el-icon-printer"></i>
          <template slot="title">
            {{ $t('menu.echarts') }}
          </template>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: '/excl',
      isCollapse: false,
      menuWidth: 200
    }
  },
  created() {
    this.$bus.$on('changeMenuWidth', (bool) => {
      bool ? this.menuWidth = 70 : this.menuWidth = 200
      this.isCollapse = bool
    })
    this.defaultActive = this.$route.path
  }
}
</script>

<style scoped>
.menu-list {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.el-menu {
  width: 100%;
}
.el-menu--collapse {
  width: 70px;
}
.el-menu-vertical-demo {
  height: 100%;
}
</style>
