<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <div v-if="sources">This only checks for if sources exist</div>
    <div v-if="sources && Object.keys(sources).length != 0">Render only if sources length != 0</div>
    <div>Using computed {{ nameModded }}</div>

    <hr>
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
  </div>
</template>

<script>
//import Vue from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    // eslint-disable-next-line
    console.log('data sources:' + this.sources)//happens before created 
    return {
        sources: {}
    }
  },
  computed: {
    nameModded() {
      // eslint-disable-next-line
      console.log('computed sources length ' + Object.keys(this.sources).length)
      return this.data 
    }
  },
  watch: {
    data(newValue, oldValue) {
      // eslint-disable-next-line
      console.log(oldValue)
      // eslint-disable-next-line
      console.log(newValue)
    }
  },
  created () {
    // eslint-disable-next-line
    console.log('created sources length ' + Object.keys(this.sources).length)
    //Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
    //this.msg = 'hello world from created'
  },
  async mounted() {
    // eslint-disable-next-line
    console.log('mounted sources length ' + Object.keys(this.sources).length)
    //Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
    //this.msg = 'hello world from mounted'
    // eslint-disable-next-line
    console.log('key',process.env.VUE_APP_SECRET)
  },
  methods: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
