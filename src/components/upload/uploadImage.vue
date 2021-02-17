<template>
  <div>
    <van-uploader v-model="fileList" :capture="capture" :before-read="beforeRead" :after-read="afterRead" :max-count="maxCount" :upload-icon="uploadIcon" @delete="remove"/>
  </div>
</template>

<script>
import { fileUpload } from '@/api/system/oss'
import { Notify } from 'vant'

export default {
  name: 'UploadImage',
  props: {
    value: {
      type: String,
      required: true
    },
    uploadIcon: {
      type: String,
      required: false,
      default: 'photograph'
    },
    capture: {
      type: String,
      required: false,
      default: undefined
    },
    maxCount: {
      type: Number,
      required: false,
      default: 3
    },
    maxSize: {
      type: Number,
      required: false,
      default: 2
    },
    afterUpload: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  data() {
    return {
      fileList: []
    }
  },
  // watch: {
  //   value: {
  //     immediate: true,
  //     handler(val) {
  //       this.fileList = []
  //       if (this.isNull(val)) {
  //         this.fileList = []
  //         return
  //       }
  //       val.split(',').forEach(item => {
  //         this.fileList.push({ url: item })
  //       })
  //       console.log('this.fileList', this.fileList)
  //     }
  //   }
  // },
  methods: {
    reset() {
      this.fileList = []
      this.emit()
    },
    beforeRead(file) {
      // 此时可以自行将文件上传至服务器
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png')
      const isLt2M = file.size / 1024 / 1024 < this.maxSize

      if (!isJPG) {
        Notify({ type: 'danger', message: '上传头像图片只能是 JPG/PNG 格式!' })
      }
      if (!isLt2M) {
        Notify({ type: 'danger', message: '上传图片大小不能超过' + this.maxSize + 'MB!' })
      }
      return isJPG && isLt2M
    },
    afterRead(File) {
      this.fileUpload(File)
    },
    fileUpload(data) {
      data.status = 'uploading'
      data.message = '上传中'
      fileUpload(data).then(res => {
        if (res.data.success) {
          data.url = res.data.data
          data.status = 'done'
          data.message = '已上传'
          this.emit()
          console.log('fileUpload data', data)
          console.log('fileUpload fileList', this.fileList)
          if (this.afterUpload) {
            this.afterUpload(res)
          }
        } else {
          data.status = 'failed'
          data.message = res.data.message
        }
      }, () => {
        data.status = 'failed'
        data.message = '上传失败'
      })
    },
    remove(file) {
      this.emit()
    },
    emit() {
      const imageUrlList = []
      this.fileList.forEach(item => {
        imageUrlList.push(item.url)
      })
      this.$emit('input', imageUrlList.join(','))
    }

  }
}
</script>

<style scoped>

</style>
