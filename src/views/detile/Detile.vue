<template>
    <div id="Detail">
      <NavBar class="NavBar"></NavBar>
      <BetterScorll
        ref="clickscroll"
        class="content"
        :probeType1="3"
        @scro="contentback"
        :pullingUp1="true"
        @pulling="pullingscroll" >
        <lunbo :topimage="topimage"></lunbo>
        <ShopTitle :shopmessage="shopmessage"></ShopTitle>
        <Boss :bossmessage="bossmessage"></Boss>
        <allimg :xiangxiimg="xiangxiimg"></allimg>
        <Params class="Params" :ShopParams="ShopParams"></Params>
        <Comment :commentaa="comment"></Comment>
      </BetterScorll>

      <back @click.native="better" v-show="isshow"></back>

    </div>
</template>

<script>
  import back from "components/content/backtop/BackTop"

  import NavBar from "./navbar/childrenavbar"
  import lunbo from "./navbar/childrenlunbo"
  import ShopTitle from "./navbar/childrenshoptitle"
  import Boss from "./navbar/childrenboss"
  import allimg from "./navbar/childrenimg"
  import Params from "./navbar/childrenparams"
  import Comment from "./navbar/childrencomment"

  import BetterScorll from "components/common/betterscroll/bscroll"

  import {getxiangxi, ShopInfo, BossInfo,Shopparams,Comment1} from "network/detail"

  export default {
    name: "Detile",
    data() {
      return {
        isshow:false,
        isfixed:false,
        tapfoosetTop:0,
        idd: "",
        topimage: [],
        shopmessage: {},
        bossmessage: {},
        xiangxiimg: [],
        //商品参数
        ShopParams:{},
        //评论
        comment:{}
      }
    },
    methods:{
      pullingscroll(){
        this.$refs.clickscroll.refresh1();
      },
      //自定义事件传递过来的一个参数position
      contentback(position) {
        //如果大于就true小于就false
        this.isshow = Math.abs(position.y) > 800;
      },
      better() {
        //回到顶部
        //clickscroll是上面定义的
        this.$refs.clickscroll.scrollbackTo(0, 0, 500);
      },
    },
    components: {
      back,

      NavBar,
      lunbo,
      ShopTitle,
      Boss,
      allimg,
      Params,
      Comment,

      BetterScorll,
    },
    created() {
      // this.$refs.clickscroll.refresh1();
      //这个id必须和index动态路由id相同
      //this.$route.params.id的值是Goodslist组件里的this.goodsl.iid的值;

      this.idd = this.$route.params.id;
      getxiangxi(this.idd).then((res) => {
        console.log(res);
        const data = res.result;
        //1,轮播图的展示
        this.topimage = data.itemInfo.topImages;
        //2,商品信息的展示
        this.shopmessage = new ShopInfo(data.itemInfo, data.columns, data.shopInfo.services);
        //店铺信息的展示
        this.bossmessage = new BossInfo(data.shopInfo);
        //详情图片
        this.xiangxiimg = data.detailInfo.detailImage[0].list;

        //商品参数
        this.ShopParams=new Shopparams(data.itemParams.info,data.itemParams.rule)
        //评论
        this.comment=new Comment1(data.rate.list[0]);
      })
    }
  }
</script>

<style scoped>

  #Detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .NavBar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 0;
    overflow: hidden;
  }
</style>
