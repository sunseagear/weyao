<template>
  <div>
    <div>
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
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      active: 0,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }

}
</script>

<style scoped>

</style>
