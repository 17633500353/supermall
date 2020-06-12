<template>
  <div>
    <div class="kl" @click="vvclick">
<!--      如果为false时显示第一个图片-->
      <div v-if="!isactive" class="icon1">
        <slot name="icon1"></slot>
      </div>
<!--      如果为true时显示第二个图片-->
      <div v-else class="icon2">
        <slot name="icon2"></slot>
      </div>

      <div :style="acvtive" class="text">
<!--        插槽的name值要和slot的值一样-->
        <slot name="text3"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "childrenzujian",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      vvclick() {
        //点击哪一个组件就让他的路径改为 这里的this.path就是导航children的path
        this.$router.replace(this.path);
      }
    },
    computed: {
      isactive() {
        //if  indexOf找到了,也就是不等于-1   为true 其他为false
        return this.$route.path.indexOf(this.path) !== -1;
      },
      acvtive() {
        //判断当前isactive如果是活跃状态的话把color改为上面设置的颜色
        return this.isactive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>

</style>
