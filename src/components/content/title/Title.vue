<template>
  <div class="title">
<!--   通过点击itemclick让this.currentclick=index, 为true时绑定上-->
    <div class="div_title" v-for="(item,index) in title " :class="{active:index===currentclick}" @click="itemclick(index)" >
      <span>{{item}}</span>
<!--      <span>{{index}}</span>index获取下标-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Title",
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return{
        currentclick:0
      }
    },
    methods:{

      itemclick(index){
        this.currentclick=index;
        this.$emit('updateclick',index);
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    text-align: center;
    line-height: 33px;
    background-color: #fff;
    padding-bottom: 2px;
  }

  .div_title {
    flex: 1;
  }

  .active{
    color: #ff5498;
  }
  .active span {
    border-bottom: 2px solid #ff5498;
    padding-bottom: 2px;
  }
</style>
