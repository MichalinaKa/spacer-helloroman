(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3136:function(t,e,n){t.exports=n.p+"img/moon.61b0cd4e.svg"},4567:function(t,e,n){"use strict";var a=n("b733"),r=n.n(a);r.a},"4c42":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:[{flexStart:1===t.step},"wrapper"]},[a("transition",{attrs:{name:"slide"}},[1===t.step?a("img",{staticClass:"logo",attrs:{src:n("3136")}}):t._e()]),a("transition",{attrs:{name:"fade"}},[0===t.step?a("Heroimage"):t._e()],1),0===t.step?a("Claim"):t._e(),a("Searchinput",{attrs:{dark:1===t.step},on:{input:t.handleInput},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),t.results&&!t.loading&&1===t.step?a("div",{staticClass:"results"},t._l(t.results,(function(e){return a("Item",{key:e.data[0].nasa_id,attrs:{item:e},nativeOn:{click:function(n){return t.handleModalOpen(e)}}})})),1):t._e(),1===t.step&&t.loading?a("div",{staticClass:"loader"}):t._e(),t.modalOpen?a("Modal",{attrs:{item:t.modalItem},on:{closeModal:function(e){t.modalOpen=!1}}}):t._e()],1)},i=[],s=n("bc3a"),o=n.n(s),c=n("f7fe"),l=n.n(c),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"claimWrapper"},[n("h1",{staticClass:"claim"},[t._v("SPACER")]),n("p",{staticClass:"subclaim"},[t._v(" Start your journey through our amazing galaxy and discover places you have never been before ;) ")]),n("p",{staticClass:"subclaim"},[t._v("Type anything space-related to start your journey..")])])}],d={name:"Claim"},f=d,h=(n("d6e5"),n("2877")),m=Object(h["a"])(f,u,p,!1,null,"359348f1",null),v=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"searchWrapper"},[n("div",{staticClass:"search"},[n("label",{attrs:{for:"search"}},[t._v("Search")]),n("input",{class:{dark:t.dark},attrs:{name:"search",id:"search"},domProps:{value:t.value},on:{input:t.handleChange}})])])},g=[],_={name:"Searchinput",props:{value:{type:String,required:!0},dark:{type:Boolean,default:!1}},methods:{handleChange:function(t){this.$emit("input",t.target.value)}}},y=_,O=(n("d159"),Object(h["a"])(y,b,g,!1,null,"7948f668",null)),C=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heroImage"})},x=[],k={name:"Heroimage"},S=k,w=(n("c14f"),Object(h["a"])(S,j,x,!1,null,null,null)),M=w.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item",style:t.style})},I=[],P={name:"Item",props:{item:{type:Object,required:!0}},data:function(){return{photo:this.item.links[0].href,title:this.item.data[0].title}},computed:{style:function(){return'background-image: url("'.concat(this.photo,'")')}}},E=P,V=(n("7062"),Object(h["a"])(E,$,I,!1,null,"17bda3af",null)),q=V.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outerWrapper"},[n("div",{staticClass:"innerWrapper"},[n("div",{staticClass:"photo"},[n("img",{attrs:{src:t.photo}})]),n("div",{staticClass:"description"},[n("h2",{staticClass:"title"},[t._v(t._s(t.title))]),n("p",{staticClass:"description"},[t._v(t._s(t.description))])])]),n("div",{staticClass:"close",on:{click:function(e){return t.$emit("closeModal")}}})])},W=[],H=(n("a4d3"),n("e01a"),{name:"Modal",props:{item:{type:Object,required:!0}},data:function(){return{photo:null,title:null,description:null}},mounted:function(){this.photo=this.item.links[0].href,this.title=this.item.data[0].title,this.description=this.item.data[0].description.substring(0,200)}}),A=H,J=(n("4567"),Object(h["a"])(A,T,W,!1,null,"772d3205",null)),z=J.exports,B="https://images-api.nasa.gov/search",R={name:"App",components:{Modal:z,Heroimage:M,Item:q,Claim:v,Searchinput:C},data:function(){return{modalOpen:!1,modalItem:null,loading:!1,step:0,searchValue:"",results:[]}},methods:{handleModalOpen:function(t){this.modalOpen=!0,this.modalItem=t},handleInput:l()((function(){var t=this;this.loading=!0,console.log(this.searchValue),o.a.get("".concat(B,"?q=").concat(this.searchValue,"&media_type=image")).then((function(e){t.results=e.data.collection.items,t.loading=!1,t.step=1})).catch((function(t){console.log(t)}))}),500)}},D=R,F=(n("5c0b"),Object(h["a"])(D,r,i,!1,null,null,null)),G=F.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(G)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},7062:function(t,e,n){"use strict";var a=n("4c42"),r=n.n(a);r.a},"9c0c":function(t,e,n){},a8bb:function(t,e,n){},b3ca:function(t,e,n){},b733:function(t,e,n){},c14f:function(t,e,n){"use strict";var a=n("a8bb"),r=n.n(a);r.a},cda9:function(t,e,n){},d159:function(t,e,n){"use strict";var a=n("cda9"),r=n.n(a);r.a},d6e5:function(t,e,n){"use strict";var a=n("b3ca"),r=n.n(a);r.a}});
//# sourceMappingURL=app.9ab37aba.js.map