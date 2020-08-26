<template>
  <div class = "wrapper">
      <g-input v-model = "message"></g-input>
      <p>{{message}}</p>  
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
      message: 'HelloWorld',
      content: `
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