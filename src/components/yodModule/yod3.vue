<template>
  <div class="yodContainer">
    <div class="w80p m10a infoDiv">
      <information
        :info-name="info.a"
        :info-date="info.b"
        :info-time="info.c"
        :info-male="info.d"
        :info-twin="info.e"
        :info-place="info.f"></information>
    </div>
    <yod-tittle :tittle="ml"></yod-tittle>
    <div class="w80p m10a attrDiv">
      <attribute
        :attr-a="bz"
        :attr-b="wx"
        :attr-c="ln"
        :attr-d="zw"
        :attr-e="zx"
        :numerology-a="info2.a"
        :numerology-b="info2.b"
        :numerology-c="info2.c"
        :numerology-d="info2.d"
        :numerology-e="info2.e"></attribute>
    </div>
    <yod-tittle :tittle="ys"></yod-tittle>
    <div class="radiusBox w80p m10a">
      <p class="p2030">{{yszl}}<span class="red">{{yszlRed}}</span></p>
    </div>
    <yod-tittle :tittle="ysxj"></yod-tittle>
    <yod-tittle :tittle="pj"></yod-tittle>
    <yod-tittle :tittle="tx"></yod-tittle>
    <div class="w80p m10a">
      <p class="tal ti2 white">如果您觉得报告有帮助，可以帮家人也做个分析或推荐给亲友，让我们在2018年趋吉避凶，迎接吉祥如意的新一年！</p>
      <p class="tal ti2 white">按右上方按钮可以在浏览器打开报告收藏后随时查看，也可以在测试页面查询订单号，找到自己的报告。</p>
    </div>
  </div>
</template>

<script>
    import YodTittle from "./yodTittle";
    import Information from "../information";
    import Attribute from "../attribute";
    const info = {a:'mosess',b:'1xxx年xx月xx日',c:'xx:xx',d:'男',e:'是 第x胎',f:'xxxxxxxxxxxxxxx'};
    const info2 = {a:'戊辰  丙辰  戊戌 壬戌',b:'戊*阳土*昆仑',c:'大运癸丑，流年戊戌',d:'天梁独坐',e:'破军独坐'};
    const yszl ='依据以上您的出生信息及我们为您推算出的命理属性，您在2018戊戌年期间（准确的说是2018年2月4日05:28:25至2019年2月4日 11:14:14期间），'
    const yszlRed = '将会迎来较大的变化与机遇，同时也容易有比较多的消耗，可能有破旧立新的事情发生。需要注意人际关系，易有争夺和冲突，可以尝试主动寻求帮助。'
    export default {
      name: "yod3",
      data(){
        return{
          ml:'您的命理属性',
          ys:'2018运势总论',
          ysxj:'2018运势详解',
          pj:'您的评价',
          tx:'温馨提醒',
          bz:'八字',
          wx:'五行',
          ln:'2018大运流年',
          zw:'紫薇命宫主星',
          zx:'2018流年命宫主星',
          info,
          info2,
          yszl,
          yszlRed
        }
      },
      components: {Attribute, Information, YodTittle},
    };
</script>

<style scoped>

</style>
