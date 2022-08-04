// 搜索框组件
<template>
    <div style="position:relative">
        <input type="text" placeholder="请输入书名" v-model="bookname" v-on:keyup.enter="search" style="font-size:.3rem;border:1px solid yellow">
        <img src="../assets/search.jpg" alt="search" class="SearchIcon" @click="search">
        <!-- <div class="search-result">搜索结果</div> -->
        <router-link :to="'/BookDetail?bookid='+this.bookid">
        <div class="search-area" v-if="this.bookname!=''&& this.newbookname==this.bookname">
            <ul v-for="data in searchbook" :key="data.bookId" class="search-result">
                <li @click="to_bookdetail(data.bookId)">{{data.bookName}}</li>
            </ul>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bookname: '',//输入搜索的书本名
            newbookname:'',//第二次输入的书本名
            bookid:0,
            searchbook:[]//得到的搜索结果
        }
    },
    methods: {
        search:function(){
            console.log("点击search"+this.bookname)
            this.$axios.get('apibook/api-book-book-bynamelike/'+this.bookname).then(
            Response=>{
                console.log(Response.data)
                this.searchbook=Response.data,
                this.newbookname=this.bookname
                console.log("newbookname",this.newbookname)
            },
            error=>{
                console.log(error.message)
            }
        )
        },
        to_bookdetail:function(bookId){
            this.bookid=bookId
        }
    },
}
</script>

<style>
input{
    position: absolute;
    left: 20%;
    top: 20%;
    /* bottom: 8px; */
    width: 5.5rem;
    height: 40%;
    padding: auto;
}
button{
    position: relative;
    left: 30px;
    top: 5px;
}
.search-result{
    font-size: .3rem;
    width: 70%;
}
.search-result:hover{
    color: rgb(240, 130, 40);
}
.search-area{
    border: 1px solid gray;
    background-color:rgb(247, 243, 243);
    position:absolute;
    left:20%;
    top: 90%;
    width: 63%;
    /* height: 20px; */
    z-index: 99999;
}

.SearchIcon{
    position:absolute;
    top:22%;
    left: 75%;
    /* right: 8px; */
    width: .5rem;
}


input::-webkit-input-placeholder {
    /* placeholder颜色 */
    color: #aab2bd;
    /* placeholder字体大小 */
    font-size: .35rem;
}

</style>