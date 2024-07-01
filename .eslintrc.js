console.log("first commit");
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    semi: [2, "always"], //不加分号报错 0:关闭 1:警告 2:错误
    quotes: [2, "double"], //引号类型 `` "" ''
    "prefer-const": 2, // 要求使用 const 声明那些声明后不再被修改的变量
    camelcase: 2, //强制使用骆驼拼写法命名约定
    "vue/multi-word-component-names": [1], //关闭vue组件名必须是多个单词
    "no-dupe-keys": 2, //禁止对象字面量中出现重复的 key
    "vue/no-dupe-keys": 0,
  },
};
