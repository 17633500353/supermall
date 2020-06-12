<template>
  <div>
    <NAVBAR class="NAVBAR">
      <div @click="backclick" slot="left"> <</div>
      <div class="center" slot="center">
        <div class="center-item" v-for="(item,index) in title" @click="changeclick(index)"
             :class="{redchang:defaultindex===index}">
          {{item}}
        </div>
      </div>
    </NAVBAR>
  </div>
</template>

<script>
  import NAVBAR from "components/common/navbar/NavBar"

  export default {
    name: "childrenavbar",
    components: {
      NAVBAR,
    },

    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        defaultindex: 0,
      }
    },
    methods: {
      changeclick(index) {
        this.defaultindex = index;
      },
      backclick() {
        //back()相当于go(-1)
        this.$router.back();
      },
    }
  }
</script>

<style scoped>

  .center {
    display: flex;
  }
  .center-item {
    flex: 1;
  }

  .redchang {
    color: #ff3c9a;
  }


</style>
