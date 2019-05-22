<template>
  <div class="base-container">
    <slot></slot>
    <div class="base-head">123456</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
.base-container {
  width: 400px;
  height: 100px;
  background: salmon;
  border-radius: 10px;
  overflow: hidden;
  .base-head {
    height: 40px;
    background: seagreen;
  }
  .is-slot {
    background: #f00;
  }
}
</style>
