<template>
  <div class="base-dialog" v-if="visibility">
    <div class="dialog-container"></div>
  </div>
</template>

<script>
export default {
  props: {
    visibility: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang='scss'>
.base-dialog {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .5);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .dialog-container {
    min-height: 300px;
    min-width: 500px;
    position: absolute;
    background: #fff;
    border-radius: 10px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
