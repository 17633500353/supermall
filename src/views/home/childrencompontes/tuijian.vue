<template>
  <div class="icon">
    <div class="icomitem" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <h6>{{item.title}}</h6>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tuijian",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .icon {
    display: flex;
    text-align: center;
    line-height: 0;
    padding: 10px 0 5px;
    border-bottom: 8px solid rgba(0,0,0,0.6);
  }

  .icomitem {
    flex: 1;
  }

  .icomitem img {
    width: 80%;
  }

</style>
