<template>
  <div>
    <van-field v-model="currentDateStr" :rules="rules" :label="label" :style="{width: width}" :placeholder="placeholder" right-icon="calendar-o" readonly @click="dialogFormVisible = true"/>
    <van-popup v-model="dialogFormVisible" :title="label" round position="bottom" style="height: 50vh">
      <div ref="container">
        <van-datetime-picker
          v-model="currentDate"
          :min-date="minDate"
          :max-date="maxDate"
          :type="type"
          :title="label"
          @confirm="confirm"
          @cancel="dialogFormVisible = false"
        />
      </div>
    </van-popup>
  </div>
</template>

<script>

import { parseTime } from '@/utils'

export default {
  name: 'DatePicker',
  props: {
    value: {
      type: String,
      default: undefined
    },
    rules: {
      type: Array,
      default: function() {
        return []
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    pattern: {
      type: String,
      default: '{y}-{m}-{d} {h}:{i}:{s}'
    },
    type: {
      type: String,
      default: 'datetime'
    },
    label: {
      type: String,
      default: '时间选择'
    },
    width: {
      type: String,
      default: '100%'
    },
    minDate: {
      type: String,
      default: undefined
    },
    maxDate: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      container: null,
      dialogFormVisible: false,
      currentDateStr: undefined,
      currentDate: new Date()
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        console.log('val', val)
        if (val) {
          this.currentDate = parseTime(val, this.pattern)
          this.currentDateStr = val
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    confirm() {
      this.currentDateStr = parseTime(this.currentDate, this.pattern)
      this.$emit('input', this.currentDateStr)
      this.dialogFormVisible = false
    }
  }
}

</script>

<style lang="less" scoped>
</style>
