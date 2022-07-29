<template>
    <div>
        <div class="newbook" v-for="data in newbook" :key="data.bookid">
            <router-link :to="'/BookDetail?bookid='+data.bookId">
                <img :src="data.bookImageBig" alt="" class="bookimg">
                <div class="tag3">新书</div>
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
    name:"NewBook",
    data() {
        return {
            newbook:[]
        }
    },
    mounted() {
        //通过接口获取新书
        this.$axios.get('api/book/api-index-getNewBook').then(
            response=>{

                for(var i=0;i<response.data.length;i++){
                if(response.data[i].bookAuthor==''){
                    response.data[i].bookAuthor="更新中..."
                }
                if(response.data[i].bookPress==''){
                    response.data[i].bookPress="更新中..."
                }
                if(response.data[i].bookResidue==null){
                    response.data[i].bookResidue="数据更新中..."
                }
                }
                console.log(response.data),
                this.newbook=response.data
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