<template>
    <div class="bigcontainer">
      <ul>
        <!-- vue中使用router-link实现页面跳转 -->
        <li><router-link to="/MainBook" active-class="active" class="a">推荐</router-link></li>
        <li><router-link to="/BookList" active-class="active" class="a">书库</router-link></li>
        <li><router-link to="/User" active-class="active" class="a">用户</router-link></li>
      </ul> 
      <!-- 指定组件的呈现位置 -->
      <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MainBook from './components/MainBook.vue'
// import BookList from './components/BookList.vue'
// import User from './components/User.vue'

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
.bigcontainer{
    position: relative;
    border: 2px solid powderblue;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 300px;
    height: 480px;
}
.active{
  background-color: rgb(240, 130, 40);
}
</style>
