<template>
  <div>
    <nav-bar>
      <template #right>
        <van-image :src="require('@/assets/add.png')" width="23px" @click="handleCreate" />
      </template>
    </nav-bar>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="listLoading"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="onLoad">

        <van-cell
          v-for="(row) in list"
          :key="row.id"
          @click="handleUpdate(row)">
          <div>
            <div>姓名:{{ row.name }}</div>
            <div>手机:{{ row.phone }}</div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { fetchClientList } from '@/api/client/client'
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
        name: 'clientForm'
      })
    },
    handleUpdate(row) {
      this.$router.push({
        name: 'clientForm',
        query: { id: row.id }
      })
    }
  }
}
</script>

<style type="scss" scoped>

</style>