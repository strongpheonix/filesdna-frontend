(this.webpackJsonpfilesdna=this.webpackJsonpfilesdna||[]).push([[158],{135:function(n,e,t){"use strict";var a=t(0),i=t(53);e.a=function(n){var e=n.form,t=n.visible,r=n.initVal,o=Object(a.useRef)();Object(a.useEffect)((function(){o.current=t,t&&Object(i.isObject)(r)&&!Object(i.isEmpty)(r)&&setTimeout((function(){e.setFieldsValue(r)}),100)}),[t]);var c=o.current;Object(a.useEffect)((function(){!t&&c&&e.resetFields()}),[t])}},1839:function(n,e,t){"use strict";t.r(e);var a=t(35),i=t.n(a),r=(t(95),t(96)),o=(t(65),t(66)),c=(t(72),t(73)),l=(t(227),t(202)),s=(t(203),t(207)),p=t(29),d=t(33),u=t(43),m=t(0),f=t.n(m),b=t(293),x=t(210),g=t(45),h=t(135),v=t(221),j=t(69),O=t(68),y=t(365),w=t(251),k=t(214),E=t(53),A=t(325),z={exporting:{title:"document.exporting",msg:"document.exportingMsg"},saving:{title:"document.saving",msg:"document.savingMsg"}};e.default=function(n){var e,t=n.docId,a=void 0===t?"":t,C=n.docData,T=n.savedData,D=void 0===T?[]:T,L=n.visible,F=void 0!==L&&L,I=n.onClose,N=void 0===I?function(){}:I,P=n.goBack,B=void 0===P?function(){}:P,S=n.type,_=void 0===S?"":S,Q=n.handleSaveDocResp,R=void 0===Q?function(){}:Q,U=b.a.useForm(),M=Object(u.a)(U,1)[0],G=Object(m.useState)({initLoading:!1,isQrAdded:!1}),V=Object(u.a)(G,2),Y=V[0],q=V[1],H=Object(m.useState)({loading:!1}),J=Object(u.a)(H,2),K=J[0],W=J[1],X="Pending Owner"===(null===C||void 0===C||null===(e=C.file)||void 0===e?void 0:e.status);function Z(){return $.apply(this,arguments)}function $(){return($=Object(d.a)(i.a.mark((function n(){var e,t,r,o=arguments;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",W((function(n){return Object(p.a)(Object(p.a)({},n),{},{loading:"exporting"})})),n.prev=2,n.next=5,Object(j.a)("file/finish",{document_id:a,type:e,timezone:k.a.timezone,json_data:D},"post");case 5:(t=n.sent).success?(B("",{message:"fileManage.exportSuccessfully"}),setTimeout((function(){Object(O.a)("success",t.message)}),300)):(r=t.is_limit_exceed?"document.signUpgradeLimit":t.message,Object(O.a)("error",r)),setTimeout((function(){W((function(n){return Object(p.a)(Object(p.a)({},n),{},{loading:!1})}))}),200),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),W((function(n){return Object(p.a)(Object(p.a)({},n),{},{loading:!1})})),Object(O.a)("error");case 14:case"end":return n.stop()}}),n,null,[[2,10]])})))).apply(this,arguments)}function nn(){return en.apply(this,arguments)}function en(){return(en=Object(d.a)(i.a.mark((function n(){var e,t,r=arguments;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",W((function(n){return Object(p.a)(Object(p.a)({},n),{},{loading:"saving"})})),n.prev=2,n.next=5,Object(j.a)("file/append",{document_id:a,json_data:D,type:"save"},"post");case 5:(t=n.sent).success?"save"===e?(R(t),W((function(n){return Object(p.a)(Object(p.a)({},n),{},{loading:!1})})),N()):Z(e):(W((function(n){return Object(p.a)(Object(p.a)({},n),{},{loading:!1})})),Object(O.a)("error",t.message)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),W((function(n){return Object(p.a)(Object(p.a)({},n),{},{loading:!1})})),Object(O.a)("error");case 13:case"end":return n.stop()}}),n,null,[[2,9]])})))).apply(this,arguments)}function tn(){return new Promise((function(n){if(Object(E.isArray)(D)&&!Object(E.isEmpty)(D)){for(var e=D.length||0,t=0;t<e;t+=1){var a;if(null===(a=D[t])||void 0===a?void 0:a.objects)Object(A.b)(D[t].objects,(function(n){return"qr"===n.fieldType}))&&n(!0)}n(!1)}else n(!1)}))}function an(){return(an=Object(d.a)(i.a.mark((function n(){var e;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return q((function(n){return Object(p.a)(Object(p.a)({},n),{},{initLoading:!0})})),n.next=3,tn();case 3:e=n.sent,q((function(n){return Object(p.a)(Object(p.a)({},n),{},{initLoading:!1,isQrAdded:e})}));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return null===C||void 0===C||C.qr_expire_time,Object(h.a)({form:M,visible:F,initVal:{type:X?"export":"save"}}),Object(m.useEffect)((function(){F&&("exporting"===_&&nn("export"),function(){an.apply(this,arguments)}())}),[F]),f.a.createElement(x.a,{visible:F,onClose:N,title:f.a.createElement(g.a,{id:"documents.finishDoc"}),okText:f.a.createElement(g.a,{id:"common.submit"}),onOk:K.loading?null:function(){M.validateFields().then((function(n){nn(Object(p.a)({},n).type)})).catch((function(n){console.log("Validate Failed:",n)}))},onCancel:K.loading?null:N,okButtonProps:{id:"export-doc"},destroyOnClose:!0,footer:K.loading||Y.initLoading?null:void 0},f.a.createElement(r.a,{spinning:Y.initLoading},f.a.createElement(v.b,null,f.a.createElement(b.a,{autoComplete:"off",form:M,layout:"vertical"},f.a.createElement(o.a,{gutter:6},f.a.createElement(c.a,{xs:24},function(){if(K.loading){var n=z[K.loading];return f.a.createElement(s.a,{className:"errorResult",status:"warning",icon:f.a.createElement(y.a,{style:{color:w.a.colors.primaryColor}}),title:f.a.createElement(g.a,{id:n.title}),subTitle:f.a.createElement(g.a,{id:n.msg})})}return f.a.createElement(b.a.Item,{name:"type",className:"exportFormItem"},f.a.createElement(l.a.Group,{size:"large"},f.a.createElement(l.a,{id:"save-pdf",value:"save",disabled:X},f.a.createElement("span",{className:"label"},f.a.createElement(g.a,{id:"documents.savePDF"})),f.a.createElement("small",{className:"subTxt"},f.a.createElement(g.a,{id:"documents.savePDFSubTxt"})),X&&f.a.createElement("small",{className:"error"},f.a.createElement(g.a,{id:"document.savePDFErr"}))),f.a.createElement(l.a,{id:"export-pdf",value:"export"},f.a.createElement("span",{className:"label"},f.a.createElement(g.a,{id:"documents.exportPdf"})),f.a.createElement("small",{className:"subTxt"},f.a.createElement(g.a,{id:"documents.exportPdfSubTxt"}))),f.a.createElement(l.a,{id:"export-new-pdf",value:"keep",disabled:Y.isQrAdded},f.a.createElement("span",{className:"label"},f.a.createElement(g.a,{id:"documents.exportPdfKeep"})),f.a.createElement("small",{className:"subTxt"},f.a.createElement(g.a,{id:"documents.exportPdfKeepSubTxt"})),Y.isQrAdded&&f.a.createElement("small",{className:"error"},f.a.createElement(g.a,{id:"document.exportQRError"})))))}()))))))}},210:function(n,e,t){"use strict";t(94);var a=t(92);e.a=a.a},221:function(n,e,t){"use strict";t.d(e,"e",(function(){return b})),t.d(e,"b",(function(){return x})),t.d(e,"f",(function(){return g})),t.d(e,"d",(function(){return h})),t.d(e,"c",(function(){return v})),t.d(e,"a",(function(){return j}));var a=t(5),i=t(4),r=t(50),o=t(56);function c(){var n=Object(a.a)(["\n  & .securityOptions {\n    & .option {\n      padding: 10px;\n      border-radius: 5px;\n      background-color: #f8f8f8;\n      border: 1px solid #ccc;\n      color: #333;\n      cursor: pointer;\n      margin-bottom: 10px;\n      font-weight: 550;\n\n      &:hover {\n        border-color: ",";\n      }\n\n      &.active {\n        color: ",";\n        border-color: ",";\n      }\n    }\n  }\n  & .ant-result {\n    padding: 10px;\n    max-width: 80%;\n    margin: 0 auto;\n\n    & .nfcContent {\n      & ol {\n        margin: 10px 0px 20px;\n        background: #f0f0f0f0;\n        padding: 15px 10px 15px 35px;\n\n        & li {\n          text-align: left;\n          margin-left: 0px;\n          padding-left: 10px;\n          margin-bottom: 3px;\n          font-weight: 550;\n        }\n      }\n    }\n  }\n  & .backBtn {\n    margin-bottom: 5px;\n    padding: 0px;\n  }\n  & .verifyAlert {\n    margin-top: 25px;\n    border: none;\n  }\n"]);return c=function(){return n},n}function l(){var n=Object(a.a)(["\n  & .selectedList {\n    & .thumb {\n      display: inline-block;\n      position: relative;\n      width: 120px;\n      height: 150px;\n      padding: 9px 5px 12px 12px;\n      border: 0;\n      overflow: hidden;\n      background-color: #fff;\n      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);\n      transition: 0.15s;\n      outline: none;\n      border: 1px solid #eee;\n      cursor: pointer;\n\n      & .center {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        text-align: center;\n\n        & .label {\n          margin-top: 5px;\n          display: block;\n          color: ",";\n        }\n\n        & .anticon {\n          font-size: 48px;\n          color: ",";\n        }\n      }\n\n      &:hover {\n        border-color: ",";\n      }\n\n      &.selected {\n        border-color: ",";\n      }\n\n      &:hover {\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n      }\n    }\n  }\n\n  & .asign-people {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  & .roleAssignList {\n    & .ant-list-items {\n      & .ant-list-item-meta {\n        align-items: center;\n      }\n\n      & .ant-list-item-action {\n        & li {\n          & .ant-select {\n            text-align: left;\n          }\n        }\n      }\n      .ant-list-item{\n        border-bottom: none;\n      }\n    }\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(a.a)(["\n  padding-top: 20px;\n  border-top: 1px solid #eee;\n\n  & .gridContainer {\n    background: #f2f3f7;\n    padding: 20px;\n\n    & .drop-over-upward {\n      & .fileGrid {\n        border: 2px dashed ",";\n      }\n    }\n\n    & .fileGrid {\n      padding: 20px 10px;\n      background-color: #fff;\n      box-shadow: 0px 3px 10px #0000000d;\n      border: 0.3px solid #b7b7b780;\n      border-radius: 5px;\n      text-align: center;\n      cursor: pointer;\n      position: relative;\n\n      &.checked {\n        border-color: ",";\n      }\n\n      &:hover {\n        & .iconBox {\n          & .anticon {\n            transform: scale(0.8);\n          }\n        }\n      }\n\n      & .checkIcon {\n        position: absolute;\n        top: 6px;\n        right: 8px;\n      }\n\n      & .iconBox {\n        background: #26beb31a 0% 0% no-repeat padding-box;\n        box-shadow: 0px 3px 6px #0000000d;\n        border-radius: 5px;\n        display: inline-block;\n        font-size: 35px;\n        width: 55px;\n        height: 60px;\n        text-align: center;\n        line-height: 60px;\n        color: ",";\n\n        & .anticon {\n          transition: all 0.3s;\n        }\n      }\n\n      & .fileContent {\n        margin-top: 5px;\n        padding-top: 10px;\n        height: 55px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n\n        & .name {\n          padding: 0 7px;\n          font-size: 16px;\n          font-weight: 550;\n          color: ",";\n          line-height: 16px;\n          margin-bottom: 4px;\n\n          // CSS for eclipse text with all browser\n          & span.fname {\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            display: inline-block;\n            width: 150px;\n\n            @supports (-webkit-line-clamp: 2) {\n              overflow: hidden;\n              text-overflow: ellipsis;\n              white-space: initial;\n              display: -webkit-box;\n              -webkit-line-clamp: 2;\n              -webkit-box-orient: vertical;\n              word-break: break-word;\n              width: auto;\n            }\n          }\n        }\n\n        & .sub {\n          color: ",";\n          font-size: 12px;\n\n          & span.dot {\n            margin: 0 4px;\n          }\n        }\n      }\n\n      & .more {\n        position: absolute;\n        right: 0;\n        top: 0;\n        font-size: 20px;\n        padding: 7px;\n        color: #404553;\n      }\n\n      & .lock {\n        position: absolute;\n        left: 12px;\n        top: 12px;\n        font-size: 16px;\n      }\n    }\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(a.a)(["\n  & .selectedUsersList {\n    margin: 10px 0px;\n\n    & .ant-list-item-meta {\n      margin-bottom: 0px;\n    }\n    & .ant-list-item-meta-avatar {\n      margin-right: 10px;\n    }\n    & .ant-list-item-extra {\n      display: flex;\n      align-self: flex-start;\n      align-items: center;\n    }\n    & .ant-list-item-meta-title {\n      font-weight: 550;\n      font-size: 14px;\n      color: ",";\n      margin-bottom: 2px;\n      line-height: 14px;\n    }\n    & .ant-list-item-meta-description {\n      font-weight: 550;\n      font-size: 12px;\n      color: ",";\n    }\n\n    &.sendList {\n      & .ant-list-items {\n        & .drop-over-downward li {\n          border-bottom: 2px dashed ",";\n        }\n\n        & .drop-over-upward li {\n          border-top: 2px dashed ",";\n        }\n\n        & > div {\n          border-bottom: 1px solid #f0f0f0;\n\n          &:last-child {\n            border-bottom: none;\n          }\n        }\n\n        & .ant-list-item {\n          & .ant-avatar {\n            & .dragIcon {\n              display: none;\n            }\n          }\n\n          & .sendActions {\n            margin-left: 15px;\n            display: flex;\n            align-items: center;\n\n            &:last-child {\n              margin-left: 5px;\n            }\n          }\n\n          & .ant-list-item-extra {\n            margin-left: 10px;\n          }\n        }\n      }\n    }\n\n    // common list styles\n    & .ant-list-items {\n      & .ant-avatar {\n        & .dragIcon {\n          display: none;\n        }\n      }\n      & .anticon-partition {\n        font-size: 15px;\n        color: ",";\n        margin-left: 5px;\n      }\n      & .activeOrder {\n        cursor: move !important;\n\n        &:hover {\n          & .dragIcon {\n            display: inline-block !important;\n          }\n          & .userIcon {\n            display: none;\n          }\n        }\n      }\n    }\n  }\n\n  & .workflowUserList {\n    padding: 0px 15px;\n  }\n\n  & .wfUserList {\n    & .ant-list-items {\n      & .ant-list-item-action {\n        margin-left: 5px;\n\n        & > li {\n          padding: 0 1px 0 0;\n        }\n      }\n    }\n  }\n\n  & .ant-list-items {\n    & .ant-list-item {\n      & .listAction {\n        display: flex;\n        align-items: center;\n\n        & > div {\n          & > .ant-btn-circle {\n            margin-left: 5px;\n          }\n        }\n      }\n\n      & .ant-list-item-action {\n        margin-top: 8px;\n      }\n\n      & .ant-list-item-extra {\n        margin-left: 10px;\n      }\n    }\n  }\n"]);return p=function(){return n},n}function d(){var n=Object(a.a)(["\n  & .ant-radio-group {\n    & .ant-radio-wrapper {\n      display: flex;\n      align-items: center;\n      font-size: 16px;\n      display: flex;\n      margin-bottom: 20px;\n\n      &:last-child {\n        margin-bottom: 0px;\n      }\n\n      & .label,\n      & .subTxt {\n        display: block;\n        line-height: 20px;\n\n        @media (max-width: 580px) {\n          word-wrap: break-word;\n          white-space: pre-wrap;\n        }\n      }\n\n      & .ant-radio {\n        margin-right: 5px;\n        & .ant-radio-inner {\n          width: 20px;\n          height: 20px;\n          &:after {\n            // width: 12px;\n            // height: 12px;\n          }\n        }\n      }\n\n      @media only screen and (max-width: 580px) {\n        & .label {\n          font-size: 14px;\n          font-weight: 550;\n        }\n        & .subTxt {\n          font-size: 12px;\n        }\n      }\n    }\n\n    & .error {\n      display: block;\n      font-size: 12px;\n      color: ",";\n    }\n  }\n"]);return d=function(){return n},n}function u(){var n=Object(a.a)(["\n  // Uppy uploader style customization\n\n  & .uppy-Root {\n    & .uppy-DashboardTab svg {\n      width: 40px;\n      height: 40px;\n    }\n\n    & .uppy-DashboardTab-name {\n      font-size: 12px;\n    }\n\n    & .uppy-Dashboard-AddFiles-title {\n      font-size: 24px;\n    }\n\n    & .uppy-Dashboard-AddFiles-info {\n      display: block;\n\n      & .uppy-Dashboard-poweredBy {\n        display: none;\n      }\n    }\n  }\n\n  & .uploadCol {\n    & > span {\n      display: block;\n    }\n    & .uploadHint {\n      margin-top: 5px;\n    }\n\n    & .dropBox {\n      text-align: center;\n      margin: 0 auto;\n      padding: 15px 10px;\n\n      & h3 {\n        font-size: 18px;\n        font-weight: 550;\n      }\n\n      & .dropbox-button {\n        margin-top: 10px;\n      }\n    }\n\n    & .filesContainer {\n      & > div:first-child {\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        padding-top: 15px;\n      }\n\n      & .uploadContainer {\n        width: 200px;\n        margin-bottom: 10px;\n\n        & p.fileName {\n          min-height: 30px;\n        }\n      }\n    }\n  }\n\n  & .ant-divider.ant-divider-horizontal {\n    margin: 15px 0px;\n  }\n"]);return u=function(){return n},n}function m(){var n=Object(a.a)(["\n  width: 100%;\n\n  & .ant-table {\n    & .ant-table-thead {\n      & .ant-table-selection {\n        & .ant-dropdown-trigger {\n          & .anticon {\n            font-size: 12px;\n            color: ",";\n          }\n        }\n      }\n    }\n    & .ant-table-tbody {\n      & .fileContentMain {\n        & .anticon-file-text {\n          cursor: move;\n        }\n      }\n      & tr {\n        &.drop-over-upward {\n          background-color: #f0f0f0;\n          & td {\n            border-top: 1px dashed ",";\n            border-bottom: 1px dashed ",";\n          }\n        }\n      }\n    }\n  }\n\n  & .sharedTable {\n    & .ant-table-tbody {\n      & .fileContentMain {\n        & .anticon-file-text {\n          cursor: unset;\n        }\n      }\n    }\n  }\n\n  & .filterBox {\n    height: auto;\n    margin-bottom: 15px !important;\n\n    & .filterWrapper {\n      margin-bottom: 0px;\n\n      & > div {\n        margin-bottom: 0px;\n      }\n    }\n\n    & .tagsMain {\n      margin-top: 15px;\n\n      & .tagLabel {\n        margin-right: 10px;\n      }\n    }\n  }\n\n  @-webkit-keyframes mover {\n    0% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(-10px);\n    }\n  }\n  @keyframes mover {\n    0% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(-10px);\n    }\n  }\n\n  & .dropContent {\n    border: 3px dashed ",";\n    background-color: rgba(255, 255, 255, 0.8);\n    position: absolute;\n    inset: 0px;\n    z-index: 99;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n\n    & .anticon {\n      font-size: 40px;\n      color: ",";\n    }\n\n    & .anticon-cloud-upload {\n      -webkit-animation: mover 0.5s infinite alternate;\n      animation: mover 0.5s infinite alternate;\n    }\n\n    & h1 {\n      font-size: 25px;\n      font-weight: 550;\n      margin-left: 20px;\n      color: ",";\n    }\n  }\n"]);return m=function(){return n},n}var f=Object(r.a)(i.d.div(m(),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0))),b=Object(r.a)(i.d.div(u())),x=Object(r.a)(i.d.div(d(),Object(o.palette)("danger",0))),g=Object(r.a)(i.d.div(p(),Object(o.palette)("secondary",0),Object(o.palette)("secondary",2),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0))),h=Object(r.a)(i.d.div(s(),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("text",2))),v=Object(r.a)(i.d.div(l(),Object(o.palette)("secondary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0))),j=Object(r.a)(i.d.div(c(),Object(o.palette)("primary",0),Object(o.palette)("primary",0),Object(o.palette)("primary",0)));e.g=f},293:function(n,e,t){"use strict";t(137);var a=t(141);e.a=a.a},325:function(n,e,t){"use strict";t.d(e,"d",(function(){return i})),t.d(e,"c",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return c}));t(29);var a=t(53);function i(n,e,t){var a=new Image;a.crossOrigin="Anonymous",a.onload=function(){var n,a=document.createElement("canvas"),i=a.getContext("2d");a.height=this.naturalHeight,a.width=this.naturalWidth,i.drawImage(this,0,0),n=a.toDataURL(t),e(n)},a.src=n,(a.complete||void 0===a.complete)&&(a.src="data:image/gif;base64, R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",a.src=n)}function r(n,e){for(var t=e?n.length:0,i=0;i<t;i+=1){var r=n[i]&&n[i].getObjects()||[],o=e?Object(a.find)(r,e):{};if(o)return o}return{}}function o(n,e){for(var t=e?n.length:0,a=null,i=0;i<t;i+=1){var r=n[i];if(e(r)&&r){a=r;break}}return a}function c(n){return[5,10,25,50,75,100].concat(n?[]:[150])}}}]);