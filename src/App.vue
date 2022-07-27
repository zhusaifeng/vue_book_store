<template>
    <div class="bigcontainer">
      <ul>
        <!-- vue中使用router-link实现页面跳转 -->
        <li><router-link to="/MainBook" active-class="active">推荐</router-link></li>
        <li><router-link to="/BookList" active-class="active">书库</router-link></li>
        <li><router-link to="/User" active-class="active">用户</router-link></li>
      </ul> 
      <!-- 指定组件的呈现位置 -->
      <router-view></router-view>
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
ul{/*设置导航栏的框框*/
    padding: 0px;/*将框框的padding设置为零，不然会导致框框里的内容与框边缘有间隔*/
    position:relative;
    margin: 0;
    /* left: 37%;
    top: 125px; */
    width: 300px;
    height: 45px;
    /* border: 1px solid powderblue; */
}
li{
   list-style-type: none;/* 去掉li前的点 */
    float: left;/*将li设置成做浮动，变为联动*/
}
a{
    display: block;/*将a变成块状*/
    width: 100px;/*设置块的宽度*/
    height: 50px;/*设置块的长度*/
    font-family: Microsoft Yahei;
    line-height: 50px;/*设置字体在块中的高度*/
    background-color: rgb(156, 148, 148);
    margin: 0px 0px;/*块里的高宽通过margin设置*/
    color: #fff;
    text-align: center;/*字体居中*/
    text-decoration: none;/*去掉下划线*/
    font-size: 15px;
}

.active{
  background-color: rgb(240, 130, 40);
}
</style>
