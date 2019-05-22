<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot/>
    <div v-if="error" style='color: red;'>{{error}}</div>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      error: ''
    }
  },
  mounted() {
    this.$on('validate', this.validate)
  },
  methods: {
    // 执行验证规则
    validate() {
      // 获取校验规则
      const rules = this.form.rules[this.prop]
      // 获取数据模型
      const value = this.form.model[this.prop]
      // 校验对象
      const descriptor = {[this.prop]: rules}
      // 创建验证器。
      const schema = new Schema(descriptor)
      schema.validate({[this.prop]: value}, errors => {
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = ''
        }
      })
    }
  }
}
</script>

<style>

</style>
