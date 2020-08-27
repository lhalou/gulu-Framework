<template>
<div>
  <h5>上下布局</h5>
  <g-layout class = "gLayout">  
    <g-header >header</g-header>
    <g-content >content</g-content>
  </g-layout>
  <h5>上中下布局</h5>
  <g-layout class = "gLayout"> 
    <g-header >header</g-header>
    <g-content >content</g-content>
    <g-footer >footer</g-footer>
  </g-layout>
  <h5>左右布局</h5>
  <g-layout class = "gLayout">
    <g-sider>sider</g-sider>
    <g-content >content</g-content>
  </g-layout>

  <h5>左中右布局</h5>
  <g-layout class = "gLayout">
    <g-sider>sider</g-sider>
    <g-content >content</g-content>
    <g-sider>sider</g-sider>
  </g-layout>

  <h5>组合布局1</h5>
  <g-layout>
    <g-header>Header</g-header>
    <g-layout>
    <g-sider style="width:100px">Sider</g-sider>
    <g-content>Content</g-content>
    </g-layout>
  </g-layout>

  <h5>组合布局2</h5>
  <g-layout>
    <g-header>Header</g-header>
    <g-layout>
      <g-sider style="width:100px">Sider</g-sider>
    <g-layout>
      <g-content>Content</g-content>
      <g-footer>footer</g-footer>
    </g-layout>
    </g-layout>
  </g-layout>

  <h5>组合布局3</h5>
  <g-layout>
    <g-sider style="width:100px">Sider</g-sider>
    <g-layout>
      <g-header>Header</g-header>
      <g-content>Content</g-content>
      <g-footer>footer</g-footer>
    </g-layout>
  </g-layout>
  <pre>
    <code>{{content}}</code>
  </pre>
</div>
        
</template>

<script>
import Layout from "../../../src/layout"
import Header from "../../../src/header"
import Footer from "../../../src/footer"
import Content from "../../../src/content"
import Sider from "../../../src/sider"
export default {
  name: 'layout-demos',
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-footer': Footer,
    'g-content': Content,
    'g-sider': Sider
  },
  data(){
    return {
     content: `
        <h5>上下布局</h5>
        <g-layout class = "gLayout">  
          <g-header >header</g-header>
          <g-content >content</g-content>
        </g-layout>
        <h5>上中下布局</h5>
        <g-layout class = "gLayout"> 
          <g-header >header</g-header>
          <g-content >content</g-content>
          <g-footer >footer</g-footer>
        </g-layout>
        <h5>左右布局</h5>
        <g-layout class = "gLayout">
          <g-sider>sider</g-sider>
          <g-content >content</g-content>
        </g-layout>

        <h5>左中右布局</h5>
        <g-layout class = "gLayout">
          <g-sider>sider</g-sider>
          <g-content >content</g-content>
          <g-sider>sider</g-sider>
        </g-layout>

        <h5>组合布局1</h5>
        <g-layout>
          <g-header>Header</g-header>
          <g-layout>
          <g-sider style="width:100px">Sider</g-sider>
          <g-content>Content</g-content>
          </g-layout>
        </g-layout>

        <h5>组合布局2</h5>
        <g-layout>
          <g-header>Header</g-header>
          <g-layout>
            <g-sider style="width:100px">Sider</g-sider>
          <g-layout>
            <g-content>Content</g-content>
            <g-footer>footer</g-footer>
          </g-layout>
          </g-layout>
        </g-layout>

        <h5>组合布局3</h5>
        <g-layout>
          <g-sider style="width:100px">Sider</g-sider>
          <g-layout>
            <g-header>Header</g-header>
            <g-content>Content</g-content>
            <g-footer>footer</g-footer>
          </g-layout>
        </g-layout>
        .footer,.header{
          background: #b3c0d1;
          line-height: 40px;
          text-align: center;
        }
        .content {
          background: #e9eef3;
          line-height: 100px;
          text-align: center;
        }
        .sider {
          background: #d3dce6;
          text-align: center;
          line-height: 100px;
        }
      `
    }
  }
}
</script>
<style lang = "scss" scoped>
.footer,.header{
  background: #b3c0d1;
  line-height: 40px;
  text-align: center;
}
.content {
  background: #e9eef3;
  line-height: 100px;
  text-align: center;
}
.sider {
  background: #d3dce6;
  text-align: center;
  line-height: 100px;
}
</style>