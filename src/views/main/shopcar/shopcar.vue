<template>
    <div class="shopcar">
        <p class="shopcar_tit">购物车
            <span id='editor' :class="{btnnone: editorBtn}" @click='editor'>编辑</span>
            <span id='complete' :class="{btnnone: completeBtn}" @click='complete'>完成</span>
        </p>
        <!--  购物车商品数据  -->
        <!--  结算  -->
        <div class="shopcarMain">
            <shopcar v-for='(v,i) in this.$store.state.shopcarlist' :key='i' :data='v'></shopcar>
        </div>
        <!--  占位标签  -->
        <div class="placeholder"></div>
        <!--  编辑状态栏  -->
        <div id="editor_floatW" :class="{btnnone: completeBtn}">
            <div class="p_lef">
                <span :class="this.$store.state.check" @click='checkedAllDel' id="allcheck"></span>全选
            </div>
            <div class="p_cen"></div>
            <div class="p_rig">
                <span class="deleting" @click='deleting'>删除</span>
            </div>
        </div>
        <!--  完成状态栏  -->
        <div id="complete_floatW" :class="{btnnone: editorBtn}">
            <div class="p_lef">
                <span :class="this.$store.state.check" @click='checkedAllclearing' id="allcheck"></span>全选
            </div>
            <div class="p_cen">
                <span>合计:</span>
                <span style="color:#fc4141;">￥</span>
                <span class="allPrice">{{this.$store.state.sumN.toFixed(2)}}</span>
            </div>
            <div class="p_rig">
                <span class="clearing" @click='clearing'>结算</span>
            </div>
        </div>
    </div>
</template>
<script>
    // 提示信息
    import { Toast } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    import shopcar from '../../../components/shopcar/shopcar'

    export default {
        data() {
            return {
                editorBtn: false,
                completeBtn: true
            }
        },
        methods: {
            // 编辑状态全选
            checkedAllclearing() {
                if (this.$store.state.check === 'check') {
                    // 所以类名选中
                    this.$store.state.check = 'check checked'

                    this.$store.state.shopcarlist.forEach((v, i) => {
                        v.check = 'check checked'
                    })
                    this.$store.commit('publicChecked')

                } else {
                    // 所以类名取消
                    this.$store.state.check = 'check'

                    this.$store.state.shopcarlist.forEach((v, i) => {
                        v.check = 'check'
                    })

                    this.$store.state.sumN = 0;
                }
            },
            // 完成状态全选
            checkedAllDel() {
                if (this.$store.state.check === 'check') {
                    // 所以类名选中
                    this.$store.state.check = 'check checked'

                    this.$store.state.shopcarlist.forEach((v, i) => {
                        v.check = 'check checked'
                    })
                    this.$store.commit('publicChecked')

                } else {
                    // 所以类名取消
                    this.$store.state.check = 'check'

                    this.$store.state.shopcarlist.forEach((v, i) => {
                        v.check = 'check'
                    })

                    this.$store.state.sumN = 0;
                }
            },
            // 编辑
            editor() {
                if (!this.editorBtn) {
                    this.editorBtn = true
                    this.completeBtn = false
                }
                // 取消所以选中类名
                this.$store.state.shopcarlist.forEach((v, i) => {
                    v.check = 'check'
                })
                // 全选选中类名清除
                this.$store.state.check = 'check'
            },
            // 完成
            complete() {
                if (!this.completeBtn) {
                    this.completeBtn = true
                    this.editorBtn = false
                }
                // 取消所以选中类名
                this.$store.state.shopcarlist.forEach((v, i) => {
                    v.check = 'check'
                })
                // 合计价格重置
                this.$store.state.sumN = 0
                // 全选选中类名清除
                this.$store.state.check = 'check'
            },
            // 结算
            clearing() {
                this.$http_token.post('/shopcar/clearing')
                    .then((data) => {
                        if (!data.config.headers.Authorization) {
                            // 不存在
                            Toast('登录过期！')
                            setTimeout(() => {
                                this.$router.push({ path: '/loginUser', query: { from: this.$route.path } })
                            }, 1500)
                            return;
                        }
                        let flag = false;
                        this.$store.state.shopcarlist.forEach((v, i) => {
                            if (v.check == 'check checked') {
                                flag = true;
                                return;
                            }
                        })

                        if (!flag) {
                            let error = Toast('您还没有选择商品！');

                            setInterval(() => {
                                error.close()
                            }, 1000)
                        } else {
                            alert("结算:本次购物消费" + this.$store.state.sumN.toFixed(2) + "元")
                        }
                    })
            },
            // 删除
            deleting() {
                MessageBox.confirm('是否删除该商品?')
                    .then(action => {
                        this.$store.state.shopcarlist.forEach((v, i) => {
                            if (v.check == 'check checked') {
                                this.$http.post('/shopcar/delShopCar', {
                                    id: v.data.goods_id
                                })
                                    .then((data) => {
                                        // 更新Vuex购物车数据总条数
                                        this.$store.commit('shopcarCount', data.data.merchandise.length)
                                        // 全选类名取消
                                        this.$store.state.check = 'check'
                                        // 更新Vuex数据
                                        this.$store.commit('setShopCarList', data.data.merchandise)
                                        // 提示信息
                                        let delsuccess = Toast('删除成功！');
                                        setTimeout(() => {
                                            delsuccess.close();
                                        }, 1000);
                                    })
                            }
                        })
                    })
                    .catch(error => {

                    })


            }
        },
        components: {
            shopcar
        },
        created() {
            this.$http.post('/shopcar/getshopcardata')
                .then((data) => {
                    // 请求购物车购物车更新Vuex
                    this.$store.commit('setShopCarList', data.data.merchandise)
                    // 更新Vuex购物车数据总条数
                    this.$store.commit('shopcarCount', data.data.merchandise.length)
                })
        }
    }

</script>
<style scoped>
    .shopcar {
        width: 100%;
        height: 100%;
        background: #eeeeee;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }

    .shopcarMain {
        flex: 1;
        overflow-y: scroll;
    }
    /*  滚动条  */

    .shopcarMain::-webkit-scrollbar {
        width: 5px;
    }

    .shopcarMain::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ccc;
    }

    .shopcarMain::-webkit-scrollbar-track {
        background: #eee;
    }

    .shopcar_tit {
        width: 100%;
        height: .94rem;
        line-height: .94rem;
        position: relative;
        background: #fafafb;
        border-bottom: 1px solid #e5e5e5;
        text-align: center;
        font-size: .38rem;
    }
    /*  编辑  */

    #editor {
        position: absolute;
        right: .28rem;
        font-size: .3rem;
    }
    /*  完成  */

    #complete {
        position: absolute;
        right: .28rem;
        font-size: .3rem;
    }
    /*  隐藏  */

    .btnnone {
        display: none!important;
    }

    .shopcar::-webkit-scrollbar {
        width: 5px;
    }

    .shopcar::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ccc;
    }

    .shopcar::-webkit-scrollbar-track {
        background: #eee;
    }
    /*  结算  */
    /*  占位标签  */

    .placeholder {
        width: 100%;
        height: .96rem;
    }
    /*  编辑状态栏  */

    #editor_floatW {
        position: fixed;
        bottom: .96rem;
        width: 100%;
        height: .96rem;
        line-height: .96rem;
        font-size: .3rem;
        display: flex;
        background: white;
        border-top: 1px solid #e5e5e5;
    }
    /*  完成状态栏  */

    #complete_floatW {
        position: fixed;
        bottom: .96rem;
        width: 100%;
        height: .96rem;
        line-height: .96rem;
        font-size: .3rem;
        display: flex;
        background: white;
        border-top: 1px solid #e5e5e5;
    }

    .p_lef {
        /* background: red; */
        padding-left: 1rem;
        text-align: center;
        position: relative;
    }

    #allcheck {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: .24rem;
        margin: auto;
    }

    .p_cen {
        padding: 0 .2rem;
        flex: 1;
        text-align: right;
    }

    .allPrice {
        color: #fc4141;
        font-size: .44rem;
        font-weight: 600;
    }

    .p_rig {
        text-align: center;
    }

    .clearing {
        padding: 0 .6rem;
        text-align: left;
        display: inline-block;
        width: 90%;
        height: 100%;
        background: #fc4141;
        color: white;
        font-size: .32rem;
    }

    .deleting {
        padding: 0 .6rem;
        text-align: left;
        display: inline-block;
        width: 90%;
        height: 100%;
        background: #fc4141;
        color: white;
        font-size: .32rem;
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
</style>