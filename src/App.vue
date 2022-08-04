<template>
    <div class="bigcontainer">
        <ul class="topul">
        <!-- vue中使用router-link实现页面跳转 -->
        <li class="topli"><router-link to="/MainBook" active-class="active">推荐</router-link></li>
        <li class="topli"><router-link to="/BookList" active-class="active">书库</router-link></li>
        <li class="topli"><router-link to="/User" active-class="active">用户</router-link></li>
      </ul> 
      <!-- 指定组件的呈现位置 -->
      <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
// import BookList from './pages/BookList.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import MainBook from './components/MainBook.vue'
// import User from './components/User.vue'
// import './assets/css/public.css'
export default {
  name: "App",
  data() {
    return {
      show:true
    }
  },
  components: {
    // BookList
  },
};
</script>

<style scoped>
a{
    display: block;/*将a变成块状*/
    width: 100%;/*设置块的宽度*/
    height: 50px;/*设置块的长度*/
    font-family: Microsoft Yahei;
    line-height: 50px;/*设置字体在块中的高度*/
    background-color: #959999;
    margin: 0px 0px;/*块里的高宽通过margin设置*/
    color: #fff;
    text-align: center;/*字体居中*/
    text-decoration: none;/*去掉下划线*/
    font-size: .4rem;
}
/* a:hover{
  background-color: rgb(240, 130, 40);
} */
.bigcontainer{
    position: relative;
    border: 2px solid powderblue;
    /* left: 5%; */
    width: 100%;
    height:480px;
    display:inline-grid;
    grid-template-rows:10% 90%;
}
.active{
  background-color: rgb(240, 130, 40);
}
</style>
