<template>
  <div class="layout">
    <div class="left">
      <leftNav></leftNav>
    </div>
    <div class="right">
      <div class="top_right"></div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import leftNav from './leftNav'
export default {
  components:{
    leftNav
  }
}
</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  .left {
    width: 300px;
    height: 100%;
    background-color: #0094ff;
  }
  .right {
      height: 100%;
    width: 100%;
    .main {
      height: calc(100% - 30px);
      width: 100%;
    }
  }
  .top_right {
    width: 100%;
    height: 30px;
    background-color: #ccc;
  }
}
</style>
