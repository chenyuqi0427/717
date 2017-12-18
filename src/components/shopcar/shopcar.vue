<template>
    <!--  购物车商品数据  -->
    <div class="shopcar_comp">
        <div class="comp_left">
            <span :class="data.check" @click='checked(data)'></span>
        </div>
        <div class="comp_center">
            <span class="shop_img">
                <img :src="'http://www.lb717.com/'+data.data.obj_data">
            </span>
        </div>
        <div class="comp_right">
            <p class="comp_ri_text">{{data.data.goods_name}}</p>
            <p>
                <span>x</span><span class="count">{{data.count}}</span>
            </p>
            <p style="color:#fc4141;">
                <span>￥</span>
                <span class="money">{{data.data.discount_price}}</span>
                <p class="countadd">
                    <span @click='reduce(data)'>－</span>
                    <span>{{data.count}}</span>
                    <span @click='add(data)'>＋</span>
                </p>
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['data'],
        data() {
            return {

            }
        },
        methods: {
            // 判断是否全部选中
            ifAllChecked() {
                let flag = false;
                this.$store.state.shopcarlist.forEach((v, i) => {
                    if (v.check === 'check') {
                        flag = true;
                        return
                    }
                })
                if (flag) {
                    // 全部选中取消
                    this.$store.state.check = 'check'
                } else {
                    // 全部选中
                    this.$store.state.check = 'check checked'
                }
            },
            // 多选
            checked(val) {
                if (this.data.check === 'check') {
                    // 选中状态
                    this.data.check = 'check checked'
                    this.$store.commit('publicChecked')
                } else {
                    // 非选中状态
                    this.data.check = 'check'
                    this.$store.commit('publicChecked')
                }

                // 判断是否全部选中
                this.ifAllChecked()
            },
            // 减
            reduce(val) {
                this.data.count--
                // 购物车浮动窗提示总商品数量
                this.$store.commit('shopcarCount')
                // 改变商品数量
                this.$http.post('/shopcar/countChange', {
                    id: val.id,
                    count: val.count
                })

                if (this.data.count <= 0) {
                    this.data.count = 1
                }
                if (this.data.check === 'check checked') {
                    // 单选选中状态
                    this.$store.commit('publicChecked')
                }

            },
            // 加
            add(val) {
                this.data.count++
                // 购物车浮动窗提示总商品数量
                // this.$store.commit('shopcarCount')
                // 改变商品数量
                this.$http.post('/shopcar/countChange', {
                    id: val.id,
                    count: val.count
                })

                if (this.data.check === 'check checked') {
                    // 单选选中状态
                    this.$store.commit('publicChecked')
                }
            }
        }
    }

</script>
<style scoped>
    .shopcar_comp {
        width: 100%;
        height: 2.8rem;
        margin-bottom: .2rem;
        display: flex;
        background: white;
    }
    /*  多选  */

    .check {
        margin: 1rem .24rem;
        display: inline-block;
        width: .48rem;
        height: .48rem;
        border-radius: 50%;
        border: 1px solid #ccc;
    }

    .checked {
        background-image: url(http://www.lb717.com/static/mobile/images/goshop/8.gif);
        background-size: cover;
        border: 1px solid #fff;
    }

    .shop_img {
        margin: .4rem .08rem;
        display: inline-block;
        width: 2rem;
        height: 2rem;
        border-radius: .06rem;
    }

    .shop_img img {
        width: 100%;
        height:100%;
    }

    .comp_right {
        padding: .48rem .12rem 0 0;
        flex: 1;
        position: relative;
    }

    .comp_right p {
        height: .6rem;
        line-height: .6rem;
        font-size: .32rem;
    }

    .comp_right p:nth-child(2) {
        padding: 0 .06rem;
        line-height: 1rem;
    }

    .comp_ri_text {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .money {
        font-size: .36rem;
        font-weight: 600;
    }

    .countadd {
        position: absolute;
        right: .24rem;
        bottom: .46rem;
        width: 2.2rem;
        height: .66rem!important;
        line-height: .66rem!important;
        display: flex;
        text-align: center;
    }

    .countadd span {
        display: inline-block;
        cursor: pointer;
        border: 1px solid #ccc;
    }

    .countadd span:nth-child(1) {
        padding: 0 .14rem;
        border-right: none;
    }

    .countadd span:nth-child(2) {
        flex: 1;
    }

    .countadd span:nth-child(3) {
        padding: 0 .14rem;
        border-left: none;
    }
</style>