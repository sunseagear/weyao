# 文鳐

### 介绍
《山海经-西山经》中：泰器之山，观水出焉，西流注于流沙。是多文鳐鱼，状如鲤鱼，鱼身而鸟翼，苍文而白首赤喙，常行西海，游于东海，以夜飞。其音如鸾鸡，其味酸甘，食之已狂，见则天下大穰。

文鳐鱼形状像鲤鱼，长着鱼的身体鸟的翅膀，浑身布满苍色的花纹，头是白色的，嘴是红色的，长在西海行走，在东海游动，夜晚飞行。它叫的声音像鸾鸡，肉味酸甜，食用可以治癫狂病，人们看到它就意味着天下五谷丰登。

<img width="50%" src="http://feilian.oss-cn-beijing.aliyuncs.com/cangjie/mobile/wenyao.jpeg" alt="文鳐">

图片来自网络

我们认为软件开发的第一要务就是速度。不论是做产品，接项目，甚至是接私活，速度都是成败的关键。
高效是一个团队的追求，更高的效率意味着更高的利润。高效也是一个程序员的追求，意味着更少的加班和更多的头发。

和《飞廉》一样，取名文鳐，就是希望做一款能够支撑项目快速开发的前端框架。

联系作者，加QQ:553671691,或者微信: Dothegod，加人请注明“飞廉”

### 源码地址

gitee:https://gitee.com/sunseagear/wenyao

[comment]: <> (github:https://github.com/sunseagear/wind)

### 在线预览

http://www.sunseagear.com/wenyao/

手机扫码代开

![Image text](http://feilian.oss-cn-beijing.aliyuncs.com/wenyao/doc/weyaoDemo.png)


[comment]: <> (### 在线文档)

[comment]: <> (http://www.sunseagear.com/)

    演示系统数据无法修改
### 仓颉低代码平台全面支持文鳐
* 一个运行在云端的低代码平台。
* 能够自动生成单表，树表，展开表，级联表（主子表），左树右表等常见的后台系统页面。
* 支持人员选择，图片上传，百度地图，富文本等多达十几种的常用组件的自动生成，十多种表单验证的自动集成。
* 轻松减少70%的代码开发量，让开发人员从重复的增删改查中解放出来，专注业务的开发。

登录地址:http://sunseagear.com:8081/admin/#/login

文档地址:http://www.sunseagear.com/#/doc/cangjie/start

模块配置
<img src="http://feilian.oss-cn-beijing.aliyuncs.com/cangjie/mobile/mobilemodel.PNG" style="border: 1px solid #a9a9a9;"><br>
表单配置
<img src="http://feilian.oss-cn-beijing.aliyuncs.com/cangjie/mobile/mobileForm.PNG" style="border: 1px solid #a9a9a9;"><br>
模型配置
<img src="http://feilian.oss-cn-beijing.aliyuncs.com/cangjie/mobile/mobilemodelproperty.PNG" style="border: 1px solid #a9a9a9;"><br>
生成代码
<img src="http://feilian.oss-cn-beijing.aliyuncs.com/cangjie/mobile/codegen.PNG" style="border: 1px solid #a9a9a9;"><br>


### 系统要求(推荐)
>* jdk 1.8+
>* tomcat 8.0+
>* mysql 5.7+
>* nodejs 12.0+
>* npm 6.0+

### 软件架构
>* 整个系统采用VantUI+VUE全家桶，是一个真正的商用级别的前端框架，任何人和组织可以免费使用
>* 集成了大量的前端样例，如echart，百度地图
>* 和《飞廉》相配套，组成一套完整的前后端体系
>* 仓颉可以同时支持《飞廉》、《文鳐》，生成的代码数据直接拉通。


### 项目文件组成
```
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # API请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── setting.js             # 界面配置
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json

```
### 前端运行（命令行）
```
# 安装依赖
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev

# 打包部署
npm run build

```

### 系统截图
首页

![Image text](http://feilian.oss-cn-beijing.aliyuncs.com/wenyao/doc/home.PNG)

登陆

![Image text](http://feilian.oss-cn-beijing.aliyuncs.com/wenyao/doc/login.PNG)

样例

![Image text](http://feilian.oss-cn-beijing.aliyuncs.com/wenyao/doc/feature.PNG)

模块样例

![Image text](http://feilian.oss-cn-beijing.aliyuncs.com/wenyao/doc/eventDemo.PNG)

地图样例

![Image text](http://feilian.oss-cn-beijing.aliyuncs.com/wenyao/doc/map.PNG)



