<template>
    <div class="yod">
      <header class="yodHeader">
        <h1 class="dn fs0 lh0 h0">狗年运程</h1>
        <img class="yodHeaderImg" src="../assets/yodImg/theme.jpg" alt="狗年运程"/>
      </header>
      <router-view/>
      <footer class="yodFooter">
        <img class="mb10" width="102"  src="../assets/yodImg/sls-ewm.png" alt="二维码"/>
        <p class="fs12 white lh2em">— 乐生堂与法迦蓝荣誉出品 —</p>
        <p class="fs12 white lh2em">更多测试信息及反馈，请关注我们</p>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "gou"
    }
</script>
<style>
  @import "../assets/mosesStyle.css";
  @import "../assets/styleA.css";
</style>
<style scoped>

</style>
