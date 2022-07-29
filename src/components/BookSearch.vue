<template>
    <div>
        <input type="text" placeholder="请输入书名" v-model="bookname" v-on:keyup.enter="search">
        <router-link :to="'/BookDetail?bookid='+this.bookid">
        <button>搜索</button>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bookname: '',
            bookid:0
        }
    },
    methods: {
        search:function(){
            console.log("点击search"+this.bookname)
            this.$axios.get('apibook/api-book-book-bynamelike/'+this.bookname).then(
            Response=>{
                console.log(Response.data)
                this.bookid=Response.data[0].bookId
                console.log(this.bookid)

            },
            error=>{
                console.log(error.message)
            }
        )
        }
    },
}
</script>

<style>
input{
    position: relative;
    left: 20px;
    top: 5px;
    width: 180px;
    height: 20px;
}
button{
    position: relative;
    left: 30px;
    top: 5px;
}

</style>