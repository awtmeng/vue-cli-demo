# vue-cli-demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Vue-cli快速构建Vue项目

``` bash
# 安装vue-cli之前，需要先装好vue 和 webpack
npm install -g vue      //全局安装vue
npm install -g webpack  //全局安装webpack
npm install -g vue-cli  //全局安装vue-cli

# 使用vue-cli构建vue项目
vue init webpack vue-cli-demo   //vue-cli-demo为你的vue项目的名词
cd vue-cli-demo
npm install

# 启动vue
npm run dev
浏览器会自动打开http://localhost:8080

# 生产环境
npm run build
会生成静态文件到dist里边

```

## Mock 模拟数据

``` bash
# 1、全局安装
npm install -g json-server

# 2、项目下创建mock文件夹
/mock

# 3、mock文件夹下添加db.json文件，内容如下：
{
  "test": {
    "title" : "I'm title"
  }
}

# 4、package.json添加命令：
"mock": "json-server --watch mock/db.json",
"mockdev": "npm run mock & npm run dev"

# 5、启动mock服务
npm run mock
访问http://localhost:3000/test
可以访问已经创建的db.json里的数据

# 6、设置代理
在config下的index.js文件夹下设置如下：
proxyTable: {
  '/api':{
    target:'//localhost:3000/',
    changeOrigin:true,
    pathRewrite:{
      '^/api':''
    }
  }
}
这样就能代理'/api'的3000端口的请求到8080端口
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
