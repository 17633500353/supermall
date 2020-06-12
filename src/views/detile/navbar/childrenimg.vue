<template>
  <div>
    <div v-for="item in xiangxiimg">
      <img class="img-img" :src="item" alt="" @load="loadimg">
    </div>

  </div>
</template>

<script>
  export default {
    name: "childrenimg",
    props:{
      xiangxiimg:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isload: false
      }
    },
    methods:{
      loadimg(){

      }
    }
  }
</script>

<style scoped>
  .img-img{
    width: 100%;
  }
</style>
