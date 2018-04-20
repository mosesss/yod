<template>
  <div class="hello">
    <p class="mtb50"> 导航：
      <router-link to="/">首页</router-link> |
      <router-link to="/yod">yod模版页面</router-link> |
      <router-link to="/yod/index">-yod页面1</router-link> |
      <router-link to="/yod/pay">-yod页面2</router-link> |
      <router-link to="/yod/result">-yod页面3</router-link>
    </p>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <another :keyword-mode="messages"></another>
    <modal1></modal1>
    <label> <input type="radio" value="male" v-model="message"/></label>
    <label> <input type="radio" value="female" v-model="message" checked="checked"/></label>
    <p v-on:click.stop="consolesth">{{message}}</p>
  </div>
</template>

<script>
  import Another from "./another";
  import Modal1 from "./modal1";
export default {
  name: 'HelloWorld',
  components: {Modal1, Another},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      somemsg: 'some message',
      message:''
    }
  },
  computed:{
    at:{
      set: function(newValue){
        this.infoTwin = newValue*100;
        console.log('zhixing?')
      },
      get: function(){
        return (this.infoTwin / 100).toFixed(2);
      }
    }
  },
  methods:{
    consolesth: function(){
      console.log(this.message);
    }
  }
}
</script>
<style scoped>
  @import "../assets/styleA.css";
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
