<template>
    <div class="tittle mtb10">
      <h2 class="yodtle">{{tittle}}</h2>
    </div>
</template>

<script>
    export default {
        name: "yodTittle",
        props: ['tittle']
    }
</script>

<style scoped>
  .yodtle{
    height: 50px;
    line-height: 64px;
    max-width: 540px;
    margin: 0 auto;
    text-align: center;
    color: #fff;
    font-size: 22px;
    font-weight: normal;
    letter-spacing: .1em;
    background-image: url("../../assets/yodImg/branch.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
