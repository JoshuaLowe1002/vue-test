(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5df69870"],{"039a":function(t,e,r){"use strict";var n=r("3760"),s=r.n(n);s.a},3760:function(t,e,r){},"578a":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.validationErrors.length?r("div",{staticClass:"notification is-danger is-light"},[r("div",{staticClass:"bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative float-right mt-20 mx-3",attrs:{role:"alert"}},[r("div",{staticClass:"content"},[t._v("\n        Please resolve the following error(s) before proceeding.\n        "),r("ul",{staticStyle:{"margin-top":"0.3em","margin-left":"1em"}},t._l(t.validationErrors,(function(e,n){return r("li",{key:"error-"+n,domProps:{innerHTML:t._s(e)}})})),0)])])]):t._e(),r("div",{staticClass:"w-full max-w-xs",attrs:{id:"outPopUp"}},[r("span",{staticClass:"font-bold text-4xl"},[t._v(t._s(t.greet))]),r("br"),t._m(0),r("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6"},[r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"Email"}},[t._v("\n            Email\n        ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{autocomplete:"email",id:"username",type:"text",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2",attrs:{for:"password"}},[t._v("\n            Password\n        ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",attrs:{autocomplete:"current-password",id:"password",type:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),r("div",{staticClass:"flex items-center justify-between"},[r("button",{staticClass:"button is-success blue-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.validate()}}},[t._v("\n            Sign In\n        ")]),r("a",{staticClass:"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800",attrs:{href:"#"}},[t._v("\n            Forgot Password?\n        ")])])]),r("p",{staticClass:"text-center text-gray-500 text-xs"},[t._v("\n        ©2020 fulfilmentcrowd. All rights reserved.\n    ")])])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"font-bold text-sm"},[t._v("Not got an account? "),r("a",{staticClass:"font-medium blue-text",attrs:{href:"/register"}},[t._v("Register")])])}],a=(r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("a481"),r("bd86")),o=r("2f62");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var c={data:function(){return{email:null,password:null,greet:null,validationErrors:[],firebaseError:""}},mounted:function(){var t=new Date,e=t.getHours();e<12?this.greet="Good Morning!":e>=12&&e<=17?this.greet="Good Afternoon!":e>=17&&e<=24&&(this.greet="Good Evening!")},computed:l(l({},Object(o["c"])(["getUser"])),{},{nextRoute:function(){return this.$route.query.redirect||"/"}}),watch:{getUser:function(t){t&&this.$router.replace(this.nextRoute)}},methods:l(l({},Object(o["b"])(["signInAction"])),{},{resetError:function(){this.validationErrors=[]},validate:function(){this.resetError(),console.log("hi!"),this.email||this.validationErrors.push("<strong>E-mail</strong> cannot be empty."),1!=/.+@.+/.test(this.email)&&this.validationErrors.push("<strong>E-mail</strong> must be valid."),this.password||this.validationErrors.push("<strong>Password</strong> cannot be empty"),1!=/.{6,}/.test(this.password)&&this.validationErrors.push("<strong>Password</strong> must be at least 6 characters long"),this.validationErrors.length<=0&&this.signIn()},signIn:function(){this.signInAction({email:this.email,password:this.password})}})},u=c,d=(r("039a"),r("2877")),f=Object(d["a"])(u,n,s,!1,null,null,null);e["default"]=f.exports},a481:function(t,e,r){"use strict";var n=r("cb7c"),s=r("4bf8"),a=r("9def"),o=r("4588"),i=r("0390"),l=r("5f1b"),c=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};r("214f")("replace",2,(function(t,e,r,g){return[function(n,s){var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,s):r.call(String(a),n,s)},function(t,e){var s=g(r,t,this,e);if(s.done)return s.value;var d=n(t),f=String(this),p="function"===typeof e;p||(e=String(e));var b=d.global;if(b){var m=d.unicode;d.lastIndex=0}var w=[];while(1){var x=l(d,f);if(null===x)break;if(w.push(x),!b)break;var y=String(x[0]);""===y&&(d.lastIndex=i(f,a(d.lastIndex),m))}for(var E="",O=0,C=0;C<w.length;C++){x=w[C];for(var P=String(x[0]),_=c(u(o(x.index),f.length),0),j=[],k=1;k<x.length;k++)j.push(v(x[k]));var S=x.groups;if(p){var $=[P].concat(j,_,f);void 0!==S&&$.push(S);var I=String(e.apply(void 0,$))}else I=h(P,f,_,j,S,e);_>=O&&(E+=f.slice(O,_)+I,O=_+P.length)}return E+f.slice(O)}];function h(t,e,n,a,o,i){var l=n+t.length,c=a.length,u=p;return void 0!==o&&(o=s(o),u=f),r.call(i,u,(function(r,s){var i;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":i=o[s.slice(1,-1)];break;default:var u=+s;if(0===u)return r;if(u>c){var f=d(u/10);return 0===f?r:f<=c?void 0===a[f-1]?s.charAt(1):a[f-1]+s.charAt(1):r}i=a[u-1]}return void 0===i?"":i}))}}))}}]);
//# sourceMappingURL=chunk-5df69870.47a1452d.js.map