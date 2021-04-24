<template>
  <div>
    <sms-code v-model="val" class="diy-sms-code"/>
    <sms-code v-model="val" secret class="diy-sms-code"/>
    <sms-code v-model="val" show-cursor class="diy-sms-code"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 'c123c'
    }
  }
}
</script>

<style lang="stylus">
.diy-sms-code
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