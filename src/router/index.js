import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from '../utils/utils'
Vue.use(Router)
// 主模板
import main from '../views/main/main'
// 首页
import homepage from '../views/main/homepage/homepage'
// 首页 -> 搜索
import search from '../views/main/homepage/search/search'
// 首页 -> 搜索 -> 搜索结果页
import searchGoods from '../views/main/homepage/search/searchGoods/searchGoods'
// 首页 -> 详情页
import detailPage from '../views/main/homepage/detailPage/detailPage'
// 分类
import classification from '../views/main/classification/classification'
// 分类 -> 家乡味道
import homeTown from '../views/main/classification/asideContent/homeTown.vue'
// 分类 -> 进口食品
import food from '../views/main/classification/asideContent/food.vue'
// 分类 -> 牛奶乳品
import milk from '../views/main/classification/asideContent/milk.vue'
// 分类 -> 休闲零食
import snacks from '../views/main/classification/asideContent/snacks.vue'
// 分类 -> 生鲜果蔬
import vegetable from '../views/main/classification/asideContent/vegetable.vue'
// 分类 -> 米面粮油
import rice from '../views/main/classification/asideContent/rice.vue'
// 分类 -> 调味调料
import seasoning from '../views/main/classification/asideContent/seasoning.vue'
// 分类 -> 酒水饮料
import drinks from '../views/main/classification/asideContent/drinks.vue'
// 社交
import socialization from '../views/main/socialization/socialization'
// 购物车
import shopcar from '../views/main/shopcar/shopcar'
// 我的
import user from '../views/main/user/user'
// 我的 -> 登录
import loginUser from '../views/main/user/loginUser/loginUser'
// 我的 -> 注册
import registerUser from '../views/main/user/registerUser/registerUser'
// 我的 -> 账户余额
import account from '../views/main/user/account/account'
// 我的 -> 地址管理
import harvestAddress from '../views/main/user/harvestAddress/harvestAddress'
// 我的 -> 地址管理 -> 新增地址
import consignee from '../views/main/user/harvestAddress/consignee/consignee'
// 我的 -> 我的客服
import service from '../views/main/user/service/service'

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: main,
            redirect: '/homepage',
            children: [
                {
                    path: '/homepage',
                    name: 'homepage',
                    component: homepage
                },
                {
                    path: '/classification',
                    name: 'classification',
                    component: classification,
                    redirect: '/classification/asideContent2',
                    children: [
                        {
                            path: '/classification/asideContent2',
                            name: 'homeTown',
                            component: homeTown
                        },
                        {
                            path: '/classification/asideContent3',
                            name: 'food',
                            component: food
                        },
                        {
                            path: '/classification/asideContent4',
                            name: 'milk',
                            component: milk
                        },
                        {
                            path: '/classification/asideContent5',
                            name: 'snacks',
                            component: snacks
                        },
                        {
                            path: '/classification/asideContent6',
                            name: 'vegetable',
                            component: vegetable
                        },
                        {
                            path: '/classification/asideContent7',
                            name: 'rice',
                            component: rice
                        },
                        {
                            path: '/classification/asideContent8',
                            name: 'seasoning',
                            component: seasoning
                        },
                        {
                            path: '/classification/asideContent9',
                            name: 'drinks',
                            component: drinks
                        },
                    ]
                },
                {
                    path: '/socialization',
                    name: 'socialization',
                    component: socialization
                },
                {
                    path: '/shopcar',
                    name: 'shopcar',
                    component: shopcar
                },
                {
                    path: '/user',
                    name: 'user',
                    component: user,
                    children: [
                        {
                            path: '/user/account',
                            name: 'account',
                            component: account,
                        },
                        {
                            path: '/user/harvestAddress',
                            name: 'harvestAddress',
                            component: harvestAddress,
                            children: [
                                {
                                    path: '/user/harvestAddress/consignee',
                                    name: 'consignee',
                                    component: consignee,
                                }
                            ]
                        },
                        {
                            path: '/user/service',
                            name: 'service',
                            component: service,
                        }
                    ]
                }
            ]
        },
        // 详情
        {
            path: '/detailPage',
            name: 'detailPage',
            component: detailPage
        },
        // 搜索
        {
            path: '/search',
            name: 'search',
            component: search,
            children: [
                {
                    path: '/search/searchGoods',
                    name: '/search/searchGoods',
                    component: searchGoods
                }
            ]
        },
        // 登录
        {
            path: '/loginUser',
            name: 'loginUser',
            component: loginUser
        },
        // 注册
        {
            path: '/registerUser',
            name: 'registerUser',
            component: registerUser
        }
    ]
})

router.beforeEach((to, from, next) => {

    if (to.name == 'user') {

        if (getCookie('token')) {
            next()
        } else {
            next({ path: '/loginUser' })
        }

    } else {
        next()
    }

})

export default router