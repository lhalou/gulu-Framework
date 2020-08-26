<template>
  <div>
    <div class = "wrapper">
      <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button>全部</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
      </g-button-group>
    </div> 
      <pre>
        <code>{{content}}</code>
      </pre>
  </div>  
</template>

<script>
import Button from "../../../src/Button";
import ButtonGroup from "../../../src/button-group"

export default {
  name: "button-demos",
  components: {
    'g-button': Button,
    'g-button-group':ButtonGroup
    
  },
  data(){
    return {
      loading1: true,
      content: `
         <div class = "wrapper">
            <g-button-group>
              <g-button icon="left">上一页</g-button>
              <g-button>全部</g-button>
              <g-button icon="right" icon-position="right">下一页</g-button>
            </g-button-group>
        </div> 
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