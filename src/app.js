import Vue from "vue"
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})

//单元测试
import chai from 'chai'
const expect = chai.expect
{
    //动态生成一个按钮
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon: 'settings'
        }
    })
    button.$mount()//挂载到内存中，没有报错，则测试正确
    let useElement = button.$el.querySelector('use')
    //如果主管判断和实际是一样的，则测试通过
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
}
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData:{
            icon: 'settings',
            loading: true
        }
    })
    button.$mount()//挂载到内存中，没有报错，则测试正确
    let useElement = button.$el.querySelector('use')
    //如果主管判断和实际是一样的，则测试通过
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}