(this.webpackJsonpfilesdna=this.webpackJsonpfilesdna||[]).push([[151,173],{1041:function(e,n,t){"use strict";t.r(n);t(326);var o=t(340),i=t(0),r=t.n(i),a=t(93),c=t(45),s=t(1129),u=t(1815),l=(t(915),t(250));n.default=function(e){var n=e.fileInfo,t=void 0===n?{}:n,i=e.setActiveTool,f=void 0===i?function(){}:i,p=e.children,d=e.hRef,m=e.leaveConfirm,h=void 0===m?function(){}:m,g=e.signDoc,v="MobileView"===Object(a.useSelector)((function(e){return e.App.view})),b=t.integrity,y=l.b.find((function(e){return e.name===t.status})),C=y?y.color:"";return r.a.createElement("header",{ref:d},r.a.createElement("div",{className:"logoMain"},r.a.createElement("span",{className:"pointer",role:"button",tabIndex:-1,onKeyPress:h,onClick:h},r.a.createElement("img",{src:g&&!v?"/logo.png":"/images/icons/android-chrome-192x192.png",alt:"Logo",className:"logo ".concat(g&&!v?"large":"small")})),!g&&!v&&r.a.createElement("div",{className:"fileInfo"},r.a.createElement("div",{className:"pointer",role:"button",tabIndex:-1,onKeyPress:function(){},onClick:function(){return f("file-info")}},r.a.createElement("h1",null,t.name)),r.a.createElement("h3",null,t.status&&r.a.createElement(o.a,{color:C||"#aaa",text:r.a.createElement(c.a,{id:t.status.toLowerCase()})}),r.a.createElement("span",{className:"spacer"}," | "),r.a.createElement("span",{className:"integrity ".concat(b?"passed":"failed")},b?r.a.createElement(s.a,{twoToneColor:"#52c41a"}):r.a.createElement(u.a,{twoToneColor:"#ef2222"}),r.a.createElement(c.a,{id:"documents.".concat(b?"integrityPassed":"integrityFailed")}))))),r.a.createElement("div",{className:"menu"},p))}},1882:function(e,n,t){"use strict";t.r(n);t(95);var o=t(96),i=(t(78),t(63)),r=t(29),a=t(43),c=(t(94),t(92)),s=t(0),u=t.n(s),l=t(457),f=t(1041),p=t(45),d=t(53),m=t(209),h=t(5),g=t(4),v=t(50);function b(){var e=Object(h.a)(["\n  & header {\n    background: #fff;\n    height: 55px;\n\n    & .logoMain {\n      & .logo {\n        max-width: 125px;\n      }\n    }\n  }\n  & .tox-tinymce {\n    padding-bottom: 55px;\n    z-index: 1 !important;\n    position: relative !important;\n  }\n"]);return b=function(){return e},e}var y=Object(v.a)(g.d.div(b())),C=c.a.confirm,O=function(e){e.preventDefault(),e.returnValue=""};n.default=function(e){var n=e.docData,t=void 0===n?{}:n,c=e.goBack,h=void 0===c?function(){}:c,g=e.onSave,v=void 0===g?function(){}:g,b=e.isOwner,E=!t.write,w=Object(s.useState)({loading:!0}),j=Object(a.a)(w,2),S=j[0],k=j[1],x=Object(s.useState)(""),R=Object(a.a)(x,2),N=R[0],I=R[1];return Object(s.useEffect)((function(){setTimeout((function(){k((function(e){return Object(r.a)(Object(r.a)({},e),{},{loading:!1})}))}),1500)}),[]),Object(s.useEffect)((function(){Object(d.isString)(null===t||void 0===t?void 0:t.data)&&I(null===t||void 0===t?void 0:t.data)}),[null===t||void 0===t?void 0:t.data]),Object(s.useEffect)((function(){return window.addEventListener("beforeunload",O),function(){window.removeEventListener("beforeunload",O)}}),[]),u.a.createElement(y,null,u.a.createElement(o.a,{spinning:S.loading||!1},u.a.createElement(f.default,{signDoc:!0},u.a.createElement(u.a.Fragment,null,u.a.createElement(i.a,{onClick:function(){return E?h():void C({title:Object(m.a)("common.areuSure"),content:Object(m.a)("common.changesNotSave"),okText:Object(m.a)("common.leave"),cancelText:Object(m.a)("common.no"),onOk:function(){return h()}})},className:"cancelButton",id:"cancel-doc",type:"text"},u.a.createElement(p.a,{id:"common.cancel"})),u.a.createElement(i.a,{disabled:E,onClick:function(){return E?null:v(N,b?"export":"save")},loading:(null===t||void 0===t?void 0:t.saving)||!1,className:"doneBtn",type:"primary",id:"save-file"},u.a.createElement(p.a,{id:"common.".concat(b?"finish":"save")})))),u.a.createElement(l.a,{value:N,disabled:E,onChange:function(e){I(e)},extraProps:{setup:function(e){e.on("init",(function(){e.execCommand("mceFullScreen")}))}}})))}},457:function(e,n,t){"use strict";var o=t(29),i=t(46),r=t(52),a=t(55),c=t(54),s=t(0),u=t.n(s),l=t(214),f=t(13),p=function(){return(p=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},d={onActivate:f.func,onAddUndo:f.func,onBeforeAddUndo:f.func,onBeforeExecCommand:f.func,onBeforeGetContent:f.func,onBeforeRenderUI:f.func,onBeforeSetContent:f.func,onBeforePaste:f.func,onBlur:f.func,onChange:f.func,onClearUndos:f.func,onClick:f.func,onContextMenu:f.func,onCopy:f.func,onCut:f.func,onDblclick:f.func,onDeactivate:f.func,onDirty:f.func,onDrag:f.func,onDragDrop:f.func,onDragEnd:f.func,onDragGesture:f.func,onDragOver:f.func,onDrop:f.func,onExecCommand:f.func,onFocus:f.func,onFocusIn:f.func,onFocusOut:f.func,onGetContent:f.func,onHide:f.func,onInit:f.func,onKeyDown:f.func,onKeyPress:f.func,onKeyUp:f.func,onLoadContent:f.func,onMouseDown:f.func,onMouseEnter:f.func,onMouseLeave:f.func,onMouseMove:f.func,onMouseOut:f.func,onMouseOver:f.func,onMouseUp:f.func,onNodeChange:f.func,onObjectResizeStart:f.func,onObjectResized:f.func,onObjectSelected:f.func,onPaste:f.func,onPostProcess:f.func,onPostRender:f.func,onPreProcess:f.func,onProgressState:f.func,onRedo:f.func,onRemove:f.func,onReset:f.func,onSaveContent:f.func,onSelectionChange:f.func,onSetAttrib:f.func,onSetContent:f.func,onShow:f.func,onSubmit:f.func,onUndo:f.func,onVisualAid:f.func},m=p({apiKey:f.string,id:f.string,inline:f.bool,init:f.object,initialValue:f.string,onEditorChange:f.func,outputFormat:f.oneOf(["html","text"]),value:f.string,tagName:f.string,cloudChannel:f.string,plugins:f.oneOfType([f.string,f.array]),toolbar:f.oneOfType([f.string,f.array]),disabled:f.bool,textareaName:f.string,tinymceScriptSrc:f.string},d),h=function(e){return"function"===typeof e},g=function(e){return e in d},v=function(e,n,t){(function(e){return Object.keys(e).filter(g).filter((function(n){return h(e[n])})).map((function(n){return{handler:e[n],eventName:n.substring(2)}}))})(n).forEach((function(n){var o=t[n.eventName];h(o)&&e.off(n.eventName,o);var i=function(t){return n.handler(t,e)};t[n.eventName]=i,e.on(n.eventName,i)}))},b=0,y=function(e){var n=(new Date).getTime();return e+"_"+Math.floor(1e9*Math.random())+ ++b+String(n)},C=function(e){return"undefined"===typeof e||""===e?[]:Array.isArray(e)?e:e.split(" ")},O=function(){return{listeners:[],scriptId:y("tiny-script"),scriptLoaded:!1}},E=function(){var e=O();return{load:function(n,t,o){e.scriptLoaded?o():(e.listeners.push(o),n.getElementById(e.scriptId)||function(e,n,t,o){var i=n.createElement("script");i.referrerPolicy="origin",i.type="application/javascript",i.id=e,i.src=t;i.addEventListener("load",(function e(){i.removeEventListener("load",e),o()})),n.head&&n.head.appendChild(i)}(e.scriptId,n,t,(function(){e.listeners.forEach((function(e){return e()})),e.scriptLoaded=!0})))},reinitialize:function(){e=O()}}}(),w=t(496),j=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),S=function(){return(S=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)},k=function(e){function n(n){var t=e.call(this,n)||this;return t.handleEditorChange=function(e){var n=t.editor;if(n){var o=n.getContent({format:t.props.outputFormat});o!==t.currentContent&&(t.currentContent=o,h(t.props.onEditorChange)&&t.props.onEditorChange(t.currentContent,n))}},t.handleInit=function(e){var n=t.editor;n&&(n.setContent(t.getInitialValue()),h(t.props.onEditorChange)&&n.on("change keyup setcontent",t.handleEditorChange),h(t.props.onInit)&&t.props.onInit(e,n),v(n,t.props,t.boundHandlers))},t.initialise=function(){var e,n,o,i=S(S({},t.props.init),{target:t.elementRef.current,readonly:t.props.disabled,inline:t.inline,plugins:(e=t.props.init&&t.props.init.plugins,n=t.props.plugins,C(e).concat(C(n))),toolbar:t.props.toolbar||t.props.init&&t.props.init.toolbar,setup:function(e){t.editor=e,e.on("init",t.handleInit),t.props.init&&h(t.props.init.setup)&&t.props.init.setup(e)}});null!==(o=t.elementRef.current)&&"textarea"===o.tagName.toLowerCase()&&(t.elementRef.current.style.visibility=""),Object(w.a)().init(i)},t.id=t.props.id||y("tiny-react"),t.elementRef=s.createRef(),t.inline=t.props.inline?t.props.inline:t.props.init&&t.props.init.inline,t.boundHandlers={},t}return j(n,e),n.prototype.componentDidUpdate=function(e){this.editor&&this.editor.initialized&&(v(this.editor,this.props,this.boundHandlers),this.currentContent=this.currentContent||this.editor.getContent({format:this.props.outputFormat}),"string"===typeof this.props.value&&this.props.value!==e.value&&this.props.value!==this.currentContent&&this.editor.setContent(this.props.value),"boolean"===typeof this.props.disabled&&this.props.disabled!==e.disabled&&this.editor.setMode(this.props.disabled?"readonly":"design"))},n.prototype.componentDidMount=function(){null!==Object(w.a)()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&E.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),this.initialise)},n.prototype.componentWillUnmount=function(){var e=this,n=this.editor;null!==Object(w.a)()&&n&&(n.off("init",this.handleInit),n.initialized&&(n.off("change keyup setcontent",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(t){n.off(t,e.boundHandlers[t])})),this.boundHandlers={}),Object(w.a)().remove(n))},n.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},n.prototype.renderInline=function(){var e=this.props.tagName,n=void 0===e?"div":e;return s.createElement(n,{ref:this.elementRef,id:this.id})},n.prototype.renderIframe=function(){return s.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},n.prototype.getScriptSrc=function(){if("string"===typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var e=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+e+"/tinymce.min.js"},n.prototype.getInitialValue=function(){return"string"===typeof this.props.value?this.props.value:"string"===typeof this.props.initialValue?this.props.initialValue:""},n.propTypes=m,n.defaultProps={cloudChannel:"5"},n}(s.Component),x=["Arial=arial,helvetica,sans-serif","Book Antiqua=book antiqua,palatino","Comic Sans MS=comic sans ms,sans-serif","Courier New=courier new,courier","Georgia=georgia,palatino","Helvetica=helvetica","Times New Roman=times new roman,times","Open Sans='Open Sans', sans-serif","Oswald='Oswald', sans-serif","Amiri_ar='Amiri', serif _ ar","Reem Kufi_ar='Reem Kufi', sans-serif _ ar","Aref Ruqaa_ar='Aref Ruqaa', serif _ ar","Scheherazade_ar='Scheherazade', serif _ ar","Tajawal_ar='Tajawal', sans-serif _ ar","Vibes_ar='Vibes', cursive","Lucida Console='Lucida Console', Monaco, monospace","Comic Sans MS='Comic Sans MS', 'Comic Sans', cursive, sans-serif"],R=function(e){Object(a.a)(t,e);var n=Object(c.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=n.call(this,e)).onEditorChange=function(e){o.triggerChange(e)},o.triggerChange=function(e){var n=o.props.onChange;n&&n(e)},o.state={},o}return Object(r.a)(t,[{key:"render",value:function(){var e=this.props,n=e.value,t=e.disabled,i=e.extraProps;return u.a.createElement(k,{apiKey:l.a.tinyEditorKey,onEditorChange:this.onEditorChange,value:n,init:Object(o.a)({height:340,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen table"],content_style:'@import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Oswald&display=swap&family=Reem+Kufi&display=swap&family=Aref+Ruqaa&family=Scheherazade&family=Tajawal:wght@500&family=Vibes&display=swap&family=Amiri");',font_formats:x.join(";"),toolbar:"undo redo | fontselect || fontsizeselect | formatselect | bold italic forecolor backcolor |              alignleft aligncenter alignright alignjustify | \t\t\t\t\t\t bullist numlist outdent indent | removeformat |              table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol"},i&&Object(o.a)({},i)),disabled:t})}}]),t}(u.a.Component);R.defaultProps={disabled:!1,extraProps:{}};n.a=R},496:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return i}));var o=function(){return"undefined"!==typeof window?window:e},i=function(){var e=o();return e&&e.tinymce?e.tinymce:null}}).call(this,t(122))},83:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return r}));var o=t(125),i=Object(o.a)("success","processing","error","default","warning"),r=Object(o.a)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},915:function(e,n,t){}}]);