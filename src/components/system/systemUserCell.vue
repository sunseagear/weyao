<template>
  <van-cell :title="label" :value="username" :style="{width: width}" />
</template>

<script>
import { getUser } from '@/api/system/user'

export default {
  name: 'SysUser',
  props: {
    value: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: '用户选择'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      container: null,
      dialogFormVisible: false,
      username: undefined
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.getUserInfo()
      }
    }
  },
  methods: {
    getUserInfo() {
      this.username = undefined
      if (this.value === undefined) {
        return
      }
      getUser(this.value).then(response => {
        if (response.data.success) {
          this.username = response.data.data.realname
        }
      })
    }
  }
}

</script>

