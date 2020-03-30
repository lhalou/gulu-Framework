<template>
    <div class="toast" ref = "wrapper" :class = "toastClasses">
        <div class = "message">
            <slot v-if = "!enableHtml"></slot>
            <div v-else v-html = "$slots.default[0]"></div>
        </div>
        <div class="line" ref = "line"></div>
        <span class = "close" v-if = "closeButton" @click = "onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'GuluToast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 5
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator(value){
                    return ['top','bottom','middle'].indexOf(value) >= 0
                }
            }
        },
        mounted(){
            this.updateStyles()
            this.execAutoClose()
        },
        computed: {
            toastClasses(){
                return {
                    [`position-${this.position}`]:true
                }
            }
        },
        methods: {
            updateStyles(){
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })

            },
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoCloseDelay * 1000)
                }
            },
            close(){
                this.$el.remove() //把元素从DOM结构中解绑
                this.$destroy() // 销毁元素绑定的事件
            },
            onClickClose(){
                this.close()
                if(this.closeButton && typeof this.closeButton.callback === "function"){
                    this.closeButton.callback()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0,0,0,0.75);
    $toast-color: #fff;
    .toast {
        position: fixed;padding: 0 16px; font-size: $font-size; line-height: 1.8;
        min-height: $toast-min-height; display: flex; align-items: center; background: $toast-bg;
        color: $toast-color; border-radius: 4px; box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        left: 50%;
        .message {padding: 8px 0;}
        .close {
            padding-left: 16px; flex-shrink: 0;
        }
        .line {
            height: 100%; border-left: 1px solid #666; margin-left: 16px;
        }
        &.position-top { transform: translateX(-50%); top: 0;}
        &.position-bottom { transform: translateX(-50%); bottom: 0;}
        &.position-middle { top: 50%; transform: translate(-50%,-50%);}
    }

</style>