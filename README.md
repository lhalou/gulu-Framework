# gulu  一个UI组件造轮子

[![Build Status](https://travis-ci.org/lhalou/gulu-Framework.svg?branch=master)](https://travis-ci.org/lhalou/gulu-Framework)

## 介绍

这是我在学习Vue过程中，做的一个UI框架。

## 开始使用

1. 添加CSS样式

  使用本框架，请在CSS中开启border-box
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

 


