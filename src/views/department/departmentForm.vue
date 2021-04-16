<template>
  <div>
    <nav-bar />
    <van-form @submit="temp.id ? updateData() : createData()">
      <tree-selector ref="treeSelector" v-model="temp.parentId" label="上级目录" placeholder="请选择上级目录" />
      <van-field v-model="temp.name" :rules="[{ required: true, message: '请填写名称' }]" label="名称" placeholder="请输入名称" />
      <van-field v-model="temp.code" :rules="[{ required: true, message: '请填写编码' }, { validator: formValidate.validateIntegerRule, message: '请输入正确内容' }]" label="编码" placeholder="请输入编码" />
      <system-user v-model="temp.manager" :rules="[{ required: true, message: '请填写经理' }]" label="经理" placeholder="请选择经理" />
      <van-field v-model="temp.address" label="地址" rows="4" placeholder="请输入地址" type="textarea"/>
      <van-cell>
        <van-button style="width: 100%;" native-type="submit">提交</van-button>
      </van-cell>
      <van-cell v-if="temp.id">
        <van-button plain type="danger" style="width: 100%;" @click="handleDelete">删除</van-button>
      </van-cell>
    </van-form>
  </div>

</template>

<script>
import { fetchDepartmentList, createDepartment, updateDepartment, getDepartment, deleteDepartment } from '@/api/department/department'
import TreeSelector from '@/components/tree/treeSelector'
import SystemUser from '@/components/system/systemUser'

export default {
  name: 'DepartmentForm',
  components: { TreeSelector, SystemUser },
  data() {
    return {
      temp: {},
      list: []
    }
  },
  created() {
    this.onLoad()
    const id = this.$route.query.id
    if (!this.isNull(id)) {
      this.handleUpdate(id)
    } else {
      this.resetTemp()
    }
  },
  methods: {
    onLoad() {
      fetchDepartmentList(this.listQuery).then(response => {
        this.list = response.data.data
        this.$refs.treeSelector.setList(this.list)
      })
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        remarks: undefined,
        name: undefined,
        parentId: undefined,
        parentIds: undefined,
        tenantId: undefined,
        code: undefined,
        manager: undefined,
        address: undefined
      }
    },
    createData() {
      createDepartment(this.temp).then(response => {
        if (response.data.success) {
          this.$toast.success(response.data.message)
          this.$router.go(-1)
        }
      })
    },
    handleUpdate(id) {
      this.resetTemp()
      getDepartment(id).then(response => {
        if (response.data.success) {
          this.temp = response.data.data
        }
      })
    },
    updateData() {
      updateDepartment(this.temp).then(response => {
        if (response.data.success) {
          this.$toast.success(response.data.message)
          this.$router.go(-1)
        }
      })
    },
    handleDelete() {
      this.$dialog.confirm({
        message: '确定删除该数据吗？'
      }).then(() => {
        deleteDepartment(this.temp.id).then(response => {
          if (response.data.success) {
            this.$toast.success(response.data.message)
            this.$router.go(-1)
          }
        })
      })
    }
  }
}
</script>

<style type="less" scoped>

</style>
