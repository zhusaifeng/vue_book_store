// user页面
<template>
    <div class="container">
        <div class="userinfo">
            <img src="../assets/logo.png" alt="" class="headphoto">
            <span>用户名：朱赛峰</span><br>
            <span style="left:35%">信用分:80分</span>
        </div>
        <div>
            <div class="setting">当前借阅<div class="arrow">></div></div>
            <div class="setting">借阅历史<div class="arrow">></div></div>
            <div class="setting">账号设置<div class="arrow">></div></div>
            <div class="setting">退出登录<div class="arrow">></div></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'User'
}
</script>

<style scoped>
.container{
    position:relative;
    width: 100%;
}
.userinfo{
    background-color: lightcyan;
    height: 45%;
    width: 100%;
    font-size: 30%;
}
.headphoto{
    width: 20%;
    position: relative;
    top:20%;
    left: 120px;
}
span{
    position: relative;
    top: 50px;
    left: 40px;
    font-size: 50%;
}
.setting{
    position: relative;
    /* border: 1px solid black; */
    width: auto;
    height: 20;
    padding: 10px;
    margin-top: 5px;
    font-size: 45%;
    /* margin-top: 20px; */
}
.setting .arrow{
    position: absolute;
    right:20px;
    top: 9px;
}
.setting:hover{
    color: rgb(240, 130, 40);
}

</style>