<template>
  <div id="MyEcharts" :style="style"/>
</template>
<script>
export default {
  name: 'VueEcharts',
  components: {
    style() {
      return {
        height: this.height,
        width: this.width
      }
    }
  },
  props: {
    width: {
      type: String,
      default: '100%',
      require: false
    },
    height: {
      type: String,
      default: '',
      require: true
    },
    option: {
      type: Object,
      default: () => {},
      require: true
    }
  },
  data() {
    return {
      MyEcharts: '', // echarts实例
      style: {
        width: this.width,
        height: this.height
      }
    }
  },
  mounted() {
    this.initEcharts()
    this.MyEcharts.setOption(this.option)
  },
  methods: {
    initEcharts() {
      this.MyEcharts = this.$echarts.init(document.getElementById('MyEcharts'))
    }
  }
}

</script>