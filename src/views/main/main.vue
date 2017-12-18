<template>
    <div id="app">
        <div class="content">

            <keep-alive include='homepage'>
                <router-view></router-view>
            </keep-alive>

        </div>
        <main-footer></main-footer>
    </div>
</template>
<script>
    import mainFooter from '../../components/footer/footer'

    export default {
        data() {
            return {

            }
        },
        created() {
            this.$http.post('/shopcar/getshopcardata')
                .then((data) => {
                    // 更新Vuex购物车数据总条数
                    this.$store.commit('shopcarCount', data.data.merchandise.length)
                })
        },
        components: {
            mainFooter
        }
    }

</script>