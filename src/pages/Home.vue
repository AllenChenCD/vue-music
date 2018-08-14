<template>
  <div id="Home">
    <mheader></mheader>
    <mswiper></mswiper>
    <h1 class="list-title">新歌推荐</h1>
    <div class="songlist-container">
        <!--<ul class="songlist">-->
          <!--<li v-for="(item,index) in song" v-if="index<5" :key="index">-->
            <!--<div>-->
              <!--<img :src="item.pic" alt="">-->
            <!--</div>-->
            <!--<div class="des">-->
              <!--<h2>{{item.name}}</h2>-->
              <!--<p>{{item.show_time}}</p>-->
            <!--</div>-->
          <!--</li>-->
        <!--</ul>-->
    </div>
  </div>
</template>

<script>
  import mheader from '@/components/MHeader'
  import mswiper from '@/components/MSwiper'
  import jsonp from 'jsonp'
  import axios from 'axios'
  export default {
    name: "home",
    data(){
      return {
        song:[]
      }
    },
    components: {
      mheader: mheader,
      mswiper:mswiper
    },
    created:function(){
      var x = Math.random()
      const url = '/api/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?picmid=1&rnd=0.5671164862537503&g_tk=5381&jsonpCallback=getPlaylist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=29'
      // jsonp(url,{
      //     prefix: 'jp',
      //     name:'getPlaylist'
      // },function(res){
      //   console.log(res)
      // })
      axios.get(url, {
        // headers: {
        //   'referer': 'https://c.y.qq.com/',
        //   'host': 'c.y.qq.com'
        // }
      }).then((res)=>{
        console.log(res)
      })
    },
    mounted:function(){

    }
  }
</script>

<style scoped>
  .list-title{
    height: 65px;
    line-height: 65px;
    text-align: center;
    font-size: 14px;
    color: #ffcd32;
  }
  .songlist li{
    display: flex;
    justify-content:space-around;
    align-items: center;
    margin-bottom: 10px;
  }
  .songlist img{
    max-width: 80px;
  }
  .songlist .des{
    width: 50%;
  }
  .songlist .des h2{
      font-size: 16px;
    margin-bottom: 10px;
  }
  .songlist .des h2,.songlist .des p{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #ffffff;
    white-space: nowrap;
  }
  .songlist-container{
    overflow: scroll;
    -ms-overflow-style:none;
  }

</style>
