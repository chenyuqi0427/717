<template>
    <div class="footer">

        <router-link :to='v.routeLink' v-for='(v,i) in footerlist' :key='i'>
            <p v-if='v.txt'><span class="icon"><img :src="v.icon"></span></p>
            <p v-else class="community"><span class="icon"><img :src="v.icon"></span></p>
            <p v-if='v.txt'>{{v.txt}}</p>
        </router-link>
        <span class="float_count">{{this.$store.state.acount}}</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                footerlist: [
                    {
                        icon: 'http://www.lb717.com/static/mobile/images/footer/1.png',
                        txt: '首页',
                        routeLink: '/homepage'
                    },
                    {
                        icon: 'http://www.lb717.com/static/mobile/images/footer/2.png',
                        txt: '分类',
                        routeLink: '/classification'
                    },
                    {
                        icon: 'http://www.lb717.com/static/mobile/images/footer/inter.png',
                        routeLink: '/socialization'
                    },
                    {
                        icon: 'http://www.lb717.com/static/mobile/images/footer/3.png',
                        txt: '购物车',
                        routeLink: '/shopcar'
                    },
                    {
                        icon: 'http://www.lb717.com/static/mobile/images/footer/4.png',
                        txt: '我的',
                        routeLink: '/user'
                    }
                ]
            }
        }
    }

</script>
<style scoped>
    .footer {
        width: 100%;
        display: flex;
        text-align: center;
        position: relative;
    }

    .footer a {
        flex: 1;
    }

    .icon {
        display: inline-block;
        width: .44rem;
        height: .44rem;
    }

    .icon img {
        width: 100%;
        height: 100%;
    }

    .footer p:nth-child(1) {
        margin-top: .1rem;
    }

    .footer p:nth-child(2) {
        margin-top: .04rem;
    }
    /*  社区  */

    .community {
        margin-top: .04rem!important;
        height: 100%;
    }

    .community span {
        width: .9rem;
        height: .9rem;
    }
    /*  商品总数量-浮动显示  */

    .float_count {
        position: absolute;
        top: 0rem;
        right: 1.82rem;
        width: .3rem;
        height: .3rem;
        line-height: .3rem;
        font-size: .16rem;
        border-radius: 50%;
        background: red;
        color: white;
    }
</style>