// 同一分类下的所有书本
<template>
    <div class="container">
        <div v-for="data in booklist" :key="data.bookId" style="margin-top:5%">
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
                for(var i=0;i<response.data.length;i++){
                if(response.data[i].bookAuthor==''){
                    response.data[i].bookAuthor="更新中..."
                }
                if(response.data[i].bookPress==''){
                    response.data[i].bookPress="更新中..."
                }
                }
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
.container{
    position:relative;
    /* left: 37%;
    top: 113px; */
    width: 100%;
    /* height: 425px; */
    /* border: 2px solid powderblue; */
    overflow-x:hidden;
    overflow-y: scroll;
}

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
    font-size:30%;
}

</style>