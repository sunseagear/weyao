<template>
  <div>
    <van-field v-model="currentData" :label="label" :style="{width: width}" right-icon="calendar-o" readonly @click="dialogFormVisible = true"/>
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

export default {
  name: 'Picker',
  props: {
    value: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: '时间选择'
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
      type: {
        text: String,
        value: String
      },
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
            this.columns.forEach(column => {
              const item = {}
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
      this.currentData = this.list[value].text
      this.$emit('input', this.list[value].value)
      this.dialogFormVisible = false
    }
  }
}

</script>

<style lang="less" scoped>
</style>
