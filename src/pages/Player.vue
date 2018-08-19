<template>
<div>
  <div class="player">
    <div class="background">
      <img data-v-35618e92="" width="100%" height="100%" :src="msg.singer_img" >
    </div>
    <div>
      <audio :src="url" ref="audio"></audio>
    </div>
  </div>
  <div class="middle">
      <div class="play-icon" @click="changeState">
        <i class="icon-play" v-if="!show"></i>
        <i class="icon-pause" v-if="show"></i>
      </div>
    <img :src="msg.singer_img" alt="" class="roll-img" @click="changeState" ref="midimg">
  </div>
  <div class="bottom">
    
  </div>
</div>
</template>

<script>
export default {
  name: "player",
  props: ["msg", "audio"],
  data() {
    return {
      show:true,
      url: `http://dl.stream.qqmusic.qq.com/http://dl.stream.qqmusic.qq.com/C400${
        this.msg.list[this.audio].musicData.songmid
      }.m4a?guid=2061459708&vkey=8BF3A14053E174F20DECB932D24D095084804F79C93E36A15E96239E90CD5A1BE7E430E1F950EA935BF8DD167AA07295C429BFA340117316&uin=0&fromtag=38`
    };
  },
  methods: {
    changeState(){
      this.show = !this.show
        if(this.show){
          this.$refs.audio.play()
          this.$refs.midimg.style.webkitAnimationPlayState = "running"
         }else{
        this.$refs.audio.pause();
        this.$refs.midimg.style.webkitAnimationPlayState = "paused"
        
       }
    }
  },
  mounted() {
    this.$refs.audio.play();
  },
  watch: {
    
  }
};
</script>

<style scoped>
@keyframes roll {
  0%{
    transform: rotate(0)
  }
  100%{
    transform: rotate(360deg)
  }
}
.roll-img{
  animation:roll 10s linear infinite;
}
.icon-play,.icon-pause{
  font-size: 40px;
}
.icon-pause:before {
    content: "\E90B";
}
.play-icon{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 100;
}
.icon-play:before {
  content: "\E90C";
}
.operators {
  display: flex;
}
.bottom {
  position: absolute;
  bottom: 50px;
  width: 100%;
}
.middle {
  position: fixed;
  width: 80%;
  top: 80px;
  z-index: 200;
  left: 10%;
}
.middle img {
  border-radius: 50%;
}
.fixed-top {
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  z-index: 10;
}
.player {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 150;
  height: 100vh;
  width: 100vw;
  background: #222222;
  filter: blur(3px);
}
.background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  -webkit-filter: blur(20px);
  filter: blur(20px);
}
</style>
