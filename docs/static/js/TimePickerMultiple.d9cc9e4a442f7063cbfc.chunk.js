(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{199:function(e,t,n){var o=n(205);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(13).default)("e91641ce",o,!0,{})},200:function(e,t,n){var o=n(207);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(13).default)("81bb6994",o,!0,{})},201:function(e,t,n){var o=n(209);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(13).default)("ef5e7348",o,!0,{})},202:function(e,t,n){"use strict";n(213),n(84),n(83);var o=n(214),i=n.n(o),a=(n(215),n(216)),s=n.n(a),l={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,i.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,i.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new s.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let o=e.match(n);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},d=(n(204),n(206),n(0)),r=Object(d.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);t.a=r.exports},203:function(e,t,n){"use strict";n(83);var o=n(212),i={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},a=(n(208),n(0)),s=Object(a.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=s.exports},204:function(e,t,n){"use strict";var o=n(199);n.n(o).a},205:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},206:function(e,t,n){"use strict";var o=n(200);n.n(o).a},207:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},208:function(e,t,n){"use strict";var o=n(201);n.n(o).a},209:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},230:function(e,t,n){var o=n(269);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(13).default)("60f06380",o,!0,{})},268:function(e,t,n){"use strict";var o=n(230);n.n(o).a},269:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.fg-ivu-datepicker[data-v-44c0e966] {\n    margin-top: 20px;\n}\n",""])},321:function(e,t,n){"use strict";n.r(t);var o=n(210),i=n(211),a=n(202),s=n(203);let l={data:{field:{type:"TimePickerMultiple",model:"time",tips:"格式：05:00~06:00",format:"HH:mm",timeSplit:"~"},model:{time:["08:10~12:00"]}}};l.code="\n<script>\nconst field = "+JSON.stringify(l.data.field,null,4)+";\nconst model = "+JSON.stringify(l.data.model,null,4)+';\nexport default {\n    data() {\n        return {\n            field,\n            model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var d={simple:l},r={components:{iArticle:o.a,inAnchor:i.a,iCode:a.a,Demo:s.a},data:()=>({code:d}),methods:{handleFieldChange(e,t){console.log(e,t)}}},c=(n(268),n(0)),p=Object(c.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("TimePickerMultiple 多行时间选择器")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("选择或输入标准时间，支持选择范围。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("绑定的值的名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("time")])]),e._v(" "),n("tr",[n("td",[e._v("size")]),e._v(" "),n("td",[e._v("尺寸，可选值为large、small、default或者不设置")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用选择器")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("placeholder")]),e._v(" "),n("td",[e._v("占位文本")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("editable")]),e._v(" "),n("td",[e._v("文本框是否可以输入，只在没有使用 slot 时有效")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true")])]),e._v(" "),n("tr",[n("td",[e._v("clearable")]),e._v(" "),n("td",[e._v("是否显示清除按钮")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("true")])]),e._v(" "),n("tr",[n("td",[e._v("tips")]),e._v(" "),n("td",[e._v("输入框后面的提示文案")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("无")])]),e._v(" "),n("tr",[n("td",[e._v("timeSplit")]),e._v(" "),n("td",[e._v("添加后的记录，时间段之间的分隔符")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v(" - ")])])])]),e._v(" "),n("inAnchor",{attrs:{title:"TimePickerMultiple events",h2:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("事件名")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("返回值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("on-change")]),e._v(" "),n("td",[e._v("添加或者删除记录时触发")]),e._v(" "),n("td",[e._v("Array")]),e._v(" "),n("td",[e._v("已经格式化后的时间，比如 ['00:10:00 - 12:00:00', '13:00:00 - 16:00:00']")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("设置属性 type 为 timerange 显示选择单个时间和选择范围时间类型。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1)],1)])},[],!1,null,"44c0e966",null).exports;t.default=p}}]);