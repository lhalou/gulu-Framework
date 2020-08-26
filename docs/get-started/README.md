---
title: 快速上手
---

## 快速上手

### 搭建Vue的开发环境

```
vue create hello-world
```
如果你还没有安装vue-cli，请先安装[vue-cli](https://cli.vuejs.org/)，再进行下一步。

### 安装 咕噜 UI

```
yarn add li-gulu-test
#or
npm install li-gulu-test --save
```

## 开始使用

### 添加CSS样式

1. 用本框架，请在CSS中开启border-box
  ```
  *{box-sizing: border-box}
  *::before{box-sizing: border-box}
  *::after{box-sizing: border-box}
  //默认*元素不包括before 和 after
  ```
  IE8及以上浏览器都支持此样式
  你还需要设置颜色等变量（后续会改为SCSS变量）
  ```
  :root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --button-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
            --border-radius: 4px;
        }
  ```
  IE15及以上浏览器支持此样式

2. 安装gulu-Framework
  ```
  npm i --save li-gulu-test
  ```
3. 引入gulu-Framework
  ```
  import {Button,ButtonGroup,Icon} from 'li-gulu-test'
  import 'li-gulu-tes/dist/index.css'
  export default {
    name: 'app',
    components: {
      'g-button':Button,
      'g-icon':Icon
    }
  }
  ```




