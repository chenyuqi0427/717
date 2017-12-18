<template>
    <div class="hometownTaste">
        <div v-for='(v,i) in datalist' :key='i'>
            <!--  标题  -->
            <div class="topic">
                <p class="topic-line"></p>
                <p class="topic-main">
                    <span class="topic-img">
                        <img src="/src/static/img/todayimg.png">
                    </span>
                    <span class="topic-text">{{v.topic}}</span>
                </p>
                <span class="more">更多<i class="iconfont icon-angle-right"></i></span>
            </div>
            <!--  main  -->
            <div class="main">
                <div class="box" v-for='(val, idx) in v.topicList' :key='idx' @click='toDetailPage(val)'>
                    <img :src="'http://www.lb717.com/'+val.obj_data">
                    <p class="box-text">{{val.goods_name}}</p>
                    <p class="box-price">
                        <span>￥{{val.discount_price}}</span>
                        <span class="shopcarlogo" @click.stop='addshopcar(val)'>
                            <img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png">
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    // 提示信息
    import { Toast } from 'mint-ui';
    import { getCookie } from '../../utils/utils'
    export default {
        props: ['data'],
        data() {
            return {
                channelId: 2,
                datalist: []
            }
        },
        methods: {
            // 去往详情页
            toDetailPage(val) {
                this.$router.push({ name: 'detailPage', query: { data: JSON.stringify(val) } })
            },
            // 添加购物车
            addshopcar(val) {
                if (getCookie('token')) {
                    this.$http.post('/homepage/addshopcar', {
                        data: val,
                        id: val.goods_id,
                        check: 'check',
                        count: 1,
                    })
                        .then((data) => {
                            // 更新Vuex购物车数据总条数
                            this.$store.commit('shopcarCount', data.data.merchandise.length)

                        })

                    let addsuccess = Toast('添加购物车成功');
                    setTimeout(() => {
                        addsuccess.close();
                    }, 1000);
                } else {
                    this.$router.push({ path: '/loginUser', query: { from: this.$route.path } })
                }
            }
        },
        created() {
            this.datalist = this.data
        }
    }

</script>
<style scoped>
    .hometownTaste {
        width: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    /*  标题  */

    .topic {
        margin: 0rem 0 .12rem 0;
        padding: .46rem .24rem;
        width: 100%;
        color: #ff6d00;
        background: white;
        position: relative;
    }

    .topic-line {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 60%;
        height: .01rem;
        border-bottom: 1px solid #ff6d00;
    }

    .topic-main {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 26%;
        height: 60%;
        background: white;
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

    .topic-text {
        font-size: .34rem;
        color: #ff6d00;
    }

    .more {
        position: absolute;
        top: .24rem;
        right: 7%;
        color: #666;
    }

    .more i {
        vertical-align: middle;
    }

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