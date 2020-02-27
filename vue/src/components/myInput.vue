<template>
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
</template>
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
      value2: ''
    }
  }
}
</script>
<style scoped>
.my_input {
  width: 100px;
  position: absolute;
  top: 200px;
  left: 120px;
}
.my_input >>> div {
  margin: 5px 0;
}
.myInput {
  font-size: 13px;
}
.myInput >>> .el-input__inner {
  height: 32px;
  padding: 6px 12px;
  color: #222;
  line-height: 32px;
  border-radius: 0;
  border: 1px solid #ddd;
}
.myInput >>> .el-input__inner:hover {
  border: 1px solid #aaa;
}
.myInput >>> .el-input__inner::placeholder {
  color: #222;
  opacity: 0.38;
}
.myInput.el-input.is-disabled >>> .el-input__inner {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}
.tips_border >>> .el-input__inner,
.tips_border >>> .el-input__inner:hover {
  border: 1px solid #fa2828;
}
.icon_input >>> .el-input__inner {
  padding: 6px 14px 6px 12px;
  width: calc(100% - 32px);
}
.icon_input >>> .el-input__suffix {
  right: 0px;
  height: 30px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  border-left: 0;
}
.icon_input >>> .el-input__suffix-inner {
  display: inline-block;
  height: 30px;
}
.icon_input >>> .date_icon {
  width: 31px;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
}
.icon_input >>> .date_icon::before {
  content: "";
  background: url("../assets/images/ic-calendar.svg") no-repeat 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.myInput.icon_input.is-disabled >>> .date_icon::before {
  opacity: 0.2;
}
.mySelect >>> .el-input {
  font-size: 13px;
}
.mySelect >>> .el-input__inner {
  height: 32px;
  line-height: 32px;
  color: #333;
  border-radius: 0;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  padding: 6px 30px 6px 12px;
}
.mySelect >>> .el-input__suffix {
  right: 0;
}
.mySelect >>> .el-icon-arrow-up:before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-arrow-solid-top.svg") no-repeat 100%;
}
.mySelect >>> .is-focus .el-input__inner {
  border: 1px solid #aaa;
}
.mySelect >>> .el-input__inner:hover {
  border: 1px solid #aaa;
}

.mySelect >>> .is-disabled .el-icon-arrow-up:before {
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
