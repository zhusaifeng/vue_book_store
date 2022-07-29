<template>
    <div class="recommend"> 
        <p>喜欢本书的人还喜欢：</p>
        <div  v-for="(data,index) in bookrecommend"  :key="index" style="display:inline">
            <router-link :to="'/BookDetail?bookid='+data.bookId" v-if="data!=null">
                <img v-if="data!=null" :src="data.bookImageBig" alt="" class="img">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'BookRecommend',
    data() {
        return {
            bookrecommend:{}
        }
    },
    mounted() {
        this.$axios.get('api/book/api-book-recommend/'+this.$route.query.bookid).then(
            response=>{
                this.bookrecommend=response.data
                console.log(response.data)
            },
            error=>{
                console.log(error.message)
            }
        )
    },
    
}
</script>

<style scoped>
.recommend{
    border-top: 1px solid rgb(219, 213, 213);
    border-bottom: 1px solid rgb(219, 213, 213);
    position: absolute;
    top: 210px;
    width: 100%;
    height: 140px;
    margin-left: 4px;
    overflow-x:hidden;
    overflow-y: auto;
}
.img{
    width: 25%;
    /* height: 90px; */
    margin: 5px;
    display: inline-flex;
    flex-direction: column;
}

</style>