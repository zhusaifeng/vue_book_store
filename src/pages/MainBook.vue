<template>
    <div>
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
export default {
    name:'MainBook',
    components:{
        HotBook,
        RecommendBook,
        NewBook
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
    overflow-x:hidden;
    overflow-y: scroll;
}

.newbook{
    position: relative;
    width: 276px;
    height: 125px;
    left: 8px;
    right: 8px;
    margin-bottom: 1px;
    border: 2px solid gainsboro;
}
.bookimg{
    width: 80px;
    height: 80px;
    position: absolute;
    top:20px;
}

.info{
    position: relative;
    left: 100px;
    font-size: xx-small;
    margin-top: 10px;
    line-height: 15px;
    /* border: 1px solid black; */
    width: 140px;
}

.tag1{
    position: absolute;
    right: 10px;
    /* top: 10px; */
    font-size: 1px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 10px;
    border: 1px solid rgb(241, 34, 34);
    color: rgb(241, 34, 34);
}

.tag2{
    position: absolute;
    right: 10px;
    /* top: 10px; */
    font-size: 1px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 10px;
    border: 1px solid rgb(15, 230, 33);
    color: rgb(15, 230, 33);
}

.tag3{
    position: absolute;
    right: 10px;
    /* top: 10px; */
    font-size: 1px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 10px;
    border: 1px solid rgb(15, 128, 180);
    color: rgb(15, 128, 180);
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
.a{
    display: block;/*将a变成块状*/
    width: 100px;/*设置块的宽度*/
    height: 50px;/*设置块的长度*/
    font-family: Microsoft Yahei;
    line-height: 50px;/*设置字体在块中的高度*/
    background-color: #959999;
    margin: 0px 0px;/*块里的高宽通过margin设置*/
    color: #fff;
    text-align: center;/*字体居中*/
    text-decoration: none;/*去掉下划线*/
    font-size: 15px;
}
a:hover{
background-color: #a5aaa7;
}


::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    background: rgba(0,0,0,0.2);
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}

</style>