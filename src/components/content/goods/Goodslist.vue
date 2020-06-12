<template>

  <div class="Goodslist" @click="tiaoclick">
    <img :src="goodsl.show.img" alt="" @load="loadclick">
    <div class="text">
      <p>{{goodsl.title}}</p>
      <span class="price">{{goodsl.price}}</span>
      <span class="collect">{{goodsl.cfav}}</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: "Goodslist",
    props: {
      goodsl: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      loadclick(){
        this.$bus.$emit("aaa")
      },
      tiaoclick(){
        console.log(this.goodsl.iid);
        this.$router.push("/Detile/"+this.goodsl.iid);
      }
    }
  }
</script>

<style scoped>

  .price {
    color: red;
  }

  .collect {
    margin-left: 20px;
  }

  .Goodslist {
    width: 48%;
    margin: 0 3px;
    margin-top: 20px;
  }

  .Goodslist img {
    width: 100%;
    border-radius: 7px;
  }

  .text p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
