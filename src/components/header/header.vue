<template>
  <div class="header" id="header">
    <!--内容区-->
    <div class="header-content">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" alt="图标">
      </div>
      <div class="header-wrapper">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="desc">
          <span>{{seller.description}} / {{seller.deliveryTime}}分钟送达</span>
        </div>
        <div class="descount" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!--公告区-->
    <div class="notice-content" @click="showDetail">
      <span class="notice-title"></span><span class="notice-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!--背景-->
    <div class="background">
      <img :src="seller.avatar" alt="background" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div class="detail" v-show="detailshow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <Star :size="48" :score="seller.score"></Star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supportlist">
              <li class="supportlist-item" v-for="(item,index) in seller.supports">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="notice-wrapper">
              <p class="notice-text">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
    import Star from '../star/star.vue';
    export default {
      name:'Header',
      props:{
          seller:{
              type:Object
          }
      },
      components:{
        Star
      },
      data(){
          return{
            detailshow:false
          }
      },
      created(){
        this.classMap = ['decrease','discount','guarantee','invoice','special']
      },
      methods:{
         showDetail:function () {
           this.detailshow = true;
         },
         hideDetail:function () {
           this.detailshow = false;
         }
      }

    }
</script>
<style lang="less" scoped>
  @import "../../assets/css/minix";
  #header{
    position: relative;
    overflow: hidden;
    color: #fff;
    background: rgba(7,17,27,0.5);
    .header-content{
      position: relative;
      padding:24px 12px 18px 24px;
      .avatar{
        display: inline-block;
        vertical-align: top;
        img{
           border-radius: 2px;
           margin-right: 16px;
        }
      }
      .header-wrapper{
        display: inline-block;
        .title{
          margin:2px 0 8px 0;
          .brand{
            display: inline-block;
            vertical-align: top;
            width:30px;
            height:18px;
            .bg-image('brand');
            background-size:30px 18px;
            background-repeat:no-repeat;
          }
          .name{
            font-size:16px;
            color: rgb(255,255,255);
            font-weight: bold;
            line-height: 18px;
          }
        }
        .desc{
           margin-bottom: 10px;
          line-height:12px;
          font-size:12px;
          span{
            font-size:12px;
            font-weight: 200;
          }
        }
        .descount{
          font-size:0;
          .icon{
            display: inline-block;
            vertical-align: top;
            width: 12px;
            height: 12px;
            margin-right: 4px;
            background-size: 12px 12px;
            background-repeat:no-repeat;
          }
          .decrease{
            .bg-image('decrease_1');
          }
          .discount{
            .bg-image('discount_1');
          }
          .guarantee{
             .bg-image('guarantee_1')
          }
          .invoice{
           .bg-image('invoice_1')
          }
          .special{
           .bg-image('special_1')
          }
          .text{
            font-size: 10px;
            line-height: 12px;
          }
        }
      }
      .supports{
        position: absolute;
        right:12px;
        bottom:14px;
        padding:0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background: rgba(0,0,0,0.2);
        text-align: center;
         //font-size:0;
        .count{
          font-size: 10px;
          font-weight: 200;
          line-height: 24px;
          vertical-align: top;
        }
        .icon-keyboard_arrow_right{
          line-height: 24px;
          margin-left: 2px;
          font-size: 10px;
        }
      }
    }
    .notice-content{
      position: relative;
      height:28px;
      padding:0 22px 0 12px;
      line-height: 28px;
      background: rgba(7,17,27,0.2);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .notice-title{
        display: inline-block;
        width:22px;
        height:12px;
        background-size: 22px 12px;
        line-height: 28px;
        background-repeat:no-repeat;
        .bg-image('bulletin');
      }
      .notice-text{
        vertical-align: top;
        margin:0 4px;
        font-size:10px;
      }
      .icon-keyboard_arrow_right{
        position: absolute;
        font-size:10px;
        right:12px;
        top:10px;
      }
    }
    .background{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:-1;
      filter:blur(10px);
    }
    .detail{
      position: fixed;
      z-index: 1000;
      top: 0;
      left:0;
      width: 100%;
      height: 100%;
      overflow: auto;
      backdrop-filter: blur(10px);
      background: rgba(7,17,27,0.8);
      opacity: 1;
      &.fade-enter-active,&.fade-leave-active {
        transition: all 1s;
      }
      &.fade-enter,&.fade-leave-active {
        opacity: 0;
        background: rgba(7, 17, 27, 0);
      }
      .detail-wrapper{
        width:100%;
        min-height: 100%;
        .detail-main{
          margin-top:64px;
          padding-bottom:64px;
          .name{
            line-height: 16px;
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            color: rgb(255,255,255);
          }
          .star-wrapper{
            margin-top: 18px;
            padding:2px 0;
            text-align: center;
          }
        }
        .title{
          display: flex;
          width: 80%;
          margin:28px auto 24px auto;
          .line{
            flex: 1;
            position: relative;
            border-bottom: 1px solid rgba(255,255,255,0.2);
            top:-8px
          }
          .text{
            padding:0 12px;
            font-weight: 700;
            font-size:14px;
          }
        }
        .supportlist{
          width: 80%;
          margin:0 auto;
          .supportlist-item{
            padding:0 12px;
            margin-bottom: 12px;
            font-size: 0;
            &:last-child{
              margin-bottom: 0;
            }
            .icon{
              display: inline-block;
              width: 16px;
              height: 16px;
              vertical-align: top;
              margin-right: 6px;
              background-size: 16px 16px;
              background-repeat:no-repeat;
              &.decrease{
                .bg-image('decrease_2');
              }
              &.discount{
                .bg-image('discount_2');
              }
              &.guarantee{
                .bg-image('guarantee_2')
              }
              &.invoice{
                .bg-image('invoice_2')
              }
              &.special{
                .bg-image('special_2')
              }
            }
            .text{
              font-size: 12px;
              font-weight: 200;
              line-height: 16px;
            }
          }
        }
        .notice-wrapper{
          width:80%;
          margin:0 auto;
          .notice-text{
            padding: 0 12px;
            line-height: 24px;
            font-size: 12px;
            font-weight: 200;
          }
        }
      }
      .detail-close{
        position: relative;
        width: 32px;
        height: 32px;
        clear:both;
        margin:-64px auto 0 auto;
        font-size:32px;
      }
    }
  }
</style>
