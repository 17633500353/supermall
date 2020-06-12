<template>
  <div id="app">
<!--    加了之后切换页面不会销毁-->
    <keep-alive exclude="Detile">
      <router-view></router-view>
    </keep-alive>
    <daohang></daohang>
  </div>
</template>

<script>

  import daohang from "components/content/daohang"

  export default {
    name: 'App',
    components: {
      daohang
    }
  }
</script>

<style>
  /*<!--引入css的方式-->*/
  @import "assets/css/base.css";
</style>
