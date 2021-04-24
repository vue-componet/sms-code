# sms-code `vue`
仿京东淘宝验证码输入

## 部分效果预览
![default](http://img.coderdong.cn/VueComponent/sms-code__default.gif)

![show-cursor](http://img.coderdong.cn/VueComponent/sms-code__show-cursor.gif)

![secret](http://img.coderdong.cn/VueComponent/sms-code__secret.gif)

![diy-class](http://img.coderdong.cn/VueComponent/sms-code__diy-class.gif)

## 安装

```shell
npm install --save vue-sms-code
```

## 组件props

| 属性名 | 类型 | 默认值 | 可选值| 是否必须 | 说明 |
|--------|-----|--------|-------|----------|-----|
| v-model | string | - | - | 是 | 绑定值 |
| code-type | string | 'text' | 'text','number' | 否 | 输入类型 |
| code-count | number | 6 | - | 否 | code长度
| secret | boolean | false | true/false | 否 | 是否密文显示 |
| showCursor | boolean | false | true/false | 否 | 是否显示光标 |
| autoFocus | boolean | false | true/false | 否 | 是否自动聚焦 |
| formatter | function(value) | - | - | 否 | 自定义输入内容处理函数 |


## 组件event
| 事件名 | 回调参数 | 说明 |
|--------|---------|------|
| callback | code | code输入完成，返回输入的code码 |

## 详细文档
> 具体用法请查看[vue-sms-code文档]()