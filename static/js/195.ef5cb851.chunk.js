(this.webpackJsonpfilesdna=this.webpackJsonpfilesdna||[]).push([[195],{1860:function(e,a,t){"use strict";t.r(a);var n=t(35),l=t.n(n),r=(t(568),t(573)),c=(t(65),t(66)),m=(t(72),t(73)),i=(t(137),t(141)),s=(t(147),t(99)),u=t(33),o=t(43),d=t(29),E=t(0),p=t.n(E),b=t(61),g=t(53),h=t(45),v=t(69),f=t(68),j=t(457),O=t(110),y=function(e,a,t){return e.split(a,t).join(a).length},q=function(e){var a=y(e,"<tr",3),t=y(e,"</tr>",7);return e.substring(a,t)};a.default=function(e){var a=e.initialValues,t=void 0===a?{}:a,n=e.visible,y=e.onClose,I=e.handleSubmit,k=void 0===I?function(){}:I,w=t?Object(d.a)({},t):{},x=!Object(g.isEmpty)(w)&&w.id,C=Object(E.useState)(!1),T=Object(o.a)(C,2),S=T[0],_=T[1],B=w.content&&q(w.content);function J(){return(J=Object(u.a)(l.a.mark((function e(a){var t,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.content,n=q(t),r=t.replace(n,B),a.content=r,_(!0),x?"update":"create",e.prev=6,a.parent_template_id=w.id,e.next=10,Object(v.a)("user-email-template/create",a,"POST");case 10:(c=e.sent).success&&Object(g.isObject)(c.data)?(_(!1),k(c.data,x),Object(f.a)("success",c.message)):(_(!1),Object(f.a)("error",c.message)),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),_(!1),Object(f.a)("error");case 18:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}return p.a.createElement(r.a,{title:p.a.createElement(h.a,{id:x?"email.editEmailTemp":"email.addEmailTemp"}),width:700,onClose:y,visible:n,bodyStyle:{paddingBottom:80},destroyOnClose:!0},p.a.createElement(O.d,null,p.a.createElement(i.a,{onFinish:function(e){var a=Object(d.a)({},e);x&&(a.id=w.id),function(e){J.apply(this,arguments)}(a)},layout:"vertical",initialValues:w},p.a.createElement(c.a,{gutter:6},p.a.createElement(m.a,{span:12},p.a.createElement(i.a.Item,{label:p.a.createElement(h.a,{id:"email.template"}),name:"name",rules:[{required:!0,message:p.a.createElement(h.a,{id:"email.template.req"})}]},p.a.createElement(s.a,null))),p.a.createElement(m.a,{span:12},p.a.createElement(i.a.Item,{label:p.a.createElement(h.a,{id:"email.sub"}),name:"subject",rules:[{required:!0,message:p.a.createElement(h.a,{id:"email.sub.req"})}]},p.a.createElement(s.a,null)))),p.a.createElement(c.a,{gutter:6},p.a.createElement(m.a,{span:24},p.a.createElement(i.a.Item,{label:p.a.createElement(h.a,{id:"email.content"}),name:"content",rules:[{required:!0,message:p.a.createElement(h.a,{id:"email.content.req"})}]},p.a.createElement(j.a,null)))),p.a.createElement(c.a,{gutter:6},p.a.createElement(m.a,{span:24},p.a.createElement(i.a.Item,{label:p.a.createElement(h.a,{id:"email.short.desc"}),name:"text_version",rules:[{required:!0,message:p.a.createElement(h.a,{id:"email.short.desc.req"})}]},p.a.createElement(s.a.TextArea,{type:"textarea",rows:5})))),p.a.createElement(c.a,{gutter:6},p.a.createElement(m.a,{span:24},p.a.createElement(i.a.Item,{label:p.a.createElement(h.a,{id:"email.tags"}),name:"available_tags",rules:[{required:!0,message:p.a.createElement(h.a,{id:"email.tags.req"})}]},p.a.createElement(s.a,null)))),p.a.createElement(O.a,{className:"bottomBtnWrapper"},p.a.createElement(i.a.Item,null,p.a.createElement(b.a,{onClick:y,style:{marginRight:8}},p.a.createElement(h.a,{id:"common.cancel"}))),p.a.createElement(i.a.Item,null,p.a.createElement(b.a,{type:"primary",htmlType:"submit",loading:S},p.a.createElement(h.a,{id:"Make a Copy"})))))))}}}]);