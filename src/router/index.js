import Vue from "vue"
import Vuerouter from "vue-router"

//懒加载的方式
const Home = () => import('views/home/Home');
const fenlei = () => import('views/fenlei/fenlei');
const shopping = () => import('views/shopping/shopping');
const my = () => import('views/my/my');
const detile = () => import('views/detile/Detile');
// 1安装插件
Vue.use(Vuerouter);
//配置映射关系
const routes=[
  {
    path: "",
    //重定向第一次进入显示的页面
    redirect: "/Home",
  },
  {
    path: "/Home",
    component: Home,
  },
  {
    path:"/fenlei",
    component:fenlei
  },
  {
    path: "/shopping",
    component: shopping,
  },
  {
    path: "/my",
    component: my,
  },
  {
    //要想后面拼接id必须加
    path: "/Detile/:id",
    component: detile,
  }
]

// 2创建router
const router =new Vuerouter({
    routes,
    mode:"history"
});

//3 导出

export default router
