<template>
  <div>
    <TWTree :tree="list" :default-attrs="{
      style: {
        showIcon: false,
        selectedBgColor: 'transparent',
        hoverBgColor: 'transparent',
        dragOverBgColor: 'transparent'
      }
    }">
      <template #switcher="{node}">
        <svg-icon v-if="node.directoryState === 'collapsed'" icon-class="add" style="width: 25px;height: 25px"/>
        <svg-icon v-else-if="node.directoryState === 'expanded'" icon-class="delete" style="width: 25px;height: 25px"/>
      </template>
      <template #title="{node}">
        <slot :node="node" name="title">
          <van-cell :title="node.name" />
        </slot>
      </template>
    </TWTree>
  </div>
</template>

<script>
import TWTree from 'twtree'
export default {
  name: 'Tree',
  components: {
    TWTree
  },
  props: {
    value: {
      type: Array,
      default: undefined
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      list: []
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(val) {
        this.list = val
        this.formatData(this.list)
      }
    }
  },
  methods: {
    formatData(list) {
      list.forEach(item => {
        if (item.children && item.children.length !== 0) {
          item.hasChild = true
          this.formatData(item.children)
        } else {
          item.hasChild = false
        }
      })
    }
  }
}
</script>

<style scoped  lang="less">
/deep/.vs-tree-node__content{
  height: auto;
}
</style>
