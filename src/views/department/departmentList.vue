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
          <van-swipe-cell>
            <van-cell :title="node.name" @click="handleUpdate(node)" />
            <template #right>
              <van-button class="del-button" square type="danger" text="删除" @click="handleDelete(row)"/>
            </template>
          </van-swipe-cell>
        </template>
      </tree>
    </van-pull-refresh>
  </div>
</template>

<script>
import Tree from '@/components/tree/tree'
import { fetchDepartmentList, deleteDepartment } from '@/api/department/department'
export default {
  name: 'DepartmentList',
  components: {
    Tree
  },
  data() {
    return {
      list: [],
      listLoading: false,
      refreshing: false,
      finished: true,
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
      this.listLoading = true
      fetchDepartmentList(this.listQuery).then(response => {
        this.list = this.list.concat(response.data.data)
      })
    },
    onRefresh() {
      this.finished = false
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
    },
    handleDelete(row) {
      this.$dialog.confirm({
        message: '确定删除该数据吗？'
      }).then(() => {
        deleteDepartment(row.id).then(response => {
          if (response.data.success) {
            this.list.splice(this.list.indexOf(row), 1)
            this.$toast.success(response.data.message)
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>