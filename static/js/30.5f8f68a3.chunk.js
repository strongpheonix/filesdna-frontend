(this.webpackJsonpfilesdna=this.webpackJsonpfilesdna||[]).push([[30],{704:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));n(95);var i=n(96),r=n(43),o=n(0),c=n.n(o),l=0,a=null;function u(e){var t=e.url,n=void 0===t?"":t,u=e.type,s=void 0===u?"":u,d=e.wHeight,f=Object(o.useState)(!0),v=Object(r.a)(f,2),h=v[0],m=v[1],b=Object(o.useRef)(),g=Object(o.useState)(n),w=Object(r.a)(g,2),j=w[0],p=w[1],O=function(){clearInterval(a),l=0,m(!1)};function k(){try{var e,t,i=(null===b||void 0===b?void 0:b.current.contentDocument)||(null===b||void 0===b?void 0:b.current.contentWindow.document);0===(null===i||void 0===i||null===(e=i.body)||void 0===e||null===(t=e.children)||void 0===t?void 0:t.length)?(l+=1,p(""),p(n)):O(),l>6&&O()}catch(r){console.log("\ud83d\ude80 ~ file: IFrame.js ~ line 37 ~ embedPDFCheck ~ err",r),O()}}return Object(o.useEffect)((function(){return a=setInterval(k,3500),function(){O()}}),[]),Object(o.useMemo)((function(){return c.a.createElement(i.a,{spinning:h||!1},c.a.createElement("iframe",{ref:b,title:"File Preview",src:j,width:"100%",height:d,sandbox:"allow-forms allow-scripts allow-same-origin",frameBorder:"0",marginHeight:"0",marginWidth:"0"}))}),[j,s,h])}}}]);