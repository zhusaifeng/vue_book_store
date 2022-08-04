<template>
    <div style="overflow:auto">
        <div class="container">
            <!-- 推荐书籍组件 -->
            <RecommendBook></RecommendBook>
            <!-- 热门书籍组件 -->
            <HotBook></HotBook>
            <!-- 新书组件 -->
            <NewBook></NewBook>
        </div>
        </div>
</template>

<script>
import HotBook from '../components/HotBook'
import RecommendBook from '../components/RecommendBook'
import NewBook from '../components/NewBook'
import '../assets/css/public.css'
import '../assets/css/scroll.css'
export default {
    name:'MainBook',
    components:{
        HotBook,
        RecommendBook,
        NewBook
    },
}
</script>

<style scoped>
.container{
    position:relative;
    /* left: 37%;
    top: 113px; */
    width: 100%;
    /* height:100%; */
    /* border: 2px solid rgb(1, 14, 15); */
}

</style>