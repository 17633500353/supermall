<template>
  <div class="goods">
    <Goodlist v-for="item in goods" :goodsl="item">
    </Goodlist>
  </div>
</template>

<script>
  import Goodlist from "./Goodslist"

  export default {
    name: "Goods",
    components: {
      Goodlist
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

  .goods {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 50px;

  }
</style>
