(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{332:function(e,t,a){var l=a(356);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,a(18).default)("797aa073",l,!0,{})},355:function(e,t,a){"use strict";var l=a(332);a.n(l).a},356:function(e,t,a){(e.exports=a(17)(!1)).push([e.i,".curd-example-demo-header {\n  margin-bottom: 10px;\n  text-align: right;\n}\n.curd-example-demo-table .ivu-form-item {\n  margin-bottom: 0;\n}\n.curd-example-demo .ivu-table,\n.curd-example-demo .ivu-table-wrapper,\n.curd-example-demo .ivu-table-cell {\n  overflow: visible;\n}\n",""])},373:function(e,t,a){"use strict";a.r(t);const l=[{title:"姓名",key:"name",width:150},{title:"年龄",key:"age",width:90},{title:"性别",key:"gender",width:90},{title:"出生日期",key:"birthday",width:150},{title:"地址",key:"address"},{title:"用户状态",width:100,slot:"status",formFields:[{type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]}]},{title:"操作",slot:"action",width:300,formFields:[{type:"Button",text:"编辑",subtype:"primary",size:"small",action:{type:"event",name:"edit"},inline:!0},{type:"Button",text:"判黑",subtype:"primary",size:"small",confirmPoptip:{title:"确认判黑?",placement:"left"},action:{type:"event",name:"black"},inline:!0,hiddenOn:{status:[{type:"enum",enum:["2"]}]}},{type:"Button",text:"洗白",subtype:"primary",size:"small",confirmPoptip:{title:"确定洗白?",placement:"left"},action:{type:"event",name:"white"},inline:!0,hiddenOn:{status:[{type:"enum",enum:["1"]}]}},{type:"Button",text:"删除",subtype:"error",size:"small",confirmPoptip:{title:"确定删除?",placement:"left"},action:{type:"event",name:"delete"},inline:!0}]}],i=[{name:"王小明",age:18,gender:"男",birthday:"1999-2-21",address:"北京市朝阳区芍药居",status:"1"},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23",address:"北京市海淀区西二旗",status:"1"},{name:"李小红",age:30,gender:"女",birthday:"1987-11-10",address:"上海市浦东新区世纪大道",status:"2"},{name:"周小伟",age:26,gender:"男",birthday:"1991-10-10",address:"深圳市南山区深南大道",status:"1"}],n=[{type:"Input",label:"姓名",model:"name",placeholder:"请输入姓名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]},{type:"InputNumber",label:"年龄",model:"age",placeholder:"请输入年龄",required:!0,max:150,min:0},{type:"Select",label:"性别",model:"gender",placeholder:"请输入性别",required:!0,options:[{label:"男",value:"男"},{label:"女",value:"女"},{label:"保密",value:"保密"}]},{type:"DatePicker",label:"日期",subtype:"date",model:"birthday",placeholder:"请输入出生日期",required:!0},{type:"Input",label:"地址",model:"address",placeholder:"请输入地址",required:!0},{type:"Submit",subtype:"primary",text:"保存"}];var o={data:()=>({columns:l,data:i,editModel:{},editFormFields:n,editDialogOpeon:!1}),methods:{handleCreateButtonClick(){this.editModel={type:"add",status:"1"},this.editDialogOpeon=!0},handleButtonEvent(e,t,a){this[e.name](t,a)},edit(e,t){this.editModel=e,this.editModel.index=t,this.editDialogOpeon=!0},delete(e,t){this.data.splice(t,1)},handleSave(){this.$refs.FormGenerator.submit().then(()=>{if("add"===this.editModel.type)return this.editModel.type="",void this.data.unshift(this.editModel);this.data.splice(this.editModel.index,1,this.editModel),this.editModel.index=-1,this.editDialogOpeon=!1}).catch(e=>{console.log(e)})},black(e,t){console.log(e,t)},white(e,t){console.log(e,t)}}},d=(a(355),a(0)),r=Object(d.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curd-example-demo"},[a("h3",{staticClass:"curd-example-demo-header"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleCreateButtonClick}},[e._v("创建用户")])],1),e._v(" "),a("Table",{staticClass:"curd-example-demo-table",attrs:{columns:e.columns,data:e.data},scopedSlots:e._u([e._l(e.columns,function(t){return{key:t.slot,fn:function(l){var i=l.row,n=l.index;return[a("Form",{key:t.slot,attrs:{model:i}},e._l(t.formFields,function(t,l){return a("FieldGenerator",{key:l,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,i,n)}}})}),1)]}}})],null,!0)}),e._v(" "),a("Modal",{attrs:{title:"编辑","footer-hide":""},model:{value:e.editDialogOpeon,callback:function(t){e.editDialogOpeon=t},expression:"editDialogOpeon"}},[a("FormGenerator",{ref:"FormGenerator",attrs:{fields:e.editFormFields,model:e.editModel},on:{"on-submit":e.handleSave}})],1)],1)},[],!1,null,null,null).exports;t.default=r}}]);