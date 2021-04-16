<template>
  <div id="MyEcharts" :style="{height:height,width:width}"/>
</template>
<script>
import * as echarts from 'echarts'
require('echarts/extension/bmap/bmap')

export default {
  name: 'VueEcharts',
  props: {
    width: {
      type: String,
      default: '100%',
      require: false
    },
    height: {
      type: String,
      default: '400px',
      require: true
    },
    isMap: {
      type: Boolean,
      default: false
    },
    ak: {
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
    if (this.isMap) {
      this.loadBMap(this.ak).then(() => {
        this.MyEcharts.setOption(this.option)
      })
    } else {
      this.MyEcharts.setOption(this.option)
    }
  },
  methods: {
    getEcharts() {
      return echarts
    },
    initEcharts() {
      this.MyEcharts = echarts.init(document.getElementById('MyEcharts'))
    },
    loadBMap(ak) {
      return new Promise(function(resolve, reject) {
        if (typeof BMap !== 'undefined') {
          resolve()
          return true
        }
        window.onBMapCallback = function() {
          resolve()
        }
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src =
            'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=onBMapCallback'
        script.onerror = reject
        document.head.appendChild(script)
      })
    }
  }
}

</script>
