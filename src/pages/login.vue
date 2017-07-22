<template>
    <div>
        <div class='login'>
            <Form class='form' ref="formInline" :model="info" :rules="ruleInline" inline>
                <h3 class='title'>超级无敌多BUG的后台登录系统</h3>
                <Form-item prop="user">
                    <Input type="text" v-model="info.user" placeholder="用户名">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="info.password" placeholder="密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" long @click="login">登录</Button>
                </Form-item>
                <p>注意！！注意！！</p>
                <p>账号：12345612345</p>
                <p>密码：123456</p>
            </Form>
        </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    import axios from 'axios'
    import {
        JS
    } from '@/assets/js/index.js'
    export default {
        name: 'Login',
        data() {
            return {
                info: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [{
                        required: true,
                        message: '请填写用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                            required: true,
                            message: '请填写密码',
                            trigger: 'blur'
                        },
                        {
                            type: 'string',
                            min: 6,
                            message: '密码长度不能小于6位',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            login() {
                axios.get('../../static/json/mock.json').then((res) => {
                    console.log(res);
                    if (JS.Fn.inArr.isPwd(res.data.userInfo, this.info.user, this.info.password)) {
                        console.log('账号密码正确');
                        this.$Modal.success({
                            title: '成功',
                            content: '<p>用户名密码正确，点击确定将跳转</p>',
                            onOk: () => {
                                this.$router.push({
                                    path: '/result'
                                });
                            }
                        });
                    } else {
                        console.log('账号密码错误');
                        const title = '错误';
                        const content = '<p>账号密码错误，请重新输入！</p>';
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                    }
                }).catch((res) => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>
    .login {
        position: relaive;
        width: 100%;
        height: 100%;
        height: 100vh;
        background: #2d3a4b;
    }
    .form {
        position: absolute;
        left: 0;
        right: 0;
        width: 400px;
        padding: 35px 35px 15px;
        margin: 200px auto;
        background: #fff;
        border: 1px solid #eaeaea;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }
    .form:hover {
        -webkit-box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.5);
    }
    .title{
        margin: 0 auto 20px;
    }
    .ivu-form-item{
        width: 280px;
    }
    .ivu-icon{
        font-size:20px;
    }
    p{
        text-align: left;
        padding-left: 20px;
    }
</style>