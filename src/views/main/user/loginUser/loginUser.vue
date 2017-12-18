<template>
    <div class="login">
        <!--  头部  -->
        <div class="header">
            <div class="login_back">
                <router-link to='/'>
                    <span class="getback"></span>
                </router-link>
            </div>
            <div class="login_cen">
                <span>会员登录</span>
            </div>
            <div class="login_btn">
                <a href="/#/registerUser">注册</a>
            </div>
        </div>
        <!--  账号  -->
        <div class="userText">
            <span class="userlogo"></span>
            <div class="user_ipt">
                <input type="text" placeholder="请输入您的手机号" v-model='user'>
            </div>
        </div>
        <!--  密码  -->
        <div class="passwordText">
            <span class="passwordlogo"></span>
            <div class="password_ipt">
                <input type="password" placeholder="请输入您的密码" v-model='pasd'>
            </div>
        </div>
        <!--  按钮  -->
        <div class="loginBtnBox">
            <button class="loginBtn" @click='login'>立即登录</button>
            <a href="#">忘记密码？</a>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import { setCookie } from '../../../../utils/utils'
    export default {
        data() {
            return {
                user: '',
                pasd: ''
            }
        },
        methods: {
            login() {
                if (!this.user) return Toast('手机号不能为空');
                if (!this.pasd) return Toast('密码不能为空');
                if (!(/^1[34578]\d{9}$/).test(this.user)) return Toast('手机号格式不正确');

                this.$http.post('/user/loginUser', {
                    user: this.user,
                    pasd: this.pasd
                })
                    .then((data) => {
                        if (data.data.msg === 'success') {
                            Toast('登陆成功');
                            // 设置cookie
                            setCookie('token', data.data.token)
                            // 设置用户名
                            this.$store.commit('setUsername', this.user)
                            setTimeout(() => {
                                this.$router.push(this.$route.query.from || '/')
                            }, 2000)
                        } else if (data.data.msg === 'error') {
                            Toast('账号或密码不存在！');
                            setTimeout(() => {
                                this.$router.push('/registerUser')
                            }, 1500)
                        }
                    })
            }
        }
    }

</script>
<style scoped>
    .login {
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

    .login_back {
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

    .login_btn a {
        padding: 0 .38rem;
        font-size: .3rem;
        color: red;
    }
    /*  输入框  */

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

    .loginBtnBox {
        width: 100%;
        height: 4rem;
        position: relative;
    }

    .loginBtn {
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

    .loginBtnBox a {
        float: right;
        margin-top: 2.25rem;
        margin-right: 1rem;
        color: #999999;
        border-bottom: 1px solid #999999;
        font-size: .34rem;
    }
</style>