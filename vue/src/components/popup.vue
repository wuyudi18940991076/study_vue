<template>
  <div class="popup">
    <div>
      <p class="my_description">下面是第一种pop类型:有两个button</p>
      <el-button type="text" @click="open">第一种pop类型:有两个button</el-button>
    </div>
    <div>
      <p class="my_description">下面是第二种pop类型:有一个button文字增加</p>
      <el-button type="text" @click="open1">第二种pop类型:有一个button</el-button>
    </div>
    <div>
      <p class="my_description">下面是第三种pop类型:里面有选择器</p>
      <el-button type="text" @click="open2">里面有一个选择器</el-button>
      <el-button type="text" @click="open3">里面有两个选择器</el-button>
      <el-button type="text" @click="open4">里面有一段文字一个选择器</el-button>
    </div>
    <div>
      <p class="my_description">下面是带评价的pop</p>
      <el-button type="text" @click="open5">里面有一段文字一个选择器</el-button>
    </div>
    <div>
      <p class="my_description">下面是带树形控件的popup</p>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
      <el-dialog custom-class="pop_type2" title="접수유형 조회" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
          <el-button slot="append" icon="el-icon-search">검색</el-button>
        </el-input>
        <el-button type="primary" class="button_s write_b" plain>모두 펼치기</el-button>
        <el-button type="primary" class="button_s write_b" plain>모두 접기</el-button>
        <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
        </el-tree>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">취소</el-button>
          <el-button type="primary" @click="dialogVisible = false">확인</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: 'myPopup',
  props: { 'message': String },
  data () {
    return {
      dialogVisible: false,
      input3: '',
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    open () {
      const h = this.$createElement
      this.$msgbox({
        title: '티켓 완료',
        customClass: 'pop_type1',
        message: h('p', null, '해당 티켓을 완료 처리 하시겠습니까?'),
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소'
      }).then(action => {
        this.$message({
          type: 'success',
          message: 'action: ' + action
        })
      })
    },
    open1 () {
      const h = this.$createElement
      this.$msgbox({
        title: '상담원 부재중',
        customClass: 'pop_type1',
        message: h('p', null, '해당 티켓을 완료 처리 하시겠습니까?해당 티켓을 완료 처리 하시겠습니까?해당 티켓을 완료 처리 하시겠습니까?해당 티켓을 완료 처리 하시겠습니까?'),
        confirmButtonText: '문의하기'
      }).then(action => {
        this.$message({
          type: 'success',
          message: 'action: ' + action
        })
      })
    },
    open2 () {
      this.$alert('<select class="my_select"><option value ="volvo">중복문의</option><option value ="saab">Saab</option><option value="opel">Opel</option><option value="audi">Audi</option>', 'HTML 片段', {
        dangerouslyUseHTMLString: true,
        customClass: 'pop_type1',
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소'
      })
    },
    open3 () {
      this.$alert('<select class="my_select"><option value ="volvo">중복문의</option><option value ="saab">Saab</option><option value="opel">Opel</option><option value="audi">Audi</option></select><select class="my_select"><option value ="volvo">중복문의</option><option value ="saab">Saab</option><option value="opel">Opel</option><option value="audi">Audi</option></select>', 'HTML 片段', {
        dangerouslyUseHTMLString: true,
        customClass: 'pop_type1',
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소'
      })
    },
    open4 () {
      this.$alert('<p class="my_message">티켓 담당자가 본인으로 변경됩니다.</p></select><select class="my_select"><option value ="volvo">중복문의</option><option value ="saab">Saab</option><option value="opel">Opel</option><option value="audi">Audi</option></select>', 'HTML 片段', {
        dangerouslyUseHTMLString: true,
        customClass: 'pop_type1',
        showCancelButton: true,
        confirmButtonText: '확인',
        cancelButtonText: '취소'
      })
    },
    open5 () {
      this.$alert('<p class="my_message">문의해주셔서 감사합니다.<br>서비스 만족도를 평가해주세요.</p><ul class="evaluate"><li class="satisfy"><a href="javascrpt:;"></a><span>만족</span></li><li class="dissatisfy"><a href=""></a><span>불만족</span></li></ul>', 'HTML 片段', {
        dangerouslyUseHTMLString: true,
        customClass: 'pop_type1',
        confirmButtonText: '확인',
        showInput: true,
        inputPlaceholder: '고객 의견을 입력해주세요.'
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }
  }
}
</script>
<style>
.pop_type2 {
  min-width: 400px;
  max-width: 400px;
  box-sizing: border-box;
  border: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0px 40px;
}
.pop_type2 .el-dialog__header {
  padding: 45px 0px 25px;
  height: 28px;
}
.pop_type2 .el-dialog__header .el-dialog__title {
  color: #000;
  font-size: 19px;
  font-weight: 500;
  line-height: 28px;
}
.pop_type2 .el-dialog__header .el-dialog__headerbtn {
  position: absolute;
  top: 20px;
  right: 20px;
}
.pop_type2 .el-dialog__header .el-icon-close:before {
  position: absolute;
  top: 0px;
  right: 0;
  content: " ";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-close-m.svg") no-repeat 100%;
}
.pop_type2 .el-dialog__body {
  padding: 0 0;
}
.pop_type2 .el-dialog__body .el-input-group {
  padding: 4px 0px;
}
.pop_type2 .el-dialog__body .el-input__inner {
  height: 32px;
  width: 253px;
  padding: 6px 12px;
  margin-right: 4px;
  border-radius: 0;
}
.pop_type2 .el-dialog__body .el-input-group__append,
.pop_type2 .el-input-group__prepend {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 0;
  width: 63px;
  border-radius: 0;
}
.pop_type2 .el-input-group__append .el-button,
.pop_type2 .el-input-group__append .el-select,
.pop_type2 .el-input-group__prepend .el-button,
.pop_type2 .el-input-group__prepend .el-select {
  margin: 0;
  padding: 0;
}
.pop_type2 .el-dialog__body .el-input-group__append .el-icon-search {
  width: 20px;
}
.pop_type2 .el-dialog__body .el-input-group__append .el-icon-search:before {
  position: absolute;
  top: 6px;
  left: 6px;
  content: " ";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-search.svg") no-repeat 100%;
}
.pop_type2 .el-button [class*="el-icon-"] + span {
  margin-left: 1px;
  color: #333;
  font-size: 13px;
}
.pop_type2 .button_s.write_b {
  padding: 0px 8px;
  height: 24px;
  line-height: 24px;
  font-size: 13px;
  text-align: left;
  border-radius: 2px;
  display: inline-block;
  vertical-align: top;
  margin: 4px 0px;
}
.pop_type2 .write_b.el-button--primary {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  color: #333;
}
.pop_type2 .write_b.el-button--primary:active,
.pop_type2 .write_b.el-button--primary:focus,
.pop_type2 .write_b.el-button--primary:hover,
.pop_type2 .write_b.el-button--primary.is-disabled,
.pop_type2 .write_b.el-button--primary.is-disabled:active,
.pop_type2 .write_b.el-button--primary.is-disabled:focus,
.pop_type2 .write_b.el-button--primary.is-disabled:hover {
  color: #333;
  background: #f9f9f9;
  border: 1px solid #aaa;
}
.pop_type2 .write_b.el-button--primary.is-disabled,
.pop_type2 .write_b.el-button--primary.is-disabled:active,
.pop_type2 .write_b.el-button--primary.is-disabled:focus,
.pop_type2 .write_b.el-button--primary.is-disabled:hover {
  opacity: 0.2;
}
.pop_type2 .el-button + .el-button {
  margin-left: 0px;
}
.pop_type2 .el-tree {
  height: 378px;
  border: 1px solid #ddd;
  overflow: auto;
}
.pop_type2 .el-dialog__footer {
  padding: 35px 0px;
}
.pop_type2 .el-dialog__footer .el-button {
  padding: 0px 30px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  color: #fff;
  border: 0px;
}
.pop_type2 .el-dialog__footer .el-button.el-button--default {
  background-color: #aaa;
}
.pop_type2 .el-dialog__footer .el-button.el-button--primary {
  background-color: #6a3ecf;
}
.pop_type2 .el-icon-caret-right:before {
  display: none;
}
.pop_type2 .el-tree .el-tree-node__content {
  height: 40px;
  line-height: 40px;
}
.el-checkbox__inner:hover {
  border-color: #ddd;
}
/* .pop_type2 .el-tree .is-expanded .el-tree-node__children .el-checkbox__inner::after{
  content: "12";
  top: 50%;
  left: 3px;
  width: 6px;
  height: 0.5px;
  background-color: #aaa;
  transform: rotate(0deg) translateY(-50%) scaleY(0.5);
}
.pop_type2 .el-tree .el-tree-node .el-tree-node__content .el-checkbox__inner::after{
content: "+";
  top: 50%;
  left: 3px;
  width: 6px;
  height: 0.5px;
  background-color: #aaa;
  transform: rotate(0deg) translateY(-50%) scaleY(0.5);
} */

/* .el-checkbox__input.is-checked .el-checkbox__inner::after {
  content: "";
  top: 50%;
  left: 3px;
  width: 6px;
  height: 0.5px;
  background-color: #aaa;
  transform: rotate(0deg) translateY(-50%) scaleY(0.5);
} */
/* .el-checkbox__input.is-indeterminate .el-checkbox__inner::before {
  content: "";
  top: 50%;
  left: 3px;
  width: 6px;
  height: 0.5px;
  background-color: #aaa;
  transform: rotate(0deg) translateY(-50%) scaleY(0.5);
} */
/* .el-checkbox__input.is-indeterminate .el-checkbox__inner::before{
content: '+';
    position: static;
    display: inline-flexbox;
    background-color: none;
    height: auto !important;
    transform: auto;
} */
.el-tree-node__content:hover {
  background-color: #ebe1ff;
}
.el-tree-node:focus > .el-tree-node__content {
  background-color: #fff;
  color: #6a3ecf;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #fff;
  border: 1px solid #ddd;
}
/* .el-checkbox__input.is-indeterminate .el-checkbox__inner::before{
content: '1';
} */
.pop_type2
  .el-tree
  .el-tree-node.is-expanded
  .el-tree-node__content
  .el-checkbox__inner::before {
  content: "-";
  font-size: 12px;
  position: absolute;
  top: -2px;
  line-height: 12px;
  text-align: center;
  left: -2px;
  width: 15px;
  height: 15px;
}
.pop_type2
  .el-tree
  .el-tree-node
  .el-tree-node__content
  .el-checkbox__inner::before {
  content: "+";
  font-size: 12px;
  position: absolute;
  top: -1.5px;
  line-height: 12px;
  text-align: center;
  left: -2px;
  width: 15px;
  height: 15px;
  border: 1px solid #ddd;
  transform: scale(1);
}
.el-checkbox__inner {
  border: none;
}
.el-checkbox__inner::after {
  display: none;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  border: none;
}
</style>
<style>
* {
  list-style-type: none;
}
.my_description {
  font-size: 16px;
  margin: 10px 0px;
}
.pop_type1 {
  width: 400px;
  box-sizing: border-box;
  border: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0px 40px;
}
.pop_type1 .el-message-box__header {
  padding: 45px 0px 0px;
  height: 28px;
  line-height: 28px;
}
.pop_type1 .el-message-box__header .el-message-box__title {
  color: #000;
  font-size: 19px;
  font-weight: 500;
  line-height: 28px;
}
.pop_type1 .el-message-box__header .el-message-box__headerbtn {
  position: absolute;
  top: 20px;
  right: -20px;
}
.pop_type1 .el-message-box__headerbtn .el-icon-close:before {
  position: absolute;
  top: 0px;
  right: 0;
  content: " ";
  width: 20px;
  height: 20px;
  background: url("../assets/images/ic-close-m.svg") no-repeat 100%;
}
.pop_type1 .el-message-box__content {
  padding: 25px 0px 0px;
  line-height: 20px;
  color: #555;
  font-size: 14px;
}
.pop_type1 .el-message-box__message p {
  line-height: 20px;
}
.pop_type1 .el-message-box__btns {
  padding: 35px 0px;
}
.pop_type1 .el-button--small,
.pop_type1 .el-button--small.is-round {
  padding: 8px 30px;
  line-height: 24px;
  color: #fff;
  font-size: 15px;
  background-color: #aaa;
  border: 0;
}
.pop_type1 .el-button--primary {
  background-color: #6a3ecf;
}
.pop_type1 .el-message-box__btns button:nth-child(2) {
  margin-left: 4px;
}
.pop_type1 .el-button:focus,
.pop_type1 .el-button:hover {
  background-color: #aaa;
  color: #fff;
}
.pop_type1 .el-button--primary:focus,
.pop_type1 .el-button--primary:hover {
  background-color: #6a3ecf;
}
.pop_type1 .my_select {
  height: 32px;
  margin: 4px 0px;
  width: 100%;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  padding: 6px 30px 6px 12px;
  line-height: 20px;
  color: #333;
  font-size: 13px;
  appearance: none;
  background: url("../assets/images/ic-arrow-solid-bottom.svg") no-repeat scroll
    right 5px center transparent;
}
.pop_type1 .my_select:focus {
  outline: none;
}
.pop_type1 .my_message {
  margin-bottom: 10px;
  color: #555;
  font-size: 13px;
  line-height: 20px;
}
.pop_type1 .evaluate {
  height: 122px;
  width: 100%;
  padding: 0px 63px 22px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.pop_type1 .evaluate li {
  width: 80px;
  text-align: center;
}
.pop_type1 .evaluate li a {
  display: block;
  width: 80px;
  height: 70px;
  margin: auto;
}
.pop_type1 .evaluate li.satisfy a {
  background: url("../assets/images/ic-chat-satisfaction-inactive.svg")
    no-repeat center center;
  background-size: contain;
}
.pop_type1 .evaluate li.satisfy a:active {
  background: url("../assets/images/ic-chat-satisfaction-active.svg") no-repeat
    center center;
  background-size: contain;
}
.pop_type1 .evaluate li.satisfy a:hover {
  background: url("../assets/images/ic-chat-satisfaction-active.svg") no-repeat
    center center;
  background-size: contain;
}
.pop_type1 .evaluate li.dissatisfy a {
  background: url("../assets/images/ic-chat-dissatisfaction-inactive.svg")
    no-repeat center center;
  background-size: contain;
}
.pop_type1 .evaluate li span {
  display: block;
  line-height: 20px;
  color: #333;
}
.pop_type1 .el-message-box__input {
  padding-top: 4px;
}
.pop_type1 .el-message-box__input .el-input__inner {
  height: 32px;
  line-height: 32px;
  padding: 0 12px;
  border: 1px solid #ddd;
}
.pop_type1 .el-message-box__errormsg {
  min-height: 0;
  margin-top: 4px;
}
</style>
