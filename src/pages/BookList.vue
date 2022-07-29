<template>
    <div class="container">
        <BookSearch></BookSearch>
        <ul v-for="data in booklist" :key="data" class="bookclassify">
            <router-link :to="'/BookListMore?bookclassify='+data"><li class="li" @click="to_book_detail(data)">{{data}}</li></router-link>
        </ul>
    </div>
</template>

<script>
import BookSearch from '../components/BookSearch.vue'
export default {
    name:'BookList',
    data() {
        return {
            booklist:[]
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
.bookclassify{
    position: relative;
    /* border: 1px solid red; */
    margin-top: 10px;
    height: 30px;
    width: 270px;
    margin-left: 20px;
}
.li{
    margin-left: 20px;
    list-style-type: square;
    color: black;
}

</style>