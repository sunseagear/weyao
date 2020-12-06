<template>
  <div>
    <top-title title="模块"/>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="镜头类" name="1">
        <van-grid>
          <van-grid-item icon="photo-o" text="照片" />
          <van-grid-item to="qrScan" icon="photo-o" text="二维码" />
          <van-grid-item icon="photo-o" text="视频" />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="表单类" name="2">
        <van-grid>
          <van-grid-item icon="photo-o" text="照片" />
          <van-grid-item icon="photo-o" text="二维码" />
          <van-grid-item icon="photo-o" text="视频" />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="展示类" name="3">
        <van-grid>
          <van-grid-item icon="photo-o" text="照片" />
          <van-grid-item icon="photo-o" text="二维码" />
          <van-grid-item icon="photo-o" text="视频" />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="图表类" name="4">
        <van-grid>
          <van-grid-item icon="photo-o" text="line" />
          <van-grid-item icon="photo-o" text="bar" />
          <van-grid-item icon="photo-o" text="pie" />
          <van-grid-item icon="photo-o" text="map" />
          <van-grid-item icon="photo-o" text="radar" />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="地图类" name="5">
        <van-grid>
          <van-grid-item icon="photo-o" text="照片" />
          <van-grid-item icon="photo-o" text="二维码" />
          <van-grid-item icon="photo-o" text="视频" />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="对接类" name="6">
        <van-grid>
          <van-grid-item icon="photo-o" text="照片" />
          <van-grid-item icon="photo-o" text="二维码" />
          <van-grid-item icon="photo-o" text="视频" />
        </van-grid>
      </van-collapse-item>
    </van-collapse>
  </div>

</template>

<script>
export default {
  name: 'Feature',
  data() {
    return {
      activeNames: ['1']
    }
  }
}
</script>

<style scoped>

</style>
