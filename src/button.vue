<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click = "$emit('click')">
       <!--相当于button这个元素被点击了，这个组件就要触发一个click事件-->
        <!--iconPosition是一个变量-->

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
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }
    .g-button {font-size: var(--font-size);height: var(--button-height);padding: 0 1em;
        border-radius: var(--button-radius);background: var(--button-bg);border: 1px solid var(--border-color);
        display: inline-flex;justify-content: center;align-items: center;vertical-align: middle;
        &:hover {border-color: var(--border-color-hover);}
        &:active {background: var(--button-active-bg);}
        &:focus {outline: none;}
        > .content {order: 2;}
        > .icon {order: 1;margin-right: .3em;}
        &.icon-right {
            > .content {order: 1;}
            > .icon {order: 2;margin-right: 0;margin-left: .3em;}
        }
    }
    .loading {animation: spin 1s infinite linear;}

</style>