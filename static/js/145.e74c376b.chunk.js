(this.webpackJsonpfilesdna=this.webpackJsonpfilesdna||[]).push([[145],{110:function(n,t,e){"use strict";e.d(t,"a",(function(){return E})),e.d(t,"d",(function(){return I})),e.d(t,"c",(function(){return z})),e.d(t,"b",(function(){return T})),e.d(t,"e",(function(){return B}));var a=e(5),r=e(4),i=e(0),o=e.n(i),l=e(56);function c(){var n=Object(a.a)(["\n  display: flex;\n\n  & .boxTitleMain {\n    flex: 1;\n  }\n"]);return c=function(){return n},n}function p(){var n=Object(a.a)(["\n  font-size: 14px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return p=function(){return n},n}function d(){var n=Object(a.a)(["\n  font-size: 17px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return d=function(){return n},n}var s=r.d.h3(d(),Object(l.palette)("secondary",0)),m=r.d.p(p(),Object(l.palette)("text",3)),b=r.d.div(c()),u=function(n){var t=n.title,e=n.subtitle,a=n.rightBtns;return t?o.a.createElement(b,{className:"boxHeader"},o.a.createElement("div",{className:"boxTitleMain"},t?o.a.createElement(s,{className:"isoBoxTitle"}," ",t," "):"",e?o.a.createElement(m,{className:"isoBoxSubTitle"}," ",e," "):""),a):null};function x(){var n=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return x=function(){return n},n}var f=r.d.div(x(),Object(l.palette)("border",0),""),g=e(50);function h(){var n=Object(a.a)(["\n  .ant-drawer-body {\n    // padding-bottom: 140px;\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(a.a)(["\n  border-left: 2px solid ",";\n  border-radius: 8px;\n  display: block;\n  // height: 55px;\n  margin: 4px 0;\n  overflow: visible;\n  position: relative;\n\n  &::before {\n    border-top-left-radius: 8px;\n    border-top-width: 2px;\n    top: -2px;\n  }\n\n  &::after {\n    border-bottom-left-radius: 8px;\n    border-bottom-width: 2px;\n    bottom: -2px;\n  }\n\n  &::before,\n  &::after {\n    border: 0px solid ",";\n    content: '';\n    display: block;\n    height: 38px;\n    left: -1px;\n    position: absolute;\n    width: 20px;\n  }\n\n  & .title-top {\n    font-weight: 700;\n    top: -8px;\n  }\n  & .title-bottom {\n    bottom: -7px;\n  }\n  & .title-bottom,\n  & .title-top {\n    font-size: 10px;\n    left: 21px;\n    position: absolute;\n  }\n\n  & .extraInfo {\n    margin-left: 15px;\n\n    & > span {\n      display: block;\n      font-size: 12px;\n    }\n  }\n\n  & .sign-container {\n    display: flex;\n    align-items: center;\n    height: 55px;\n    white-space: nowrap;\n    width: 100%;\n    padding: 10px;\n    justify-content: space-between;\n    padding-left: 15px;\n\n    & > img {\n      max-width: 100%;\n      max-height: 100%;\n    }\n\n    & .sign {\n      font-size: 22px;\n      line-height: 22px;\n      margin-top: 8px;\n\n      &.default {\n        font-size: 20px;\n        margin-left: 2px;\n      }\n    }\n\n    @media (max-width: 768px) {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    @media (max-width: 580px) {\n      padding-left: 5px;\n      min-width: 100px;\n\n      & .sign {\n        font-size: 18px;\n\n        &.default {\n          font-size: 15px;\n        }\n      }\n    }\n  }\n  @media (max-width: 580px) {\n    & .title-top {\n      left: 10px;\n    }\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(a.a)(["\n  .livenessDetectionSystem {\n    margin-top:80px;\n    text-align: center;\n    font-weight: 800;\n    font-size: 35px;\n    margin-bottom: 30px;\n  }\n\n  .scanActions {\n    width:640px;\n  }\n\n  .avatar-uploader {\n    margin: 0px 0px 20px;\n    cursor: pointer;\n  }\n  .otpLabel {\n    text-align: center;\n    padding-bottom: 25px;\n\n    & > h3 {\n      color: rgb(68, 68, 68);\n      font-weight: bold;\n    }\n\n    & > div {\n      & .numberWrap {\n        font-weight: bold;\n      }\n    }\n  }\n  .otpWrapper {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 20px;\n    .timerWrapper {\n      & .ant-statistic {\n        display: flex;\n        justify-content: center;\n\n        & .ant-statistic-title {\n          color: ",";\n          font-size: 14px;\n          text-decoration: underline;\n        }\n\n        & .ant-statistic-content {\n          padding: 0px 4px;\n          font-size: 14px;\n        }\n      }\n    }\n  }\n\n  .proofWrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    & > div {\n      display: flex;\n      align-items: center;\n      padding: 10px 0;\n    }\n  }\n  .phoneWrapper {\n    padding: 16px;\n    background: #f4f4f4;\n    border-radius: 5px;\n\n    & .phonoNumber {\n      font-weight: 600;\n    }\n  }\n  .uploadTitleWrap {\n    font-weight: 550;\n    font-size: 16px;\n    color: ",";\n  }\n  .imageWrap {\n    padding: 20px;\n    border: 2px dashed #ddd;\n    margin-top: 15px;\n    background: #f4f4f4;\n    text-align: center;\n    border-radius: 5px;\n\n    & > img {\n      width: 130px;\n    }\n    & > div {\n      text-align: center;\n      color: #666;\n      padding-top: 10px;\n    }\n  }\n\n  .signatureList,\n  .chooseList {\n    width: 100%;\n  }\n\n  & .signatureList {\n    margin-top: 15px;\n\n    & ul.ant-list-items {\n      & li.ant-list-item {\n        padding: 15px 0;\n        margin-bottom: 5px;\n      }\n    }\n\n    & .sign-main {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n\n      & .ant-tag {\n        margin-right: 20px;\n      }\n\n      img {\n        max-width: 190px;\n        max-height: 100px;\n        width: auto;\n      }\n    }\n  }\n\n  .settingList {\n    & .settingTitleWrap {\n      flex-direction: column;\n      display: flex;\n\n      & .settingTitle {\n        font-size: 16px;\n        font-weight: 550;\n      }\n\n      & .settingDesc {\n        padding-top: 2px;\n        color: #908c8c;\n      }\n    }\n  }\n\n  .chooseList {\n    cursor: pointer;\n    & .chooseFormItem {\n      margin-bottom: 0px !important;\n      border-bottom: 1px solid #ddd !important;\n    }\n\n    & ul.ant-list-items {\n      & li.ant-list-item {\n        & .ant-list-item-meta-title {\n          margin-bottom: 0px;\n        }\n\n        padding: 15px 0 10px;\n      }\n    }\n  }\n\n  .createBtn {\n    color: ",";\n    margin-top: 15px;\n    border: none;\n  }\n\n  & .createSignBtn {\n    color: ",";\n    margin: 10px 0 15px;\n    border-color: ",";\n  }\n\n  .createBtn.modifyBtn {\n    margin-top: 0px;\n  }\n\n  & .modifyBtn.ant-btn-sm {\n    display: block;\n    margin: 2px auto 0px;\n  }\n\n  .toggleSwitch {\n    margin: 0 23px;\n  }\n\n  .absolute-remove {\n    position: absolute;\n    top: -11px;\n    right: -9px;\n    font-size: 19px;\n  }\n\n  .phoneCodePicker > div:first-child {\n    border: none;\n    box-shadow: none !important;\n  }\n  .perCheckbox {\n    margin-left: 10px;\n    margin-top: 15px;\n  }\n  .userAvtarOrdered {\n    order: 2;\n    @media only screen and (max-width: 768px) {\n      order: 1;\n      & + div {\n        order: 2;\n      }\n    }\n  }\n  .userSettingsTitle {\n    margin-bottom: 20px;\n    font-size: 18px;\n    color: ",";\n  }\n\n  .dynamicInputs {\n    padding: 20px;\n    margin: 5px 0 10px;\n    border: 1px dashed #ddd;\n    background: #f5f5f5;\n\n    & > div {\n      & > .ant-row.ant-form-item {\n        margin-bottom: 0px;\n      }\n    }\n\n    & .removeInputBtn {\n      padding-left: 5px;\n      font-size: 20px;\n      color: ",";\n      margin-top: 6px;\n    }\n  }\n\n  & .invoiceInfo {\n    & .ant-descriptions {\n      & .ant-descriptions-title {\n        margin-bottom: 10px;\n        font-weight: 500;\n        color: ",";\n      }\n    }\n  }\n\n  & .basicDetailForm {\n    & .countryFormItem {\n      margin-bottom: 0px;\n\n      & .ant-form-item-control-input {\n        min-height: auto;\n\n        & .ant-select-selector {\n          height: 31px;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    & .signHint {\n      font-size: 12px;\n    }\n    & .signatureList {\n      & .ant-list-items {\n        padding: 10px 0 7px;\n      }\n    }\n  }\n"]);return w=function(){return n},n}function j(){var n=Object(a.a)(["\n  width: auto;\n  overflow: inherit;\n  position: relative;\n\n  .isoInvoiceTable {\n    table {\n      tbody {\n        tr {\n          td {\n            .isoInvoiceBtnView {\n              display: flex;\n              flex-direction: row;\n              // justify-content: center;\n              > a {\n                margin: ",";\n              }\n              & > button {\n                margin: ",";\n              }\n              & > button.deleteCircleBtn {\n                color: red;\n              }\n            }\n            & a.MoreInfoValue.videoLink {\n              margin-left: 10px;\n              display: block;\n              text-overflow: ellipsis;\n              white-space: nowrap;\n              overflow: hidden;\n              width: 110px;\n              margin-left: 10px;\n            }\n          }\n        }\n      }\n    }\n  }\n  .invoiceListTable {\n    .patientInfo {\n      max-width: 70%;\n      & .normalWhiteSpace {\n        white-space: normal;\n      }\n      @media only screen and (max-width: 1600px) {\n        max-width: 100%;\n      }\n      & .MoreInfoValue {\n        margin-left: 10px;\n        @media (max-width: 375px) {\n          white-space: nowrap !important;\n          width: 110px !important;\n          overflow: hidden !important;\n          text-overflow: ellipsis !important;\n        }\n      }\n    }\n    .protocolsInfo.patientInfo {\n      & .MoreInfoValue {\n        @media (max-width: 375px) {\n          white-space: normal !important;\n          width: auto !important;\n          overflow: auto !important;\n          text-overflow: initial !important;\n        }\n      }\n    }\n    .invoiceDltBtn {\n      font-size: 18px;\n      display: inline-block;\n\n      & button,\n      & button:hover {\n        border: 0;\n        color: ",";\n      }\n    }\n  }\n"]);return j=function(){return n},n}function y(){var n=Object(a.a)(["\n  .fileManagerBtn {\n    margin-right: 10px;\n    @media (max-width: 425px) {\n      margin-right: 0px;\n    }\n  }\n\n  & .settingsGrid {\n    margin-bottom: 10px;\n  }\n\n  .isoInvoiceTableBtn {\n    display: flex;\n    justify-content: flex-end;\n    margin-bottom: 20px;\n  }\n  .isoInvoiceTableBtn.searchInputsWrapper {\n    display: flex;\n    justify-content: flex-end;\n    // margin-bottom: 20px;\n    @media (max-width: 768px) {\n      justify-content: space-between !important;\n      &.patientWrapper {\n        width: 100%;\n        justify-content: space-between;\n      }\n    }\n  }\n  .isoInvoiceTableBtn.searchInputsWrapper.newSearch {\n    display: none;\n    justify-content: flex-end;\n    margin-bottom: 20px;\n    @media (max-width: 768px) {\n      display: flex;\n      justify-content: space-between !important;\n    }\n  }\n  .isoInvoiceTableBtn.searchInputsWrapper > .ant-btn-icon-only {\n    display: none;\n    @media (max-width: 768px) {\n      display: flex;\n    }\n    @media (max-width: 320px) {\n      padding: 0px 15px;\n    }\n  }\n  .isoInvoiceTableBtn.hideResponsive {\n    display: block;\n    @media (max-width: 768px) {\n      display: none;\n    }\n  }\n  .appointmentFilterMain.invoiceFilter {\n    margin-bottom: 10px;\n    // justify-content: flex-start;\n\n    & .filterWrapper {\n      @media (min-width: 768px) {\n        margin-left: 10px;\n      }\n    }\n    & .isoInvoiceTableBtn.searchInputsWrapper {\n      display: none;\n    }\n    @media (max-width: 1220px) {\n      flex-direction: row;\n    }\n    @media (max-width: 768px) {\n      & .filterDesktop {\n        display: none;\n      }\n      & .isoInvoiceTableBtn.searchInputsWrapper {\n        display: block;\n      }\n    }\n  }\n  .searchInputWrapper {\n    display: none;\n    @media (max-width: 768px) {\n      display: inline-block;\n      justify-content: space-between;\n      width: 100%;\n      & > div {\n        padding-bottom: 15px;\n      }\n    }\n  }\n  .fileManagerTable {\n    table {\n      tbody {\n        tr {\n          cursor: pointer;\n        }\n      }\n    }\n  }\n  .appointmentFilterMain {\n    margin-bottom: 20px;\n    align-items: center;\n    & > div {\n      display: flex;\n      margin-bottom: 10px;\n      & > div {\n        margin-right: 10px;\n        & .ant-select {\n          min-width: 200px;\n        }\n      }\n    }\n    .filterBtnWrapper {\n      & .radioWrapper {\n        display: none;\n      }\n      @media (max-width: 768px) {\n        display: flex;\n        justify-content: space-between;\n        width: 100%;\n        align-items: center;\n        & .radioWrapper {\n          width: 33%;\n          margin-top: 5px;\n          justify-content: flex-end;\n          display: flex;\n          margin-bottom: 0px !important;\n        }\n      }\n    }\n    .filterBtnWrapper.fileFilter {\n      & .radioWrapper {\n        display: none;\n      }\n      & > div {\n        @media (max-width: 768px) {\n          display: flex;\n          justify-content: space-between;\n          width: 100%;\n          align-items: center;\n          & .radioWrapper {\n            width: auto;\n            justify-content: flex-end;\n            display: flex;\n            margin-bottom: 0px !important;\n          }\n        }\n\n        @media (max-width: 425px) {\n          display: block;\n          & > button {\n            margin-right: 15px;\n            padding: 0px 13px;\n          }\n          & .radioWrapper {\n            margin-top: 15px;\n            display: flex;\n            // justify-content: center;\n          }\n\n          & .fileManagerBtn {\n            margin-right: 5px;\n            padding: 0px 10px;\n          }\n          & .mateAddInvoiceBtn {\n            padding: 0px 10px;\n          }\n        }\n      }\n    }\n    & .searchInput {\n      width: 60%;\n    }\n    & .isoInvoiceTableBtn {\n      @media only screen and (max-width: 580px) {\n        margin-bottom: 10px;\n        margin-top: 0px;\n      }\n    }\n\n    @media only screen and (max-width: 1250px) {\n      flex-direction: column-reverse;\n      align-items: flex-start;\n      &.patient {\n        flex-direction: row;\n      }\n    }\n    @media only screen and (max-width: 1024px) {\n      & > div {\n        & > div {\n          & .ant-select {\n            min-width: 150px;\n          }\n        }\n      }\n    }\n    @media only screen and (max-width: 768px) {\n      &.patient {\n        flex-direction: column-reverse;\n      }\n    }\n\n    @media only screen and (max-width: 650px) {\n      & > div {\n        flex-wrap: wrap;\n        & > div {\n          width: 100%;\n          margin: 0px 0px 5px 0px;\n          & .ant-select {\n            min-width: 100%;\n          }\n        }\n      }\n    }\n  }\n  @media (max-width: 768px) {\n    .appointmentFilterMain.allWordsFilter {\n      & .searchInput {\n        margin-bottom: 15px;\n        width: auto;\n        & > div {\n          margin-left: 0px !important;\n          margin-bottom: 10px;\n        }\n        & > span {\n          margin-bottom: 12px;\n        }\n      }\n    }\n  }\n  @media (max-width: 768px) {\n    .appointmentFilterMain.appoinmentSearchFilter {\n      & .filterWrapper {\n        display: block;\n        width: 100%;\n        & > div {\n          padding-bottom: 10px;\n        }\n      }\n    }\n  }\n  @media (max-width: 768px) {\n    .appointmentFilterMain.feedbackFilter {\n      & .feedbackWrapper {\n        width: 100%;\n      }\n    }\n    .appointmentFilterMain.fileFilterMain {\n      & .fileFilterInput {\n        width: 100%;\n      }\n      &.patient {\n        margin-bottom: 10px;\n      }\n    }\n  }\n  @media (max-width: 580px) {\n    .ant-row-flex.ant-row-flex-space-between.appointmentFilterMain.feedbackFilter\n      > .feedbackWrapper {\n      width: 100%;\n    }\n  }\n"]);return y=function(){return n},n}function O(){var n=Object(a.a)(["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  border-top: 1px solid #e9e9e9;\n  padding: 15px 20px;\n  background: #fff;\n  text-align: right;\n  display: flex;\n  justify-content: flex-end;\n\n  & > .ant-form-item {\n    &:first-child {\n      button {\n        margin-left: ",";\n      }\n    }\n  }\n"]);return O=function(){return n},n}var E=Object(g.a)(r.d.div(O(),(function(n){return"rtl"===n["data-rtl"]?"8px":"0px"}))),k=Object(r.d)((function(n){var t=n.className,e=n.title,a=n.subtitle,r=n.children,i=n.style,l=n.rightBtns;return o.a.createElement(f,{className:"".concat(t||""," isoBoxWrapper"),style:i},o.a.createElement(u,{title:e,subtitle:a,rightBtns:l}),r)}))(y()),z=Object(g.a)(r.d.div(j(),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 10px":"0 10px 0 0"}),Object(l.palette)("error",0))),I=r.d.div(w(),Object(l.palette)("primary",0),Object(l.palette)("secondary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("secondary",0),Object(l.palette)("error",0),Object(l.palette)("secondary",0)),B=r.d.div(v(),Object(l.palette)("primary",0),Object(l.palette)("primary",0)),T=(r.d.div(h()),Object(g.a)(k))},1448:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return C}));var a=e(35),r=e.n(a),i=(e(132),e(134)),o=(e(79),e(64)),l=(e(268),e(269)),c=e(84),p=e(29),d=e(33),s=e(43),m=e(0),b=e.n(m),u=e(464),x=e(562),f=e(178),g=e.n(f),h=e(53),v=e(237),w=e.n(v),j=e(245),y=e(193),O=e(45),E=e(61),k=e(110),z=e(69),I=e(123),B=e(306),T=e(189),W=Object(m.lazy)((function(){return e.e(9).then(e.bind(null,643))})),N=Object(m.lazy)((function(){return Promise.all([e.e(1),e.e(5),e.e(7),e.e(8),e.e(81)]).then(e.bind(null,298))})),S=Object(m.lazy)((function(){return Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(83)]).then(e.bind(null,1824))})),F=Object(m.lazy)((function(){return Promise.all([e.e(0),e.e(170)]).then(e.bind(null,1686))}));function C(){var n=Object(j.h)().search,t=w.a.parse(n),e=Object(m.useState)(t),a=Object(s.a)(e,2),f=a[0],v=a[1],C=Object(m.useState)({}),A=Object(s.a)(C,2),L=A[0],M=A[1],D=Object(m.useState)({users:[],loading:!0}),K=Object(s.a)(D,2),_=K[0],P=K[1],V=Object(m.useState)({initObj:{},visible:!1}),G=Object(s.a)(V,2),H=G[0],J=G[1],U=H.initObj,R=H.visible;function q(){return Q.apply(this,arguments)}function Q(){return(Q=Object(d.a)(r.a.mark((function n(){var t,e,a,i=arguments;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:{},P((function(n){return Object(p.a)(Object(p.a)({},n),{},{loading:!0})})),n.prev=2,n.next=5,Object(z.a)("user/get-users/team",t);case 5:(e=n.sent).success&&Object(h.isArray)(e.data)?(P({users:Object(h.isArray)(e.data)?e.data:[],loading:!1}),(a=f&&f.pagination?Object(p.a)({},f.pagination):{}).total=e.total_count||0,a.pageSize=e.per_page||10,a.current=e.page||1,M(a),v((function(n){return Object(p.a)(Object(p.a)({},n),{},{page:e.page||1})}))):P({users:[],loading:!1}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),P({users:[],loading:!1});case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))).apply(this,arguments)}Object(m.useEffect)((function(){q(Object(p.a)({},f))}),[]),Object(B.a)({filters:f});var X=[{title:"",dataIndex:"picture",rowKey:"picture",width:70,align:"center",className:"avatar-cell",render:function(n){return b.a.createElement(l.a,{src:n||"",icon:b.a.createElement(u.a,null)})}},{key:"createdAt",title:b.a.createElement(O.a,{id:"common.createdAt"}),dataIndex:"createdAt",rowKey:"createdAt",width:180,className:"fullname-cell",render:function(n){var t=n?g()(n).format("lll"):"";return b.a.createElement("div",null,b.a.createElement("span",{className:"label"},b.a.createElement(O.a,{id:"common.createdAt"})),b.a.createElement("span",{className:"mobile-lbl-val"},t||"-"))}},{title:b.a.createElement(O.a,{id:"antTable.title.name"}),dataIndex:"name",rowKey:"name",className:"fullname-cell",render:function(n,t){var e=Object(I.p)(t.first_name,t.last_name);return b.a.createElement("div",null,b.a.createElement("span",{className:"label"},b.a.createElement(O.a,{id:"antTable.title.name"})),b.a.createElement("span",{className:"mobile-lbl-val"},b.a.createElement(o.a,{placement:"bottomLeft",title:e},e)))}},{key:"email",title:b.a.createElement(O.a,{id:"antTable.title.email"}),dataIndex:"email",rowKey:"email",render:function(n){return b.a.createElement("div",null,b.a.createElement("span",{className:"label"},b.a.createElement(O.a,{id:"antTable.title.email"})),b.a.createElement("span",{className:"mobile-lbl-val"},b.a.createElement(o.a,{placement:"topLeft",title:n},n||"-")))}},{key:"department",title:b.a.createElement(O.a,{id:"dept.name"}),dataIndex:"department",rowKey:"department",render:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return b.a.createElement("div",null,b.a.createElement("span",{className:"label"},b.a.createElement(O.a,{id:"dept.name"})),b.a.createElement("span",{className:"mobile-lbl-val"},Object(h.isArray)(n)&&n.map((function(n,t){return b.a.createElement(i.a,{key:"".concat(n,"_").concat(t)},b.a.createElement(o.a,{placement:"topLeft",title:n},n||"-"))}))))}},{title:b.a.createElement(O.a,{id:"common.action"}),dataIndex:"edit",rowKey:"edit",width:110,fixed:"right",className:"action-cell",render:function(n,t){return b.a.createElement("div",{className:"isoInvoiceBtnView"},b.a.createElement(E.a,{id:"edit-member",shape:"circle",icon:b.a.createElement(x.a,null),onClick:function(){J({initObj:t,visible:!0})},className:"invoiceViewBtn"}),b.a.createElement(T.a,{btnId:"delete-confirm-member",apiUrl:"user/delete",apiData:{userId:t.user_id,type:"team"},fetchData:function(){return q(f)},setState:P}))}}];var Y=_.users,Z=_.loading;return b.a.createElement(y.a,null,b.a.createElement(k.b,null,b.a.createElement(m.Suspense,{fallback:b.a.createElement("div",null)},b.a.createElement(F,{onAdd:function(){return J({visible:!0,initObj:{}})},onChange:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=Object(p.a)(Object(p.a)({},f),{},{page:1});t&&(e[t]=n),v(e),q(e)},filters:f})),b.a.createElement(m.Suspense,{fallback:b.a.createElement("div",null)},b.a.createElement(W,null,b.a.createElement("div",{className:"isoInvoiceTable"},b.a.createElement(N,{scroll:{x:1200},loading:Z,rowKey:function(n){return n.user_id},dataSource:Y,onChange:function(n,t,e){var a=Object(p.a)({},f);e&&e.columnKey&&(a[e.columnKey]=Object(I.v)(e.order)),n&&(a.page=n.current,M(n)),v(a),q(a)},columns:X,className:"invoiceListTable adminTable",pagination:Object(p.a)(Object(p.a)({},L),{},{showSizeChanger:!1}),showSorterTooltip:!1}))))),b.a.createElement(m.Suspense,{fallback:b.a.createElement("div",null)},b.a.createElement(S,{handleSubmit:function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=Object(h.isArray)(_.users)?Object(c.a)(_.users):[],a=Object(h.findIndex)(e,{user_id:n.user_id});t&&a>-1?(e[a]=n,P({users:e})):q(f),J((function(n){return Object(p.a)(Object(p.a)({},n),{},{visible:!1})}))},initialValues:U,visible:R,onClose:function(){return J({visible:!1,initObj:{}})}})))}},180:function(n,t,e){"use strict";var a=e(5),r=e(4),i=e(56),o=e(50);function l(){var n=Object(a.a)(["\n  & .deleteCircle,\n  & .deleteCircle:hover {\n    color: ",";\n    border-width: 0px;\n  }\n"]);return l=function(){return n},n}var c=r.d.div(l(),Object(i.palette)("error",0));t.a=Object(o.a)(c)},189:function(n,t,e){"use strict";e.d(t,"a",(function(){return g}));var a=e(35),r=e.n(a),i=e(29),o=e(33),l=e(0),c=e.n(l),p=e(297),d=e(61),s=(e(185),e(186).a),m=e(69),b=e(68),u=e(45),x=e(53),f=e(180);function g(n){var t=n.apiUrl,e=n.apiData,a=n.fetchData,l=void 0===a?function(){}:a,g=n.setState,h=void 0===g?function(){}:g,v=n.onConfirm,w=void 0===v?function(){}:v,j=n.btnId,y=n.btnProps,O=void 0===y?{}:y;function E(){return(E=Object(o.a)(r.a.mark((function n(){var a,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!Object(x.isObject)(e)||Object(x.isEmpty)(e)){n.next=17;break}return h((function(n){return Object(i.a)(Object(i.a)({},n),{},{loading:!0})})),n.prev=2,n.next=5,Object(m.a)(t,e,"POST");case 5:a=n.sent,o="error",a.success?(o="success",l()):h((function(n){return Object(i.a)(Object(i.a)({},n),{},{loading:!1})})),setTimeout((function(){Object(b.a)(o,a.message)}),200),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(2),h((function(n){return Object(i.a)(Object(i.a)({},n),{},{loading:!1})})),Object(b.a)("error");case 15:n.next=18;break;case 17:w();case 18:case"end":return n.stop()}}),n,null,[[2,11]])})))).apply(this,arguments)}return c.a.createElement(f.a,null,c.a.createElement(s,{title:c.a.createElement(u.a,{id:"common.sureDelete"}),okText:c.a.createElement(u.a,{id:"common.deleteCap"}),okButtonProps:{id:"delete-item"},cancelText:c.a.createElement(u.a,{id:"common.no"}),onConfirm:function(){return E.apply(this,arguments)},className:"deleteBtn",onCancel:null},c.a.createElement("div",null,c.a.createElement(d.a,Object.assign({id:j,shape:"circle",danger:!0,icon:c.a.createElement(p.a,null),className:"deleteCircle"},O)))))}},193:function(n,t,e){"use strict";var a=e(0),r=e.n(a),i=e(5);function o(){var n=Object(i.a)(["\n  padding: 20px 10px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  .layoutWrapCon {\n    display: flex;\n    flex-flow: row wrap;\n    align-items: flex-start;\n    overflow: hidden;\n    width: 100%;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return o=function(){return n},n}var l=e(4).d.div(o());t.a=function(n){return r.a.createElement(l,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},306:function(n,t,e){"use strict";var a=e(0),r=e(237),i=e.n(r),o=e(53),l=e(245),c=e(367);t.a=function(n){var t=n.filters,e=n.restrictFlt,r=void 0===e?[]:e,p=Object(l.g)(),d=Object(c.a)(),s=Object(o.isArray)(d)&&!Object(o.isEmpty)(d)?d[0]:"",m=Object(o.isArray)(r)?r:[];Object(a.useEffect)((function(){var n=Object(o.isObject)(t)?Object(o.omitBy)(t,(function(n,t){return!n||!Object(o.isNumber)(n)&&Object(o.isEmpty)(n)||m.includes(t)})):{},e=i.a.stringify(n,{arrayFormat:"comma",encode:!1}),a=Object(o.isEmpty)(n);e&&!a?p.replace("/dashboard/".concat(s,"?").concat(e)):p.replace("/dashboard/".concat(s))}),[t])}},50:function(n,t,e){"use strict";var a=e(0),r=e.n(a);t.a=function(n){return function(t){var e="ltr";return"undefined"!==typeof window&&(e=document.getElementsByTagName("html")[0].getAttribute("dir")),r.a.createElement(n,Object.assign({},t,{"data-rtl":e}))}}},61:function(n,t,e){"use strict";e(78);var a=e(63),r=e(50),i=e(5),o=e(4),l=e(56),c=e(81);function p(){var n=Object(i.a)(["\n  &.ant-btn-group {\n    .ant-btn {\n      margin: 0;\n      margin-right: 0;\n      display: inline-block;\n      margin-bottom: 0;\n      font-weight: 500;\n      text-align: center;\n      -ms-touch-action: manipulation;\n      touch-action: manipulation;\n      cursor: pointer;\n      background-image: none;\n      border: 1px solid transparent;\n      border-color: ",";\n      white-space: nowrap;\n      line-height: 1.5;\n      padding: 0 8px;\n      font-size: 14px;\n      border-radius: 0;\n      height: 36px;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      position: relative;\n      ",";\n\n      &:hover {\n        border-color: ",";\n      }\n\n      // &.ant-btn-dashed {\n      //   border-style: dashed;\n\n      //   &:hover {\n      //     border-color: ",";\n      //   }\n      // }\n\n      &.ant-btn-primary {\n        border-color: ",";\n\n        &:hover {\n          border-color: ",";\n        }\n      }\n    }\n\n    > .ant-btn:first-child:not(:last-child) {\n      border-radius: ",";\n    }\n\n    > .ant-btn:last-child:not(:first-child) {\n      border-radius: ",";\n    }\n\n    .ant-btn-primary:last-child:not(:first-child),\n    .ant-btn-primary + .ant-btn-primary {\n      border-left-color: ",";\n      border-right-color: ",";\n    }\n\n    .ant-btn-primary:first-child:not(:last-child) {\n      border-left-color: ",";\n      border-right-color: ",";\n    }\n\n    .ant-btn + .ant-btn,\n    + .ant-btn {\n      margin-left: "," !important;\n      margin-right: "," !important;\n    }\n\n    &.ant-btn-group-lg {\n      > .ant-btn {\n        padding: 0 35px;\n        font-size: 14px;\n        height: 42px;\n      }\n    }\n\n    &.ant-btn-group-sm {\n      > .ant-btn {\n        padding: 0 15px;\n        height: 28px;\n        font-size: 12px;\n      }\n    }\n  }\n\n  &.ant-btn-group + &.ant-btn-group {\n    margin-left: "," !important;\n    margin-right: "," !important;\n  }\n"]);return p=function(){return n},n}function d(){var n=Object(i.a)(["\n  &.ant-btn {\n    display: inline-block;\n    margin-bottom: 0;\n    font-weight: 500;\n    text-align: center;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    background-image: none;\n    // border: 1px solid transparent;\n    white-space: nowrap;\n    line-height: 1.5;\n    padding: 0 25px;\n    font-size: 14px;\n    border-radius: 4px;\n    height: 36px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    position: relative;\n    // color: ",";\n    // border-color: ",";\n    ",";\n\n    // &:hover {\n    //   border-color: ",";\n    //   color: ",";\n    // }\n    // &:focus {\n    //   color: ",";\n    //   border-color: ",";\n    // }\n\n\n    > .anticon + span,\n    > span + .anticon {\n      margin: ",";\n    }\n\n    .anticon-right {\n      transform: ",";\n    }\n\n    .anticon-left {\n      transform: ",";\n    }\n\n    &.ant-btn-primary {\n      // background-color: ",";\n      // border-color: ",";\n\n      // &:hover {\n      //   background-color: ",";\n      //   border-color: ",";\n      //   color: #fff;\n      // }\n    }\n\n    &.ant-btn-sm {\n      padding: 0 15px;\n      height: 28px;\n      font-size: 12px;\n\n      &.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline) {\n        padding: ",";\n        .anticon {\n          margin: ",";\n        }\n      }\n    }\n\n    &.ant-btn-lg {\n      padding: 0 35px;\n      font-size: 14px;\n      height: 42px;\n    }\n\n    &.ant-btn-primary {\n      color: #ffffff;\n    }\n\n    // &.ant-btn-dashed {\n    //   border-style: dashed;\n    //   border-color: ",";\n\n    //   &:hover {\n    //     color: ",";\n    //     border-color: ",";\n    //   }\n    // }\n\n    &.ant-btn-danger {\n      background-color: ",";\n      border-color: ",";\n      color: #ffffff;\n\n      &:hover {\n        background-color: ",";\n        border-color: ",";\n      }\n\n      &.ant-btn-background-ghost {\n        color: ",";\n        background-color: transparent;\n        border-color: ",";\n\n        &:hover {\n          color: ",";\n          border-color: ",";\n        }\n      }\n    }\n\n    &.ant-btn-circle,\n    &.ant-btn-circle-outline {\n      width: 35px;\n      padding: 0;\n      font-size: 14px;\n      border-radius: 50%;\n      height: 35px;\n\n      &.ant-btn-sm {\n        padding: 0;\n        height: 28px;\n        width: 28px;\n        font-size: 12px;\n      }\n\n      &.ant-btn-lg {\n        padding: 0;\n        font-size: 14px;\n        height: 42px;\n        width: 42px;\n      }\n    }\n\n    &.ant-btn.disabled,\n    &.ant-btn[disabled],\n    &.ant-btn.disabled:hover,\n    &.ant-btn[disabled]:hover,\n    &.ant-btn.disabled:focus,\n    &.ant-btn[disabled]:focus,\n    &.ant-btn.disabled:active,\n    &.ant-btn[disabled]:active,\n    &.ant-btn.disabled.active,\n    &.ant-btn[disabled].active {\n      color: ",";\n      background-color: #f7f7f7;\n      border-color: ",";\n      cursor: not-allowed;\n    }\n\n    &.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline)\n      .anticon {\n      margin: ",";\n    }\n\n    &.isoButton {\n      display: inline-block;\n      margin-bottom: 0;\n      font-weight: 500;\n      text-align: center;\n      -ms-touch-action: manipulation;\n      touch-action: manipulation;\n      cursor: pointer;\n      background-image: none;\n      border: 0;\n      white-space: nowrap;\n      line-height: 1.5;\n      padding: 0 25px;\n      font-size: 13px;\n      border-radius: 4px;\n      height: 35px;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      position: relative;\n      color: #ffffff;\n      background-color: ",";\n      ",";\n\n      &:hover {\n        background-color: ",";\n      }\n\n      &.isoBtnSm {\n        padding: 0 15px;\n        height: 28px;\n        font-size: 12px;\n      }\n\n      &.isoBtnLg {\n        padding: 0 35px;\n        font-size: 14px;\n        height: 42px;\n      }\n    }\n\n    &.regularTxt {\n      color: ",";\n      padding: 0px !important;\n    }\n    \n  }\n\n  + .ant-btn-group {\n    margin-left: "," !important;\n    margin-right: "," !important;\n  }\n"]);return d=function(){return n},n}var s,m=(s=a.a,Object(o.d)(s)(d(),Object(l.palette)("text",1),Object(l.palette)("border",0),Object(c.c)(),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),(function(n){return"rtl"===n["data-rtl"]?"0 0.5em 0 0":"0 0 0 0.5em"}),(function(n){return"rtl"===n["data-rtl"]?"rotate(180deg)":"rotate(0)"}),(function(n){return"rtl"===n["data-rtl"]?"rotate(180deg)":"rotate(0)"}),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",10),Object(l.palette)("primary",10),(function(n){return"rtl"===n["data-rtl"]?"0 24px 0 15px":"0 15px 0 24px"}),(function(n){return"rtl"===n["data-rtl"]?"0 -17px 0 0":"0 0 0 -17px"}),Object(l.palette)("border",1),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("error",0),Object(l.palette)("error",0),Object(l.palette)("error",2),Object(l.palette)("error",2),Object(l.palette)("error",0),Object(l.palette)("error",0),Object(l.palette)("error",2),Object(l.palette)("error",2),Object(l.palette)("grayscale",2),Object(l.palette)("border",0),(function(n){return"rtl"===n["data-rtl"]?"0 -14px 0 0":"0 0 0 -14px"}),Object(l.palette)("primary",0),Object(c.c)(),Object(l.palette)("primary",2),Object(l.palette)("text",3),(function(n){return"rtl"===n["data-rtl"]?"0":"-1px"}),(function(n){return"rtl"===n["data-rtl"]?"-1px":"0"}))),b=Object(r.a)(m),u=function(n){return Object(o.d)(n)(p(),Object(l.palette)("border",1),Object(c.c)(),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",0),Object(l.palette)("primary",10),(function(n){return"rtl"===n["data-rtl"]?"0 4px 4px 0":"4px 0 0 4px"}),(function(n){return"rtl"===n["data-rtl"]?"4px 0 0 4px":"0 4px 4px 0"}),(function(n){return"rtl"===n["data-rtl"]?Object(l.palette)("primary",0):Object(l.palette)("primary",2)}),(function(n){return"rtl"===n["data-rtl"]?Object(l.palette)("primary",2):Object(l.palette)("primary",0)}),(function(n){return"rtl"===n["data-rtl"]?Object(l.palette)("primary",2):Object(l.palette)("primary",0)}),(function(n){return"rtl"===n["data-rtl"]?Object(l.palette)("primary",0):Object(l.palette)("primary",2)}),(function(n){return"rtl"===n["data-rtl"]?"0":"-1px"}),(function(n){return"rtl"===n["data-rtl"]?"-1px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"0":"-1px"}),(function(n){return"rtl"===n["data-rtl"]?"-1px":"0"}))}(m.Group);Object(r.a)(u),t.a=b},81:function(n,t,e){"use strict";function a(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.3;return"\n      -webkit-transition: all ".concat(n,"s cubic-bezier(0.215, 0.61, 0.355, 1);\n      -moz-transition: all ").concat(n,"s cubic-bezier(0.215, 0.61, 0.355, 1);\n      -ms-transition: all ").concat(n,"s cubic-bezier(0.215, 0.61, 0.355, 1);\n      -o-transition: all ").concat(n,"s cubic-bezier(0.215, 0.61, 0.355, 1);\n      transition: all ").concat(n,"s cubic-bezier(0.215, 0.61, 0.355, 1);\n  ")}function r(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return"\n      -webkit-border-radius: ".concat(n,";\n      -moz-border-radius: ").concat(n,";\n      -ms-transition: ").concat(n,";\n      -o-border-radius: ").concat(n,";\n      border-radius: ").concat(n,";\n  ")}function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none";return"\n      -webkit-box-shadow: ".concat(n,";\n      -moz-box-shadow: ").concat(n,";\n      box-shadow: ").concat(n,";\n  ")}e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}))}}]);