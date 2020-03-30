import Toast from './toast.vue'


let currentToast
export default {
    install(Vue,options){
        Vue.prototype.$toast = function(message,toastOptions){
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast({
                Vue,
                message,
                propsData:toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }

    }
}

//重构: 提取函数
/*helper函数*/
function createToast({Vue,message,propsData,onClose}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount() //出现在内存中
    toast.$on('close',onClose)
    document.body.appendChild(toast.$el) //出现在页面中
    return toast
}