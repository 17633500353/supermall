<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from "better-scroll"

  export default {
    name: "bscroll",
    data() {
      return {
        scroll: null,
        nn:66666
      }
    },
    props: {
      probeType1: {
        type: Number,
        default: 0
      },
      //默认上拉为false
      pullingUp1:{
        type:Boolean,
        default:false
      }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        //组件内的button为true可以点击,false则不可
        click: true,
        //滚动位置
        probeType: this.probeType1,
        //上拉加载
        pullUpLoad:this.pullingUp1,

      });
      //监听滚动
      this.scroll.on("scroll", (position) => {
        //当进行滚动时发射一个自定义事件
        this.$emit("scro", position);
      });
      //监听上拉加载更多发射自定义事件
      this.scroll.on('pullingUp', () => {
        this.$emit("pulling");
      });

    },
    methods: {
      scrollbackTo(x, y, time) {
        //指向scroll的方法scrollTo(这个是固定方法)
        this.scroll.scrollTo(x, y, time);
      },
      finish(){
        //这个是固定方法
        this.scroll.finishPullUp();
      },
      refresh1(){
        //这个是固定方法
        this.scroll.refresh();
      },
      getscrolly(){
       return this.scroll.y;
      }
    }
  }
</script>

<style scoped>
</style>
