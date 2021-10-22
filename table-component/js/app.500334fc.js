(function(t){function e(e){for(var r,s,a=e[0],u=e[1],c=e[2],f=0,d=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/table-component/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Table",{attrs:{url:"https://jsonplaceholder.typicode.com/posts?_limit=50"}})],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-table"},[n("div",{staticClass:"v-table__head"},[n("div",{staticClass:"v-table__head-userid",on:{click:function(e){return t.sort("userId")}}},[t._v("UserId")]),n("div",{staticClass:"v-table__head-id",on:{click:function(e){return t.sort("id")}}},[t._v("Id")]),n("div",{staticClass:"v-table__head-title",on:{click:function(e){return t.sort("title")}}},[t._v("Title")]),n("div",{staticClass:"v-table__head-body",on:{click:function(e){return t.sort("body")}}},[t._v("Body")])]),t._l(t.json,(function(e,r){return n("div",{key:r,staticClass:"v-table__item"},[n("div",{staticClass:"v-table__item-userid"},[t._v(t._s(e.userId))]),n("div",{staticClass:"v-table__item-id"},[t._v(t._s(e.id))]),n("div",{staticClass:"v-table__item-title"},[t._v(t._s(e.title))]),n("div",{staticClass:"v-table__item-body"},[t._v(t._s(e.body))])])})),t.json.length?n("Button",{attrs:{title:"Загрузить еще..."},on:{click:t.upload}}):t._e()],2)},a=[],u=n("1da1"),c=(n("96cf"),n("d3b7"),n("4de4"),n("4e82"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-button",on:{click:function(e){return t.$emit("click")}}},[t._v(" "+t._s(t.title)+" ")])}),l=[],f={name:"Button",props:{title:{type:String,default:"Кнопка"}}},d=f,p=(n("f91f"),n("2877")),v=Object(p["a"])(d,c,l,!1,null,null,null),b=v.exports,_={name:"Table",components:{Button:b},data:function(){return{json:[],step:10,sortingColumns:{userId:!0,id:!0,title:!0,body:!0},mainKey:""}},props:{url:{type:String,required:!0}},methods:{getData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url);case 2:if(n=e.sent,!n.ok){e.next=10;break}return e.next=6,n.json();case 6:t.json=e.sent,t.json=t.json.filter((function(e,n){return n<t.step})),e.next=11;break;case 10:alert("Error: "+n.status);case 11:case"end":return e.stop()}}),e)})))()},sortingDown:function(t){this.json.sort((function(e,n){return e[t]>n[t]?1:n[t]>e[t]?-1:0}))},sortingUp:function(t){this.json.sort((function(e,n){return e[t]>n[t]?-1:n[t]>e[t]?1:0}))},sort:function(t){this.sortingColumns[t]?this.sortingDown(t):this.sortingUp(t),this.sortingColumns[t]=!this.sortingColumns[t],this.mainKey=t},upload:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.step+=10,e.next=3,t.getData();case 3:t.sortingColumns[t.mainKey]?t.sortingUp(t.mainKey):t.sortingDown(t.mainKey);case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.getData()}},h=_,m=(n("ebab"),Object(p["a"])(h,s,a,!1,null,null,null)),g=m.exports,y={name:"App",components:{Table:g}},j=y,w=(n("cf25"),Object(p["a"])(j,i,o,!1,null,null,null)),C=w.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},7333:function(t,e,n){},cf25:function(t,e,n){"use strict";n("fea6")},d4ac:function(t,e,n){},ebab:function(t,e,n){"use strict";n("7333")},f91f:function(t,e,n){"use strict";n("d4ac")},fea6:function(t,e,n){}});
//# sourceMappingURL=app.500334fc.js.map