// user页面
<template>
    <div class="container">
        <div class="userinfo">
            <div class="center-container">
                <img src="../assets/logo.png" alt="" class="headphoto">
                <div style="text-align:center;font-size:.4rem">用户名:朱赛峰<br>信用分:80分</div>
            </div>
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
    width:100%;
    font-size: 30%;
    position: relative;
}
.center-container{
    width: 70%;
    height: 70%;
    position: relative;
    left: 15%;
    top: 15%;
    display: inline-grid;
    grid-template-rows:60% 40% ;

}
.headphoto{
    width: 20%;
    position: relative;
    top:30%;
    left: 40%;
}
.setting{
    position: relative;
    /* border: 1px solid black; */
    width: auto;
    height: 20;
    padding: 10px;
    margin-top: 5px;
    font-size: .4rem;
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