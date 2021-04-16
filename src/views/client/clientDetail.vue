<template>
  <div>
    <nav-bar />
    <van-cell-group>
      <van-cell :value="temp.name" title="姓名" />
      <image-gallery v-model="temp.avatar" label="头像" />
      <van-cell :value="temp.sex | dictLabel('sex')" title="性别" />
      <van-cell :value="temp.phone" title="手机" />
      <van-cell :value="temp.age" title="年龄" />
      <van-cell title="工作地点">
        <span v-html="temp.address"/>
      </van-cell>
      <baidu-map-point v-model="temp.location" label="坐标" />
    </van-cell-group>
  </div>

</template>

<script>
import { getClient } from '@/api/client/client'
import ImageGallery from '@/components/imageGallery/imageGallery'
import BaiduMapPoint from '@/components/baiduMap/baiduMapPoint'

export default {
  name: 'ClientDetail',
  components: { ImageGallery, BaiduMapPoint },
  data() {
    return {
      temp: {}
    }
  },
  created() {
    this.handleUpdate(this.$route.query.id)
  },
  methods: {
    resetTemp() {
      this.temp = {
        id: undefined,
        remarks: undefined,
        tenantId: undefined,
        name: undefined,
        avatar: undefined,
        sex: undefined,
        phone: undefined,
        age: undefined,
        address: undefined,
        location: undefined
      }
    },
    handleUpdate(id) {
      this.resetTemp()
      getClient(id).then(response => {
        if (response.data.success) {
          this.temp = response.data.data
        }
      })
    }
  }
}
</script>

<style scoped>

</style>