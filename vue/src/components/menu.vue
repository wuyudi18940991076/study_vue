<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="logoS"></i>
        <span class="logo_img" slot="title"><img :src="url" alt=""></span>
      </el-menu-item>
      <el-menu-item index="2">
        <span class="name_h2" slot="title">CS관리시스템</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="my-icon-notice"></i>
        <span slot="title">공지사항</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="my-icon-faq"></i>
          <span slot="title">导航er</span>
        </template>
        <el-menu-item-group>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="my-icon-ticket"></i>
          <span slot="title">导航er</span>
        </template>
        <el-menu-item-group>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="my-icon-help"></i>
          <span slot="title">导航er</span>
        </template>
        <el-menu-item-group>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="my-icon-report"></i>
          <span slot="title">导航er</span>
        </template>
        <el-menu-item-group>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="my-icon-setting-se"></i>
          <span slot="title">导航er</span>
        </template>
        <el-menu-item-group>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <i class="my-icon-setting"></i>
          <span slot="title">导航er</span>
        </template>
        <el-menu-item-group>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="서비스 설정" class="my-icon-setting-se">
              <template slot="title" class="my-icon-setting-se">
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
              </template>
              서비스 설정</el-tab-pane>
            <el-tab-pane label="채팅 설정"><span class="my-icon-faq"></span>채팅 설정</el-tab-pane>
            <el-tab-pane label="티켓 설정"><span class="my-icon-ticket"></span>티켓 설정</el-tab-pane>
            <el-tab-pane label="헬프센터"><span class="my-icon-helpcenter"></span>헬프센터</el-tab-pane>
          </el-tabs>
        </el-menu-item-group>
      </el-submenu>
      <el-radio-group v-model="isCollapse">
        <el-radio-button :label="false">开</el-radio-button>
        <el-radio-button :label="true">收</el-radio-button>
      </el-radio-group>
    </el-menu>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  data () {
    return {
      noUse: false,
      url: require('../assets/images/ic-logo-toast-contact.svg'),
      isCollapse: true,
      tabPosition: 'right'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style soped>
* {
  margin: 0;
  padding: 0;
}
.el-menu--collapse {
  position: relative;
}
.el-menu-vertical-demo:not(.el-menu--collapse) > .el-menu-item:first-child {
  background-color: #6a3ecf;
  text-align: center;
}
.el-menu-vertical-demo:not(.el-menu--collapse)
  > .el-menu-item:first-child:hover {
  background-color: #521ec9;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.logoS {
  margin: 0;
  vertical-align: middle;
  width: 24px;
  text-align: center;
  position: relative;
}
.logoS::before {
  background: url("../assets/images/ic-logo-toast-contact-s.svg") no-repeat
    center;
  background-color: #6a3ecf;
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width: 60px;
  height: 60px;
  background-size: 28px;
}
.logoS:hover::before {
  background: url("../assets/images/ic-logo-toast-contact-s.svg") no-repeat
    center;
  background-color: #521ec9;
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width: 60px;
  height: 60px;
  background-size: 28px;
}
.el-menu--collapse {
  width: 60px;
}
.el-menu-item:first-child,
.el-menu-item:first-child .el-tooltip {
  padding: 0px !important;
  height: 60px !important;
  line-height: 60px !important;
}
.el-menu-item:nth-child(2),
.el-menu-item:nth-child(2) .el-tooltip {
  display: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) .el-menu-item:nth-child(2) {
  display: inline-block;
  padding-left: 30px !important;
  height: 40px;
  line-height: 40px;
}
.el-menu-vertical-demo:not(.el-menu--collapse)
  .el-menu-item:nth-child(2):hover {
  background-color: #fff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 280px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) .el-menu-item i::before {
  content: "";
  display: none;
}
.el-menu-item [class^="el-icon-"] {
  width: 0;
}
.el-menu-item {
  padding: 0 30px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) .el-menu-item {
  height: 42px;
  line-height: 42px;
  font-size: 13px;
  color: #222;
}
.name_h2 {
  display: block;
  font-size: 16px !important;
  font-weight: 500;
  color: #222222;
}
.el-submenu [class^="my-icon-"] {
  text-align: center;
  position: relative;
  line-height: 42px;
  display: none;
  width: 0;
}
.el-menu-item:nth-child(3) .el-tooltip .my-icon-notice::before {
  position: absolute;
  content: "";
  background: url("../assets/images/icon-ic-contact-notice.svg") no-repeat
    center 100%;
  width: 20px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
}
.el-submenu [class^="my-icon-"]::before {
  position: absolute;
  content: "";
  background: url("../assets/images/icon-ic-contact-faq.svg") no-repeat center
    100%;
  width: 20px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
}
.el-submenu .my-icon-ticket::before {
  background: url("../assets/images/icon-ic-contact-ticket.svg") no-repeat
    center 100%;
}
.el-submenu .my-icon-help::before {
  background: url("../assets/images/icon-ic-contact-help.svg") no-repeat center
    100%;
}
.el-submenu .my-icon-report::before {
  background: url("../assets/images/icon-ic-contact-report.svg") no-repeat
    center 100%;
}
.el-submenu .my-icon-setting-se::before {
  background: url("../assets/images/icon-ic-contact-setting-service.svg")
    no-repeat center 100%;
}
.el-submenu .my-icon-setting::before {
  background: url("../assets/images/icon-ic-contact-setting.svg") no-repeat
    center 100%;
}
.el-submenu__title {
  height: 42px;
  line-height: 42px;
  padding: 0 55px 0 30px !important;
}
.el-menu--collapse .el-submenu [class^="my-icon-"] {
  display: inline-block;
}
.el-menu--collapse .el-submenu .el-submenu__title {
  padding: 0px 20px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100vh;
}
.el-menu--collapse {
  height: 100vh;
}
.el-radio-group {
  position: absolute;
  top: 500px;
  right: -22px;
}
.el-submenu__title:hover {
  background-color: #ebe1ff;
}
.el-submenu__title i {
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-bottom.svg") no-repeat center
    100%;
}
.el-submenu__title i::before {
  content: "";
}
.el-menu--collapse
  > .el-submenu
  > .el-submenu__title
  .el-submenu__icon-arrow.el-icon-arrow-right {
  display: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) .el-menu-item:nth-child(3) {
  padding: 0 30px !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse)
  .el-menu-item:nth-child(3):hover {
  background-color: #ebe1ff;
}
.el-tabs__content {
  display: none;
}
.el-tabs--right .el-tabs__header.is-right {
  float: left;
  margin-left: 35px;
}
.el-tabs__item {
  padding: 0 15px;
}
.el-radio-button{
  width: 20px;
}
.el-radio-button__inner{
  padding: 5px;
}
.el-tabs--right .el-tabs__nav-wrap.is-right::after{
  top:15px;
  height: 65%;
}
</style>
