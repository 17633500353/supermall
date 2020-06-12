<template>
  <div id="comment">
    <div>
      <img class="comment-img" :src="commentaa.userimg" alt="">
      <span>{{commentaa.username}}</span>
    </div>
    <h5>{{commentaa.style1}}</h5>
    <h6>{{commentaa.content1}}</h6>
  </div>
</template>

<script>
  export default {
    name: "childrencomment",
    props: {
      commentaa: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

  .comment-img{
    width: 10%;
    border-radius: 50%;
    border: 1px solid #fff;
  }
  h5,h6{
    color: #ffb9c5;
  }
  #comment{
    padding-bottom: 20vw;
  }

</style>
