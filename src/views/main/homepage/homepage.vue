<template>
    <div class="homepage" @scroll='scrollSta'>
        <div class="homepageScrollMain">
            <!--  头部  -->
            <div class="header">
                <div class="he_left">
                    <span class="le-logo">
                    <img src="http://www.lb717.com/static/mobile/images/homeImg/homelo.gif">
                </span>
                </div>
                <div class="he_center">
                    <router-link to='/search'>
                        <div id="ipt">
                            <span class="icon"></span>
                            <input type="text" placeholder="请输入您要购买的商品" class="ipt">
                        </div>
                    </router-link>
                </div>
                <div class="he_right">
                    <span class="ri-logo"><img src="http://www.lb717.com/static/mobile/images/homeImg/shoping.png"></span>
                    <span class="ri-text">我的店铺</span>
                </div>
            </div>
            <!--  swiper  -->
            <mt-swipe :auto="4000" class="home-banner">
                <mt-swipe-item v-for='(v,i) in bannerlist' :key='i'>
                    <img :src="v">
                </mt-swipe-item>
            </mt-swipe>
            <!--  菜单  -->
            <home-menu></home-menu>
            <!--  天天特惠  -->
            <cheapness></cheapness>
            <!--  商品菜单  -->
            <commodity-menu :data='datalist'></commodity-menu>
            <p class="footEnd">我是有底线的…</p>
        </div>
    </div>

</template>
<script>
    // 菜单
    import homeMenu from '../../../components/homepage/menu'
    // 天天特惠
    import cheapness from '../../../components/homepage/cheapness'
    // 商品菜单
    import commodityMenu from '../../../components/homepage/commodityMenu'


    export default {
        name: 'homepage',
        data() {
            return {
                // 轮播图
                bannerlist: [
                    'http://www.lb717.com/static/mobile/images/activity/banner_activite.jpg',
                    'http://www.lb717.com/static/mobile/images/homeImg/video717.png',
                    'http://www.lb717.com/static/mobile/images/homeImg/video.png',
                    'http://www.lb717.com/static/mobile/images/homeImg/banner1.png',
                    'http://www.lb717.com/static/mobile/images/homeImg/home.png'
                ],
                // 请求id
                channelId: 2,
                datalist: [
                    {
                        id: 2,
                        topic: '家乡味道',
                        topicList: []
                    },
                    {
                        id: 3,
                        topic: '进口食品',
                        topicList: []
                    },
                    {
                        id: 4,
                        topic: '牛奶乳品',
                        topicList: []
                    },
                    {
                        id: 5,
                        topic: '休闲零食',
                        topicList: []
                    },
                    {
                        id: 6,
                        topic: '生鲜果蔬',
                        topicList: []
                    },
                    {
                        id: 7,
                        topic: '米面粮油',
                        topicList: []
                    },
                    {
                        id: 8,
                        topic: '调味调料',
                        topicList: []
                    },
                    {
                        id: 9,
                        topic: '酒水饮料',
                        topicList: []
                    }
                ]
            }
        },
        methods: {
            // 初始化请求数据
            queryGoodList() {
                this.$http.post('/mall/index/getGoodsChannel', {
                    channel_id: this.channelId  // 初始2
                })
                    .then((data) => {
                        this.datalist.forEach((v, i) => {
                            if (v.id === data.data.id) {
                                v.topicList = JSON.parse(data.data.data).data.data
                            }
                        })
                    })
            },
            // 下拉加载数据
            scrollSta(v) {
                // 浏览器高度 568
                const h = $(document).height();
                // 滚动条滚走距离
                const boxScrollT = $('.homepage').scrollTop()
                // 盒子总高度
                const boxH = $('.homepageScrollMain').height();

                const lastmsg = boxH - h - boxScrollT;

                if (lastmsg < 200) {

                    if (this.channelId >= 9) {
                        return
                    }
                    this.channelId++

                    this.queryGoodList()
                }
            }
        },
        components: {
            homeMenu,
            cheapness,
            commodityMenu
        },
        created() {
            this.queryGoodList()
        }
    }
</script>
<style scoped>
    .homepage {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        background: #eeeeee;
    }

    .homepageScrollMain {
        width: 100%;
    }

    .homepage::-webkit-scrollbar {
        width: 5px;
    }

    .homepage::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ccc;
    }

    .homepage::-webkit-scrollbar-track {
        background: #eee;
    }
    /*  头部  */

    .header {
        width: 100%;
        display: flex;
        background: white;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }

    .le-logo {
        margin: .2rem .32rem;
        display: inline-block;
        width: 1rem;
        height: .44rem;
    }

    .le-logo img {
        vertical-align: top;
        width: 100%;
    }

    .he_center {
        text-align: center;
        flex: 1;
    }

    #ipt {
        border-radius: .08rem;
        text-align: left;
        margin-top: .12rem;
        width: 100%;
        height: 76%;
        line-height: .78rem;
        background: #f5f5f5;
    }

    .icon {
        display: inline-block;
        width: .28rem;
        height: .28rem;
        margin-left: .18rem;
        margin-right: .08rem;
        vertical-align: middle;
        font-size: .28rem;
        background-image: url(http://www.lb717.com/static/mobile/images/homeImg/serach.png);
        background-size: cover;
    }

    .ipt {
        border: none;
        background: none;
        font-size: .24rem;
    }

    .he_right {
        margin: 0rem .32rem;
    }

    .he_right span {
        margin: 0 auto;
        display: block;
    }

    .ri-logo {
        padding-top: .04rem;
        display: inline-block;
        width: .48rem;
        height: .48rem;
    }

    .ri-logo img {
        width: 100%;
    }

    .ri-text {
        padding-top: .08rem;
        height: .34rem;
        line-height: .34rem;
        color: #fd4848;
        font-size: .24rem;
    }
    /*  轮播图  */

    .home-banner {
        margin-top: .92rem;
        width: 100%;
        height: 3.6rem;
    }

    .home-banner img {
        width: 100%;
        height: 100%;
    }

    .footEnd {
        width: 100%;
        text-align: center;
        font-size: .25rem;
        color: #999999;
        line-height: .7rem;
        margin-bottom: 0;
        overflow: hidden;
    }
</style>