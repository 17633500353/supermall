<template>
    <div class="params">
      <p>{{ShopParams.key}}</p>
      <table border="1" cellpadding="0" cellspacing="0">
        <tr v-for="item in ShopParams.set">
          <td>{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
      <p>{{ShopParams.disclaimer}}</p>
      <table border="1" cellpadding="0" >
        <tr v-for="it in ShopParams.tables">
          <td>{{it[0]}}</td>
          <td>{{it[1]}}</td>
          <td>{{it[2]}}</td>
          <td>{{it[3]}}</td>
        </tr>
      </table>
    </div>
</template>

<script>
    export default {
        name: "childrenparams",
        props:{
          ShopParams:{
            type:Object,
            default(){
              return {}
            }
          }
        }
    }
</script>

<style scoped>

  .params{
    padding-bottom: 20px;
  }
  td{
    padding: 5px 0;
    text-align: center;
  }
  table{
    width: 100%;
    margin: auto;
    border: 0.3px solid #ffaeb3;
  }

</style>
