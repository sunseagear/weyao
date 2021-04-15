<template>
  <div>
    <nav-bar />
    <van-form @submit="temp.id ? updateData() : createData()">
      <van-field v-model="temp.title" :rules="[{ required: true, message: '请填写标题' }]" label="标题" placeholder="请输入标题" />
      <system-user v-model="temp.userId" label="用户" placeholder="请选择用户" />
      <system-organization v-model="temp.organizationId" label="部门" placeholder="请选择部门" />
      <date-picker v-model="temp.date" label="事件时间" placeholder="请选择事件时间" type="date" pattern="{y}-{m}-{d}"/>
      <van-field v-model="temp.content" label="内容" rows="4" placeholder="请输入内容" type="textarea"/>
      <baidu-map-point v-model="temp.location" label="位置" />
      <upload-image v-model="temp.image" label="图片" />
      <van-cell>
        <van-button style="width: 100%;" native-type="submit">发布</van-button>
      </van-cell>
    </van-form>
  </div>

</template>

<script>
import { createEvent, updateEvent, getEvent } from '@/api/event/event'
import SystemUser from '@/components/system/systemUser'
import SystemOrganization from '@/components/system/systemOrganization'
import DatePicker from '@/components/picker/datePicker'
import BaiduMapPoint from '@/components/baiduMap/baiduMapPoint'
import UploadImage from '@/components/upload/uploadImage'

export default {
  name: 'OrganizationForm',
  components: { SystemUser, SystemOrganization, DatePicker, BaiduMapPoint, UploadImage },
  data() {
    return {
      temp: {}
    }
  },
  created() {
    const id = this.$route.query.id
    if (!this.isNull(id)) {
      this.handleUpdate(id)
    } else {
      this.resetTemp()
    }
  },
  methods: {
    resetTemp() {
      this.temp = {
        id: undefined,
        remarks: undefined,
        tenantId: undefined,
        title: undefined,
        userId: undefined,
        organizationId: undefined,
        date: undefined,
        content: undefined,
        location: undefined,
        image: undefined
      }
    },
    createData() {
      createEvent(this.temp).then(response => {
        if (response.data.success) {
          this.$toast.success(response.data.message)
          this.$router.go(-1)
        }
      })
    },
    handleUpdate(id) {
      this.resetTemp()
      getEvent(id).then(response => {
        if (response.data.success) {
          this.temp = response.data.data
        }
      })
    },
    updateData() {
      updateEvent(this.temp).then(response => {
        if (response.data.success) {
          this.$toast.success(response.data.message)
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>

<style type="less" scoped>

</style>
