<template>
  <div id="Home">
    <mheader></mheader>
    <mswiper></mswiper>
    <h1 class="list-title">歌曲推荐</h1>
    <div class="songlist-container">
        <ul class="songlist">
          <li v-for="(item,index) in song" v-if="index<20" :key="index">
            <div>
              <img v-lazy="item.imgurl" alt="">
            </div>
            <div class="des">
              <h2>{{item.dissname}}</h2>
              <p>作者：{{item.creator.name}}</p>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
  import mheader from '@/components/MHeader'
  import mswiper from '@/components/MSwiper'
  import jsonp from 'jsonp'
  import axios from 'axios'
  import {getDiscList} from '../api/recomment'
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
      getDiscList().then((res) => {
       this.song = res.data.list
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
  .songlist{
    max-height: 50vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch
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
