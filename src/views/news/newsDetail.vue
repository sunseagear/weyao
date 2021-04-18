<template>
  <div class="newStyle">
    <nav-bar />
    <h2 class="contentTotle">{{ list.newsContentTitle }}</h2>
    <img :src="list.img" alt="" >
    <p v-html="list.newsContentDescribe"/>
  </div>
</template>

<script>
import { newsContent } from '@/api/newsPage/newsPage'

export default {
  name: 'NewsContent',
  data() {
    return {
      list: [],
      flag: '',
      userId: this.$store.getters.userInfo.id
    }
  },
  mounted() {
    this.getNewsContent()
  },
  methods: {
    getNewsContent() {
      newsContent(this.$route.query.id, this.userId).then(res => {
        this.list = res.data.data
      })
    }
  }
}
</script>

<style scoped>
.newStyle {
  text-align: center;
}
.newStyle p {
  width: 95%;
  margin: 0 auto;
}
.newStyle img {
  width: 90%;
}
.contentTotle {
  text-align: center;
}
.newStyle p /deep/img {
  width: 95%;
}
</style>
