<template>
  <div>
    <mheader></mheader>
    <div id="singer-container">
      <div v-for="(item,index) in map" :key="index">
        <div class="singer-title">{{item.title}}</div>
        <ul v-for="item_c in item.items">
          <li class="name-container">
            <img v-lazy="item_c.singer_photo" alt="">
            <span>{{item_c.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="singer-fixed">
      <ul>
        <li v-for="(item,index) in map" :key="index">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import jsonp from 'jsonp'
  import mheader from '@/components/MHeader'

  export default {
    name: "singer",
    components: {
      mheader: mheader,
    },
    data() {
      return {
        singer: [],
        land: [],
        taiwan: [],
        map: {
          hot: {
            title: '热',
            items: []
          }
        }
      }
    },
    created() {
      jsonp
      ('https://c.y.qq.com/v8/fcg-bin/v8.fcg?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=jsonp&channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&hostUin=0&needNewCode=0&platform=yqq&jsonpCallback=jp0', {
        param: '',
        prefix: 'jp',
        name: 'jp0'
      }, (err, data) => {
        this.singer = data.data.list
        console.log(this.singer)
        this.get_hot()
      })
    },
    methods: {
      get_hot: function () {
        for (var i = 0; i < this.singer.length; i++) {
          if (i < 10) {
            this.map.hot.items.push({
              name: this.singer[i].Fsinger_name,
              id:this.singer[i].Fsinger_mid,
              singer_photo:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.singer[i].Fsinger_mid}.jpg?max_age=2592000`
            })
          }
          const key = this.singer[i].Findex
          if(!this.map[key]){
            this.map[key] = {
              title:key,
              items:[]
            }
          }
          this.map[key].items.push({
            name: this.singer[i].Fsinger_name,
            id: this.singer[i].Fsinger_mid,
            singer_photo:`https://y.gtimg.cn/music/photo_new/T001R300x300M000${this.singer[i].Fsinger_mid}.jpg?max_age=2592000`
          })
        }
        console.log(this.map)
      }
    }
  }

</script>

<style scoped>
  #singer-container {
    height: calc(100vh - 90px);
    overflow: scroll;
    -webkit-overflow-scrolling: touch
  }

  .singer-title {
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    font-size: 12px;
    color: hsla(0, 0%, 100%, .5);
    background: #333;
  }

  .name-container {
    display: flex;
    align-items: center;
    padding: 20px 30px;
  }

  .name-container > img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .name-container > span {
    margin-left: 20px;
    color: hsla(0, 0%, 100%, .5);
    font-size: 14px;
  }

  .singer-fixed {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: rgba(0, 0, 0, .3);
    font-family: Helvetica;
  }

  .singer-fixed ul li {
    padding: 3px;
    line-height: 1;
    color: hsla(0, 0%, 100%, .5);
    font-size: 12px;
  }
</style>
