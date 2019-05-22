<template>
  <div>
    <input :type="type" :value="value" @input="handleInput"/>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      defaule: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(e) {
      // 派发事件。 父级执行事件
      this.$emit('input', e.target.value)
      // 通知父组件校验
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style>

</style>
