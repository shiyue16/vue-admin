// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    "quotes": [
      "error",
      "single"
    ],//字符串必须使用单引号
    "semi": [0, "always"],//语句强制分号结尾
    "indent": [2, 2],//缩进风格
    "eqeqeq": 2,//必须使用全等
    "eol-last": 2,//文件以单一的换行符结束
    "curly": [2, "all"],//必须使用 if(){} 中的{}
    "camelcase": 2,//强制驼峰法命名
    "consistent-this": [2, "that"],//this别名
    "no-unused-vars": [2],//不能有声明后未被使用的变量或参数
    "no-alert": 0,//禁止使用alert confirm
    "no-new": 0,
    "no-tabs": 0,
    "no-undef": 0,
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0
  }
}
