(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/index/index"],{"0068":function(t,e,n){"use strict";n.r(e);var r=n("2500"),i=n("089f");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("2005");var o=n("2877"),u=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=u.exports},"064e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("add1")),i=o(n("0068")),a=n("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={components:{lidadaSwiper:r.default,uniGrid:i.default},data:function(){return{banner:[],grid:[]}},onLoad:function(){this.$store.commit("userInfoUpdate"),t.startPullDownRefresh()},computed:u({},(0,a.mapState)(["localhost","userInformation"])),onShow:function(){this.$store.commit("userInfoUpdate"),console.info(JSON.stringify(this.userInformation))},methods:{bindClick:function(e){var n=this.grid[e.index].href;n?t.navigateTo({url:n}):t.showToast({title:"功能开发中...",icon:"none"})},cardClick:function(e){console.log(e),console.log(e.currentTarget.dataset.href),t.showToast({title:"功能开发中...",icon:"none"})}},onPullDownRefresh:function(){var e=this;t.showLoading({title:"加载中请稍后..."}),t.request({url:this.localhost+"/indexBanner",method:"POST",success:function(t){var n=t.data.data,r=n.length;e.indicatorDots=r>1,e.banner=n,console.log("请求完成")},fail:function(){},complete:function(){setTimeout(function(){t.hideLoading(),t.stopPullDownRefresh()},1e3)}}),t.request({url:this.localhost+"/indexGrid",method:"POST",success:function(t){var n=t.data.data;e.grid=n},fail:function(){},complete:function(){setTimeout(function(){t.hideLoading(),t.stopPullDownRefresh()},1e3)}})}};e.default=c}).call(this,n("649d")["default"])},"089f":function(t,e,n){"use strict";n.r(e);var r=n("ef3e"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},2005:function(t,e,n){"use strict";var r=n("82d9"),i=n.n(r);i.a},2500:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-grid",class:t.setBorderClass},t._l(t.gridGroup,function(e,r){return t.gridGroup.length>0?n("view",{key:r,staticClass:"uni-grid__flex"},t._l(e,function(e,i){return n("view",{key:i,staticClass:"uni-grid-item",class:[i===t.columnNumber?"uni-grid-item-last":"","uni-grid-item-"+t.type],style:{flexBasis:100/t.columnNumber+"%"},attrs:{"hover-class":"uni-grid-item-hover","hover-start-time":20,"hover-stay-time":70,eventid:"abb3f2f4-0-"+r+"-"+i},on:{click:function(e){t.onClick(r,i)}}},[n("view",{staticClass:"uni-grid-item__content"},[n("image",{staticClass:"uni-grid-item-image",attrs:{src:e.image}}),n("text",{staticClass:"uni-grid-item-text"},[t._v(t._s(e.text))])])])})):t._e()}))},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},"264c":function(t,e,n){"use strict";n("9798");var r=a(n("b0ce")),i=a(n("7162"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,r.default)(i.default))},"4c64":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{},[n("swiper",{staticClass:"lidada-swiper",class:{statusBarHeightBox:t.statusBarHeight},attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:3e3,duration:1e3,circular:!0}},t._l(t.listData,function(e,r){return n("swiper-item",{key:r,attrs:{mpcomid:"31bc3e05-0-"+r}},[n("view",{staticClass:"swiper-item",class:{statusBarHeight:t.statusBarHeight},style:{background:e.background},attrs:{"data-href":e.href,eventid:"31bc3e05-0-"+r},on:{tap:t.onClick}},[n("image",{attrs:{src:e.image}})])])}))],1)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},7162:function(t,e,n){"use strict";n.r(e);var r=n("9d59"),i=n("ad60");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("c112");var o=n("2877"),u=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=u.exports},"76d5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"lidada-swiper",data:function(){return{indicatorDots:!0}},props:{listData:Object,jump:String,autoplay:String,statusBarHeight:String},methods:{onClick:function(e){var n=e.currentTarget.dataset.href;n&&this.jump&&t.navigateTo({url:n})}}};e.default=n}).call(this,n("649d")["default"])},"82d9":function(t,e,n){},"8d95":function(t,e,n){"use strict";var r=n("9118"),i=n.n(r);i.a},9118:function(t,e,n){},"965e":function(t,e,n){"use strict";n.r(e);var r=n("76d5"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},"9d59":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"index"},[n("view",{staticClass:"content"},[n("lidada-swiper",{attrs:{listData:t.banner,jump:!1,statusBarHeight:!0,autoplay:!0,mpcomid:"3733956d-0"}}),n("uni-grid",{attrs:{data:t.grid,type:t.oblong,"column-num":5,"show-out-border":!1,"show-border":!1,eventid:"3733956d-0",mpcomid:"3733956d-1"},on:{click:t.bindClick}}),n("view",{staticClass:"m_cardImg"},[n("image",{attrs:{"data-href":1234,src:"../../../static/card_img.jpg",mode:"",eventid:"3733956d-1"},on:{tap:t.cardClick}}),n("image",{attrs:{"data-href":2134,src:"../../../static/card_img.jpg",mode:"",eventid:"3733956d-2"},on:{tap:t.cardClick}}),n("image",{attrs:{"data-href":1234,src:"../../../static/card_img.jpg",mode:"",eventid:"3733956d-3"},on:{tap:t.cardClick}}),n("image",{attrs:{"data-href":56554,src:"../../../static/card_img.jpg",mode:"",eventid:"3733956d-4"},on:{tap:t.cardClick}})])],1)])},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},a1d4:function(t,e,n){},ad60:function(t,e,n){"use strict";n.r(e);var r=n("064e"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},add1:function(t,e,n){"use strict";n.r(e);var r=n("4c64"),i=n("965e");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("8d95");var o=n("2877"),u=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=u.exports},c112:function(t,e,n){"use strict";var r=n("a1d4"),i=n.n(r);i.a},ef3e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"uni-grid",props:{data:Array,type:{type:String,default:"square"},columnNum:{type:[Number,String],default:3},showOutBorder:{type:[Boolean,String],default:!0},showBorder:{type:[Boolean,String],default:!0}},data:function(){return{}},computed:{columnNumber:function(){return Number(this.columnNum)?Number(this.columnNum):3},gridGroup:function(){var t=this,e=[],n=[];return this.data&&this.data.forEach(function(r,i){n.push(r),i%t.columnNum===t.columnNum-1&&(e.push(n),n=[])}),n.length>0&&e.push(n),n=null,e},setBorderClass:function(){var t=[];return!1===this.showBorder||"false"===this.showBorder?(t.push("uni-grid-no-border"),t):(!1!==this.showOutBorder&&"false"!==this.showOutBorder||t.push("uni-grid-no-out-border"),t)}},methods:{onClick:function(t,e){this.$emit("click",{index:t*this.columnNumber+e})}}};e.default=r}},[["264c","common/runtime","common/vendor"]]]);