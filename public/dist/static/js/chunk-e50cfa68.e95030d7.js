(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e50cfa68"],{"35a4":function(e,t){e.exports={messages:{CN:{add:"添加",delete:"删除",save:"保存",cancel:"取消",edit:"编辑",deleteConfirm:"是否要删除此行？",newMember:"新增成员",table:{key:"学生ID",name:"学生姓名",number:"学生工号",operation:"操作"},manager:"谁"}}}},5214:function(e,t,a){},"881a":function(e,t,a){"use strict";var n=a("d027"),o=a.n(n);o.a},9634:function(e,t){e.exports={messages:{CN:{course_sn:"课程编号",course_name:"课程名称",course_fee:"课程费用",course_month:"课程年月",course_name_placeholder:"请输入课程名称",course_sn_placeholder:"请输入课程编号",course_fee_placeholder:"请输入课程费用",course_month_placeholder:"请选择课程年月",submit:"保存",cancel:"取消",save:"取消"}}}},"97ab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",[a("div",[a("a-space",{staticClass:"operator"},[a("a-button",{attrs:{type:"primary"},on:{click:e.addNew}},[e._v("新增课程")])],1),a("a-modal",{attrs:{visible:e.createCourseFormVisible,width:600,title:"新增课程",footer:null},on:{cancel:e.courseCreateClose}},[a("AddCourse",{ref:"addCourse",attrs:{visible:e.createCourseFormVisible,width:600},on:{close:e.courseCreateClose,success:e.addCourseSuccess}})],1),a("standard-table",{attrs:{columns:e.columns,dataSource:e.dataSource,rowKey:e.rowKey,selectedRows:e.selectedRows,pagination:Object.assign({},e.pagination,{onChange:e.onPageChange})},on:{"update:selectedRows":function(t){e.selectedRows=t},"update:selected-rows":function(t){e.selectedRows=t}},scopedSlots:e._u([{key:"description",fn:function(t){var n=t.text;return a("div",{},[e._v(" "+e._s(n)+" ")])}},{key:"action",fn:function(t){t.text;var n=t.record;return a("div",{},[a("a",{staticStyle:{"margin-right":"8px"},on:{click:function(t){return e.addStudent(n.id)}}},[a("a-icon",{attrs:{type:"plus"}}),e._v(" 学生管理 ")],1)])}}])}),a("a-modal",{attrs:{visible:e.createStudentFormVisible,width:800,title:"学生管理",footer:null},on:{cancel:e.addStudentClose}},[a("AddStudent",{ref:"addStudent",attrs:{visible:e.createStudentFormVisible,formS:e.formData,width:600},on:{success:e.reload,close:e.addStudentClose}})],1)],1)])},o=[],s=(a("4de4"),a("c740"),a("b680"),a("3521")),r=a("b775"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{"body-style":{padding:"24px 32px",width:"600px"},bordered:!1}},[a("a-form",{ref:"form"},[a("a-form-item",{attrs:{label:e.$t("course_sn"),labelCol:{span:7},wrapperCol:{span:10}}},[a("a-input",{attrs:{placeholder:e.$t("course_sn_placeholder")},model:{value:e.formData.course_sn,callback:function(t){e.$set(e.formData,"course_sn",t)},expression:"formData.course_sn"}})],1),a("a-form-item",{attrs:{label:e.$t("course_name"),labelCol:{span:7},wrapperCol:{span:10}}},[a("a-input",{attrs:{placeholder:e.$t("course_name_placeholder")},model:{value:e.formData.course_name,callback:function(t){e.$set(e.formData,"course_name",t)},expression:"formData.course_name"}})],1),a("a-form-item",{attrs:{label:e.$t("course_fee"),labelCol:{span:7},wrapperCol:{span:10}}},[a("a-input-number",{staticClass:"input-number-width",attrs:{placeholder:e.$t("course_fee_placeholder")},model:{value:e.formData.course_fee,callback:function(t){e.$set(e.formData,"course_fee",t)},expression:"formData.course_fee"}})],1),a("a-form-item",{attrs:{label:e.$t("course_month"),labelCol:{span:7},wrapperCol:{span:10}}},[a("a-month-picker",{ref:"course_month",staticStyle:{width:"100%"},attrs:{format:"YYYY-MM"},model:{value:e.formData.course_month,callback:function(t){e.$set(e.formData,"course_month",t)},expression:"formData.course_month"}})],1),a("a-form-item",{staticStyle:{"margin-top":"24px"},attrs:{wrapperCol:{span:10,offset:7}}},[a("a-button",{attrs:{type:"primary",disabled:e.isSubmitDisabled},on:{click:e.submitForm}},[e._v(e._s(e.$t("submit")))]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.close}},[e._v(e._s(e.$t("save")))])],1)],1)],1)},c=[],u=a("3af3"),d=a("b558"),l=a("3042"),m={components:{"a-form":u["a"],"a-input":d["a"],"a-form-item":u["a"].Item},props:{visible:{type:Boolean,default:!1},formData:{type:Object,default:function(){return{course_sn:"",course_name:"",course_fee:null,course_month:null}}}},name:"AddCourse",i18n:a("9634"),data:function(){return{form:this.$form.createForm(this,{name:"add_course"}),formFields:{course_sn:"",course_name:"",course_fee:null,course_month:null,course_month_str:""},isSubmitting:!1}},watch:{},computed:{desc:function(){return this.$t("pageDesc")},isSubmitDisabled:function(){return this.isSubmitting||!(this.formData.course_sn&&this.formData.course_name&&this.formData.course_fee&&this.formData.course_month)}},methods:{submitForm:function(e){var t=this;e.preventDefault();var a=this;this.form.validateFields((function(e){if(!e){var n=t.formData.course_name,o=t.formData.course_sn,s="";t.formData.course_month&&(s=t.formData.course_month.format("YYYYMM"));var r=t.formData.course_fee;a.isSubmitting=!0,Object(l["e"])(o,n,s,r).then((function(e){a.isSubmitting=!1,0===e.data.code?(a.$message.success(e.data.message),a.$emit("success"),a.$emit("close")):a.$message.error(e.data.message)}))}}))},close:function(){this.$emit("close")},open:function(){this.$set(this.formData,"course_month",0),this.$set(this.formData,"course_sn",""),this.$set(this.formData,"course_name",""),this.$set(this.formData,"course_fee",null)}},mounted:function(){}},f=m,h=(a("dd34"),a("2877")),p=Object(h["a"])(f,i,c,!1,null,"8d009940",null),b=p.exports,_=function(){var e=this,t=this,a=t.$createElement,n=t._self._c||a;return n("form",{attrs:{autoFormCreate:function(t){return e.form=t}}},[n("a-table",{attrs:{columns:t.dataColumns,dataSource:t.dataSource,pagination:!1},scopedSlots:t._u([{key:"operation",fn:function(e,a){return[n("a-popconfirm",{attrs:{title:t.$t("deleteConfirm")},on:{confirm:function(e){return t.remove(a.key)}}},[n("a",[t._v(t._s(t.$t("delete")))])])]}}])}),n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("a-select",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px","margin-right":"8px"},model:{value:t.selectValue,callback:function(e){t.selectValue=e},expression:"selectValue"}},t._l(t.students,(function(e){return n("a-select-option",{key:e.id,attrs:{value:e.id,disabled:e.disabled}},[t._v(" "+t._s(e.name)+" ")])})),1),n("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus",disable:t.isSubmittingComputed},on:{click:t.addStudent}},[t._v(t._s(t.$t("newMember")))])],1)],1)},S=[],g=(a("4160"),a("caad"),a("d81d"),a("a434"),a("b0c0"),a("2532"),a("159b"),a("2909")),v=a("3f45"),C=[{title:"学生ID",dataIndex:"key",key:"key",width:"20%",scopedSlots:{customRender:"id"}},{title:"学生编号",dataIndex:"number",key:"number",width:"20%",scopedSlots:{customRender:"number"}},{title:"学生姓名",dataIndex:"name",key:"name",width:"20%",scopedSlots:{customRender:"name"}},{title:"操作",key:"operation",scopedSlots:{customRender:"operation"}}],y={name:"AddStudent",i18n:a("35a4"),data:function(){return{columns:C,dataSource:[],students:[],selectValue:null,selectData:[],selectFetching:!1,selectedStudentId:[],courseId:0,isSubmitting:!1}},computed:{dataColumns:function(){var e=this;return this.columns.map((function(t){return t.title=e.$t("table."+t.key),t}))},isSubmittingComputed:function(){return this.isSubmitting||!this.selectValue}},mounted:function(){this.students.length=0,this.dataSource.length=0,Object(v["a"])("",[]).then(this.storeStudentSelect)},methods:{storeStudentSelect:function(e){var t=e.data;if(0===t.code)for(var a in t.data)this.students.push({id:t.data[a].id,sn:t.data[a].sn,name:t.data[a].name,disabled:!1});else this.error=t.message},addStudent:function(){var e=this.selectValue,t=this;return!!this.selectedStudentId.includes(e)||!!this.selectValue&&void Object(l["a"])(this.courseId,e).then((function(a){a.data.code>0?t.$message.error(a.data.message):(t.students.forEach((function(a){if(a.id===e)return t.dataSource.push({key:e,name:a.name,number:a.sn}),a.disabled=!0,!0})),t.selectValue=null)}))},remove:function(e){var t=this;Object(l["b"])(this.courseId,e).then((function(a){a.data.code>0?t.$message.error(a.data.message):(t.students.forEach((function(t){t.id===e&&(t.disabled=!1)})),t.dataSource=t.dataSource.filter((function(t){return t.key!==e})),t.selectedStudentId=t.selectedStudentId.filter((function(t){return t!==e})))}))},toggle:function(e){var t=this.dataSource.filter((function(t){return t.key===e}))[0];t.editable=!t.editable},handleChange:function(e,t,a){var n=Object(g["a"])(this.dataSource),o=n.filter((function(e){return t===e.key}))[0];o&&(o[a]=e,this.dataSource=n)},makeData:function(e){this.courseId=e,this.selectedStudentId.length=0,this.dataSource.splice(0,this.dataSource.length),this.selectFetching=!1;var t=this;t.students.forEach((function(e){e.disabled=!1})),Object(l["d"])(e).then((function(e){e.data.code>0?t.$message.error("数据异常"):e.data.data.forEach((function(e){t.selectedStudentId.push(e.id),t.dataSource.push({name:e.name,number:e.sn,key:e.id}),t.students.forEach((function(t){t.id===e.id&&(t.disabled=!0)}))}))}))}}},w=y,k=Object(h["a"])(w,_,S,!1,null,"6cdbdeea",null),$=k.exports,x=[{title:"课程Id",dataIndex:"id"},{title:"课程编号",dataIndex:"sn"},{title:"课程名称",dataIndex:"course_name"},{title:"课程年月",dataIndex:"year_month"},{title:"课程费用",dataIndex:"fee",customRender:function(e){return(e/100).toFixed(2)+"元"}},{title:"创建时间",dataIndex:"create_at",sorter:!0},{title:"操作",scopedSlots:{customRender:"action"}}],D={name:"CourseList",computed:{form:function(){return this.$form.createForm(this,{name:"add_course"})}},components:{AddStudent:$,AddCourse:b,StandardTable:s["a"]},data:function(){return{advanced:!0,columns:x,rowKey:"id",dataSource:[],selectedRows:[],pagination:{current:1,pageSize:10,total:0},createCourseFormVisible:!1,createStudentFormVisible:!1,actionType:"create",formData:{}}},authorize:{deleteRecord:"delete"},mounted:function(){this.load()},methods:{load:function(){var e=this;Object(r["f"])("https://poper-ops-interview-02.herokuapp.com/api/course/list","get",{page:this.pagination.current,pageSize:this.pagination.pageSize}).then((function(t){var a,n,o=null!==(a=null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.data)&&void 0!==a?a:{},s=o.list,r=o.page,i=o.pageSize,c=o.total;e.dataSource=s,e.pagination.current=r,e.pagination.pageSize=i,e.pagination.total=c}))},reload:function(){this.load()},addCourseSuccess:function(){this.load()},remove:function(){var e=this;this.dataSource=this.dataSource.filter((function(t){return-1===e.selectedRows.findIndex((function(e){return e.key===t.key}))})),this.selectedRows=[]},onPageChange:function(e,t){this.pagination.current=e,this.pagination.pageSize=t,this.load()},addNew:function(){var e=this;this.createCourseFormVisible=!0,this.$nextTick((function(){e.$refs.addCourse.open()}))},addStudent:function(e){var t=this;this.createStudentFormVisible=!0,this.$nextTick((function(){t.$refs.addStudent.makeData(e)}))},courseCreateClose:function(){this.createCourseFormVisible=!1},addStudentClose:function(){this.createStudentFormVisible=!1}}},I=D,F=(a("881a"),Object(h["a"])(I,n,o,!1,null,"d0771bdc",null));t["default"]=F.exports},d027:function(e,t,a){},dd34:function(e,t,a){"use strict";var n=a("5214"),o=a.n(n);o.a}}]);