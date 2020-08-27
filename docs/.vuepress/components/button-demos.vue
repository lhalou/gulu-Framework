<template>
    <templateDemos title="基本用法" :code="code">
      <div class = "wrapper">
              <g-button>默认按钮</g-button>
              <g-button disabled>禁用按钮</g-button>
              <g-button :loading = "loading1" @click = "loading1 = !loading1" >点击加载</g-button>
              <g-button icon = "settings" icon-position = "right">icon在右边</g-button>
            </div>
            <div class = "wrapper">
              <g-button icon = "settings">设置</g-button>
              <g-button icon = "thumbs-up">点赞</g-button>
              <g-button icon = "download">下载</g-button>  
            </div>   
      </div>  
    </templateDemos>
    
</template>

<script>
import Button from "../../../src/Button";
import templateDemos from "./template-demos";
export default {
  name: "button-demos",
  components: {
    'g-button': Button,
    templateDemos,
    
  },
  data(){
    return {
      loading1: true,
      code: `
      <div class = "wrapper">
  <g-button>默认按钮</g-button>
  <g-button disabled>禁用按钮</g-button>
  <g-button :loading = "loading1" @click = "loading1 = !loading1" >点击加载</g-button>
  <g-button icon = "settings" icon-position = "right">icon在右边</g-button>
</div>
<div class = "wrapper">
  <g-button icon = "settings">设置</g-button>
  <g-button icon = "thumbs-up">点赞</g-button>
  <g-button icon = "download">下载</g-button>  
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