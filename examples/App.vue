<template>
  <div>
    <sms-code v-model="val" codeType="number" class="sms-code" @callback="callback"/>
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
      val: '1233'
    }
  },
  methods: {
    clickButton() {
      this.val = '456'
    },
    callback() {
      console.log('callback')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import './assets/fonts/iconfont.css'
  .sms-code
    width 290px
</style>