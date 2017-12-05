webpackJsonp([9],{10:function(t,n,e){function i(t){e(24)}var o=e(1)(e(25),e(29),i,"data-v-525e81a9",null);t.exports=o.exports},12:function(t,n,e){"use strict";function i(t){d.position="middle",d.title=t,d.icon="load",d.show()}function o(t){d.hide()}function a(t){d.position="bottom",d.icon=null,d.title=t,d.show(),u&&clearTimeout(u),u=setTimeout(function(){d.hide()},3e3)}n.b=i,n.c=o,n.a=a;var c=e(9),s=e(10),r=e.n(s),u=null,l=c.a.extend(r.a),d=(new l).$mount();document.body.appendChild(d.$el)},17:function(t,n,e){function i(t){e(26)}var o=e(1)(e(27),e(28),i,"data-v-afe59830",null);t.exports=o.exports},18:function(t,n,e){"use strict";var i=(e(69),e(19),e(9)),o=e(72),a=e.n(o),c=e(20),s=e.n(c),r=void 0,u={install:function(t,n){if(!r){var e=t.extend(s.a);r=(new e).$mount(),document.body.appendChild(r.$el)}var i={show:function(t){r.msg=t,r.show()},close:function(){r.hide()},open:function(t){t.title&&(r.title=t.title),t.msg&&(r.msg=t.msg),t.cancel&&(r.cancel=t.cancel),t.confirm&&(r.confirm=t.confirm),r.show()}};t.$dialog||(t.$dialog=i),t.mixin({created:function(){this.$dialog=t.$dialog}})}},l=e(10),d=e.n(l),f=void 0,p=void 0,v={install:function(t,n){if(!f){var e=t.extend(d.a);f=(new e).$mount(),document.body.appendChild(f.$el)}var i={loading:function(t){f.position="middle",f.title=t,f.icon="load",f.show()},open:function(t){f.position=t.position,f.title=t.title,f.text=t.text,f.icon=t.icon,f.show()},close:function(){f.hide()},autoClose:function(t){f.position=t.position,f.title=t.title,f.text=t.text,f.icon=t.icon,f.show(),t.autoClose&&(p&&clearTimeout(p),p=setTimeout(function(){f.hide()},1e3*t.sec))},error:function(t){f.position="bottom",f.icon=null,f.title=t,f.show(),p&&clearTimeout(p),p=setTimeout(function(){f.hide()},3e3)}};t.$toast||(t.$toast=i),t.mixin({created:function(){this.$toast=t.$toast}})}},m=e(30),w=e.n(m),h=void 0,g={install:function(t,n){if(!h){var e=t.extend(w.a);h=(new e).$mount(),document.body.appendChild(h.$el)}var i={init:function(t){h.btns=t},show:function(){h.show()},close:function(){h.hide()}};t.$action||(t.$action=i),t.mixin({created:function(){this.$action=t.$action}})}};i.a.use(u),i.a.use(v),i.a.use(g),a.a.attach(document.body)},19:function(t,n){},20:function(t,n,e){function i(t){e(21)}var o=e(1)(e(22),e(23),i,"data-v-136ae367",null);t.exports=o.exports},21:function(t,n){},22:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(6),o=e.n(i);n.default={name:"dialog",props:{title:{type:String,default:"系统提示"},msg:{type:String},confirm:{type:Object,default:function(){return{text:"确定"}}},cancel:{type:Object,default:function(){return{text:"取消"}}}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{cancelBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.cancel)},confirmBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.confirm)}}}},23:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"dialog-fade",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-dialog",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"dialog-wrapper"},[e("div",{staticClass:"dialog-content"},[e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("p",{staticClass:"msg",domProps:{innerHTML:t._s(t.msg)}}),t._v(" "),e("div",{staticClass:"operate g-row"},[e("div",{staticClass:"g-col-4 left-btn",on:{click:t.cancelBtn.handle}},[t._v(t._s(t.cancel.text))]),t._v(" "),e("div",{staticClass:"g-col-4 right-btn",on:{click:t.confirmBtn.handle}},[t._v(t._s(t.confirm.text))])])])])])])},staticRenderFns:[]}},24:function(t,n){},25:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(17),o=e.n(i);n.default={props:{position:{type:String,default:"bottom"},title:{type:String},text:{type:String},icon:{type:String}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{positionCls:function(){switch(this.position){case"top":return"c-top";case"middle":return"c-middle";case"bottom":default:return"c-bottom"}}},components:{LoaderRack:o.a}}},26:function(t,n){},27:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},28:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"loader"},[t._v("Loading...")])},staticRenderFns:[]}},29:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-toast",class:t.positionCls,on:{click:function(t){t.stopPropagation()}}},[t.icon?e("div",{staticClass:"vc-toast-icon"},[e("p",["load"===t.icon?e("loader-rack"):e("i",{class:t.icon})],1)]):t._e(),t._v(" "),t.title?e("div",{staticClass:"vc-toast-title"},[e("p",[e("span",[t._v(t._s(t.title))])])]):t._e(),t._v(" "),t.text?e("div",[e("p",[e("span",[t._v(t._s(t.text))])])]):t._e()])},staticRenderFns:[]}},3:function(t,n,e){"use strict";function i(){return b.a?new g.a(function(t,n){window.apiready=function(){d("light"),t()}}):g.a.resolve()}function o(t){t=w()({},t,{slidBackEnabled:!1,historyGestureEnabled:!0}),window.api?(window.api.openWin(t),p()):(t.pageParam&&Object(b.e)("pageparams",t.pageParam),setTimeout(function(){window.location.href=t.url},t.delay))}function a(t){window.api?window.api.historyBack({frameName:t},function(t,n){!t.status&&window.api.closeWin()}):window.history.go(-1)}function c(t){window.api&&window.api.closeToWin({name:t})}function s(){var t=void 0,n="再按一次退出"+window.api.appName;r("keyback",function(e){t?(new Date).getTime()-t<2e3&&window.api.closeWidget({silent:!0}):(t=(new Date).getTime(),window.api.toast({msg:n,duration:1500,location:"bottom"}),setTimeout(function(){t=null},1e3))})}function r(t,n){window.api?window.api.addEventListener({name:t},function(t,e){var i=t&&t.value||{};e&&e.msg&&Object(y.a)(e.msg),n(i)}):console.warn("api is not be found in addEvent")}function u(t){window.api?window.api.removeEventListener({name:t}):console.warn("api is not be found in removeEvent")}function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.api?window.api.sendEvent({name:t,extra:n}):console.warn("api is not be found in sendEvent")}function d(t){window.api?window.api.setStatusBarStyle({style:t}):console.warn("api is not be found in setStatusBarStyle")}function f(t){window.api?window.api.removeLaunchView({animation:{type:"fade",duration:t}}):console.warn("api is not be found in removeLaunch")}function p(){window.api?(Object(y.b)("加载中"),r("removePage",function(t){Object(y.c)(),u("removePage")}),r("viewdisappear",function(t){return l("removePage")})):console.warn("api is not be found in openPage")}function v(t){return t=w()({},{sourceType:"camera",encodingType:"jpg",mediaValue:"pic",destinationType:"url",allowEdit:!0,quality:80,targetWidth:100,targetHeight:100,saveToPhotoAlbum:!1},t),window.api?new g.a(function(n,e){window.api.getPicture(t,function(e,i){if(e){var o="base64"===t.destinationType?e.base64Data:e.data;n(o)}else i&&i.msg&&Object(y.a)(i.msg)})}):g.a.resolve()}n.b=i,n.g=o,n.c=a,n.d=c,n.e=s,n.a=r,n.i=l,n.h=f,n.f=v;var m=e(6),w=e.n(m),h=e(34),g=e.n(h),b=e(7),y=e(12)},30:function(t,n,e){function i(t){e(31)}var o=e(1)(e(32),e(33),i,"data-v-73609114",null);t.exports=o.exports},31:function(t,n){},32:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"action-sheet",props:{btns:{type:Array,default:function(){return[{name:"是",handle:function(){}},{name:"否",handle:function(){}}]}}},data:function(){return{display:!1}},methods:{show:function(){this.display=!0},hide:function(){this.display=!1}}}},33:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"as-slide",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"vc-as",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"vc-as-body g-box",class:{"vc-as-down":!t.display}},[e("div",{staticClass:"vc-as-menu"},[e("ul",t._l(t.btns,function(n){return e("li",{staticClass:"vc-as-btn"},[e("div",{staticClass:"vc-li-item",on:{click:n.handle}},[e("span",{domProps:{innerHTML:t._s(n.name)}})])])}))]),t._v(" "),e("div",{staticClass:"vc-as-btn vc-as-cancel",on:{click:t.hide}},[t._v("取消")])])])])},staticRenderFns:[]}},565:function(t,n,e){"use strict";function i(){var t=Object(u.d)("userData");t&&t.id?c():s()}function o(){var t=Object(u.d)("userData");Object(r.d)("root"),Object(u.b)(),t&&Object(u.e)("userCode",t.name),Object(l.a)(500).then(function(){return Object(r.i)("home")})}function a(t){Object(r.d)("root"),Object(u.e)("userData",t),Object(u.e)("token",t.token),Object(l.a)(500).then(function(){return Object(r.i)("home")})}function c(){Object(r.g)({name:"index",url:"./index.html"})}function s(){Object(r.g)({name:"login",url:"./login.html"})}Object.defineProperty(n,"__esModule",{value:!0});var r=(e(18),e(3)),u=e(7),l=e(58);Object(r.b)().then(function(){Object(r.a)("home",function(t){return i()}),Object(r.a)("login",function(t){return a(t)}),Object(r.a)("loginout",function(t){return o()}),i(),Object(l.a)(2e3).then(function(){Object(r.h)(2e3)})})},58:function(t,n,e){"use strict";function i(t){return new a.a(function(n,e){setTimeout(n,t)})}n.a=i;var o=e(34),a=e.n(o)},7:function(t,n,e){"use strict";function i(t){return!(!t||1!==t.nodeType)}function o(t,n){var e=window.localStorage;e&&2===arguments.length&&("object"===(void 0===n?"undefined":f()(n))?(n=l()(n),n="obj-"+n):n="str-"+n,e.setItem(t,n))}function a(t){var n=window.localStorage;if(n){var e=n.getItem(t);if(!e)return;if(0===e.indexOf("obj-"))return e=e.slice(4),JSON.parse(e);if(0===e.indexOf("str-"))return e.slice(4)}}function c(){var t=window.localStorage;t&&t.clear()}function s(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");m&&w>=5&&(t.style.paddingTop="0.53334rem")}function r(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");m?s(t):v&&w>=4.4&&(t.style.paddingTop="0.66667rem")}e.d(n,"a",function(){return p}),n.e=o,n.d=a,n.b=c,n.c=r;var u=e(73),l=e.n(u),d=e(74),f=e.n(d),p=/file/gi.test(location.protocol),v=/android/gi.test(navigator.appVersion),m=/iPhone|iPad/gi.test(navigator.appVersion),w=parseFloat(navigator.appVersion)}},[565]);