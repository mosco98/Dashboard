(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(21)},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);a(11),a(12),a(13),a(14);var n=a(0),c=a.n(n),l=a(4),r=a.n(l),i=a(5),s=a(6),o=a(7),m=a(8),u=a(22),g=function(){return c.a.createElement("div",{className:"vh-100 w-100 body-wrapper"},c.a.createElement("span",{className:"menu-btn mt-2 ml-2"},c.a.createElement(u.a,{size:"30"})))},d=a(2),p=a(23),f=function(e){var t=e.isLoggedInHandler,a=Object(n.useState)(""),l=Object(d.a)(a,2),r=l[0],i=l[1],s=Object(n.useState)(!1),o=Object(d.a)(s,2),m=o[0],u=o[1],g=Object(n.useState)(""),f=Object(d.a)(g,2),v=f[0],E=f[1],b=Object(n.useState)(!1),h=Object(d.a)(b,2),N=h[0],j=h[1],y=function(e){var t=URL.createObjectURL(e.target.files[0]);E(t)};return c.a.createElement("div",{className:"vh-100 w-100 body-wrapper intro"},m?c.a.createElement("div",{className:"h-100 w-100 d-flex align-items-center flex-column justify-content-center text-white"},v?c.a.createElement("div",{className:"avatar-ctn",onMouseOver:function(){return j(!0)},onMouseLeave:function(){return j(!1)}},c.a.createElement("img",{className:"img-fluid position-absolute",src:v,alt:"avatar"}),c.a.createElement("div",{className:N?"img-edit-overlay":"img-edit-overlay hide"},c.a.createElement("span",{className:"change-photo-icon",title:"Change photo"},c.a.createElement(p.a,{size:"28"}),c.a.createElement("span",null,"Change photo")),c.a.createElement("input",{type:"file",className:"custom-file-input",name:"avatar",id:"avatar",accept:"image/png, image/jpeg",onChange:y,title:"Change photo"}))):c.a.createElement("div",{className:"avatar-ctn"},c.a.createElement("span",{style:{cursor:"pointer",position:"absolute"}},c.a.createElement(p.a,{size:"28"})),c.a.createElement("input",{type:"file",id:"avatar",className:"custom-file-input",name:"avatar",accept:"image/png, image/jpeg",onChange:y})),c.a.createElement("br",null),c.a.createElement("h3",null,"Select an Avatar ",r),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"btn-ctn-intro d-flex align-items-center justify-content-end"},v&&c.a.createElement("button",{className:"btn btn-success",onClick:function(){return t(r,v)}},"Finish"))):c.a.createElement("div",{className:"h-100 w-100 d-flex align-items-center flex-column justify-content-center text-white"},c.a.createElement("h1",null,"Hi there"," ",c.a.createElement("span",{className:"wave",role:"img","aria-label":"wave"},"\ud83d\udc4b")),c.a.createElement("br",null),c.a.createElement("h2",null,"What do I call you?"),c.a.createElement("br",null),c.a.createElement("input",{className:"name-input-intro p-3 text-center",placeholder:"Enter Nickname",onChange:function(e){return i(e.target.value)},autoFocus:!0}),c.a.createElement("br",null),c.a.createElement("div",{className:"btn-ctn-intro d-flex align-items-center justify-content-end"},r&&c.a.createElement("button",{className:"btn btn-success",onClick:r?function(){u(!0)}:null},"Next"))))},v=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).checkLoggedIn=function(){if(localStorage.getItem("user"))return e.setState({isLoggedIn:!0})},e.isLoggedInHandler=function(t,a){e.setState({isLoggedIn:!0});var n={name:t,avatarUrl:a};localStorage.setItem("user",JSON.stringify(n))},e.state={isLoggedIn:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.checkLoggedIn()}},{key:"render",value:function(){var e=this.state.isLoggedIn?g:f;return c.a.createElement("div",{className:"vh-100 w-100 body-wrapper"},c.a.createElement(e,{isLoggedInHandler:this.isLoggedInHandler}))}}]),a}(n.Component);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.1a33c488.chunk.js.map