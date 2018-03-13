[TOC]
# webpack-stepBystep
step by step to webpack

## 起步(Getting Started)

```
The CLI moved into a separate package: webpack-cli.
Please install 'webpack-cli' in addition to webpack itself to use the CLI.
-> When using npm: npm install webpack-cli -D
-> When using yarn: yarn add webpack-cli -D

```


>原因是现在使用的是webpack 4.x版本，webpack拆分为两部分，默认安装的webpack是一部分，另一部分是webpack-cli，需要单独安装，所以依照提示执行即可。

## 资源管理(Asset Management)
> 非js资源管理依赖于loader

### 模块
> 对于webpack来讲，任何一个文件都是模块。对于模块的处理，只需要在webpack.config.js的导出对象的module属性做对应配置即可。module由：noParse,rules列表,rule构成。
#### noParse用于指定哪些模块不做处理。取值是一个正则或者函数
#### rules是一个由多个rule组成的列表
#### rule 
> 每个rule又包含多个属性，如test,use,
### 遇到的问题总结

> 通过import引入资源时要写相对路径，比如应写成```import './style.css'```，而不是```import 'style.css'```。通过require()引入也是一样。

### 资源处理
1. css文件处理
> 添加rules规则，依次使用css-loader,style-loader处理css资源文件。

> 当该模块运行时，含有 CSS 字符串的 <style> 标签，将被插入到 html 文件的 <head> 中。bundle.js动态在引入的html头部插入style标签和对应css内容。
1. 图片文件处理