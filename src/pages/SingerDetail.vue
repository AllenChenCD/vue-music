<template>
  <transition name="slide">
    <div class="singer-detail">
      <div class="fixed-top">
        <div>
         <i class="icon-back" @click="goback" v-if="!show"></i>
          <i class="icon-back rotate" @click="hide" v-if="show"></i>
        </div>
        <div class="col-fff singer_name">
          {{singer_detail.singer_name}}
        </div>
      </div>
      <div class="rel">
        <div class="filter"></div>
        <img :src="singer_detail.singer_img" alt="">
      </div>
      <div class="song-list" ref="song_ul">
        <ul >
          <li v-for="(item,index) in singer_detail.list" class="song-li" @click="toPlay">
            <h2>{{item.musicData.songname}}</h2>
            <p>专辑名：{{item.musicData.albumname}}</p>
          </li>
        </ul>
      </div>
      <Player v-if="show"></Player>
    </div>
  </transition>
</template>

<script>
  import Player from '@/pages/Player'
  import jsonp from 'jsonp'
  export default {
    name: "singer-detail",
    data(){
        return {
          singer_detail:{},
          show:false
        }
    },
    created() {
      var url = this.$route.params.id
      console.log(url)
        jsonp
        ('https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&hostUin=0&needNewCode=0&platform=yqq&order=listen&begin=0&num=80&songstatus=1&singermid='+url+'&jsonpCallback=jp1', {
          param: '',
          prefix: 'jp',
          name: 'jp1'
        }, (err, data) => {
          data.data.singer_img = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${url}.jpg?max_age=2592000`
          this.singer_detail = data.data
            console.log(data.data)

        })
      },
    mounted(){
      this.$refs.song_ul.addEventListener("scroll",function(){
       var scrolltop = this.scrollTop
        var chcke = document.getElementsByClassName("c_height").length
        if(scrolltop>0 && chcke === 0){
         this.className += ' c_height'
        }else if(scrolltop ==0){
          this.className = ' song-list'
        }
      })
    },
    methods:{
      goback:function(){
        this.$router.go(-1)
      },
      toPlay:function(){
        this.show = true
      },
      hide(){
        this.show = !this.show
      }

    },
    components:{
      Player:Player
    }
  }
</script>

<style scoped>
  .rotate{
    transform: rotate(-90deg);
  }
  .filter{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7,17,27,.4);
  }
  .singer_name{
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 40;
    width: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #fff;
  }
  .fixed-top{
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    z-index: 160;
  }
  .icon-back:before {
    content: "\E911";
  }
  .icon-back{
    display: block;
    padding: 10px;
    font-size: 22px;
    color: #ffcd32;
  }
  .c_height{
    height: 87vh!important;
    /*transform: translate(0,-50vh);*/
  }
  .song-list>ul{
    padding-bottom: 60px;
  }
  .song-li h2{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #fff;
    font-size: 14px;
  }
  .song-li p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 4px;
    color: hsla(0,0%,100%,.3);
    font-size: 14px;
  }
  .song-li{
    height: 64px;
  }
  .song-list{
    padding: 20px 30px;
    height: 50vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background: #222;
    transition: all linear 0.2s;
    position: fixed;
    bottom: 0;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0)
  }

  .singer-detail {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #222;
  }
</style>
