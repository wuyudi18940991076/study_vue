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
  </div>
</template>
<script>
export default {
  name: 'myPopup',
  props: { 'message': String },
  data () {
    return {
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
    }
  }
}
</script>
<style>
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
.pop_type1 .my_message{
  margin-bottom: 10px;
  color: #555;
  font-size: 13px;
  line-height: 20px;
}
</style>
