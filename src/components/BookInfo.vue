<template>
        <div class="container">
            <img :src="BookDetail.bookImageBig" alt="" class="book">
            <p class="info1">
                书名：{{BookDetail.bookName}}<br>
                作者：{{BookDetail.bookAuthor}}<br>
                出版社：{{BookDetail.bookPress}}<br>
                类别：{{BookDetail.bookClassifyOne}}
            </p>
            <p class="clear1">简介</p>
            <p class="clear2">{{BookDetail.bookDesc}}</p>
        </div>
</template>


<script>
export default {
    name:'BookDetail',
    data() {
        return {
            BookDetail:[]
        }
    },
    mounted() {
        this.$axios.get('api/book/api-book-book-byid/'+this.$route.query.bookid).then(
            response=>{
                if(response.data.bookAuthor==''){
                    response.data.bookAuthor="更新中..."
                }
                if(response.data.bookPress==''){
                    response.data.bookPress="更新中..."
                }
                if(response.data.bookDesc==null){
                    response.data.bookDesc="数据更新中..."
                }
                console.log(response.data)
                this.BookDetail=response.data
            },
            error=>{
                console.log(error.message)
            }
        )
    },
}
</script>

<style scoped>
.book{
    width: 80px;
    height: 80px;
    position: absolute;
    top:5px;
    left: 5px;
}
.li{
    margin-left: 20px;
    list-style-type: square;
    color: black;
}
.clear1{
    position: absolute;
    top: 90px;
    font-size: 50%;
}
.clear2{
    position: absolute;
    top: 120px;
    border-top: 1px solid rgb(219, 213, 213);
    width: 99%;
    height:70px;
    font-size: 50%;
}

.info1{
    position: relative;
    left: 35%;
    top: 3%;
    font-size: 25%;
    margin-top: 10px;
    line-height: 15px;
    /* border: 1px solid black; */
    width: 140px;
}
</style>