import Toast from './toast.vue'
export default {
    install(Vue,options){
        Vue.prototype.$toast = function(message){
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount() //出现在内存中
            document.body.appendChild(toast.$el) //出现在哎页面中
        }

    }
}