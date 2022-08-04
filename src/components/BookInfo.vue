<template>
        <div  class="bookinfo">
                <div style="display:inline-grid;grid-template-columns:30% 70%;position:relative">
                    <div><img :src="BookDetail.bookImageBig" alt="" class="book"></div>
                    <div>
                        <p class="info1">
                            书名：{{BookDetail.bookName}}<br>
                            作者：{{BookDetail.bookAuthor}}<br>
                            出版社：{{BookDetail.bookPress}}<br>
                            类别：{{BookDetail.bookClassifyOne}}
                        </p>
                    </div>
                </div>
                <div>
                    <p class="clear1">简介</p>
                    <p class="clear2">{{BookDetail.bookDesc}}</p>
                </div>
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
.bookinfo{
    display: inline-grid;
    grid-template-rows: 54% 46%;
}
.book{
    width: 2.2rem;
    height:2.2rem;
    position: relative;
    top:.3rem;
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
    font-size: .4rem;
}
.clear2{
    position: absolute;
    top: 120px;
    border-top: 1px solid rgb(219, 213, 213);
    width: 99%;
    height:70px;
    font-size: .3rem;
}

.info1{
    position: relative;
    left:.7rem;
    top: .1rem;
    font-size: .35rem;
    /* margin-top: 10px; */
    line-height: .4rem;
    /* border: 1px solid black; */
    width: 140px;
}
</style>