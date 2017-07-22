<template>
  <div>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
      <Row type='flex' justify="start">
        <i-col :span="spanLeft" class="layout-menu-left">
        <Menu theme="dark" width="auto" :open-names="['1']" accordion>
            <div class="layout-logo-left"><img :class="[toggleLogo ? 'layout-logo-small' : '']" :src="imgLogo"></div>
            <Submenu name="1">
                <template slot="title">
                    <Icon type="ios-paper" :size="iconSize"></Icon>
                    <span class="layout-text">内容管理</span>
                </template>
                <Menu-item name="1-1"><router-link class='link' to='table'>产品管理</router-link></Menu-item>
                <Menu-item name="1-2"><router-link class='link' to='table'>评论管理</router-link></Menu-item>
                <Menu-item name="1-3"><router-link class='link' to='table'>举报管理</router-link></Menu-item>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-people" :size="iconSize"></Icon>
                    <span class="layout-text">用户管理</span>
                </template>
                <Menu-item name="2-1">新增用户</Menu-item>
                <Menu-item name="2-2">活跃用户</Menu-item>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="stats-bars" :size="iconSize"></Icon>
                    <span class="layout-text">统计分析</span>
                </template>
                <Menu-group title="使用">
                    <Menu-item name="3-1">新增和启动</Menu-item>
                    <Menu-item name="3-2">活跃分析</Menu-item>
                    <Menu-item name="3-3">时段分析</Menu-item>
                </Menu-group>
                <Menu-group title="留存">
                    <Menu-item name="3-4">用户留存</Menu-item>
                    <Menu-item name="3-5">流失用户</Menu-item>
                </Menu-group>
            </Submenu>
        </Menu>
        </i-col>
        <i-col :offset="offsetRight" :span="spanRight">
          <div class="layout-header">
            <i-button type="text" @click="toggleClick">
              <Icon type="navicon" size="32"></Icon>
            </i-button>
          </div>
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item href="/">首页</Breadcrumb-item>
              <Breadcrumb-item href="/login">应用中心</Breadcrumb-item>
              <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
          </div>
          <div class="layout-content">
            <div class="layout-content-main">
            <!--内容区域-->
            <router-view></router-view>
            </div>
          </div>
          <div class="layout-copy">
            2016-2018 &copy; JunJiApp
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'Index',
    data() {
      return {
        spanLeft: 4,
        spanRight: 20,
        toggleLogo: false
      }
    },
    computed: {
      iconSize() {
        return this.spanLeft === 4 ? 14 : 26;
      },
      offsetRight() {
        return this.spanLeft
      },
      imgLogo() {
        return this.spanLeft === 4 ? require("../../static/img/logo-blue.png") : require("../../static/img/logo-left.png");
      }
    },
    methods: {
      toggleClick() {
        if (this.spanLeft === 4) {
          this.spanLeft = 2;
          this.spanRight = 22;
          this.toggleLogo = true;
        } else {
          this.spanLeft = 4;
          this.spanRight = 20;
          this.toggleLogo = false;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout {
    height: 100%;
    text-align: left;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-breadcrumb {
    padding: 10px 15px 0;
  }
  .layout-content {
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main {
    min-height: 500px;
    padding: 10px;
  }
  .layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }
  .layout-menu-left {
    position: fixed;
    height: 100%;
    background: #464c5b;
  }
  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }
  .layout-logo-left {
    width: 90%;
    height: 47px;
    line-height: 47px;
    text-align: center;
    margin: 15px auto;
  }
  .layout-logo-small {
    width: 40px;
    height: 40px;
  }
  .layout-ceiling-main a {
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text,
  .layout-hide-text .ivu-menu-submenu-title-icon {
    display: none;
  }
  .ivu-col {
    transition: width .2s ease-in-out;
  }
  .link{
    display: block;
    width: 100%;
    color: #fff;
  }
</style>
