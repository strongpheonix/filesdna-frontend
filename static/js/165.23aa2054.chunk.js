(this.webpackJsonpfilesdna=this.webpackJsonpfilesdna||[]).push([[165],{1467:function(e,t,i){},1842:function(e,t,i){"use strict";i.r(t);var a=i(43),n=i(0),o=i.n(n),c=i(199),s=(i(1467),i(817));t.default=function(e){var t=e.visible,i=e.view,u=void 0===i?"":i,l=e.children,r=e.totalHeaderHeight,d=e.activeTool,h=void 0===d?"":d,f=e.activeSelection,m="MobileView"===u,v=Object(n.useState)(m),H=Object(a.a)(v,2),b=H[0],g=H[1],M=Object(s.a)().height-r,p="toolpanel";return p+=t?" visible":"",p+=b?" minimized":"",Object(n.useEffect)((function(){!t||m&&"select"===h||g(!1)}),[h]),Object(n.useEffect)((function(){g(!1)}),[f]),o.a.createElement("div",{className:p,style:{height:M,top:r}},o.a.createElement("div",{className:"minimizer",role:"button",tabIndex:-1,onKeyPress:function(){return g(!b)},onClick:function(){return g(!b)}},o.a.createElement("span",null)),o.a.createElement(c.a,{autoHeight:!0,autoHeightMax:M},o.a.createElement("div",{className:"holder sbar"},l)))}},199:function(e,t,i){"use strict";var a=i(142),n=i(0),o=i.n(n),c=i(220);t.a=function(e){var t=e.id,i=e.style,n=e.children,s=e.className,u=e.autoHide,l=void 0===u||u,r=e.autoHeight,d=e.autoHeightMin,h=void 0===d?0:d,f=e.autoHeightMax,m=void 0===f?200:f,v=e.sRef,H=Object(a.a)(e,["id","style","children","className","autoHide","autoHeight","autoHeightMin","autoHeightMax","sRef"]);return o.a.createElement(c.Scrollbars,Object.assign({ref:v,id:t,className:s,style:i,autoHide:l,autoHideTimeout:1e3,autoHideDuration:200,thumbMinSize:30,universal:!0,autoHeight:r,autoHeightMin:h,autoHeightMax:m},H),n)}}}]);