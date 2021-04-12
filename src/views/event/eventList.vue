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
            <div>标题:{{ row.title }}</div>
            <div>用户:{{ row.user.realname }}</div>
            <div>部门:{{ row.organization.name }}</div>
            <div>事件时间:{{ row.date | parseTime('{y}-{m}-{d}') }}</div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { fetchEventList } from '@/api/event/event'
export default {
  name: 'EventList',
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
      fetchEventList(this.listQuery).then(response => {
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
        name: 'eventForm'
      })
    },
    handleUpdate(row) {
      this.$router.push({
        name: 'eventForm',
        query: { id: row.id }
      })
    }
  }
}
</script>

<style type="scss" scoped>

</style>