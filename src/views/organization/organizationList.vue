<template>
  <div>
    <nav-bar />
    <tree v-model="list">
      <template #title="{node}">
        <van-cell :title="node.name" @click="handleUpdate(node)" />
      </template>
    </tree>
  </div>
</template>

<script>
import Tree from '@/components/tree/tree'
import { fetchOrganizationList } from '@/api/system/organization'

export default {
  name: 'OrganizaitonList',
  components: {
    Tree
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.onLoad()
  },
  methods: {
    onLoad() {
      fetchOrganizationList().then((data) => {
        this.list = data.data.data
      })
    },
    handleCreate() {
      this.$router.push({
        path: '/organizationForm'
      })
    },
    handleUpdate(row) {
      this.$router.push({
        path: '/organizationForm',
        query: { id: row.id }
      })
    }
  }
}
</script>

<style scoped lang="less">

</style>
