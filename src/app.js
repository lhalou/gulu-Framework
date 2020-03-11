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
import spies from 'chai-spies'
chai.use(spies)
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
    //如果主观判断和实际是一样的，则测试通过
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    button.$el.remove() //删除button元素
    button.$destroy() //删除button对象
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()//挂载到内存中，没有报错，则测试正确
    let useElement = vm.$el.querySelector('use')
    //如果主观判断和实际是一样的，则测试通过
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    //删除创建的div
    vm.$el.remove() //删除button元素
    vm.$destroy() //删除button对象
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    //如果主观判断和实际是一样的，则测试通过
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq("1")
    //删除创建的div
    vm.$el.remove() //删除button元素
    vm.$destroy() //删除button对象
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    //如果主观判断和实际是一样的，则测试通过
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq("2")
    //删除创建的div
    vm.$el.remove() //删除button元素
    vm.$destroy() //删除button对象
}
//测试click事件
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon: 'settings'
        }
    })
    vm.$mount()//挂载到内存中，没有报错，则测试正确
    //期待click中的function执行，需要使用到mock
    let spy = chai.spy(function(){})
    vm.$on('click',spy)
    let button = vm.$el
    button.click()
    //函数的mock
    expect(spy).to.have.been.called()
}