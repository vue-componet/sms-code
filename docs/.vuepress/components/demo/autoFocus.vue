<template>
  <div>
    <sms-code v-model="val" auto-focus class="my-sms-code"/>
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

<style lang="stylus" scoped>
.my-sms-code
  width 290px
</style>