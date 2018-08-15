<template>
  <div>
    <div class="mheader">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="logo-title">
        Allen Music
      </div>
    </div>
    <mnav></mnav>
  </div>
</template>

<script>
  import mnav from '@/components/MNav'

  export default {
    name: "m-header",
    components: {
      mnav: mnav
    }
  }
</script>

<style>
  .mheader {
    display: flex;
    justify-content: center;
    align-items: center;
    height:44px ;
    line-height:44px ;
  }

  .logo {
    width: 30px;
    height: 32px;
    margin-right: 10px;
  }

  .logo-title {
    color: #ffcd32;
    font-size: 18px;
  }
</style>
