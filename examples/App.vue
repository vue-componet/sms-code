<template>
  <div>
    <sms-code 
      v-model="val"
      :formatter="formatter" 
      :codeCount="count" 
      :codeType="type"
      secret
      show-cursor
      class="my-sms-code"
      @callback="callback"
    />

    {{ val }}
    <button @click="clickButton">dianwo</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      list: [1,2,3],
      val: 'c123c',
      count: 6,
      type: 'text'
    }
  },
  methods: {
    clickButton() {
      // if (this.type === 'text') {
      //   this.type = 'number'
      // } else {
      //   this.type = 'text'
      // }
      // this.val = '22vvv'
      this.count = 4
    },
    callback(code) {
      console.log('callback', code)
    },
    formatter(val) {
      return val.replace(/1/gi, '9')
    }
  }
}
</script>

<style lang="stylus">
@import './assets/fonts/iconfont.css'
  .my-sms-code
    width 290px
    .sms-code__item
      border 0
      border-bottom 1px solid #ccc
      // 密文样式
      .sms-code__item_dot
        background #42b983
      // 输入值样式
      .sms-code__item_text
        color #42b983
      // 光标样式
      .sms-code__item_cursor
        background #42b983
</style>