<template>
  <div id="app">
    <van-cell :title="label" :value="name" :style="{width: width}" />
  </div>
</template>

<script>
import { getOrganization } from '@/api/system/organization'

export default {
  name: 'SystemOrganizaiton',
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
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      organizationId: undefined,
      name: undefined
    }
  },
  created() {
    this.getOrganization()
  },
  methods: {
    getOrganizationInfo() {
      getOrganization(this.value).then((data) => {
        this.name = data.data.data.name
      })
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
