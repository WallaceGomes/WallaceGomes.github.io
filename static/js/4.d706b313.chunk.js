(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[4],{38:function(e,t,n){e.exports=n.p+"static/media/logo.4e74481f.svg"},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(36),r=n.n(a),o=n(37),c=n(8),l=n(0),u=function(){var e=Object(l.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1],u=Object(l.useState)(),i=Object(c.a)(u,2),s=i[0],f=i[1],p=Object(l.useRef)([]),m=Object(l.useCallback)(function(){var e=Object(o.a)(r.a.mark((function e(t){var n,o,c,l,u,i,s=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{},a(!0),l=new AbortController,p.current.push(l),e.prev=6,e.next=9,fetch(t,{method:n,body:o,headers:c,signal:l.signal});case 9:return u=e.sent,e.next=12,u.json();case 12:if(i=e.sent,p.current=p.current.filter((function(e){return e!==l})),u.ok){e.next=16;break}throw new Error(i.message);case 16:return a(!1),e.abrupt("return",i);case 20:throw e.prev=20,e.t0=e.catch(6),f(e.t0.message),a(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(l.useEffect)((function(){return function(){p.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:s,sendRequest:m,clearError:function(){f(null)}}}},40:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(34);function c(){var e=Object(o.a)(["\n\theight: 35px;\n\twidth: 90px;\n\tbackground: #0d0d0d;\n\tborder: 1px solid #ffff33;\n\tcolor: #fff;\n\tfont-weight: bold;\n\tcursor: pointer;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tborder-radius: 3px;\n\tfont-size: 14px;\n\n\t&:hover{\n\t\tcolor: #000000;\n\t\tbackground: #fff;\n\t\ttransition: 0.3s;\n\t}\n\n\t&:disabled,\n\t&:hover:disabled,\n\t&:active:disabled {\n\t\tbackground: #ccc;\n\t\tcolor: #979797;\n\t\tborder-color: #ccc;\n\t\tcursor: not-allowed;\n\t}\n"]);return c=function(){return e},e}var l=n(35).a.button(c());t.a=function(e){return r.a.createElement(l,{type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}},41:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(34);function c(){var e=Object(o.a)(["\n\n\t&:hover{\n\t\tcursor: pointer;\n\t}\n\tbackground: rgba(0,0,0,0);\n\tborder: none;\n\n\timg{\n\t\twidth: 90px;\n\theight: 70px;\n\tborder-radius: 5px;\n\tpadding-left: 20px;\n\t}\n"]);return c=function(){return e},e}var l=n(35).a.button(c()),u=n(38),i=n.n(u),s=n(12);t.a=function(){return r.a.createElement(l,null,r.a.createElement("img",{src:i.a,alt:"Logo"}),r.a.createElement(s.b,{to:"/"}))}},43:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(34);function c(){var e=Object(o.a)(["\n  display: flex;\n  position: relative;\n\tmargin-bottom: 2rem;\n\n  input {\n    background-color: #00001a;\n    border: 2px solid #cccc00;\n    border-radius: 3px;\n    padding: 16px;\n    color: #fff;\n    font-size: 16px;\n    transition: 180ms ease-in-out;\n    &::placeholder {\n      color: rgba(255, 255, 255, 0.4);\n    }\n\n    &:focus {\n      border: 2px solid;\n    }\n  }\n"]);return c=function(){return e},e}var l=n(35).a.label(c());t.a=function(e){var t=e.name,n=e.type,a=void 0===n?"text":n,o=e.value,c=e.setValue,u=e.placeholder;return r.a.createElement(l,{htmlFor:t},r.a.createElement("input",{name:t,type:a,value:o,placeholder:u,onChange:function(e){return c(e.target.value)}}))}},44:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l}));var a=n(16);var r=function(){return{type:"REQUIRE"}},o=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var n,r=!0,o=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}(t);try{for(o.s();!(n=o.n()).done;){var c=n.value;"REQUIRE"===c.type&&(r=r&&e.length>0),"MINLENGTH"===c.type&&(r=r&&e.length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){o.e(l)}finally{o.f()}return r}},52:function(e,t,n){"use strict";n.r(t);var a=n(36),r=n.n(a),o=n(37),c=n(8),l=n(0),u=n.n(l),i=n(40),s=n(43),f=n(39),p=n(14),m=n(13),d=n(41),b=n(44),v=n(34),g=n(35);function h(){var e=Object(v.a)(["\ncolor: #ff3333;\nmargin-left: 50px;\n"]);return h=function(){return e},e}function E(){var e=Object(v.a)(["\n\tmargin: 10px;\n\tmargin-left: 30px;\n\tButton {\n\t\tmargin-left: 5px;\n\t\tfont-weight: 400;\n    height: auto;\n    font-size: 12px;\n\t}\n\tsmall{\n\t\tcolor: #fff;\n\t}\n"]);return E=function(){return e},e}function y(){var e=Object(v.a)(["\n\tbackground: #262626;\n\twidth: 320px;\n\tmargin: 180px auto;\n\tpadding: 10px;\n\tborder-radius: 5px;\n\n\t\tbutton img{\n\t\t\twidth: 100px;\n\t\t\tmargin-left: 90px;\n\t\t}\n\n\t\th1{\n\t\t\tcolor: #fff;\n\t\t\tmargin-bottom: 10px;\n\t\t\tmargin-left: 110px;\n\t\t}\n\t\tform label{\n\t\t\tjustify-content: space-evenly;\n\t\t}\n\t\tform Button {\n\t\t\twidth: 220px;\n\t\t\tmargin-left: 40px;\n\t\t\tfont-size: 16px;\n\t\t}\n"]);return y=function(){return e},e}var x=g.a.div(y()),O=g.a.div(E()),j=g.a.small(h());t.default=function(){var e=Object(l.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],v=Object(l.useState)(""),g=Object(c.a)(v,2),h=g[0],E=g[1],y=Object(l.useState)(""),w=Object(c.a)(y,2),k=w[0],S=w[1],C=Object(l.useState)(!0),I=Object(c.a)(C,2),L=I[0],N=I[1],T=Object(l.useState)(!1),P=Object(c.a)(T,2),R=P[0],A=P[1],M=Object(f.a)(),J=M.sendRequest,V=M.isLoading,z=Object(l.useContext)(p.a),F=Object(b.d)(n,[Object(b.a)(),Object(b.c)()]),G=Object(b.d)(h,[Object(b.b)(6)]),H=Object(b.d)(k,[Object(b.c)()]),q=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!R){e.next=13;break}return e.prev=2,e.next=5,J("".concat("https://starwars-mini-pedia.herokuapp.com/api","/users/forgot"),"POST",JSON.stringify({email:n}),{"Content-Type":"application/json"});case 5:"Message delivered succesfully"===e.sent.message&&alert("Check your email for the reset link!"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:return e.abrupt("return");case 13:if(!L){e.next=27;break}return e.prev=14,e.next=17,J("".concat("https://starwars-mini-pedia.herokuapp.com/api","/users/login"),"POST",JSON.stringify({email:n,password:h}),{"Content-Type":"application/json"});case 17:a=e.sent,z.login(a.userId,a.token),e.next=25;break;case 21:e.prev=21,e.t1=e.catch(14),console.log(e.t1),alert(e.t1.message);case 25:e.next=38;break;case 27:return e.prev=27,e.next=30,J("".concat("https://starwars-mini-pedia.herokuapp.com/api","/users/signup"),"POST",JSON.stringify({email:n,password:h,name:k}),{"Content-Type":"application/json"});case 30:o=e.sent,z.login(o.userId,o.token),e.next=38;break;case 34:e.prev=34,e.t2=e.catch(27),console.log(e.t2),alert(e.t2.message);case 38:case"end":return e.stop()}}),e,null,[[2,9],[14,21],[27,34]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){A((function(e){return!e}))};return R?u.a.createElement(u.a.Fragment,null,V&&u.a.createElement(m.a,{asOverLay:!0}),u.a.createElement(x,null,u.a.createElement(d.a,null),u.a.createElement("form",{onSubmit:q},!F&&u.a.createElement(j,null,"Please enter a valid email address"),u.a.createElement(s.a,{type:"email",name:"userEmail",placeholder:"Email",value:n,setValue:a}),u.a.createElement(i.a,{type:"submit"},"Send me an e-mail!")),u.a.createElement(O,null,u.a.createElement("small",null,"I remember my password"),u.a.createElement(i.a,{onClick:B},"Login")))):u.a.createElement(u.a.Fragment,null,V&&u.a.createElement(m.a,{asOverLay:!0}),u.a.createElement(x,null,u.a.createElement(d.a,null),u.a.createElement("form",{onSubmit:q},!F&&u.a.createElement(j,null,"Please enter a valid email address"),u.a.createElement(s.a,{type:"email",name:"userEmail",placeholder:"Email",value:n,setValue:a}),!L&&u.a.createElement(u.a.Fragment,null,!H&&u.a.createElement(j,null,"Please enter your name"),u.a.createElement(s.a,{type:"text",name:"userName",placeholder:"Name",value:k,setValue:S})),!G&&u.a.createElement(j,null,"Password min 6 chars"),u.a.createElement(s.a,{type:"password",name:"userPass",placeholder:"Password",value:h,setValue:E}),u.a.createElement(i.a,{type:"submit"},L?"Login":"Register")),u.a.createElement(O,null,u.a.createElement("small",null,L?"Don't have an account?":"Already have an account?"),u.a.createElement(i.a,{onClick:function(){N((function(e){return!e}))}},L?"Signup":"Login")),u.a.createElement(O,null,u.a.createElement("small",null,"I forgot my password"),u.a.createElement(i.a,{onClick:B},"Reset Password"))))}}}]);
//# sourceMappingURL=4.d706b313.chunk.js.map