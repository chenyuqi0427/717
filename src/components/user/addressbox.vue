<template>
    <div class="addressBox">
        <p>
            <span class="name">{{data.name}}</span>
            <span>{{this.data.tel.substr(0,3) + '****' + this.data.tel.substr(7)}}</span>
        </p>
        <p class="address">
            <span>{{data.address}}</span>
        </p>
        <p>
            <span :class="data.morenAddress" @click='checkedAllDel(idx)'></span>默认地址
            <span class="write">编辑</span>
            <span class="del">删除</span>
        </p>
    </div>
</template>
<script>
    export default {
        props: ['data','idx'],
        methods: {
            checkedAllDel(idx) {
                this.$http.post('/user/changeaddress', {
                    idx: idx
                })
                .then((data) => {
                    this.$store.commit('setpostaddress', data.data)
                })
            }
        }
    }

</script>
<style scoped>
    /*  默认地址按钮  */

    .check {
        vertical-align: middle;
        margin-right: .24rem;
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

    .addressBox {
        margin-bottom: .24rem;
    }

    .addressBox p:nth-child(1) {
        width: 100%;
        height: 1rem;
        padding: 0 .28rem;
        line-height: 1rem;
        background: white;
        font-size: .34rem;
        color: #666;
    }

    .address {
        width: 100%;
        height: 1rem;
        padding: 0 .28rem;
        line-height: .4rem;
        background: white;
    }

    .address span {
        display: inline-block;
        width: 90%;
        height: 100%;
        font-size: .28rem;
        color: #666;
        border-bottom: 1px solid #ccc;
    }

    .addressBox p:nth-child(3) {
        padding: 0 .28rem;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: .34rem;
        background: white;
    }
    /*  编辑  */

    .write {
        position: absolute;
        right: 1.2rem;
    }
    /*  删除  */

    .del {
        position: absolute;
        right: .24rem;
    }
</style>