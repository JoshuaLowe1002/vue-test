(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},a={app:0},r=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},"039a":function(e,t,n){"use strict";var s=n("3760"),a=n.n(s);a.a},"23ee":function(e,t,n){"use strict";var s=n("cf0c"),a=n.n(s);a.a},2434:function(e,t,n){},"30ba":function(e,t,n){},3760:function(e,t,n){},"3e4b":function(e,t,n){"use strict";var s=n("bbfb"),a=n.n(s);a.a},"48e4":function(e,t,n){"use strict";var s=n("c6bd"),a=n.n(s);a.a},"4f87":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"fadeMe hidden",attrs:{id:"navclose"},on:{click:function(t){return e.hideNav()}}}),n("Navbar"),n("Taskbar"),n("router-view")],1)},r=[],o=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("d25f"),n("ac6a"),n("456d"),n("bd86")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-full w-64 z-40 fixed navbar-col shadow-xl float-left p-2 text-white noselect",attrs:{id:"navbar"}},[e._m(0),e.isUserAuth?n("div",{staticClass:"font-bold",attrs:{id:"title"}}):e._e(),n("div",[n("router-link",{attrs:{to:"login"}},[e.isUserAuth?e._e():n("div",{attrs:{id:"wrapper"}},[n("div",{staticClass:"rounded-lg bg-cover bg-purple-500",attrs:{id:"first"}},[n("font-awesome-icon",{staticClass:"fs-25",attrs:{icon:"cog"}})],1),n("div",{staticClass:"menuOptionTitle",attrs:{id:"second"}},[n("span",{staticClass:"font-extrabold"},[e._v("Login")])]),n("div",{attrs:{id:"third"}})])])],1),n("div",[n("router-link",{attrs:{to:"register"}},[e.isUserAuth?e._e():n("div",{attrs:{id:"wrapper"}},[n("div",{staticClass:"rounded-lg bg-cover bg-pink-500",attrs:{id:"first"}},[n("font-awesome-icon",{staticClass:"fs-25",attrs:{icon:"cog"}})],1),n("div",{staticClass:"menuOptionTitle",attrs:{id:"second"}},[n("span",{staticClass:"font-extrabold"},[e._v("Register")])]),n("div",{attrs:{id:"third"}})])])],1),e._l(e.items,(function(t){return n("div",{key:t.message},[n("router-link",{attrs:{to:t.link}},[e.isUserAuth?n("div",{staticClass:"inactive",class:t.class,attrs:{id:"wrapper"}},[n("div",{staticClass:"rounded-lg bg-cover",class:t.colour,attrs:{id:"first"}},[n("font-awesome-icon",{staticClass:"fs-25",attrs:{icon:t.icon}})],1),n("div",{staticClass:"menuOptionTitle",attrs:{id:"second"}},[n("span",{staticClass:"font-bold"},[e._v(e._s(e.$t("message."+t.message)))])]),n("div",{attrs:{id:"third"}})]):e._e()])],1)}))],2)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"profile",onclick:"highlightBox('profile')"}},[n("div",{staticClass:"rounded-lg bg-cover",staticStyle:{"background-image":"url('https://avatars1.githubusercontent.com/u/24291894?s=280&v=4')"},attrs:{id:"first"}}),n("div",{attrs:{id:"second"}},[n("span",{staticClass:"font-bold text-lg"},[e._v("Bobs Ramen")])]),n("div",{attrs:{id:"third"}})])}],l=n("2f62"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.$i18n.locale,expression:"$i18n.locale"}],staticClass:"block text-black appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$i18n,"locale",t.target.multiple?n:n[0])}}},e._l(e.langs,(function(t,s){return n("option",{key:"lang-"+s,domProps:{value:t}},[e._v("\n      "+e._s(t)+"\n    ")])})),0)])},u=[],p={name:"Language",data:function(){return{langs:["en","de"]}}},m=p,f=n("2877"),g=Object(f["a"])(m,d,u,!1,null,null,null),h=g.exports;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={name:"Navbar",components:{Language:h},data:function(){return{msg:"Post vue",items:[{message:"home",link:"/",colour:"",icon:"chart-line",class:"active"},{message:"orders",link:"/",colour:"",icon:"receipt"},{message:"products",link:"products",colour:"",icon:"box"},{message:"picking",link:"scan",colour:"",icon:"dolly-flatbed"},{message:"settings",link:"settings",colour:"",icon:"cog"}]}},computed:v({},Object(l["c"])(["isUserAuth"]))},w=y,x=(n("48e4"),Object(f["a"])(w,i,c,!1,null,null,null)),_=x.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-16 w-full taskbar-col py-10px fixed z-0 border-bottom-task"},[n("div",{staticClass:"inline-block text-2xl mx-2 float-left",attrs:{id:"menu"},on:{click:function(t){return e.showNav()}}},[n("font-awesome-icon",{attrs:{icon:"bars"}})],1),n("div",{staticClass:"float-left search"},[n("div",{staticClass:"relative mx-auto text-black"},[n("input",{staticClass:"h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none s-width",attrs:{type:"search",name:"search",placeholder:"Search"}}),n("button",{staticClass:"absolute right-0 top-0 mt-2 mr-3",attrs:{type:"submit"}},[n("font-awesome-icon",{staticClass:"fs-4 text-black fill-current",attrs:{icon:"search"}})],1)])]),e._m(0),n("div",{staticClass:"float-right p-3 px-2 mr-4"},[n("font-awesome-icon",{staticClass:"fs-4 text-gray-600",attrs:{icon:"bell"}})],1),n("div",{staticClass:"float-right p-3 px-2 mr-4"},[n("font-awesome-icon",{staticClass:"fs-4 text-gray-600",attrs:{icon:"life-ring"}})],1)])},O=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"float-right w-170",attrs:{id:"profile"}},[n("div",{staticClass:"rounded-full circle-image bg-cover",staticStyle:{"background-image":"url('https://avatars3.githubusercontent.com/u/25752941?s=460&u=131730e97ddb996d629a0c9a2a69d73a1254d8f9&v=4')"},attrs:{id:"first"}}),n("div",{attrs:{id:"second"}},[n("span",{staticClass:"font-medium text-m"},[e._v("Joshua Lowe")])])])}],E=(n("57e7"),{data:function(){return{msg:"Post vue"}},methods:{showNav:function(){document.getElementById("navbar").style.display="block",document.getElementById("navclose").style.display="block"},myFunction:function(){var e,t,n,s,a,r,o;for(e=document.getElementById("myInput"),t=e.value.toUpperCase(),n=document.getElementById("myTable"),s=n.getElementsByTagName("tr"),r=0;r<s.length;r++)a=s[r].getElementsByTagName("td")[0],a&&(o=a.textContent||a.innerText,o.toUpperCase().indexOf(t)>-1?s[r].style.display="":s[r].style.display="none")}}}),P=E,j=(n("23ee"),Object(f["a"])(P,C,O,!1,null,null,null)),k=j.exports;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $={name:"app",components:{Navbar:_,Taskbar:k},mounted:function(){this.authAction()},methods:A({hideNav:function(){document.getElementById("navbar").style.display="none",document.getElementById("navclose").style.display="none"}},Object(l["b"])(["authAction"]))},U=$,I=(n("034f"),Object(f["a"])(U,a,r,!1,null,null,null)),L=I.exports,D=(n("759f"),n("8c4f")),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{attrs:{id:"scan"}},[e.menu?n("div",{staticClass:"grid-container"},[n("div",{staticClass:"Main p-6 bg-white shadow-md rounded-lg"},[n("span",{staticClass:"text-4xl font-extrabold"},[e._v(e._s(e.$t("message.scanmessage")))])]),n("div",{staticClass:"Left bg-white shadow-md rounded-lg",attrs:{id:"option"}},[n("div",{staticClass:"bg-blue-500 h-40 w-40 p-12 rounded-full flex",attrs:{id:"large-icon"}},[n("font-awesome-icon",{staticClass:"text-6xl text-white",attrs:{icon:"camera"}})],1),n("h1",{staticClass:"text-3xl font-bold"},[e._v(e._s(e.$t("message.camera")))]),n("p",[e._v(e._s(e.$t("message.cameramessage")))]),n("button",{staticClass:"bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.selectCamera()}}},[e._v("\n          "+e._s(e.$t("message.select"))+"\n        ")])]),n("div",{staticClass:"Right bg-white shadow-md rounded-lg",attrs:{id:"option"}},[n("div",{staticClass:"bg-blue-500 h-40 w-40 p-12 rounded-full flex",attrs:{id:"large-icon"}},[n("font-awesome-icon",{staticClass:"text-6xl text-white",attrs:{icon:"barcode"}})],1),n("h1",{staticClass:"text-3xl font-bold"},[e._v(e._s(e.$t("message.hardware")))]),n("p",[e._v(e._s(e.$t("message.hardwaremessage")))]),n("button",{staticClass:"bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.selectHardware()}}},[e._v("\n          "+e._s(e.$t("message.select"))+"\n        ")])])]):e._e(),e.camera?n("div",{attrs:{id:"camera-scan"}},[n("div",{staticClass:"Main p-6 bg-white shadow-md rounded-lg"},[n("span",{staticClass:"text-4xl font-extrabold"},[e._v(e._s(e.$t("message.camera")))])]),n("div",{staticClass:"barcodeView"},[n("StreamBarcodeReader",{staticClass:"my-5",on:{decode:e.onDecode,loaded:e.onLoaded}})],1)]):e._e(),e.hardware?n("div",{attrs:{id:"hardware-scan"}},[n("h1",{staticClass:"text-4xl mx-5 font-bold"},[e._v(e._s(e.$t("message.hardware")))]),n("button",{staticClass:"bg-red-500 mx-5 my-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.clearHardware()}}},[e._v("\n          "+e._s(e.$t("message.clear"))+"\n      ")]),n("h1",{staticClass:"text-2xl mx-5 font-bold",attrs:{id:"pressed_keys"}})]):e._e()])])},R=[],N=n("f337"),T={name:"VueBarcodeTest",components:{StreamBarcodeReader:N["a"]},data:function(){return{active:!1,camera:!1,result:"",hardware:!1,menu:!0,readerSize:{width:640,height:480},detecteds:[]}},mounted:function(){var e=localStorage.getItem("option");document.getElementById("navclose").style.display="none",window.innerWidth<600&&(document.getElementById("navbar").style.display="none"),"Camera"===e&&(this.camera=!0,this.menu=!1),"Hardware"===e&&(this.hardware=!0,this.menu=!1,this.hardwareScan())},methods:{read:function(e){this.toggle(),document.getElementById("text-field").value=e.codeResult.code,setTimeout(1e3)},onDecode:function(e){this.result=e,alert(this.result)},onLoaded:function(){console.log("Loaded")},toggle:function(){document.getElementById("text-field").value="",this.active=!this.active},selectCamera:function(){localStorage.setItem("option","Camera"),this.camera=!0,this.menu=!1},selectHardware:function(){localStorage.setItem("option","Hardware"),this.hardware=!0,this.menu=!1,this.hardwareScan()},clearHardware:function(){var e=document.getElementById("pressed_keys");e.innerHTML=""},hardwareScan:function(){function e(e){var t=document.getElementById("pressed_keys");console.log("pressed: "+e.keyCode),13==e.keyCode?t.innerHTML+="<BR>":t.innerHTML+=e.key}function t(e){console.log("up: "+e.keyCode)}function n(e){console.log("down: "+e.keyCode)}document.removeEventListener("keypress",e),document.removeEventListener("keyup",t),document.removeEventListener("keydown",n),document.addEventListener("keypress",e),document.addEventListener("keyup",t),document.addEventListener("keydown",n)}}},H=T,M=(n("64e1"),Object(f["a"])(H,B,R,!1,null,"d58bd782",null)),V=M.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("div",{attrs:{id:"home-container"}},[n("div",{staticClass:"Main p-6 bg-white shadow-md rounded-lg"},[n("span",{staticClass:"text-4xl font-extrabold"},[e._v(e._s(e.$t("message.welcome"))+" ")]),n("span",{staticClass:"text-4xl"},[e._v(e._s(e.$t("message.crescent")))])]),n("h1",{staticClass:"text-3xl my-5 text-center font-semibold"},[e._v(e._s(e.$t("message.hello")))])])])},z=[],W={name:"home",mounted:function(){document.getElementById("navclose").style.display="none",window.innerWidth<600&&(document.getElementById("navbar").style.display="none")}},F=W,K=(n("cccb"),Object(f["a"])(F,q,z,!1,null,null,null)),J=K.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"settings"}},[n("div",{staticClass:"grid-container"},[n("div",{staticClass:"Main p-6 bg-white shadow-md rounded-lg"},[n("span",{staticClass:"text-4xl font-extrabold"},[e._v(e._s(e.$t("message.settings")))])]),n("div",{staticClass:"Left p-6 bg-white shadow-md rounded-lg",attrs:{id:"settings-left"}},[n("span",{staticClass:"text-2xl font-extrabold"},[e._v(e._s(e.$t("message.scannersetting")))]),n("br"),n("textarea",{attrs:{readonly:"",id:"text-field",cols:"1",rows:"1"}}),n("br"),n("button",{staticClass:"bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.deleteStorage()}}},[e._v("\n                "+e._s(e.$t("message.delete"))+"\n            ")])]),n("div",{staticClass:"Right p-6 bg-white shadow-md rounded-lg",attrs:{id:"settings-left"}},[n("span",{staticClass:"text-2xl font-extrabold"},[e._v(e._s(e.$t("message.userinfo")))]),n("br"),n("span",{staticClass:"text-lg font-extrabold"},[e._v("Name: "+e._s(e.getUser.displayName))]),n("br"),n("span",{staticClass:"text-lg font-extrabold"},[e._v("Email: "+e._s(e.getUser.email))]),n("br"),n("button",{staticClass:"bg-red-500 mt-2 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",on:{click:function(t){return e.signOut()}}},[e._v("\n                "+e._s(e.$t("message.logout"))+"\n            ")]),n("Language",{staticClass:"my-4"})],1)])])},Q=[];function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z={name:"settings",components:{Language:h},mounted:function(){document.getElementById("text-field").value=localStorage.getItem("option"),document.getElementById("navclose").style.display="none",window.innerWidth<600&&(document.getElementById("navbar").style.display="none")},methods:Y(Y({},Object(l["b"])(["signOutAction"])),{},{deleteStorage:function(){localStorage.removeItem("option"),document.getElementById("text-field").value=""},signOut:function(){this.signOutAction()}}),computed:Y({},Object(l["c"])(["getUser","isUserAuth"]))},ee=Z,te=(n("3e4b"),Object(f["a"])(ee,G,Q,!1,null,null,null)),ne=te.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"products"}},[n("div",{attrs:{id:"products-container"}},[n("span",{staticClass:"text-3xl font-bold"},[e._v(e._s(e.$t("message.products")))]),n("button",{staticClass:"blue-button shadow-md hover:bg-red-500 text-white font-bold py-2 px-8 rounded float-right",on:{click:function(t){return e.refresh()}}},[e._v("\n                New\n        ")]),n("div",{staticClass:"relative mx-auto text-black my-5"},[n("input",{staticClass:"h-10 px-5 rounded-lg text-sm focus:outline-none s-width",attrs:{type:"search",name:"search",placeholder:"Search",id:"productSearch"},on:{keyup:function(t){return e.myFunction()}}})]),n("table",{staticClass:"table-fixed w-full rounded-lg bg-white my-5 border-collapse shadow-lg my-12",attrs:{border:"0",id:"productTable"}},[n("thead",[n("tr",{staticClass:"rounded-t-lg text-black text-left header"},[e._m(0),n("th",{staticClass:"w-1/4 px-4 py-2"},[e._v(e._s(e.$t("message.productname")))]),n("th",{staticClass:"w-1/4 px-4 py-2"},[e._v(e._s(e.$t("message.stock")))]),n("th",{staticClass:"w-1/4 px-4 py-2"},[e._v(e._s(e.$t("message.category")))]),n("th",{staticClass:"w-1/4 px-4 py-2"},[e._v("Price")])])]),n("tbody",{staticClass:"rounded-b-lg"},[e.$apollo.loading?n("tr",{staticClass:"border"},[n("td",{staticClass:"px-4 py-2"}),n("td",{staticClass:"px-4 py-2"},[e._v("Loading...")]),n("td",{staticClass:"px-4 py-2"},[e._v("Loading...")]),n("td",{staticClass:"px-4 py-2"},[e._v("Loading...")]),n("td",{staticClass:"px-4 py-2"},[e._v("Loading...")])]):e._e(),e._l(e.products.edges,(function(t){return n("tr",{key:t.node.id,staticClass:"border"},[e._m(1,!0),n("td",{staticClass:"px-4 py-2"},[e._v(e._s(t.node.title))]),n("td",{staticClass:"px-4 py-2"},[e._v(e._s(t.node.totalInventory))]),n("td",{staticClass:"px-4 py-2"},[e._v(e._s(t.node.productType))]),n("td",{staticClass:"px-4 py-2"},[e._v("£"+e._s(t.node.priceRange.maxVariantPrice.amount))])])}))],2)])])])},ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",{staticClass:"w-12 px-6 py-6"},[n("input",{attrs:{type:"checkbox"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{staticClass:"px-4 py-4"},[n("input",{attrs:{type:"checkbox"}})])}],re=(n("386d"),n("6762"),n("2fdb"),n("75fc")),oe=(n("7514"),n("aede")),ie=n("9530"),ce=n.n(ie);function le(){var e=Object(oe["a"])(["{\n            products(first: 100) {\n                edges {\n                    node {\n                        id\n                        title\n                        totalInventory\n                        productType\n                        priceRange{\n                            maxVariantPrice {\n                                amount\n                            }\n                        }\n                    }\n                }\n            }\n        }"]);return le=function(){return e},e}var de={name:"products",data:function(){return{products:[],search:""}},apollo:{products:ce()(le())},methods:{refresh:function(){location.reload()},myFunction:function(){var e=document.querySelector("#productSearch").value.toUpperCase(),t=document.querySelectorAll("#productTable tr:not(.header)");t.forEach((function(t){return t.style.display=Object(re["a"])(t.children).find((function(t){return t.innerHTML.toUpperCase().includes(e)}))?"":"none"}))}},computed:{filteredList:function(){var e=this;return this.products.filter((function(t){return t.edges.node.title.toLowerCase().includes(e.search.toLowerCase())}))}},mounted:function(){document.getElementById("navclose").style.display="none",window.innerWidth<600&&(document.getElementById("navbar").style.display="none")}},ue=de,pe=(n("60df"),Object(f["a"])(ue,se,ae,!1,null,null,null)),me=pe.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.validationErrors.length?n("div",{staticClass:"notification is-danger is-light"},[n("div",{staticClass:"bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative float-right mt-20 mx-3",attrs:{role:"alert"}},[n("div",{staticClass:"content"},[e._v("\n        Please resolve the following error(s) before proceeding.\n        "),n("ul",{staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},e._l(e.validationErrors,(function(t,s){return n("li",{key:"error-"+s,domProps:{innerHTML:e._s(t)}})})),0)])])]):e._e(),n("div",{staticClass:"w-full max-w-xs",attrs:{id:"outPopUp"}},[n("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"Email"}},[e._v("\n            Email\n        ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{autocomplete:"email",id:"username",type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[e._v("\n            Password\n        ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",attrs:{autocomplete:"current-password",id:"password",type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"flex items-center justify-between"},[n("button",{staticClass:"button is-success bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.validate()}}},[e._v("\n            Sign In\n        ")]),n("a",{staticClass:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",attrs:{href:"#"}},[e._v("\n            Forgot Password?\n        ")])])]),n("p",{staticClass:"text-center text-gray-500 text-xs"},[e._v("\n        ©2020 fulfilmentcrowd. All rights reserved.\n    ")])])])},ge=[];n("a481");function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve={data:function(){return{email:null,password:null,validationErrors:[],firebaseError:""}},computed:be(be({},Object(l["c"])(["getUser"])),{},{nextRoute:function(){return this.$route.query.redirect||"/"}}),watch:{getUser:function(e){e&&this.$router.replace(this.nextRoute)}},methods:be(be({},Object(l["b"])(["signInAction"])),{},{resetError:function(){this.validationErrors=[]},validate:function(){this.resetError(),console.log("hi!"),this.email||this.validationErrors.push("<strong>E-mail</strong> cannot be empty."),1!=/.+@.+/.test(this.email)&&this.validationErrors.push("<strong>E-mail</strong> must be valid."),this.password||this.validationErrors.push("<strong>Password</strong> cannot be empty"),1!=/.{6,}/.test(this.password)&&this.validationErrors.push("<strong>Password</strong> must be at least 6 characters long"),this.validationErrors.length<=0&&this.signIn()},signIn:function(){this.signInAction({email:this.email,password:this.password})}})},ye=ve,we=(n("039a"),Object(f["a"])(ye,fe,ge,!1,null,null,null)),xe=we.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.validationErrors.length?n("div",{staticClass:"notification is-danger is-light"},[n("div",{staticClass:"bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative float-right mt-20 mx-3",attrs:{role:"alert"}},[n("div",{staticClass:"content"},[e._v("\n        Please resolve the following error(s) before proceeding.\n        "),n("ul",{staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},e._l(e.validationErrors,(function(t,s){return n("li",{key:"error-"+s,domProps:{innerHTML:e._s(t)}})})),0)])])]):e._e(),n("div",{staticClass:"w-full max-w-xs",attrs:{id:"outPopUp"}},[n("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"Email"}},[e._v("\n            Full Name\n        ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{autocomplete:"name",id:"name",type:"text",placeholder:"Joe Bloggs"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"Email"}},[e._v("\n            Email\n        ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{autocomplete:"email",id:"username",type:"text",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"Email"}},[e._v("\n            Company\n        ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.company,expression:"company"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{autocomplete:"company",id:"company",type:"text",placeholder:"Company Name"},domProps:{value:e.company},on:{input:function(t){t.target.composing||(e.company=t.target.value)}}})]),n("div",{staticClass:"mb-4"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[e._v("\n            Password\n        ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",attrs:{autocomplete:"current-password",id:"password",type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("div",{staticClass:"mb-6"},[n("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[e._v("\n            Repeat Password\n        ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordRepeat,expression:"passwordRepeat"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",attrs:{autocomplete:"new-password",id:"repeat-password",type:"password",placeholder:"Password"},domProps:{value:e.passwordRepeat},on:{input:function(t){t.target.composing||(e.passwordRepeat=t.target.value)}}})]),n("div",{staticClass:"flex items-center justify-between"},[n("button",{staticClass:"button is-success bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.validate()}}},[e._v("\n            Register\n        ")]),n("a",{staticClass:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",attrs:{href:"#"}},[e._v("\n            Forgot Password?\n        ")])])]),n("p",{staticClass:"text-center text-gray-500 text-xs"},[e._v("\n        ©2020 fulfilmentcrowd. All rights reserved.\n    ")])])])},Ce=[];n("7f7f");function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Pe={data:function(){return{email:null,password:null,name:null,company:null,passwordRepeat:null,validationErrors:[]}},computed:Ee(Ee({},Object(l["c"])(["getUser"])),{},{nextRoute:function(){return this.$route.query.redirect||"/"}}),watch:{getUser:function(e){e&&this.$router.replace(this.nextRoute)}},firestore:function(){return{users:db.collection("users")}},methods:Ee(Ee({},Object(l["b"])(["signUpAction"])),{},{resetError:function(){this.validationErrors=[]},validate:function(){this.resetError(),this.email||this.validationErrors.push("<strong>E-mail</strong> cannot be empty."),1!=/.+@.+/.test(this.email)&&this.validationErrors.push("<strong>E-mail</strong> must be valid."),this.password||this.validationErrors.push("<strong>Password</strong> cannot be empty"),1!=/.{6,}/.test(this.password)&&this.validationErrors.push("<strong>Password</strong> must be at least 6 characters long"),this.password!==this.passwordRepeat&&this.validationErrors.push("<strong>Passwords</strong> did not match"),this.validationErrors.length<=0&&this.signUp()},signUp:function(){this.signUpAction({email:this.email,password:this.password,name:this.name,company:this.company})}})},je=Pe,ke=(n("f30e"),Object(f["a"])(je,_e,Ce,!1,null,null,null)),Se=ke.exports,Ae=n("59ca"),$e=n.n(Ae);n("ea7b");s["a"].use(D["a"]);var Ue=[{path:"/",name:"home",component:J,meta:{requiresAuth:!0}},{path:"/scan",name:"scan",component:V,meta:{requiresAuth:!0}},{path:"/settings",name:"settings",component:ne,meta:{requiresAuth:!0}},{path:"/products",name:"products",component:me,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:xe,alias:"/"},{path:"/register",name:"Register",component:Se}],Ie=new D["a"]({mode:"history",base:"/",routes:Ue});Ie.beforeEach((function(e,t,n){var s=$e.a.auth().currentUser,a=e.matched.some((function(e){return e.meta.requiresAuth}));a&&!s?n("login"):!a&&s?n("home"):n()}));var Le=Ie,De={setUser:function(e,t){e.user=t},setError:function(e,t){e.error=t}},Be=De,Re=($e.a.firestore,{authAction:function(e){var t=e.commit;$e.a.auth().onAuthStateChanged((function(e){t("setUser",e||null)}))},signUpAction:function(e,t){var n=e.commit;$e.a.auth().createUserWithEmailAndPassword(t.email,t.password).then((function(e){e.user.updateProfile({displayName:t.name})})).catch((function(e){n("setError",e.message)}))},signInAction:function(e,t){var n=e.commit;$e.a.auth().signInWithEmailAndPassword(t.email,t.password).catch((function(e){n("setError",e.message)}))},signOutAction:function(e){var t=e.commit;$e.a.auth().signOut().then((function(){t("setUser",null),Le.push({name:"Login"})})).catch((function(e){t("setError",e.message)}))}}),Ne=Re,Te={getUser:function(e){return e.user},isUserAuth:function(e){return!!e.user},getError:function(e){return e.error}},He=Te;s["a"].use(l["a"]);var Me=function(){return{user:null,error:null}},Ve=new l["a"].Store({state:Me(),mutations:Be,actions:Ne,getters:He}),qe=n("9483");Object(qe["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4f87"),n("c898");var ze=n("a925"),We={apiKey:"AIzaSyACDTMA2P1h1jkzsXbb1R1PtQMg96eqZ0Y",authDomain:"crescent-a0c27.firebaseapp.com",databaseURL:"https://crescent-a0c27.firebaseio.com",projectId:"crescent-a0c27",storageBucket:"crescent-a0c27.appspot.com",messagingSenderId:"33181035689",appId:"1:33181035689:web:efd73ed3ad5cb8f9d70db8"};$e.a.initializeApp(We);var Fe=$e.a.auth(),Ke=n("ecee"),Je=n("c074"),Ge=n("ad3d"),Qe=(n("96cf"),n("3b8d"),n("522d")),Xe=n("efe7"),Ye=n("478e");function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(n),!0).forEach((function(t){Object(o["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}s["a"].use(Qe["a"]);var tt=Object({VUE_APP_API_KEY:"value",VUE_APP_AUTH_DOMAIN:"value",VUE_APP_DATABASE_URL:"value",VUE_APP_PROJECT_ID:"value",VUE_APP_STORAGE_BUCKET:"value",VUE_APP_SENDER_ID:"value",VUE_APP_APP_ID:"value",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_GRAPHQL_HTTP||"https://crescent-test-store.myshopify.com/api/2020-07/graphql.json",nt=new Ye["a"]({uri:tt,headers:{"X-Shopify-Storefront-Access-Token":"f659936e83e47453a4f66d24158a0382"}}),st={httpEndpoint:tt,wsEndpoint:null,tokenName:null,persisting:!1,websocketsOnly:!1,ssr:!1,link:nt};function at(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(Xe["createApolloClient"])(et(et({},st),e)),n=t.apolloClient,s=t.wsClient;n.wsClient=s;var a=new Qe["a"]({defaultClient:n,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return a}s["a"].use(ze["a"]);var rt,ot={en:{message:{hello:"Please select an option to continue",welcome:"Welcome to",crescent:"Crescent",menu:"Menu",login:"Login",orders:"Orders",register:"Register",refresh:"Refresh",productname:"Product Name",stock:"Stock",picking:"Picking",category:"Category",view:"View",scanmessage:"Please choose a scanning option...",camera:"Camera",cameramessage:"Use your devices camera to scan barcodes",hardware:"Hardware",hardwaremessage:"Use a handheld hardware scanner to scan multiple barcodes.",select:"Select",home:"Dashboard",products:"Products",scan:"Scan",settings:"Settings",delete:"Delete",userinfo:"User Information",logout:"Logout",clear:"Clear",scannersetting:"Scanner Setting",fulfilmentprovider:"Fulfilment Provider"}},de:{message:{hello:"Bitte wählen Sie eine Option, um fortzufahren",welcome:"Willkommen zu",orders:"Orders",crescent:"Crescent",menu:"Willkommen zu",login:"Anmeldung",register:"Registrieren",refresh:"Aktualisierung",productname:"Produktname",language:"Language",stock:"Lager",category:"Kategorie",view:"Aussicht",scanmessage:"Bitte wählen Sie eine Scanoption...",camera:"Kamera",cameramessage:"Verwenden Sie die Kamera Ihres Geräts, um Barcodes zu scannen",hardware:"Hardware",hardwaremessage:"Verwenden Sie einen Handheld-Hardware-Scanner, um mehrere Barcodes zu scannen.",select:"Wählen",home:"Zuhause",products:"Produkte",scan:"Scan",settings:"Die Einstellungen",delete:"Löschen",userinfo:"Nutzerinformation",logout:"Ausloggen",clear:"Klar",scannersetting:"Scannereinstellung",fulfilmentprovider:"Erfüllungsanbieter"}}},it=new ze["a"]({locale:"en",fallbackLocale:"en",messages:ot});Ke["c"].add(Je["a"],Je["f"],Je["b"],Je["c"],Je["j"],Je["h"],Je["n"],Je["g"],Je["l"],Je["e"],Je["i"],Je["m"],Je["k"],Je["d"]),s["a"].component("font-awesome-icon",Ge["a"]),s["a"].config.productionTip=!1,Fe.onAuthStateChanged((function(){rt||(rt=new s["a"]({router:Le,store:Ve,i18n:it,apolloProvider:at(),render:function(e){return e(L)}}).$mount("#app"))}))},"60df":function(e,t,n){"use strict";var s=n("638f"),a=n.n(s);a.a},"638f":function(e,t,n){},"64a9":function(e,t,n){},"64e1":function(e,t,n){"use strict";var s=n("2434"),a=n.n(s);a.a},bbfb:function(e,t,n){},c6bd:function(e,t,n){},c898:function(e,t,n){},cccb:function(e,t,n){"use strict";var s=n("d563"),a=n.n(s);a.a},cf0c:function(e,t,n){},d563:function(e,t,n){},f30e:function(e,t,n){"use strict";var s=n("30ba"),a=n.n(s);a.a}});
//# sourceMappingURL=app.aa3535ca.js.map