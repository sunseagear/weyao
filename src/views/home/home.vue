<template>
  <div>
    <div>
      <van-swipe :autoplay="3000" style="height: 300px">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image :src="image" fit="fill" />
        </van-swipe-item>
      </van-swipe>
      <date-picker v-model="time"/>
      <picker v-model="text" :columns="dictList('sex')" :props="{value:'value', text: 'label'}"/>
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
import DatePicker from '@/components/picker/datePicker'
import Picker from '@/components/picker/picker'
export default {
  name: 'Home',
  components: { Picker, DatePicker },
  data() {
    return {
      text: undefined,
      time: undefined,
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
