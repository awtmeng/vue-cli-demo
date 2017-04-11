<template>
  <div class="hello">
    <headertop></headertop>
    这里是home页
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderTop from '@/components/header.vue'
  export default {
    name: 'Hello',
    data () {
      return {
      }
    },
    components: {
      headertop : HeaderTop
    }
  }
</script>

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
