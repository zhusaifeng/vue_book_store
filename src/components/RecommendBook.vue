<template>
    <div>
        <!-- 展示推荐书籍 -->
            <div class="newbook" v-for="data in recommendbook" :key="data.bookId">
                <router-link :to="'/BookDetail?bookid='+data.bookId">
                <img :src="data.bookImageBig" alt="" class="bookimg">
                <div class="tag1">推荐</div>
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
    data() {
        return {
            recommendbook:[]
        }
    },
    mounted() {
         //通过接口获取推荐书籍
        this.$axios.get('api/book/api-index-getRecommendBook/1').then(
            response=>{
                console.log(response.data),
                this.recommendbook=response.data
            },
            error=>{
                console.log(error.message)
            }
        )
    },
}
</script>

<style>
a{
    color:black;
    text-decoration: none;
}

</style>