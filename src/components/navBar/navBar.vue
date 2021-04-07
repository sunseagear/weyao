<template>
  <div>
    <van-nav-bar :title="titleData" :left-arrow="leftArrow" class="top" fixed @click-left="onClickLeft">
      <slot slot="right" name="right"/>
    </van-nav-bar>
    <div class="placeholder"/>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    title: {
      type: String,
      default: ''
    },
    leftArrow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      titleData: undefined
    }
  },
  mounted() {
    this.titleData = this.title ? this.title : this.$route.meta.title
  },
  methods: {
    onClickLeft() {
      console.log(this.$route)
      if (this.$route.path === '/') {
        this.$router.push({ path: '/binding' })
      }
      this.$router.go(-1) // 返回上一层
    }
  }
}
</script>

<style lang="less" scoped>
.placeholder {
  height: 48px;
}
</style>
