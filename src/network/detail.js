import {request} from "./request";

//这里的aaa要写在iid:后面
export function getxiangxi(aaa) {
  return request({
    url:'/detail',
    params:{
      iid:aaa
    }
  })
}
//商品信息
export class ShopInfo {
  // aa=res.result.itemInfo;
  // bb=res.result.columns;
  // cc=res.result.services;

  //这里的this.后面的值要和 组件  展示信息的值一致,可以自定义
  constructor (aa,bb,cc){
    //颜色
    this.discountBgColor=aa.discountBgColor;
    //标题
    this.title=aa.title;
    //价格标签
    this.discountDesc=aa.discountDesc;
    //原价
    this.oldPrice=aa.oldPrice;
    //现价
    this.price=aa.price;
    //前两位
    this.coulumns=bb;
    //72小时发货
    this.fahuo=cc;
    //包邮等信息
    this.baoyou=cc;
  }
}
//店铺信息
export class BossInfo{
  // aa=res.result.shopInfo
  constructor(aa){
    //店铺头像
    this.bossimg=aa.shopLogo;
    //店铺名称
    this.name=aa.name ? aa.name:" ";
    //总销量
    this.cSells=aa.cSells;
    //商品总数
    this.cGoods=aa.cGoods;
    //用户评价信息
    this.score=aa.score;
    //
    this.isBetter=aa.isBetter;
  }
}
//参数
export class Shopparams {
  // aa=res.result.itemParams.info
  //bb=res.result.itemParams.rule
  constructor(aa,bb){
    //产品参数
    this.key=aa.key;
    //set
    this.set=aa.set;
    //参数描述
    this.disclaimer=bb.disclaimer;
    //尺码说明
    this.rulekey=bb.key;
    //tables
    this.tables=bb.tables[0];
  }
}
//评论信息
export class Comment1 {
  //aa=res.result.rate.list[0]
  constructor(aa){
    //用户头像
    this.userimg=aa.user.avatar;
    //用户名
    this.username=aa.user.uname
    //购买参数
    this.style1=aa.style;
    //评论内容
    this.content1=aa.content;
  }
}
