<template>
  <div class="page">
    <nav-bar>
      <template #right>
        <van-image :src="require('@/assets/add.png')" class="menu-button" @click="handleCreate" />
      </template>
    </nav-bar>
    <van-pull-refresh v-model="refreshing" class="pull-refresh-list" @refresh="onRefresh">
      <tree v-model="list">
        <template #title="{node}">
          <van-cell :title="node.name" @click="handleUpdate(node)" />
        </template>
      </tree>
    </van-pull-refresh>
  </div>
</template>

<script>
import Tree from '@/components/tree/tree'
import { fetchDepartmentList } from '@/api/department/department'
export default {
  name: 'DepartmentList',
  components: {
    Tree
  },
  data() {
    return {
      list: [],
      refreshing: false,
      listQuery: {
        page: 1,
        limit: this.$store.getters.defaultPageSize
      }

    }
  },
  created() {
    this.onLoad()
  },
  methods: {
    onLoad() {
      fetchDepartmentList(this.listQuery).then(response => {
        this.list = response.data.data
      })
    },
    onRefresh() {
      this.listQuery.page = 1
      this.list = []
      this.onLoad()
    },
    handleCreate() {
      this.$router.push({
        path: '/departmentForm'
      })
    },
    handleUpdate(row) {
      this.$router.push({
        path: '/departmentForm',
        query: { id: row.id }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>