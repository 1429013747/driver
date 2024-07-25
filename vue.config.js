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
    // extract: true,
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

  // configureWebpack: {
  //   optimization: {
  //     // 代码分割，提取公共代码
  //     splitChunks: {
  //       chunks: "all", //指定哪些块将被优化。可以是 all、async 或 initial。
  //       minSize: 20000, //创建一个新块的最小大小（默认值是 30kb）
  //       maxSize: 70000, //拆分块的最大大小
  //       minChunks: 1, //在分割前，模块的最小被引用次数
  //       maxAsyncRequests: 5, //按需加载时的最大并行请求数。
  //       maxInitialRequests: 3, //入口点的最大并行请求数
  //       automaticNameDelimiter: "~", //自动生成块名时的连接符。
  //       //缓存组
  //       cacheGroups: {
  //         //拆分node_modules中的模块
  //         vendors: {
  //           test: /[\\/]node_modules[\\/]/, //匹配需要拆分的模块
  //           priority: -10, //优先级
  //         },
  //         default: {
  //           minChunks: 2, //模块被引用>=2次，拆分至vendors公共模块
  //           priority: -20,
  //           reuseExistingChunk: true, //如果当前块包含已从主捆绑包中拆分出的模块，则将重用它而不是生成新的块。
  //         },
  //       },
  //     },
  //   },
  // },
});
