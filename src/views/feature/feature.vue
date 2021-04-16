<template>
  <div>
    <nav-bar title="模块"/>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="仓颉样例" name="10">
        <van-grid>
          <van-grid-item to="/eventList" icon="todo-list-o" text="事件" />
          <van-grid-item to="/clientList" icon="friends-o" text="客户" />
          <van-grid-item to="/departmentList" icon="cluster-o" text="部门" />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="Vant样例" name="20">
        <van-grid>
          <van-grid-item to="/goods" icon="goods-collect-o" text="商品" />
          <van-grid-item to="/cart" icon="cart-o" text="购物车" />
          <van-grid-item to="/index/user" icon="user-o" text="个人中心" />
        </van-grid>
      </van-collapse-item>
      <!--      <van-collapse-item title="自带组件" name="30">-->
      <!--        <van-grid>-->
      <!--          <van-grid-item to="goods" icon="goods-collect-o" text="商品" />-->
      <!--          <van-grid-item to="cart" icon="cart-o" text="购物车" />-->
      <!--          <van-grid-item to="user" icon="user-o" text="个人中心" />-->
      <!--        </van-grid>-->
      <!--      </van-collapse-item>-->
      <van-collapse-item title="镜头类" name="40">
        <van-grid>
          <van-grid-item icon="photo-o" text="照片" />
          <van-grid-item to="qrScan" icon="photo-o" text="二维码" />
          <van-grid-item icon="photo-o" text="视频" />
        </van-grid>
      </van-collapse-item>
      <!--      <van-collapse-item title="展示类" name="50">-->
      <!--        <van-grid>-->
      <!--          <van-grid-item icon="photo-o" text="侧边栏" />-->
      <!--          <van-grid-item icon="photo-o" text="骨架屏" />-->
      <!--          <van-grid-item icon="photo-o" text="步骤条" />-->
      <!--          <van-grid-item icon="photo-o" text="属性选择" />-->
      <!--          <van-grid-item icon="photo-o" text="瀑布流" />-->
      <!--          <van-grid-item icon="photo-o" text="列表详情(滑动删除)" />-->
      <!--        </van-grid>-->
      <!--      </van-collapse-item>-->
      <van-collapse-item title="图表类" name="60">
        <van-grid>
          <van-grid-item to="/line" icon="photo-o" text="line" />
          <van-grid-item to="/bar" icon="photo-o" text="bar" />
          <van-grid-item to="/pie" icon="photo-o" text="pie" />
          <van-grid-item to="/map" icon="photo-o" text="map" />
          <van-grid-item to="/radar" icon="photo-o" text="radar" />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="地图类" name="70">
        <van-grid>
          <van-grid-item icon="photo-o" text="地图打点" />
          <van-grid-item icon="photo-o" text="地图画框" />
          <van-grid-item icon="photo-o" text="地图画线" />
        </van-grid>
      </van-collapse-item>
      <van-collapse-item title="对接类" name="80">
        <van-grid>
          <van-grid-item icon="photo-o" text="微信登录" />
          <van-grid-item icon="photo-o" text="微信支付" />
          <van-grid-item icon="photo-o" text="微信扫码" />
          <van-grid-item icon="photo-o" text="微信分享" />
        </van-grid>
      </van-collapse-item>
    </van-collapse>
  </div>

</template>

<script>
export default {
  name: 'Feature',
  data() {
    return {
      activeNames: ['10']
    }
  }
}
</script>

<style scoped>

</style>
