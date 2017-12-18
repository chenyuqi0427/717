<template>
    <div class="detailPage">
        <!--  头部  -->
        <div class="header">
            <div class="detailPage_back">
                <router-link to='/'>
                    <span class="getback"></span> 返回
                </router-link>
            </div>
            <div class="detailPage_cen">
                <span>商品</span>
                <span>详情</span>
            </div>
            <div class="detailPage_btn">
                <a href="/#/registerUser" class="home"></a>
            </div>
        </div>
        <div class="content">
            <!--  swiper  -->
            <mt-swipe :auto="4000" class="detail-banner">
                <mt-swipe-item v-for='(v,i) in detaillist' :key='i'>
                    <img :src="v">
                </mt-swipe-item>
            </mt-swipe>
            <!--  main内容  -->
            <div class="detailtit">
                <div class="tit_top">
                    <p>{{nowPageList.goods_name}}</p>
                </div>
                <div class="tit_bot">
                    <div class="tit_bot_left">
                        <p style="color: #333;">
                            <span>￥</span>
                            <span>{{nowPageList.discount_price}}</span>
                            <span style="color:#999999;">￥</span>
                            <span style="color:#999999;text-decoration: line-through;">{{nowPageList.discount_price}}</span>
                        </p>
                        <p style="color: #666;">
                            <span>(运费:￥</span><span>7.00</span><span>)</span>
                        </p>
                    </div>
                    <div class="tit_bot_right">
                        <button class="sourceCheck">溯源查询</button>
                    </div>
                </div>
            </div>
            <!--  店铺信息  -->
            <div class="shop">
                <div class="touxiang"><span><img src="http://www.lb717.com/static/mobile/images/order/1.png"></span></div>
                <div class="address">
                    <p>{{nowPageList.store_name}}</p>
                    <p style="color:#666666;">店主:<span>NY{{nowPageList.store_id}}</span></p>
                </div>
                <div class="setInShop">
                    <span>进入店铺</span>
                </div>
            </div>
            <!--  底部scroll广告  -->
            <div class="wrapper">
                <div class="contents">
                    <div class="box" v-for='(v,i) in footList' :key='i'>
                        <div class="box_img"><img :src="v.imgsrc"></div>
                        <p class="box_topic">{{v.txt}}</p>
                        <p style="color: #fc4141;">
                            <span>￥</span>
                            <span class="price" style="font-size:.32rem;font-weight:600;">{{v.price}}</span>
                        </p>
                    </div>
                </div>
                <div class="head_logo">
                    <div></div>
                    <div>
                        <span class="lo lef"></span>
                        <span class="lo rig"></span>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="first">
                <div>
                    <p><span class='logoK'></span></p>
                    <p>客服</p>
                </div>
                <div>
                    <p>
                        <span class='logoG'></span>
                        <span class="float_count">{{this.$store.state.acount}}</span>
                    </p>
                    <p>购物车</p>
                </div>
            </div>
            <div>
                <button class="addshopcar">加入购物车</button>
            </div>
            <div>
                <button class="buy">立即购买</button>
            </div>
        </div>
    </div>
</template>
<script>
    import BScroll from 'better-scroll'

    export default {
        data() {
            return {
                // 轮播图
                detaillist: [],
                // 底部广告
                footList: [
                    {
                        imgsrc: 'http://www.lb717.com//Uploads/images/old/data/20150115/goodsimage/huge/c58d293f916563f51cd700dc94261167aab26f0c.jpg',
                        txt: '浔阳楼 至尊小饼 至尊桂花味口味  180g 美味糕点',
                        price: '18.00'
                    },
                    {
                        imgsrc: 'http://www.lb717.com//Uploads/images/old/data/20150107/goodsimage/huge/c14c75915c6b30588ab0bd97a5e1cd2c0f3c44ab.jpg',
                        txt: '关东大嫂 姬松茸 110g 味醇鲜美，使用价值颇高 包邮',
                        price: '69.00'
                    },
                    {
                        imgsrc: 'http://www.lb717.com//Uploads/images/old/data/20150107/goodsimage/huge/557b2be64e48e342f76764fbda101919020ea2f7.jpg',
                        txt: '麦德好 营养麦片巧克力 128g',
                        price: '7.90'
                    },
                    {
                        imgsrc: 'http://www.lb717.com//Uploads/images/admin/depositstoregoodsupload/release/0/2017-03/huge/7998063723.jpg',
                        txt: '安徽特产 安徽特产 鹰鹭纯正黑芝麻油礼盒（1*2）  2000g',
                        price: '50.00'
                    },
                    {
                        imgsrc: 'http://www.lb717.com//Uploads/images/home/storegoodsupload/release/844/2015-12/huge/3373253078.jpg',
                        txt: '大瀛 微辣酱鸭舌  60g/包',
                        price: '15.90'
                    }
                ],
                // 当前页数据
                nowPageList: {}
            }
        },
        mounted() {
            const wrapper = document.querySelector('.wrapper')
            const scroll = new BScroll(wrapper, {
                scrollX: true
            })
        },
        created() {
            this.nowPageList = JSON.parse(this.$router.currentRoute.query.data);
            for (let i = 0; i < 5; i++) {
                this.detaillist.push('http://www.lb717.com/' + this.nowPageList.obj_data)
            }
        }
    }

</script>
<style scoped>
    .detailPage {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: pink;
        display: flex;
        flex-direction: column;
    }
    /*  头部  */

    .header {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #fafafb;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
    }

    .detailPage_back {
        font-size: .32rem;
        padding: 0 .36rem 0 .2rem;
    }

    .getback {
        display: inline-block;
        width: .58rem;
        height: .58rem;
        vertical-align: middle;
        background-image: url(http://www.lb717.com/static/mobile/images/return.png);
        background-size: 100% 100%;
    }

    .detailPage_cen {
        text-align: center;
        flex: 1;
        font-size: .34rem;
        color: #666;
    }

    .detailPage_cen span {
        margin: 0 .2rem;
    }

    .detailPage_btn a {
        display: inline-block;
        margin: 0 .46rem;
        width: .64rem;
        height: .64rem;
        font-size: .3rem;
        border: 1px solid white;
        border-radius: 50%;
        color: red;
        vertical-align: middle;
        background-image: url(http://www.lb717.com/static/mobile/images/index.png);
        background-size: 100% 100%;
    }
    /*  主体  */

    .content {
        flex: 1;
        overflow-x: hidden;
        overflow-y: scroll;
        background: #e5e5e5;
    }
    /*  滚动条  */

    .content::-webkit-scrollbar {
        width: 2px;
    }

    .content::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #614a4a;
    }

    .content::-webkit-scrollbar-track {
        background: #eee;
    }
    /*  swiper  */

    .detail-banner {
        width: 100%;
        height: 7.6rem;
    }

    .detail-banner img {
        width: 100%;
        height: 100%;
    }
    /*  main  */

    .detailtit {
        width: 100%;
        height: 2.2rem;
        display: flex;
        flex-direction: column;
        background: white;
    }
    /*  上下  */

    .tit_top {
        padding: .18rem .4rem;
        text-align: left;
        font-size: .28rem;
    }

    .tit_bot {
        flex: 1;
        display: flex;
    }
    /*  左右  */

    .tit_bot_left {
        padding-left: .42rem;
        flex: 1;
        font-size: .24rem;
        display: flex;
        flex-direction: column;
    }

    .tit_bot_left p {
        line-height: .64rem;
        flex: 1;
    }
    /*  上下  */
    /*  按钮  */

    .sourceCheck {
        margin: .22rem .2rem;
        width: 2rem;
        line-height: .82rem;
        text-align: center;
        background: #4f99f2;
        border-radius: 5px;
        color: #fff;
        font-size: .28rem;
        border: none;
    }
    /*  进入店铺  */

    .shop {
        padding-top: .6rem;
        width: 100%;
        height: 1rem;
        display: flex;
        background: white;
    }

    .touxiang span {
        margin: .1rem .1rem .1rem .32rem;
        display: inline-block;
        width: .8rem;
        height: .8rem;
    }

    .touxiang img {
        width: 100%;
        height: 100%;
    }

    .address {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .address p {
        line-height: .48rem;
        flex: 1;
    }

    .setInShop span {
        margin: .1rem .2rem;
        display: inline-block;
        width: 1.9rem;
        line-height: .7rem;
        text-align: center;
        border: 1px solid #666;
        border-radius: 2px;
        font-size: .28rem;
        color: #333;
    }
    /*  底部scroll广告  */

    .wrapper {
        margin-top: .1rem;
        width: 100%;
        height: 3.52rem;
        overflow-x: hidden;
        position: relative;
        background: white;
    }
    /*  顶部图标  */

    .head_logo {
        padding: .08rem 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: .34rem;
        display: flex;
        background: white;
    }

    .head_logo div {
        flex: 1;
        position: relative;
    }

    .lo {
        display: inline-block;
        width: .34rem;
        height: .34rem;
    }

    .lef {
        position: absolute;
        left: 0;
        background-image: url(http://www.lb717.com/static/mobile/images/myimg/my16.png);
        background-size: 100% 100%;
    }

    .rig {
        position: absolute;
        right: 0;
        background-image: url(http://www.lb717.com/static/mobile/images/myimg/my17.png);
        background-size: 100% 100%;
    }
    /*  内容详情  */

    .contents {
        position: absolute;
        top: .5rem;
        height: 3rem;
        display: flex;
    }

    .box {
        flex-shrink: 0;
        width: 2rem;
        margin: 0 .2rem;
    }

    .box_img {
        width: 100%;
        height: 70%;
    }

    .box_img img {
        width: 100%;
        height: 100%;
    }

    .box_topic {
        padding: .06rem 0;
        margin: 0 auto;
        width: 94%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }
    /*  脚部  */

    .footer {
        width: 100%;
        height: 1.2rem;
        background: white;
        border-top: 1px solid #e5e5e5;
        display: flex;
    }

    .footer>div {
        flex: 1;
    }

    .first {
        display: flex;
    }

    .first>div {
        flex: 1;
        text-align: center;
    }

    .first>div p:nth-child(1) {
        position: relative;
        padding-top: .2rem;
    }

    .first>div p:nth-child(2) {
        padding-top: .04rem;
    }
    /*  商品总数量-浮动显示  */

    .float_count {
        position: absolute;
        top: 0rem;
        right: .2rem;
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background: red;
        color: white;
    }


    .logoK {
        display: inline-block;
        width: .48rem;
        height: .46rem;
        background-image: url(http://www.lb717.com/static/mobile/images/food/05.png);
        background-size: 100% 100%;
    }

    .logoG {
        display: inline-block;
        width: .48rem;
        height: .46rem;
        background-image: url(http://www.lb717.com/static/mobile/images/footer/3.png);
        background-size: 100% 100%;
    }
    /*  添加购物车  */

    .addshopcar {
        background: #fe8282;
        width: 100%;
        color: #fff;
        float: right;
        line-height: 1.2rem;
        text-align: center;
        font-size: .34rem;
        border: 0;
    }
    /*  立即购买  */

    .buy {
        background: #fe8282;
        width: 100%;
        background: #fb4142;
        color: #fff;
        float: right;
        line-height: 1.2rem;
        text-align: center;
        font-size: .34rem;
        border: 0;
    }
</style>