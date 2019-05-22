<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
/* 切换路由展现的进度条 */
#nprogress .bar {
  height: 3px!important;
  background: slateblue!important;
}
</style>
