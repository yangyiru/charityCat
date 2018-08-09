### charityCat  公益猫介绍

> 公益猫项目是一款以分享日记的形式发布流浪猫们的位置、健康状况，进而寻找愿意收养猫猫们的主人，帮助猫猫们找到港湾的同时，也帮助了一些想要养猫的人 

### 项目准备

你需要在安装npm和git,这个项目基于ES2015+, vue, vuex, vue-router, axois, element-ui所有涉及后台数据的部分由专业后端人员提供，本地测试环境与生产环境（上线地址需组长提供）已配置完毕。事先了解和学习这些知识将会极大的帮助这个项目的完成以及整个团队的协助。

#### 目录介绍 

```
- sloga引导页
- 登录/注册/忘记密码  
- 权限验证
  - 页面权限/游客权限
  - 指令权限
- 组件
  - 弹框组件
  - 图片上传组件
  - 定位组件
  - 城市选择组件
  - 点赞组件
  - 收藏按钮组件
  ......
- 公益猫首页
- 社区         
- 日记         
- 发布
- 我的
.....

```

#### 开发

```html
# clone the project
https://github.com/yangyiru/charityCat.git

# install dependency
npm install

# develop
npm run dev
```

#### 发布

```html
# build for test
npm run test

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```




