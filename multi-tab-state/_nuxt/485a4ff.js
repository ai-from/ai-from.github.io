(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{267:function(n,o,t){"use strict";t.r(o);var e={name:"CoordsComponent",data:function(){return{}},computed:{coords:function(){return this.$store.state.coords}},mounted:function(){var n=this;window.addEventListener("mousemove",(function(o){n.$store.commit("setCoords",{x:o.clientX,y:o.clientY})}))}},r=t(45),component=Object(r.a)(e,(function(){var n=this,o=n._self._c;return o("div",[o("h1",[n._v("Coords")]),n._v("\n  X: "+n._s(n.coords.x)),o("br"),n._v("\n  Y: "+n._s(n.coords.y)+"\n")])}),[],!1,null,null,null);o.default=component.exports},270:function(n,o,t){"use strict";t.r(o);var e={name:"IndexPage"},r=t(45),component=Object(r.a)(e,(function(){return(0,this._self._c)("Coords")}),[],!1,null,null,null);o.default=component.exports;installComponents(component,{Coords:t(267).default})}}]);