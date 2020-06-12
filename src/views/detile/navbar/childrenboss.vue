<template>
  <div class="boss" v-if="Object.keys(bossmessage).length!==0">
    <img class="bossimg" :src="bossmessage.bossimg" alt=""><span>{{bossmessage.name}}</span>
    <div id="cSells">
      <div class="info">
        <div>{{cSells}}万</div>
        <br>
        <div>总销量</div>
      </div>
      <div class="info">
        <div>{{bossmessage.cGoods}}</div>
        <br>
        <div>全部宝贝</div>
      </div>

    <div id="right" v-for="item in bossmessage.score">
        <span class="name">{{item.name}}</span>
        <span class="better">
          <span class="isBetter" :class="{active:item.isBetter}">{{item.score.toFixed(2)}}</span>
          <span class="icon" :class="{active:item.isBetter}"><span>{{item.isBetter? '高':'低'}}</span></span>
        </span>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "childrenboss",
    props: {
      bossmessage: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      cSells() {
        return (this.bossmessage.cSells / 10000).toFixed(2)
      }
    }
  }
</script>

<style scoped>

  .boss{
    padding-top:10px;
    padding-bottom: 20px;
  }
  .name,.isBetter,.icon{
    margin: 2px;
  }
  #cSells{
    padding-top: 10px;
  }

  .info {
    float: left;
    width: 30%;
    margin: auto;
    text-align: center;
  }
  .bossimg {
    width: 15%;
    border: 1px solid #000;
    border-radius: 50%;
    text-align: center;
  }

  .active {
    color: red;
  }

  .active span {
    border: 1px solid red;
    background-color: red;
    color: #fff;
    font-size: 12px;
  }

  .better {
    color: green;
    text-align: center;
  }

  .better .icon {
    border: 1px solid #fff;
    text-align: center;
    font-size: 12px;
    background-color: green;
    color: #fff;
  }
</style>
