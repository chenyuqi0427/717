<template>
    <div class="harvestAddress">
        <!--  头部  -->
        <div class="header">
            <div class="login_back">
                <router-link to='/user'>
                    <span class="getback"></span>
                </router-link>
            </div>
            <div class="login_cen">
                <span @click='aaa'>收货地址</span>
            </div>
        </div>
        <address-box v-for='(v,i) in this.$store.state.postaddress' :key='i' :data='v' :idx='i'></address-box>
        <router-link to='/user/harvestAddress/consignee'><button class="add">新增地址</button></router-link>
        <router-view></router-view>
    </div>
</template>
<script>
    import addressBox from '../../../../components/user/addressbox'

    export default {
        data() {
            return {

            }
        },
        methods: {
            aaa(){
                location.reload(true)
            }
        },
        components: {
            addressBox
        },
        created() {
            this.$http.post('/user/postaddress')
            .then((data) => {
                this.$store.commit('setpostaddress', data.data)
            })
            
        }
    }

</script>
<style scoped>
    .harvestAddress {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        background: #eeeeee;
        z-index: 1
    }
    /*  头部  */

    .header {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #fafafb;
        display: flex;
        position: relative;
    }

    .login_back {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 .46rem;
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
    /*  新增地址  */

    .add {
        position: fixed;
        bottom: 1rem;
        left: 50%;
        margin-left: -2.4rem;
        border-radius: .64rem;
        padding: .36rem 1.8rem;
        border: none;
        color: white;
        background: #fc4141;
    }
</style>