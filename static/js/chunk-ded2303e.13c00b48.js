/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2020-12-25 16:29:13
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ded2303e"],{"07a6":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pic-img"},[o("div",{staticClass:"img-container",on:{mousemove:function(e){!t.moveEvent&&t.mouseMove(e)},mouseleave:function(e){!t.leaveEvent&&t.mouseLeave(e)}}},[o("img",{ref:"img",staticStyle:{width:"100%"},attrs:{src:t.lazyload?t.imgLoadedFlag&&t.url:t.url},on:{load:function(e){!t.lazyload&&t.imgLoaded(e)}}}),t.hideZoom||!t.imgLoadedFlag||t.hideSelector?t._e():o("div",{class:["img-selector",{circle:"circle"===t.type}],style:[t.imgSelectorStyle,t.imgSelectorSize,t.imgSelectorPosition,!t.outShow&&t.imgBg,!t.outShow&&t.imgBgSize,!t.outShow&&t.imgBgPosition]},[t._t("default")],2),t.outShow?o("div",{directives:[{name:"show",rawName:"v-show",value:!t.hideOutShow,expression:"!hideOutShow"}],class:["img-out-show",{"base-line":t.baseline}],style:[t.imgOutShowSize,t.imgOutShowPosition,t.imgBg,t.imgBgSize,t.imgBgPosition]},[t.pointer?o("div",{staticClass:"img-selector-point"}):t._e()]):t._e()])])},n=[],s=(o("445a"),o("a543"),o("d0bf"),o("402f"),{props:{url:{type:String,default:""},highUrl:{type:String,default:""},width:{type:Number,default:168},type:{type:String,default:"circle",validator:function(t){return-1!==["circle","square"].indexOf(t)}},selectorStyle:{type:Object,default:function(){return{}}},outShowStyle:{},scale:{type:Number,default:3},lazyload:{type:Boolean,default:!1},moveEvent:{type:[Object,MouseEvent],default:null},leaveEvent:{type:[Object,MouseEvent],default:null},hideZoom:{type:Boolean,default:!1},outShow:{type:Boolean,default:!1},pointer:{type:Boolean,default:!1},baseline:{type:Boolean,default:!1}},data:function(){return{selector:{width:this.width,top:0,left:0,bgTop:0,bgLeft:0,rightBound:0,bottomBound:0,absoluteLeft:0,absoluteTop:0},imgInfo:{},$img:null,screenWidth:document.body.clientWidth,outShowInitTop:0,outShowTop:0,hideOutShow:!0,imgLoadedFlag:!1,highImgLoadedFlag:!1,hideSelector:!0,timer:null}},computed:{addWidth:function(){return this.outShow?0:this.width/2*(1-this.scale)},imgSelectorPosition:function(){var t=this.selector,e=t.top,o=t.left;return{top:"".concat(e,"px"),left:"".concat(o,"px")}},imgSelectorSize:function(){var t=this.selector.width;return{width:"".concat(t,"px"),height:"".concat(t,"px")}},imgSelectorStyle:function(){return this.selectorStyle},imgOutShowSize:function(){var t=this.scale,e=this.selector.width;return{width:"".concat(e*t,"px"),height:"".concat(e*t,"px")}},imgOutShowPosition:function(){return{top:"".concat(this.outShowTop,"px"),right:"".concat(-8,"px")}},imgBg:function(){return{backgroundImage:"url(".concat(this.highUrl||this.url,")")}},imgBgSize:function(){var t=this.scale,e=this.imgInfo,o=e.height,i=e.width;return{backgroundSize:"".concat(i*t,"px ").concat(o*t,"px")}},imgBgPosition:function(){var t=this.selector,e=t.bgLeft,o=t.bgTop;return{backgroundPosition:"".concat(e,"px ").concat(o,"px")}}},watch:{moveEvent:function(t){this.mouseMove(t)},leaveEvent:function(t){this.mouseLeave(t)},url:function(){this.handlerUrlChange()},width:function(t){this.initSelectorProperty(t)},screenWidth:function(t){var e=this;this.timer||(this.screenWidth=t,this.timer=setTimeout((function(){e.imgLoaded(),clearTimeout(e.timer),e.timer=null}),400))}},created:function(){this.url&&this.lazyload&&this.handlerUrlChange()},mounted:function(){this.$img=this.$refs["img"]},methods:{handlerUrlChange:function(){this.imgLoadedFlag=!1,this.lazyload&&this.loadImg(this.url).then(this.imgLoaded,(function(t){return console.error(t)}))},loadImg:function(t){return new Promise((function(e,o){var i=document.createElement("img");i.addEventListener("load",e),i.addEventListener("error",o),i.src=t}))},imgLoaded:function(){var t=this.$img.getBoundingClientRect();JSON.stringify(this.imgInfo)!=JSON.stringify(t)&&(this.imgInfo=t,this.initSelectorProperty(this.width),this.resetOutShowInitPosition()),this.imgLoadedFlag||(this.imgLoadedFlag=!0,this.$emit("created",t))},mouseMove:function(t){if(!this.hideZoom&&this.imgLoadedFlag){this.imgLoaded();var e=t.pageX,o=t.pageY,i=t.clientY,n=this.scale,s=this.selector,a=this.outShow,r=this.addWidth,l=(this.outShowAutoScroll,this.outShowInitTop),u=o-i,h=s.absoluteLeft,c=s.absoluteTop,d=s.rightBound,g=s.bottomBound,m=e-h,f=o-c;a&&(l||(l=this.outShowInitTop=u+this.imgInfo.top),this.hideOutShow&&(this.hideOutShow=!1),this.outShowTop=u>l?u-l:0),this.hideSelector&&(this.hideSelector=!1),s.top=f>0?f<g?f:g:0,s.left=m>0?m<d?m:d:0,s.bgLeft=r-m*n,s.bgTop=r-f*n}},initSelectorProperty:function(t){var e=t/2,o=this.selector,i=this.imgInfo,n=i.width,s=i.height,a=i.left,r=i.top,l=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,u=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft;o.width=t,o.rightBound=n-t,o.bottomBound=s-t,o.absoluteLeft=a+e+u,o.absoluteTop=r+e+l},mouseLeave:function(){this.hideSelector=!0,this.outShow&&(this.hideOutShow=!0)},reset:function(){Object.assign(this.selector,{top:0,left:0,bgLeft:0,bgTop:0}),this.resetOutShowInitPosition()},resetOutShowInitPosition:function(){this.outShowInitTop=0}}}),a=s,r=(o("b906"),o("2877")),l=Object(r["a"])(a,i,n,!1,null,"66bbd7d4",null),u=l.exports,h=u;"undefined"!==typeof window&&window.Vue&&window.Vue.component("zx-magnifie",u);e["default"]=h},a2a9:function(t,e,o){},b906:function(t,e,o){"use strict";o("a2a9")},c29e:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"magnifier-container"},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",[t._v("放大镜1")])]),o("vab-magnifier",{attrs:{url:"https://picsum.photos/960/540?random=1",type:"circle"}})],1)],1),o("el-col",{attrs:{xs:24,sm:24,md:24,lg:12,xl:12}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{attrs:{slot:"header"},slot:"header"},[o("span",[t._v("放大镜2")])]),o("vab-magnifier",{attrs:{url:"https://picsum.photos/960/540?random=2",type:"square"}})],1)],1)],1)],1)},n=[],s=o("07a6"),a={name:"Magnifier",components:{VabMagnifier:s["default"]}},r=a,l=o("2877"),u=Object(l["a"])(r,i,n,!1,null,null,null);e["default"]=u.exports}}]);