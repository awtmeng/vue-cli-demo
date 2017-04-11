<template>
  <div>
    <div>我是一个接受ajax的组件</div>
    <div>我是后台传过来的数据：{{home.title}}</div>
  </div>
</template>

<script  type="text/ecmascript-6">
  export default {
    data () {
      return {
        home: {}
      }
    },
    name: 'ajaxtest',
    created () {
      this.$http.get('/api/test').then((response) => {
        response = response.body;
        this.home = response;
      })
    }
  }
</script>
