<template>
    <div class="user">
        <!--  头部  -->
        <div class="header">
            <p class="hed_tit">
                <span class="set"></span>
                <span>我的717商城</span>
            </p>
            <div class="touImg">
                <span class="touxiangImg"></span>
                <span class="name">{{this.$store.state.name}}</span>
            </div>
        </div>
        <!--  我的店铺  -->
        <div class="myshop">
            <span class="myshop_logo"></span>
            <span class="myshop_txt">我的店铺</span>
            <span class="myshop_left"></span>
        </div>
        <!--  选项菜单  -->
        <div class="options">
            <div class="options_item" v-for='(v,i) in optionsList' :key='i'>
                <p>
                    <span class="it_logo">
                        <img :src="v.isrc">
                    </span>
                </p>
                <p>{{v.txt}}</p>
            </div>
        </div>
        <!--  tab  -->
        <ul class="tab_fn">
            <li v-for='(v,i) in tabList' :key='i'>
                <router-link :to='v.routerLink'>
                    <span class="tab_logo"><img :src="v.isrc"></span>
                    <span>{{v.txt}}</span>
                    <span class='tab_left'></span>
                </router-link>
            </li>
        </ul>
        <!--  热门推荐  -->
        <div class="hotSpot">
            <div class="head_logo">
                <div></div>
                <div>
                    <span class="lo lef"></span>
                    <span>热门推荐</span>
                    <span class="lo rig"></span>
                </div>
                <div></div>
            </div>
            <!--  推荐content  -->
            <div class="main">
                <div class="box" v-for='(v,i) in contentList' :key='i'>
                    <img :src="v.isrc">
                    <p class="box-text">{{v.txt}}</p>
                    <p class="box-price">
                        <span>￥{{v.price}}</span>
                        <span class="shopcarlogo" @click='addshopcar(val)'>
                            <img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png">
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import jwt from 'jsonwebtoken'
    import { getCookie, delCookie } from '../../../utils/utils'
    export default {
        data() {
            return {
                optionsList: [
                    {
                        isrc: 'http://www.lb717.com/static/mobile/images/myimg/my4.png',
                        txt: '待付款'
                    },
                    {
                        isrc: 'http://www.lb717.com/static/mobile/images/myimg/my5.png',
                        txt: '待发货'
                    },
                    {
                        isrc: 'http://www.lb717.com/static/mobile/images/myimg/my6.png',
                        txt: '待收货'
                    },
                    {
                        isrc: 'http://www.lb717.com/static/mobile/images/myimg/my7.png',
                        txt: '待售后'
                    },
                    {
                        isrc: 'http://www.lb717.com/static/mobile/images/myimg/my8.png',
                        txt: '我的订单'
                    }
                ],
                tabList: [
                    {
                        isrc: 'http://www.lb717.com/static/mobile/images/myimg/my10.png',
                        txt: '账户余额',
                        routerLink: '/user/account'
                    },
                    {
                        isrc: 'http://www.lb717.com/static/mobile/images/myimg/my11.png',
                        txt: '地址管理',
                        routerLink: '/user/harvestAddress'
                    },
                    {
                        isrc: 'http://www.lb717.com/static/mobile/images/myimg/my12.png',
                        txt: '我的客服',
                        routerLink: '/user/service'
                    }
                ],
                contentList: [
                    {
                        isrc: 'http://www.lb717.com//Uploads/images/home/storegoodsupload/release/1418/2017-03/huge/6529765407.jpg',
                        txt: '哈肉联 哈肉联香惠肠90g×5袋 哈尔滨红肠 东北特产 哈红肠无肥肉丁 熏香肠  90g×5袋',
                        price: '37.50'
                    },
                    {
                        isrc: 'http://www.lb717.com//Uploads/images/admin/depositstoregoodsupload/release/0/2017-04/huge/3123730195.jpg',
                        txt: '诗乡兔四川特产休闲兔肉零食50g多种口味麻辣小吃酱香大枣核桃味  50g',
                        price: '12.50'
                    },
                    {
                        isrc: 'https://img.alicdn.com/bao/uploaded/i3/688956388/TB2LXt1XHaI.eBjy1XdXXcoqXXa_!!688956388.jpg_q50.jpg',
                        txt: '[为你推荐]韩国简约字母帆布袋男女文艺单肩帆布包环保袋文艺生帆布袋购物袋',
                        price: '108.00'
                    },
                    {
                        isrc: 'https://img.alicdn.com/bao/uploaded/i4/TB1gB5eOVXXXXcyXFXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg',
                        txt: '[为你推荐]洗漱杯牙刷架套装创意家庭情侣居家牙刷架漱口杯架牙具座配两杯',
                        price: '23.50'
                    },
                    {
                        isrc: 'https://img.alicdn.com/bao/uploaded/i3/TB1dlYZJpXXXXXBXFXXXXXXXXXX_!!0-item_pic.jpg_q50.jpg',
                        txt: '[为你推荐]六支瓶装红酒木箱红酒6只木盒葡萄酒箱高档木质包装盒礼盒定制',
                        price: '49.00'
                    },
                    {
                        isrc: 'https://img.alicdn.com/bao/uploaded/i2/878996056/TB2itaEbbFlpuFjy0FgXXbRBVXa_!!878996056.jpg_q50.jpg',
                        txt: '[为你推荐]台州特产温岭手工年糕 农家水磨手工白年糕 散装5斤江浙沪皖包邮',
                        price: '36.50'
                    }
                ]
            }
        },
        created() {
            const token = getCookie('token');
            // 解token
            jwt.verify(token, '1508B', (errs, decoded) => {
                if (errs) {
                    // 登录超时
                    delCookie('token');
                    this.$router.push({ path: '/loginUser', query: { from: this.$route.path } })
                } else {
                    this.$store.commit('setUsername', decoded.user)
                }
            })
        }
    }

</script>
<style scoped>
    .user {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
        background: #eeeeee;
    }

    .user::-webkit-scrollbar {
        width: 5px;
    }

    .user::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ccc;
    }

    .user::-webkit-scrollbar-track {
        background: #eee;
    }

    .header {
        width: 100%;
        height: 3.4rem;
        background-image: url(http://www.lb717.com/static/mobile/images/my/phpot.png);
        background-size: 100% 100%;
        text-align: center;
        overflow: hidden;
        position: relative;
    }

    .hed_tit {
        text-align: center;
        font-size: .36rem;
        color: white;
    }

    .set {
        position: absolute;
        top: .24rem;
        left: .36rem;
        display: inline-block;
        width: .42rem;
        height: .42rem;
        background-image: url(http://www.lb717.com/static/mobile/images/myimg/my1.png);
        background-size: 100% 100%;
    }

    .touImg {
        display: inline-block;
        text-align: center;
    }

    .touxiangImg {
        margin: 0 auto;
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-image: url(http://www.lb717.com/static/mobile/images/myimg/my3.png);
        background-size: 100%;
    }

    .name {
        color: white;
        font-size: .32rem;
    }
    /*  我的店铺  */

    .myshop {
        width: 100%;
        height: 1.4rem;
        line-height: 1.4rem;
        background: white;
        border-bottom: 1px solid #ccc;
        position: relative;
    }

    .myshop_logo {
        margin: 0 .2rem 0 .4rem;
        display: inline-block;
        width: .64rem;
        height: .58rem;
        background-image: url(http://www.lb717.com/static/mobile/images/myimg/my9.png);
        background-size: 100% 100%;
        vertical-align: middle;
    }

    .myshop_txt {
        color: red;
        font-size: .34rem;
    }

    .myshop_left i {
        color: red;
    }

    .myshop_left {
        position: absolute;
        top: .52rem;
        right: .28rem;
        display: inline-block;
        width: .18rem;
        height: .26rem;
        background-image: url(http://www.lb717.com/static/mobile/images/myimg/my14.png);
        background-size: 100% 100%;
    }
    /*  选项菜单  */

    .options {
        width: 100%;
        height: 1.4rem;
        background: white;
        display: flex;
    }

    .options>div {
        text-align: center;
        flex: 1;
    }

    .options div:last-child {
        border-left: 1px solid #ccc;
    }

    .options_item p:nth-child(1) {
        padding-top: .26rem;
    }

    .options_item p:nth-child(2) {
        padding-top: .1rem;
    }

    .it_logo {
        display: inline-block;
        width: .44rem;
        height: .44rem;
    }

    .it_logo img {
        width: 100%;
        height: 100%;
    }
    /*  tab功能  */

    .tab_fn {
        margin: .24rem 0;
        width: 100%;
        background: white;
    }

    .tab_fn li {
        padding: .3rem 0;
        font-size: .32rem;
        color: #666;
        position: relative;
    }

    .tab_logo {
        margin: 0 .06rem 0 .28rem;
        display: inline-block;
        width: .4rem;
        height: .4rem;
        vertical-align: middle;
    }

    .tab_logo img {
        width: 100%;
        height: 100%;
    }

    .tab_left {
        position: absolute;
        top: .42rem;
        right: .28rem;
        display: inline-block;
        width: .18rem;
        height: .26rem;
        background-image: url(http://www.lb717.com/static/mobile/images/myimg/my15.png);
        background-size: 100% 100%;
    }
    /*  热门推荐  */

    .hotSpor {
        width: 100%;
        background: red;
    }
    /*  顶部图标  */

    .head_logo {
        padding: .08rem 0;
        width: 100%;
        height: .34rem;
        display: flex;
        background: white;
    }

    .head_logo div {
        flex: 1;
        position: relative;
        color: #666;
        text-align: center;
        font-size: .28rem;
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
    /*  推荐内容  */

    .main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .box {
        margin-bottom: .1rem;
        width: 49.5%;
        background: white;
    }

    .box img {
        width: 100%;
        height: 70%;
    }

    .box-text {
        height: .78rem;
        padding: 0 .08rem;
        font-size: .24rem;
        line-height: .38rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .box-price {
        padding: .1rem .1rem;
        position: relative;
        font-size: .34rem;
        color: #fc4141;
        font-weight: 600;
    }

    .shopcarlogo {
        position: absolute;
        top: -.05rem;
        right: .1rem;
        width: .6rem;
        height: .6rem;
    }

    .shopcarlogo img {
        width: 100%;
        height: 100%;
    }
</style>