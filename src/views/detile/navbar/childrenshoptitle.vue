<template>
  <div v-if="Object.keys(shopmessage).length !==0">
    <h5 class="title">{{shopmessage.title}}</h5>
    <p>
      <span :style="{color:shopmessage.discountBgColor}" class="price">{{shopmessage.price}}</span>
      <span class="oldPrice">{{shopmessage.oldPrice}}</span>
      <span class="discountDesc">{{shopmessage.discountDesc}}</span>
    </p>

    <p id="footer">
      <span class="footer-info">{{shopmessage.coulumns[0]}}</span>
      <span class="footer-info">{{shopmessage.coulumns[1]}}</span>
      <span class="footer-info">{{shopmessage.fahuo[3].name}}</span>
    </p>
    <div id="baoyou" >
      <span class="baoyou-p" v-for="it in shopmessage.baoyou">
        <img :src="it.icon" alt=""><span>{{it.name}}</span>
      </span>

    </div>
  </div>
</template>

<script>
  export default {
    name: "shoptitle",
    props: {
      shopmessage: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

  #footer {
    display: flex;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 2px solid rgba(27, 30, 33, 0.2);
  }

  .footer-info {
    flex: 1;
    color: rgba(27, 30, 33, 0.56);
    font-size: 14px;
  }

  .title{
    text-align: center;
  }
  .price{
    /*color: #ff79a4;*/
    font-size: 20px;
    margin-left: 10px;
  }
  .oldPrice{
    text-decoration:line-through;
    font-size: 12px;
    margin-left: 10px;
  }
  .discountDesc{
    color: #fff;
    background-color: #ff4a9a;
    border-radius: 40%;
    margin-left: 10px;
    text-align: center;
    font-size: 14px;
  }
  #baoyou{
    display: flex;
    text-align: center;
    font-size: 10px;
    border-bottom: 5px solid rgba(27, 30, 33, 0.2);
    padding: 20px 0;
  }
  .baoyou-p img{
    width: 20%;
    font-size: 10px;
    float: left;
   }
  .baoyou-p{
    flex: 1;
  }

</style>
