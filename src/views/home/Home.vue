<template>
  <div class="home">
    <NavBar class="navbar_bg">
      <div slot="center">购物街</div>
    </NavBar>
    <Title class="title"
           :title="['流行','新款','爆款']"
           @updateclick="update"
           ref="titleref11" v-show="isfixed"
    ></Title>


    <!--                                                               绑定发射过来的自定义事件-->
    <BetterScorll
      class="content"
      ref="clickscroll"
      :probeType1="3"
      @scro="contentback"
      :pullingUp1="true"
      @pulling="pullingclick"
    >
      <Homelunbo class="banners" :banners="banners" @imageloadtop="imageofftop"></Homelunbo>
      <Hometuijian :recommends="recommends"></Hometuijian>
      <Homemain></Homemain>
      <Title class="title"
             :title="['流行','新款','爆款']"
             @updateclick="update"
             ref="titleref"
      ></Title>
      <goods :goods="goods[defaulttitle].list"></goods>

    </BetterScorll>
    <!--    要想监听组件的点击必须native-->
    <back @click.native="better" v-show="isshow"></back>
  </div>
</template>

<script>

  import Title from "components/content/title/Title"
  import goods from "components/content/goods/Goods"
  import back from "components/content/backtop/BackTop"

  import NavBar from "components/common/navbar/NavBar"
  import BetterScorll from "components/common/betterscroll/bscroll"
  import Homelunbo from "views/home/childrencompontes/lunbocompontens"


  import Hometuijian from "views/home/childrencompontes/tuijian"
  import Homemain from "views/home/childrencompontes/maincompontens"
  import {getHomemultidata, getHomegoodsdata} from "network/Home"

  import {debounce} from "common/utils"


  export default {
    name: "index",
    components: {
      back,
      Title,
      goods,

      NavBar,
      BetterScorll,
      Homelunbo,

      Hometuijian,
      Homemain
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        defaulttitle: "pop",
        scorll: null,
        isshow: false,
        tapfoosetTop:0,
        isfixed:false,
        saveY:0
      }
    },
    created() {
      this.getHomemultidataM();
      this.getHomegoodsdataM('pop');
      this.getHomegoodsdataM('new');
      this.getHomegoodsdataM('sell');

    },
    activated(){

      this.$refs.clickscroll.refresh1();
      //当进去后将这个y值传递给scrollbackTo,回到上次的地方
      this.$refs.clickscroll.scrollbackTo(0,this.saveY,0)
    },
    deactivated(){
      //当从home离开之后获取一下y值并保存给saveY
      this.saveY=this.$refs.clickscroll.getscrolly();
    },
    mounted() {
      const ref = debounce(this.$refs.clickscroll.refresh1, 200);
      this.$bus.$on("aaa", () => {
        ref();
      })
    },
    methods: {
      imageofftop(){
        this.tapfoosetTop=this.$refs.titleref.$el.offsetTop;
      },
      pullingclick(){
        //加载哪一个
        this.getHomegoodsdataM(this.defaulttitle);
      },
      //自定义事件传递过来的一个参数position
      contentback(position) {
        //如果大于就true小于就false
        this.isshow = Math.abs(position.y) > 800;
        this.isfixed=Math.abs(position.y)>this.tapfoosetTop
      },
      better() {
        //回到顶部
        //clickscroll是上面定义的
        this.$refs.clickscroll.scrollbackTo(0, 0, 500);
      },
      update(index) {
        switch (index) {
          case 0:
            this.defaulttitle = 'pop';
            break;
          case 1:
            this.defaulttitle = 'new';
            break;
          case 2:
            this.defaulttitle = 'sell';
            break;
        }
        this.$refs.titleref11.currentclick=index;
        this.$refs.titleref.currentclick=index;
      },
      /**
       * 这下面是网络请求
       * */
      getHomemultidataM() {
        getHomemultidata().then(res => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
      },
      getHomegoodsdataM(type) {
        const page = this.goods[type].page + 1;
        getHomegoodsdata(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          //加载一次调用一次
          this.$refs.clickscroll.finish();
        })
      }
    }
  }
</script>

<style scoped>
  .navbar_bg {
    background-color: #ff1c7e;
    color: #fff;
    position: relative;
    z-index: 6;
    width: 100%;
  }
  .banners {
    padding-top: 44px;
  }

  .title {
    position: relative;
    z-index: 10;
  }

  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: 100%;
  }

  .swiper-pagination-bullet {
    background-color: red;
  }


</style>
