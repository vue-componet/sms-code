<template>
  <div class="sms-code">
    <div v-for="(v, i) in valueArr" :key="i" :class="['sms-code__item', { active: i === currentIndex }]">
      <span v-show="isShowDot" class="sms-code__item_dot"></span>
      <span v-show="!isShowDot" >{{ v.value }}</span>
    </div>
    <input v-model="inputValue" type="text" class="sms-code__input" @input="input($event)">
  </div>
</template>

<script>
const nullCharacterRegExp = RegExp('\s', 'gi')
const numberRegExp = RegExp('[^0-9]', 'gi')
export default {
  name: 'sms-code',
  props: {
    value: {
      type: String,
      default: ''
    },
    codeType: {
      type: String,
      default: 'text',
      validator: (v) => {
        return ['text', 'number', 'password'].includes(v)
      }
    },
    codeCount: {
      type: Number,
      default: 6
    },
    formatter: {
      type: Function
    }
  },
  data() {
    return {
      inputValue: '',
      currentIndex: 0,
      valueArr: []
    }
  },
  computed: {
    isShowDot() {
      return this.codeType === 'password'
    }
  },
  watch: {
    value: {
      handler: 'init',
      immediate: true
    },
    currentIndex: {
      handler: function(val) {
        if (val === this.codeCount) {
          this.$emit('callback')
        }
      }
    },
    inputValue: {
      handler: function(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.$emit('input', newVal)
        }
      },
      immediate: true
    }
  },
  methods: {
    init(val) {
      let v = val.replace(nullCharacterRegExp, '')
      if (v) {
        if (this.codeType === 'number') {
          v = this.formatterNumber(v)
        }

        if (this.formatter) {
          v = this.formatter(v)
        }
      }

      let vArr = v.split('')
      this.inputValue = v
      this.currentIndex = vArr.length

      this.valueArr = []
      for (let i = 0; i < this.codeCount; i++) {
        this.valueArr.push({
          key: i,
          value: i < vArr.length ? vArr[i] : ''
        })
      }
    },
    input(e) {
      let inputVal = e.target.value.replace(nullCharacterRegExp, '').substring(0, this.codeCount)
      
      this.inputValue = inputVal
    },

    // ---------------------------- utils ---------------------
    formatterNumber(val) {
      return val.replace(numberRegExp, '')
    }
    
  }
}
</script>

<style lang="stylus" scoped>
  .sms-code
    position relative
    display flex
    justify-content space-between
    align-items center
    &__input
      position absolute
      top 0
      left 0 
      width 100%
      height 100%
      margin 0
      padding 0
      border none
      opacity 0
    &__item
      display flex 
      justify-content center
      align-items center
      box-sizing border-box
      width 40px
      height 40px
      border-radius 2px
      border 1px solid #eee
      &+&
        margin-left 10px
      &.active
        border-color #1e88e5
      &_dot
        width 8px
        height 8px
        border-radius 8px
        background-color #666
</style>