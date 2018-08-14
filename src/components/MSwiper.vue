<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in slider_img" :key="index"><img :src="item.picUrl" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import jsonp from 'jsonp'
  export default {
    name: "m-swiper",
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: {
            stopOnLastSlide:true
          },
          pagination :{
            el:'.swiper-pagination',
            clickable:true
          },
          prevButton:'.swiper-button-prev',
          nextButton:'.swiper-button-next',
        },
        slider_img:[]
      }
    },
    created(){
      jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&platform=h5&uin=0&needNewCode=1',{
        param: 'jsonpCallback',
        prefix: 'jp'
      },(err, data)=>{
        this.slider_img = data.data.slider
      })
    },
    methods:{

    }

  }
</script>

<style>
  .swiper-pagination-bullet,.swiper-pagination-bullet:active{
    outline: none!important;
  }
</style>
