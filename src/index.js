import getForeignAccountParamsObject from './configs/params.js'
import ForeignRealAccountComponent from './components/Real.vue'
import ForeignDemoAccountComponent from './components/Demo.vue'
import ForeignLoginAccountComponent from './components/Login.vue'

const Plugin = {
    // eslint-disable-next-line
    install(Vue, params = {}) {

        // 自定义组件名
        let {ForeignRealAccount, ForeignDemoAccount, ForeignLoginAccount} = params

        console.log(params);
        // 注册私有属性
        Vue.prototype.$ava = {};
        // Vue.prototype.$ava.foreign_account = getForeignAccountParamsObject(params.params)


        // 国外注册
        Vue.component(ForeignRealAccount || 'foreign-real-account', ForeignRealAccountComponent); // 真实注册
        Vue.component(ForeignDemoAccount || 'foreign-demo-account', ForeignDemoAccountComponent); // 模拟注册
        Vue.component(ForeignLoginAccount || 'foreign-login-account', ForeignLoginAccountComponent); // 登陆
    }
}

export default Plugin
