<template>
    <div>
      <div class="nav">
          <router-link to="/" tag="a" exact >推荐</router-link>
          <router-link to="/singer" tag="a">歌手</router-link>
          <router-link to="/rank" tag="a">排行</router-link>
          <router-link to="/search" tag="a">搜索</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "m-nav"
    }
</script>

<style scoped>
    .nav{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 46px;
    }
  .nav>a{
    display: block;
    width: 25%;
    text-align: center;
    color: hsla(0,0%,100%,.5);
    line-height: 44px;
  }
    .nav .is-active{
      color: #ffcd32;
      border-bottom: 2px solid #ffcd32;
  }
</style>
