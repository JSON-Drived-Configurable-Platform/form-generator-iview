(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{199:function(e,t,n){var o=n(205);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(13).default)("e91641ce",o,!0,{})},200:function(e,t,n){var o=n(207);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(13).default)("81bb6994",o,!0,{})},201:function(e,t,n){var o=n(209);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(13).default)("ef5e7348",o,!0,{})},202:function(e,t,n){"use strict";n(213),n(84),n(83);var o=n(214),l=n.n(o),d=(n(215),n(216)),a=n.n(d),i={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data(){return{openScale:!1,code:"",copied:!1,docLang:this.$lang,title:"Code"}},computed:{language(){return"auto"==this.lang?"":this.lang}},mounted(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,l.a.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,l.a.highlightBlock(this.$refs.code2);const e=this.$parent.$parent.$parent;"Demo"===e.$options.name&&(this.title=e.title)},methods:{clip(){const e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),t=new a.a(".copy",{text:()=>e});t.on("success",e=>{e.clearSelection(),t.destroy(),this.copied=!0,"zh-CN"===this.docLang?this.$Message.success("代码已复制到剪贴板"):this.$Message.success("Code copied"),setTimeout(()=>{this.copied=!1},2e3)})},scale(){this.openScale=!0},getSource(e,t){const n=new RegExp("<"+t+"[^>]*>");let o=e.match(n);return o?(o=o[0],e.slice(e.indexOf(o)+o.length,e.lastIndexOf("</"+t+">"))):""},openFiddle(){}}},s=(n(204),n(206),n(0)),r=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{class:{bg:e.bg}},[n("code",{ref:"code",class:e.language},[e._t("default")],2)]),e._v(" "),n("span",{staticClass:"scale",on:{click:e.scale}},[n("Tooltip",{attrs:{content:e.$t("index.code_fullscreen"),placement:"top",transfer:""}},[n("Icon",{attrs:{type:"md-qr-scanner",size:"18"}})],1)],1),e._v(" "),n("span",{staticClass:"copy",on:{click:e.clip}},[n("Tooltip",{attrs:{content:e.$t("index.code_copy"),placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.copied,expression:"!copied"}],attrs:{type:"md-copy",size:"18"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"md-checkmark",size:"18"}})],1)],1),e._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:e.title,width:"65"},model:{value:e.openScale,callback:function(t){e.openScale=t},expression:"openScale"}},[n("pre",{class:{bg:e.bg}},[e._v("            "),n("code",{ref:"code2",class:e.language}),e._v("\n        ")])])],1)},[],!1,null,"7df69c7c",null);t.a=r.exports},203:function(e,t,n){"use strict";n(83);var o=n(212),l={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{isCodeHide(){return this.hideCode},isVertical(){return this.vertical},codeHeight(){let e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e},style(){let e={opacity:1};return this.isCodeHide&&!this.showCode&&(e.opacity=0),e},title_link(){return o.a.getFirstLetter(this.title).replace(/\s/g,"_")}},watch:{settingCode(){this.showCode=!1,this.showMore=!0,this.ready=!1,this.init()}},mounted(){this.init()},methods:{init(){this.$nextTick(()=>{const e=this.$children[0].$children[0].$el.clientHeight,t=this.$children[0].$children[1].$el.clientHeight+20;this.code_height=t,t<=e&&!this.isCodeHide&&(this.showMore=!1),this.demo_height=this.isCodeHide?30:e,this.ready=!0})}}},d=(n(208),n(0)),a=Object(d.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Row",{staticClass:"example",class:{"example-vertical":e.isVertical},attrs:{id:e.title_link}},[n("i-col",{staticClass:"example-demo",attrs:{span:e.isVertical?24:10}},[n("div",{staticClass:"example-case"},[e._t("demo")],2),e._v(" "),n("header",{staticClass:"example-header"},[n("span",[e._v("\n                "+e._s(e.title)+"\n                "),n("a",{attrs:{href:"#"+e.title_link,"data-title":e.title}},[e._v("#")])])]),e._v(" "),n("div",{staticClass:"example-desc"},[e._t("desc")],2)]),e._v(" "),n("div",{staticClass:"example-split"}),e._v(" "),n("i-col",{staticClass:"example-code",style:e.codeHeight,attrs:{span:e.isVertical?24:14}},[n("div",{style:e.style},[e._t("code")],2),e._v(" "),e.showMore?n("div",{staticClass:"example-code-more",on:{click:function(t){e.showCode=!e.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),e._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),e._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:e.isCodeHide&&!e.showCode,expression:"isCodeHide && !showCode"}],attrs:{type:"text"}},["zh-CN"===e.lang?[e._v("显示代码")]:[e._v("Show Code")]],2)],1):e._e()])],1)},[],!1,null,null,null);t.a=a.exports},204:function(e,t,n){"use strict";var o=n(199);n.n(o).a},205:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\ndiv[data-v-7df69c7c]{\n    position: relative;\n    font-size: 14px;\n}\nspan.copy[data-v-7df69c7c], span.scale[data-v-7df69c7c], span.open-fiddle[data-v-7df69c7c]{\n    border-radius: 0 0 3px 3px;\n    padding: 2px 5px;\n    position: absolute;\n    top: 5px;\n    right: 0;\n    color: #b2b2b2;\n    cursor: pointer;\n}\nspan.scale[data-v-7df69c7c]{\n    right: 25px;\n}\nspan.open-fiddle[data-v-7df69c7c]{\n    right: 50px;\n}\n.bg[data-v-7df69c7c] {\n    margin: 20px auto;\n}\n.bg + span.copy[data-v-7df69c7c]{\n    right: 5px;\n}\nspan.copy[data-v-7df69c7c]:hover, span.scale[data-v-7df69c7c]:hover, span.open-fiddle[data-v-7df69c7c]:hover{\n    color: #5c6b77;\n}\n\n",""])},206:function(e,t,n){"use strict";var o=n(200);n.n(o).a},207:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,"\n.code-scale-modal .ivu-modal-body{\n    background-color: #f7f7f7;\n}\n.code-scale-modal pre{\n    font-size: 14px;\n}\n",""])},208:function(e,t,n){"use strict";var o=n(201);n.n(o).a},209:function(e,t,n){(e.exports=n(12)(!1)).push([e.i,".example {\n  border: 1px solid #eee;\n  border-radius: 6px;\n  margin-bottom: 20px;\n  position: relative;\n  transition: all 0.2s ease-in-out;\n}\n.example:hover {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.15);\n  border-color: transparent;\n  position: relative;\n}\n.example-split {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 42%;\n  border: 1px dashed #eee;\n}\n.example-vertical .example-split {\n  width: 100%;\n  float: left;\n  position: relative;\n  left: 0;\n}\n.example-demo {\n  padding: 20px 0;\n  position: relative;\n}\n.example-case {\n  padding: 0 20px;\n}\n.example-header {\n  font-weight: 500;\n  margin: 30px 0 10px;\n  position: relative;\n}\n.example-header span {\n  display: inline-block;\n  background: #fff;\n  padding: 0 5px 0 18px;\n  position: relative;\n  margin-left: 30px;\n  font-size: 14px;\n}\n.example-header span a {\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.example-header:hover span a {\n  opacity: 1;\n}\n.example-header:before {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 1px;\n  background: #eee;\n  position: absolute;\n  top: 10px;\n  left: 0;\n}\n.example-desc {\n  font-size: 12px;\n  padding: 0 20px;\n}\n.example-desc p {\n  font-size: 12px !important;\n  text-align: justify;\n}\n.example-desc ul li {\n  font-size: 12px !important;\n}\n.example-desc blockquote {\n  font-size: 12px !important;\n}\n.example-code {\n  padding: 0 10px;\n  position: relative;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n}\n.example-code-more {\n  position: absolute;\n  bottom: 0;\n  left: 4px;\n  right: 4px;\n  text-align: center;\n  cursor: pointer;\n  padding: 5px 0;\n  /*transition: background .1s ease-in-out;*/\n}\n.example-code-more:after {\n  content: '';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0 -15px 30px #fff inset;\n}\n.example-code-more i {\n  position: relative;\n  top: 5px;\n  z-index: 2;\n}\n.example-code-more .ivu-btn {\n  padding: 0 0 4px;\n  position: relative;\n  top: 4px;\n  z-index: 2;\n}\n.example-code-more:hover {\n  /*background: #fff;*/\n}\n.example-code-more:hover i {\n  color: #5cb85c;\n}\n",""])},323:function(e,t,n){"use strict";n.r(t);var o=n(210),l=n(211),d=n(202),a=n(203);let i={};const s={type:"InputNumber",model:"age",max:10,min:1},r={type:"InputNumber",model:"stepage",step:1.2,max:10,min:1},c={type:"InputNumber",model:"stepage",step:1.2,max:10,min:1,size:"small"},p={type:"InputNumber",model:"stepage",step:1.2,max:10,min:1,size:"large",disabled:!0},m={type:"InputNumber",model:"stepage",step:1.2,max:10,min:1,size:"large",readonly:!0},v={age:1};i.data={field:s,stepField:r,smallField:c,largeField:{type:"InputNumber",model:"stepage",step:1.2,max:10,min:1,size:"large"},disabledField:p,readonlyField:m,model:v},i.code="\n<script>\nconst field = "+JSON.stringify(s,null,4)+";\nconst model = "+JSON.stringify(v,null,4)+';\nexport default {\n    data() {\n        return {\n            field: field,\n            model: model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',i.stepCode="\n<script>\nconst stepField = "+JSON.stringify(r,null,4)+";\nconst model = "+JSON.stringify(v,null,4)+';\nexport default {\n    data() {\n        return {\n            field: stepField,\n            model: model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',i.smallCode="\n<script>\nconst smallField = "+JSON.stringify(c,null,4)+";\nconst model = "+JSON.stringify(v,null,4)+';\nexport default {\n    data() {\n        return {\n            field: smallField,\n            model: model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',i.disabledCode="\n<script>\nconst disabledField = "+JSON.stringify(p,null,4)+";\nconst model = "+JSON.stringify(v)+';\nexport default {\n    data() {\n        return {\n            field: disabledField,\n            model: model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n',i.readonlyCode="\n<script>\nconst readonlyField = "+JSON.stringify(m,null,4)+";\nconst model = "+JSON.stringify(v)+';\nexport default {\n    data() {\n        return {\n            field: readonlyField,\n            model: model\n        };\n    }\n    methods: {\n        handleFieldChange(model, value) {\n            console.log(model, value);\n        }\n    }\n};\n<script>\n<template>\n    <Form :model="model">\n        <FieldGenerator\n            :field="field"\n            @on-field-change="handleFieldChange"\n        />\n    </Form>\n</template>\n';var h={simple:i},_={components:{iArticle:o.a,inAnchor:l.a,iCode:d.a,Demo:a.a},data:()=>({code:h}),methods:{handleFieldChange(e,t){console.log(e,t)}}},u=n(0),f=Object(u.a)(_,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i-article",[n("article",[n("h1",[e._v("InputNumber 数值输入")]),e._v(" "),n("inAnchor",{attrs:{title:"概述",h2:""}}),e._v(" "),n("p",[e._v("使用鼠标或键盘输入一定范围的标准数值。")]),e._v(" "),n("div",{staticClass:"api"},[n("inAnchor",{attrs:{title:"配置快速查询",h2:""}}),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("model")]),e._v(" "),n("td",[e._v("绑定的值的名称")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不可为空")])]),e._v(" "),n("tr",[n("td",[e._v("type")]),e._v(" "),n("td",[e._v("InputNumber")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("不可为空")])]),e._v(" "),n("tr",[n("td",[e._v("max")]),e._v(" "),n("td",[e._v("最大值")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("Infinity")])]),e._v(" "),n("tr",[n("td",[e._v("min")]),e._v(" "),n("td",[e._v("最小值")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("-Infinity")])]),e._v(" "),n("tr",[n("td",[e._v("step")]),e._v(" "),n("td",[e._v("每次改变的步伐，可以是小数")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("1")])]),e._v(" "),n("tr",[n("td",[e._v("size")]),e._v(" "),n("td",[e._v("输入框尺寸，可选值为large、small、default或者不填")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("设置禁用状态")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("placeholder")]),e._v(" "),n("td",[e._v("占位文本")]),e._v(" "),n("td",[e._v("String")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("readonly")]),e._v(" "),n("td",[e._v("是否设置为只读")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("precision")]),e._v(" "),n("td",[e._v("数值精度")]),e._v(" "),n("td",[e._v("Number")]),e._v(" "),n("td",[e._v("-")])])])])],1),e._v(" "),n("inAnchor",{attrs:{title:"代码示例",h2:""}}),e._v(" "),n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("field")]),e._v(", "),n("code",[e._v("model")]),e._v("即可生成一个InputNumber。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.code))])],1),e._v(" "),n("Demo",{attrs:{title:"小数"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.stepField},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("step")]),e._v("属性控制每次改变的精度。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.stepCode))])],1),e._v(" "),n("Demo",{attrs:{title:"尺寸"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.smallField},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.simple.data.field},on:{"on-field-change":e.handleFieldChange}}),e._v(" "),n("FieldGenerator",{attrs:{field:e.code.simple.data.largeField},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("size")]),e._v(", 属性为"),n("code",[e._v("model")]),e._v("即可生成一个InputNumber。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.smallCode))])],1),e._v(" "),n("Demo",{attrs:{title:"disabled"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.disabledField},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("disabled")]),e._v("属性禁用输入框，点击按钮切换状态。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.disabledCode))])],1),e._v(" "),n("Demo",{attrs:{title:"readonly(只读)"}},[n("div",{attrs:{slot:"demo"},slot:"demo"},[n("Form",{attrs:{model:e.code.simple.data.model}},[n("FieldGenerator",{attrs:{field:e.code.simple.data.readonlyField},on:{"on-field-change":e.handleFieldChange}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[e._v("通过设置"),n("code",[e._v("step")]),e._v("属性控制每次改变的精度。")])]),e._v(" "),n("i-code",{attrs:{slot:"code",lang:"html"},slot:"code"},[e._v(e._s(e.code.simple.readonlyCode))])],1)],1)])},[],!1,null,null,null).exports;t.default=f}}]);