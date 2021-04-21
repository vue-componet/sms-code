import Vue from 'vue'
import App from './App'
import './index.css'

import smsCode from '@/index'

Vue.use(smsCode)

// Vue.component(MyButton.name, MyButton)

new Vue({
	render: h => h(App)
}).$mount('#app')