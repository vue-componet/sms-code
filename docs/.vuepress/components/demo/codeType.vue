<template>
  <div>
    <sms-code v-model="val" :code-type="type" class="my-sms-code"/>

    <button @click="text">text类型</button>
    <button @click="number">number类型</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: 'c123c',
      type: 'text'
    }
  },
  methods: {
    text() {
      this.type = 'text'
      this.val = 'cc123'
    },
    number() {
      this.type = 'number'
      this.val = 'cc123'
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-sms-code
  width 290px
</style>