<template>
  <templateDemos title="基本用法" :code="code">
    <div class = "wrapper">
      <g-input v-model = "message"></g-input>
      <p>{{message}}</p>  
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
      message: 'HelloWorld',
      code: `
        <g-input v-model = "message"></g-input>
<p>{{message}}</p>

data:{message: "HelloWorld"}
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