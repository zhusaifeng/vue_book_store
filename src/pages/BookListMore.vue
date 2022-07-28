<template>
    <div class="container">
        <div v-for="data in booklist" :key="data.bookId">
            <router-link :to="'/BookDetail?bookid='+data.bookId">
            <img v-if="data.bookImageBig!=''" :src="data.bookImageBig" alt="" class="img">
            <img v-if="data.bookImageBig==''" src="../assets/1.png" class="img">
            <p class="msg">
                书名：{{data.bookName}}<br>
                作者：{{data.bookAuthor}}<br>
                类型：{{data.bookClassifyOne}}
            </p>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    name:'BookClassify',
    data() {
        return {
            booklist:[]
        }
    },
    mounted() {
        this.$axios.get('api/book/api-book-book-byclassifyone/'+this.$route.query.bookclassify).then(
            response=>{
                console.log(response.data)
                this.booklist=response.data
            },
            error=>{
                console.log(error)
            }
        )
    },
}
</script>

<style scoped>
.img{
    position: absolute;
    width: 18%;
    /* height: 13%; */
    /* margin: 10px; */
    margin-left: 20px;
}
.msg{
    position:relative;
    top: 0px;
    left: 100px;
    font-size: smaller;
}

</style>