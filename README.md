[TOC]
# webpack-stepBystep
step by step to webpack


# webpack核心概念
**核心概念：**

- 入口(entry)：
指示 webpack 应该使用哪个模块，来作为构建其内部依赖图的开始，webpack 会找出有哪些模块和 library 是入口起点（直接和间接）依赖的。
- 输出(output)：
告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件
- loader
webpack 自身只支持 JavaScript。而 loader 能够让 webpack 处理那些非 JavaScript 文件，并且先将它们转换为有效 模块，然后添加到依赖图中，这样就可以提供给应用程序使用。
- 插件(plugins)
loader 被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务，插件的范围包括：打包优化、资源管理和注入环境变量。常用的html-webpack-plugin 会为你的应用程序生成一个 html 文件，然后自动注入所有生成的 bundle。

# 起步(Getting Started)

```
The CLI moved into a separate package: webpack-cli.
Please install 'webpack-cli' in addition to webpack itself to use the CLI.
-> When using npm: npm install webpack-cli -D
-> When using yarn: yarn add webpack-cli -D

```


>原因是现在使用的是webpack 4.x版本，webpack拆分为两部分，默认安装的webpack是一部分，另一部分是webpack-cli，需要单独安装，所以依照提示执行即可。

## entry 
建议使用对象语法，扩展性强
## output
1. hash\chunkhash\contenthash区别？
- hash
  所有js文件使用同一个hash值。修改一个js，所有bundle的名称都会改变
- chunkhash
  代码不变，编译后的名称还是可能会变。因为每个chunk里不仅包括代码还包括了boilerplate（如runtime和manifest），当使用不同版本的webpack时，这些boilerplate内容可能会不同，导致chunkhash发生了改变。
- contenthash
1. 可以直接配置cdn域名。
# 资源管理(Asset Management)
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


# plugins
## 内置插件
1. HashedModuleIdsPlugin 根据模块相对路径生成一个四位数(默认)的hash作为模块id。
默认情况下webpack打包时使用的module id是基于默认的解析顺序进行增量。所以有新引入模块时，其它的模块id也会发生改变，从而导致模块名称(chunkhash)发生改变


## 第三方插件
1. [HtmlWebpackPlugin](https://webpack.docschina.org/plugins/html-webpack-plugin)
根据提供的模板生成html文件，并将生成的bundle文件注入到html文件中，避免每次手动改动引用


# 备注
1. 通过import引入的自定义模块，如果没有使用，是不会打到bundle里 [已验证]。但是对于node_modules里的模块（lodash），如果import，即使没有使用，
依旧会打包进bundle
1. 