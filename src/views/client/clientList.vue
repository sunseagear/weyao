<template>
  <div class="page">
    <nav-bar>
      <template #right>
        <van-image :src="require('@/assets/add.png')" width="23px" @click="handleCreate" />
      </template>
    </nav-bar>
    <van-pull-refresh v-model="refreshing" class="pull-refresh-list" @refresh="onRefresh">
      <van-list
        v-model="listLoading"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="onLoad">

        <van-swipe-cell
          v-for="(row) in list"
          :key="row.id">
          <van-cell @click="handleUpdate(row)">
            <div>
              <div>姓名:{{ row.name }}</div>
              <div>手机:{{ row.phone }}</div>
            </div>
          </van-cell>
          <template #right>
            <van-button class="del-button" square type="danger" text="删除" @click="handleDelete(row)"/>
          </template>
        </van-swipe-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { fetchClientList, deleteClient } from '@/api/client/client'
export default {
  name: 'ClientList',
  data() {
    return {
      list: [],
      listLoading: false,
      refreshing: false,
      finished: false,
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
      fetchClientList(this.listQuery).then(response => {
        this.list = this.list.concat(response.data.data)
        this.finished = response.data.data.length < this.listQuery.limit
        this.listQuery.page++
        this.listLoading = false
        this.refreshing = false
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
        path: '/clientForm'
      })
    },
    handleUpdate(row) {
      this.$router.push({
        path: '/clientForm',
        query: { id: row.id }
      })
    },
    handleDelete(row) {
      this.$dialog.confirm({
        message: '确定删除该数据吗？'
      }).then(() => {
        deleteClient(row.id).then(response => {
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

<style type="less" scoped>

</style>