<template>
  <div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar v-model="activeTab" active-color="#ee0a24" inactive-color="#000" route>
      <van-tabbar-item to="/index/home" name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/index/feature" name="feature" icon="search">样例</van-tabbar-item>
      <van-tabbar-item to="/index/user" name="user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
import Home from './home/home'
import Feature from './feature/feature'
import User from './user/user'
export default {
  name: 'Index',
  components: { User, Home, Feature },
  data() {
    return {
      activeTab: 'home'
    }
  }
}
</script>

<style scoped>
</style>
