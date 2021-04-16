<template>
  <div id="app">
    <van-field v-model="name" :rules="rules" :placeholder="placeholder" :label="label" :style="{width: width}" right-icon="search" readonly @click="dialogFormVisible = true" />
    <van-popup v-model="dialogFormVisible" :style="{ height: '50%' }" round closeable close-icon="cross" position="bottom">
      <div>
        <span class="headline">{{ headline }}</span>
        <span class="confirm" @click="ensure">确认</span>
      </div>
      <tree v-model="list" :checkbox-linkage="false" :attrs="{style:{selectedBgColor: '#dcdee0'}}">
        <template #title="{node}">
          <van-cell :title="node.name" style="background: transparent" @click="confirm(node)"/>
        </template>
      </tree>
    </van-popup>
  </div>
</template>

<script>
import Tree from '@/components/tree/tree'

export default {
  name: 'TreeSelector',
  components: {
    Tree
  },
  props: {
    value: {
      type: String,
      default: undefined
    },
    label: {
      type: String,
      default: '所属机构'
    },
    rules: {
      type: Array,
      default: function() {
        return []
      }
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
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.getOrganizationInfo()
      }
    }
  },
  created() {
  },
  methods: {
    getOrganizationInfo() {
      this.name = undefined
      if (this.isNull(this.value)) {
        return
      }
      const item = this.findItem(this.value, this.list)
      if (!this.isNull(item)) {
        this.name = item.name
      }
    },
    findItem(id, list) {
      if (this.isNull(list)) {
        return undefined
      }
      for (let i = 0; i < list.length; i++) {
        const item = list[i]
        if (item.id === id) {
          return item
        }
        if (item.children && item.children.length !== 0) {
          const result = this.findItem(id, item.children)
          if (result) {
            return result
          }
        }
      }
    },
    setList(list) {
      this.list = list
    },
    confirm(val) {
      this.name_ = val.name
      this.organizationId = val.id
    },
    ensure() {
      this.name = this.name_
      this.dialogFormVisible = false
      // 点击确认把子组件id传给父组件
      this.$emit('input', this.organizationId)
    }

  }
}
</script>

<style scoped  lang="less">

#app {
@cell-background-color: 'transparent';
/deep/.van-popup {
  padding-top: 50px;
}
  /deep/.confirm {
    position: absolute;
    right: 55px;
    top: 15px;
    font-size: 14px;
    display: block;
    border: 1px solid @primaryColor;
    color: @primaryColor;
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
}
</style>
