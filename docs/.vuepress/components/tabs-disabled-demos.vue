<template>
<templateDemos title="基本用法" :code="code">
  <g-tabs :selected.sync = "selectedTab">
    <g-tabs-head>
      <g-tabs-item name = "tabs1">tabs1</g-tabs-item>
      <g-tabs-item name = "tabs2" disabled>tabs2</g-tabs-item>
      <g-tabs-item name = "tabs3">tabs3</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name = "tabs1">tabs1 content</g-tabs-pane>
      <g-tabs-pane name = "tabs2">tabs2 content</g-tabs-pane>
      <g-tabs-pane name = "tabs3">tabs3 content</g-tabs-pane>
    </g-tabs-body>
  </g-tabs>
</templateDemos>


</template>

<script>
import Tabs from "../../../src/tabs"
import TabsBody from "../../../src/tabs-body"
import TabsHead from "../../../src/tabs-head"
import TabsItem from "../../../src/tabs-item"
import TabsPane from "../../../src/tabs-pane"
import Icon from "../../../src/icon"
import templateDemos from "./template-demos";
export default {
  name: 'tabs-name',
  components: {
    'g-tabs': Tabs,
    'g-tabs-body': TabsBody,
    'g-tabs-head': TabsHead,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane,
    'g-icon': Icon,
    templateDemos
  },
  data(){
    return {
      selectedTab: 'tabs1',
      code:`
      <g-tabs :selected.sync = "selectedTab">
  <g-tabs-head>
    <g-tabs-item name = "tabs1">tabs1</g-tabs-item>
    <g-tabs-item name = "tabs2" disabled>tabs2</g-tabs-item>
    <g-tabs-item name = "tabs3">tabs3</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name = "tabs1">tabs1 content</g-tabs-pane>
    <g-tabs-pane name = "tabs2">tabs2 content</g-tabs-pane>
    <g-tabs-pane name = "tabs3">tabs3 content</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
      `
    }
  }
}
</script>

<style lang = "scss" scoped>
</style>