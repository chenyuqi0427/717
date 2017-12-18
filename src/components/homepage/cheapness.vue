<template>
    <div class="cheapness">
        <!--  标题  -->
        <div class="topic">
            <span class="topic-img">
                <img src="/src/static/img/todayimg.png">
            </span>
            <span style="font-size:.32rem;">天天特惠</span>
            <span>每天有惊喜</span>
            <span class="more">更多<i class="iconfont icon-angle-right"></i></span>
        </div>
        <!--  main  -->
        <div class="main">
            <div class="main-left">
                <img src="/src/static/img/home1.png">
            </div>
            <div class="main-right">
                <div class="main-t">
                    <img src="/src/static/img/ruwei.png">
                </div>
                <div class="main-b">
                    <img src="/src/static/img/gaodian.png">
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style scoped>
    /*  标题  */

    .cheapness{
        margin-bottom:.06rem;
        width:100%;
    }
    .topic {
        margin-top: .12rem;
        padding: .18rem .24rem;
        width: 100%;
        color: #ff6d00;
        background: white;
        position: relative;
    }

    .topic span {
        margin-right: .08rem;
    }

    .topic-img {
        display: inline-block;
        width: .4rem;
        height: .4rem;
        vertical-align: bottom;
    }

    .topic-img img {
        width: 100%;
    }

    .more {
        position: absolute;
        right: 6%;
        color: #666;
    }

    .more i {
        vertical-align: middle;
    }

    .main {
        width: 100%;
        height: 4.2rem;
        display: flex;
    }

    .main>div {
        flex: 1;
    }

    .main-left {
        padding: .06rem .08rem;
    }

    .main-left img {
        width: 100%;
        height: 100%;
    }

    .main-right {
        display: flex;
        flex-direction: column;
    }

    .main-right>div {
        flex: 1;
    }

    .main-right img {
        width: 100%;
        height: 100%;
    }

    .main-t {
        padding: .04rem .02rem;
    }

    .main-b {
        padding: .04rem .02rem;
    }
</style>