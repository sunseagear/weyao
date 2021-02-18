<template>
  <div>
    <van-field v-model="currentData" :rules="rules" :label="label" :style="{width: width}" :placeholder="placeholder" :right-icon="rightIcon" readonly @click="dialogFormVisible = true"/>
    <van-popup v-model="dialogFormVisible" :title="label" round position="bottom" style="height: 50vh">
      <div ref="container">
        <van-picker
          :title="label"
          :columns="list"
          show-toolbar
          @confirm="confirm"
          @cancel="dialogFormVisible = false"
        />
      </div>
    </van-popup>
  </div>
</template>

<script>

import { deepClone } from '@/utils'

export default {
  name: 'Picker',
  props: {
    value: {
      type: String,
      default: undefined
    },
    rules: {
      type: Object,
      default: function() {
        return []
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: '选择器'
    },
    rightIcon: {
      type: String,
      default: 'arrow'
    },
    width: {
      type: String,
      default: '100%'
    },
    columns: {
      type: Array,
      default: function() {
        return []
      }
    },
    props: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {
      list: [],
      dialogFormVisible: false,
      currentData: undefined
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        console.log('val', val)
        if (val) {
          this.list.forEach(item => {
            if (item.value === val) {
              this.currentData = item.text
            }
          })
        }
      }
    },
    columns: {
      immediate: true,
      handler(val) {
        console.log('columns', val)
        if (val) {
          if (!this.props) {
            this.list = this.columns
          } else {
            this.list = []
            val.forEach(column => {
              const item = deepClone(column)
              item.text = column[this.props.text]
              item.value = column[this.props.value]
              this.list.push(item)
            })
          }
        }
      }
    }
  },
  methods: {
    confirm(value) {
      this.currentData = value.text
      this.$emit('input', value.value)
      this.dialogFormVisible = false
    }
  }
}

</script>

<style lang="less" scoped>
</style>
