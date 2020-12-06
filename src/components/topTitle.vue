<template>
  <div>
    <van-nav-bar
      :title="titleData"
      class="top"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: 'TopTitle',
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      titleData: undefined
    };
  },
  mounted() {
    this.titleData = this.title ? this.title : this.$route.meta.title
  },
  methods: {
    onClickLeft() {
      console.log(this.$route);
      if (this.$route.path === "/") {
        this.$router.push({ path: "/binding" });
      }
      this.$router.go(-1); // 返回上一层
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  height: 46px;
  width: 100%;
  /deep/.van-nav-bar__content {
    background: #e5433e;
  }
  /deep/.van-nav-bar__title {
    color: #fff;
    letter-spacing: 5px;
    font-weight: bold;
  }
}
/deep/.van-nav-bar .van-icon {
  color: #fff;
}
</style>
