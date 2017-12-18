<template>
    <div class="menu">
        <div class="menu-box" v-for='(v,i) in menulist'>
            <p>
                <span class="menu-img">
                    <img :src="v.imgsrc">
                </span>
            </p>
            <p>{{v.txt}}</p>
        </div>
        <div class="lunbo">
            <span class="lunbo-size">商城动态</span>
            <mt-swipe :auto="2000" class="lunbo-banner" continuous >
                <mt-swipe-item v-for='(v,i) in lunboBannerList'>{{v}}</mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                menulist: [
                    {
                        imgsrc: './src/static/img/nav3.png',
                        txt: '牛奶乳品'
                    },
                    {
                        imgsrc: './src/static/img/nav1.png',
                        txt: '家乡味道'
                    },
                    {
                        imgsrc: './src/static/img/nav4.png',
                        txt: '休闲零食'
                    },
                    {
                        imgsrc: './src/static/img/nav6.png',
                        txt: '米面粮油'
                    },
                    {
                        imgsrc: './src/static/img/nav7.png',
                        txt: '调味调料'
                    },
                    {
                        imgsrc: './src/static/img/nav8.png',
                        txt: '酒水饮料'
                    },
                    {
                        imgsrc: './src/static/img/nav5.png',
                        txt: '生鲜果蔬'
                    },
                    {
                        imgsrc: './src/static/img/nav2.png',
                        txt: '进口食品'
                    }
                ],
                lunboBannerList: [
                    '717商城社区服务功能正式上线！抢红包！晒家乡！好吃、好玩、好看尽在717商城社区！',
                    '7.17安全食品商城周年庆，暑期放价嗨不停！好吃、安全、放心的食品，陪你度假期！'
                ]
            }
        }
    }

</script>
<style scoped>
    .menu {
        margin-top: .12rem;
        padding: .12rem 0;
        width: 100%;
        background: white;
        display: flex;
        flex-wrap: wrap;
    }

    .menu-box {
        padding: .12rem 0;
        width: 25%;
        text-align: center;
    }

    .menu-box p:nth-child(2) {
        padding-top:.06rem;
        font-size: .24rem;
    }

    .menu-img {
        display: inline-block;
        width: .88rem;
        height: .88rem;
    }

    .menu-img img {
        width: 100%;
        height: 100%;
    }

    .lunbo{
        width:100%;
        height:1rem;
        background: white;
    }
    
    .lunbo-size{
        text-align: center;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        color:#ff6d00;
        font-size: .38rem;
        vertical-align: top;
    }
    
    .lunbo-banner{
        padding-top:.16rem;
        display: inline-block;
        width: 80%;
        height: .8rem;
        border: 1px solid #eee;
        border-radius: .18rem;
        line-height: .3rem;
        font-size: .26rem;
    }
    
</style>