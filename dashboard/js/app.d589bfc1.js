(function(t){function e(e){for(var r,s,u=e[0],i=e[1],c=e[2],l=0,m=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1fd0bcba"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(t);var c=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/dashboard/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d85":function(t,e,n){},"1f66":function(t,e,n){},2922:function(t,e,n){"use strict";n("78b8")},"3b2f":function(t,e,n){},"46a0":function(t,e,n){},"4af4":function(t,e,n){"use strict";n("3b2f")},"52ea":function(t,e,n){"use strict";n("e2a0")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.layout,{tag:"component"}),n("notifications")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main-layout"}},[n("v-header",{attrs:{links:t.links}}),n("v-navigation",{attrs:{links:t.links}}),n("v-workarea")],1)},u=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"indent"},[n("v-logo",{nativeOn:{click:function(e){return t.toHome(e)}}}),t.isSettings?[n("v-button",{staticClass:"public",attrs:{title:"Back to public part"},nativeOn:{click:function(e){return t.toHome(e)}}})]:[n("v-search",{attrs:{links:t.links}})],n("v-button",{attrs:{title:"Exit"}})],2)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[t._v("Logo")])},f=[],m={name:"Logo"},d=m,p=(n("9986"),n("2877")),h=Object(p["a"])(d,l,f,!1,null,null,null),b=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("input",{attrs:{type:"text",placeholder:"Search"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.isList=!t.isList}}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isList,expression:"isList"}],staticClass:"list"},t._l(t.links,(function(e,r){return n("router-link",{key:r,attrs:{to:e.url,exact:""}},[n("div",{on:{click:function(e){t.isList=!1}}},[t._v(t._s(e.name))])])})),1)])},g=[],_={name:"Search",data:function(){return{isList:!1}},props:{links:{type:Array,required:!0}}},y=_,k=(n("4af4"),Object(p["a"])(y,v,g,!1,null,null,null)),S=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[t._v(t._s(t.title))])},$=[],E={name:"Button",props:{title:{type:String,default:"Button"}}},w=E,x=(n("52ea"),Object(p["a"])(w,O,$,!1,null,null,null)),j=x.exports,T={name:"Header",components:{"v-logo":b,"v-search":S,"v-button":j},props:{links:{type:Array},isSettings:{type:Boolean,default:!1}},methods:{toHome:function(){"/"!==this.$route.path&&this.$router.push("/")}}},H=T,C=(n("2922"),Object(p["a"])(H,i,c,!1,null,null,null)),L=C.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",t._l(t.links,(function(e,r){return n("router-link",{key:r,attrs:{to:e.url,exact:""}},[t._v(t._s(e.name))])})),1)},G=[],P={name:"Navigation",props:{links:{type:Array}}},U=P,D=(n("ec50"),Object(p["a"])(U,N,G,!1,null,null,null)),A=D.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"workarea"},[n("v-breadcrumbs"),n("router-view")],1)},M=[],B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumbs"},[t._v(t._s(t.path))])},K=[],R={name:"Breadcrumbs",data:function(){return{path:""}},watch:{$route:{handler:function(t,e){this.path=this.$route.meta.breadcrumbs},deep:!0}},mounted:function(){this.path=this.$route.meta.breadcrumbs}},q=R,J=Object(p["a"])(q,B,K,!1,null,null,null),W=J.exports,z={name:"Workarea",components:{"v-breadcrumbs":W}},F=z,Q=(n("9d3d"),Object(p["a"])(F,I,M,!1,null,null,null)),V=Q.exports,X={name:"Home",components:{"v-header":L,"v-navigation":A,"v-workarea":V},computed:{links:function(){return this.$store.getters.GET_LINKS_HOME}},mounted:function(){this.$root.$emit("breadcrumbs")}},Y=X,Z=(n("c14a"),Object(p["a"])(Y,s,u,!1,null,null,null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"settings-layout"}},[n("v-header",{attrs:{isSettings:!0}}),n("v-navigation",{attrs:{links:t.links}}),n("v-workarea")],1)},nt=[],rt={name:"Settings",components:{"v-header":L,"v-navigation":A,"v-workarea":V},computed:{links:function(){return this.$store.getters.GET_LINKS_SETTINGS}},mounted:function(){this.$root.$emit("breadcrumbs")}},ot=rt,at=(n("9600"),Object(p["a"])(ot,et,nt,!1,null,null,null)),st=at.exports,ut={name:"App",components:{home:tt,settings:st},computed:{layout:function(){return this.$route&&this.$route.meta&&this.$route.meta.layout?this.$route.meta.layout:""}},mounted:function(){var t=this;this.$root.$on("notify",(function(e){t.$notify({text:e,type:"error"})}))}},it=ut,ct=Object(p["a"])(it,o,a,!1,null,null,null),lt=ct.exports,ft=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Home - "+t._s(t.count.home))])])},dt=[],pt=n("eab8"),ht={name:"Home",data:function(){return{count:0}},mixins:[pt["a"]],mounted:function(){this.$store.commit("UPDATE_COUNTERS","home"),this.count=this.counters(),this.$root.$emit("notify","Home")}},bt=ht,vt=Object(p["a"])(bt,mt,dt,!1,null,null,null),gt=vt.exports;r["default"].use(ft["a"]);var _t=[{path:"/",name:"Home",component:gt,meta:{title:"Dashboard | Home",layout:"home",breadcrumbs:"/Home"}},{path:"/site",name:"Site",component:function(){return n.e("about").then(n.bind(null,"e910"))},meta:{title:"Dashboard | Site",layout:"home",breadcrumbs:"/Site"}},{path:"/orders",name:"Orders",component:function(){return n.e("about").then(n.bind(null,"159d"))},meta:{title:"Dashboard | Orders",layout:"home",breadcrumbs:"/Orders"}},{path:"/settings",component:function(){return n.e("about").then(n.bind(null,"26d3"))},children:[{path:"",name:"Settings",component:function(){return n.e("about").then(n.bind(null,"26d3"))},meta:{title:"Dashboard | Settings",layout:"settings",breadcrumbs:"/Settings"}},{path:"users",name:"Users",component:function(){return n.e("about").then(n.bind(null,"ed81"))},meta:{title:"Dashboard | Settings - Users",layout:"settings",breadcrumbs:"/Settings/Users"}},{path:"groups",name:"Groups",component:function(){return n.e("about").then(n.bind(null,"696f"))},meta:{title:"Dashboard | Settings - Groups",layout:"settings",breadcrumbs:"/Settings/Groups"}}]}],yt=new ft["a"]({mode:"history",base:"/dashboard/",routes:_t});yt.beforeEach((function(t,e,n){document.title=t.meta.title,n()}));var kt=yt,St=n("2f62");r["default"].use(St["a"]);var Ot=new St["a"].Store({state:{linksHome:[{name:"Home",url:"/"},{name:"Site",url:"/site"},{name:"Orders",url:"/orders"},{name:"Settings",url:"/settings"}],linksSettings:[{name:"Группы пользователей",url:"/settings/groups"},{name:"Пользователи",url:"/settings/users"}],counters:{home:0,site:0,orders:0,settings:0,users:0,groups:0}},mutations:{UPDATE_COUNTERS:function(t,e){t.counters[e]++}},actions:{},getters:{GET_LINKS_HOME:function(t){return t.linksHome},GET_LINKS_SETTINGS:function(t){return t.linksSettings},GET_COUNTERS:function(t){return t.counters}},modules:{}}),$t=n("ee98"),Et=n.n($t);r["default"].config.productionTip=!1,r["default"].use(Et.a),new r["default"]({router:kt,store:Ot,render:function(t){return t(lt)}}).$mount("#app")},"78b8":function(t,e,n){},9600:function(t,e,n){"use strict";n("c836")},9986:function(t,e,n){"use strict";n("0d85")},"9a37":function(t,e,n){},"9d3d":function(t,e,n){"use strict";n("46a0")},c14a:function(t,e,n){"use strict";n("9a37")},c836:function(t,e,n){},e2a0:function(t,e,n){},eab8:function(t,e,n){"use strict";e["a"]={methods:{counters:function(){return this.$store.getters.GET_COUNTERS}}}},ec50:function(t,e,n){"use strict";n("1f66")}});
//# sourceMappingURL=app.d589bfc1.js.map