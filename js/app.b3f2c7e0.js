(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3e4b":function(e,t,n){"use strict";var a=n("bbfb"),o=n.n(a);o.a},"48e4":function(e,t,n){"use strict";var a=n("c6bd"),o=n.n(a);o.a},"4f87":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Taskbar"),n("router-view")],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-full w-64 z-40 fixed bg-blue-900 shadow-xl float-left p-2 text-white noselect",attrs:{id:"navbar"}},[n("div",{staticClass:"highlight",attrs:{id:"profile",onclick:"highlightBox('profile')"}},[n("div",{staticClass:"rounded-lg bg-cover",staticStyle:{"background-image":"url('https://avatars3.githubusercontent.com/u/25752941?s=460&u=131730e97ddb996d629a0c9a2a69d73a1254d8f9&v=4')"},attrs:{id:"first"}}),e._m(0),n("div",{attrs:{id:"third"}},[n("font-awesome-icon",{attrs:{icon:"arrow-alt-circle-right"}})],1)]),n("div",{staticClass:"font-bold",attrs:{id:"title"}},[e._v("\n        Menu:\n    ")]),e._l(e.items,(function(t){return n("div",{key:t.message},[n("router-link",{attrs:{to:t.link}},[n("div",{attrs:{id:"wrapper"}},[n("div",{staticClass:"rounded-lg bg-cover bg-orange-500",attrs:{id:"first"}}),n("div",{staticClass:"menuOptionTitle",attrs:{id:"second"}},[n("span",{staticClass:"font-extrabold"},[e._v(e._s(t.message))])]),n("div",{attrs:{id:"third"}})])])],1)}))],2)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"second"}},[n("span",{staticClass:"font-extrabold"},[e._v("Joshua Lowe")]),e._v(" Fulfilment Provider\n        ")])}],c={data:function(){return{msg:"Post vue",items:[{message:"Scan Barcode",link:"scan"},{message:"Settings",link:"settings"}]}}},l=c,d=(n("48e4"),n("2877")),u=Object(d["a"])(l,s,i,!1,null,null,null),f=u.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-16 w-full bg-white shadow-xl py-3 fixed z-0"})},m=[],v={data:function(){return{msg:"Post vue"}}},p=v,g=Object(d["a"])(p,h,m,!1,null,null,null),b=g.exports,w={name:"app",components:{Navbar:f,Taskbar:b}},x=w,_=Object(d["a"])(x,o,r,!1,null,null,null),y=_.exports,C=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"scan"}},[e.menu?n("div",{staticClass:"grid-container"},[e._m(0),n("div",{staticClass:"Left bg-white shadow-md rounded-lg",attrs:{id:"option"}},[n("div",{staticClass:"bg-blue-500 h-40 w-40 p-12 rounded-full flex",attrs:{id:"large-icon"}},[n("font-awesome-icon",{staticClass:"text-6xl text-white",attrs:{icon:"camera"}})],1),n("h1",{staticClass:"text-3xl font-bold"},[e._v("Camera Scanner")]),n("p",[e._v("Use your devices' camera to scan barcodes.")]),n("button",{staticClass:"bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.selectCamera()}}},[e._v("\n          Select\n        ")])]),n("div",{staticClass:"Right bg-white shadow-md rounded-lg",attrs:{id:"option"}},[n("div",{staticClass:"bg-blue-500 h-40 w-40 p-12 rounded-full flex",attrs:{id:"large-icon"}},[n("font-awesome-icon",{staticClass:"text-6xl text-white",attrs:{icon:"barcode"}})],1),n("h1",{staticClass:"text-3xl font-bold"},[e._v("Hardware Scanner")]),n("p",[e._v("For hardware scanners...")]),n("button",{staticClass:"bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.selectHardware()}}},[e._v("\n          Select\n        ")])])]):e._e(),e.camera?n("div",{attrs:{id:"camera-scan"}},[n("div",{staticClass:"barcodeView"},[n("StreamBarcodeReader",{staticClass:"m-5",on:{decode:e.onDecode,loaded:e.onLoaded}})],1)]):e._e(),e.hardware?n("div",{attrs:{id:"hardware-scan"}},[n("h1",{staticClass:"text-4xl mx-5 font-bold"},[e._v("Hardware Scanner")]),n("br"),n("h1",{staticClass:"text-2xl mx-5 font-bold",attrs:{id:"pressed_keys"}}),n("br")]):e._e()])])},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Main p-6 bg-white shadow-md rounded-lg"},[n("span",{staticClass:"text-4xl font-extrabold"},[e._v("Please choose a scanning option")])])}],O=n("f337"),E={name:"VueBarcodeTest",components:{StreamBarcodeReader:O["a"]},data:function(){return{active:!1,camera:!1,result:"",hardware:!1,menu:!0,readerSize:{width:640,height:480},detecteds:[]}},mounted:function(){var e=localStorage.getItem("option");"Camera"===e&&(this.camera=!0,this.menu=!1),"Hardware"===e&&(this.hardware=!0,this.menu=!1,this.hardwareScan())},methods:{read:function(e){this.toggle(),document.getElementById("text-field").value=e.codeResult.code,setTimeout(1e3)},onDecode:function(e){this.result=e,alert(this.result)},onLoaded:function(){console.log("Loaded")},toggle:function(){document.getElementById("text-field").value="",this.active=!this.active},selectCamera:function(){localStorage.setItem("option","Camera"),this.camera=!0,this.menu=!1},selectHardware:function(){localStorage.setItem("option","Hardware"),this.hardware=!0,this.menu=!1,this.hardwareScan()},hardwareScan:function(){function e(e){var t=document.getElementById("pressed_keys");console.log("pressed: "+e.keyCode),13==e.keyCode?t.innerHTML+="<BR>":t.innerHTML+=e.key}function t(e){console.log("up: "+e.keyCode)}function n(e){console.log("down: "+e.keyCode)}document.addEventListener("keypress",e),document.addEventListener("keyup",t),document.addEventListener("keydown",n)}}},j=E,B=(n("6cec"),Object(d["a"])(j,S,k,!1,null,null,null)),L=B.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("h1",[e._v("Hi!")])])}],I={name:"home"},T=I,H=Object(d["a"])(T,P,$,!1,null,null,null),M=H.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"settings"}},[n("div",{staticClass:"grid-container"},[e._m(0),n("div",{staticClass:"Left p-6 bg-white shadow-md rounded-lg"},[n("span",{staticClass:"text-2xl font-extrabold"},[e._v("Scanner Setting:")]),n("br"),n("textarea",{attrs:{readonly:"",id:"text-field",cols:"1",rows:"1"}}),n("br"),n("button",{staticClass:"bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.deleteStorage()}}},[e._v("\n                Delete Stored Option\n            ")])])])])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Main p-6 bg-white shadow-md rounded-lg"},[n("span",{staticClass:"text-4xl font-extrabold"},[e._v("Settings")])])}],F={name:"settings",mounted:function(){document.getElementById("text-field").value=localStorage.getItem("option")},methods:{deleteStorage:function(){localStorage.removeItem("option"),document.getElementById("text-field").value="none"}}},z=F,A=(n("3e4b"),Object(d["a"])(z,N,R,!1,null,null,null)),D=A.exports;a["a"].use(C["a"]);var J=new C["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:M},{path:"/scan",name:"scan",component:L},{path:"/settings",name:"settings",component:D}]}),V=n("2f62");a["a"].use(V["a"]);var q=new V["a"].Store({state:{},mutations:{},actions:{}}),U=n("9483");Object(U["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4f87"),n("c898");var G=n("ecee"),K=n("c074"),Q=n("ad3d");G["c"].add(K["a"],K["c"],K["b"]),a["a"].component("font-awesome-icon",Q["a"]),a["a"].config.productionTip=!1,new a["a"]({router:J,store:q,render:function(e){return e(y)}}).$mount("#app")},"6cec":function(e,t,n){"use strict";var a=n("72fb"),o=n.n(a);o.a},"72fb":function(e,t,n){},bbfb:function(e,t,n){},c6bd:function(e,t,n){},c898:function(e,t,n){}});
//# sourceMappingURL=app.b3f2c7e0.js.map