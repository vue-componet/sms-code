# sms-code `vue`
仿京东淘宝验证码输入

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
| formatter | function | - | - | 否 | 自定义输入内容处理函数 |
