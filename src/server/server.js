const express = require('express')
const body_parser = require('body-parser')

const app = express();

app.use(body_parser.json())
app.all('*', (req, res, next) => {
    // 跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Content-Type', 'application/json');
    next()
})

// homepage
// 首页 -> 下拉加载数据
const homepageScrollPath = '/mall/index/getGoodsChannel'
const homepageScrollList = require('./api/homePage/scrollList.js')
app.post(homepageScrollPath, homepageScrollList)

// 首页 -> 获取搜索数据
const postSearchPath = '/homepage/postsearchlist'
const postSearchList = require('./api/homePage/postsearchlist.js')
app.post(postSearchPath, postSearchList)

// 首页 -> 添加购物车数据
const addShopCarPath = '/homepage/addshopcar'
const addShopCarList = require('./api/homePage/addShopCarList.js')
app.post(addShopCarPath, addShopCarList)

// classification
// 分类 -> 请求左侧列表数据
const classAsidePath = '/mall/category/topCategory'
const classAsideList = require('./api/classification/classAsideList.js')
app.post(classAsidePath, classAsideList)

// 分类 -> 侧边栏切换内容
const PostsonidPath = '/classification/asideData'
const PostsonidList = require('./api/classification/asidePostData.js')
app.post(PostsonidPath, PostsonidList)

// shopcar
// 购物车页 -> 请求购物车数据
const getShopCarDataPath = '/shopcar/getshopcardata'
const getShopCarDataList = require('./api/shopcar/getShopCarDataList.js')
app.post(getShopCarDataPath, getShopCarDataList)

// 购物车页 -> 加 / 减
const countChangePath = '/shopcar/countChange'
const countChangeList = require('./api/shopcar/countChangeList.js')
app.post(countChangePath, countChangeList)

// 购物车页 -> 结算
const clearingPath = '/shopcar/clearing'
const clearingList = require('./api/shopcar/clearingList.js')
app.post(clearingPath, clearingList)

// 购物车页 -> 删除
const delShopCarPath = '/shopcar/delShopCar'
const delShopCarList = require('./api/shopcar/delShopCarList.js')
app.post(delShopCarPath, delShopCarList)

// user
// user -> 新增地址
const addAddressPath = '/user/addAddress'
const addAddressList = require('./api/user/addAddressList.js')
app.post(addAddressPath, addAddressList)

// user -> 请求收货地址
const postAddressPath = '/user/postaddress'
const postAddressList = require('./api/user/postAddressList.js')
app.post(postAddressPath, postAddressList)

// user -> 更改默认收货地址
const changeAddressPath = '/user/changeaddress'
const changeAddressList = require('./api/user/changeAddress.js')
app.post(changeAddressPath, changeAddressList)

// user -> 登录
const login = '/user/loginUser'
const loginUser = require('./api/user/loginUser.js')
app.post(login, loginUser)

// user -> 注册
const register = '/user/registerUser'
const registerUser = require('./api/user/registerUser.js')
app.post(register, registerUser)


app.listen(3000, () => {
    console.log('listen 3000 success')
})