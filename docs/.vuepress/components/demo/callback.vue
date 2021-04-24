<template>
  <div>
    <sms-code v-model="val" class="my-sms-code" @callback="callback"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: ''
    }
  },
  methods: {
    callback(code) {
      console.log('callback', code)
    },
  }
}
</script>

<style lang="stylus" scoped>
.my-sms-code
  width 290px
</style>