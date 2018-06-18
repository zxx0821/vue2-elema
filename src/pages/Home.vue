<template>
  <div id="Home">
    <Veader class="header" :seller="seller"></Veader>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view :seller="seller"></router-view>
    </div>
  </div>
</template>
<script>
  import Veader from '../components/header/header.vue'
  export default {
    name: 'Home',
    data(){
        return{
            seller:{}
        }
    },
    components:{
          Veader
    },
    created(){
        this.getSeller();
    },
    methods: {
       /* 获取商家seller */
       getSeller:function () {
         let _this = this;
         _this.$axios.get('/api/seller').then((res)=>{
           if(res.data.errno===0){
             _this.seller = res.data.data;
             console.log(_this.seller)
           }
         }).catch((err)=>{
             console.log('数据获取失败'+err);
         });
       },
      toseller(){
        this.$router.push({
          name: 'seller',
          params:{
            name: "namevalue",
            code: 1001
          }
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/minix";
  #Home {
    .tab{
      display: flex;
      width:100%;
      height:40px;
      line-height: 40px;
      .border-1px(rgba(7,17,27,0.1));
      .tab-item{
        flex:1;
        text-align: center;
        &>a{
          display: block;     /* 变成块级标签，自动填充其父元素*/
          font-size:14px;
          color: rgb(77,85,93);
          line-height: 40px;
        }
        .active{
          color: rgb(240,20,20);
        }
      }
    }
  }
</style>
