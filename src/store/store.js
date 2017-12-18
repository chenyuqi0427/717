import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        shopcarlist: [],
        sumN: 0,
        check: 'check', // 全选
        acount: 0,  // 购物车浮动提示商品数量
        name: '',  // 用户名
        addressBtn: 'check',
        postaddress: []
    },
    mutations: {
        // 设置购物车数据
        setShopCarList(state, data) {
            state.shopcarlist = data
        },
        // 全部为选中状态的商品 价格
        publicChecked(state) {
            state.sumN = 0;
            state.shopcarlist.forEach((v, i) => {
                if (v.check === 'check checked') {
                    const price = v.data.discount_price * v.count
                    this.commit('valuation', price)
                }
            })
        },
        // 全部为选中状态的商品 价格赋值
        valuation(state, price) {
            state.sumN += parseFloat(price)
        },
        // 购物车商品数量
        shopcarCount(state, count) {
            state.acount = count
        },
        // 设置用户名
        setUsername(state, val){
            state.name = val
        },
        // 设置收货地址数据
        setpostaddress(state, val){
            state.postaddress = val
        }
    }
})

export { store }