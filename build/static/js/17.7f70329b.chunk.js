(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1066:function(e,n,t){"use strict";t.r(n);var o=t(21),s=t(22),r=t(24),a=t(25),c=t(26),i=t(1),u=t.n(i),d=t(39),m=t(81),p=t(752),v=t.n(p),l=t(193).a.createConversation,f=function(e){function n(e){var t;Object(o.a)(this,n),(t=Object(r.a)(this,Object(a.a)(n).call(this,e)))._onSend=function(e){t.socket.emit("message",{text:"asdf",senderId:t.props.username,receiverId:t.props.currentconversation.userTwoId,conversationId:t.props.currentconversation._id,createdAt:new Date})},t._onCreatConversation=function(){t.props.createConversation({friendname:"master",username:t.props.username})};return t.socket=v()("http://".concat("localhost",":").concat("3000")),t.socket.emit("init",{senderId:t.props.username}),t.socket.on("message",function(e){console.log("onMessage",e)}),t}return Object(c.a)(n,e),Object(s.a)(n,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.socket.emit("disconnect",{senderId:this.props.id})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(m.a,{onClick:this._onCreatConversation},"conversation"),u.a.createElement(m.a,{onClick:this._onSend},"message"))}}]),n}(u.a.Component);n.default=Object(d.b)(function(e){return{username:e.Auth.username,messages:e.messages[e.conversations.currentConversationId],friends:e.friends.friends,conversations:e.conversations,currentconversation:e.conversations.conversations[0]}},{createConversation:l})(f)},761:function(e,n){}}]);
//# sourceMappingURL=17.7f70329b.chunk.js.map