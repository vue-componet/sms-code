<template>
  <div class="sms-code" @click="componentFocus">
    <div v-for="(v, i) in valueArr" :key="i" :class="['sms-code__item', { active: i === currentIndex }]">
      <span v-show="secret && v.value" class="sms-code__item_dot"></span>
      <span v-show="!secret" class="sms-code__item_text">{{ v.value }}</span>
      <span v-show="i === currentIndex && showCursor" :class="['sms-code__item_cursor', { ismargin: v.value }]"></span>
    </div>
    <input
      v-model="inputValue"
      type="text"
      class="sms-code__input"
      ref="smsCodeInput"
      @input="input($event)"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
  </div>
</template>

<script>
const nullCharacterRegExp = RegExp(/\s/, 'gi')
const numberRegExp = RegExp(/[^0-9]/, 'gi')
export default {
  name: 'sms-code',
  props: {
    // v-model,绑定值
    value: {
      type: String,
      default: '',
      required: true
    },
    // code类型，默认提供text|number两种类型，可通过formatter自定义
    codeType: {
      type: String,
      default: 'text',
      validator: (v) => {
        return ['text', 'number'].includes(v)
      }
    },
    // code长度，默认6位数
    codeCount: {
      type: [Number, String],
      default: 6
    },
    // 是否密文显示
    secret: {
      type: Boolean,
      default: false
    },
    // 是否显示光标
    showCursor: {
      type: Boolean,
      default: false
    },
    // 是否自动聚焦
    autoFocus: {
      type: Boolean,
      default: false
    },
    // 对输入内容处理
    formatter: {
      type: Function
    }
  },
  data() {
    return {
      inputValue: '',
      isFocus: false,
      valueArr: []
    }
  },
  computed: {
    currentIndex() {
      if (this.isFocus) {
        let length = this.inputValue.length
        let count = Number(this.codeCount)
        if (length === count) {
          return count - 1
        } else {
          return length
        }
      } else {
        return -1
      }
    }
  },
  watch: {
    value: {
      handler: function(val) {
        let v = this.formatters(val)
        this.rander(v)
        this.inputValue = v
      },
      immediate: true
    },
    inputValue: {
      handler: function(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.$emit('input', newVal)
          if (newVal.length === Number(this.codeCount)) {
            this.$emit('callback', newVal)
          }
        }
      },
      immediate: true
    },
    codeType: {
      handler: function() {
        let v = this.formatters(this.value)
        this.inputValue = v
        this.componentFocus()
      }
    },
    codeCount: {
      handler: function() {
        let v = this.formatters(this.value)
        if (v === this.value) {
          this.rander(v)
        } else {
          this.inputValue = v
        }
        this.componentFocus()
      }
    }
  },
  mounted() {
    if (this.autoFocus) {
      this.componentFocus()
    }
  },
  methods: {
    /**
     * 渲染函数
     */
    rander(val) {
      let vArr = val.split('')

      this.valueArr = []
      for (let i = 0; i < Number(this.codeCount); i++) {
        this.valueArr.push({
          key: i,
          value: i < vArr.length ? vArr[i] : ''
        })
      }
    },
    /**
     * input
     */
    input(e) {
      let inputVal = this.formatters(e.target.value)
      this.inputValue = inputVal
    },
    /**
     * 组件聚焦
     */
    componentFocus() {
      this.$refs.smsCodeInput.focus()
    },

    // ---------------------------- utils ---------------------
    /**
     * 处理number类型
     * @param {string} val 输入内容
     */
    formatterNumber(val) {
      return val.replace(numberRegExp, '')
    },
    formatters(val) {
      let v = val.replace(nullCharacterRegExp, '').substring(0, Number(this.codeCount))
      if (v) {
        if (this.codeType === 'number') {
          v = this.formatterNumber(v)
        }

        if (this.formatter) {
          v = this.formatter(v)
        }
      }
      return v
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
    overflow hidden
    &__input
      position fixed
      top -9999px
      left -9999px
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
      &_text
        color 12px
      &_cursor
        display block
        width 1px
        height 50%
        background-color #999
        animation cursorTwinkle .6s infinite alternate
        &.ismargin
          margin-left 2px
@keyframes cursorTwinkle
  0% 
    opacity 1
  100%
    opacity 0
</style>