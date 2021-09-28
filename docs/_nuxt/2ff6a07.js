(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5,6,7],{410:function(e,t,r){"use strict";r.r(t);var n=r(26),o=(r(74),r(29),{data:function(){return{dialog:!1,errorDialog:!1,loading:!1,id:null,name:null,email:null,errorMsg:null,validations:{nameRules:[function(e){return!!e||"Name is required"},function(e){return!!e&&e.length<=50||"Name must be less than 50 characters"}],emailRules:[function(e){return!!e||"Email is required"},function(e){return/.+@.+\..+/.test(e)||"Email must be valid"},function(e){return e&&e.length<=50||"Email must be less than 50 characters"}]},isEdit:!1}},methods:{validate:function(){this.$refs.form.validate()&&(this.dialog=!0)},cleanForm:function(){this.$refs.form.reset()},cancelEdit:function(){this.isEdit=!1,this.$refs.form.reset(),this.id=null},getEmployee:function(e){this.isEdit=!0,this.id=e.id,this.name=e.name,this.email=e.email},addEmploye:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var body;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,body={email:e.email,name:e.name},t.next=5,e.$axios.$post("/employee",body,{headers:{"Access-Control-Allow-Origin":"*"}});case 5:t.sent&&(e.$store.commit("openSnack","Employee Added"),e.$parent.getEmployees(),e.$refs.form.reset(),e.dialog=!1,e.loading=!1),t.next=17;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response),e.$store.commit("openSnack","Something is wrong. Please try again"),e.dialog=!1,e.loading=!1,e.errorDialog=!0,e.errorMsg=t.t0.response.data.msg;case 17:case"end":return t.stop()}}),t,null,[[0,9]])})))()},editEmploye:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var body;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,body={email:e.email,name:e.name},t.next=5,e.$axios.$put("/employee/"+e.id,body,{headers:{"Access-Control-Allow-Origin":"*"}});case 5:t.sent&&(e.$store.commit("openSnack","Employee edited"),e.$parent.getEmployees(),e.$refs.form.reset(),e.dialog=!1,e.loading=!1),t.next=17;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.response),e.$store.commit("openSnack","Something is wrong. Please try again"),e.dialog=!1,e.loading=!1,e.errorDialog=!0,e.errorMsg=t.t0.response.data.msg;case 17:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}}),l=r(84),c=r(114),d=r.n(c),m=r(198),v=r(417),f=r(405),y=r(485),_=r(486),h=r(488),x=r(399),E=r(418),C=r(402),w=r(483),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v(e._s(e.isEdit?"Edit employee":"Add new employee"))]),e._v(" "),r("v-card-text",[r("v-form",{ref:"form"},[r("v-text-field",{attrs:{label:"Name",outlined:"",dense:"",rules:e.validations.nameRules},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("v-text-field",{attrs:{label:"Email",outlined:"",dense:"",rules:e.validations.emailRules},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("v-col",[r("v-btn",{staticClass:"info",attrs:{block:""},on:{click:function(t){return e.cleanForm()}}},[e._v("Clean")]),e._v(" "),e.isEdit?r("v-btn",{staticClass:"error mt-1",attrs:{block:""},on:{click:function(t){return e.cancelEdit()}}},[e._v("Cancel")]):e._e(),e._v(" "),r("v-btn",{staticClass:"success mt-1",attrs:{block:""},on:{click:function(t){return e.validate()}}},[e._v(e._s(e.isEdit?"Edit":"Add"))])],1)],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[e._v("Are you sure you want to "+e._s(e.isEdit?"edit":"add")+" this employee?")]),e._v(" "),r("v-card-text",{staticClass:"mt-5"},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"error",on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),e._v(" "),r("v-btn",{staticClass:"success ml-3",on:{click:function(t){e.isEdit?e.editEmploye():e.addEmploye()}}},[e._v(e._s(e.isEdit?"Edit":"Add"))])],1)],1),e._v(" "),e.loading?r("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}}):e._e()],1)],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:e.errorDialog,callback:function(t){e.errorDialog=t},expression:"errorDialog"}},[r("v-card",[r("v-card-title",[e._v("Error")]),e._v(" "),r("v-card-text",{staticClass:"mt-5"},[e._v("\n        "+e._s(e.errorMsg)+"\n      ")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"secondary",on:{click:function(t){e.errorDialog=!1}}},[e._v(" OK ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:y.a,VDialog:_.a,VForm:h.a,VLayout:x.a,VProgressLinear:E.a,VSpacer:C.a,VTextField:w.a})},411:function(e,t,r){"use strict";r.r(t);var n=r(26),o=(r(74),{data:function(){return{dialog:!1,loading:!1,id:null}},methods:{openDialog:function(e){this.id=e.id,this.dialog=!0},deleteEmploye:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,t.next=4,e.$axios.$delete("/employee/"+e.id,{headers:{"Access-Control-Allow-Origin":"*"}});case 4:t.sent&&(e.$store.commit("openSnack","Employee deleted"),e.$parent.getEmployees(),e.dialog=!1,e.loading=!1),t.next=16;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.response),e.$store.commit("openSnack","Something is wrong. Please try again"),e.dialog=!1,e.loading=!1,e.errorDialog=!0,e.errorMsg=t.t0.response.data.msg;case 16:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}}),l=r(84),c=r(114),d=r.n(c),m=r(198),v=r(417),f=r(405),y=r(486),_=r(399),h=r(418),x=r(402),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{"max-width":"290",persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",[e._v("Are you sure you want to delete this employee?")]),e._v(" "),r("v-card-text",{staticClass:"mt-5"},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"error",on:{click:function(t){e.dialog=!1}}},[e._v("Cancel")]),e._v(" "),r("v-btn",{staticClass:"success ml-3",on:{click:function(t){return e.deleteEmploye()}}},[e._v(" delete ")])],1)],1),e._v(" "),e.loading?r("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardText:f.b,VCardTitle:f.c,VDialog:y.a,VLayout:_.a,VProgressLinear:h.a,VSpacer:x.a})},414:function(e,t,r){"use strict";r.r(t);var n=r(26),o=(r(74),r(410)),l=r(411),c={components:{EmployeeAddCard:o.default,EmployeeDeleteDialog:l.default},data:function(){return{loading:!1,employees:[],msg:null,headers:[{text:"ID",value:"id",align:"center"},{text:"Name",value:"name",align:"center"},{text:"Email",value:"email",align:"center"},{text:"Creation date",value:"date",align:"center"},{text:"Actions",align:"center",value:"action",sortable:!1}]}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=4,e.getEmployees();case 4:case"end":return t.stop()}}),t)})))()},methods:{getEmployees:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,e.msg="Getting information",t.next=5,e.$axios.$get("/employee",{headers:{"Access-Control-Allow-Origin":"*"}});case 5:r=t.sent,e.employees=r.msg,e.loading=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.response);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}},d=r(84),m=r(114),v=r.n(m),f=r(417),y=r(405),_=r(489),h=r(486),x=r(397),E=r(174),C=r(399),w=r(418),k=r(402),V=r(45),$=r(151),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"pa-5",attrs:{xs12:"",md4:""}},[r("EmployeeAddCard",{ref:"employeeAddCard"})],1),e._v(" "),r("v-flex",{staticClass:"pa-5",attrs:{xs12:"",md8:""}},[r("v-card",[r("v-toolbar",{attrs:{flat:""}},[r("v-toolbar-title",[e._v("Employees")]),r("v-spacer")],1),e._v(" "),r("v-card-text",[r("v-data-table",{attrs:{headers:e.headers,items:e.employees,"items-per-page":5},scopedSlots:e._u([{key:"item.date",fn:function(t){var n=t.item;return[r("span",[e._v("\n                "+e._s(new Date(n.date).toISOString().substring(0,10))+"\n              ")])]}},{key:"item.action",fn:function(t){var n=t.item;return[r("v-icon",{staticClass:"mr-2",on:{click:function(t){return e.$refs.employeeAddCard.getEmployee(n)}}},[e._v("mdi-pencil")]),e._v(" "),r("v-icon",{staticClass:"mr-2",on:{click:function(t){return e.$refs.employeeDeleteDialog.openDialog(n)}}},[e._v("mdi-delete")])]}}],null,!0)})],1)],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"400",persistent:""},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[r("v-card",[r("v-card-title",{staticClass:"display-1"},[e._v("Cargando")]),e._v(" "),r("v-card-text",{staticClass:"display-5"},[e._v(e._s(e.msg))])],1),e._v(" "),e.loading?r("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}}):e._e()],1),e._v(" "),r("EmployeeDeleteDialog",{ref:"employeeDeleteDialog"})],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{EmployeeAddCard:r(410).default,EmployeeDeleteDialog:r(411).default}),v()(component,{VCard:f.a,VCardText:y.b,VCardTitle:y.c,VDataTable:_.a,VDialog:h.a,VFlex:x.a,VIcon:E.a,VLayout:C.a,VProgressLinear:w.a,VSpacer:k.a,VToolbar:V.a,VToolbarTitle:$.a})},490:function(e,t,r){"use strict";r.r(t);var n={components:{EmployeesCard:r(414).default}},o=r(84),l=r(114),c=r.n(l),d=r(397),m=r(399),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"pa-5",attrs:{xs12:""}},[t("EmployeesCard")],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{EmployeesCard:r(414).default}),c()(component,{VFlex:d.a,VLayout:m.a})}}]);