(function(e){function a(a){for(var l,o,i=a[0],u=a[1],s=a[2],d=0,p=[];d<i.length;d++)o=i[d],n[o]&&p.push(n[o][0]),n[o]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(e[l]=u[l]);c&&c(a);while(p.length)p.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],l=!0,i=1;i<t.length;i++){var u=t[i];0!==n[u]&&(l=!1)}l&&(r.splice(a--,1),e=o(o.s=t[0]))}return e}var l={},n={index:0},r=[];function o(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=l,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)o.d(t,l,function(a){return e[a]}.bind(null,l));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=a,i=i.slice();for(var s=0;s<i.length;s++)a(i[s]);var c=u;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("c31f")},"055a":function(e,a,t){"use strict";var l=t("c7e9"),n=t.n(l);n.a},"42b1":function(e,a,t){"use strict";var l=t("a2c1"),n=t.n(l);n.a},6623:function(e,a,t){},"6a12":function(e,a,t){"use strict";var l=t("7d94"),n=t.n(l);n.a},"7d94":function(e,a,t){},"8cee":function(e,a,t){"use strict";var l=t("6623"),n=t.n(l);n.a},a2c1:function(e,a,t){},c31f:function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("097d");var l=t("2b0e"),n=t("e069"),r=t.n(n),o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("demo")],1)},i=[],u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h2",[t("Icon",{attrs:{type:"logo-buffer"}}),e._v("DEMO")],1),t("Collapse",{attrs:{accordion:""},model:{value:e.defaultName,callback:function(a){e.defaultName=a},expression:"defaultName"}},[t("Panel",{attrs:{name:"1"}},[e._v("\n            搜索框\n            "),t("div",{attrs:{slot:"content"},slot:"content"},[t("search-form",{attrs:{objData:e.aSearch,bhidLable:!0},on:{handleFormSubmit:e.handleSearch}})],1)]),t("Panel",{attrs:{name:"2"}},[e._v("\n            分页table\n            "),t("div",{attrs:{slot:"content"},slot:"content"},[t("table-paging",{attrs:{columns:e.aTableColumns,data:e.aTableData,pagination:e.objPageControl,loading:!1,"show-header":!0,stripe:!0,border:!0,disHover:!1,height:!1,width:!1},on:{selectChange:e.selectChange,changePage:e.changePage,changePageSize:e.changePageSize}})],1)]),t("Panel",{attrs:{name:"3"}},[e._v("\n            合并table\n            "),t("div",{attrs:{slot:"content"},slot:"content"},[t("table-combine",{attrs:{id:"zzp",columns:e.aTableColumns,data:e.aTableData,border:!0,disHover:!0},on:{changePageSize:e.changePageSize}})],1)]),t("Panel",{attrs:{name:"4"}},[e._v("\n            合并table\n            "),t("div",{attrs:{slot:"content"},slot:"content"},[t("table-edit",{attrs:{columns:e.aTableColumnsEdit,data:e.aTableDataEdit,border:!0,disHover:!0}}),t("Button",{on:{click:e.handleLook}},[e._v("控制台查看数据")])],1)])],1)],1)},s=[],c={name:"demo",props:{},data:function(){return{defaultName:"1",aSearch:[{type:"select",label:"下拉框",value:"select",required:!0,clearable:!0,filterable:!0,defaultValue:"1",placeholder:"请选择",data:[{name:"option1",value:"1"},{name:"option2",value:"2"}]},{type:"radio",label:"单选框",value:"radio",defaultValue:"1",required:!0,placeholder:"请选择",data:[{name:"check1",value:"1"},{name:"check2",value:"2"}]},{type:"input",value:"input",label:"输入框",prefix:"ios-contact",suffix:"ios-search",required:!0,placeholder:"请输入"},{type:"inputNumber",value:"inputNumber",label:"数字输入框",required:!0,placeholder:"请输入"},{type:"date",label:"开始时间",dateType:"month",value:"begin",format:"yyyy-MM",required:!0,placeholder:"选择开始时间",limit:{up:"2018-01-01 00:00:00"}},{type:"date",label:"结束时间",dateType:"month",value:"end",format:"yyyy-MM",required:!0,placeholder:"选择结束时间",limit:{up:"2018-01-01 00:00:00",down:"2015-01-01 00:00:00"}}],aTableData:[{key1:"aaa",key2:"bbb",key3:"ccc"},{key1:"aaa",key2:"bbb",key3:"ccc"},{key1:"111",key2:"222",key3:"333"}],aTableColumns:[{type:"selection",width:60,align:"center"},{key:"key1",combine:!0,title:"第一个"},{key:"key2",title:"第二个"},{key:"key3",combine:!0,title:"第三个"}],aTableColumnsEdit:[{key:"key1",title:"第一列",edit:{type:"input",key:"key1"}},{key:"key2",title:"第二列",edit:{type:"inputNumber",key:"key2"}},{key:"key3",title:"第三列",edit:{type:"select",key:"key3",option:[]}}],aTableDataEdit:[{key1:"aaa",key2:11,key3:"a"},{key1:"aaa",key2:22,key3:"b"},{key1:"111",key2:44,key3:"c"}],objPageControl:{total:100,pageSize:10,currentPage:1}}},methods:{handleSearch:function(e){console.log("search",e)},selectChange:function(e){console.log("selectChange",e)},changePage:function(e){console.log("page",e)},changePageSize:function(e){console.log("pageSize",e)},handleLook:function(){console.log(11,this.aTableDataEdit)}},mounted:function(){var e=this;setTimeout(function(){e.aTableColumnsEdit[2].edit.option=[{value:"a",label:"000-00"},{value:"b",label:"111-00"},{value:"c",label:"222-00"},{value:"d",label:"333-00"},{value:"e",label:"444-00"}]},500)}},d=c,p=(t("8cee"),t("2877")),b=Object(p["a"])(d,u,s,!1,null,"72e38808",null);b.options.__file="demo.vue";var h=b.exports,m={name:"app",components:{demo:h}},f=m,v=(t("42b1"),Object(p["a"])(f,o,i,!1,null,null,null));v.options.__file="App.vue";var g=v.exports,y=(t("dcad"),t("7f7f"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("Form",{ref:"submitForm",attrs:{autocomplete:"on",model:e.objFormData,"label-width":e.bhidLable?null:100}},[e.objData.length>4?t("Row",{attrs:{gutter:20}},[t("Col",{attrs:{span:"22"}},[t("Row",{attrs:{type:"flex",justify:"start",gutter:10}},e._l(e.objData,function(a,l){return t("Col",{key:l,attrs:{span:"6"}},["select"==a.type?t("div",[t("FormItem",{attrs:{label:e.bhidLable?null:a.label,prop:a.required?a.value:null,rules:a.required?{required:!0,message:a.label+"不能为空！",trigger:"change"}:null}},[t("Select",{attrs:{value:a.defaultValue||null,clearable:a.clearable||!1,filterable:a.filterable||!1,placeholder:a.placeholder},on:{"on-change":function(t){return e.handleSelectChange(t,a.value)}}},e._l(a.data,function(a){return t("Option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.name))])}))],1)],1):"radio"==a.type?t("div",[t("FormItem",{attrs:{label:e.bhidLable?null:a.label,prop:a.required?a.value:null,rules:a.required?{required:!0,message:a.label+"不能为空！",trigger:"change"}:null}},[t("RadioGroup",{attrs:{value:a.defaultValue||null},on:{"on-change":function(t){return e.handleSelectChange(t,a.value)}}},e._l(a.data,function(a){return t("Radio",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.name))])}))],1)],1):"input"==a.type?t("div",[t("FormItem",{attrs:{label:e.bhidLable?null:a.label,prop:a.required?a.value:null,rules:a.required?{required:!0,message:a.label+"不能为空！",trigger:"input"}:null}},[t("Input",{attrs:{prefix:a.prefix||"",suffix:a.suffix||"",placeholder:a.placeholder,clearable:""},model:{value:e.objFormData[a.value],callback:function(t){e.$set(e.objFormData,a.value,t)},expression:"objFormData[item.value]"}})],1)],1):"inputNumber"==a.type?t("div",[t("FormItem",{attrs:{label:e.bhidLable?null:a.label,prop:a.required?a.value:null,rules:a.required?{required:!0,message:a.label+"不能为空！",trigger:"blur",type:"number"}:null}},[t("InputNumber",{attrs:{min:1,placeholder:a.placeholder},model:{value:e.objFormData[a.value],callback:function(t){e.$set(e.objFormData,a.value,t)},expression:"objFormData[item.value]"}})],1)],1):"date"==a.type?t("div",[t("FormItem",{attrs:{label:e.bhidLable?null:a.label,prop:a.required?a.value:null,rules:a.required?{required:!0,message:a.label+"不能为空！",trigger:"change"}:null}},[t("DatePicker",{attrs:{type:a.dateType,options:e.dateLimit(a.limit),value:e.objFormData[a.value],format:e.objFormData[a.format],placeholder:a.placeholder},on:{"on-change":function(t){e.dataChange(t,a.value)}}})],1)],1):e._e()])}))],1),t("Col",{attrs:{span:"2"}},[t("Button",{attrs:{type:"primary"},on:{click:function(a){e.handleSubmit("submitForm")}}},[e._v("搜索")])],1)],1):t("Row",{attrs:{gutter:10,type:"flex",justify:"start"}},[e._l(e.objData,function(a,l){return t("Col",{key:l,attrs:{span:"5"}},["select"==a.type?t("div",[t("FormItem",{attrs:{label:e.bhidLable?null:a.label,prop:a.required?a.value:null,rules:a.required?{required:!0,message:a.label+"不能为空！",trigger:"change"}:null}},[t("Select",{attrs:{value:a.defaultValue||null,clearable:a.clearable||!1,filterable:a.filterable||!1,placeholder:a.placeholder},on:{"on-change":function(t){return e.handleSelectChange(t,a.value)}}},e._l(a.data,function(a){return t("Option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.name))])}))],1)],1):"radio"==a.type?t("div",[t("FormItem",{attrs:{label:e.bhidLable?null:a.label,prop:a.required?a.value:null,rules:a.required?{required:!0,message:a.label+"不能为空！",trigger:"change"}:null}},[t("RadioGroup",{attrs:{value:a.defaultValue||null},on:{"on-change":function(t){return e.handleSelectChange(t,a.value)}}},e._l(a.data,function(a){return t("Radio",{key:a.value,attrs:{label:a.value}},[e._v(e._s(a.name))])}))],1)],1):"input"==a.type?t("div",[t("FormItem",{attrs:{label:e.bhidLable?null:a.label,prop:a.required?a.value:null,rules:a.required?{required:!0,message:a.label+"不能为空！",trigger:"input"}:null}},[t("Input",{attrs:{placeholder:a.placeholder,clearable:""},model:{value:e.objFormData[a.value],callback:function(t){e.$set(e.objFormData,a.value,t)},expression:"objFormData[item.value]"}})],1)],1):"inputNumber"==a.type?t("div",[t("FormItem",{attrs:{label:e.bhidLable?null:a.label,prop:a.required?a.value:null,rules:a.required?{required:!0,message:a.label+"不能为空！",trigger:"blur",type:"number"}:null}},[t("InputNumber",{attrs:{min:1,placeholder:a.placeholder},model:{value:e.objFormData[a.value],callback:function(t){e.$set(e.objFormData,a.value,t)},expression:"objFormData[item.value]"}})],1)],1):"date"==a.type?t("div",[t("FormItem",{attrs:{label:e.bhidLable?null:a.label,prop:a.required?a.value:null,rules:a.required?{required:!0,message:a.label+"不能为空！",trigger:"change"}:null}},[t("DatePicker",{attrs:{type:a.dateType,options:e.dateLimit(a.limit),value:e.objFormData[a.value],format:e.objFormData[a.format],placeholder:a.placeholder},on:{"on-change":function(t){e.dataChange(t,a.value)}}})],1)],1):e._e()])}),t("Col",{attrs:{span:"4"}},[t("Button",{attrs:{type:"primary"},on:{click:function(a){e.handleSubmit("submitForm")}}},[e._v("搜索")])],1)],2)],1)}),w=[],k={name:"search-form",props:{objData:Array,bhidLable:Boolean},data:function(){return{objFormData:{},objExample:[{type:"select",label:"下拉框",value:"select",placeholder:"请选择",data:[{name:"option1",value:"1"},{name:"option2",value:"2"}]},{type:"radio",label:"单选框",value:"radio",required:!0,placeholder:"请选择",data:[{name:"check1",value:"1"},{name:"check2",value:"2"}]},{type:"input",value:"input",lable:"输入框",required:!0,placeholder:"请输入"},{type:"inputNumber",value:"inputNumber",lable:"数字输入框",required:!0,placeholder:"请输入"},{type:"date",label:"时间/日期",dateType:"month",value:"begin",format:"yyyy-MM",placeholder:"选择开始时间",limit:{up:"2018-01-01 00:00:00",down:"2015-01-01 00:00:00"}}]}},methods:{handleSelectChange:function(e,a){this.objFormData[a]=e},dateLimit:function(e){return{disabledDate:function(a){return a&&a.valueOf()>new Date(e.up)||a&&a.valueOf()<new Date(e.down)}}},handleSubmit:function(e){var a=this;this.$refs[e].validate(function(e){e?a.$emit("handleFormSubmit",a.objFormData):a.$Message.error("搜索参数不符合规则!")})},dataChange:function(e,a){this.objFormData[a]=e}},mounted:function(){var e=this;this.objData.map(function(a){"select"!=a.type&&"radio"!=a.type||a.defaultValue&&(e.objFormData[a.value]=a.defaultValue)})}},_=k,j=(t("055a"),Object(p["a"])(_,y,w,!1,null,"0fa7e57b",null));j.options.__file="search-form.vue";var q=j.exports,C=q,S=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.loading?t("Spin",{attrs:{size:"large",fix:""}}):e._e(),t("Table",{attrs:{size:e.size?e.size:"small",data:e.data,columns:e.columns,stripe:!!e.stripe&&e.stripe,border:!!e.border&&e.border,"show-header":!e.showHeader||e.showHeader,width:e.width?e.width:"",height:e.height?e.height:"","disabled-hover":!!e.disHover&&e.disHover,"row-class-name":e.rowClassName},on:{"on-selection-change":e.selectChange}}),e.pagination?t("Row",{style:{marginTop:"10px",width:e.width?e.width+"px":"100%"},attrs:{type:"flex",justify:"end"}},[t("Col",[t("Page",{attrs:{size:"small",pageSize:e.pagination.pageSize,total:e.pagination.total,current:e.pagination.currentPage,"show-total":"","show-sizer":"","show-elevator":"","page-size-opts":[10,50,100]},on:{"on-change":e.changePage,"on-page-size-change":e.changePageSize}})],1)],1):e._e()],1)},D=[],F={name:"table-paging",props:["data","columns","stripe","border","showHeader","width","height","disHover","loading","rowClassName","size","pagination"],data:function(){return{}},methods:{changePage:function(e){this.$emit("changePage",e)},changePageSize:function(e){this.$emit("changePageSize",e)},selectChange:function(e){this.$emit("selectChange",e)}},mounted:function(){}},x=F,z=Object(p["a"])(x,S,D,!1,null,null,null);z.options.__file="table-paging.vue";var P=z.exports,N=P,T=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.loading?t("Spin",{attrs:{size:"large",fix:""}}):e._e(),t("Table",{attrs:{id:"tableCombine"+e.id,size:e.size?e.size:"small",data:e.data,columns:e.columns,stripe:!!e.stripe&&e.stripe,border:!!e.border&&e.border,"show-header":!e.showHeader||e.showHeader,width:e.width?e.width:"",height:e.height?e.height:"","disabled-hover":!!e.disHover&&e.disHover,"row-class-name":e.rowClassName},on:{"on-selection-change":e.selectChange}})],1)},H=[],O={name:"table-combine",props:["id","data","columns","stripe","border","showHeader","width","height","disHover","loading","rowClassName","size"],data:function(){return{}},methods:{selectChange:function(e){this.$emit("selectChange",e)},combineCell:function(){var e=document.getElementById("tableCombine"+this.id),a=e.querySelector(".ivu-table").querySelector(".ivu-table-body").querySelector(".ivu-table-tbody").querySelectorAll("tr"),t=this.data,l=[];this.columns.map(function(e){l=e.children?l.concat(e.children):l.concat(e)}),l.map(function(e){if(e.combine){var a=e.key,l=0;while(l<t.length){t[l][a+"_num"]=1,t[l][a+"_isNone"]=!1;for(var n=l+1;n<=t.length-1;n++){if(t[l][a]!=t[n][a]||""==t[l][a])break;t[l][a+"_num"]++,t[l][a+"_isNone"]=!1,t[n][a+"_num"]=1,t[n][a+"_isNone"]=!0}l=n}}}),l.map(function(e,l){e.combine&&t.map(function(t,n){a[n].querySelectorAll("td")[l].rowSpan=t[e.key+"_num"],t[e.key+"_isNone"]&&(a[n].querySelectorAll("td")[l].style.display="none")})})}},mounted:function(){this.combineCell()}},I=O,L=Object(p["a"])(I,T,H,!1,null,null,null);L.options.__file="table-combine.vue";var $=L.exports,E=$,M=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[e.loading?t("Spin",{attrs:{size:"large",fix:""}}):e._e(),t("Table",{attrs:{size:e.size?e.size:"small",data:e.data,columns:e.columns,stripe:!!e.stripe&&e.stripe,border:!!e.border&&e.border,"show-header":!e.showHeader||e.showHeader,width:e.width?e.width:"",height:e.height?e.height:"","disabled-hover":!!e.disHover&&e.disHover,"row-class-name":e.rowClassName}})],1)},V=[],R=function(e,a,t,l){return e("Input",{props:{value:a.row[t]},on:{"on-blur":function(e){a.row[t]=e.target.value,l[a.index][t]=e.target.value}}})},A=function(e,a,t,l){return e("InputNumber",{class:"cell-input-number",props:{min:1,activeChange:!1,number:!0,value:a.row[t]},on:{"on-change":function(e){a.row[t]=e,l[a.index][t]=e}}})},B=function(e,a,t,l,n){return e("Select",{props:{value:a.row[t]},on:{"on-change":function(e){a.row[t]=e,l[a.index][t]=e}}},[n.map(function(a){return e("Option",{props:{value:a.value,label:a.label}})})])},G={name:"table-edit",props:["data","columns","stripe","border","showHeader","width","height","disHover","loading","rowClassName","size"],data:function(){return{}},watch:{columns:function(){this.init()}},methods:{init:function(){var e=this;this.columns.map(function(a){if(a.edit)switch(a.edit.type){case"input":a.render=function(t,l){return R(t,l,a.edit.key,e.data)};break;case"inputNumber":a.render=function(t,l){return A(t,l,a.edit.key,e.data)};break;case"select":a.render=function(t,l){return B(t,l,a.edit.key,e.data,a.edit.option)};break;default:break}})}},created:function(){this.init()},mounted:function(){}},J=G,K=(t("6a12"),Object(p["a"])(J,M,V,!1,null,null,null));K.options.__file="table-edit.vue";var Q=K.exports,U=Q,W=[C,N,E,U],X=function e(a){e.installed||W.map(function(e){return a.component(e.name,e)})};"undefined"!==typeof window&&window.Vue&&X(window.Vue);var Y={install:X,searchForm:C,tablePaging:N,tableCombine:E,tableEdit:U};l["default"].config.productionTip=!1,l["default"].use(r.a),l["default"].use(Y),new l["default"]({render:function(e){return e(g)}}).$mount("#app")},c7e9:function(e,a,t){}});
//# sourceMappingURL=index.6a7b2bce.js.map