(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[7],{39:function(t,n,e){t.exports=e.p+"static/media/logo.4e74481f.svg"},40:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(37),a=e.n(r),o=e(38),c=e(8),u=e(0),i=function(){var t=Object(u.useState)(!1),n=Object(c.a)(t,2),e=n[0],r=n[1],i=Object(u.useState)(),l=Object(c.a)(i,2),s=l[0],f=l[1],p=Object(u.useRef)([]),d=Object(u.useCallback)(function(){var t=Object(o.a)(a.a.mark((function t(n){var e,o,c,u,i,l,s=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{},r(!0),u=new AbortController,p.current.push(u),t.prev=6,t.next=9,fetch(n,{method:e,body:o,headers:c,signal:u.signal});case 9:return i=t.sent,t.next=12,i.json();case 12:if(l=t.sent,p.current=p.current.filter((function(t){return t!==u})),i.ok){t.next=16;break}throw new Error(l.message);case 16:return r(!1),t.abrupt("return",l);case 20:throw t.prev=20,t.t0=t.catch(6),f("Unable to reach the server! Try again later..."),r(!1),t.t0;case 25:case"end":return t.stop()}}),t,null,[[6,20]])})));return function(n){return t.apply(this,arguments)}}(),[]);return Object(u.useEffect)((function(){return function(){p.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:e,error:s,sendRequest:d,clearError:function(){f(null)}}}},41:function(t,n,e){"use strict";var r=e(0),a=e.n(r),o=e(35);function c(){var t=Object(o.a)(["\n\theight: 35px;\n\twidth: 90px;\n\tbackground: #0d0d0d;\n\tborder: 1px solid #ffff33;\n\tcolor: #fff;\n\tfont-weight: bold;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tborder-radius: 3px;\n\tfont-size: 14px;\n\n\t&:hover{\n\t\tcolor: #000000;\n\t\tbackground: #fff;\n\t\ttransition: 0.3s;\n\t}\n\n\t&:disabled,\n\t&:hover:disabled,\n\t&:active:disabled {\n\t\tbackground: #ccc;\n\t\tcolor: #979797;\n\t\tborder-color: #ccc;\n\t\tcursor: not-allowed;\n\t}\n"]);return c=function(){return t},t}var u=e(36).a.button(c());n.a=function(t){return a.a.createElement(u,{type:t.type,onClick:t.onClick,disabled:t.disabled},t.children)}},42:function(t,n,e){"use strict";var r=e(0),a=e.n(r),o=e(1),c=e(35);function u(){var t=Object(c.a)(["\n\n\t&:hover{\n\t\tcursor: pointer;\n\t}\n\tbackground: rgba(0,0,0,0);\n\tborder: none;\n\n\timg{\n\t\twidth: 90px;\n\theight: 70px;\n\tborder-radius: 5px;\n\tpadding-left: 20px;\n\t}\n"]);return u=function(){return t},t}var i=e(36).a.button(u()),l=e(39),s=e.n(l),f=e(13);n.a=function(){var t=Object(o.g)();return a.a.createElement(i,{onClick:function(){t.push("/")}},a.a.createElement("img",{src:s.a,alt:"Logo"}),a.a.createElement(f.b,{to:"/"}))}},43:function(t,n,e){"use strict";e.d(n,"c",(function(){return a})),e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return c})),e.d(n,"d",(function(){return u}));var r=e(47),a=function(){return{type:"REQUIRE"}},o=function(t){return{type:"MINLENGTH",val:t}},c=function(){return{type:"EMAIL"}},u=function(t,n){var e,a=!0,o=Object(r.a)(n);try{for(o.s();!(e=o.n()).done;){var c=e.value;"REQUIRE"===c.type&&(a=a&&t.length>0),"MINLENGTH"===c.type&&(a=a&&t.length>=c.val),"MAXLENGTH"===c.type&&(a=a&&t.length<=c.val),"MIN"===c.type&&(a=a&&+t>=c.val),"MAX"===c.type&&(a=a&&+t<=c.val),"EMAIL"===c.type&&(a=a&&/^\S+@\S+\.\S+$/.test(t))}}catch(u){o.e(u)}finally{o.f()}return a}},44:function(t,n,e){"use strict";var r=e(0),a=e.n(r),o=e(35);function c(){var t=Object(o.a)(["\n  display: flex;\n  position: relative;\n\tmargin-bottom: 2rem;\n\n  input {\n    background-color: #00001a;\n    border: 2px solid #cccc00;\n    border-radius: 3px;\n    padding: 16px;\n    color: #fff;\n    font-size: 16px;\n    transition: 180ms ease-in-out;\n    &::placeholder {\n      color: rgba(255, 255, 255, 0.4);\n    }\n\n    &:focus {\n      border: 2px solid;\n    }\n  }\n"]);return c=function(){return t},t}var u=e(36).a.label(c());n.a=function(t){var n=t.name,e=t.type,r=void 0===e?"text":e,o=t.value,c=t.setValue,i=t.placeholder;return a.a.createElement(u,{htmlFor:n},a.a.createElement("input",{name:n,type:r,value:o,placeholder:i,onChange:function(t){return c(t.target.value)}}))}},72:function(t,n,e){"use strict";e.r(n);var r=e(37),a=e.n(r),o=e(38),c=e(8),u=e(0),i=e.n(u),l=e(41),s=e(44),f=e(40),p=e(14),d=e(42),b=e(43),g=e(1),m=e(45),v=e.n(m),h=e(35),x=e(36);function E(){var t=Object(h.a)(["\ncolor: #ff3333;\nmargin-left: 50px;\n"]);return E=function(){return t},t}function j(){var t=Object(h.a)(["\n\tmargin: 10px;\n\tmargin-left: 30px;\n\tButton {\n\t\tmargin-left: 5px;\n\t\tfont-weight: 400;\n    height: auto;\n    font-size: 12px;\n\t}\n\tsmall{\n\t\tcolor: #fff;\n\t}\n"]);return j=function(){return t},t}function y(){var t=Object(h.a)(["\n\tbackground: #262626;\n\twidth: 320px;\n\tmargin: 180px auto;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\n\t\tbutton img{\n\t\t\twidth: 100px;\n\t\t\tmargin-left: 90px;\n\t\t}\n\n\t\th1{\n\t\t\tcolor: #fff;\n\t\t\tmargin-bottom: 10px;\n\t\t\tmargin-left: 110px;\n\t\t}\n\t\tform label{\n\t\t\tjustify-content: space-evenly;\n\t\t}\n\t\tform Button {\n\t\t\twidth: 220px;\n\t\t\tmargin-left: 40px;\n\t\t\tfont-size: 16px;\n\t\t}\n"]);return y=function(){return t},t}var O=x.a.div(y()),w=(x.a.div(j()),x.a.small(E())),k={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)"},content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"#262626",color:"#fff",fontWeigth:"bold"}};v.a.setAppElement("#root");n.default=function(){var t=Object(u.useState)(""),n=Object(c.a)(t,2),e=n[0],r=n[1],m=Object(f.a)(),h=m.sendRequest,x=m.isLoading,E=Object(g.g)(),j=Object(b.d)(e,[Object(b.b)(6)]),y=Object(u.useState)(!1),C=Object(c.a)(y,2),L=C[0],R=C[1],S=Object(u.useState)(""),A=Object(c.a)(S,2),M=A[0],I=A[1];function N(){R((function(t){return!t})),L&&E.push("/login")}var T=function(){var t=Object(o.a)(a.a.mark((function t(n){var r,o,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=window.location.href,o=r.slice(-229),t.prev=3,t.next=6,h("".concat("https://starwars-mini-pedia.herokuapp.com/api","/users/reset/").concat(o),"PATCH",JSON.stringify({newPassword:e}),{"Content-Type":"application/json"});case 6:c=t.sent,console.log(c),I(c.message),N(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(3),console.log(t.t0),I(t.t0.message),N();case 17:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(n){return t.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,x&&i.a.createElement(p.a,{asOverLay:!0}),i.a.createElement(v.a,{isOpen:L,onRequestClose:N,style:k,contentLabel:"Alert Modal"},i.a.createElement("div",null,M),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(l.a,{onClick:N},"Close")),i.a.createElement(O,null,i.a.createElement(d.a,null),i.a.createElement("form",{onSubmit:T},!j&&i.a.createElement(w,null,"Password min 6 chars"),i.a.createElement(s.a,{type:"password",name:"userPass",placeholder:"Password",value:e,setValue:r}),i.a.createElement(l.a,{type:"submit"},"Reset Password"))))}}}]);
//# sourceMappingURL=7.c3e4105f.chunk.js.map