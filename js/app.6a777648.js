(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3e4b":function(e,t,n){"use strict";var a=n("bbfb"),r=n.n(a);r.a},"48e4":function(e,t,n){"use strict";var a=n("c6bd"),r=n.n(a);r.a},"4f87":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("Taskbar"),n("router-view")],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-full w-64 z-40 fixed bg-blue-900 shadow-xl float-left p-2 text-white noselect",attrs:{id:"navbar"}},[e._m(0),n("div",{staticClass:"font-bold",attrs:{id:"title"}},[e._v("\n        Menu:\n    ")]),e._l(e.items,(function(t){return n("div",{key:t.message},[n("router-link",{attrs:{to:t.link}},[n("div",{attrs:{id:"wrapper"}},[n("div",{staticClass:"rounded-lg bg-cover bg-orange-500",attrs:{id:"first"}}),n("div",{staticClass:"menuOptionTitle",attrs:{id:"second"}},[n("span",{staticClass:"font-extrabold"},[e._v(e._s(t.message))])]),n("div",{attrs:{id:"third"}})])])],1)}))],2)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"highlight",attrs:{id:"profile",onclick:"highlightBox('profile')"}},[n("div",{staticClass:"rounded-lg bg-cover",staticStyle:{"background-image":"url('https://avatars3.githubusercontent.com/u/25752941?s=460&u=131730e97ddb996d629a0c9a2a69d73a1254d8f9&v=4')"},attrs:{id:"first"}}),n("div",{attrs:{id:"second"}},[n("span",{staticClass:"font-extrabold"},[e._v("Joshua Lowe")]),e._v(" Fulfilment Provider\n        ")]),n("div",{attrs:{id:"third"}},[n("i",{staticClass:"far fa-arrow-alt-circle-down",attrs:{id:"arrow"}})])])}],c={data:function(){return{msg:"Post vue",items:[{message:"Scan Barcode",link:"scan"},{message:"Settings",link:"settings"}]}}},l=c,d=(n("48e4"),n("2877")),u=Object(d["a"])(l,s,i,!1,null,null,null),f=u.exports,h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-16 w-full bg-white shadow-xl py-3 fixed z-0"},[n("img",{staticClass:"h-10 t-1 float-right",staticStyle:{"margin-right":"15px"},attrs:{src:"https://www.ekmpartners.com/ekmps/shops/ekmpartners/resources/Design/fulfilmentcrowd-1000px1000px-300dpi.png"}})])}],p={data:function(){return{msg:"Post vue"}}},v=p,g=Object(d["a"])(v,h,m,!1,null,null,null),b=g.exports,w={name:"app",components:{Navbar:f,Taskbar:b}},x=w,_=Object(d["a"])(x,r,o,!1,null,null,null),y=_.exports,C=n("8c4f"),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"scan"}},[e.menu?n("div",{staticClass:"grid-container"},[e._m(0),n("div",{staticClass:"Left bg-white shadow-md rounded-lg",attrs:{id:"option"}},[e._m(1),n("h1",{staticClass:"text-3xl font-bold"},[e._v("Camera Scanner")]),n("p",[e._v("Use your devices' camera to scan barcodes.")]),n("button",{staticClass:"bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.selectCamera()}}},[e._v("\n          Select\n        ")])]),n("div",{staticClass:"Right bg-white shadow-md rounded-lg",attrs:{id:"option"}},[e._m(2),n("h1",{staticClass:"text-3xl font-bold"},[e._v("Hardware Scanner")]),n("p",[e._v("For hardware scanners...")]),n("button",{staticClass:"bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.selectHardware()}}},[e._v("\n          Select\n        ")])])]):e._e(),e.camera?n("div",{attrs:{id:"camera-scan"}},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5",on:{click:function(t){return e.toggle()}}},[e._v("Load Camera...")]),n("br"),n("textarea",{staticClass:"mx-5",attrs:{readonly:"",id:"text-field",cols:"1",rows:"1"}}),e.active?n("v-quagga",{staticClass:"m-5",attrs:{readerSize:e.readerSize,onDetected:e.read,readerTypes:["ean_reader"]}}):e._e()],1):e._e(),e.hardware?n("div",{attrs:{id:"hardware-scan"}},[n("h1",{staticClass:"text-4xl mx-5 font-bold"},[e._v("Hardware Scanner")]),n("br"),n("h1",{staticClass:"text-2xl mx-5 font-bold",attrs:{id:"pressed_keys"}}),n("br")]):e._e()])])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Main p-6 bg-white shadow-md rounded-lg"},[n("span",{staticClass:"text-4xl font-extrabold"},[e._v("Please choose a scanning option")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-blue-500 h-40 w-40 p-12 rounded-full flex",attrs:{id:"large-icon"}},[n("i",{staticClass:"fas fa-camera text-6xl text-white"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-blue-500 h-40 w-40 p-12 rounded-full flex",attrs:{id:"large-icon"}},[n("i",{staticClass:"fas fa-barcode text-6xl text-white"})])}],E=n("8179");a["a"].use(E["a"]);var O={name:"VueBarcodeTest",data:function(){return{active:!1,camera:!1,hardware:!1,menu:!0,readerSize:{width:640,height:480},detecteds:[]}},mounted:function(){var e=localStorage.getItem("option");"Camera"===e&&(this.camera=!0,this.menu=!1),"Hardware"===e&&(this.hardware=!0,this.menu=!1,this.hardwareScan())},methods:{read:function(e){this.toggle(),document.getElementById("text-field").value=e.codeResult.code,setTimeout(1e3)},toggle:function(){document.getElementById("text-field").value="",this.active=!this.active},selectCamera:function(){localStorage.setItem("option","Camera"),this.camera=!0,this.menu=!1},selectHardware:function(){localStorage.setItem("option","Hardware"),this.hardware=!0,this.menu=!1,this.hardwareScan()},hardwareScan:function(){function e(e){var t=document.getElementById("pressed_keys");console.log("pressed: "+e.keyCode),13==e.keyCode?t.innerHTML+="<BR>":t.innerHTML+=e.key}function t(e){console.log("up: "+e.keyCode)}function n(e){console.log("down: "+e.keyCode)}document.addEventListener("keypress",e),document.addEventListener("keyup",t),document.addEventListener("keydown",n)}}},j=O,$=(n("6cec"),Object(d["a"])(j,k,S,!1,null,null,null)),P=$.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},B=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("h1",[e._v("Hi!")])])}],I={name:"home"},H=I,L=Object(d["a"])(H,T,B,!1,null,null,null),M=L.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"settings"}},[n("div",{staticClass:"grid-container"},[e._m(0),n("div",{staticClass:"Left p-6 bg-white shadow-md rounded-lg"},[n("span",{staticClass:"text-2xl font-extrabold"},[e._v("Scanner Setting:")]),n("br"),n("textarea",{attrs:{readonly:"",id:"text-field",cols:"1",rows:"1"}}),n("br"),n("button",{staticClass:"bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.deleteStorage()}}},[e._v("\n                Delete Stored Option\n            ")])])])])},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Main p-6 bg-white shadow-md rounded-lg"},[n("span",{staticClass:"text-4xl font-extrabold"},[e._v("Settings")])])}],F={name:"settings",mounted:function(){document.getElementById("text-field").value=localStorage.getItem("option")},methods:{deleteStorage:function(){localStorage.removeItem("option"),document.getElementById("text-field").value="none"}}},A=F,D=(n("3e4b"),Object(d["a"])(A,z,N,!1,null,null,null)),J=D.exports;a["a"].use(C["a"]);var R=new C["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:M},{path:"/scan",name:"scan",component:P},{path:"/settings",name:"settings",component:J}]}),q=n("2f62");a["a"].use(q["a"]);var U=new q["a"].Store({state:{},mutations:{},actions:{}}),V=n("9483");Object(V["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4f87"),n("c898");a["a"].config.productionTip=!1,new a["a"]({router:R,store:U,render:function(e){return e(y)}}).$mount("#app")},"6cec":function(e,t,n){"use strict";var a=n("72fb"),r=n.n(a);r.a},"72fb":function(e,t,n){},bbfb:function(e,t,n){},c6bd:function(e,t,n){},c898:function(e,t,n){}});
//# sourceMappingURL=app.6a777648.js.map