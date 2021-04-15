<template>
  <div>
    <nav-bar />
    <van-form @submit="temp.id ? updateData() : createData()">
      <tree-selector ref="treeSelector" v-model="temp.parentId" label="上级目录" placeholder="请选择上级目录" />
      <van-field v-model="temp.name" :rules="[{ required: true, message: '请填写标题' }]" label="标题" placeholder="请输入标题" />
      <van-cell>
        <van-button style="width: 100%;" native-type="submit">发布</van-button>
      </van-cell>
    </van-form>
  </div>

</template>

<script>
import { fetchOrganizationList } from '@/api/system/organization'
import { createEvent, updateEvent } from '@/api/event/event'
import TreeSelector from '../../components/tree/treeSelector'
import { getOrganization } from '../../api/system/organization'

export default {
  name: 'OrganizationForm',
  components: { TreeSelector },
  data() {
    return {
      temp: {},
      list: []
    }
  },
  created() {
    this.onLoad()
    const id = this.$route.query.id
    if (!this.isNull(id)) {
      this.handleUpdate(id)
    } else {
      this.resetTemp()
    }
  },
  methods: {
    onLoad() {
      fetchOrganizationList().then((data) => {
        this.list = data.data.data
        this.$refs.treeSelector.setList(this.list)
      })
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        remarks: undefined,
        tenantId: undefined,
        title: undefined,
        userId: undefined,
        organizationId: undefined,
        date: undefined,
        content: undefined,
        location: undefined,
        image: undefined
      }
    },
    createData() {
      createEvent(this.temp).then(response => {
        if (response.data.success) {
          this.$toast.success(response.data.message)
          this.$router.go(-1)
        }
      })
    },
    handleUpdate(id) {
      this.resetTemp()
      getOrganization(id).then(response => {
        if (response.data.success) {
          this.temp = response.data.data
        }
      })
    },
    updateData() {
      updateEvent(this.temp).then(response => {
        if (response.data.success) {
          this.$toast.success(response.data.message)
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>

<style type="less" scoped>

</style>
