(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{736:function(e,t,a){var i=a(785);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(45).default)("8e1dea4a",i,!0,{})},737:function(e,t,a){var i=a(787);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(45).default)("54967073",i,!0,{})},738:function(e,t,a){var i=a(789);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,a(45).default)("028fda26",i,!0,{})},784:function(e,t,a){"use strict";var i=a(736);a.n(i).a},785:function(e,t,a){(e.exports=a(44)(!1)).push([e.i,".curd-example-demo-header {\n  margin-bottom: 10px;\n  text-align: right;\n}\n.curd-example-demo-table .ivu-form-item {\n  margin-bottom: 0;\n}\n.curd-example-demo .ivu-table,\n.curd-example-demo .ivu-table-wrapper,\n.curd-example-demo .ivu-table-cell {\n  overflow: visible;\n}\n",""])},786:function(e,t,a){"use strict";var i=a(737);a.n(i).a},787:function(e,t,a){(e.exports=a(44)(!1)).push([e.i,".curd-example-demo .ivu-poptip-rel {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.curd-example-demo .ivu-poptip-body-content {\n  overflow: visible;\n}\n.curd-example-demo-header {\n  margin-bottom: 10px;\n  text-align: right;\n}\n.curd-example-demo-table .ivu-form-item {\n  margin-bottom: 0;\n}\n.curd-example-demo .ivu-table,\n.curd-example-demo .ivu-table-wrapper,\n.curd-example-demo .ivu-table-cell {\n  overflow: visible;\n}\n",""])},788:function(e,t,a){"use strict";var i=a(738);a.n(i).a},789:function(e,t,a){(e.exports=a(44)(!1)).push([e.i,".fg-searchform-demo .nav-right {\n  text-align: right;\n}\n.fg-searchform-demo .content {\n  margin: 0 auto;\n  padding: 0 50px;\n}\n.fg-searchform-demo .tablewp {\n  margin-bottom: 30px;\n}\n.fg-searchform-demo .nocontent {\n  margin: 283px 0 414px;\n  text-align: center;\n}\n.fg-searchform-demo .nocontent .title {\n  font-size: 16px;\n  color: #666;\n}\n",""])},811:function(e,t,a){"use strict";a.r(t);var i=a(67),n=a.n(i),l=(a(179),e=>"Array"===(e=>Object.prototype.toString.call(e).slice(8,-1))(e)),s={props:{model:{type:Object,default:()=>({})},fields:{type:Array,default:()=>[]},options:{type:Object,default:()=>({})},totalNum:{type:Number,default:0}},data:()=>({isAjax:!1}),created(){},mounted(){},methods:{handelFieldChange(e,t,a){a.changeToSearch&&this.fetchData()},handelButtonClick(){this.fetchData()},handelInputPress(e){13===e.keyCode&&this.fetchData()},fetchData(e){var t={pageSize:this.options.pageSize||12};for(var a in this.model.page=e||1,this.model){var i=this.model[a];"ALL"===i||""===i||l(i)&&0===i.length||(t[a]="object"==typeof i?JSON.stringify(i):i)}if(this.$emit("on-search-field-change",t),this.options.apiBase){if(this.isAjax)return;this.isAjax=!0,n.a.get(this.options.apiBase).then(e=>{this.$emit("on-search-data-change",e),this.isAjax=!1}).catch(e=>{this.$emit("on-search-data-error",e),this.isAjax=!1})}}}},o=a(1),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fg-filter-form"},[a("formGenerator",{attrs:{options:e.options,model:e.model,fields:e.fields},on:{"on-field-change":e.handelFieldChange,"on-button-event":e.handelButtonClick},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.handelInputPress(t))}}}),e._v(" "),e._t("default"),e._v(" "),e.options.showPage?a("Page",{staticClass:"fg-filter-form-page",attrs:{current:e.model.page,"page-size":e.options.pageSize,total:e.totalNum,"show-total":e.options.showPageTotal},on:{"on-change":e.fetchData}}):e._e()],2)}),[],!1,null,null,null).exports,d={model:{plt:"ALL",status:"ALL"},options:{labelWidth:70,pageSize:5,showPage:!0,showPageTotal:!0,title:"我的表单"},data:[{name:"王小明",age:18,gender:"男",birthday:"1999-2-21"},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23"},{name:"李晓红",age:30,gender:"女",birthday:"1987-11-10"},{name:"周小伟",age:26,gender:"男",birthday:"1991-10-10"},{name:"张大明",age:18,gender:"男",birthday:"1999-2-21"},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23"},{name:"李小红",age:30,gender:"女",birthday:"1987-11-10"},{name:"周晓伟",age:26,gender:"男",birthday:"1991-10-10"}],columns:[{title:"姓名",key:"name"},{title:"年龄",key:"age"},{title:"性别",key:"gender"},{title:"出生日期",key:"birthday"}],fields:[{type:"DatePicker",model:"createDate",subType:"daterange",label:"创建日期",labelWidth:60,inline:!0,width:290,clearable:!0},{type:"Input",model:"name",label:"姓名",labelWidth:36,inline:!0,width:280,clearable:!0},{type:"Select",model:"gender",label:"性别",inline:!0,width:180,changeToSearch:!0,options:[{label:"全部",value:"ALL"},{label:"男",value:"男"},{label:"女",value:"女"}]},{type:"Button",model:"search",subType:"primary",labelWidth:10,inline:!0,text:"搜索",action:{type:"event"}}]},p={components:{SearchForm:r},data:()=>({totalNum:0,config:d,list:[],firstLoad:!1,isAjax:!1}),mounted(){this.$refs.searchForm.fetchData()},methods:{handelSearchFieldChange(e){this.isAjax||(this.isAjax=!0,this.totalNum=0,this.list=[],setTimeout(()=>{var t=d.data.filter(t=>!(e.name&&-1===t.name.indexOf(e.name)||e.gender&&e.gender!==t.gender)),a={totalNum:t.length,list:t};this.totalNum=a.totalNum,this.list=a.list,this.firstLoad=!0,this.isAjax=!1},300))},handelRefresh(){this.$refs.searchForm.fetchData()}}},m=(a(788),Object(o.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fg-searchform-demo"},[a("div",{staticClass:"content"},[a("p",{staticClass:"nav-right"},[e._v("共"+e._s(e.totalNum)+"个记录，共"+e._s(Math.ceil(e.totalNum/e.config.options.pageSize))+"页")]),e._v(" "),a("SearchForm",{ref:"searchForm",attrs:{model:e.config.model,options:e.config.options,fields:e.config.fields,"total-num":e.totalNum},on:{"on-search-field-change":e.handelSearchFieldChange}},[e._t("default",[e.list.length>0?a("Table",{staticClass:"tablewp",attrs:{columns:e.config.columns,data:e.list}}):a("div",{staticClass:"nocontent"},[!e.isAjax&&e.firstLoad?a("p",{staticClass:"title"},[e._v("\n                        还没有记录\n                    ")]):a("p",{staticClass:"title"},[e._v("加载中...")])])])],2)],1)])}),[],!1,null,null,null).exports);t.default=m},865:function(e,t,a){"use strict";a.r(t);var i=[{title:"姓名",key:"name",width:150},{title:"年龄",slot:"age",width:90,poptip:{title:"年龄",formFields:[{type:"InputNumber",model:"age"},{type:"Submit",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/submit",desc:"编辑年龄"},apiParams:["age","name"],inline:!0}]}},{title:"性别",key:"gender",width:90},{title:"出生日期",key:"birthday",width:150},{title:"地址",key:"address"},{title:"图片",slot:"city",width:150,formFields:[{type:"Carousel",model:"city",valueAsOptions:!0}]},{title:"用户状态",width:100,slot:"status",formFields:[{type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]}]},{title:"操作",slot:"action",width:300,formFields:[{type:"Button",text:"编辑",subtype:"primary",size:"small",action:{type:"event",name:"edit"},inline:!0},{type:"Button",text:"判黑",subtype:"primary",size:"small",confirmPoptip:{title:"确认判黑?",placement:"left"},action:{type:"event",name:"black"},inline:!0,hiddenOn:{status:[{type:"enum",enum:["2"]}]}},{type:"Button",text:"洗白",subtype:"primary",size:"small",confirmPoptip:{title:"确定洗白?",placement:"left"},action:{type:"event",name:"white"},inline:!0,hiddenOn:{status:[{type:"enum",enum:["1"]}]}},{type:"Button",text:"删除",subtype:"error",size:"small",confirmPoptip:{title:"确定删除?",placement:"left"},action:{type:"event",name:"delete"},inline:!0}]}],n=[{name:"王小明",age:18,gender:"男",birthday:"1999-2-21",address:"北京市朝阳区芍药居",status:"1",city:[{url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"}]},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23",address:"北京市海淀区西二旗",status:"1",city:[{value:"beijing",label:"北京",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"}]},{name:"李小红",age:30,gender:"女",birthday:"1987-11-10",address:"上海市浦东新区世纪大道",status:"2",city:[{value:"beijing",label:"北京",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{value:"shanghai",label:"上海",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"}]},{name:"周小伟",age:26,gender:"男",birthday:"1991-10-10",address:"深圳市南山区深南大道",status:"1",city:[{value:"beijing",label:"北京",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574076041&di=dba60f4ce2b9330e330f13546ce963a0&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.ijointoo.com%2Fdata%2Fnews%2Fimages%2F1521193045383.jpg"},{value:"shanghai",label:"上海",url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573481458804&di=5814ac5f18a6f1e9e67aa92db3557f84&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1503%2F18%2Fc27%2F4042859_1426655007661_mthumb.jpg"}]}],l=[{type:"Input",label:"姓名",model:"name",placeholder:"请输入姓名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]},{type:"InputNumber",label:"年龄",model:"age",placeholder:"请输入年龄",required:!0,max:150,min:0},{type:"Select",label:"性别",model:"gender",placeholder:"请输入性别",required:!0,options:[{label:"男",value:"男"},{label:"女",value:"女"},{label:"保密",value:"保密"}]},{type:"DatePicker",label:"日期",subtype:"date",model:"birthday",placeholder:"请输入出生日期",required:!0},{type:"Input",label:"地址",model:"address",placeholder:"请输入地址",required:!0},{type:"Submit",subtype:"primary",text:"保存"}],s={data:()=>({columns:i,data:n,editModel:{},editFormFields:l,editDialogOpeon:!1}),computed:{apiBase:()=>"http://"+window.location.hostname+":"+window.location.port},methods:{handleCreateButtonClick(){this.editModel={type:"add",status:"1"},this.editDialogOpeon=!0},handleSubmit(e){var{valid:t,model:a,field:i,res:n}=e;t&&0==+n.status?this.$Message.success(i.action.desc+"成功<br/>"+JSON.stringify(a)):this.$Message.success(i.action.desc+"失败!")},handleSave(){this.$refs.FormGenerator.submit().then(()=>{if("add"===this.editModel.type)return this.editModel.type="",this.data.unshift(this.editModel),void(this.editDialogOpeon=!1);this.data.splice(this.editModel.index,1,this.editModel),this.editModel.index=-1,this.editDialogOpeon=!1}).catch(e=>{console.log(e)})},handleButtonEvent(e,t,a){this[e.name](t,a)},edit(e,t){this.editModel=e,this.editModel.index=t,this.editDialogOpeon=!0},delete(e,t){this.$Message.success("删除"+t+":"+JSON.stringify(e)+"!"),this.data.splice(t,1)},black(e,t){this.$Message.success("拉黑"+t+":"+JSON.stringify(e)+"!")},white(e,t){this.$Message.success("洗白"+t+":"+JSON.stringify(e)+"!")}}},o=(a(784),a(1)),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curd-example-demo"},[a("h3",{staticClass:"curd-example-demo-header"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleCreateButtonClick}},[e._v("创建用户")])],1),e._v(" "),a("Table",{staticClass:"curd-example-demo-table",attrs:{columns:e.columns,data:e.data},scopedSlots:e._u([e._l(e.columns,(function(t){return{key:t.slot,fn:function(i){var n=i.row,l=i.index;return[a("Form",{key:t.slot,attrs:{model:n}},[t.poptip?a("Poptip",{attrs:{placement:"right-start"}},[a("span",[e._v(e._s(n[t.slot]))]),e._v(" "),a("Icon",{attrs:{type:"md-create"}}),e._v(" "),a("div",{attrs:{slot:"title"},slot:"title"},[a("i",[e._v(e._s(t.poptip.title))])]),e._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},e._l(t.poptip.formFields,(function(t,i){return a("FieldGenerator",{key:i,attrs:{"api-base":e.apiBase,field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,n,l)},"on-submit":e.handleSubmit}})})),1)],1):e._l(t.formFields,(function(t,i){return a("FieldGenerator",{key:i,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,n,l)},"on-submit":e.handleSubmit}})}))],2)]}}}))],null,!0)}),e._v(" "),a("Modal",{attrs:{title:"编辑","footer-hide":""},model:{value:e.editDialogOpeon,callback:function(t){e.editDialogOpeon=t},expression:"editDialogOpeon"}},[a("FormGenerator",{ref:"FormGenerator",attrs:{fields:e.editFormFields,model:e.editModel},on:{"on-submit":e.handleSave}})],1)],1)}),[],!1,null,null,null);t.default=r.exports},866:function(e,t,a){"use strict";a.r(t);var i=[{title:"姓名",slot:"name",width:100,formFields:[{type:"Button",autoButton:!1,model:"detailRoute",textModel:"name",subtype:"primary",size:"small",action:{type:"route"}}]},{title:"年龄",key:"age",width:90},{title:"性别",key:"gender",width:90},{title:"出生日期",key:"birthday",width:150},{title:"省",slot:"province",width:230,poptip:{title:"编辑地址",displayField:{type:"Select",api:"/selectApi",model:"province",inline:!0,cache:!0,disabled:!0,width:100,size:"small"},formFields:[{type:"Select",api:"/selectApi",model:"province",inline:!0,cache:!0,width:100},{type:"Submit",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit",desc:"编辑地址"},apiParams:["name","province"],inline:!0}]}},{title:"城市",slot:"city",width:230,formFields:[{type:"Select",api:"/selectApi",transfer:!0,model:"city",inline:!0,cache:!0,width:100},{type:"Submit",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit",desc:"编辑城市"},apiParams:["name","province","city"],inline:!0}]},{title:"地址",slot:"address",width:200,poptip:{title:"编辑地址",formFields:[{type:"Input",model:"address",placeholder:"请输入地址",rules:[{type:"string",required:!0}],width:250,inline:!0},{type:"Submit",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit",desc:"编辑地址"},apiParams:["name","address","test"],inline:!0}]}},{title:"用户状态",width:100,slot:"status",formFields:[{type:"Tag",model:"status",options:[{name:"正常",value:"1",color:"primary"},{name:"黑用户",value:"2",color:"error"}]}]},{title:"操作",slot:"action",width:300,formFields:[{type:"Button",text:"编辑",subtype:"primary",size:"small",action:{type:"event",name:"editDialog"},inline:!0},{type:"Submit",text:"判黑",subtype:"primary",size:"small",confirmPoptip:{title:"确认判黑?",placement:"left"},action:{type:"ajax",api:"/curdToBlack",desc:"判黑"},apiParams:["name","status"],inline:!0,hiddenOn:{status:[{type:"enum",enum:["2"]}]}},{type:"Submit",text:"洗白",subtype:"primary",size:"small",confirmPoptip:{title:"确定洗白?",placement:"left"},action:{type:"ajax",api:"/curdToWhite",desc:"洗白"},apiParams:["name","status"],inline:!0,hiddenOn:{status:[{type:"enum",enum:["1"]}]}},{type:"Submit",text:"删除",subtype:"error",size:"small",confirmPoptip:{title:"确定删除?",placement:"left"},action:{type:"ajax",api:"/curdDelete",desc:"删除"},apiParams:["name"],inline:!0},{type:"Button",model:"detailRoute",text:"详情",subtype:"primary",size:"small",action:{type:"route"},apiParams:["name"],inline:!0}]}],n=[{name:"王小明",age:18,gender:"男",birthday:"1999-2-21",province:"Beijing",city:"Beijing",address:"北京市朝阳区芍药居",status:"1",detailRoute:{path:"/home",query:{name:"王小明"}}},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23",province:"Beijing",city:"Beijing",address:"北京市海淀区西二旗",status:"1",detailRoute:{path:"/home",query:{name:"张小刚"}}},{name:"李晓红",age:30,gender:"女",birthday:"1987-11-10",province:"Beijing",city:"Beijing",address:"上海市浦东新区世纪大道",status:"2",detailRoute:{path:"/home",query:{name:"李小红"}}},{name:"周小伟",age:26,gender:"男",birthday:"1991-10-10",province:"Beijing",city:"Beijing",address:"深圳市南山区深南大道",status:"1",detailRoute:{path:"/home",query:{name:"周小伟"}}},{name:"王小明",age:18,gender:"男",birthday:"1999-2-21",province:"Beijing",city:"Beijing",address:"北京市朝阳区芍药居",status:"1",detailRoute:{path:"/home",query:{name:"王小明"}}},{name:"张小刚",age:25,gender:"男",birthday:"1992-1-23",province:"Beijing",city:"Beijing",address:"北京市海淀区西二旗",status:"1",detailRoute:{path:"/home",query:{name:"张小刚"}}},{name:"李小红",age:30,gender:"女",birthday:"1987-11-10",province:"Beijing",city:"Beijing",address:"上海市浦东新区世纪大道",status:"2",detailRoute:{path:"/home",query:{name:"李小红"}}},{name:"周晓伟",age:26,gender:"男",birthday:"1991-10-10",province:"Beijing",city:"Beijing",address:"深圳市南山区深南大道",status:"1",detailRoute:{path:"/home",query:{name:"周小伟"}}}],l=[{type:"Input",label:"姓名",model:"name",placeholder:"请输入姓名",rules:[{type:"string",required:!0,pattern:/^[\u4e00-\u9fa5]+$/,message:"请输入中文姓名"}]},{type:"InputNumber",label:"年龄",model:"age",placeholder:"请输入年龄",required:!0,max:150,min:0},{type:"Select",label:"性别",model:"gender",placeholder:"请输入性别",required:!0,options:[{label:"男",value:"男"},{label:"女",value:"女"},{label:"保密",value:"保密"}]},{type:"DatePicker",label:"日期",subtype:"date",model:"birthday",placeholder:"请输入出生日期",required:!0},{type:"Input",label:"地址",model:"address",placeholder:"请输入地址",required:!0},{type:"CheckboxCard",model:"card",checkAll:!0,pageLation:!0,pageSize:3,headerEditable:!0,footerEditable:!0,cardWidth:"220px",cardHeight:"245px",optionsType:"image",options:"/checkboxCardApi",required:!0},{type:"Submit",text:"保存",subtype:"primary",size:"small",action:{type:"ajax",api:"/curdEdit"},inline:!0,apiParams:"all"}],s={data:()=>({columns:i,data:n,editModel:{},editFormFields:l,editDialogOpen:!1,paramsContainer:{test:"xxx"}}),methods:{handleCreateButtonClick(){this.editModel={type:"add",status:"1"},this.editDialogOpen=!0},handleButtonEvent(e,t,a){this[e.name](t,a,e.type)},handleSubmit(e){var{valid:t,model:a,field:i,res:n}=e;t&&0==+n.status?this.$Message.success(i.action.desc+"成功<br/>"+JSON.stringify(a)):this.$Message.success(i.action.desc+"失败!")},handleSave(){this.$refs.FormGenerator.submit().then(()=>{if("add"===this.editModel.type)return this.editModel.type="",this.data.unshift(this.editModel),void(this.editDialogOpeon=!1);this.data.splice(this.editModel.index,1,this.editModel),this.editModel.index=-1,this.editDialogOpeon=!1}).catch(e=>{console.log(e)})},editDialog(e,t){this.editModel=e,this.editModel.index=t,this.editDialogOpen=!0}}},o=(a(786),a(1)),r=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curd-example-demo"},[a("h3",{staticClass:"curd-example-demo-header"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleCreateButtonClick}},[e._v("创建用户")])],1),e._v(" "),a("Table",{staticClass:"curd-example-demo-table",attrs:{columns:e.columns,data:e.data},scopedSlots:e._u([e._l(e.columns,(function(t){return{key:t.slot,fn:function(i){var n=i.row,l=i.index;return[a("Form",{key:t.slot,attrs:{model:JSON.parse(JSON.stringify(n))}},[t.poptip?a("Poptip",{key:t.slot,attrs:{placement:"left-start"}},[t.poptip.displayField?[a("FieldGenerator",{attrs:{"params-container":e.paramsContainer,field:t.poptip.displayField},on:{"on-button-event":function(t){return e.handleButtonEvent(t,n,l)},"on-submit":e.handleSubmit}})]:[a("span",[e._v(e._s(n[t.slot]))])],e._v(" "),a("Icon",{attrs:{type:"ios-create-outline",size:"20"}}),e._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},e._l(t.poptip.formFields,(function(t,i){return a("FieldGenerator",{key:i,attrs:{"params-container":e.paramsContainer,field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,n,l)},"on-submit":e.handleSubmit}})})),1)],2):e._e(),e._v(" "),t.formFields?a("div",e._l(t.formFields,(function(t,i){return a("FieldGenerator",{key:i,attrs:{field:t},on:{"on-submit":e.handleSubmit,"on-button-event":function(t){return e.handleButtonEvent(t,n,l)}}})})),1):e._e()],1)]}}}))],null,!0)}),e._v(" "),a("Modal",{attrs:{title:"编辑","footer-hide":"",width:"900"},model:{value:e.editDialogOpen,callback:function(t){e.editDialogOpen=t},expression:"editDialogOpen"}},[a("FormGenerator",{ref:"FormGenerator",attrs:{fields:e.editFormFields,model:e.editModel,"params-container":e.paramsContainer},on:{"on-button-event":function(t){return e.handleButtonEvent(t)}}})],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);