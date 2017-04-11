<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li></li>
    </ul>
    <div>这里是测试vue-resource</div>
    <br/>
    <ajaxtest></ajaxtest>
  </div>
</template>

<script>
  import ajaxtest from '@/page/firststep/ajaxtest.vue'
  export default {
    name: 'firststep',
    data () {
      return {
        msg: 'firststep'
      }
    },
    components: {
      ajaxtest: ajaxtest
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
