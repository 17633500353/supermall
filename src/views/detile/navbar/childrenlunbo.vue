<template>
  <div>
    <Swiper class="Swiper" :options="swiperOption">
      <SwiperSlide v-for="item in topimage" :key="item.id">
        <img class="imglunbo" :src="item" alt="" @load="imangload">
      </SwiperSlide>
      <div class="swiper-pagination" slot="pagination"></div>
    </Swiper>
  </div>
</template>
<script>
  import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: "childrenlunbo",
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      topimage: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            pagination: '.swiper-pagination',
            paginationClickable: true,
          },
          //设置显示容器同时显示的数量
          slidesPerView: 1,
          //自动切换时间
          autoplay: {
            delay: 3000,
            //操作swiper后，不停止切换
            disableOnInteraction: false
          },
          //为true点击小圆点会进行切换
          // paginationClickable: true,
          //设置图片与图片之间的距离
          spaceBetween: 0,
          //为true时图片轮播完后会循环,false时为跳到第一个图片
          loop: true
        },
        isload: false
      }
    },
    methods: {
      imangload() {
        if (!this.isload) {
          this.$emit("imageloadtop");
          this.isload = true;
        }
      }
    }
  }
</script>

<style scoped>

  .imglunbo {
    width: 100%;
  }
  .Swiper {
    height: 200px;
  }
</style>
