<template>
    <div class = "g-button-group">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: 'Gulu-button-group',
        //防止用户随意嵌套标签
        //this.$el 获取到所有的标签
        mouted(){
            for (let node of this.$el.children){
                let name = node.nodeName.toLowerCase()
                if( name !== "button"){
                    console.warn(`g-button-group的子元素应该全是g-button,但是你写的是${name}`)
                }
            }
        }
    }
</script>

<style lang = "scss" scoped>
    $border-radius: 3px;
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }   
            &:first-child {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius:$border-radius;
            }
            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }

    }
</style>