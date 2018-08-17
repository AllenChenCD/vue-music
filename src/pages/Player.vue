<template>
  <div class="player">
    <div class="background">
      <img data-v-35618e92="" width="100%" height="100%"
           src="https://y.gtimg.cn/music/photo_new/T002R300x300M000000gCu9F4cwL7S.jpg?max_age=2592000">
    </div>
    <audio src=""></audio>
  </div>
</template>

<script>
  export default {
    name: "player"
  }
</script>

<style scoped>
  .fixed-top{
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
.background{

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: .6;
  -webkit-filter: blur(20px);
  filter: blur(20px);
}
</style>
