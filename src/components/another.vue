<template>
    <div class="contain">
      <p>{{meaasge}}</p>
    </div>
</template>

<script>
    export default {
        name: "another",
        data(){
          return{
            massage: ''
          }
        }
    }
</script>

<style scoped>
p{
  color: purple;
  font-size: 2em;
}
</style>
