<template>
  <div>
    <nav-bar />
    <tree v-model="list">
      <template #title="{node}">
        <van-cell :title="node.name" />
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
    click(event, node) {
      console.log('node click', node)
    },
    onLoad() {
      fetchOrganizationList().then((data) => {
        this.list = data.data.data
      })
    }
  }
}
</script>

<style scoped lang="less">

</style>
