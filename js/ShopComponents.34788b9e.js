(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ShopComponents"],{"19d9":function(t,i,n){"use strict";var e=n("5d38"),r=n.n(e);r.a},"1dde":function(t,i,n){var e=n("d039"),r=n("b622"),s=n("2d00"),c=r("species");t.exports=function(t){return s>=51||!e((function(){var i=[],n=i.constructor={};return n[c]=function(){return{foo:1}},1!==i[t](Boolean).foo}))}},5095:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"shop"},[t._m(0),e("div",{staticClass:"shop-block mt-4"},[e("div",{staticClass:"shop-content row"},[e("div",{staticClass:"shop-list col-md-3"},[e("router-link",{attrs:{to:"/ShopComponents/SpecialMenu"}},[t._v("特色蛋糕")]),e("router-link",{attrs:{to:"/ShopComponents/NewyearMenu"}},[t._v("賀年糕點")]),e("router-link",{attrs:{to:"/ShopComponents/BreakMenu"}},[t._v("麵包")])],1),e("div",{staticClass:"listmenu col-md-9"},[e("router-view")],1)])]),e("div",{staticClass:"buymenu"},[e("img",{attrs:{src:n("7bba"),alt:""},on:{click:function(i){return t.showlist()}}}),e("span",{staticClass:"incar-length"},[t._v(" "+t._s(t.incarle)+" ")]),e("div",{staticClass:"shop-car-list"},[e("h6",[t._v("已選擇的商品")]),e("hr",{staticStyle:{border:"1px solid rgb(138, 138, 138)",margin:"5px"}}),e("div",[e("table",{staticClass:"shop-car-table",attrs:{cellspacing:"3"}},[t._m(1),t._l(t.incar,(function(i,n){return e("tbody",{staticStyle:{"font-size":"16px"}},[e("tr",[e("td",[e("img",{staticStyle:{"max-width":"50px"},attrs:{src:i.photo,alt:""}})]),e("td",[t._v(" "+t._s(i.itemname)+" ")]),e("td",[t._v(" $"+t._s(i.itemprice)+" ")]),e("td",[t._v(" "+t._s(i.num)+" ")]),e("td",[e("div",{staticClass:"btn",on:{click:function(i){return t.addnum(n)}}},[t._v("+")])]),e("td",[e("div",{staticClass:"btn",on:{click:function(i){return t.subnum(n)}}},[t._v("-")])]),e("td",[e("div",{staticClass:"btn",on:{click:function(n){return t.deleteincar(i)}}},[t._v("x")])])])])}))],2)]),e("hr"),e("div",{staticClass:"gift-check"},[e("input",{attrs:{type:"checkbox",name:"",id:"discount"},on:{click:function(i){return t.GiftCheck()}}}),e("p",[t._v(t._s(t.PickGift.prizename))])]),e("h4",{staticClass:"cost"},[t._v("總金額：$"+t._s(t.cost))]),e("div",{staticClass:"btn-checkout"},[e("router-link",{staticClass:"btnpay",attrs:{to:"/pay"}},[t._v("結帳")])],1)])])])},r=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"cur-img"},[e("img",{attrs:{src:n("64dd"),alt:""}})])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("thead",{staticStyle:{"font-size":"16px",color:"rgb(138, 138, 138)"}},[n("td"),n("td",[t._v("商品名稱")]),n("td",[t._v("價格")]),n("td",[t._v("數量")])])}],s=(n("c975"),n("a434"),{computed:{Products_All:function(){return this.$store.state.product_All},userdd:function(){return this.$store.state.userdata},incar:{get:function(){return this.$store.state.incar},set:function(t){this.$store.commit("Setincar",t)}},checkgift:{get:function(){return this.$store.state.checkgift},set:function(t){this.$store.commit("Setcheck",t)}},PickGift:{get:function(){return this.$store.state.PickGift},set:function(t){this.$store.commit("SetGift",t)}},Havegift:function(){return this.$store.state.Havegift},cost:function(){for(var t=0,i=0;i<this.incar.length;i++)t+=this.incar[i].num*this.incar[i].itemprice;return this.checkgift,t},incarle:function(){for(var t=0,i=0;i<this.incar.length;i++)t+=this.incar[i].num;return t}},mounted:function(){this.$(".shop-car-list").hide(),this.$(".gift-check").hide(),this.$store.dispatch("Getlist")},methods:{addnum:function(t){this.incar[t].num++},subnum:function(t){0==this.incar[t].num&&this.incar[t].num,this.incar[t].num--,0==this.incar[t].num&&this.incar.splice(t,1)},deleteincar:function(t){var i=this.incar.indexOf(t);-1!==i&&this.incar.splice(i,1)},showlist:function(){this.$(".shop-car-list").toggle(500)},GiftCheck:function(){this.checkgift?this.checkgift=!1:this.checkgift=!0},cosani:function(){if(this.Havegift)return this.$(".gift-check").show(500)}}}),c=s,o=(n("19d9"),n("2877")),a=Object(o["a"])(c,e,r,!1,null,null,null);i["default"]=a.exports},"5d38":function(t,i,n){},"64dd":function(t,i,n){t.exports=n.p+"img/0418-arome-1-www.jetsoclub.com.1929579e.jpg"},"65f0":function(t,i,n){var e=n("861d"),r=n("e8b5"),s=n("b622"),c=s("species");t.exports=function(t,i){var n;return r(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?e(n)&&(n=n[c],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===i?0:i)}},"7bba":function(t,i,n){t.exports=n.p+"img/shopcar.8d32c27b.png"},8418:function(t,i,n){"use strict";var e=n("c04e"),r=n("9bf2"),s=n("5c6c");t.exports=function(t,i,n){var c=e(i);c in t?r.f(t,c,s(0,n)):t[c]=n}},a434:function(t,i,n){"use strict";var e=n("23e7"),r=n("23cb"),s=n("a691"),c=n("50c4"),o=n("7b0b"),a=n("65f0"),u=n("8418"),f=n("1dde"),l=n("ae40"),h=f("splice"),d=l("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";e({target:"Array",proto:!0,forced:!h||!d},{splice:function(t,i){var n,e,f,l,h,d,b=o(this),_=c(b.length),C=r(t,_),k=arguments.length;if(0===k?n=e=0:1===k?(n=0,e=_-C):(n=k-2,e=v(p(s(i),0),_-C)),_+n-e>m)throw TypeError(g);for(f=a(b,e),l=0;l<e;l++)h=C+l,h in b&&u(f,l,b[h]);if(f.length=e,n<e){for(l=C;l<_-e;l++)h=l+e,d=l+n,h in b?b[d]=b[h]:delete b[d];for(l=_;l>_-e+n;l--)delete b[l-1]}else if(n>e)for(l=_-e;l>C;l--)h=l+e-1,d=l+n-1,h in b?b[d]=b[h]:delete b[d];for(l=0;l<n;l++)b[l+C]=arguments[l+2];return b.length=_-e+n,f}})},a640:function(t,i,n){"use strict";var e=n("d039");t.exports=function(t,i){var n=[][t];return!!n&&e((function(){n.call(null,i||function(){throw 1},1)}))}},ae40:function(t,i,n){var e=n("83ab"),r=n("d039"),s=n("5135"),c=Object.defineProperty,o={},a=function(t){throw t};t.exports=function(t,i){if(s(o,t))return o[t];i||(i={});var n=[][t],u=!!s(i,"ACCESSORS")&&i.ACCESSORS,f=s(i,0)?i[0]:a,l=s(i,1)?i[1]:void 0;return o[t]=!!n&&!r((function(){if(u&&!e)return!0;var t={length:-1};u?c(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,f,l)}))}},c975:function(t,i,n){"use strict";var e=n("23e7"),r=n("4d64").indexOf,s=n("a640"),c=n("ae40"),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0,u=s("indexOf"),f=c("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:a||!u||!f},{indexOf:function(t){return a?o.apply(this,arguments)||0:r(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,i,n){var e=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}}}]);
//# sourceMappingURL=ShopComponents.34788b9e.js.map