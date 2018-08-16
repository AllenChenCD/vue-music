<template>
  <transition name="slide">
    <div class="singer-detail">this is child</div>
  </transition>
</template>

<script>
  import jsonp from 'jsonp'
  export default {
    name: "singer-detail",
    data(){
        return {
          singer_detail:{}
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
          this.singer_detail = data.data
            console.log(data.data)

        })
      },
  }
</script>

<style scoped>
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
    background: #ffffff;
  }
</style>
