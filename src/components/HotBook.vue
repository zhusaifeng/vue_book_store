<template>
    <div>
        <!-- 展示热门书籍   -->
            <div class="newbook" v-for="data in hotbook" :key="data.bookId">
                <router-link :to="'/BookDetail?bookid='+data.bookId">
                <img :src="data.bookImageBig" alt="" class="bookimg">
                <div class="tag2">热门</div>
                <p class="info">
                    书名：{{data.bookName}}<br>
                    作者：{{data.bookAuthor}}<br>
                    分类：{{data.bookClassifyOne}}<br>
                    出版社：{{data.bookPress}}<br>
                    库存：{{data.bookResidue}}
                </p>
                </router-link>
            </div>
    </div>
</template>

<script>
export default {
    name:"HotBook",
    data() {
        return {
            hotbook:[]
        }
    },
    mounted() {
         //通过接口获取热门书籍
        this.$axios.get('api/book/api-index-getHotBook').then(
            response=>{
                console.log(response.data)
                this.hotbook=response.data
            },
            error=>{
                console.log(error.message)
            }
        )
    },
}
</script>

<style>
</style>