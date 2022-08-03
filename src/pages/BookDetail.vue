// 书本详情页面
<template>
<div class="container">
    <!-- 详情页面的书本信息组件 -->
    <BookInfo></BookInfo>
    <!-- 详情页面的推荐书籍组件 -->
    <BookRecommend></BookRecommend>
    <button style="left:170px">下载txt</button>
    <button>立即阅读</button>
</div>
</template>

<script>
import BookInfo from '../components/BookInfo'
import BookRecommend from '../components/BookRecommend.vue'
export default {
    components:{
        BookInfo,
        BookRecommend
    },
}
</script>

<style>
.container{
    position:relative;
    /* left: 37%;
    top: 113px; */
    width: 299px;
    height: 425px;
    /* border: 2px solid powderblue; */
    /* overflow-x:hidden;
    overflow-y: scroll; */
}
button{
    position:absolute;
    top:370px;
    left:50px;
    border: 1px solid red;
    width: 80px;
    height: 40px;
    padding: 7px;
    font-size: small;
}


</style>