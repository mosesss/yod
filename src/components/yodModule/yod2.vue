<template>
  <div class="yodContainer">
    <p class="w80p m30a tal red fs14">已有<span class="white">{{peoples}}</span>人进行测试，<span class="white">{{precen}}</span>的测算用户对运程分析非常满意。
      风云测准确预测<span class="white">您的2018年姻缘感情、事业财运、家庭健康等运势，让您感情顺利，升官发财！</span></p>
    <div class="radiusBox w80p m10a">
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
    <yod-tittle :tittle="done"></yod-tittle>
  </div>
</template>

<script>
    import YodTittle from "./yodTittle";
    export default {
      name: "yod2",
      data(){
        return{
          done:'支付完成获得以下内容',
          peoples: '5105511',
          precen:'98%'
        }
      },
      components: {YodTittle}
    }
</script>

<style scoped>

</style>
