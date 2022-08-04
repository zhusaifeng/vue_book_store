<template>
    <div class="container">
        <img src="../assets/1.jpg" alt="" class="login-img">
        <h1 class="title">创辉达图书借阅</h1>
        <p class="text1">书中自有黄金屋</p>
        <p class="text2">书中自有颜如玉</p>
        <!-- <a href="/main/main.html"><button class="btn">登录</button></a> -->
        <router-link to="/BookList"><button class="btn" @click="clickbtn">登录</button></router-link>
    </div>
</template>

<script>
export default {
    methods: {
        clickbtn:function(){
            console.log("点击按钮")
        }
    },
}
</script>

<style scoped>
.login-img{
    width:100% ;
}
.container{
    position: relative;
    border: 2px solid powderblue;
    left: 5%;
    width: 90%;
    /* height:60%; */
}
.title{
    position: absolute;
    top: 20px;
    left: 50px;
    color: white;
    text-align: center;
    font-size: 28px;
    font-family: 'Times New Roman', Times, serif;
}
.text1{
    writing-mode: vertical-rl;
    position: absolute;
    left:20px;
    top: 180px;
    font-size: 18px;
    color: white;
    font-family: 'Times New Roman', Times, serif;
}
.text2{
    writing-mode: vertical-rl;
    position: absolute;
    left:50px;
    top: 200px;
    font-size: 18px;
    color: white;
    font-family: 'Times New Roman', Times, serif;
}
.btn{
    position: absolute;
    top:80%;
    left: 100px;
    border-radius: 50%;
    font-size: 15px;
    font-family: 'Times New Roman', Times, serif;
    width: 90px;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    padding: 8px;
}

</style>