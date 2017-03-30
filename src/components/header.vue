<template>
  <div class="header">
    <ul>
        <li v-for="item in headerlist">
            <router-link :to="{ path: item.path }" >{{item.title}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
  /*查找为什么单个组件需要引入router，router-link才能生效*/
  import Vue from 'vue'
  import Router from 'vue-router'
  Vue.use(Router)
  export default {
    name: 'HeaderTop',
    data(){
      return {
        headerlist: [{
            path: '/firststep',
            title: '第一步'
          },
          {
            path: '/secondstep',
            title: '第二步'
          },
          {
            path: '/threestep',
            title: '第三步'
          },
          {
            path: '/fourstep',
            title: '第四步'
          }]
      }
    },
    components:{
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
