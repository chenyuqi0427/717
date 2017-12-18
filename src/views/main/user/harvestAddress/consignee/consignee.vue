<template>
    <div class="consignee">
        <!--  头部  -->
        <div class="header">
            <div class="login_back">
                <router-link to='/user/harvestAddress'>
                    <span class="getback"></span>
                </router-link>
            </div>
            <div class="login_cen">
                <span>收货人</span>
            </div>
        </div>
        <div class="containent">
            <div><input type="text" placeholder="收货人姓名" v-model='name'></div>
            <div><input type="text" placeholder="手机号" v-model='tel'></div>
            <div class="area">
                <el-select v-model="AddressSheng" placeholder="请选择地址" class='selectAddressSheng'>
                    <el-option v-for="(v,i) in sheng" :key="i" :value='v'>
                    </el-option>
                </el-select>
                <el-select v-model="AddressShi" placeholder="请选择地址" class='selectAddressShi'>
                    <el-option v-for="(v,i) in shi" :key="i" :value='v'>
                    </el-option>
                </el-select>
            </div>
            <div>
                <el-select v-model="AddressArea" placeholder="请选择地址" class='selectAddress'>
                    <el-option v-for="(v,i) in area" :key="i" :value='v'>
                    </el-option>
                </el-select>
            </div>
            <div><input type="text" placeholder="详细地址" v-model='address'></div>
            <div style="text-align:left;font-size:.34rem;">
                <span :class="this.$store.state.addressBtn" @click='checkedAllDel'></span>设置默认地址
            </div>
            <button class="save" @click='save'>保存</button>
        </div>
    </div>
</template>
<script>
    // 提示信息
    import { Toast } from 'mint-ui';

    export default {
        data() {
            return {
                name: '',
                tel: '',
                AddressSheng: '',
                AddressShi: '',
                AddressArea: '',
                address: '',
                sheng: ['北京', '上海', '黑龙江', '辽宁'],
                shi: ['哈尔滨市', '锦州市', '石家庄市'],
                area: ['海淀区', '大兴区', '房山区', '昌平区', '朝阳区'],
                selectAddress: ''
            }
        },
        methods: {
            checkedAllDel() {
                if (this.$store.state.addressBtn === 'check') {
                    // 类名选中
                    this.$store.state.addressBtn = 'check checked'

                } else {
                    // 类名取消
                    this.$store.state.addressBtn = 'check'
                }
            },
            // 保存
            save() {
                let name = this.name,
                    tel = this.tel,
                    AddressSheng = this.AddressSheng,
                    AddressShi = this.AddressShi,
                    AddressArea = this.AddressArea,
                    address = this.address;
                if (!name) return Toast('姓名不能为空');
                if (!tel) return Toast('手机号不能为空');
                if (!(/^1[34578]\d{9}$/).test(tel)) return Toast('手机号格式不正确');
                if (!AddressSheng || !AddressShi || !AddressArea) return Toast('城市不能为空');
                if (!address) return Toast('地址不能为空');

                this.$http.post('/user/addAddress', {
                    name: name,
                    tel: tel,
                    AddressSheng: AddressSheng,
                    AddressShi: AddressShi,
                    AddressArea: AddressArea,
                    address: address,
                    morenAddress: this.$store.state.addressBtn
                })
                    .then((data) => {
                        if (data.data.msg == 'success') {

                            this.$http.post('/user/postaddress')
                                .then((data) => {
                                    this.$store.commit('setpostaddress', data.data)
                                })

                            this.$router.push({ name: 'harvestAddress' })
                        }
                    })
            }
        }
    }

</script>
<style scoped>
    .consignee {
        position: fixed;
        top: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        background: #eeeeee;
        display: flex;
        flex-direction: column;
    }
    /*  头部  */

    .header {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #fafafb;
        display: flex;
        position: relative;
        margin-bottom: .24rem;
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
    /*  内容  */

    .containent {
        flex: 1;
        background: #eeeeee;
    }

    .containent>div {
        margin: 0 auto;
        width: 96%;
        height: 1rem;
        margin-bottom: .24rem;
        /* background: white; */
        text-align: center;
    }

    .containent input {
        box-sizing: border-box;
        padding: 0 .24rem;
        display: inline-block;
        width: 100%;
        height: 100%;
        display: flex;
        border: none;
        outline: none;
    }

    .area {
        display: flex;
        justify-content: space-between;
    }

    .selectAddressSheng {
        width: 45%;
    }

    .selectAddressShi {
        width: 45%;
    }

    .selectAddress {
        width: 100%;
    }
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
    /*  保存  */

    .save {
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