<template>
  <div class = "wrapper">
      <g-input value = "默认输入框"></g-input>
      <g-input value = "禁用输入框" disabled></g-input>
      <g-input value = "只读输入框" readonly></g-input>
      <g-input value = "错误信息" error = "错误信息"></g-input> 
      <pre>
        <code>{{content}}</code>
      </pre>
  </div>  
</template>
    


<script>
import Input from "../../../src/input";

export default {
  name: "button-demos",
  components: {
    'g-input': Input
    
  },
  data(){
    return {
      content: `
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