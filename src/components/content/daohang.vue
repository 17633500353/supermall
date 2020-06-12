<template>
  <div>
    <div id="tagber">
<!--      导入children的目的是为了点击的时候能够进行跳转和样式-->
      <children class="ss" path="/Home" activeColor="blue">
        <img slot="icon1" src="~assets/img/u=1063746149,3932212259&fm=26&gp=0.jpg" alt="">
        <img slot="icon2" src="~assets/img/6bf6d3df32092d12e4d135e8ff293857.jpg" alt="">
        <div slot="text3">首页</div>
      </children>
      <children class="ss" path="/fenlei" activeColor="green">
        <img slot="icon1" src="~/assets/img/6bf6d3df32092d12e4d135e8ff293857.jpg" alt="">
        <img slot="icon2" src="~/assets/img/u=122773829,134715808&fm=26&gp=0.jpg" alt="">
        <div slot="text3">分类</div>
      </children>
      <children class="ss" path="/shopping" activeColor="blue">
        <img slot="icon1" src="~/assets/img/u=122773829,134715808&fm=26&gp=0.jpg" alt="">
        <img slot="icon2" src="~/assets/img/f2e7e82264303b387bd760457eb6380c.jpg" alt="">
        <div slot="text3">购物车</div>
      </children>
      <children class="ss" path="/my" activeColor="blue">
        <img slot="icon1" src="~/assets/img/f2e7e82264303b387bd760457eb6380c.jpg" alt="">
        <img slot="icon2" src="~/assets/img/u=1063746149,3932212259&fm=26&gp=0.jpg" alt="">
        <div slot="text3">我的</div>
      </children>
    </div>
  </div>
</template>

<script>
  import children from 'components/common/children/children'

  export default {
    name: "daohang",
    components: {
      children
    }
  }
</script>

<style scoped>
  #tagber {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 5px;
    box-shadow: 0 -6px 9px -9px #636363;
    background-color: rgb(255, 208, 67);
  }

  * {
    padding: 0;
    margin: 0;
  }

  img {
    width: 24px;
    height: 24px;
  }

  .ss {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

</style>
