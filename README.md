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

## Mock 模拟数据

``` bash
# 全局安装
npm install -g json-server

# 项目下创建mock文件夹
/mock

# mock文件夹下添加db.json文件，内容如下：
{
  "test": {
    "title" : "I'm title"
  }
}

# package.json添加命令：
"mock": "json-server --watch mock/db.json",
"mockdev": "npm run mock & npm run dev"

# 启动mock服务
npm run mock
访问http://localhost:3000/test
可以访问已经创建的db.json里的数据

# 设置代理
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
