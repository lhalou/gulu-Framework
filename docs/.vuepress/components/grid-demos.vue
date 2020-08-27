<template>
  <templateDemos title="基本用法" :code="code">
  <g-row>
        <g-col span = "24">
          <div class = "content g-col1">24</div>
        </g-col>
    </g-row>
    <g-row>
        <g-col span = "12">
          <div class = "content g-col1">12</div>
        </g-col>
        <g-col span = "12">
          <div class = "content g-col2">12</div>
        </g-col>
    </g-row>
    <g-row>
        <g-col span = "8">
          <div class = "content g-col1">8</div>
        </g-col>
        <g-col span = "8">
          <div class = "content g-col2">8</div>
        </g-col>
        <g-col span = "8">
          <div class = "content g-col1">8</div>
        </g-col>
    </g-row>
    <g-row>
        <g-col span = "6">
          <div class = "content g-col1">6</div>
        </g-col>
        <g-col span = "6">
          <div class = "content g-col2">6</div>
        </g-col>
        <g-col span = "6">
          <div class = "content g-col1">6</div>
        </g-col>
        <g-col span = "6">
          <div class = "content g-col2">6</div>
        </g-col>
    </g-row>
    <g-row>
        <g-col span = "4">
          <div class = "content g-col1">4</div>
        </g-col>
        <g-col span = "4">
          <div class = "content g-col2">4</div>
        </g-col>
        <g-col span = "4">
          <div class = "content g-col1">4</div>
        </g-col>
        <g-col span = "4">
          <div class = "content g-col2">4</div>
        </g-col>
        <g-col span = "4">
          <div class = "content g-col1">4</div>
        </g-col>
        <g-col span = "4">
          <div class = "content g-col2">4</div>
        </g-col>
    </g-row>
  </templateDemos>
 
  
</template>

<script>
import Col from "../../../src/col"
import Row from "../../../src/row"
import templateDemos from "./template-demos";
export default {
  name: 'grid-demos',
  components: {
    'g-col': Col,
    'g-row': Row,
    templateDemos
  },
  data(){
    return {
      code: `
        <g-row>
  <g-col span = "24">
    <div class = "content g-col1">24</div>
  </g-col>
</g-row>
<g-row>
  <g-col span = "12">
    <div class = "content g-col1">12</div>
  </g-col>
  <g-col span = "12">
    <div class = "content g-col2">12</div>
  </g-col>
</g-row>
<g-row>
  <g-col span = "8">
    <div class = "content g-col1">8</div>
  </g-col>
  <g-col span = "8">
    <div class = "content g-col2">8</div>
  </g-col>
  <g-col span = "8">
    <div class = "content g-col1">8</div>
  </g-col>
</g-row>
<g-row>
  <g-col span = "6">
    <div class = "content g-col1">6</div>
  </g-col>
  <g-col span = "6">
    <div class = "content g-col2">6</div>
  </g-col>
  <g-col span = "6">
    <div class = "content g-col1">6</div>
  </g-col>
  <g-col span = "6">
    <div class = "content g-col2">6</div>
  </g-col>
</g-row>
<g-row>
  <g-col span = "4">
    <div class = "content g-col1">4</div>
  </g-col>
  <g-col span = "4">
    <div class = "content g-col2">4</div>
  </g-col>
          
  <g-col span = "4">
    <div class = "content g-col1">4</div>
  </g-col>
  <g-col span = "4">
    <div class = "content g-col2">4</div>
  </g-col>
  <g-col span = "4">
    <div class = "content g-col1">4</div>
  </g-col>
  <g-col span = "4">
    <div class = "content g-col2">4</div>
  </g-col>
  </g-row>
        
      `
    }
  }
}
</script>

<style lang = "scss" scoped>
.row {
  margin-bottom: 5px;
  height: 30px;
  &:last-child {
    margin-bottom: 0;
  }
}
.col {
  border-radius: 3px;
}
.g-col1 {
  background:#b3c0d1;  
}
.g-col2 {
  background: #e9eef3;
}
.content {
  border-radius: 3px;
  min-height: 30px;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
}
</style>