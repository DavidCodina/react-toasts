(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(6),c=n.n(s),o=n(1),r=n.n(o),i=n(7),a=n(5),u=n(0);function d(t){var e=t.toast,n=e.header,s=e.body,c=e.classes,r=e.duration,i=Object(o.useState)("toast rounded-3"),d=Object(a.a)(i,2),l=d[0],b=d[1],m=Object(o.useRef)();n=n||"Header Not Set!",s=s||"No text has been passed to body",c=c||"toast toast-secondary rounded-3 fade show",r=r||5e3,Object(o.useEffect)((function(){setTimeout((function(){b(c)}),150),setTimeout((function(){m.current&&m.current.classList.remove("show")}),r),setTimeout((function(){m.current&&(m.current.style.height=m.current.offsetHeight+"px",m.current.offsetHeight,m.current.style.height="0px",m.current.style.padding="0px",m.current.style.borderWidth="0px")}),r+300),setTimeout((function(){m.current&&m.current.classList.add("d-none")}),r+500)}),[c,r]);return Object(u.jsxs)("div",{id:"custom-toast",ref:m,className:l,children:[Object(u.jsxs)("div",{className:"toast-header",children:[Object(u.jsx)("strong",{className:"me-auto",children:n}),Object(u.jsx)("button",{className:"btn-close",type:"button",onClick:function(){m.current&&(m.current.classList.remove("show"),setTimeout((function(){m.current.classList.add("d-none")}),500))}})]}),Object(u.jsx)("div",{className:"toast-body",children:s})]})}var l=Object(o.createContext)({}),b=function(t){var e=t.clearAllDuration,n=t.children,s=Object(o.useState)([]),c=Object(a.a)(s,2),r=c[0],b=c[1];Object(o.useEffect)((function(){var t=setTimeout((function(){b([])}),e+500);return function(){clearTimeout(t)}}),[r,b,e]);return Object(u.jsxs)(l.Provider,{value:{createToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.header=t.header||"Header Goes Here:",t.body=t.body||"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",t.theme=t.theme||"primary",t.duration=t.duration||5e3;var e={header:t.header,body:t.body,classes:"toast toast-".concat(t.theme," rounded-3 fade show"),duration:t.duration};b((function(t){return[].concat(Object(i.a)(t),[e])}))}},children:[Object(u.jsx)("div",{className:"toast-container",children:r.map((function(t,e){return Object(u.jsx)(d,{toast:t},e)}))}),n]})};var m=function(){var t=Object(o.useContext)(l).createToast;return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)("h2",{className:"my-5 text-white-3d text-center",children:"Toast Test"}),Object(u.jsxs)("div",{className:"d-flex justify-content-between flex-wrap mx-auto mb-2",style:{maxWidth:550},children:[Object(u.jsx)("button",{className:"mb-3 btn btn-outline-primary btn-sm",style:{minWidth:125},onClick:function(){return t()},children:"Primary Toast"}),Object(u.jsx)("button",{className:"mb-3 btn btn-outline-secondary btn-sm",style:{minWidth:125},onClick:function(){return t({header:"Secondary Toast:",theme:"secondary"})},children:"Secondary Toast"}),Object(u.jsx)("button",{className:"mb-3 btn btn-outline-success btn-sm",style:{minWidth:125},onClick:function(){return t({theme:"success",body:"Yay you did it!"})},children:"Success Toast"}),Object(u.jsx)("button",{className:"mb-3 btn btn-outline-info btn-sm",style:{minWidth:125},onClick:function(){return t({theme:"info"})},children:"Info Toast"}),Object(u.jsx)("button",{className:"mb-3 btn btn-outline-warning btn-sm",style:{minWidth:125},onClick:function(){return t({theme:"warning"})},children:"Warning Toast"}),Object(u.jsx)("button",{className:"mb-3 btn btn-outline-danger btn-sm",style:{minWidth:125},onClick:function(){return t({theme:"danger"})},children:"Danger Toast"}),Object(u.jsx)("button",{className:"mb-3 btn btn-outline-dark btn-sm",style:{minWidth:125},onClick:function(){return t({theme:"dark"})},children:"Dark Toast"}),Object(u.jsx)("button",{className:"mb-3 btn btn-outline-light btn-sm",style:{minWidth:125},onClick:function(){return t({theme:"light"})},children:"Light Toast"})]})]})};n(13),n(14);var h=function(){return Object(u.jsx)(b,{clearAllDuration:5e3,children:Object(u.jsx)("main",{className:"pb-5",children:Object(u.jsx)("div",{className:"container-fluid pt-3 px-md-5",children:Object(u.jsx)(m,{})})})})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ab276b32.chunk.js.map