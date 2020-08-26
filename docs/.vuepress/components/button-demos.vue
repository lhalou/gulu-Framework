<template>
    <div>
      <g-button>默认按钮</g-button>
      <g-button icon = "settings">设置</g-button>
      <g-button icon = "thumbs-up">点赞</g-button>
      <g-button icon = "download">下载</g-button>
      <g-button icon = "settings" icon-position = "right">icon在右边</g-button>
      <g-button :loading = "loading1" @click = "loading1 = !loading1" >设置</g-button>
      <pre>
        <code>{{content}}</code>
      </pre>
    </div>
</template>

<script>
import Button from "../../../src/Button";
export default {
  name: "button-demos",
  components: {
    'g-button': Button
  },
  data(){
    return {
      loading1: true,
      content: `
        <g-button>默认按钮</g-button>
        <g-button icon = "settings">设置</g-button>
        <g-button icon = "thumbs-up">点赞</g-button>
        <g-button icon = "download">下载</g-button>
        <g-button icon = "settings" icon-position = "right">设置</g-button>
        <g-button :loading = "loading1" @click = "loading1 = !loading1" >设置</g-button>
      `
    }
     
  }
  
};
</script>

<style lang="scss" scoped>

</style>