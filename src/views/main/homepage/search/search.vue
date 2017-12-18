<template>
    <div class="search">
        <div class="header">
            <div class="search_back">
                <router-link to='/'>
                    <span class="getback"></span>
                </router-link>
            </div>
            <div class="search_ipt">
                <div id="ipt">
                    <span class="icon"></span>
                    <input type="text" placeholder="请输入您要购买的商品" class="ipt" v-model='searchIpt'>
                </div>
            </div>
            <div class="search_btn" @click='search'>
                <span>搜索</span>
            </div>
        </div>
        <div class="recent_search">
            <p class="recent_search_tit">
                <span>最近搜索</span>
                <span class="del"></span>
            </p>
            <p v-if='!searchStoryList' class='recent_no'>暂无搜索记录</p>
            <ul v-else class="recentlist">
                <li v-for='(v,i) in searchStoryList' :key='i'>{{v}}</li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import _ from 'lodash'

    export default {
        data() {
            return {
                searchIpt: '',  // 搜索框数据
                searchStoryList: []  // searchStoryList
            }
        },
        methods: {
            search() {
                // 判断搜索框是否有值
                if (this.searchIpt == '') return

                let ls = localStorage;

                // 判断searchStory是否存在  不存在,创建并赋值
                if (!ls.getItem('searchStory')) {
                    // 设置
                    ls.setItem('searchStory', JSON.stringify([this.searchIpt]))

                } else {
                    // 存在,unshift 赋值 ↓
                    // 获取searchStory里的值
                    const newStoryVal = JSON.parse(ls.getItem('searchStory'));
                    // 添加
                    newStoryVal.unshift(this.searchIpt);
                    // 设置
                    ls.setItem('searchStory', JSON.stringify(_.uniq(newStoryVal)));
                }
                this.getStory()
                // 发送搜索数据
                this.$router.push({ path: '/search/searchGoods', query: { data: this.searchIpt } })
            },
            getStory() {
                let ls = localStorage;
                this.searchStoryList = JSON.parse(ls.getItem('searchStory'))
            }
        },
        created() {
            this.getStory()
        }
    }

</script>
<style scoped>
    .search {
        width: 100%;
        overflow: hidden;
        height: 100%;
        background: white;
    }
    /*  头部  */

    .header {
        width: 100%;
        background: white;
        border-bottom: 1px solid #ccc;
        display: flex;
    }

    .search_back {
        padding: 0 .14rem;
    }

    .getback {
        display: inline-block;
        width: .58rem;
        height: .58rem;
        vertical-align: middle;
        background-image: url(http://www.lb717.com/static/mobile/images/return.png);
        background-size: cover;
    }

    .search_ipt {
        padding: 0 0 0 0rem;
        flex: 1;
    }

    #ipt {
        border-radius: .08rem;
        text-align: left;
        margin-top: .12rem;
        width: 100%;
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

    .search_btn {
        padding: 0 .34rem;
        font-size: .3rem;
    }
    /*  最近搜索  */

    .recent_search {
        background: white;
    }

    .recent_search_tit {
        width: 100%;
        height: .84rem;
        line-height: .84rem;
        background: white;
        font-size: .32rem;
        display: flex;
        color: #666666;
    }

    .recent_search_tit span:nth-child(1) {
        flex: 1;
        padding: 0 .32rem;
    }

    .del {
        display: inline-block;
        margin: auto .4rem;
        width: .34rem;
        height: .34rem;
        background-image: url(http://www.lb717.com/static/mobile/images/my/remo.png);
        background-size: cover;
    }
    /*  最近搜索数据  */

    .recentlist {
        padding: .2rem .2rem 0rem .2rem;
        width: 100%;
    }

    .recentlist li {
        display: inline-block;
        border: 1px solid #ccc;
        padding: .1rem .2rem;
        font-size: .34rem;
        border-radius: 5px;
        display: inline-block;
        margin: 0 .3rem .28rem 0;
    }
    /*  暂无搜索数据  */

    .recent_no {
        padding: 0 .32rem;
        width: 100%;
        height: .84rem;
        line-height: .84rem;
        background: white;
        font-size: .32rem;
    }

    .recent_displayN {
        display: none;
    }
</style>