webpackJsonp([10],{gcpc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o,s=n("YbOa"),r=n.n(s),i=n("U5hO"),u=n.n(i),l=n("EE81"),p=n.n(l),c=n("Jmyu"),h=n.n(c),d=n("/00i"),g=n.n(d),v=n("9wvh"),f=n.n(v),m=n("NmwX"),w=(n.n(m),(a=Object(m.connect)(function(t){return console.log("state...",t),{login:t.login}},function(t){return{login:function(e){t({type:"index/login",payload:e})}}}))(o=function(t){function e(t){var n;return r()(this,e),n=h()(this,g()(e).call(this,t)),n.state={phone:"17718445587",password:"147852."},n}return p()(e,[{key:"submit",value:function(){return/\d{11}/.test(this.state.phone)?/\S{6,20}/.test(this.state.password)?void this.props.login({phone:this.state.phone,password:this.state.password}):void alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u5bc6\u7801"):void alert("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801")}},{key:"render",value:function(){var t=this;return console.log("this.props...",this.props),f.a.createElement(f.a.Fragment,null,f.a.createElement("input",{placeholder:"\u624b\u673a\u53f7",maxLength:"11",value:this.state.phone,onChange:function(e){return t.setState({phone:e.target.value})}}),f.a.createElement("input",{placeholder:"\u5bc6\u7801",type:"password",value:this.state.password,onChange:function(e){return t.setState({password:e.target.value})}}),f.a.createElement("button",{onClick:this.submit.bind(this)},"\u767b\u9646"))}}]),u()(e,t),e}(f.a.PureComponent))||o);e.default=w}});