<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="logoS"></i>
        <span class="logo_img" slot="title"><img :src="url" alt=""></span>
      </el-menu-item>
      <el-menu-item index="2" popper-class=''>
        <span class="name_h2" slot="title">CS관리시스템</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="my-icon-notice"></i>
        <span slot="title">공지사항</span>
      </el-menu-item>
      <el-submenu :index="index+1+''" v-for="(item,index) in menuList" :key="index">
        <template slot="title">
          <i :class="item.itemClass"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item-group>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane v-for="(list,index) in item.myList" :key="index">
              <span slot="label"><i :class="list.listClass"></i>{{list.list1}}</span>
            </el-tab-pane>
          </el-tabs>
        </el-menu-item-group>
      </el-submenu>
      <el-radio-group v-model="isCollapse">
        <el-radio-button></el-radio-button>
      </el-radio-group>
    </el-menu>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-radio-button {
  width: 46px !important;
}
.el-radio-button .el-radio-button__inner {
  position: relative;
  border-radius: 50%;
  background: #f4f4f4;
  padding: 12px;
  width: 46px;
  height: 46px;
  text-align: center;
}
.el-radio-button .el-radio-button__inner::before {
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  content: "";
  background: url("../assets/images/ic-float-resize-left.svg") no-repeat center
    100%;
  overflow: hidden;
  position: absolute;
  width: 20px;
  height: 20px;
}
.el-radio-button:last-child .el-radio-button__inner.haveNone::before {
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  content: "";
  background: url("../assets/images/ic-float-resize-right.svg") no-repeat center
    100%;
  overflow: hidden;
  position: absolute;
  width: 20px;
  height: 20px;
}
</style>

<script>
export default {
  name: 'myMenu',
  props: { 'message': String },
  data () {
    return {
      label: true,
      noUse: false,
      url: require('../assets/images/ic-logo-toast-contact.svg'),
      isCollapse: true,
      tabPosition: 'right',
      menuList: [
        {
          title: '채팅',
          itemClass: 'my-icon-faq',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        },
        {
          title: '티켓 관리',
          itemClass: 'my-icon-ticket',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        },
        {
          title: '헬프센터',
          itemClass: 'my-icon-help',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        },
        {
          title: '통계',
          itemClass: 'my-icon-report',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        },
        {
          title: '서비스 설정',
          itemClass: 'my-icon-setting-se',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        },
        {
          title: '전체 설정',
          itemClass: 'my-icon-setting',
          myList: [
            {
              list1: '서비스 설정',
              listClass: 'you-icon-setting-service'
            },
            {
              list1: '채팅 설정',
              listClass: 'you-icon-faq'
            },
            {
              list1: '티켓 설정',
              listClass: 'you-icon-ticket'
            },
            {
              list1: '헬프센터',
              listClass: 'you-icon-helpcenter'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    open () {

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
  margin: 16px 0 6px 0;
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
  height: 42px;
  line-height: 42px;
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
.el-submenu [class^="my-icon-"]::after {
  position: absolute;
  content: "";
  background: url("../assets/images/ic-lnb-more.svg") no-repeat center 100%;
  width: 5px;
  bottom: 3px;
  right: -26px;
  height: 5px;
}
.el-menu-item:nth-child(3) {
  margin-top: 10px;
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
.el-submenu.is-opened i,
.el-submenu__title:hover i {
  opacity: 1;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: #ebe1ff;
}
.el-submenu__title:hover [class^="my-icon-"]::after {
  position: absolute;
  content: "";
  background: url("../assets/images/ic-lnb-more-purple.svg") no-repeat center
    100%;
  width: 5px;
  bottom: 3px;
  right: -26px;
  height: 5px;
}
.el-submenu__title .el-submenu__icon-arrow {
  opacity: 0.3;
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
  margin: 0;
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
.el-radio-button {
  width: 20px;
}
.el-radio-button__inner {
  padding: 5px;
}
.el-tabs--right .el-tabs__nav-wrap.is-right::after {
  top: 15px;
  height: 65%;
}
.el-tabs__item {
  padding-left: 85px;
}
.el-tabs__item:hover,
.el-tabs__item.is-active {
  background-color: #ebe1ff;
  color: #222;
}
.el-tabs--right .el-tabs__header.is-right {
  margin: 0;
  width: 100%;
}
.el-tabs--right .el-tabs__nav-wrap.is-right {
  margin: 0;
}
.el-tabs--right .el-tabs__active-bar.is-right {
  left: 35px;
}
.el-tabs__item [class^="you-icon-"] {
  position: absolute;
  display: inline-block;
  background: url("../assets/images/icon-ic-contact-setting-service.svg")
    no-repeat center 100%;
  width: 20px;
  top: 10px;
  left: 50px;
  height: 20px;
}
.el-tabs__item .you-icon-faq {
  background: url("../assets/images/icon-ic-contact-faq.svg") no-repeat center
    100%;
}
.el-tabs__item .you-icon-ticket {
  background: url("../assets/images/icon-ic-contact-ticket.svg") no-repeat
    center 100%;
}
.el-tabs__item .you-icon-helpcenter {
  background: url("../assets/images/icon-ic-contact-helpcenter.svg") no-repeat
    center 100%;
}
.el-tabs__active-bar {
  background-color: #222;
}
.el-tabs--right .el-tabs__active-bar.is-right {
  top: 11px;
  height: 18px !important;
}
.el-tabs__nav:after {
  position: absolute;
  width: 2px;
  height: 88%;
  left: 35px;
  top: 10px;
  background: rgba(0, 0, 0, 0.05);
  content: "";
  z-index: 1;
}
</style>
