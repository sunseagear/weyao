<template>
  <div>
    <nav-bar :left-arrow="false" />
    <van-swipe :autoplay="3000" style="height: 300px">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image :src="image" fit="fill" height="300"/>
      </van-swipe-item>
    </van-swipe>
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <van-cell icon="newspaper-o" title="新闻资讯" value="更多》" @click="newsDetails" />
    <van-cell-group>
      <van-cell v-for="(item, index) in list.slice(0, 5)" :key="index" @click="toNews(item.id)">
        <div style="display: flex;">
          <img v-if="item.img" :src="item.img" alt="" class="NewsImg" >
          <div :class="item.img ? 'newsList' : 'noImgNewsList'">
            <div>
              <h3>{{ item.newsContentTitle }}</h3>
              <p>{{ item.newsTypeName }}</p>
            </div>
            <span>{{ item.newsReleaseTime | parseTime('{y}-{m}-{d}') }}</span>
            <span class="seePeople">{{ item.readingsNumber }}人阅读</span>
          </div>
        </div>
      </van-cell>
    </van-cell-group>
  </div>

</template>

<script>
import { newsPageContent } from '@/api/newsPage/newsPage'
export default {
  name: 'Home',
  data() {
    return {
      list: [],
      images: [
        'http://5b0988e595225.cdn.sohucs.com/images/20191201/73c1e7a9573d41a59bd72bc9886d9030.jpeg',
        'http://5b0988e595225.cdn.sohucs.com/images/20191201/80db4da6585444bfa49ccab8e5628f3e.jpeg'
      ]
    }
  },
  created() {
    this.getNewsContent()
  },
  methods: {
    getNewsContent() {
      newsPageContent().then(res => {
        this.list = res.data.data
      })
    },
    newsDetails() {
      this.$router.push('/newsList')
    },
    toNews(id) {
      this.$router.push({
        path: '/newsDetail',
        query: { id: id }
      })
    }
  }

}
</script>

<style scoped>
.noImgNewsList {
  font-size: 15px;
  width: 100%;
  padding-bottom: 10px;
}
.noImgNewsList p,
.noImgNewsList h3,
.noImgNewsList span {
  margin: 0;
}
.noImgNewsList p {
  color: #333333;
}
.newsList {
  box-sizing: border-box;
  padding-left: 5px;
  float: right;
  width: 100%;
  margin: 0 auto;
//padding-bottom: 10px;
}
.newsList p {
  margin: 0;
}
.newsList h3 {
  margin: 0;
}
.NewsImg {
  float: left;
  width: 115px;
  height: 86px;
  border-radius: 5px;
  margin-top: 4px;
}
.seePeople {
  float: right;
}
</style>
