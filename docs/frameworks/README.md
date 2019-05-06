---
pageClass: getting-started
---
# 介绍

## 快速上手

> 该项目雏形框架由[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)演变而来。
  建议新同学可以先去阅读一下几篇[配套文章](https://panjiachen.github.io/vue-element-admin-site/zh/guide/#%E5%89%8D%E5%BA%8F%E5%87%86%E5%A4%87)。

## 安装

目前项目均托管在公司[gitlab](http://www.axtech.net.cn:16822/users/sign_in)，账号权限请找老杨获取，
拉取相应的项目即可。

## 构建和发布
本项目基于 [Vue CLI 3](https://cli.vuejs.org/config/) 构建。
vue-cli升级到3后，package名字从vue-cli改为了@vue/cli，若你安装过旧版本请先[卸载](https://cli.vuejs.org/zh/guide/)。

### 拉取代码时注意事项
本项目基于airbnb的eslint规范，所以无论你用Windows、Mac OS还是UNIX，请使用0x0A（LF）换行符。
Git提供了一个“换行符自动转换”功能，默认处于自动模式，Windows环境必须做如下设置：
```
提交时转换为LF，检出时不转换
git config --global core.autocrlf input
```
由于vue大小写敏感，请修改Git默认设置
```
设置为区分大小写
git config core.ignorecase false
```
#### 1. 开发环境启动步骤
#### 1.1 使用npm安装依赖包
```
npm i
```
#### 1.2 开发环境编译启动
```
npm start
```
### 构建与部署
#### 2.1 构建内网版本并压缩到rar。
```
npm run build
```
#### 2.2 构建内网版本，打包所有资源但不压缩。
```
npm run build:in
```
#### 2.3 构建外网版本，公共组件引用cdn地址，图片引用新浪和阿里图床，不压缩。
```
npm run build:out
```
#### 2.4 构建内网版本，打包所有资源并压缩到rar。
```
npm run pkg:in
```
#### 2.5 构建外网版本，公共组件引用cdn地址，图片引用新浪和阿里图床，并压缩到rar。
```
npm run pkg:out
```
#### 2.6 构建外网版本并上传部署到服务器
```
npm run deploy:out
```
#### 2.7 构建外网脱敏版本并上传部署到服务器
```
npm run deploy:public
```
#### 2.8 分析报告
```
npm run report:out
```

## 目录结构

```bash
├── deployment                 # 自动化部署相关
├── public                     # public文件夹
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置(包含多种环境变量,详情见具体项目)
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json
```