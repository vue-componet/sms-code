import SmsCode from './SmsCode'

const install = function(Vue) {
  Vue.component(SmsCode.name, SmsCode)
}

SmsCode.install = install

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default SmsCode;