(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),u=n.n(c),o=n(4),s=n(3),i="INCREMENT",l="DECREMENT",p="RESET";var m=function(e,t){switch(t.type){case i:return{count:e.count+t.amount};case l:return{count:e.count-t.amount};case p:return E;default:return e}},E={count:0},f=Object(s.b)(m,E),h=n(12),d=n(13),b=n(15),y=n(14),C=n(16),v=function(e){function t(){var e,n;Object(h.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(b.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(a)))).state={step:3},n.increment=function(){n.props.increment(n.state.step)},n.decrement=function(){n.props.decrement(n.state.step)},n.handleChange=function(e){n.setState({step:+e.target.value})},n}return Object(C.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.count,n=e.reset;return a.a.createElement("div",null,a.a.createElement("button",{onClick:this.decrement},"-"),a.a.createElement("span",null,t),a.a.createElement("button",{onClick:this.increment},"+"),a.a.createElement("button",{onClick:n},"reset"),a.a.createElement("span",null,"Step: "),a.a.createElement("input",{type:"text",defaultValue:this.state.step,onChange:this.handleChange}))}}]),t}(r.Component),w=Object(o.b)(function(e){return e},{increment:function(e){return{type:i,amount:e}},decrement:function(e){return{type:l,amount:e}},reset:function(){return{type:p}}})(v);u.a.render(a.a.createElement(o.a,{store:f},a.a.createElement(w,null)),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.a92e2120.chunk.js.map