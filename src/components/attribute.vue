<template>
  <div class="attr">
    <ul class="tal attrBox">
      <li class="attrList plA"><span class="pa pa1 color">{{attrA}}</span>{{numerologyA}}</li>
      <li class="attrList plA"><span class="pa pa1 color">{{attrB}}</span>{{numerologyB}}</li>
      <li class="attrList plA"><span class="pa pa1 color">{{attrC}}</span>{{numerologyC}}</li>
      <li class="attrList plA"><span class="pa pa1 color">{{attrD}}</span>{{numerologyD}}</li>
      <li class="attrList plA"><span class="pa pa1 color">{{attrE}}</span>{{numerologyE}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "attribute",
      props: ['attrA','attrB','attrC','attrD','attrE','numerologyA','numerologyB','numerologyC','numerologyD','numerologyE']
    }
</script>

<style scoped>
  .attrBox{
    padding: 10px;
    color:#7d8690;
    background-color: #fff;
  }
  .attrList{
    position: relative;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
  }
  .attrList.plA{
    padding-left: 120px;
  }
  .pa.pa1{
    left: 0;
  }
</style>
