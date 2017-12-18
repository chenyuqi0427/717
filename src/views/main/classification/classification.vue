<template>
    <div class="classification">
        <!--  头部  -->
        <div class="header">
            <div class="he_center">
                <router-link to='/search'>
                    <div id="ipt">
                        <span class="icon"></span>
                        <input type="text" placeholder="请输入您要购买的商品" class="ipt">
                    </div>
                </router-link>
            </div>
        </div>
        <div class="classificationMain">
            <div class="aside">
                <router-link :to="{
                    path: '/classification/asideContent'+v.cate_id,
                    query: {
                        id: v.cate_id
                    }
                }" v-for='(v,i) in asideList' :key='i'>
                    <div :class='{bg: ifbg}' ref='nowDiv'>{{v.cate_name}}</div>
                </router-link>
            </div>
            <div class="asideMain">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                asideList: [],
                ifbg: false
            }
        },
        methods: {
            
        },
        created() {
            this.$http.post('/mall/category/topCategory')
                .then((data) => {
                    this.asideList = JSON.parse(data.data.data).data
                })
        }
    }

</script>
<style scoped>
    .classification {
        width: 100%;
        height: 100%;
        background: white;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    /*  头部  */

    .header {
        width: 100%;
        height: 1rem;
        position: relative;
        background: white;
    }


    .he_center {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 80%;
        height: 70%;
        text-align: center;
        flex: 1;
    }

    #ipt {
        border-radius: .4rem;
        text-align: center;
        width: 100%;
        height: 100%;
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
    /*  main  */

    .classificationMain {
        flex: 1;
        border-top: 1px solid #ccc;
        overflow: hidden;
        display: flex;
    }
    /*  侧边栏  */

    .aside {
        width: 30%;
        height: 100%;
        background: #f0eced;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .aside a {
        width: 100%;
        height: .9rem;
        line-height: .9rem;
        text-align: center;
        font-size: .3rem;
    }

    .bg {
        color: #fc4141;
        background: #fff;
        border-left: 2px solid #fc4141;
    }

    .router-link-active{
        color: #fc4141;
        background: #fff;
        border-left: 2px solid #fc4141;
    }

    .asideMain {
        flex: 1;
    }
</style>