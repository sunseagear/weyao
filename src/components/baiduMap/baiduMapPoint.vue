<template>
  <van-field v-model="location" :placeholder="placeholder" :label="label" >
    <template #input>
      <div style="width: 100%">
        <van-button v-if="showText" type="primary" @click="addPath">数据画点</van-button>
        <baidu-map :center="centerPoint" :scroll-wheel-zoom="true" :zoom="zoom" :style="{height:height,width:width}" @ready="ready" @click="getClickInfo">
          <bm-marker
            v-if="point.lng"
            :position="{lng:point.lng, lat: point.lat}"
            :dragging="true"
          >
            <bm-label
              :label-style="{color: 'red', fontSize : '14px'}"
              :offset="{width: 20, height: -15}"
              content="当前位置"
            />
          </bm-marker>
        </baidu-map>
      </div>
    </template>
  </van-field>

</template>

<script>
export default {
  name: 'BaiduMapPoint',
  props: {
    value: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: undefined
    },
    placeholder: {
      type: String,
      default: ''
    },
    center: {
      type: [Object, String],
      default: '北京'
    },
    zoom: {
      type: Number,
      default: 15
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    showText: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isClick: false,
      isReady: false,
      centerPoint: undefined,
      location: undefined,
      point: {}
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        if (this.value) {
          this.point = JSON.parse(this.value)
          this.location = this.value
          console.log('handler')
          this.updateCenterPoint()
        } else {
          this.point = {}
          this.location = undefined
        }
        // console.log('this.point', this.point)
      }
    }
  },
  created() {
  },
  methods: {
    updateCenterPoint() {
      new Promise(() => {
        if (this.isReady && !this.isClick) {
          this.centerPoint = this.isNull(this.location) ? this.center : this.point
        }
        console.log('this.centerPoint', this.centerPoint)
      })
    },
    ready() {
      this.isReady = true
      console.log('ready')
      this.updateCenterPoint()
    },
    addPath() {
      try {
        const point = JSON.parse(this.location)
        if (!Number(point.lat) || !Number(point.lat)) {
          this.$message.error('你输入的格式错误')
          return
        }
        this.point = point
        this.$emit('input', this.location)
      } catch (e) {
        this.$message.error('你输入的格式错误')
      }
    },
    getClickInfo(e) {
      this.isClick = true
      this.point = e.point
      this.updateData()
    },
    updateData() {
      this.location = JSON.stringify(this.point)
      this.$emit('input', this.location)
    }

  }

}
</script>

<style scoped>

</style>
