<template>
  <van-cell :title="label" :style="{width: width}">
    <van-row :gutter="gutter">
      <van-col v-for="(item, index) in imageList" :key="index" :span="span" :offset="offset(index)">
        <van-image :src="item" :style="{'margin-top': gutter}" :height="height" :width="width" :fit="fit" @click="click(index)"/>
      </van-col>
    </van-row>
    <van-image-preview v-model="show" :start-position="startPosition" :images="imageList" @change="onChange">
      <template v-slot:index>第{{ index + 1 }}页</template>
    </van-image-preview>
  </van-cell>
</template>
<script>
export default {
  name: 'ImageGallery',
  props: {
    value: {
      type: [String, Array],
      required: false,
      default: ''
    },
    label: {
      type: String,
      default: '图片展示'
    },
    fit: {
      type: String,
      required: false,
      default: 'fill'
    },
    span: {
      type: Number,
      required: false,
      default: 8
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    height: {
      type: String,
      required: false,
      default: '100%'
    },
    imgWidth: {
      type: String,
      required: false,
      default: '100%'
    },
    imgHeight: {
      type: String,
      required: false,
      default: '100%'
    },
    gutter: {
      type: Number,
      required: false,
      default: 10
    }
  },
  data() {
    return {
      show: false,
      index: 0,
      startPosition: 0,
      imageList: []
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        if (this.isNull(val)) {
          this.imageList = []
          return
        }
        if (val instanceof Array) {
          this.imageList = val
        } else {
          this.imageList = val.split(',')
        }
      }
    }
  },
  methods: {
    offset(index) {
      if (index !== 0) {
        return 0
      }
      const length = this.imageList.length
      const total = length * this.span
      return total >= 24 ? 0 : (24 - total)
    },
    onChange(index) {
      this.index = index
    },
    click(index) {
      this.show = true
      this.startPosition = index
    }
  }

}
</script>

