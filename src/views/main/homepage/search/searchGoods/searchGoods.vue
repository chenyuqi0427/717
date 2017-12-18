<template>
    <div class="searchGoods">
        <div class="header">
            <div class="login_back">
                <router-link to='/search'>
                    <span class="getback"></span>
                </router-link>
            </div>
            <div class="login_cen">
                <div id="ipt">
                    <span class="icon"></span>
                    <input type="text" placeholder="请输入您要购买的商品" class="ipt" v-model='searchIpt'>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="containent">
                <p v-if='!searchList'>该商品不存在！</p>
                <div v-else class="box" v-for='(v,i) in searchList' :key='i' @click='toDetailPage(v)'>
                    <img :src="'http://www.lb717.com/'+v.obj_data">
                    <p class="box-text">{{v.goods_name}}</p>
                    <p class="box-price">
                        <span>￥{{v.discount_price}}</span>
                        <span class="shopcarlogo" @click.stop='addshopcar(v)'>
                            <img src="http://www.lb717.com/static/mobile/images/homeImg/homeland3.png">
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                searchIpt: '',
                searchList: []
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
            this.$http.post('/homepage/postsearchlist', {
                val: this.$route.query.data
            })
                .then((data) => {
                    this.searchIpt = this.$route.query.data
                    this.searchList = data.data
                })
        }
    }

</script>
<style scoped>
    .searchGoods {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #eeeeee;
        display: flex;
        flex-direction: column;
    }
    /* 头部 */

    .header {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #fafafb;
        display: flex;
    }

    .login_back {
        padding: 0 .34rem;
        font-size: .34rem;
    }

    .getback {
        display: inline-block;
        width: .36rem;
        height: .36rem;
        vertical-align: middle;
        background-image: url(http://www.lb717.com/static/mobile/images/return.png);
        background-size: cover;
    }

    .login_cen {
        text-align: center;
        flex: 1;
        font-size: .34rem;
    }

    #ipt {
        border-radius: .08rem;
        text-align: left;
        margin-top: .12rem;
        width: 90%;
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
    /*  主体  */

    .main {
        flex: 1;
        width: 100%;
        background: #eeeeee;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .containent {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .main::-webkit-scrollbar {
        width: 5px;
    }

    .main::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ccc;
    }

    .main::-webkit-scrollbar-track {
        background: #eee;
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