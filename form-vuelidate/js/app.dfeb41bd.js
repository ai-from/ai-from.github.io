(function(e){function t(t){for(var n,s,o=t[0],l=t[1],c=t[2],d=0,v=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(v.length)v.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==i[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},i={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"22ec":function(e,t,r){"use strict";var n=r("24ce"),i=r.n(n);i.a},"24ce":function(e,t,r){},"294b":function(e,t,r){"use strict";var n=r("51f0"),i=r.n(n);i.a},"2c3e":function(e,t,r){"use strict";var n=r("53b0"),i=r.n(n);i.a},3572:function(e,t,r){"use strict";var n=r("e36f"),i=r.n(n);i.a},"51f0":function(e,t,r){},"53b0":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=r("1dce"),a=r.n(i),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-form")],1)},o=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-vuelidate"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"title"},[e._v(e._s(e.title))]),r("v-input",{attrs:{isRequired:!0,title:"Фамилия",placeholder:"Иванов",errorMsg:e.errors.surname(e.$v.surname.$params.minLength.min,e.$v.surname.$params.maxLength.max),isError:e.$v.$dirty&&e.$v.surname.$invalid},model:{value:e.surname,callback:function(t){e.surname=t},expression:"surname"}}),r("v-input",{attrs:{isRequired:!0,title:"Имя",placeholder:"Иван",errorMsg:e.errors.name(e.$v.name.$params.minLength.min,e.$v.name.$params.maxLength.max),isError:e.$v.$dirty&&e.$v.name.$invalid},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("v-input",{attrs:{title:"Отчество",placeholder:"Иванович",errorMsg:e.errors.patronymic(e.$v.patronymic.$params.minLength.min,e.$v.patronymic.$params.maxLength.max),isError:e.$v.$dirty&&e.$v.patronymic.$invalid},model:{value:e.patronymic,callback:function(t){e.patronymic=t},expression:"patronymic"}}),r("v-input",{attrs:{isRequired:!0,title:"Дата рождения",placeholder:"05.05.1990",errorMsg:e.errors.birthday,isError:e.$v.$dirty&&e.$v.birthday.$invalid},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}}),r("v-input",{attrs:{isRequired:!0,title:"Номер телефона",placeholder:"7 999 999 99 99",errorMsg:e.errors.phone,isError:e.$v.$dirty&&e.$v.phone.$invalid},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),r("v-sex",{attrs:{title:"Пол"}}),r("v-multiple-select",{staticClass:"clients",attrs:{isRequired:!0,title:"Группа клиентов",options:["VIP","Проблемные","ОМС"],errorMsg:e.errors.clients,isError:e.$v.$dirty&&e.$v.clients.$invalid},on:{input:e.multipleInput},model:{value:e.clients,callback:function(t){e.clients=t},expression:"clients"}}),r("v-select",{staticClass:"doctor",attrs:{title:"Лечащий врач",options:["Иванов","Захаров","Чернышева"],isError:e.$v.$dirty&&e.$v.doctor.$invalid},model:{value:e.doctor,callback:function(t){e.doctor=t},expression:"doctor"}}),r("v-checkbox",{attrs:{label:"Не отправлять СМС",forID:"sms"},on:{click:e.checkboxClick},model:{value:e.noSMS,callback:function(t){e.noSMS=t},expression:"noSMS"}}),r("div",{staticClass:"sub-title"},[e._v("Адрес")]),r("v-input",{attrs:{title:"Индекс",placeholder:"999999",errorMsg:e.errors.index,isError:e.$v.$dirty&&e.$v.index.$invalid},model:{value:e.index,callback:function(t){e.index=t},expression:"index"}}),r("v-input",{attrs:{title:"Страна",placeholder:"Россия",errorMsg:e.errors.country(e.$v.country.$params.minLength.min,e.$v.country.$params.maxLength.max),isError:e.$v.$dirty&&e.$v.country.$invalid},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}}),r("v-input",{attrs:{title:"Область",placeholder:"Московская",errorMsg:e.errors.area(e.$v.area.$params.minLength.min,e.$v.area.$params.maxLength.max),isError:e.$v.$dirty&&e.$v.area.$invalid},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}}),r("v-input",{attrs:{isRequired:!0,title:"Город",placeholder:"Москва",errorMsg:e.errors.city(e.$v.city.$params.minLength.min,e.$v.city.$params.maxLength.max),isError:e.$v.$dirty&&e.$v.city.$invalid},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),r("v-input",{attrs:{title:"Улица",placeholder:"Центральная",errorMsg:e.errors.street(e.$v.street.$params.minLength.min,e.$v.street.$params.maxLength.max),isError:e.$v.$dirty&&e.$v.street.$invalid},model:{value:e.street,callback:function(t){e.street=t},expression:"street"}}),r("v-input",{attrs:{title:"Дом",placeholder:"77",errorMsg:e.errors.house(e.$v.house.$params.maxLength.max),isError:e.$v.$dirty&&e.$v.house.$invalid},model:{value:e.house,callback:function(t){e.house=t},expression:"house"}}),r("div",{staticClass:"sub-title"},[e._v("Паспорт")]),r("v-select",{staticClass:"document-type",attrs:{isRequired:!0,title:"Тип документа",options:["Паспорт","Свидетельство о рождении","Вод. удостоверение"],errorMsg:e.errors.documentType,isError:e.$v.$dirty&&e.$v.documentType.$invalid},model:{value:e.documentType,callback:function(t){e.documentType=t},expression:"documentType"}}),r("v-input",{attrs:{title:"Серия",placeholder:"99 99",errorMsg:e.errors.series,isError:e.$v.$dirty&&e.$v.series.$invalid},model:{value:e.series,callback:function(t){e.series=t},expression:"series"}}),r("v-input",{attrs:{title:"Номер",placeholder:"999-999",errorMsg:e.errors.number,isError:e.$v.$dirty&&e.$v.number.$invalid},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),r("v-input",{attrs:{title:"Кем выдан",placeholder:"Центральным РУВД",errorMsg:e.errors.issuedBy(e.$v.issuedBy.$params.minLength.min,e.$v.issuedBy.$params.minLength.max),isError:e.$v.$dirty&&e.$v.issuedBy.$invalid},model:{value:e.issuedBy,callback:function(t){e.issuedBy=t},expression:"issuedBy"}}),r("v-input",{attrs:{isRequired:!0,title:"Дата выдачи",placeholder:"05.05.1990",errorMsg:e.errors.date,isError:e.$v.$dirty&&e.$v.date.$invalid},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),r("v-button",{staticClass:"green",attrs:{btnType:"submit",title:"Отправить"}}),r("div",{staticClass:"note"},[e._v(" Поля, отмеченные звездочкой (*), обязательны для заполнения ")]),r("div",{staticClass:"res"},[!e.$v.$invalid&&this.goodForm?r("div",{staticClass:"ok"},[e._v("Форма отправлена")]):e._e(),e.$v.$invalid&&!this.goodForm?r("div",{staticClass:"error"},[e._v("В форме содержатся ошибки")]):e._e()])],1)])},c=[],u=r("b5ae");r("fb6a"),r("a9e3");function d(e){var t=/^[\d]{2}.[\d]{2}.[\d]{4}$/.test(e),r=Number(e.slice(0,2)),n=Number(e.slice(3,5)),i=Number(e.slice(6,10)),a=0,s=n>0&&n<=12,o=i>1899&&i<=(new Date).getFullYear();s&&o&&(a=new Date(i,n,0).getDate());var l=r>0&&r<=a;return t&&l}function v(e){return/^7\s[\d]{3}\s[\d]{3}\s[\d]{2}\s[\d]{2}$/.test(e)}function m(e){return/^([\d]{6})*$/.test(e)}function p(e){return/^([A-zА-яЁё]{2}[A-zА-яЁё\-\s]*)*$/.test(e)}function f(e){return/^([\d])*$/.test(e)}function h(e){return/^([\d]{2}\s[\d]{2})?$/.test(e)}function $(e){return/^([\d]{3}-[\d]{3})?$/.test(e)}r("99af");var g={surname:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"Только буквы. От ".concat(e," до ").concat(t," символов вкл.")},name:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"Только буквы. От ".concat(e," до ").concat(t," символов вкл.")},patronymic:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"Только буквы. От ".concat(e," до ").concat(t," символов вкл.")},birthday:"Необходимый формат: XX.XX.XXXX",phone:"Необходимый формат: 7 XXX XXX XX XX",clients:"Необходим как минимум один пункт",index:"Только цифры. Формат: XXXXXX",country:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"Буквы и знак дефиса. От ".concat(e," до ").concat(t," символов вкл.")},area:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"Буквы и знак дефиса. От ".concat(e," до ").concat(t," символов вкл.")},city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"Буквы и знак дефиса. От ".concat(e," до ").concat(t," символов вкл.")},street:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"Буквы и знак дефиса. От ".concat(e," до ").concat(t," символов вкл.")},house:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return"Только цифры. До ".concat(e," символов вкл.")},documentType:"Выберите тип документа",series:"Только цифры. Формат: XX XX",number:"Только цифры. Формат: XXX-XXX",issuedBy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"Только буквы. От ".concat(e," до ").concat(t," символов")},date:"Необходимый формат: XX.XX.XXXX"},y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field",class:{error:e.isError}},[r("div",{staticClass:"mini-title"},[e._v(" "+e._s(e.title)+" "),e.isRequired?r("span",[e._v("*")]):e._e()]),r("input",{attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),r("div",{staticClass:"error"},[r("span",[e._v(e._s(e.errorMsg))])])])},b=[],x={name:"Input",props:{value:{},isRequired:{type:Boolean,default:!1},title:{type:String,default:"Title"},placeholder:{type:String,default:"Placeholder"},errorMsg:{type:String,default:"Error"},isError:{type:Boolean,default:!1},model:{type:"",default:""}}},_=x,L=(r("3572"),r("2877")),X=Object(L["a"])(_,y,b,!1,null,"f2495f94",null),k=X.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field sex"},[r("div",{staticClass:"mini-title"},[e._v(e._s(e.title))]),e._m(0)])},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"items"},[r("div",{staticClass:"item"},[r("label",{attrs:{for:"male"}},[e._v("Мужской")]),r("input",{attrs:{checked:"",id:"male",type:"radio",name:"sex"}})]),r("div",{staticClass:"item"},[r("label",{attrs:{for:"female"}},[e._v("Женский")]),r("input",{attrs:{id:"female",type:"radio",name:"sex"}})])])}],O={name:"Sex",props:{title:{type:String,default:"Sex"}}},C=O,M=(r("9ff8"),Object(L["a"])(C,E,S,!1,null,"2154bfe2",null)),j=M.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field",class:{error:e.isError}},[r("div",{staticClass:"mini-title"},[e._v(" "+e._s(e.title)+" "),e.isRequired?r("span",[e._v("*")]):e._e()]),r("select",{domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}},e._l(e.options,(function(t,n){return r("option",{key:n},[e._v(" "+e._s(t)+" ")])})),0),r("div",{staticClass:"error"},[r("span",[e._v(e._s(e.errorMsg))])])])},F=[],R={name:"Select",props:{value:{},isRequired:{type:Boolean,default:!1},title:{type:String,default:"Title"},options:{type:Array,default:[]},errorMsg:{type:String,default:"Error"},isError:{type:Boolean,default:!1}}},T=R,B=(r("2c3e"),Object(L["a"])(T,q,F,!1,null,"a763d01a",null)),w=B.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field",class:{error:e.isError}},[r("div",{staticClass:"mini-title"},[e._v(" "+e._s(e.title)+" "),e.isRequired?r("span",[e._v("*")]):e._e()]),r("div",{staticClass:"wrap"},e._l(e.optionsReady,(function(t,n){return r("div",{key:n,staticClass:"item",class:{selected:t.selected},on:{click:function(r){return e.itemClick(t)}}},[e._v(" "+e._s(t.value)+" ")])})),0),r("div",{staticClass:"error"},[r("span",[e._v(e._s(e.errorMsg))])])])},D=[],I=(r("4de4"),r("4160"),r("d81d"),r("159b"),{name:"MultipleSelect",props:{isRequired:{type:Boolean,default:!1},title:{type:String,default:"Title"},options:{type:Array,default:[]},errorMsg:{type:String,default:"Error"},isError:{type:Boolean,default:!1}},data:function(){return{optionsReady:[]}},methods:{itemClick:function(e){e.selected?e.selected=!1:e.selected=!0;var t=this.optionsReady.filter((function(e){return e.selected})).map((function(e){return e.value}));this.$emit("input",t)}},mounted:function(){var e=[];this.options.forEach((function(t){e.push({value:t,selected:!1})})),this.optionsReady=e}}),A=I,N=(r("9d63"),Object(L["a"])(A,P,D,!1,null,"3cf40055",null)),z=N.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field"},[r("label",{staticClass:"label",attrs:{for:e.forID}},[e._v(e._s(e.label))]),r("input",{attrs:{id:e.forID,type:"checkbox"},on:{click:function(t){return e.$emit("click")}}})])},V=[],Y={name:"Checkbox",props:{label:{type:String,default:"Label"},forID:{type:String,default:"forID"}}},G=Y,H=(r("22ec"),Object(L["a"])(G,J,V,!1,null,"dd402262",null)),K=H.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{attrs:{type:e.btnType}},[e._v(e._s(e.title))])},U=[],W={name:"Button",props:{title:{type:String,default:"Title"},btnType:{type:String,default:"text"}}},Z=W,ee=(r("294b"),Object(L["a"])(Z,Q,U,!1,null,"ffaad364",null)),te=ee.exports,re={name:"FormVuelidate",data:function(){return{errors:g,title:"Форма регистрации",goodForm:!0,surname:"",name:"",patronymic:"",birthday:"",phone:"",sex:"",clients:"",doctor:"",noSMS:!1,index:"",country:"",area:"",city:"",street:"",house:"",documentType:"",series:"",number:"",issuedBy:"",date:""}},validations:{surname:{required:u["required"],namingFormat:p,minLength:Object(u["minLength"])(2),maxLength:Object(u["maxLength"])(40)},name:{required:u["required"],namingFormat:p,minLength:Object(u["minLength"])(2),maxLength:Object(u["maxLength"])(40)},patronymic:{namingFormat:p,minLength:Object(u["minLength"])(2),maxLength:Object(u["maxLength"])(40)},birthday:{required:u["required"],dateFormat:d},phone:{required:u["required"],phoneFormat:v},sex:{},clients:{required:u["required"]},doctor:{},noSMS:{},index:{indexFormat:m},country:{namingFormat:p,minLength:Object(u["minLength"])(2),maxLength:Object(u["maxLength"])(40)},area:{namingFormat:p,minLength:Object(u["minLength"])(2),maxLength:Object(u["maxLength"])(40)},city:{required:u["required"],namingFormat:p,minLength:Object(u["minLength"])(2),maxLength:Object(u["maxLength"])(40)},street:{namingFormat:p,minLength:Object(u["minLength"])(2),maxLength:Object(u["maxLength"])(40)},house:{houseFormat:f,maxLength:Object(u["maxLength"])(5)},documentType:{required:u["required"]},series:{seriesFormat:h},number:{numberFormat:$},issuedBy:{namingFormat:p,minLength:Object(u["minLength"])(2),maxLength:Object(u["maxLength"])(100)},date:{required:u["required"],dateFormat:d}},components:{"v-input":k,"v-sex":j,"v-select":w,"v-multiple-select":z,"v-checkbox":K,"v-button":te},methods:{onSubmit:function(){this.$v.$touch(),this.$v.$invalid?this.goodForm=!1:this.goodForm=!0},checkboxClick:function(){this.noSMS=!this.noSMS},multipleInput:function(e){this.clients=e}}},ne=re,ie=(r("e0d7"),Object(L["a"])(ne,l,c,!1,null,null,null)),ae=ie.exports,se={name:"App",components:{"v-form":ae}},oe=se,le=Object(L["a"])(oe,s,o,!1,null,null,null),ce=le.exports;n["a"].config.productionTip=!1,n["a"].use(a.a),n["a"].use(Error),new n["a"]({render:function(e){return e(ce)}}).$mount("#app")},"5ae1":function(e,t,r){},"9d63":function(e,t,r){"use strict";var n=r("a1ec"),i=r.n(n);i.a},"9ff8":function(e,t,r){"use strict";var n=r("5ae1"),i=r.n(n);i.a},a1ec:function(e,t,r){},b062:function(e,t,r){},e0d7:function(e,t,r){"use strict";var n=r("b062"),i=r.n(n);i.a},e36f:function(e,t,r){}});
//# sourceMappingURL=app.dfeb41bd.js.map