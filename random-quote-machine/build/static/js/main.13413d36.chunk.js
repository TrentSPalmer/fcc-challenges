(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{21:function(e,t,n){e.exports=n(39)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(10),c=n.n(a),u=n(2),i=n(8),l=n(18),s=function(){return function(e){e({type:"REQUESTING_QUOTE"}),fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(t){e({type:"RECEIVED_QUOTE",newQuote:t.quotes[Math.floor(Math.random()*t.quotes.length)]})}))}},p=Object(i.c)({colorCount:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCCOLORCOUNT":return t.count;default:return e}},newQuote:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{fetching:!1,quote:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUESTING_QUOTE":return{fetching:!0,quote:""};case"RECEIVED_QUOTE":return{fetching:!1,quote:t.newQuote};default:return e}}}),b=Object(i.d)(p,Object(i.a)(l.a)),h=(n(30),n(3)),d=n(4),m=n(5),f=n(6),O=n(7),v=(n(31),n(32),n(11)),j=(n(33),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(e){var o;return Object(h.a)(this,n),(o=t.call(this,e)).handleClick=o.handleClick.bind(Object(v.a)(o)),o}return Object(d.a)(n,[{key:"handleClick",value:function(){this.props.colorCounterAction(this.props.colorCount>1?0:this.props.colorCount+1),this.props.quoteFetch()}},{key:"render",value:function(){var e="NewQuote "+["red-background","blue-background","yellow-background"][this.props.colorCount];return r.a.createElement("button",{onClick:this.handleClick,className:e,id:"new-quote"},"Click Me!")}}]),n}(r.a.Component)),E=Object(u.b)((function(e){return Object(O.a)({},e)}),(function(e){return{colorCounterAction:function(t){return e(function(e){return{type:"INCCOLORCOUNT",count:e}}(t))},quoteFetch:function(){return e(s())}}}))(j),w=n(19),C=n(20),k=(n(37),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=["red-background","blue-background","yellow-background"],t="TweetQuote "+e[this.props.colorCount],n="https://twitter.com/intent/tweet?text=";return"object"===typeof this.props.newQuote.quote&&(n+=encodeURIComponent(this.props.newQuote.quote.quote+"\n--"+this.props.newQuote.quote.author)),r.a.createElement("div",{className:t},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",id:"tweet-quote"},r.a.createElement(w.a,{icon:C.a,className:e[this.props.colorCount]})))}}]),n}(r.a.Component)),q=Object(u.b)((function(e){return Object(O.a)({},e)}))(k),g=(n(38),function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){""===this.props.newQuote.quote&&this.props.quoteFetch()}},{key:"render",value:function(){var e="",t="";"object"===typeof this.props.newQuote.quote&&(e=this.props.newQuote.quote.quote,t=this.props.newQuote.quote.author);var n=["red","blue","yellow"],o="text "+n[this.props.colorCount],a="author "+n[this.props.colorCount];return r.a.createElement("div",null,r.a.createElement("p",{className:o,id:"text"},e),r.a.createElement("p",{className:a,id:"author"},"--",t))}}]),n}(r.a.Component)),y=Object(u.b)((function(e){return Object(O.a)({},e)}),(function(e){return{quoteFetch:function(){return e(s())}}}))(g),N=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e="QuoteBox "+["red-complimentary-background","blue-complimentary-background","yellow-complimentary-background"][this.props.colorCount];return r.a.createElement("div",{className:e,id:"quote-box"},r.a.createElement("div",{className:"quote-box-top"}),r.a.createElement("div",{className:"quote-box-middle"},r.a.createElement(y,null)),r.a.createElement("div",{className:"quote-box-bottom"},r.a.createElement("div",{className:"quote-box-bottom-left"},r.a.createElement(q,null)),r.a.createElement("div",{className:"quote-box-bottom-right"},r.a.createElement(E,null))),r.a.createElement("div",{className:"quote-box-underneath"}))}}]),n}(r.a.Component),Q=Object(u.b)((function(e){return Object(O.a)({},e)}))(N),x=function(e){Object(f.a)(n,e);var t=Object(m.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e="App-header "+["red-background","blue-background","yellow-background"][this.props.colorCount];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:e},r.a.createElement(Q,null)))}}]),n}(r.a.Component),T=Object(u.b)((function(e){return Object(O.a)({},e)}))(x);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(u.a,{store:b},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.13413d36.chunk.js.map