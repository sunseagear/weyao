<template>
  <div>
    <nav-bar />
    <echarts :option="option" width= "100%" height= "380px"/>
  </div>
</template>
<script>
import echarts from '@/components/echarts/echarts'
export default {
  components: {
    echarts
  },
  data() {
    return {
      option: {
        title: {
          text: '销售量'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>
