<template>
    <div class="info">
      <ul class="tal infoBox">
        <li class="infoList plA"><span class="pa pa1 color">您的姓名</span>{{infoName}}</li>
        <li class="infoList plA"><span class="pa pa1 color">出生日期</span>{{infoDate}}</li>
        <li class="infoList plA"><span class="pa pa1 color">出生时间</span>{{infoTime}}</li>
        <li class="infoList plA"><span class="pa pa1 color">您的姓名</span>{{infoMale}}</li>
        <li class="infoList plA"><span class="pa pa1 color">双胞胎</span>{{infoTwin}}</li>
        <li class="infoList plA"><span class="pa pa1 color">出生地</span>{{infoPlace}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "information",
      props: ['infoName','infoDate','infoTime','infoMale','infoTwin','infoPlace']
    }
</script>

<style scoped>
  .infoBox{
    padding: 10px;
    background-color: #fff;
  }
  .infoList{
    position: relative;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
  }
  .infoList.plA{
    padding-left: 90px;
  }
  .pa.pa1{
    left: 0;
  }
</style>
