export default {
  input: "src/index.js", //打包的入口文件，放的是你要打包啥
  output: {
    name: "number-to-Chinese", // 输入的包名
    file: "lib/index.js", //打包的输出地址
    format: "esm", //包的类型
  },
};
