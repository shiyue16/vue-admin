<template>
  <form>
    <slot/>
  </form>
</template>

<script>
export default {
  // 把表单实例给自己传递进去
  provide() {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  }
}
</script>

<style>

</style>
