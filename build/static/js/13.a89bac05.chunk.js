(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1091:function(n,e,t){"use strict";t.r(e);var a=t(21),r=t(22),o=t(24),i=t(25),l=t(26),c=t(1),p=t.n(c),s=t(1062),d=t(39),u=t(120),g=t(657),m=t(202),h=t(30),b=t(35),f=t(52),x=t(23),v=t(19),E=t(3),j=t(848),w=t.n(j),y=t(36);function O(){var n=Object(x.a)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.6);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: ",";\n    right: ",";\n  }\n\n  .isoSignUpContentWrapper {\n    width: 500px;\n    height: 100%;\n    overflow-y: auto;\n    z-index: 10;\n    position: relative;\n  }\n\n  .isoSignUpContent {\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 70px 50px;\n    position: relative;\n    background-color: #ffffff;\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n      padding: 70px 20px;\n    }\n\n    .isoLogoWrapper {\n      width: 100%;\n      display: flex;\n      margin-bottom: 50px;\n      justify-content: center;\n      flex-shrink: 0;\n\n      a {\n        font-size: 24px;\n        font-weight: 300;\n        line-height: 1;\n        text-transform: uppercase;\n        color: ",";\n      }\n    }\n\n    .isoSignUpForm {\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n\n      .isoInputWrapper {\n        margin-bottom: 15px;\n\n        &:last-child {\n          margin-bottom: 0;\n        }\n\n        input {\n          &::-webkit-input-placeholder {\n            color: ",";\n          }\n\n          &:-moz-placeholder {\n            color: ",";\n          }\n\n          &::-moz-placeholder {\n            color: ",";\n          }\n          &:-ms-input-placeholder {\n            color: ",";\n          }\n        }\n      }\n\n      .isoLeftRightComponent {\n        input {\n          width: calc(100% - 10px);\n\n          &:first-child {\n            margin-right: ",";\n            margin-left: ",";\n          }\n        }\n      }\n\n      .isoHelperWrapper {\n        margin-top: 35px;\n        flex-direction: column;\n      }\n\n      .isoForgotPass {\n        font-size: 12px;\n        color: ",";\n        margin-bottom: 10px;\n\n        &:hover {\n          color: ",";\n        }\n      }\n\n      button {\n        font-weight: 500;\n        width: 100%;\n        height: 42px;\n        border: 0;\n\n        &.btnFacebook {\n          background-color: ",";\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnGooglePlus {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnAuthZero {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n\n        &.btnFirebase {\n          background-color: ",";\n          margin-top: 15px;\n\n          &:hover {\n            background-color: ",";\n          }\n        }\n      }\n    }\n  }\n"]);return O=function(){return n},n}var k=v.b.div(O(),w.a,function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},Object(E.palette)("secondary",2),Object(E.palette)("grayscale",0),Object(E.palette)("grayscale",0),Object(E.palette)("grayscale",0),Object(E.palette)("grayscale",0),function(n){return"rtl"===n["data-rtl"]?"inherit":"20px"},function(n){return"rtl"===n["data-rtl"]?"20px":"inherit"},Object(E.palette)("text",2),Object(E.palette)("primary",0),Object(E.palette)("color",7),Object(E.palette)("color",8),Object(E.palette)("color",9),Object(E.palette)("color",10),Object(E.palette)("color",11),Object(E.palette)("color",12),Object(E.palette)("color",5),Object(E.palette)("color",6)),I=Object(y.a)(k),W=h.a.login,N=h.a.signup,U=b.a.clearMenu,z=function(n){function e(n){var t;return Object(a.a)(this,e),(t=Object(o.a)(this,Object(i.a)(e).call(this,n))).state={redirectToReferrer:!1},t.handleSignup=function(){var n=t.props,e=n.signup,a=n.history,r={username:document.getElementById("inputUserName").value||"",email:document.getElementById("inputEmail").value,password:document.getElementById("inpuPassword").value||""};console.log(r),e({history:a,userInfo:r})},console.log("props",n),t}return Object(l.a)(e,n),Object(r.a)(e,[{key:"componentWillReceiveProps",value:function(n){this.props.isLoggedIn!==n.isLoggedIn&&!0===n.isLoggedIn&&this.setState({redirectToReferrer:!0})}},{key:"render",value:function(){return p.a.createElement(I,{className:"isoSignUpPage"},p.a.createElement("div",{className:"isoSignUpContentWrapper"},p.a.createElement("div",{className:"isoSignUpContent"},p.a.createElement("div",{className:"isoLogoWrapper"},p.a.createElement(s.a,{to:"/dashboard"},p.a.createElement(f.a,{id:"page.signUpTitle"}))),p.a.createElement("div",{className:"isoSignUpForm"},p.a.createElement("div",{className:"isoInputWrapper"},p.a.createElement(u.b,{id:"inputUserName",size:"large",placeholder:"Username"})),p.a.createElement("div",{className:"isoInputWrapper"},p.a.createElement(u.b,{id:"inputEmail",size:"large",placeholder:"Email"})),p.a.createElement("div",{className:"isoInputWrapper"},p.a.createElement(u.b,{id:"inpuPassword",size:"large",type:"password",placeholder:"Password"})),p.a.createElement("div",{className:"isoInputWrapper"},p.a.createElement(u.b,{size:"large",type:"password",placeholder:"Confirm Password"})),p.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:"50px"}},p.a.createElement(g.a,null,p.a.createElement(f.a,{id:"page.signUpTermsConditions"}))),p.a.createElement("div",{className:"isoInputWrapper"},p.a.createElement(m.a,{type:"primary",onClick:this.handleSignup},p.a.createElement(f.a,{id:"page.signUpButton"}))),p.a.createElement("div",{className:"isoInputWrapper isoCenterComponent isoHelperWrapper"},p.a.createElement(s.a,{to:"/signin"},p.a.createElement(f.a,{id:"page.signUpAlreadyAccount"})))))))}}]),e}(c.Component);e.default=Object(d.b)(function(n){return{isLoggedIn:null!==n.Auth.token}},{login:W,signup:N,clearMenu:U})(z)},657:function(n,e,t){"use strict";var a=t(745),r=t(23),o=t(19),i=t(3);function l(){var n=Object(r.a)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n    vertical-align: middle;\n\n    .ant-checkbox {\n      top: inherit;\n    }\n  }\n"]);return l=function(){return n},n}var c=function(n){return Object(o.b)(n)(l(),Object(i.palette)("text",1))}(a.a);a.a.Group,e.a=c},848:function(n,e,t){n.exports=t.p+"static/media/work.56bf9122.jpg"}}]);
//# sourceMappingURL=13.a89bac05.chunk.js.map