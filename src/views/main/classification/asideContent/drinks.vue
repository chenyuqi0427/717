<template>
    <div class="homeTown">
        <div class="boxs" v-for='(v,i) in datalist' :key='i'>
            <p><img :src="'http://www.lb717.com/'+v.cate_icon"></p>
            <p>{{v.cate_name}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                datalist: []
            }
        },
        created() {
            this.$http.post('/classification/asideData', {
                sonid: this.$route.query.id
            })
                .then((data) => {
                    this.datalist = JSON.parse(data.data)
                })
        }
    }

</script>
<style scoped>
    .homeTown {
        width: 100%;
        background: white;
        display: flex;
        flex-wrap: wrap;
    }

    .boxs {
        width: 30%;
        height: 2.5rem;
        margin-left: .1rem;
        margin-top: .13rem;
        background: #f7f7f7;
        text-align: center;
        font-size: .32rem;
        color: #909090;
    }

    .boxs>p img {
        width: 100%;
    }
</style>