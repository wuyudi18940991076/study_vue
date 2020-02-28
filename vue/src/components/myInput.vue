<template>
  <div class="common">
    <div class="my_input">
      <div class="commom_input">
        普通输入框
        <el-input class="myInput" v-model="input1" placeholder="0"></el-input>
      </div>
      <div class="disable_input">
        禁用输入框
        <el-input class="myInput" disabled="" v-model="input2" placeholder=""></el-input>
      </div>
      <div class="tips_input">
        提示输入框
        <el-input class="myInput tips_border" v-model="input3" placeholder="0"></el-input>
      </div>
      <div class="have_icon">
        带icon的输入框默认样式
        <el-input class="myInput icon_input" placeholder="日期" v-model="input4">
          <i slot="suffix" class="date_icon"></i>
        </el-input>
      </div>
      <div class="have_icon">
        带icon的输入框禁用样式
        <el-input class="myInput icon_input" disabled="" placeholder="日期" v-model="input4">
          <i slot="suffix" class="date_icon"></i>
        </el-input>
      </div>
      <div class="my_select">
        <div class="common_select">
          共通下拉菜单
          <el-select popper-class="select_pop" class="mySelect" v-model="value1" placeholder="请选择">
            <el-option v-for="(item, index) in cities" :key="index" :label="item.label" :value="index">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="common_select">
          禁用状态下拉菜单
          <el-select disabled="" popper-class="select_pop" class="mySelect" v-model="value2" placeholder="请选择">
            <el-option v-for="(item, index) in cities" :key="index" :label="item.label" :value="index">
              <span style="float: left">{{ item.label }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="my_cascader">
      通用联选择器
      <el-cascader popper-class="select_pop" class="mySelect" v-model="value6" :options="options" :props="{ expandTrigger: 'hover' }" @change="handleChange"></el-cascader>
    </div>
  </div>
</template>
<style>
.my_cascader {
  position: absolute;
  top: 120px;
  left: 600px;
}
.el-cascader {
  line-height: 32px;
}
.el-icon-arrow-down:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 6px;
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-bottom.svg") no-repeat 100%;
}
.el-cascader .el-input .el-icon-arrow-down.is-reverse:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 6px;
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-top.svg") no-repeat 100%;
}
.el-cascader .el-input .el-icon-arrow-down.is-reverse {
  transform: inherit;
}
.el-cascader .el-input.is-focus .el-input__inner {
  border-color: #aaa;
}
.select_pop .el-icon-arrow-right:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-small-right.svg") no-repeat
    100%;
  opacity: 0.3;
}
.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover{
 opacity: 1;
}
.el-cascader-node.in-active-path:focus .el-icon-arrow-right:before{
  opacity: 1;
}
.el-cascader-node.in-active-path:hover .el-icon-arrow-right:before {
  opacity: 1;
}
.el-cascader-menu__list {
  padding: 0;
}
.el-cascader-node {
  line-height: 32px;
  height: 32px;
  padding: 0 30px 0px 12px;
}
.el-cascader-node.in-active-path,
.el-cascader-node.is-active,
.el-cascader-node.is-selectable.in-checked-path {
  color: #333;
  background-color: #ebe1ff;
  font-weight: 400;
}
.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
  color: #333;
  background-color: #ebe1ff;
}
.el-cascader-node__prefix {
  left: auto;
  right: 20px;
}
/* .el-cascader-node.in-active-path:before, */
.el-cascader-node.in-active-path.in-checked-path:before,
/* .el-cascader-node.is-selectable.in-checked-path:before, */
.el-icon-check:before {
  content: "";
  background: url("../assets/images/ic-check-purple.svg") no-repeat 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
.el-cascader-menu{
  min-width: 210px;
}
</style>
<script>
export default {
  name: 'myInput',
  props: { 'message': String },
  data () {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      cities: [{
        label: '北京'
      }, {
        label: '上海'
      }, {
        label: '南京'
      }, {
        label: '成都'
      }, {
        label: '深圳'
      }, {
        label: '广州'
      }],
      value1: '',
      value2: '',
      value6: [],
      options: [{
        value: 'zhinan',
        label: '카테고리1-1',
        children: [{
          value: 'shejiyuanze',
          label: '카테고리2-1',
          children: [{
            value: 'yizhi',
            label: '카테고리2-1-1'
          }, {
            value: 'fankui',
            label: '카테고리2-1-2'
          }, {
            value: 'xiaolv',
            label: '카테고리2-1-3'
          }]
        }, {
          value: 'daohang',
          label: '카테고리2-1',
          children: [{
            value: 'cexiangdaohang',
            label: '카테고리2-1-1'
          }, {
            value: 'dingbudaohang',
            label: '카테고리2-1-2'
          }]
        }]
      }, {
        value: 'zujian',
        label: '카테고리2-1-2',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: '카테고리2-1-2'
          }, {
            value: 'color',
            label: '카테고리2-1-2'
          }, {
            value: 'typography',
            label: '카테고리2-1-2'
          }, {
            value: 'icon',
            label: '카테고리2-1-2'
          }, {
            value: 'button',
            label: '카테고리2-1-2'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: '카테고리2-1-2'
          }, {
            value: 'checkbox',
            label: '카테고리2-1-2'
          }, {
            value: 'input',
            label: '카테고리2-1-2'
          }, {
            value: 'input-number',
            label: '카테고리2-1-2'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '카테고리3-1',
        children: [{
          value: 'axure',
          label: '카테고리3-1-1'
        }, {
          value: 'sketch',
          label: '카테고리3-1-2'
        }, {
          value: 'jiaohu',
          label: '카테고리3-1-3'
        }]
      }]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
<style>
.my_input {
  width: 100px;
  position: absolute;
  top: 200px;
  left: 120px;
}
.my_input div {
  margin: 5px 0;
}
.myInput {
  font-size: 13px;
}
.myInput .el-input__inner {
  height: 32px;
  padding: 6px 12px;
  color: #222;
  line-height: 32px;
  border-radius: 0;
  border: 1px solid #ddd;
}
.myInput .el-input__inner:hover {
  border: 1px solid #aaa;
}
.myInput .el-input__inner::placeholder {
  color: #222;
  opacity: 0.38;
}
.myInput.el-input.is-disabled .el-input__inner {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}
.tips_border .el-input__inner,
.tips_border .el-input__inner:hover {
  border: 1px solid #fa2828;
}
.icon_input .el-input__inner {
  padding: 6px 14px 6px 12px;
  width: calc(100% - 32px);
}
.icon_input .el-input__suffix {
  right: 0px;
  height: 30px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  border-left: 0;
}
.icon_input .el-input__suffix-inner {
  display: inline-block;
  height: 30px;
}
.icon_input .date_icon {
  width: 31px;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
}
.icon_input .date_icon::before {
  content: "";
  background: url("../assets/images/ic-calendar.svg") no-repeat 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.myInput.icon_input.is-disabled .date_icon::before {
  opacity: 0.2;
}
.mySelect .el-input {
  font-size: 13px;
}
.mySelect .el-input__inner {
  height: 32px;
  line-height: 32px;
  color: #333;
  border-radius: 0;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  padding: 6px 30px 6px 12px;
}
.mySelect .el-input__suffix {
  right: 0;
}
.mySelect .el-icon-arrow-up:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-top.svg") no-repeat 100%;
}
.mySelect .is-focus .el-input__inner {
  border: 1px solid #aaa;
}
.mySelect .el-input__inner:hover {
  border: 1px solid #aaa;
}

.mySelect .is-disabled .el-icon-arrow-up:before {
  opacity: 0.2;
}
</style>
<style>
.select_pop {
  border: 1px solid #aaa;
  border-radius: 0;
}
.select_pop .popper__arrow {
  display: none;
}
.select_pop .el-select-dropdown__list {
  padding: 0;
}
.select_pop .el-select-dropdown__item.hover,
.select_pop .el-select-dropdown__item:hover {
  background-color: #ebe1ff;
}
.el-select-dropdown__item {
  padding: 6px 29px 6px 11px;
  line-height: 20px;
}
.el-select-dropdown__item.selected {
  position: relative;
  color: #333;
  font-weight: 400;
}
.el-select-dropdown__item.selected::after {
  content: "";
  background: url("../assets/images/ic-check-purple.svg") no-repeat 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
}
</style>
