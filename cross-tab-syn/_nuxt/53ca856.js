(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{268:function(o,n,t){"use strict";t.r(n);var e={name:"Coords",data:function(){return{}},computed:{coords:function(){return this.$store.state.coords}},mounted:function(){var o=this;window.addEventListener("mousemove",(function(n){o.$store.commit("setCoords",{x:n.clientX,y:n.clientY})}))}},r=t(45),component=Object(r.a)(e,(function(){var o=this,n=o._self._c;return n("div",[n("h1",[o._v("Coords")]),o._v("\n  X: "+o._s(o.coords.x)+" "),n("br"),o._v("\n  Y: "+o._s(o.coords.y)+"\n")])}),[],!1,null,null,null);n.default=component.exports}}]);