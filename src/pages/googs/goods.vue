<template>
  <div class="goods" id="goods">
    <!--侧边栏-->
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item"  :class="{'current':currentIndex===index}">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <!-- 内容区-->
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="foods-list" ref="foodsList">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="foods-item border-1px">
              <div class="icon">
                <img :src="food.icon" alt="" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="description" v-show="food.description">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="newPrice">￥{{food.price}}</span><span class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <p>购物车</p>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--购物车-->

  </div>
</template>
<script>
    export default {
      name:'goods',
      props:{
          seller:{
              type:Object
          }
      },
      components:{

      },
      data(){
          return{
              goods:[]
          }
      },
      created(){
        this.classMap = ['decrease','discount','guarantee','invoice','special'];
        this.getGoods();
      },
      computed:{
        currentIndex(){
           return 0;
        }
      },
      methods:{
         getGoods(){
           let _this = this;
           _this.$axios.get('/api/goods').then((res)=>{
               if(res.data.errno === 0){
                 _this.goods = res.data.data;
                 console.log(_this.goods)
               }
           }).catch((err)=>{
               console.log(err);
           })
         }
      }
    }
</script>
<style lang="less" scoped>
  @import "../../assets/css/minix";
  #goods{
    display: flex;
    width:100%;
    position: absolute;
    top:174px;
    bottom:46px;
    overflow: hidden;
    .menu-wrapper{
       flex: 0 0 80px;
      width:80px;
      background: #f3f5f7;
      .menu-item{
        display: table;
        height: 54px;
        width: 56px;
        padding: 0 12px;
        line-height: 14px;
        &.current{
          position: relative;
          z-index: 10;
          margin-top:1px;
          background: #fff;
          font-weight: 700;
          .text{
             .border-none
          }
        }
        .icon{
          display: inline-block;
          vertical-align: top;
          width: 12px;
          height: 12px;
          margin-right: 2px;
          background-size: 12px 12px;
          background-repeat: no-repeat;
          &.decrease{
            .bg-image('decrease_3');
          }
          &.discount{
             .bg-image('discount_3');
          }
          &.guarantee{
            .bg-image('guarantee_3');
          }
          &.invoice{
            .bg-image('invoice_3');
          }
          &.special{
            .bg-image('special_3');
          }
        }
        .text{
          display: table-cell;
          width: 56px;
          vertical-align: middle;
          font-size:12px;
          .border-1px(rgba(7,17,27,0.1));
        }
      }
    }
    .foods-wrapper{
      flex: 1;
      .foods-list{
        .title{
          padding-left:14px;
          height: 36px;
          background: #f3f5f7;
          font-size: 12px;
          line-height: 36px;
          color: rgb(147,153,159);
          border-left:2px solid #d9dde1;
        }
        .foods-item{
          display: flex;
          margin:18px;
          padding-bottom: 18px;
          .border-1px(rgba(7,17,27,0.1));
          &:last-child{
            .border-none;
          }
          .icon{
            margin-right: 10px;
            flex: 0 0 57px;
          }
          .content{
            flex: 1;
            .name{
              margin:2px 0 8px 0;
              font-size: 14px;
              line-height: 14px;
              color: rgb(7,17,27);
              height: 14px;
            }
            .description{
               line-height: 12px;
              font-size: 10px;
              color: rgb(147,153,159);
              margin-bottom:8px;
            }
            .extra{
              line-height: 10px;
              font-size: 10px;
              color: rgb(147,153,159);
              .count{
                margin-right: 12px;
              }
            }
            .price{
              font-weight: 700;
              line-height:24px;
              .newPrice{
                margin-right: 8px;
                font-size: 14px;
                color:rgb(240,20,20);
              }
              .oldPrice{
                text-decoration: line-through;
                font-size:10px;
                color: rgb(147,153,159);
              }
            }
            .cartcontrol-wrapper{
              position: absolute;
              right: 0;
              bottom:12px;
            }
          }
        }
      }
    }
  }
</style>
