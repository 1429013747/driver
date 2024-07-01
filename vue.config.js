const { defineConfig } = require("@vue/cli-service");
// 引入等比适配插件
const pxToRem = require("postcss-pxtorem");
// 配置基本大小
const postcss = pxToRem({
  rootValue: 16, // 表示根元素字体大小或根据input参数返回根元素字体大小
  propList: ["*"], // 可以从px更改为rem的属性, 通配符*表示启用所有属性
  selectorBlackList: [".norem"], // 过滤掉.norem开头的class，不进行rem转换
});
module.exports = defineConfig({
  publicPath: "/oa/jsc/",
  transpileDependencies: true,
  //使用scss
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        // 路径根据具体需求更改
        // path.resolve(__dirname, "src/assets/styles/variables.scss"),
        // path.resolve(__dirname, "src/assets/styles/mixin.scss"),
      ],
    },
  },
  css: {
    // 使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [postcss],
        },
      },
    },
  },
});
