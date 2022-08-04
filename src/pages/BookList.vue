// 书本搜索+分类页面
<template>
    <div class="booklist-container">
        <!-- 搜索框组件 -->
        <BookSearch></BookSearch>
        <div class="container2">
            <ul v-for="data in booklist" :key="data" class="bookclassify">
                <router-link :to="'/BookListMore?bookclassify='+data"><li class="booklist" @click="to_book_detail(data)">{{data}}</li></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import BookSearch from '../components/BookSearch.vue'
export default {
    name:'BookList',
    data() {
        return {
            booklist:[],
        }
    },
    methods:{
        to_book_detail(data){
            console.log("点击",data)
        }
    },
    mounted() {
        this.$axios.get('api/book/api-book-classifyone-all').then(
            response=>{
                console.log(response.data)
                this.booklist=response.data
            },
            error=>{
                console.log(error)
            }
        )
    },
    components:{
        BookSearch
    }
}
</script>

<style scoped>
.container2{
    position:relative;
    width: 100%;
    height: 100%;
    /* border: 2px solid red; */
    overflow-x:hidden;
    overflow-y: scroll;
}
.bookclassify{
    position: relative;
    /* border: 1px solid red; */
    margin-top: 10px;
    height: .5rem;
    width: 60%;
    margin-left: 15px;
}
.booklist{
    /* border: 1px solid red; */
    margin-left: 20px;
    list-style-type: square;
    color: black;
    z-index:-1;
    font-size: .5rem;
}

.booklist-container{
    /* border: 1px solid black; */
    display: inline-grid;
    grid-template-rows: 10% 90%;
}
.booklist:hover{
    color: rgb(240, 130, 40);
}
</style>