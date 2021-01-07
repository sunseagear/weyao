<template>
  <div>
    <van-popup v-model="dialogFormVisible" :title="label" round closeable position="bottom" style="height: 80vh">
      <div ref="container">
        <van-search
          v-model="search"
          shape="round"
          placeholder="请输入搜索关键词"
          @search="onSearch"
        />
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            :offset="10"
            :immediate-check="false"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell
              v-for="(item, index) in memberList"
              :key="index"
              class="usercell"
              @click="select(item)"
            >
              <van-row type="flex" justify="space-between">
                <!-- 头像 -->
                <van-col span="6">
                  <van-image
                    :src="item.portrait"
                    width="85"
                    height="85"
                    class="portrait"
                  />
                </van-col>
                <van-col span="18">
                  <!-- 党员信息 -->
                  <van-row type="flex" justify="center">
                    <!-- 姓名 -->
                    <van-col span="14">
                      <span class="username">{{ item.realname }}</span>
                    </van-col>
                    <!-- 电话 -->
                    <van-col span="2">
                      <van-image :src="Phoneicon" />
                    </van-col>
                    <van-col span="8">
                      <span class="userphone">{{ item.phone }}</span>
                    </van-col>
                  </van-row>
                  <!-- 所属部门 -->
                  <van-row>
                    <van-col span="2">
                      <van-image :src="department" />
                    </van-col>
                    <van-col>
                      <span class="usertext">{{ item.organization.label }}</span>
                    </van-col>
                  </van-row>
                  <!-- 职位 -->
                  <van-row>
                    <van-col span="2">
                      <van-image :src="position" />
                    </van-col>
                    <van-col>
                      <span class="usertext">
                        {{ item.userPosition | dictLabel("userPosition") }}
                      </span>
                    </van-col>
                  </van-row>
                </van-col>
              </van-row >
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </div>
    </van-popup>
  </div>

</template>

<script>
import { fetchUserList } from '@/api/user/user'
import { objectMerge } from '@/utils'

export default {
  name: 'SysUserPopup',
  props: {
    label: {
      type: String,
      default: '用户选择'
    },
    width: {
      type: String,
      default: '100%'
    },
    query: {
      type: Object,
      default() {
        return {}
      }
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      container: null,
      username: undefined,
      Phoneicon: require('@/assets/affairs/iphone.png'),
      department: require('@/assets/affairs/department.png'),
      position: require('@/assets/affairs/position.png'),
      search: '', // 搜索框内输入的值
      memberList: [], // 获取的列表
      loading: false,
      finished: false,
      refreshing: false,
      listQuery: {
        page: 1,
        limit: this.$store.getters.defaultPageSize,
        search: undefined
      }
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.dialogFormVisible = val
      }
    }
  },
  mounted() {
    this.container = this.$refs.container
    this.getmemberList()
  },
  methods: {
    select(row) {
      this.dialogFormVisible = false
      this.$emit('input', false)
      this.$emit('onSelect', row)
    },

    // 搜索查询
    onSearch(val) {
      this.listQuery.page = 1
      this.listQuery.search = val
      console.log(val)
      this.getmemberList()
    },
    // 上拉加载
    onLoad() {
      setTimeout(() => {
        this.getmemberList()
      }, 1000)
    },
    // 获取党员信息列表
    getmemberList() {
      this.listQuery = objectMerge(this.listQuery, this.query)
      fetchUserList(this.listQuery).then((res) => {
        console.log('获取党员列表', res)
        // 如果进入页面page===1 直接赋值
        if (this.listQuery.page === 1) {
          this.memberList = res.data.data
        } else {
          // 如果不是则在后面追加数据
          res.data.data.forEach((item) => {
            this.memberList.push(item)
          })
          this.loading = false
        }
        // 当还有数据时page++
        if (res.data.data.length > 0) {
          this.listQuery.page++
          this.loading = false
        } else {
          this.finished = true
        }
      })
    },
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.listQuery.page = 1
        this.getmemberList()
        this.refreshing = false
      })
    }
  }
}

</script>

<style lang="less" scoped>
  // 搜索框
  .van-search {
    width: 80%;
    margin-left: 5px;
    background-color: transparent;
  }
  .van-search__content--round{
    background-color: #fff;
  }
  // 党员信息列表
  .userlist {
    margin: 0 15px;
  }
  .usercell {
    margin: 5px 0;
    padding-top: 15px;
    border-radius: 8px;
  }
  // 头像
  .portrait/deep/.van-image__img {
    border-radius: 15%;
  }
  // 用户名
  .username {
    color: #333333;
    font-size: 16px;
    font-weight: 700;
  }
  .userphone {
    color: #333333;
    font-size: 12px;
  }
  .usertext {
    color: #999999;
    font-size: 12px;
  }
</style>
