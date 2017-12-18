<template>
    <div class="register">
        <!--  头部  -->
        <div class="header">
            <div class="register_back">
                <router-link to='/loginUser'>
                    <span class="getback"></span>
                </router-link>
            </div>
            <div class="register_cen">
                <span>注册会员</span>
            </div>
            <div class="register_btn">
                <a href="/#/loginUser">登录</a>
            </div>
        </div>
        <!--  账号  -->
        <div class="userText">
            <span class="userlogo"></span>
            <div class="user_ipt">
                <input type="text" placeholder="请输入您的手机号" v-model='user'>
            </div>
        </div>
        <!--  验证码  -->
        <div class="yzmText">
            <span class="yzmlogo"></span>
            <div class="yzm_ipt">
                <input type="text" placeholder="请输入验证码">
            </div>
            <span class="getYzm" @click='getYzm'>获取验证码</span>
        </div>
        <!--  密码  -->
        <div class="passwordText">
            <span class="passwordlogo"></span>
            <div class="password_ipt">
                <input type="password" placeholder="请输入您的密码" v-model='pasd'>
            </div>
        </div>
        <!--  按钮  -->
        <div class="registerBtnBox">
            <button class="registerBtn" @click='register'>确定</button>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';

    export default {
        data() {
            return {
                user: '',
                pasd: ''
            }
        },
        methods: {
            register() {
                if (!this.user) return Toast('手机号不能为空');
                if (!this.pasd) return Toast('密码不能为空');
                if (!(/^1[34578]\d{9}$/).test(this.user)) return Toast('手机号格式不正确');

                this.$http.post('/user/registerUser', {
                    user: this.user,
                    pasd: this.pasd
                })
                    .then((data) => {
                        if (data.data.msg === 'success') {
                            Toast('注册成功');
                            setTimeout(() => {
                                this.$router.push('/loginUser')
                            }, 2000)
                        } else if (data.data.msg === 'error') {
                            Toast('账号已存在！');
                            setTimeout(() => {
                                this.$router.push('/loginUser')
                            }, 1500)
                        }
                    })
            },
            // 获取验证码
            getYzm() {
                Toast('已发送验证码')
            }
        }
    }

</script>
<style scoped>
    .register {
        width: 100%;
        height: 100%;
        background: #f4f4f4;
        overflow: hidden;
    }
    /*  头部  */

    .header {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        background: #fafafb;
        display: flex;
    }

    .register_back {
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

    .register_cen {
        text-align: center;
        flex: 1;
        font-size: .34rem;
    }

    .register_btn a {
        padding: 0 .38rem;
        font-size: .3rem;
        color: red;
    }
    /*  输入框  */
    /*  账号  */

    .userText {
        margin-top: .24rem;
        width: 100%;
        height: 1.12rem;
        display: flex;
        background: white;
        border-bottom: 1px solid white;
    }

    .userlogo {
        display: inline-block;
        width: .48rem;
        height: .48rem;
        background: pink;
        margin: auto .1rem auto .4rem;
        background-image: url(http://www.lb717.com/static/mobile/images/denglu_img/number.png);
        background-size: 100% 100%;
    }

    .user_ipt {
        flex: 1;
    }

    .user_ipt input {
        width: 90%;
        height: 97%;
        border: none;
        border-bottom: 1px solid #e5e5e5;
    }
    /*  验证码  */

    .yzmText {
        width: 100%;
        height: 1.12rem;
        display: flex;
        background: white;
        border-bottom: 1px solid white;
        position: relative;
    }

    .yzmlogo {
        display: inline-block;
        width: .44rem;
        height: .52rem;
        background: pink;
        margin: auto .1rem auto .4rem;
        background-image: url(http://www.lb717.com/static/mobile/images/denglu_img/code.png);
        background-size: 100% 100%;
    }

    .yzm_ipt {
        flex: 1;
    }

    .getYzm {
        position: absolute;
        padding: .2rem;
        top: .2rem;
        right: .5rem;
        border-radius: 19px;
        border: 1px solid #fea9a9;
        color: #fc4141;
        font-size: .3rem;
    }

    .yzm_ipt input {
        width: 50%;
        height: 97%;
        border: none;
        border-bottom: 1px solid #e5e5e5;
    }
    /*  密码  */

    .passwordText {
        width: 100%;
        height: 1.12rem;
        display: flex;
        background: white;
        border-bottom: 1px solid white;
    }

    .passwordlogo {
        display: inline-block;
        width: .44rem;
        height: .52rem;
        background: pink;
        margin: auto .1rem auto .4rem;
        background-image: url(http://www.lb717.com/static/mobile/images/denglu_img/password.png);
        background-size: 100% 100%;
    }

    .password_ipt {
        flex: 1;
    }

    .password_ipt input {
        width: 90%;
        height: 97%;
        border: none;
        border-bottom: 1px solid #e5e5e5;
    }
    /*  登录按钮  */

    .registerBtnBox {
        width: 100%;
        height: 4rem;
        position: relative;
    }

    .registerBtn {
        margin-top: 1rem;
        position: absolute;
        left: 50%;
        margin-left: -2.8rem;
        width: 5.57rem;
        height: 1.13rem;
        display: block;
        color: #fff;
        background: #fc4141;
        border-radius: 50px;
        font-size: .36rem;
        border: none;
    }
</style>