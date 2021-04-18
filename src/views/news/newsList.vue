<template>
  <div class="newsStyle">
    <top-title />
    <!--顶部导航栏-->
    <van-tabs v-model="active" swipeable>
      <van-tab
        v-for="(item, index) in list"
        :title="item.newsTypeName"
        :key="index"
      />
    </van-tabs>
    <!--新闻标题-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div
        v-if="listContent.length > 0"
        class="newsItemStyle"
        @touchstart="touch"
        @touchend="end"
      >
        <div v-for="(item, index) in list" :key="index">
          <van-list
            v-if="active === index"
            v-model="loading"
            :finished="finished"
            :immediate-check="false"
            finished-text="没有更多了"
            @load="onLoad"
          >

            <van-cell-group>
              <van-cell
                v-for="(item, index) in listContent[index]"
                :key="index"
                @click="toNews(item.id)"
              >
                <img v-if="item.img" :src="item.img" alt="" class="NewsImg">
                <div :class="item.img?'newsList':'noImgNewsList'">
                  <div class="newDetails">
                    <h3>{{ item.newsContentTitle }}</h3>
                    <p>{{ list[active].newsTypeName }}</p>
                  </div>
                  <span>{{ item.newsReleaseTime | parseTime("{y}-{m}-{d}") }}</span>
                  <span class="seePeople">{{ item.readingsNumber }}人阅读</span>
                </div>
              </van-cell>
            </van-cell-group>
          </van-list>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
// import { getNewList } from '../onlineStudy/paging'
import { newsPage, newsPageContent } from '@/api/newsPage/newsPage'
// import { onLineStudy } from "@/api/onlineStudy/onlingStudy";
export default {
  name: 'NewsPage',
  data() {
    return {
      active: 0,
      news: [
        {
          title: '弘扬延安精神 净化政治生态 争创文明社会',
          explain: '建档荟萃 为人民服务'
        }
      ],
      list: [],
      listContent: [],
      touchmove: '',
      flag: 0,
      loading: false,
      finished: false,
      isLoading: false,
      page: 1,
      limit: 8
    }
  },
  watch: {
    // 监听active变化，重新发送请求
    active: function(active, two) {
      this.getNewsContent(this.list[active], active)
      this.finished = false
      this.page = 1
      this.loading = false
    },
    list: function(newlist, old) {
      for (let i = 0; i < this.list.length; i++) {
        this.listContent.push([])
      }
    }
  },
  mounted() {
    this.getnewsPage()
  },
  methods: {
    // 列表分页事件
    onLoad() {
      setTimeout(() => {
        // getNewList(this.list[this.active], this.page, this.limit, newsPageContent, this.listContent[this.active], this.finished, this.loading)
        this.getNewList(this.list[this.active], this.active)
      }, 1000)
    },
    // 下拉刷新事件
    onRefresh() {
      this.getNewsContent(this.list[this.active], this.active)
      setTimeout(() => {
        this.isLoading = false
      }, 300)
    },
    // 获取上导航栏
    getnewsPage() {
      newsPage().then((res) => {
        this.list = res.data.data
        this.getNewsContent(this.list[this.active], this.active)
      })
    },
    // 获取本页面新闻列表
    getNewsContent(data, i) {
      newsPageContent({
        newsTypeId: data.id,
        page: 1,
        limit: this.limit
      }).then((res) => {
        this.listContent.splice(i, 1, res.data.data)
      })
    },
    // 获取新的新闻列表
    getNewList(data) {
      this.page++
      // console.log(this.page);
      newsPageContent({
        newsTypeId: data.id,
        page: this.page,
        limit: this.limit
      }).then(res => {
        if (res.data.data.length === 0) {
          this.finished = true
        } else {
          // for (let z = 0; z <= res.data.data.length; z++) {
          //   if (res.data.data[z] === undefined) {
          //     break
          //   } else {
          //     this.listContent[i].push(res.data.data[z])
          //   }
          // }
          this.listContent[this.active] = this.listContent[this.active].concat(res.data.data)
          this.loading = false
        }
      })
    },
    // 进入内容详情
    toNews(id) {
      this.$router.push({
        name: 'newsDetail',
        query: { id: id }
      })
    },
    // 左右滑动事件
    touch(event) {
      this.touchmove = event.changedTouches[0].clientX
    },
    end(event) {
      if (this.touchmove - event.changedTouches[0].clientX >= 50) {
        this.active += 1
        if (this.active > 5) {
          this.active = 0
        }
      } else if (this.touchmove - event.changedTouches[0].clientX <= -50) {
        this.active -= 1
        if (this.active < 0) {
          this.active = 5
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.newsStyle {
  position: relative;
}
.newsItemStyle {
  min-height: 500px;
}
.van-group-img{
  width: 100px;
}
.newsItemStyle li {
  float: left;
}
.myapp {
  overflow: hidden;
}
.van-tabs {
  border-bottom: 5px solid #f2f2f2;
}
/deep/.van-tab {
  font-size: 16px;
  color: #e5433e;
}
/deep/.van-tabs__line {
  width: 60px;
}
/deep/.hotNews {
  padding: 5px 16px 10px;
}
.newDetails{
  height: 74px;
}
.noImgNewsList{
  font-size: 15px;
  width: 100%;
  padding-bottom: 10px;
}
.noImgNewsList p, .noImgNewsList h3, .noImgNewsList span{
  margin: 0;
}
.noImgNewsList h3{
  max-height: 40px;
  line-height: 20px;
  overflow:hidden;
}
.noImgNewsList p{
  //margin-bottom: 14px;
  color: #333333;
}
.newsList {
  box-sizing: border-box;
  padding-left: 5px;
  float: right;
  width: 220px;
  margin: 0 auto;
//padding-bottom: 10px;
}
.newsList p{
  margin: 0;
  //margin-bottom: 26px;
}
.newsList h3 {
  margin: 0;
  max-height: 40px;
  line-height: 20px;
  overflow:hidden;
}
h3 {
  font-size: 16px;
  font-weight: normal;
}
.NewsImg {
  float: left;
  width: 115px;
  height: 86px;
  border-radius: 5px;
  margin-top: 4px;
}
span {
  color: #999;
}
.newsList span {
  color: #999;
}
.seePeople {
  float: right;
}
</style>
