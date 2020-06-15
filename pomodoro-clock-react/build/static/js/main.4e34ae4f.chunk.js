(this["webpackJsonppomodoro-clock-react"]=this["webpackJsonppomodoro-clock-react"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/BeepSound.049fe0d0.ogg"},22:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(13),s=n.n(r),a=n(5),c=n(11),l=function(e){return{type:"SETBREAKLENGTH",breakLength:e}},u=function(e){return{type:"SETSESSIONLENGTH",sessionLength:e}},h=function(e){return{type:"SETCLOCK",time:e}},p=Object(c.b)({innerWindowWidth:function(e,t){switch(e||(e=window.innerWidth),t.type){case"SETWINDOWINNERWIDTH":return t.windowInnerWidth;default:return e}},innerWindowHeight:function(e,t){switch(e||(e=window.innerHeight),t.type){case"SETWINDOWINNERHEIGHT":return t.windowInnerHeight;default:return e}},breakLength:function(e,t){switch(e||(e=5),t.type){case"SETBREAKLENGTH":return t.breakLength;default:return e}},sessionLength:function(e,t){switch(e||(e=25),t.type){case"SETSESSIONLENGTH":return t.sessionLength;default:return e}},timer:function(e,t){switch(e||(e="Session"),t.type){case"SETTIMER":return t.timer;default:return e}},clock:function(e,t){switch(e||(e="25:00"),t.type){case"SETCLOCK":return t.time;default:return e}},clockIsRunning:function(e,t){switch(e||(e=!1),t.type){case"SETCLOCKISRUNNING":return t.clockIsRunning;default:return e}},zeroTime:function(e,t){switch(e||(e=0),t.type){case"SETZEROTIME":return t.zeroTime;default:return e}}}),d=Object(c.c)(p),f=(n(31),n(3)),m=n(4),v=n(2),b=n(7),w=n(6),y=n(8),g="#0b3c5d",E="#328cc1",k="#d9b310",S="#1d2731",O=function(e){var t=e%60,n=Math.floor(e/60);return(n>9?n.toString():"0"+n.toString())+":"+(t>9?t.toString():"0"+t.toString())},j=n(10),M=n(9),A=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(e){var o;return Object(f.a)(this,n),(o=t.call(this,e)).handleDownArrowMouseEvent=o.handleDownArrowMouseEvent.bind(Object(v.a)(o)),o.handleUpArrowMouseEvent=o.handleUpArrowMouseEvent.bind(Object(v.a)(o)),o.incrementBreak=o.incrementBreak.bind(Object(v.a)(o)),o.decrementBreak=o.decrementBreak.bind(Object(v.a)(o)),o.state={downColor:S,upColor:S},o}return Object(m.a)(n,[{key:"incrementBreak",value:function(){if(this.props.breakLength<60){var e=this.props.breakLength+1;this.props.clockIsRunning?"Session"===this.props.timer&&this.props.breakLengthAction(e):(this.props.breakLengthAction(e),"Break"===this.props.timer&&this.props.clockAction(O(60*e)))}}},{key:"decrementBreak",value:function(){if(this.props.breakLength>1){var e=this.props.breakLength-1;this.props.clockIsRunning?"Session"===this.props.timer&&this.props.breakLengthAction(e):(this.props.breakLengthAction(e),"Break"===this.props.timer&&this.props.clockAction(O(60*e)))}}},{key:"handleDownArrowMouseEvent",value:function(e){"mousedown"===e.type||"touchstart"===e.type?this.setState({downColor:k}):"mouseup"!==e.type&&"touchend"!==e.type||this.setState({downColor:S})}},{key:"handleUpArrowMouseEvent",value:function(e){"mousedown"===e.type||"touchstart"===e.type?this.setState({upColor:k}):"mouseup"!==e.type&&"touchend"!==e.type||this.setState({upColor:S})}},{key:"render",value:function(){var e={color:this.state.downColor},t={color:this.state.upColor};return i.a.createElement("div",{style:{height:"50%",width:"75%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",marginRight:"25%",fontSize:32}},i.a.createElement("div",{id:"break-decrement",style:e,onClick:this.decrementBreak,onTouchStart:this.handleDownArrowMouseEvent,onTouchEnd:this.handleDownArrowMouseEvent,onMouseDown:this.handleDownArrowMouseEvent,onMouseUp:this.handleDownArrowMouseEvent},i.a.createElement(j.a,{icon:M.a})),i.a.createElement("p",{id:"break-length",style:{width:50}},this.props.breakLength),i.a.createElement("div",{id:"break-increment",style:t,onClick:this.incrementBreak,onTouchStart:this.handleUpArrowMouseEvent,onTouchEnd:this.handleUpArrowMouseEvent,onMouseDown:this.handleUpArrowMouseEvent,onMouseUp:this.handleUpArrowMouseEvent},i.a.createElement(j.a,{icon:M.b})))}}]),n}(i.a.Component),C=Object(a.b)((function(e){return Object(y.a)({},e)}),(function(e){return{breakLengthAction:function(t){return e(l(t))},clockAction:function(t){return e(h(t))}}}))(A),I=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.innerWindowWidth,t=this.props.innerWindowHeight,n={height:"50%",width:"90%",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"right",marginRight:"10%",color:k};return t>e&&e<380&&(n.fontSize=20),i.a.createElement("div",{style:{height:"100%",width:"50%"}},i.a.createElement("div",{id:"break-label",style:n},"Break Length"),i.a.createElement(C,null))}}]),n}(i.a.Component),T=Object(a.b)((function(e){return Object(y.a)({},e)}))(I),L=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(e){var o;return Object(f.a)(this,n),(o=t.call(this,e)).handleDownArrowMouseEvent=o.handleDownArrowMouseEvent.bind(Object(v.a)(o)),o.handleUpArrowMouseEvent=o.handleUpArrowMouseEvent.bind(Object(v.a)(o)),o.incrementSession=o.incrementSession.bind(Object(v.a)(o)),o.decrementSession=o.decrementSession.bind(Object(v.a)(o)),o.state={downColor:S,upColor:S},o}return Object(m.a)(n,[{key:"incrementSession",value:function(){if(this.props.sessionLength<60){var e=this.props.sessionLength+1;this.props.clockIsRunning?"Break"===this.props.timer&&this.props.sessionLengthAction(e):(this.props.sessionLengthAction(e),"Session"===this.props.timer&&this.props.clockAction(O(60*e)))}}},{key:"decrementSession",value:function(){if(this.props.sessionLength>1){var e=this.props.sessionLength-1;this.props.clockIsRunning?"Break"===this.props.timer&&this.props.sessionLengthAction(e):(this.props.sessionLengthAction(e),"Session"===this.props.timer&&this.props.clockAction(O(60*e)))}}},{key:"handleDownArrowMouseEvent",value:function(e){"mousedown"===e.type||"touchstart"===e.type?this.setState({downColor:k}):"mouseup"!==e.type&&"touchend"!==e.type||this.setState({downColor:S})}},{key:"handleUpArrowMouseEvent",value:function(e){"mousedown"===e.type||"touchstart"===e.type?this.setState({upColor:k}):"mouseup"!==e.type&&"touchend"!==e.type||this.setState({upColor:S})}},{key:"render",value:function(){var e={color:this.state.downColor},t={color:this.state.upColor};return i.a.createElement("div",{style:{height:"50%",width:"75%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",marginLeft:"25%",fontSize:32}},i.a.createElement("div",{id:"session-decrement",style:e,onClick:this.decrementSession,onTouchStart:this.handleDownArrowMouseEvent,onTouchEnd:this.handleDownArrowMouseEvent,onMouseDown:this.handleDownArrowMouseEvent,onMouseUp:this.handleDownArrowMouseEvent},i.a.createElement(j.a,{icon:M.a})),i.a.createElement("p",{id:"session-length",style:{width:50}},this.props.sessionLength),i.a.createElement("div",{id:"session-increment",style:t,onClick:this.incrementSession,onTouchStart:this.handleUpArrowMouseEvent,onTouchEnd:this.handleUpArrowMouseEvent,onMouseDown:this.handleUpArrowMouseEvent,onMouseUp:this.handleUpArrowMouseEvent},i.a.createElement(j.a,{icon:M.b})))}}]),n}(i.a.Component),R=Object(a.b)((function(e){return Object(y.a)({},e)}),(function(e){return{sessionLengthAction:function(t){return e(u(t))},clockAction:function(t){return e(h(t))}}}))(L),W=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.innerWindowWidth,t=this.props.innerWindowHeight,n={height:"50%",width:"90%",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"left",marginLeft:"10%",color:k};return t>e&&e<380&&(n.fontSize=20),i.a.createElement("div",{style:{height:"100%",width:"50%"}},i.a.createElement("div",{id:"session-label",style:n},"Session Length"),i.a.createElement(R,null))}}]),n}(i.a.Component),D=Object(a.b)((function(e){return Object(y.a)({},e)}))(W),x=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.innerWindowWidth,t={height:"50%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",fontSize:48};return this.props.innerWindowHeight>e&&e<385&&(t.fontSize=36),i.a.createElement("div",{style:{height:"40%",width:"100%"}},i.a.createElement("div",{style:t},"Pomodoro Clock"),i.a.createElement("div",{style:{height:"50%",width:"100%",display:"flex"}},i.a.createElement(T,null),i.a.createElement(D,null)))}}]),n}(i.a.Component),z=Object(a.b)((function(e){return Object(y.a)({},e)}))(x),N=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e={height:"30%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-end",color:k};return i.a.createElement("div",{style:{height:"40%",width:"100%"}},i.a.createElement("div",{id:"timer-label",style:e},this.props.timer),i.a.createElement("div",{id:"time-left",style:{height:"70%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",fontSize:96}},this.props.clock))}}]),n}(i.a.Component),U=Object(a.b)((function(e){return Object(y.a)({},e)}))(N),H=n(20),B=n.n(H),P=n(21),G=n.n(P),F=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(e){var o;return Object(f.a)(this,n),(o=t.call(this,e)).handleMouseEventPlay=o.handleMouseEventPlay.bind(Object(v.a)(o)),o.handleMouseEventPause=o.handleMouseEventPause.bind(Object(v.a)(o)),o.handleMouseEventReset=o.handleMouseEventReset.bind(Object(v.a)(o)),o.handlePlay=o.handlePlay.bind(Object(v.a)(o)),o.handleReset=o.handleReset.bind(Object(v.a)(o)),o.handleNoSleep=o.handleNoSleep.bind(Object(v.a)(o)),o.state={playColor:S,pauseColor:S,resetColor:S,sound:""},o}return Object(m.a)(n,[{key:"handleNoSleep",value:function(){if(navigator.userAgent.includes("Mobile")){var e=this,t=new B.a;t.enable();var n=setInterval((function(){e.props.clockIsRunning||(t.disable(),clearInterval(n))}),5e3)}}},{key:"handlePlay",value:function(){if(this.props.clockIsRunning)this.props.clockIsRunningAction(!1);else{this.props.clockIsRunningAction(!0),this.handleNoSleep();var e=new Date,t=Math.floor(e.getTime()/1e3),n=this.props.clock.split(":"),o=60*parseInt(n[0])+parseInt(n[1]);this.props.zeroTimeAction(t+o);var i=this,r=setInterval((function(){if(i.props.clockIsRunning){var e=new Date,t=Math.floor(e.getTime()/1e3);if(t<=i.props.zeroTime){var n=i.props.zeroTime-t,o=O(n);o!==i.props.clock&&i.props.clockAction(o)}else{var s=60*i.props.breakLength;"Session"===i.props.timer?i.props.timerAction("Break"):(i.props.timerAction("Session"),s=60*i.props.sessionLength),i.props.zeroTimeAction(t+s),i.props.clockAction(O(s))}}else clearInterval(r)}),1e3)}}},{key:"handleReset",value:function(){this.props.clockIsRunning&&this.props.clockIsRunningAction(!1),"Break"===this.props.timer&&this.props.timerAction("Session"),25!==this.props.sessionLength&&this.props.sessionLengthAction(25),5!==this.props.breakLength&&this.props.breakLengthAction(5),"25:00"!==this.props.clock&&this.props.clockAction("25:00"),this.state.sound.pause(),this.state.sound.currentTime=0}},{key:"componentDidUpdate",value:function(e){"00:00"===this.props.clock&&this.state.sound.play()}},{key:"handleMouseEventPlay",value:function(e){"mousedown"===e.type||"touchstart"===e.type?this.setState({playColor:k}):"mouseup"!==e.type&&"touchend"!==e.type||this.setState({playColor:S})}},{key:"handleMouseEventPause",value:function(e){"mousedown"===e.type||"touchstart"===e.type?this.setState({pauseColor:k}):"mouseup"!==e.type&&"touchend"!==e.type||this.setState({pauseColor:S})}},{key:"handleMouseEventReset",value:function(e){"mousedown"===e.type||"touchstart"===e.type?this.setState({resetColor:k}):"mouseup"!==e.type&&"touchend"!==e.type||this.setState({resetColor:S})}},{key:"componentDidMount",value:function(){this.setState({sound:document.getElementById("beep")})}},{key:"render",value:function(){var e=this,t={color:this.state.playColor},n={color:this.state.pauseColor,width:150},o={color:this.state.resetColor};return i.a.createElement("div",{style:{height:"20%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:48}},i.a.createElement("div",{id:"start_stop",style:t,onClick:this.handlePlay,onMouseDown:this.handleMouseEventPlay,onMouseUp:this.handleMouseEventPlay,onTouchStart:this.handleMouseEventPlay,onTouchEnd:this.handleMouseEventPlay},i.a.createElement(j.a,{icon:M.e})),i.a.createElement(j.a,{style:n,onMouseDown:this.handleMouseEventPause,onMouseUp:this.handleMouseEventPause,onTouchStart:this.handleMouseEventPause,onTouchEnd:this.handleMouseEventPause,onClick:function(){e.props.clockIsRunningAction(!1)},icon:M.d}),i.a.createElement("div",{id:"reset",style:o,onClick:this.handleReset,onMouseDown:this.handleMouseEventReset,onMouseUp:this.handleMouseEventReset,onTouchStart:this.handleMouseEventReset,onTouchEnd:this.handleMouseEventReset},i.a.createElement(j.a,{icon:M.f})),i.a.createElement("audio",{id:"beep",preload:"auto",src:G.a,type:"audio/ogg"}))}}]),n}(i.a.Component),K=Object(a.b)((function(e){return Object(y.a)({},e)}),(function(e){return{clockIsRunningAction:function(t){return e(function(e){return{type:"SETCLOCKISRUNNING",clockIsRunning:e}}(t))},zeroTimeAction:function(t){return e(function(e){return{type:"SETZEROTIME",zeroTime:e}}(t))},clockAction:function(t){return e(h(t))},timerAction:function(t){return e(function(e){return{type:"SETTIMER",timer:e}}(t))},sessionLengthAction:function(t){return e(u(t))},breakLengthAction:function(t){return e(l(t))}}}))(F),_=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.innerWindowWidth,t=this.props.innerWindowHeight,n=Math.round(.8*e),o=Math.round(.8*t),r={margin:"auto",border:"3px solid",borderColor:S,zIndex:"1",backgroundColor:E,borderRadius:10,height:o<500?o:500,width:n<800?n:800,display:"flex",flexDirection:"column",justifyContent:"center",fontSize:32,userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"},s={height:"100%",width:"100%"};return e>t&&t<450?(r.height="96vh",r.width="75vw",r.margin="1vh auto 3vh auto",r.fontSize=24):t>e&&(r.margin=t>679?"auto":"99px 0 80px 0",r.height=Math.round(.75*t),r.maxHeight=500,s.height=e>r.height?r.height:e,s.minHeight="340px",s.maxHeight=500,r.width=e-6,r.maxWidth=800,r.fontSize=24),i.a.createElement("div",{id:"pomodoroClock",style:r},i.a.createElement("div",{id:"clockContainer",style:s},i.a.createElement(z,null),i.a.createElement(U,null),i.a.createElement(K,null)))}}]),n}(i.a.Component),J=Object(a.b)((function(e){return Object(y.a)({},e)}))(_),Z=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(e){var o;return Object(f.a)(this,n),(o=t.call(this,e)).handleClick=o.handleClick.bind(Object(v.a)(o)),o}return Object(m.a)(n,[{key:"handleClick",value:function(e){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(j.a,{icon:M.c,style:{position:"fixed",fontSize:32,bottom:10,right:10},onClick:this.handleClick}))}}]),n}(i.a.Component),q=function(e){Object(b.a)(n,e);var t=Object(w.a)(n);function n(e){var o;return Object(f.a)(this,n),(o=t.call(this,e)).handleResize=o.handleResize.bind(Object(v.a)(o)),o}return Object(m.a)(n,[{key:"handleResize",value:function(){this.props.innerWindowWidthAction(window.innerWidth),this.props.innerWindowHeightAction(window.innerHeight)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this.props.innerWindowHeight,t=this.props.innerWindowWidth,n={backgroundColor:g,border:"none",width:149,height:0,position:"absolute",right:0},o={position:"absolute",right:0,height:149,width:149},r={textAlign:"center",backgroundColor:g,height:"100vh",width:"100vw",display:"flex",flexDirection:"column",color:S,overFlow:"hidden",fontFamily:"Ubuntu, sans-serif",fontSize:48};return(t>e&&e<450||e>t)&&(n.width=99,o.width=99,o.height=99),i.a.createElement("div",{style:r},i.a.createElement("a",{href:"https://github.com/TrentSPalmer/fcc-challenges/tree/gh-pages/pomodoro-clock-react",style:n,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:"https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149",className:"size-full",style:o,alt:"Fork me on GitHub","data-recalc-dims":"1"})),i.a.createElement(J,null),navigator.userAgent.includes("Mobile")&&i.a.createElement(Z,null))}}]),n}(i.a.Component),$=Object(a.b)((function(e){return Object(y.a)({},e)}),(function(e){return{innerWindowWidthAction:function(t){return e(function(e){return{type:"SETWINDOWINNERWIDTH",windowInnerWidth:e}}(t))},innerWindowHeightAction:function(t){return e(function(e){return{type:"SETWINDOWINNERHEIGHT",windowInnerHeight:e}}(t))}}}))(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(a.a,{store:d},i.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.4e34ae4f.chunk.js.map