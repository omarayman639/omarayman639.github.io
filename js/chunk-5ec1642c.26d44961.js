(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ec1642c"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var o=i("fe6c"),n=i("58df");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"54bd":function(t,e,i){t.exports=i.p+"img/toolbar-black-wood.ff6e8fd6.png"},"5e23":function(t,e,i){},"8b0d":function(t,e,i){},"8c2b":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-app-bar",{attrs:{src:i("54bd"),id:"home-app-bar",elevation:"1",height:"80"}},[o("base-img",{attrs:{src:i("f201"),contain:"","max-width":"250",width:"100%"}}),o("v-spacer"),o("div",{staticClass:"hidden-sm-and-down"},t._l(t.items,(function(e,i){return o("v-btn",{key:i,staticClass:"grey--text text--lighten-1",attrs:{text:"",ripple:!1,"active-class":"grey--text",exact:"Home"===e}},[t._v(t._s(e))])})),1),o("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",staticStyle:{color:"white"},on:{click:function(e){t.drawer=!t.drawer}}})],1),o("home-drawer",{attrs:{dark:"",items:t.items},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}})],1)},n=[],r=(i("d3b7"),{name:"HomeAppBar",components:{HomeDrawer:function(){return i.e("chunk-60285e93").then(i.bind(null,"4795"))}},methods:{s:function(){}},data:function(){return{drawer:null,items:["Home","About","Contact","our customers"]}}}),s=r,l=(i("b8ea"),i("2877")),c=i("6544"),a=i.n(c),h=(i("a9e3"),i("b680"),i("c7cd"),i("5530")),d=(i("8b0d"),i("0481"),i("4160"),i("4069"),i("3835")),p=(i("5e23"),i("8dd9")),u=i("adda"),f=i("80d2"),m=i("d9bd"),v=p["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(h["a"])(Object(h["a"])({},p["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(h["a"])(Object(h["a"])({},this.measurableStyles),{},{height:Object(f["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(d["a"])(e,2),o=i[0],n=i[1];t.$attrs.hasOwnProperty(o)&&Object(m["a"])(o,n,t)}))},methods:{genBackground:function(){var t={height:Object(f["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(u["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(f["f"])(this.computedContentHeight)}},Object(f["l"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(f["f"])(this.extensionHeight)}},Object(f["l"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}}),b=i("53ca");function g(t,e){var i=e.modifiers||{},o=i.self,n=void 0!==o&&o,r=e.value,s="object"===Object(b["a"])(r)&&r.options||{passive:!0},l="function"===typeof r||"handleEvent"in r?r:r.handler,c=n?t:e.arg?document.querySelector(e.arg):window;c&&(c.addEventListener("scroll",l,s),t._onScroll={handler:l,options:s,target:n?void 0:c})}function S(t){if(t._onScroll){var e=t._onScroll,i=e.handler,o=e.options,n=e.target,r=void 0===n?t:n;r.removeEventListener("scroll",i,o),delete t._onScroll}}var O={inserted:g,unbind:S},x=O,y=i("3a66"),w=i("2b0e"),T=w["a"].extend({name:"scrollable",directives:{Scroll:O},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(m["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),j=i("d10f"),B=i("f2e7"),C=i("58df"),H=Object(C["a"])(v,T,j["a"],B["a"],Object(y["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),A=H.extend({name:"v-app-bar",directives:{Scroll:x},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return T.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(h["a"])(Object(h["a"])({},v.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return v.options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,i=t,o=i-e,n=o/this.computedScrollThreshold,r=this.currentScroll*n;return Math.max(e,i-r)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,i=.00347;return Number((1.5-e*i).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=v.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:v.options.computed.isCollapsed.call(this)},isProminent:function(){return v.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(h["a"])(Object(h["a"])({},v.options.computed.styles.call(this)),{},{fontSize:Object(f["f"])(this.computedFontSize,"rem"),marginTop:Object(f["f"])(this.computedMarginTop),transform:"translateY(".concat(Object(f["f"])(this.computedTransform),")"),left:Object(f["f"])(this.computedLeft),right:Object(f["f"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=v.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=v.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),k=(i("498a"),i("9d26")),$=i("8336"),_=w["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var i=e.slots,o=e.listeners,n=e.props,r=e.data,s=Object.assign(r,{staticClass:"v-app-bar__nav-icon ".concat(r.staticClass||"").trim(),props:Object(h["a"])(Object(h["a"])({},n),{},{icon:!0}),on:o}),l=i().default;return t($["a"],s,l||[t(k["a"],"$menu")])}}),E=(i("20f6"),Object(f["g"])("spacer","div","v-spacer")),P=Object(l["a"])(s,o,n,!1,null,null,null);e["default"]=P.exports;a()(P,{VAppBar:A,VAppBarNavIcon:_,VBtn:$["a"],VSpacer:E})},9384:function(t,e,i){},b8ea:function(t,e,i){"use strict";var o=i("9384"),n=i.n(o);n.a},d10f:function(t,e,i){"use strict";var o=i("2b0e");e["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},f201:function(t,e,i){t.exports=i.p+"img/dark-logo-final.2ec270c8.png"}}]);
//# sourceMappingURL=chunk-5ec1642c.26d44961.js.map