<template>
  <div>
    <nav-bar />
    <van-form @submit="temp.id ? updateData() : createData()">
      <van-field v-model="temp.name" :rules="[{ required: true, message: '请填写姓名' }]" label="姓名" placeholder="请输入姓名" />
      <upload-image v-model="temp.avatar" label="头像" />
      <van-field name="sex" label="性别">
        <template #input>
          <van-radio-group v-model="temp.sex" direction="horizontal">
            <van-radio v-for="item in dictList('sex')" :key="item.value" :name="item.value">{{ item.label }}</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="temp.phone" :rules="[{ required: true, message: '请填写手机' }, { validator: formValidate.validateMobileRule, message: '请输入正确内容' }]" label="手机" placeholder="请输入手机" />
      <van-field v-model="temp.age" :rules="[{ validator: formValidate.validateIngeterGTZRule, message: '请输入正确内容' }]" label="年龄" placeholder="请输入年龄" />
      <van-field v-model="temp.address" label="工作地点" rows="4" placeholder="请输入工作地点" type="textarea"/>
      <baidu-map-point v-model="temp.location" label="坐标" />
      <van-cell>
        <van-button style="width: 100%;" native-type="submit">发布</van-button>
      </van-cell>
    </van-form>
  </div>

</template>

<script>
import { createClient, updateClient, getClient } from '@/api/client/client'
import UploadImage from '@/components/upload/uploadImage'
import BaiduMapPoint from '@/components/baiduMap/baiduMapPoint'

export default {
  name: 'ClientForm',
  components: { UploadImage, BaiduMapPoint },
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
        name: undefined,
        avatar: undefined,
        sex: undefined,
        phone: undefined,
        age: undefined,
        address: undefined,
        location: undefined
      }
    },
    createData() {
      createClient(this.temp).then(response => {
        if (response.data.success) {
          this.$toast.success(response.data.message)
          this.$router.go(-1)
        }
      })
    },
    handleUpdate(id) {
      this.resetTemp()
      getClient(id).then(response => {
        if (response.data.success) {
          this.temp = response.data.data
        }
      })
    },
    updateData() {
      updateClient(this.temp).then(response => {
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