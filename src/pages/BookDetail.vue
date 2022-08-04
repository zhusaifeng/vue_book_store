// 书本详情页面
<template>
<div class="container">
    <!-- 详情页面的书本信息组件 -->
    <BookInfo></BookInfo>
    <!-- 详情页面的推荐书籍组件 -->
    <BookRecommend></BookRecommend>
    <div>
        <button class="btn">下载txt</button>
        <button class="btn" style="left:3rem"> 立即阅读</button>
    </div>
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

<style scoped>
.container{
    position:relative;
    width: 100%;
    height: 100%;
    display: inline-grid;
    grid-template-rows:45% 34% 21% ;
}
button{
    position:relative;
    top: 30%;
    left:1.5rem;
    border: 1px solid red;
    width: 2rem;
    height: 1rem;
    padding: 7px;
    font-size: .3rem;
}


</style>