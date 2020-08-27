<template>
  <templateDemos title="基本用法" :code="code">
    <g-row :gutter="20">
      <g-col span = "7">
        <div class = "content g-col1">7</div>
      </g-col>
      <g-col span = "7">
        <div class = "content g-col2">7</div>
      </g-col>
      <g-col span = "7">
        <div class = "content g-col1">7</div>
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
        <g-row :gutter="20">
  <g-col span = "7">
    <div class = "content g-col1">7</div>
  </g-col>
  <g-col span = "7">
    <div class = "content g-col2">7</div>
  </g-col>
  <g-col span = "7">
    <div class = "content g-col1">7</div>
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