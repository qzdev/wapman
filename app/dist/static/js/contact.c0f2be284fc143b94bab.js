webpackJsonp([1],{14:function(t,e,n){function i(t){n(44)}var o=n(1)(n(45),n(49),i,"data-v-525e81a9",null);t.exports=o.exports},15:function(t,e,n){"use strict";function i(t){window.apiready?window.apiready=function(){t()}:t()}function o(t){t=v()({},t,{slidBackEnabled:!1,useWKWebView:!0,historyGestureEnabled:!0}),window.api?(window.api.openWin(t),f()):(t.pageParam&&Object(h.c)("pageparams",t.pageParam),setTimeout(function(){window.location.href=t.url},t.delay))}function s(t){window.api?window.api.historyBack({frameName:t},function(t,e){!t.status&&window.api.closeWin()}):window.history.go(-1)}function a(t,e){window.api&&window.api.addEventListener({name:t},function(t,n){e(t,n)})}function r(t){window.api&&window.api.removeEventListener({name:t})}function c(t,e){window.api&&window.api.sendEvent({name:t,extra:e})}function l(t){window.api&&window.api.setStatusBarStyle({style:t})}function u(t){window.api&&window.api.addEventListener({name:"viewdisappear"},function(e,n){t(e,n)})}function d(){a("removePage",function(t,e){Object(m.c)()})}function f(){window.api&&(Object(m.b)("加载中"),d(),u(function(t,e){c("removePage",null),r("removePage")}))}e.a=i,e.c=o,e.b=s,e.d=l;var p=n(13),v=n.n(p),h=n(21),m=n(35)},160:function(t,e,n){function i(t){n(161)}var o=n(1)(n(162),n(167),i,"data-v-7dc0490d",null);t.exports=o.exports},161:function(t,e){},162:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(93),o=n.n(i),s=n(163),a=n.n(s);e.default={name:"content-main",props:{mounted:Boolean,respond:Boolean,offline:Boolean},computed:{show:function(){return!this.respond||this.mounted}},mounted:function(){var t=this;this.$nextTick(function(){t.$emit("data",!0)})},components:{Spinner:o.a,Offline:a.a}}},163:function(t,e,n){function i(t){n(164)}var o=n(1)(n(165),n(166),i,"data-v-7278da21",null);t.exports=o.exports},164:function(t,e){},165:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(75),o=n.n(i);e.default={methods:{refresh:function(){window.location.reload()}},components:{VcButton:o.a}}},166:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vc-offline"},[n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",{staticClass:"ol-refresh"},[n("vc-button",{attrs:{color:"vc-btn-primary-light"},on:{click:t.refresh}},[t._v("重新加载")])],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ol-img"},[n("i",{staticClass:"icon-discover"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"ol-desc"},[n("span",[t._v("网络不知道去哪了")]),t._v(" "),n("ins",[t._v("别紧张，轻触按钮重新加载页面〜")])])}]}},167:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-wrapper g-container"},[t.show?n("div",[t.offline?n("Offline"):t._t("default")],2):n("div",{staticClass:"vc-main"},[n("spinner",{attrs:{indeterminate:""}})],1)])},staticRenderFns:[]}},21:function(t,e,n){"use strict";function i(t){return!(!t||1!==t.nodeType)}function o(t,e){var n=window.localStorage;n&&2===arguments.length&&("object"===(void 0===e?"undefined":d()(e))?(e=l()(e),e="obj-"+e):e="str-"+e,n.setItem(t,e))}function s(t){var e=window.localStorage;if(e){var n=e.getItem(t);if(!n)return;if(0===n.indexOf("obj-"))return n=n.slice(4),JSON.parse(n);if(0===n.indexOf("str-"))return n.slice(4)}}function a(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");p&&v>=5&&(t.style.paddingTop="0.53334rem")}function r(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");p?a(t):f&&v>=4.4&&(t.style.paddingTop="0.66667rem")}e.c=o,e.b=s,e.a=r;var c=n(91),l=n.n(c),u=n(73),d=n.n(u),f=/android/gi.test(navigator.appVersion),p=/iPhone|iPad/gi.test(navigator.appVersion),v=parseFloat(navigator.appVersion)},217:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(36),n(12)),o=n(431),s=n.n(o),a=n(15);Object(a.a)(function(){console.log(navigator.appVersion),new i.a({el:"#app",render:function(t){return t(s.a)}})})},34:function(t,e,n){function i(t){n(46)}var o=n(1)(n(47),n(48),i,"data-v-afe59830",null);t.exports=o.exports},35:function(t,e,n){"use strict";function i(t){u.position="middle",u.title=t,u.icon="load",u.show()}function o(t){u.hide()}function s(t){u.position="bottom",u.icon=null,u.title=t,u.show(),d&&clearTimeout(d),d=setTimeout(function(){u.hide()},3e3)}e.b=i,e.c=o,e.a=s;var a=n(12),r=n(14),c=n.n(r),l=a.a.extend(c.a),u=(new l).$mount();document.body.appendChild(u.$el);var d=void 0},36:function(t,e,n){"use strict";var i=(n(76),n(39),n(12)),o=n(80),s=n.n(o),a=n(40),r=n.n(a),c=void 0,l={install:function(t,e){if(!c){var n=t.extend(r.a);c=(new n).$mount(),document.body.appendChild(c.$el)}var i={show:function(t){c.msg=t,c.show()},close:function(){c.hide()},open:function(t){t.title&&(c.title=t.title),t.msg&&(c.msg=t.msg),t.cancel&&(c.cancel=t.cancel),t.confirm&&(c.confirm=t.confirm),c.show()}};t.$dialog||(t.$dialog=i),t.mixin({created:function(){this.$dialog=t.$dialog}})}},u=n(14),d=n.n(u),f=void 0,p=void 0,v={install:function(t,e){if(!f){var n=t.extend(d.a);f=(new n).$mount(),document.body.appendChild(f.$el)}var i={loading:function(t){f.position="middle",f.title=t,f.icon="load",f.show()},open:function(t){f.position=t.position,f.title=t.title,f.text=t.text,f.icon=t.icon,f.show()},close:function(){f.hide()},autoClose:function(t){f.position=t.position,f.title=t.title,f.text=t.text,f.icon=t.icon,f.show(),t.autoClose&&(p&&clearTimeout(p),p=setTimeout(function(){f.hide()},1e3*t.sec))},error:function(t){f.position="bottom",f.icon=null,f.title=t,f.show(),p&&clearTimeout(p),p=setTimeout(function(){f.hide()},3e3)}};t.$toast||(t.$toast=i),t.mixin({created:function(){this.$toast=t.$toast}})}};i.a.use(l),i.a.use(v),s.a.attach(document.body)},39:function(t,e){},40:function(t,e,n){function i(t){n(41)}var o=n(1)(n(42),n(43),i,"data-v-136ae367",null);t.exports=o.exports},41:function(t,e){},42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),o=n.n(i);e.default={name:"dialog",props:{title:{type:String,default:"系统提示"},msg:{type:String},confirm:{type:Object,default:function(){return{text:"确定"}}},cancel:{type:Object,default:function(){return{text:"取消"}}}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{cancelBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.cancel)},confirmBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.confirm)}}}},43:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"dialog-fade",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-dialog",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"dialog-wrapper"},[n("div",{staticClass:"dialog-content"},[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{staticClass:"msg",domProps:{innerHTML:t._s(t.msg)}}),t._v(" "),n("div",{staticClass:"operate g-row"},[n("div",{staticClass:"g-col-4 left-btn",on:{click:t.cancelBtn.handle}},[t._v(t._s(t.cancel.text))]),t._v(" "),n("div",{staticClass:"g-col-4 right-btn",on:{click:t.confirmBtn.handle}},[t._v(t._s(t.confirm.text))])])])])])])},staticRenderFns:[]}},431:function(t,e,n){function i(t){n(432)}var o=n(1)(n(433),n(488),i,"data-v-43f5cb12",null);t.exports=o.exports},432:function(t,e){},433:function(t,e,n){"use strict";function i(t,e,n){g({url:"/mock",success:function(t){e(t)},faild:function(t){n(t)}})}Object.defineProperty(e,"__esModule",{value:!0});var o=n(84),s=n.n(o),a=n(88),r=n.n(a),c=n(160),l=n.n(c),u=n(459),d=n.n(u),f=n(73),p=n.n(f),v=n(13),h=n.n(v),m=n(468),_=n.n(m),w=n(35),g=function(t){t=h()({},{type:"GET",timeout:3e4,resType:"json",contentType:"application/json"},t),_.a.request({baseURL:"http://easy-mock.com/mock/598da121a1d30433d85e77b2/example",url:t.url,method:t.type,params:t.params,data:t.data,timeout:t.timeout,headers:{},withCredentials:!1,auth:{},responseType:t.resType,onUploadProgress:t.onUpload,onDownloadProgress:t.onDown,validateStatus:function(t){return t>=200&&t<300},maxContentLength:2e3}).then(function(e){var n=e.data||{};"0"===n.code?"object"===p()(n.data)?t.success(n.data):Object(w.a)('接口返回数据中没有"data"'):"10010"===n.code?Object(w.a)("用户登陆信息失效，请重新登录"):t.error?t.error(n.msg):Object(w.a)(n.msg||"请求返回错误")}).catch(function(e){t.faild(e)})};e.default={data:function(){return{show:null,offline:null,respond:null,personList:[]}},methods:{_init:function(){console.log("init")},getData:function(t){var e=this;this.respond=t,i(1,function(t){e.show=!0,e.personList=t.projects},function(t){t&&(e.show=!0,e.offline=!0)})}},created:function(){this._init()},components:{Page:s.a,TopBar:r.a,ContentMain:l.a,ListView:d.a}}},44:function(t,e){},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(34),o=n.n(i);e.default={props:{position:{type:String,default:"bottom"},title:{type:String},text:{type:String},icon:{type:String}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{positionCls:function(){switch(this.position){case"top":return"c-top";case"middle":return"c-middle";case"bottom":default:return"c-bottom"}}},components:{LoaderRack:o.a}}},459:function(t,e,n){function i(t){n(460)}var o=n(1)(n(461),n(467),i,"data-v-014e106e",null);t.exports=o.exports},46:function(t,e){},460:function(t,e){},461:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(462),o=n.n(i);e.default={name:"list-view",props:{data:{type:Array,default:[]}},methods:{scroll:function(t){console.log(t)}},created:function(){this.probeType=1,this.listenScroll=!1},components:{Scroll:o.a}}},462:function(t,e,n){function i(t){n(463)}var o=n(1)(n(464),n(466),i,"data-v-1935758e",null);t.exports=o.exports},463:function(t,e){},464:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(465),o=n.n(i);e.default={name:"scroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},data:{type:Array,default:null},pullup:{type:Boolean,default:!1},pulldown:{bype:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},methods:{_initScroll:function(){var t=this;if(this.$refs.wrapper){if(this.scroll=new o.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,scrollbar:!0}),this.listenScroll){var e=this;this.scroll.on("scroll",function(t){e.$emit("scroll",t)})}this.pullup&&this.scroll.on("scrollEnd",function(){t.scroll.y===t.scroll.maxScrollY+50&&t.$emit("scrollToEnd")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){t.$emit("beforeScroll")})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},mounted:function(){var t=this;this.$nextTick(function(){t._initScroll()})},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},this.refreshDelay)}},components:{BScroll:o.a}}},466:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"wrapper"},[t._t("default")],2)},staticRenderFns:[]}},467:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll",{ref:"listview",staticClass:"g-list-wrapper",attrs:{"listen-scroll":t.listenScroll,"probe-type":t.probeType,data:t.data},on:{scroll:t.scroll}},[n("div",{staticClass:"vc-list-view"},t._l(t.data,function(e){return n("div",{staticClass:"li-item g-box g-row g-list-padding"},[n("div",{staticClass:"g-col-2 li-name"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("div",{staticClass:"g-col-6"},[t._v("\n        "+t._s(e.address)+"\n      ")])])}))])},staticRenderFns:[]}},47:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},48:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"loader"},[t._v("Loading...")])},staticRenderFns:[]}},488:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("div",{slot:"head"},[n("top-bar",{attrs:{title:"联系人"}})],1),t._v(" "),n("content-main",{attrs:{mounted:t.show,respond:t.respond,offline:t.offline},on:{data:t.getData}},[n("list-view",{ref:"list",attrs:{data:t.personList}})],1)],1)},staticRenderFns:[]}},49:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-toast",class:t.positionCls,on:{click:function(t){t.stopPropagation()}}},[t.icon?n("div",{staticClass:"vc-toast-icon"},[n("p",["load"===t.icon?n("loader-rack"):n("i",{class:t.icon})],1)]):t._e(),t._v(" "),t.title?n("div",{staticClass:"vc-toast-title"},[n("p",[n("span",[t._v(t._s(t.title))])])]):t._e(),t._v(" "),t.text?n("div",[n("p",[n("span",[t._v(t._s(t.text))])])]):t._e()])},staticRenderFns:[]}},75:function(t,e,n){function i(t){n(97)}var o=n(1)(n(98),n(99),i,"data-v-3d98de8a",null);t.exports=o.exports},84:function(t,e,n){function i(t){n(85)}var o=n(1)(n(86),n(87),i,null,null);t.exports=o.exports},85:function(t,e){},86:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{_scal:function(){var t=this.$refs.page.offsetHeight,e=this.$refs.top.offsetHeight,n=this.$refs.foot.offsetHeight;this.$refs.content.style.height=t-e-n+"px"}},mounted:function(){var t=this;this.$nextTick(function(){t._scal()})},components:{}}},87:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"page",staticClass:"vc-page"},[n("header",{ref:"top",staticClass:"vc-page-top"},[t._t("head")],2),t._v(" "),n("section",{ref:"content",staticClass:"vc-page-content"},[t._t("default")],2),t._v(" "),n("footer",{ref:"foot",staticClass:"vc-page-footer"},[t._t("foot")],2)])},staticRenderFns:[]}},88:function(t,e,n){function i(t){n(89)}var o=n(1)(n(90),n(92),i,"data-v-649a4d91",null);t.exports=o.exports},89:function(t,e){},90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(13),o=n.n(i),s=n(15),a=n(21);e.default={props:{title:{type:String},titleBox:{type:Object},left:{type:Object,default:function(){return{icon:"icon-back",handle:function(){Object(s.b)()}}}},right:{type:Array}},data:function(){return{leftObj:{}}},methods:{_initBar:function(){this._fixStatusBar()},_fixStatusBar:function(){Object(a.a)(this.$refs.bar),Object(s.d)("light")}},computed:{titleBtn:function(){return this.title?this.title:this.titleBox?o()({},{icon:"icon-pulldown1",text:null},this.titleBox):void 0}},mounted:function(){this._initBar()}}},92:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bar",staticClass:"c-bar"},[n("div",{staticClass:"c-bar-left c-square",on:{click:t.left.handle}},[n("i",{class:t.left.icon})]),t._v(" "),n("div",{staticClass:"c-bar-center c-square",class:{"c-title":!t.titleBtn.icon}},[t.titleBtn.icon?n("div",[n("span",[t._v(t._s(t.titleBtn.text))]),t._v(" "),n("i",{class:t.titleBtn.icon})]):n("span",[t._v(t._s(t.titleBtn))])]),t._v(" "),n("div",{staticClass:"c-bar-right c-square"},t._l(t.right,function(e){return n("div",{staticClass:"c-right-item",on:{click:e.handle}},[e.icon?n("i",{class:e.icon}):n("span",[t._v(t._s(e.text))])])})),t._v(" "),n("div",{staticClass:"c-slot"},[t._t("default")],2)])},staticRenderFns:[]}},93:function(t,e,n){function i(t){n(94)}var o=n(1)(n(95),n(96),i,"data-v-d6c7eda0",null);t.exports=o.exports},94:function(t,e){},95:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"spinner",props:{size:{type:Number,default:1.067},stroke:{type:Number,default:3.5},indeterminate:Boolean,progress:{type:Number,default:0}},computed:{classes:function(){return{"vc-indeterminate":this.indeterminate}},styles:function(){var t=this.size+"rem";return{width:t,height:t}},dashProgress:function(){var t=125*this.progress/100;return!this.indeterminate&&(t>=125&&(t=130),t+", 200")}}}},96:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vc-spinner",appear:""}},[n("div",{staticClass:"vc-spinner",class:t.classes,style:t.styles},[n("svg",{staticClass:"vc-spinner-draw",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"vc-spinner-path",attrs:{cx:"50",cy:"50",r:"20","stroke-width":t.stroke,"stroke-dasharray":t.dashProgress}})])])])},staticRenderFns:[]}},97:function(t,e){},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{btn:Object,disabled:Boolean,color:String},computed:{classes:function(){return this.color||"vc-btn-primary"}}}},99:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vc-btn"},[n("button",{class:t.classes,attrs:{disabled:t.disabled},on:{click:function(e){t.$emit("click",e)}}},[t._t("default")],2)])},staticRenderFns:[]}}},[217]);