<template>
  <templateDemos title="基本用法" :code="code">
    <div class = "wrapper">
      <g-input value = "默认输入框"></g-input>
      <g-input value = "禁用输入框" disabled></g-input>
      <g-input value = "只读输入框" readonly></g-input>
      <g-input value = "错误信息" error = "错误信息"></g-input>   
    </div> 
  </templateDemos> 
</template>
    


<script>
import Input from "../../../src/input";
import templateDemos from "./template-demos";
export default {
  name: "button-demos",
  components: {
    'g-input': Input,
    templateDemos
    
  },
  data(){
    return {
      code: `
        <g-input value = "默认输入框"></g-input>
<g-input value = "禁用输入框" disabled></g-input>
<g-input value = "只读输入框" readonly></g-input>
<g-input value = "错误信息" error = "错误信息"></g-input> 
      `
    }
     
  }
  
};
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 10px;
  }
</style>