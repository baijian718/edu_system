(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ad70f76"],{1148:function(e,t,r){"use strict";var n=r("a691"),a=r("1d80");e.exports="".repeat||function(e){var t=String(a(this)),r="",o=n(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r}},"13d5":function(e,t,r){"use strict";var n=r("23e7"),a=r("d58f").left,o=r("a640"),i=r("ae40"),u=o("reduce"),s=i("reduce",{1:0});n({target:"Array",proto:!0,forced:!u||!s},{reduce:function(e){return a(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},3042:function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));r("96cf");var n=r("1da1"),a=r("7424"),o=r("b775");function i(e,t,r,n){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark((function e(t,r,n,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o["f"])(a["CourseCreate"],o["a"].POST,{name:r,sn:t,month:n,fee:i}));case 1:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function s(e){return _.apply(this,arguments)}function _(){return _=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o["f"])(a["CourseAll"],o["a"].GET,{name:t}));case 1:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o["f"])(a["CourseStudent"],o["a"].GET,{course_id:t}));case 1:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function f(e,t){return h.apply(this,arguments)}function h(){return h=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o["f"])(a["CourseStudentAddUri"],o["a"].POST,{course_id:t,student_id:r}));case 1:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function d(e,t){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(o["f"])(a["CourseStudentDeleteUri"],o["a"].POST,{course_id:t,student_id:r}));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},3521:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"standard-table"},[r("div",{staticClass:"alert"},[e.selectedRows?r("a-alert",{attrs:{type:"info","show-icon":!0}},[r("div",{staticClass:"message",attrs:{slot:"message"},slot:"message"},[e._v(" 已选择 "),r("a",[e._v(e._s(e.selectedRows.length))]),e._v(" 项 "),r("a",{staticClass:"clear",on:{click:e.onClear}},[e._v("清空")]),e._l(e.needTotalList,(function(t,n){return[t.needTotal?r("div",{key:n},[e._v(" "+e._s(t.title)+"总计 "),r("a",[e._v(e._s(t.customRender?t.customRender(t.total):t.total))])]):e._e()]}))],2)]):e._e()],1),r("a-table",{attrs:{bordered:e.bordered,loading:e.loading,columns:e.columns,dataSource:e.dataSource,rowKey:e.rowKey,pagination:e.pagination,expandedRowKeys:e.expandedRowKeys,expandedRowRender:e.expandedRowRender,rowSelection:e.selectedRows?{selectedRowKeys:e.selectedRowKeys,onSelect:e.onSelect,onSelectAll:e.onSelectAll}:void 0},on:{change:e.onChange},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots).filter((function(e){return"expandedRowRender"!==e})),(function(t){return{key:t,fn:function(r,n,a){return[e._t(t,null,null,{text:r,record:n,index:a})]}}})),{key:e.$scopedSlots.expandedRowRender?"expandedRowRender":"",fn:function(t,r,n,a){return[e._t(e.$scopedSlots.expandedRowRender?"expandedRowRender":"",null,null,{record:t,index:r,indent:n,expanded:a})]}}],null,!0)},[e._l(Object.keys(e.$slots),(function(t){return r("template",{slot:t},[e._t(t)],2)}))],2)],1)},a=[],o=r("c1f7"),i=o["a"],u=(r("8298"),r("2877")),s=Object(u["a"])(i,n,a,!1,null,"6dc1dbc8",null);t["a"]=s.exports},"3f45":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));r("b0c0"),r("96cf");var n=r("1da1"),a=r("7424"),o=r("b775"),i=r("8c7f");function u(e,t){return s.apply(this,arguments)}function s(){return s=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={},t&&(n.name=t),r&&Object(i["count"])(r)>0&&(n.id=r),e.abrupt("return",Object(o["f"])(a["StudentAll"],o["a"].GET,n));case 4:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}},"408a":function(e,t,r){var n=r("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},8298:function(e,t,r){"use strict";var n=r("efe1"),a=r.n(n);a.a},"8c7f":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("d09f");function a(e){return e.length}function o(e){return Array.from(new Set(e)).length}function i(e){return e.length-e.filter((function(e){return[null,void 0,NaN].includes(e)})).length}t.sum=n.sum,t.average=n.average,t.mean=n.mean,t.min=n.min,t.max=n.max,t.median=n.median,t.variance=n.variance,t.stdevp=n.standardDeviation,t.stdev=n.sampleStandardDeviation,t.mode=n.mode,t.product=n.product,t.count=a,t.distinct=o,t.valid=i},b680:function(e,t,r){"use strict";var n=r("23e7"),a=r("a691"),o=r("408a"),i=r("1148"),u=r("d039"),s=1..toFixed,_=Math.floor,c=function(e,t,r){return 0===t?r:t%2===1?c(e,t-1,r*e):c(e*e,t/2,r)},l=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},f=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){s.call({})}));n({target:"Number",proto:!0,forced:f},{toFixed:function(e){var t,r,n,u,s=o(this),f=a(e),h=[0,0,0,0,0,0],d="",p="0",m=function(e,t){var r=-1,n=t;while(++r<6)n+=e*h[r],h[r]=n%1e7,n=_(n/1e7)},v=function(e){var t=6,r=0;while(--t>=0)r+=h[t],h[t]=_(r/e),r=r%e*1e7},w=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==h[e]){var r=String(h[e]);t=""===t?r:t+i.call("0",7-r.length)+r}return t};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(d="-",s=-s),s>1e-21)if(t=l(s*c(2,69,1))-69,r=t<0?s*c(2,-t,1):s/c(2,t,1),r*=4503599627370496,t=52-t,t>0){m(0,r),n=f;while(n>=7)m(1e7,0),n-=7;m(c(10,n,1),0),n=t-1;while(n>=23)v(1<<23),n-=23;v(1<<n),m(1,1),v(2),p=w()}else m(0,r),m(1<<-t,0),p=w()+i.call("0",f);return f>0?(u=p.length,p=d+(u<=f?"0."+i.call("0",f-u)+p:p.slice(0,u-f)+"."+p.slice(u-f))):p=d+p,p}})},c1f7:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4de4"),core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("13d5"),core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("07ac"),core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__),_Users_desert_project_poper_vue_antd_edu_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("5530"),_Users_desert_project_poper_vue_antd_edu_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("2909");__webpack_exports__["a"]={name:"StandardTable",props:{bordered:Boolean,loading:[Boolean,Object],columns:Array,dataSource:Array,rowKey:{type:[String,Function],default:"key"},pagination:{type:[Object,Boolean],default:!0},selectedRows:Array,expandedRowKeys:Array,expandedRowRender:Function},data:function(){return{needTotalList:[]}},methods:{equals:function(e,t){if(e===t)return!0;var r=this.rowKey;return r&&"string"===typeof r?e[r]===t[r]:!(!r||"function"!==typeof r)&&r(e)===r(t)},contains:function(e,t){if(!e||0===e.length)return!1;for(var r=this.equals,n=0;n<e.length;n++)if(r(e[n],t))return!0;return!1},onSelectAll:function(e,t){var r=this,n=this.getKey,a=this.contains,o=this.dataSource.filter((function(e){return!a(t,e,r.rowKey)})),i=this.selectedRows.filter((function(e){return!a(o,e,r.rowKey)})),u={};i.forEach((function(e){return u[n(e)]=e})),t.forEach((function(e){return u[n(e)]=e}));var s=Object.values(u);this.$emit("update:selectedRows",s),this.$emit("selectedRowChange",s.map((function(e){return n(e)})),s)},getKey:function(e){var t=this.rowKey;if(t&&e)return"string"===typeof t?e[t]:t(e)},onSelect:function(e,t){var r=this.equals,n=this.selectedRows,a=this.getKey,o=t?[].concat(Object(_Users_desert_project_poper_vue_antd_edu_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_8__["a"])(n),[e]):n.filter((function(t){return!r(t,e)}));this.$emit("update:selectedRows",o),this.$emit("selectedRowChange",o.map((function(e){return a(e)})),o)},initTotalList:function(e){return e.filter((function(e){return e.needTotal})).map((function(e){return Object(_Users_desert_project_poper_vue_antd_edu_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["a"])(Object(_Users_desert_project_poper_vue_antd_edu_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["a"])({},e),{},{total:0})}))},onClear:function(){this.$emit("update:selectedRows",[]),this.$emit("selectedRowChange",[],[]),this.$emit("clear")},onChange:function(e,t,r,n){var a=n.currentDataSource;this.$emit("change",e,t,r,{currentDataSource:a})}},created:function(){this.needTotalList=this.initTotalList(this.columns)},watch:{selectedRows:function selectedRows(_selectedRows2){this.needTotalList=this.needTotalList.map((function(item){return Object(_Users_desert_project_poper_vue_antd_edu_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["a"])(Object(_Users_desert_project_poper_vue_antd_edu_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["a"])({},item),{},{total:_selectedRows2.reduce((function(sum,val){var v;try{v=val[item.dataIndex]?val[item.dataIndex]:eval("val.".concat(item.dataIndex))}catch(_){v=val[item.dataIndex]}return v=isNaN(parseFloat(v))?0:parseFloat(v),sum+v}),0)})}))}},computed:{selectedRowKeys:function(){var e=this;return this.selectedRows.map((function(t){return e.getKey(t)}))}}}},d09f:function(e,t,r){!function(e,r){r(t)}(0,(function(e){"use strict";function t(e){if(0===e.length)return 0;for(var t,r=e[0],n=0,a=1;a<e.length;a++)t=r+e[a],Math.abs(r)>=Math.abs(e[a])?n+=r-t+e[a]:n+=e[a]-t+r,r=t;return r+n}function r(e){if(0===e.length)throw new Error("mean requires at least one data point");return t(e)/e.length}function n(e,t){var n,a,o=r(e),i=0;if(2===t)for(a=0;a<e.length;a++)i+=(n=e[a]-o)*n;else for(a=0;a<e.length;a++)i+=Math.pow(e[a]-o,t);return i}function a(e){if(0===e.length)throw new Error("variance requires at least one data point");return n(e,2)/e.length}function o(e){if(1===e.length)return 0;var t=a(e);return Math.sqrt(t)}function i(e){if(0===e.length)throw new Error("mode requires at least one data point");if(1===e.length)return e[0];for(var t=e[0],r=NaN,n=0,a=1,o=1;o<e.length+1;o++)e[o]!==t?(n<a&&(n=a,r=t),a=1,t=e[o]):a++;return r}function u(e){return e.slice().sort((function(e,t){return e-t}))}function s(e){if(0===e.length)throw new Error("min requires at least one data point");for(var t=e[0],r=1;r<e.length;r++)e[r]<t&&(t=e[r]);return t}function _(e){if(0===e.length)throw new Error("max requires at least one data point");for(var t=e[0],r=1;r<e.length;r++)e[r]>t&&(t=e[r]);return t}function c(e,t){var r=e.length*t;if(0===e.length)throw new Error("quantile requires at least one data point.");if(t<0||1<t)throw new Error("quantiles must be between 0 and 1");return 1===t?e[e.length-1]:0===t?e[0]:r%1!=0?e[Math.ceil(r)-1]:e.length%2==0?(e[r-1]+e[r])/2:e[r]}function l(e,t,r,n){for(r=r||0,n=n||e.length-1;r<n;){if(600<n-r){var a=n-r+1,o=t-r+1,i=Math.log(a),u=.5*Math.exp(2*i/3),s=.5*Math.sqrt(i*u*(a-u)/a);o-a/2<0&&(s*=-1),l(e,t,Math.max(r,Math.floor(t-o*u/a+s)),Math.min(n,Math.floor(t+(a-o)*u/a+s)))}var _=e[t],c=r,h=n;for(f(e,r,t),e[n]>_&&f(e,r,n);c<h;){for(f(e,c,h),c++,h--;e[c]<_;)c++;for(;e[h]>_;)h--}e[r]===_?f(e,r,h):f(e,++h,n),h<=t&&(r=h+1),t<=h&&(n=h-1)}}function f(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function h(e,t){var r=e.slice();if(Array.isArray(t)){!function(e,t){for(var r=[0],n=0;n<t.length;n++)r.push(m(e.length,t[n]));r.push(e.length-1),r.sort(p);for(var a=[0,r.length-1];a.length;){var o=Math.ceil(a.pop()),i=Math.floor(a.pop());if(!(o-i<=1)){var u=Math.floor((i+o)/2);d(e,r[u],r[i],r[o]),a.push(i,u,u,o)}}}(r,t);for(var n=[],a=0;a<t.length;a++)n[a]=c(r,t[a]);return n}return d(r,m(r.length,t),0,r.length-1),c(r,t)}function d(e,t,r,n){t%1==0?l(e,t,r,n):(l(e,t=Math.floor(t),r,n),l(e,t+1,t+1,n))}function p(e,t){return e-t}function m(e,t){var r=e*t;return 1===t?e-1:0===t?0:r%1!=0?Math.ceil(r)-1:e%2==0?r-.5:r}function v(e,t){if(t<e[0])return 0;if(t>e[e.length-1])return 1;var r=function(e,t){for(var r=0,n=0,a=e.length;n<a;)t<=e[r=n+a>>>1]?a=r:n=-~r;return n}(e,t);if(e[r]!==t)return r/e.length;r++;var n=function(e,t){for(var r=0,n=0,a=e.length;n<a;)t>=e[r=n+a>>>1]?n=-~r:a=r;return n}(e,t);if(n===r)return r/e.length;var a=n-r+1;return a*(n+r)/2/a/e.length}function w(e){var t=h(e,.75),r=h(e,.25);if("number"==typeof t&&"number"==typeof r)return t-r}function g(e){return+h(e,.5)}function M(e){for(var t=g(e),r=[],n=0;n<e.length;n++)r.push(Math.abs(e[n]-t));return g(r)}function b(e,t){t=t||Math.random;for(var r,n,a=e.length;0<a;)n=Math.floor(t()*a--),r=e[a],e[a]=e[n],e[n]=r;return e}function E(e,t){return b(e.slice().slice(),t)}function y(e){for(var t,r=0,n=0;n<e.length;n++)0!==n&&e[n]===t||(t=e[n],r++);return r}function R(e,t){for(var r=[],n=0;n<e;n++){for(var a=[],o=0;o<t;o++)a.push(0);r.push(a)}return r}function O(e,t,r,n){var a;if(0<e){var o=(r[t]-r[e-1])/(t-e+1);a=n[t]-n[e-1]-(t-e+1)*o*o}else a=n[t]-r[t]*r[t]/(t+1);return a<0?0:a}function P(e,t,r,n,a,o,i){if(!(t<e)){var u=Math.floor((e+t)/2);n[r][u]=n[r-1][u-1],a[r][u]=u;var s=r;r<e&&(s=Math.max(s,a[r][e-1]||0)),s=Math.max(s,a[r-1][u]||0);var _,c,l,f=u-1;t<n.length-1&&(f=Math.min(f,a[r][t+1]||0));for(var h=f;s<=h&&!((_=O(h,u,o,i))+n[r-1][s-1]>=n[r][u]);--h)(c=O(s,u,o,i)+n[r-1][s-1])<n[r][u]&&(n[r][u]=c,a[r][u]=s),s++,(l=_+n[r-1][h-1])<n[r][u]&&(n[r][u]=l,a[r][u]=h);P(e,u-1,r,n,a,o,i),P(u+1,t,r,n,a,o,i)}}function q(e,t){if(e.length!==t.length)throw new Error("sampleCovariance requires samples with equal lengths");if(e.length<2)throw new Error("sampleCovariance requires at least two data points in each sample");for(var n=r(e),a=r(t),o=0,i=0;i<e.length;i++)o+=(e[i]-n)*(t[i]-a);return o/(e.length-1)}function D(e){if(e.length<2)throw new Error("sampleVariance requires at least two data points");return n(e,2)/(e.length-1)}function j(e){var t=D(e);return Math.sqrt(t)}function x(e,t,r,n){return(e*t+r*n)/(t+n)}function S(e){if(0===e.length)throw new Error("rootMeanSquare requires at least one data point");for(var t=0,r=0;r<e.length;r++)t+=Math.pow(e[r],2);return Math.sqrt(t/e.length)}function C(){this.totalCount=0,this.data={}}function T(){this.weights=[],this.bias=0}C.prototype.train=function(e,t){for(var r in this.data[t]||(this.data[t]={}),e){var n=e[r];void 0===this.data[t][r]&&(this.data[t][r]={}),void 0===this.data[t][r][n]&&(this.data[t][r][n]=0),this.data[t][r][n]++}this.totalCount++},C.prototype.score=function(e){var t,r={};for(var n in e){var a=e[n];for(t in this.data)r[t]={},this.data[t][n]?r[t][n+"_"+a]=(this.data[t][n][a]||0)/this.totalCount:r[t][n+"_"+a]=0}var o={};for(t in r)for(var i in o[t]=0,r[t])o[t]+=r[t][i];return o},T.prototype.predict=function(e){if(e.length!==this.weights.length)return null;for(var t=0,r=0;r<this.weights.length;r++)t+=this.weights[r]*e[r];return 0<(t+=this.bias)?1:0},T.prototype.train=function(e,t){if(0!==t&&1!==t)return null;e.length!==this.weights.length&&(this.weights=e,this.bias=1);var r=this.predict(e);if(r!==t){for(var n=t-r,a=0;a<this.weights.length;a++)this.weights[a]+=n*e[a];this.bias+=n}return this};var k=1e-4;function A(e){if(e<0)throw new Error("factorial requires a non-negative value");if(Math.floor(e)!==e)throw new Error("factorial requires an integer input");for(var t=1,r=2;r<=e;r++)t*=r;return t}var I=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22],K=Math.log(Math.sqrt(2*Math.PI)),U={1:{.995:0,.99:0,.975:0,.95:0,.9:.02,.5:.45,.1:2.71,.05:3.84,.025:5.02,.01:6.63,.005:7.88},2:{.995:.01,.99:.02,.975:.05,.95:.1,.9:.21,.5:1.39,.1:4.61,.05:5.99,.025:7.38,.01:9.21,.005:10.6},3:{.995:.07,.99:.11,.975:.22,.95:.35,.9:.58,.5:2.37,.1:6.25,.05:7.81,.025:9.35,.01:11.34,.005:12.84},4:{.995:.21,.99:.3,.975:.48,.95:.71,.9:1.06,.5:3.36,.1:7.78,.05:9.49,.025:11.14,.01:13.28,.005:14.86},5:{.995:.41,.99:.55,.975:.83,.95:1.15,.9:1.61,.5:4.35,.1:9.24,.05:11.07,.025:12.83,.01:15.09,.005:16.75},6:{.995:.68,.99:.87,.975:1.24,.95:1.64,.9:2.2,.5:5.35,.1:10.65,.05:12.59,.025:14.45,.01:16.81,.005:18.55},7:{.995:.99,.99:1.25,.975:1.69,.95:2.17,.9:2.83,.5:6.35,.1:12.02,.05:14.07,.025:16.01,.01:18.48,.005:20.28},8:{.995:1.34,.99:1.65,.975:2.18,.95:2.73,.9:3.49,.5:7.34,.1:13.36,.05:15.51,.025:17.53,.01:20.09,.005:21.96},9:{.995:1.73,.99:2.09,.975:2.7,.95:3.33,.9:4.17,.5:8.34,.1:14.68,.05:16.92,.025:19.02,.01:21.67,.005:23.59},10:{.995:2.16,.99:2.56,.975:3.25,.95:3.94,.9:4.87,.5:9.34,.1:15.99,.05:18.31,.025:20.48,.01:23.21,.005:25.19},11:{.995:2.6,.99:3.05,.975:3.82,.95:4.57,.9:5.58,.5:10.34,.1:17.28,.05:19.68,.025:21.92,.01:24.72,.005:26.76},12:{.995:3.07,.99:3.57,.975:4.4,.95:5.23,.9:6.3,.5:11.34,.1:18.55,.05:21.03,.025:23.34,.01:26.22,.005:28.3},13:{.995:3.57,.99:4.11,.975:5.01,.95:5.89,.9:7.04,.5:12.34,.1:19.81,.05:22.36,.025:24.74,.01:27.69,.005:29.82},14:{.995:4.07,.99:4.66,.975:5.63,.95:6.57,.9:7.79,.5:13.34,.1:21.06,.05:23.68,.025:26.12,.01:29.14,.005:31.32},15:{.995:4.6,.99:5.23,.975:6.27,.95:7.26,.9:8.55,.5:14.34,.1:22.31,.05:25,.025:27.49,.01:30.58,.005:32.8},16:{.995:5.14,.99:5.81,.975:6.91,.95:7.96,.9:9.31,.5:15.34,.1:23.54,.05:26.3,.025:28.85,.01:32,.005:34.27},17:{.995:5.7,.99:6.41,.975:7.56,.95:8.67,.9:10.09,.5:16.34,.1:24.77,.05:27.59,.025:30.19,.01:33.41,.005:35.72},18:{.995:6.26,.99:7.01,.975:8.23,.95:9.39,.9:10.87,.5:17.34,.1:25.99,.05:28.87,.025:31.53,.01:34.81,.005:37.16},19:{.995:6.84,.99:7.63,.975:8.91,.95:10.12,.9:11.65,.5:18.34,.1:27.2,.05:30.14,.025:32.85,.01:36.19,.005:38.58},20:{.995:7.43,.99:8.26,.975:9.59,.95:10.85,.9:12.44,.5:19.34,.1:28.41,.05:31.41,.025:34.17,.01:37.57,.005:40},21:{.995:8.03,.99:8.9,.975:10.28,.95:11.59,.9:13.24,.5:20.34,.1:29.62,.05:32.67,.025:35.48,.01:38.93,.005:41.4},22:{.995:8.64,.99:9.54,.975:10.98,.95:12.34,.9:14.04,.5:21.34,.1:30.81,.05:33.92,.025:36.78,.01:40.29,.005:42.8},23:{.995:9.26,.99:10.2,.975:11.69,.95:13.09,.9:14.85,.5:22.34,.1:32.01,.05:35.17,.025:38.08,.01:41.64,.005:44.18},24:{.995:9.89,.99:10.86,.975:12.4,.95:13.85,.9:15.66,.5:23.34,.1:33.2,.05:36.42,.025:39.36,.01:42.98,.005:45.56},25:{.995:10.52,.99:11.52,.975:13.12,.95:14.61,.9:16.47,.5:24.34,.1:34.28,.05:37.65,.025:40.65,.01:44.31,.005:46.93},26:{.995:11.16,.99:12.2,.975:13.84,.95:15.38,.9:17.29,.5:25.34,.1:35.56,.05:38.89,.025:41.92,.01:45.64,.005:48.29},27:{.995:11.81,.99:12.88,.975:14.57,.95:16.15,.9:18.11,.5:26.34,.1:36.74,.05:40.11,.025:43.19,.01:46.96,.005:49.65},28:{.995:12.46,.99:13.57,.975:15.31,.95:16.93,.9:18.94,.5:27.34,.1:37.92,.05:41.34,.025:44.46,.01:48.28,.005:50.99},29:{.995:13.12,.99:14.26,.975:16.05,.95:17.71,.9:19.77,.5:28.34,.1:39.09,.05:42.56,.025:45.72,.01:49.59,.005:52.34},30:{.995:13.79,.99:14.95,.975:16.79,.95:18.49,.9:20.6,.5:29.34,.1:40.26,.05:43.77,.025:46.98,.01:50.89,.005:53.67},40:{.995:20.71,.99:22.16,.975:24.43,.95:26.51,.9:29.05,.5:39.34,.1:51.81,.05:55.76,.025:59.34,.01:63.69,.005:66.77},50:{.995:27.99,.99:29.71,.975:32.36,.95:34.76,.9:37.69,.5:49.33,.1:63.17,.05:67.5,.025:71.42,.01:76.15,.005:79.49},60:{.995:35.53,.99:37.48,.975:40.48,.95:43.19,.9:46.46,.5:59.33,.1:74.4,.05:79.08,.025:83.3,.01:88.38,.005:91.95},70:{.995:43.28,.99:45.44,.975:48.76,.95:51.74,.9:55.33,.5:69.33,.1:85.53,.05:90.53,.025:95.02,.01:100.42,.005:104.22},80:{.995:51.17,.99:53.54,.975:57.15,.95:60.39,.9:64.28,.5:79.33,.1:96.58,.05:101.88,.025:106.63,.01:112.33,.005:116.32},90:{.995:59.2,.99:61.75,.975:65.65,.95:69.13,.9:73.29,.5:89.33,.1:107.57,.05:113.14,.025:118.14,.01:124.12,.005:128.3},100:{.995:67.33,.99:70.06,.975:74.22,.95:77.93,.9:82.36,.5:99.33,.1:118.5,.05:124.34,.025:129.56,.01:135.81,.005:140.17}},L=Math.sqrt(2*Math.PI),B={gaussian:function(e){return Math.exp(-.5*e*e)/L}},W={nrd:function(e){var t=j(e),r=w(e);return"number"==typeof r&&(t=Math.min(t,r/1.34)),1.06*t*Math.pow(e.length,-.2)}};function F(e,t,r){var n,a;if(void 0===t)n=B.gaussian;else if("string"==typeof t){if(!B[t])throw new Error('Unknown kernel "'+t+'"');n=B[t]}else n=t;if(void 0===r)a=W.nrd(e);else if("string"==typeof r){if(!W[r])throw new Error('Unknown bandwidth method "'+r+'"');a=W[r](e)}else a=r;return function(t){var r=0,o=0;for(r=0;r<e.length;r++)o+=n((t-e[r])/a);return o/a/e.length}}var N=Math.sqrt(2*Math.PI);function $(e){for(var t=e,r=e,n=1;n<15;n++)t+=r*=e*e/(2*n+1);return Math.round(1e4*(.5+t/N*Math.exp(-e*e/2)))/1e4}for(var G=[],z=0;z<=3.09;z+=.01)G.push($(z));function V(e){var t=1/(1+.5*Math.abs(e)),r=t*Math.exp(-Math.pow(e,2)-1.26551223+1.00002368*t+.37409196*Math.pow(t,2)+.09678418*Math.pow(t,3)-.18628806*Math.pow(t,4)+.27886807*Math.pow(t,5)-1.13520398*Math.pow(t,6)+1.48851587*Math.pow(t,7)-.82215223*Math.pow(t,8)+.17087277*Math.pow(t,9));return 0<=e?1-r:r-1}function J(e){var t=8*(Math.PI-3)/(3*Math.PI*(4-Math.PI)),r=Math.sqrt(Math.sqrt(Math.pow(2/(Math.PI*t)+Math.log(1-e*e)/2,2)-Math.log(1-e*e)/t)-(2/(Math.PI*t)+Math.log(1-e*e)/2));return 0<=e?r:-r}function H(e){if("number"==typeof e)return e<0?-1:0===e?0:1;throw new TypeError("not a number")}e.linearRegression=function(e){var t,r,n=e.length;if(1===n)r=e[t=0][1];else{for(var a,o,i,u=0,s=0,_=0,c=0,l=0;l<n;l++)u+=o=(a=e[l])[0],s+=i=a[1],_+=o*o,c+=o*i;r=s/n-(t=(n*c-u*s)/(n*_-u*u))*u/n}return{m:t,b:r}},e.linearRegressionLine=function(e){return function(t){return e.b+e.m*t}},e.standardDeviation=o,e.rSquared=function(e,t){if(e.length<2)return 1;for(var r,n=0,a=0;a<e.length;a++)n+=e[a][1];r=n/e.length;for(var o=0,i=0;i<e.length;i++)o+=Math.pow(r-e[i][1],2);for(var u=0,s=0;s<e.length;s++)u+=Math.pow(e[s][1]-t(e[s][0]),2);return 1-u/o},e.mode=function(e){return i(u(e))},e.modeFast=function(e){for(var t,r=new Map,n=0,a=0;a<e.length;a++){var o=r.get(e[a]);void 0===o?o=1:o++,n<o&&(t=e[a],n=o),r.set(e[a],o)}if(0===n)throw new Error("mode requires at last one data point");return t},e.modeSorted=i,e.min=s,e.max=_,e.extent=function(e){if(0===e.length)throw new Error("extent requires at least one data point");for(var t=e[0],r=e[0],n=1;n<e.length;n++)e[n]>r&&(r=e[n]),e[n]<t&&(t=e[n]);return[t,r]},e.minSorted=function(e){return e[0]},e.maxSorted=function(e){return e[e.length-1]},e.extentSorted=function(e){return[e[0],e[e.length-1]]},e.sum=t,e.sumSimple=function(e){for(var t=0,r=0;r<e.length;r++)t+=e[r];return t},e.product=function(e){for(var t=1,r=0;r<e.length;r++)t*=e[r];return t},e.quantile=h,e.quantileSorted=c,e.quantileRank=function(e,t){return v(u(e),t)},e.quantileRankSorted=v,e.interquartileRange=w,e.iqr=w,e.medianAbsoluteDeviation=M,e.mad=M,e.chunk=function(e,t){var r=[];if(t<1)throw new Error("chunk size must be a positive number");if(Math.floor(t)!==t)throw new Error("chunk size must be an integer");for(var n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r},e.sampleWithReplacement=function(e,t,r){if(0===e.length)return[];r=r||Math.random;for(var n=e.length,a=[],o=0;o<t;o++){var i=Math.floor(r()*n);a.push(e[i])}return a},e.shuffle=E,e.shuffleInPlace=b,e.sample=function(e,t,r){return E(e,r).slice(0,t)},e.ckmeans=function(e,t){if(t>e.length)throw new Error("cannot generate more classes than there are data values");var r=u(e);if(1===y(r))return[r];var n=R(t,r.length),a=R(t,r.length);!function(e,t,r){for(var n,a=t[0].length,o=e[Math.floor(a/2)],i=[],u=[],s=0;s<a;++s)n=e[s]-o,0===s?(i.push(n),u.push(n*n)):(i.push(i[s-1]+n),u.push(u[s-1]+n*n)),t[0][s]=O(0,s,i,u),r[0][s]=0;for(var _=1;_<t.length;++_)P(_<t.length-1?_:a-1,a-1,_,t,r,i,u)}(r,n,a);for(var o=[],i=a[0].length-1,s=a.length-1;0<=s;s--){var _=a[s][i];o[s]=r.slice(_,i+1),0<s&&(i=_-1)}return o},e.uniqueCountSorted=y,e.sumNthPowerDeviations=n,e.equalIntervalBreaks=function(e,t){if(e.length<2)return e;for(var r=s(e),n=_(e),a=[r],o=(n-r)/t,i=1;i<t;i++)a.push(a[0]+o*i);return a.push(n),a},e.sampleCovariance=q,e.sampleCorrelation=function(e,t){return q(e,t)/j(e)/j(t)},e.sampleVariance=D,e.sampleStandardDeviation=j,e.sampleSkewness=function(e){if(e.length<3)throw new Error("sampleSkewness requires at least three data points");for(var t,n=r(e),a=0,o=0,i=0;i<e.length;i++)a+=(t=e[i]-n)*t,o+=t*t*t;var u=e.length-1,s=Math.sqrt(a/u),_=e.length;return _*o/((_-1)*(_-2)*Math.pow(s,3))},e.sampleKurtosis=function(e){var t=e.length;if(t<4)throw new Error("sampleKurtosis requires at least four data points");for(var n,a=r(e),o=0,i=0,u=0;u<t;u++)o+=(n=e[u]-a)*n,i+=n*n*n*n;return(t-1)/((t-2)*(t-3))*(t*(t+1)*i/(o*o)-3*(t-1))},e.permutationsHeap=function(e){for(var t=new Array(e.length),r=[e.slice()],n=0;n<e.length;n++)t[n]=0;for(n=0;n<e.length;)if(t[n]<n){var a=0;n%2!=0&&(a=t[n]);var o=e[a];e[a]=e[n],e[n]=o,r.push(e.slice()),t[n]++,n=0}else t[n]=0,n++;return r},e.combinations=function e(t,r){var n,a,o,i,u=[];for(n=0;n<t.length;n++)if(1===r)u.push([t[n]]);else for(o=e(t.slice(n+1,t.length),r-1),a=0;a<o.length;a++)(i=o[a]).unshift(t[n]),u.push(i);return u},e.combinationsReplacement=function e(t,r){for(var n=[],a=0;a<t.length;a++)if(1===r)n.push([t[a]]);else for(var o=e(t.slice(a,t.length),r-1),i=0;i<o.length;i++)n.push([t[a]].concat(o[i]));return n},e.addToMean=function(e,t,r){return e+(r-e)/(t+1)},e.combineMeans=x,e.combineVariances=function(e,t,r,n,a,o){var i=x(t,r,a,o);return(r*(e+Math.pow(t-i,2))+o*(n+Math.pow(a-i,2)))/(r+o)},e.geometricMean=function(e){if(0===e.length)throw new Error("geometricMean requires at least one data point");for(var t=1,r=0;r<e.length;r++){if(e[r]<=0)throw new Error("geometricMean requires only positive numbers as input");t*=e[r]}return Math.pow(t,1/e.length)},e.harmonicMean=function(e){if(0===e.length)throw new Error("harmonicMean requires at least one data point");for(var t=0,r=0;r<e.length;r++){if(e[r]<=0)throw new Error("harmonicMean requires only positive numbers as input");t+=1/e[r]}return e.length/t},e.average=r,e.mean=r,e.median=g,e.medianSorted=function(e){return c(e,.5)},e.subtractFromMean=function(e,t,r){return(e*t-r)/(t-1)},e.rootMeanSquare=S,e.rms=S,e.variance=a,e.tTest=function(e,t){return(r(e)-t)/(o(e)/Math.sqrt(e.length))},e.tTestTwoSample=function(e,t,n){var a=e.length,o=t.length;if(!a||!o)return null;n||(n=0);var i=r(e),u=r(t),s=D(e),_=D(t);if("number"==typeof i&&"number"==typeof u&&"number"==typeof s&&"number"==typeof _){var c=((a-1)*s+(o-1)*_)/(a+o-2);return(i-u-n)/Math.sqrt(c*(1/a+1/o))}},e.BayesianClassifier=C,e.bayesian=C,e.PerceptronModel=T,e.perceptron=T,e.epsilon=k,e.factorial=A,e.gamma=function e(t){if("number"==typeof(r=t)&&isFinite(r)&&Math.floor(r)===r)return t<=0?NaN:A(t-1);var r;if(--t<0)return Math.PI/(Math.sin(Math.PI*-t)*e(-t));var n=t+.25;return Math.pow(t/Math.E,t)*Math.sqrt(2*Math.PI*(t+1/6))*(1+1/144/Math.pow(n,2)-1/12960/Math.pow(n,3)-257/207360/Math.pow(n,4)-52/2612736/Math.pow(n,5)+5741173/9405849600/Math.pow(n,6)+37529/18811699200/Math.pow(n,7))},e.gammaln=function(e){if(e<=0)return 1/0;e--;for(var t=I[0],r=1;r<15;r++)t+=I[r]/(e+r);var n=5.2421875+e;return K+Math.log(t)-n+(e+.5)*Math.log(n)},e.bernoulliDistribution=function(e){if(e<0||1<e)throw new Error("bernoulliDistribution requires probability to be between 0 and 1 inclusive");return[1-e,e]},e.binomialDistribution=function(e,t){if(!(t<0||1<t||e<=0||e%1!=0)){for(var r=0,n=0,a=[],o=1;a[r]=o*Math.pow(t,r)*Math.pow(1-t,e-r),n+=a[r],o=o*(e-++r+1)/r,n<1-k;);return a}},e.poissonDistribution=function(e){if(!(e<=0)){for(var t=0,r=0,n=[],a=1;n[t]=Math.exp(-e)*Math.pow(e,t)/a,r+=n[t],a*=++t,r<1-k;);return n}},e.chiSquaredDistributionTable=U,e.chiSquaredGoodnessOfFit=function(e,t,n){for(var a,o,i=0,u=t(r(e)),s=[],_=[],c=0;c<e.length;c++)void 0===s[e[c]]&&(s[e[c]]=0),s[e[c]]++;for(c=0;c<s.length;c++)void 0===s[c]&&(s[c]=0);for(o in u)o in s&&(_[+o]=u[o]*e.length);for(o=_.length-1;0<=o;o--)_[o]<3&&(_[o-1]+=_[o],_.pop(),s[o-1]+=s[o],s.pop());for(o=0;o<s.length;o++)i+=Math.pow(s[o]-_[o],2)/_[o];return a=s.length-1-1,U[a][n]<i},e.kernelDensityEstimation=F,e.kde=F,e.zScore=function(e,t,r){return(e-t)/r},e.cumulativeStdNormalProbability=function(e){var t=Math.abs(e),r=Math.min(Math.round(100*t),G.length-1);return 0<=e?G[r]:+(1-G[r]).toFixed(4)},e.standardNormalTable=G,e.errorFunction=V,e.erf=V,e.inverseErrorFunction=J,e.probit=function(e){return 0===e?e=k:1<=e&&(e=1-k),Math.sqrt(2)*J(2*e-1)},e.permutationTest=function(e,t,n,a){if(void 0===a&&(a=1e4),void 0===n&&(n="two_side"),"two_side"!==n&&"greater"!==n&&"less"!==n)throw new Error("`alternative` must be either 'two_side', 'greater', or 'less'");for(var o=r(e)-r(t),i=new Array(a),u=e.concat(t),s=Math.floor(u.length/2),_=0;_<a;_++){b(u);var c=u.slice(0,s),l=u.slice(s,u.length),f=r(c)-r(l);i[_]=f}var h=0;if("two_side"===n)for(_=0;_<=a;_++)Math.abs(i[_])>=Math.abs(o)&&(h+=1);else if("greater"===n)for(_=0;_<=a;_++)i[_]>=o&&(h+=1);else for(_=0;_<=a;_++)i[_]<=o&&(h+=1);return h/a},e.bisect=function(e,t,r,n,a){if("function"!=typeof e)throw new TypeError("func must be a function");for(var o=0;o<n;o++){var i=(t+r)/2;if(0===e(i)||Math.abs((r-t)/2)<a)return i;H(e(i))===H(e(t))?t=i:r=i}throw new Error("maximum number of iterations exceeded")},e.quickselect=l,e.sign=H,e.numericSort=u,Object.defineProperty(e,"__esModule",{value:!0})}))},d58f:function(e,t,r){var n=r("1c0b"),a=r("7b0b"),o=r("44ad"),i=r("50c4"),u=function(e){return function(t,r,u,s){n(r);var _=a(t),c=o(_),l=i(_.length),f=e?l-1:0,h=e?-1:1;if(u<2)while(1){if(f in c){s=c[f],f+=h;break}if(f+=h,e?f<0:l<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:l>f;f+=h)f in c&&(s=r(s,c[f],f,_));return s}};e.exports={left:u(!1),right:u(!0)}},efe1:function(e,t,r){}}]);