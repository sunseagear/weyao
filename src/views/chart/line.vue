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
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
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
