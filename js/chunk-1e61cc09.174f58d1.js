(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e61cc09"],{bd0c:function(t,n,e){},c7ca:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-content",[e("v-fade-transition",{attrs:{mode:"out-in"}},[e("router-view")],1)],1)},i=[],o={name:"BaseView"},r=o,s=e("2877"),c=e("6544"),d=e.n(c),u=(e("bd0c"),e("d10f")),l=u["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,e=t.top,a=t.right,i=t.footer,o=t.insetFooter,r=t.bottom,s=t.left;return{paddingTop:"".concat(e+n,"px"),paddingRight:"".concat(a,"px"),paddingBottom:"".concat(i+o+r,"px"),paddingLeft:"".concat(s,"px")}}},render:function(t){var n={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,n,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),p=e("d9bd"),f=l.extend({name:"v-main",created:function(){Object(p["d"])("v-content","v-main",this)},render:function(t){var n=l.options.render.call(this,t);return n.data.staticClass+=" v-content",n.children[0].data.staticClass+=" v-content__wrap",t(n.tag,n.data,n.children)}}),v=e("0789"),m=Object(s["a"])(r,a,i,!1,null,null,null);n["default"]=m.exports;d()(m,{VContent:f,VFadeTransition:v["b"]})},d10f:function(t,n,e){"use strict";var a=e("2b0e");n["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})}}]);
//# sourceMappingURL=chunk-1e61cc09.174f58d1.js.map