# webpack-stepBystep
step by step to webpack

## 第一次遇到问题
```
The CLI moved into a separate package: webpack-cli.
Please install 'webpack-cli' in addition to webpack itself to use the CLI.
-> When using npm: npm install webpack-cli -D
-> When using yarn: yarn add webpack-cli -D

```


>原因是现在使用的是webpack 4.x版本，webpack拆分为两部分，默认安装的webpack是一部分，另一部分是webpack-cli，需要单独安装，所以依照提示执行即可。
