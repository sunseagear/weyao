<template>
  <van-cell :title="label" :value="name" :style="{width: width}" />
</template>

<script>
import { getOrganization } from '@/api/system/organization'

export default {
  name: 'SystemOrganizaiton',
  props: {
    value: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: '所属机构'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      organizationId: undefined,
      name: undefined
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.getOrganizationInfo()
      }
    }
  },
  methods: {
    getOrganizationInfo() {
      this.name = undefined
      if (this.isNull(this.value)) {
        return
      }
      getOrganization(this.value).then((data) => {
        this.name = data.data.data.name
      })
    }
  }
}
</script>
