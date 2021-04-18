<template>
  <div>
    <nav-bar :left-arrow="false" />
    <van-swipe :autoplay="3000" style="height: 300px">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image :src="image" fit="fill" />
      </van-swipe-item>
    </van-swipe>
    <van-grid>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <van-cell-group>
      <van-cell v-for="(item, index) in list.slice(0, 5)" :key="index" @click="toNews(item.id)">
        <img v-if="item.img" :src="item.img" alt="" class="NewsImg" >
        <div :class="item.img ? 'newsList' : 'noImgNewsList'">
          <div>
            <h3>{{ item.newsContentTitle }}</h3>
            <p>{{ item.newsTypeName }}</p>
          </div>
          <span>{{ item.newsReleaseTime | parseTime('{y}-{m}-{d}') }}</span>
          <span class="seePeople">{{ item.readingsNumber }}人阅读</span>
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
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
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
  width: 220px;
  margin: 0 auto;
//padding-bottom: 10px;
}
.newsList p {
  margin: 0;
}
.newsList h3 {
  margin: 0;
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

</style>
