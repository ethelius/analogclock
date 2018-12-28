(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(10),c=n.n(a),i=(n(24),n(9)),s=n(2),l=n(3),u=n(7),d=n(6),b=n(8),f=n(1),p=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={options:n.props.defaultOptions},n.setClockSize=n.setClockSize.bind(Object(f.a)(Object(f.a)(n))),n.setBorderReq=n.setBorderReq.bind(Object(f.a)(Object(f.a)(n))),n.setBorderColor=n.setBorderColor.bind(Object(f.a)(Object(f.a)(n))),n.setBaseColor=n.setBaseColor.bind(Object(f.a)(Object(f.a)(n))),n.buildClock=n.buildClock.bind(Object(f.a)(Object(f.a)(n))),n.randomClock=n.randomClock.bind(Object(f.a)(Object(f.a)(n))),n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"setClockSize",value:function(e){e.preventDefault();var t=e.target.value+"px";this.setState({options:Object(i.a)({},this.state.options,{width:t})})}},{key:"setBorderReq",value:function(e){var t="yes"===e.target.value;this.setState({options:Object(i.a)({},this.state.options,{border:t})})}},{key:"setBorderColor",value:function(e){e.preventDefault();var t="#"+e.target.value;this.setState({options:Object(i.a)({},this.state.options,{borderColor:t})})}},{key:"setBaseColor",value:function(e){e.preventDefault();var t="#"+e.target.value;this.setState({options:Object(i.a)({},this.state.options,{baseColor:t})})}},{key:"buildClock",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.customizeClock(this.state.options)}},{key:"randomClock",value:function(e){var t=this;e.preventDefault(),e.stopPropagation();var n=this.getRandomColor(),r=this.getRandomColor();this.setState({options:Object(i.a)({},this.state.options,{borderColor:r,baseColor:n})},function(){return t.buildClock(e)})}},{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){return o.a.createElement("form",{className:"form"},o.a.createElement("h4",null,o.a.createElement("i",null,"Clock Options")),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"clock-size"},"Clock size (px)"),o.a.createElement("input",{type:"range",min:"200",max:"500",class:"form-control-range",id:"clock-size",onChange:this.setClockSize})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"border-req-radios"},"Border Required?"),o.a.createElement("div",{class:"form-check",name:"border-req-radios"},o.a.createElement("input",{class:"form-check-input",type:"radio",name:"border-req-yes",id:"border-req-yes",value:"yes",checked:!0===this.state.options.border,onClick:this.setBorderReq}),o.a.createElement("label",{class:"form-check-label",for:"border-req-yes"},"Yes")),o.a.createElement("div",{class:"form-check"},o.a.createElement("input",{class:"form-check-input",type:"radio",name:"bored-req-no",id:"bored-req-no",value:"no",checked:!1===this.state.options.border,onClick:this.setBorderReq}),o.a.createElement("label",{class:"form-check-label",for:"bored-req-no"},"No"))),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"clock-border-color"},"Clock border color"),o.a.createElement("input",{type:"input",class:"form-control",id:"clock-border-color",maxLength:"6",placeholder:"2e2e2e",onChange:this.setBorderColor})),o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"clock-base-color"},"Clock base color"),o.a.createElement("input",{type:"input",class:"form-control",id:"clock-base-color",maxLength:"6",placeholder:"17a2b8",onChange:this.setBaseColor})),o.a.createElement("button",{type:"submit",class:"btn btn-primary",onClick:this.buildClock},"Build Clock!"),"\xa0",o.a.createElement("button",{type:"submit",class:"btn btn-warning",onClick:this.randomClock},"Surprise Me!"))}}]),t}(r.Component),m=n(4),h=n(5);function v(){var e=Object(m.a)(["\n    from {\n        transform: rotate(","deg)}\n    }\n    to {\n        transform: rotate(","deg)}\n    }"]);return v=function(){return e},e}function g(){var e=Object(m.a)(["\n                    width:35%;\n                    transform-origin: 15%;\n                    transform: rotate(","deg);\n            "]);return g=function(){return e},e}function k(){var e=Object(m.a)(["\n                    width:45%;\n                    transform-origin: 12%;\n                    transform: rotate(","deg);\n            "]);return k=function(){return e},e}function O(){var e=Object(m.a)(["\n                    width:60%;\n                    transform-origin: 17%;\n                    transform: rotate(","deg);\n                    transition: ",";\n                    // animation: "," 60s linear 0s infinite;\n            "]);return O=function(){return e},e}function C(){var e=Object(m.a)(["\n            position: absolute;\n            top: 50%;\n            left: ",";\n            outline: ",";\n\n            ","\n            ","\n            ","\n        "]);return C=function(){return e},e}function j(){var e=Object(m.a)(["\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            width: 12px;\n            height: 12px;\n            border: 2px solid #fff;\n            background-color: #459cff;\n            border-radius: 100%;\n            margin-left: -6px;\n            margin-top: -9px;\n            z-index: 100;\n        "]);return j=function(){return e},e}function E(){var e=Object(m.a)(["\n            position: relative;\n            height: 100%;\n            width: 100%;\n            background-color: ",";\n            border-radius: 100%;\n        "]);return E=function(){return e},e}function y(){var e=Object(m.a)(["\n            position: relative;\n            box-sizing: border-box;\n            height: 100%;\n            width: 100%;\n            background-color: ",";\n            padding: ",";\n            border-radius: 100%;\n        "]);return y=function(){return e},e}function w(){var e=Object(m.a)(["\n        \theight: ",";\n            width: ",";\n        "]);return w=function(){return e},e}var x=h.b.div(w(),function(e){return e.width||"400px"},function(e){return e.width||"400px"}),S=h.b.div(y(),function(e){return e.borderColor?e.borderColor:"transparent"},function(e){return e.border?"5% 5% 5% 5%":"0"}),B=h.b.div(E(),function(e){return e.baseColor?e.baseColor:"black"}),z=h.b.div(j()),q=h.b.div(C(),function(e){return"second"===e.type?"40%":"45%"},function(e){return"second"===e.type?"2px solid #d81c7a":"2px solid #fff"},function(e){return"second"===e.type&&Object(h.a)(O(),function(e){return e.handAngle},function(e){return e.handAngle>270&&"transform 250ms ease-in-out"},function(e){return e.secondStartAngle&&A(e.secondStartAngle)})},function(e){return"minute"===e.type&&Object(h.a)(k(),function(e){return e.handAngle})},function(e){return"hour"===e.type&&Object(h.a)(g(),function(e){return e.handAngle})}),A=function(e){return Object(h.c)(v(),e,e+360)},D=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"getHandAngle",value:function(e){var t=0;switch(e.type){case"second":t=270+6*e.seconds;break;case"minute":t=270+6*e.minutes;break;case"hour":t=270+30*e.hours;break;default:t=0}return t}}]),e}(),R=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){if("second"===this.props.type){var e=270+6*this.props.seconds;this.state.secondStartAngle||this.setState({secondStartAngle:e})}}},{key:"render",value:function(){return o.a.createElement(q,Object.assign({type:this.props.type,handAngle:D.getHandAngle(this.props)},this.state))}}]),t}(r.Component),H=function(e){function t(e){var n;Object(s.a)(this,t),n=Object(u.a)(this,Object(d.a)(t).call(this,e));var r=new Date;return n.state={seconds:r.getSeconds(),minutes:r.getMinutes(),hours:r.getHours()>12?r.getHours()-12:r.getHours()},n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){var t=new Date;e.setState({seconds:t.getSeconds(),minutes:t.getMinutes(),hours:t.getHours()>12?t.getHours()-12:t.getHours()})},1e3)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.border,r=e.borderColor,a=e.baseColor;return o.a.createElement(x,{width:t},o.a.createElement(S,{border:n,borderColor:r},o.a.createElement(B,{baseColor:a},o.a.createElement(z,null),o.a.createElement(R,Object.assign({type:"second"},this.state)),o.a.createElement(R,Object.assign({type:"minute"},this.state)),o.a.createElement(R,Object.assign({type:"hour"},this.state)))))}}]),t}(r.Component),M=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={options:{width:"300px",border:!0,borderColor:"#2e2e2e",baseColor:"#17a2b8"}},n.customizeClock=n.customizeClock.bind(Object(f.a)(Object(f.a)(n))),n}return Object(b.a)(t,e),Object(l.a)(t,[{key:"customizeClock",value:function(e){console.log(e),this.setState({options:Object(i.a)({},e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-4 border-right"},o.a.createElement(p,{defaultOptions:this.state.options,customizeClock:this.customizeClock})),o.a.createElement("div",{className:"col border-right"},o.a.createElement("h4",null,o.a.createElement("i",null,"Options")),o.a.createElement("textarea",{class:"form-control",id:"selected-options",rows:"7",readOnly:!0,value:JSON.stringify(this.state.options,null,2)})),o.a.createElement("div",{className:"col"},o.a.createElement("h4",null,o.a.createElement("i",null,"Preview")),o.a.createElement(H,this.state.options)))}}]),t}(r.Component);c.a.render(o.a.createElement(M,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.82fb3182.chunk.js.map