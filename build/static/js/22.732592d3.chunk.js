(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1068:function(n,e,t){"use strict";t.r(e);var a=t(21),r=t(22),c=t(24),o=t(25),i=t(26),s=t(1),u=t.n(s),l=t(39),d=t(595),p=t(658),f=t(202),h=t(156),b=t(97),g=function(n){function e(){var n,t;Object(a.a)(this,e);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(t=Object(c.a)(this,(n=Object(o.a)(e)).call.apply(n,[this].concat(i)))).state={loading:!1},t.checkDemo=function(){t.setState({loading:!0}),b.a.checkDemoPage(t.props.token).then(function(n){n.error?Object(h.a)("error",n.error):Object(h.a)("success","status: ".concat(n.status),n.message),t.setState({loading:!1})})},t}return Object(i.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){return u.a.createElement(d.a,{style:{height:"100vh"}},u.a.createElement(p.a,null,u.a.createElement(f.a,{loading:this.state.loading,onClick:this.checkDemo},"Check Auth Status")))}}]),e}(s.Component);e.default=Object(l.b)(function(n){return{token:n.Auth.token}},{})(g)},595:function(n,e,t){"use strict";var a=t(1),r=t.n(a),c=t(23);function o(){var n=Object(c.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return o=function(){return n},n}var i=t(19).b.div(o());e.a=function(n){return r.a.createElement(i,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},658:function(n,e,t){"use strict";var a=t(23),r=t(19),c=t(3);function o(){var n=Object(a.a)(["\n  width: 100%;\n  padding: 35px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  height: 100%;\n"]);return o=function(){return n},n}var i=r.b.div(o(),Object(c.palette)("border",0));e.a=i}}]);
//# sourceMappingURL=22.732592d3.chunk.js.map