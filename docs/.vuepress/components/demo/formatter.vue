<template>
  <div>
    <sms-code v-model="val1" :formatter="formatter1" class="my-sms-code"/>
    <sms-code v-model="val2" :formatter="formatter2" class="my-sms-code"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val1: '',
      val2: ''
    }
  },
  methods: {
    // 将输入的1转化为9
    formatter1(val) {
      return val.replace(/1/gi, '9')
    },
    // 禁止输入小写字母a
    formatter2(val) {
      return val.replace(/a/gi, '')
    },
  }
}
</script>

<style lang="stylus" scoped>
.my-sms-code
  width 290px
</style>