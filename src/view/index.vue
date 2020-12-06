<template>
  <div>
    <home v-show="activeTab === 'home'" />
    <feature v-show="activeTab === 'feature'" />
    <van-tabbar v-model="activeTab" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="feature" icon="search">样例</van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o">社交</van-tabbar-item>
      <van-tabbar-item name="user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
import Home from './home/home'
import Feature from './feature/feature'
export default {
  name: 'Index',
  components: { Home, Feature },
  data() {
    return {
      activeTab: 'home'
    }
  }
}
</script>

<style scoped>

</style>
