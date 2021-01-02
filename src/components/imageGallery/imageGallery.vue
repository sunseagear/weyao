<template>
  <div>
    <van-row :gutter="gutter">
      <van-col v-for="(item, index) in imageList" :key="index" :span="span">
        <van-image :src="item" :style="{'margin-top': gutter}" :height="height" :width="width" :fit="fit" @click="click(index)"/>
      </van-col>
    </van-row>
    <van-image-preview v-model="show" :start-position="startPosition" :images="imageList" @change="onChange">
      <template v-slot:index>第{{ index }}页</template>
    </van-image-preview>
  </div>
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

<style scoped>

</style>
