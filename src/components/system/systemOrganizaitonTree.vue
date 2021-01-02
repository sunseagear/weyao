<template>
  <div id="app">
    <van-field :rules="[{ required: true }]" v-model="name" :placeholder="placeholder" :label="label" :style="{width: width}" right-icon="search" readonly @click="dialogFormVisible = true" />
    <van-popup v-model="dialogFormVisible" :style="{ height: '50%' }" round closeable close-icon="cross" position="bottom">
      <span class="headline">{{ headline }}</span>
      <span class="confirm" @click="ensure">确认</span>
      <vs-tree :data="list" :accordion="true" highlight-current>
        <span slot-scope="{ node, data }" class="custom-tree-node" @click="confirm(node)">
          {{ data.name }}
        </span>
      </vs-tree>
    </van-popup>
  </div>
</template>

<script>
import { relationSwitch } from '@/api/partyBranch/relationSwitch'

export default {
  name: 'SystemOrganizaitonTree',
  props: {
    value: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: '所属机构'
    },
    width: {
      type: String,
      default: '100%'
    },
    placeholder: {
      type: String,
      default: '请选择. . .'
    },
    headline: {
      type: String,
      default: '请选择目标'
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      organizationId: undefined,
      name: undefined,
      list: [],
      name_: ''
    }
  },
  created() {
    this.getOrganization()
  },
  methods: {
    getOrganization() {
      relationSwitch().then((data) => {
        this.list = data.data.data
        console.log(this.columns)
      })
    },
    confirm(val) {
      this.name_ = val.label
      this.organizationId = val.data.id
    },
    ensure() {
      this.name = this.name_
      this.dialogFormVisible = false
      // 点击确认把子组件id传给父组件
      this.$emit('transmit', this.organizationId)
    }

  }
}
</script>

<style scoped  lang="less">

#app {
/deep/.van-popup {
  padding-top: 50px;
}
  /deep/.confirm {
    position: absolute;
    right: 55px;
    top: 15px;
    font-size: 14px;
    display: block;
    border: 1px solid #c8c9cc;
    color: rgb(248, 15, 15);
    width: 50px;
    text-align: center;
    border-radius: 20px;
    z-index: 2;
  }
  /deep/.headline{
    position: absolute;
    left:24px;
    top: 15px;
    font-size: 16px;
    display: block;
    z-index: 2;
  }
  /deep/.vs-tree-node__content {
    height: 40px;
  }
  /deep/.custom-tree-node {
    font-size: 15px;
    display: block;
    width: 100%;
  }
  /deep/.vs-tree--highlight-current .vs-tree-node.is-current > .vs-tree-node__content {
    background-color: #e4e2e2;
  }}
</style>
