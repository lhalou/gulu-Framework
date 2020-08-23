<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click = "$emit('click')">
       <!--相当于button这个元素被点击了，这个组件就要触发一个click事件-->
        <!--iconPosition是一个变量-->
         <!-- icon 这个变量存在，才会展示g-icon 这个组件，否则不展示 -->
         <!-- 没有loading 只有icon才展示Icon -->
        <g-icon v-if = "icon && !loading" class = "icon" :name = "icon"></g-icon>
        <g-icon class = "loading icon" v-if = "loading" name = "loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>

    </button>
</template>

<script>
    import Icon from './icon.vue'
    export default {
        name: 'Gulu-button',
        components: {
            'g-icon': Icon
        },
        props: {
            icon: {},
            loading: {
              type: Boolean,
              default: false
            },
            //iconPosition定义icon的位置，left or right,其默认值是left，传入的值只接受left和right 
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) {
                    return value === 'left' || value === 'right'
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }
    .g-button {font-size: $font-size;height: $button-height;padding: 0 1em;
        border-radius: $border-radius;background: $button-bg;border: 1px solid $border-color;
        display: inline-flex;justify-content: center;align-items: center;vertical-align: middle;
        &:hover {border-color: $border-color-hover;}
        &:active {background: $button-active-bg;}
        &:focus {outline: none;}
        > .content {order: 2;}
        > .icon {order: 1;margin-right: .3em;}
        &.icon-right {
            > .content {order: 1;}
            > .icon {order: 2;margin-right: 0;margin-left: .3em;}
        }
    }
    .loading {animation: spin 1s infinite linear;} /*无限 线性转 */

</style>