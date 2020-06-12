<template>
    <div class="navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .navbar{
    display: flex;
    text-align: center;
    line-height: 44px;
    box-shadow: 0 0 5px 1px rgba(186, 0, 255, 0.28);
  }
 .left,.right{
   width: 60px;
 }
  .center{
    flex: 1;
    letter-spacing: 2px;
  }
</style>
