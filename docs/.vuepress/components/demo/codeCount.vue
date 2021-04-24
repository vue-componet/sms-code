<template>
  <div>
    <sms-code v-model="val" :code-count="count" class="my-sms-code"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 'c123c',
      count: 4
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-sms-code
  width 290px
</style>