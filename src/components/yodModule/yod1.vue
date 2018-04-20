<template>
    <div class="yodContainer">
      <div class="mtb15 radiusBox rb1">
        <h3 class="fs14 orange mtb10">新的一年会有怎么样的机会？</h3>
        <p class="fs12 orange mtb5">善乐生联手周易大师法迦蓝，和传统的生肖运程不同，报告根据紫微斗数及子平八字，结合数十万命理个案的大数据分析，为您定制全年及月度运势建议，全面剖析事业、婚恋、财富、健康、出行五大重点运程。</p>
        <p class="fs12 orange mtb5">原价数千元的分析服务借助在线算法，春节期间善乐生会员仅需88元即可参与测试，赶快来试试吧！</p>
      </div>
      <yod-tittle :tittle="aboutus"></yod-tittle>
      <div class="mtb15 radiusBox rb1">
        <div class="mb20">
          <h3 class="blo fs16 orange mtb10">乐生堂</h3>
          <p class="mh140 yodArticle">
            <img class="fr ml5" width="108" height="140" src="../../assets/yodImg/sls.png" alt="乐生堂">
            乐生堂是善乐生投资的会员服务项目，旨在传承并发扬中华传统文化在现代商业社会中的应用，通过整合顶尖的周易及传统文化专家资源，
            为社会精英提供源自中国传统智慧的决策咨询服务。我们的团队拥有丰富的金融投资与传统文化实践经验，具有前瞻的商业思维与服务意识，
            能更好的将传统文化与商业投资相结合，为客户提供具有价值的决策参考。
          </p>
        </div>
        <div>
          <h3 class="blo fs16 orange mtb10">法迦蓝</h3>
          <p class="mh140 yodArticle">
            <img class="fr ml5" width="108" height="140" src="../../assets/yodImg/master.png" alt="法迦蓝">
            山东大学和清华大学工学学士、硕士，长江商学院金融MBA、文创二期。自幼受家族熏陶，深入研习周易术数要旨，
            毕业后更与现代科技、商业相结合，以大数据理论进行统计和分析易学格局，至今已在商界、政府、教育、医学等领域累积五千多案例，
            是中国为数不多的将多门术数同时应用揭示运势起伏的命理风水师之一。
          </p>
        </div>
      </div>
      <yod-tittle :tittle="test"></yod-tittle>
      <p class="tac white">2018运势详批全年整体运势大披露</p>
      <div class="mtb15 radiusBox rb1">
        <div class="yodImgCon1">
          <img width="100%" height="auto" src="../../assets/yodImg/test.png" alt="test">
        </div>
        <dl class="yogDl" v-for="dlist in dlist">
          <dt class="orange">{{dlist.tittle}}</dt>
          <dt class="pa pa1"><img width="100%" height="100%" v-bind:src="dlist.src"></dt>
          <dd>{{dlist.first}}</dd>
          <dd>{{dlist.second}}</dd>
          <dd>{{dlist.third}}</dd>
        </dl>
      </div>
      <yod-tittle :tittle="math"></yod-tittle>
      <yod-tittle :tittle="other"></yod-tittle>
    </div>
</template>

<script>
    import YodTittle from "./yodTittle";
    export default {
        name: "yod1",
        data(){
          return{
            aboutus: '关于我们',
            test:'测试内容',
            math: '权威算法',
            other:'来看别人怎么说',
            dlist:[
              {tittle:'总体运势',src:'/static/yodImg/all-icon.png',first:'您明年的运势重点是什么？',second:'更适合在哪个领域发力？',third:'如何能更好的发挥自己的优势？'},
              {tittle:'事业发展',src:'/static/yodImg/work-icon.png',first:'您的事业运势如何？',second:'是否有好的创业、升职机会？',third:'什么时候更利于合作？'},
              {tittle:'姻缘感情',src:'/static/yodImg/love-icon.png',first:'您的桃花运势有多旺？',second:'是否能成功脱单、走入婚姻？',third:'与现有伴侣如何更好的相处？'},
              {tittle:'财运运势',src:'/static/yodImg/money-icon.png',first:'您的财运会有哪些特点?',second:'什么样的赚钱方式更适合您？',third:'您会有较大的花销么？'},
              {tittle:'健康状况',src:'/static/yodImg/health-icon.png',first:'全年的健康状况如何？',second:'有哪些需要注意的地方？',third:'哪些时间需要重点注意？'},
              {tittle:'迁移出行',src:'/static/yodImg/go-icon.png',first:'您明年是否适合离乡发展？',second:'是否有好的出游机会？',third:'哪些时间不利于出行？'}
            ]
          }
        },
        components: {YodTittle},

    }
</script>

<style scoped>
  .blo{
    border-left: 2px solid #fd7b25;
    padding-left: 1em;
    line-height: .8em;
    font-weight: normal;
  }
  .mh140{
    min-height: 140px;
  }
  .yodArticle{
    padding-left: 1em;
    font-size: 14px;
    line-height: 1.5em;
  }
  .yodImgCon1{
    max-width: 500px;
    margin: 10px auto;
  }
  .yogDl{
    position: relative;
    box-sizing: border-box;
    max-width: 500px;
    margin:  15px auto;
    padding-left: 60px;
    color: #848484;
  }
  .pa.pa1{
    width: 40px; height: 40px;
    left:0;top:0;
  }
</style>
