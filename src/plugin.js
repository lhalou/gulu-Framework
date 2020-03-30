import Toast from './toast.vue'


let currentToast
export default {
    install(Vue,options){
        Vue.prototype.$toast = function(message,toastOptions){
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({Vue,message,propsData:toastOptions})
        }

    }
}

//重构: 提取函数
/*helper函数*/
function createToast({Vue,message,propsData}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount() //出现在内存中
    document.body.appendChild(toast.$el) //出现在页面中
    return toast
}