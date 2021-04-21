<template>
  <div>
    <sms-code v-model="val" :formatter="formatter" codeType="number" class="my-sms-code" @callback="callback"/>
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
      val: '123c3c'
    }
  },
  methods: {
    clickButton() {
      this.val = '456'
    },
    callback() {
      console.log('callback')
    },
    formatter(val) {
      return val.replace(/1/gi, '9')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './assets/fonts/iconfont.css'
  .my-sms-code
    width 290px
</style>