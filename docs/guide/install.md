# 安装及使用

## 安装
```shell
npm install --save vue-sms-codes
```

## 全局引用
``` javascript

import smsCode from 'vue-sms-codes'
Vue.use(smsCode)
```

## 按需引入
``` javascript

import smsCode from 'vue-sms-codes'

...

components: {
  'sms-code': smsCode
}
```