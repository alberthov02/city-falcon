(this["webpackJsonpcity-falcon"]=this["webpackJsonpcity-falcon"]||[]).push([[0],{10:function(e,t,n){e.exports={root:"Filters_root__3UYN-",buttonsContainer:"Filters_buttonsContainer__3coo7",button:"Filters_button___dKMh",icon:"Filters_icon__1YjN6",filtersContainer:"Filters_filtersContainer__2nl1V",selectContainer:"Filters_selectContainer__3AsM9",select:"Filters_select__c8hXj",label:"Filters_label__ttszC",reset:"Filters_reset__1tAEZ"}},13:function(e,t,n){e.exports={container:"AssessmentField_container__1khXs",button:"AssessmentField_button__B0nmH",icon:"AssessmentField_icon__3qUHJ"}},21:function(e,t,n){e.exports={storiesContainer:"Stories_storiesContainer__2uukt",loading:"Stories_loading__2ktu1",spin:"Stories_spin__39aTV"}},28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(22),s=n.n(c),o=(n(28),n(5)),l=n(7),i=n.p+"static/media/logo-desktop.5cd3980a.svg",u=n.p+"static/media/user.a2446033.png",m=n(12),j=n.n(m),b=n(16),_=n(3),d=n(15),f=n(23),O=n.n(f),h=n(11),g=n(13),p=n.n(g),x=n(1);function v(e){var t=e.show,n=[{name:"Like",icon:Object(x.jsx)(h.d,{className:p.a.icon}),onclick:function(){console.log("Like")}},{name:"Dislike",icon:Object(x.jsx)(h.c,{className:p.a.icon}),onclick:function(){console.log("Dislike")}},{name:"Bookmark",icon:Object(x.jsx)(h.b,{className:p.a.icon}),onclick:function(){console.log("Bookmark")}}];return t?Object(x.jsx)("div",{className:p.a.container,children:n.map((function(e){return Object(x.jsxs)("button",{className:p.a.button,onClick:e.onclick,children:[e.icon,e.name]},e.name)}))}):null}function N(e){var t=120*(e/100);return"hsl(".concat(t>=60?t+20:t<10?0:t-10,", 100%, 50%)")}var I=n(4),y=n.n(I);function F(e){var t,n,r=e.story,c=Object(a.useState)(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],m=Object(a.useRef)(null),j={href:r.url,target:"_blank"};return Object(x.jsxs)("div",{className:y.a.root,children:[Object(x.jsxs)("div",{className:y.a.containerStory,children:[Object(x.jsx)("img",{ref:m,className:(null===(t=r.imageUrls)||void 0===t?void 0:t[0])?y.a.storyImage:y.a.storyImageNull,style:{height:i?m.current.getBoundingClientRect().height:null},src:null===(n=r.imageUrls)||void 0===n?void 0:n[0],alt:""}),Object(x.jsxs)("div",{className:y.a.content,children:[Object(x.jsxs)("div",{className:y.a.storyContent,children:[Object(x.jsx)("a",Object(_.a)(Object(_.a)({},j),{},{children:Object(x.jsx)("h2",{className:y.a.storyTitle,children:r.title})})),i?Object(x.jsx)("div",{className:y.a.description,children:r.description}):null,Object(x.jsxs)("div",{className:y.a.authorContainer,children:[Object(x.jsx)("img",{className:y.a.authorImage,src:r.domain_cached_logo_url,alt:""}),Object(x.jsx)("p",{className:y.a.authorInfo,children:r.domain_name}),Object(x.jsx)("p",{className:y.a.authorInfo,children:O()(r.publishTime).fromNow(!0).split(" ").map((function(e,t){return 1===t?e.slice(0,1):e})).join(" ")})]})]}),Object(x.jsxs)("div",{className:y.a.toolSection,children:[Object(x.jsx)("div",{className:y.a.percent,style:{borderColor:N(r.score),color:N(r.score)},children:"".concat(r.score,"%")}),Object(x.jsx)("button",{className:y.a.arrowButton,onClick:function(e){e.preventDefault(),u((function(e){return!e}))},children:i?Object(x.jsx)(l.f,{className:y.a.arrowIcon}):Object(x.jsx)(l.b,{className:y.a.arrowIcon})})]})]})]}),Object(x.jsx)(v,{show:i})]})}function C(e){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cf-endpoint-proxy.herokuapp.com/webapi/v1/stories?limit=".concat(t.limit,"&order_by=").concat(t.order,"&languages=").concat(t.language));case 2:return n=e.sent,e.next=5,n.json();case 5:if(!(a=e.sent).error){e.next=8;break}return e.abrupt("return",a);case 8:return e.abrupt("return",a.stories);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=n(21),w=n.n(S);function L(e){var t=e.refresh,n=e.setRefresh,r=e.form,c=e.setForm,s=e.data,i=e.setData,u=Object(a.useState)(!0),m=Object(o.a)(u,2),f=m[0],O=m[1],h=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(Object(_.a)(Object(_.a)({},r),{},{limit:10,language:null===(t=r.language)||void 0===t?void 0:t.filter((function(e){return"all"!==e}))}));case 2:a=e.sent,c((function(e){return Object(_.a)(Object(_.a)({},e),{},{limit:e.limit+10,isFirstRun:!1})})),i((function(e){return[].concat(Object(b.a)(e),Object(b.a)(a))})),O(!1),n(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(j.a.mark((function e(){var t,a,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(Object(_.a)(Object(_.a)({},r),{},{language:null===(t=r.language)||void 0===t?void 0:t.filter((function(e){return"all"!==e}))}));case 2:if(!(a=e.sent).error){e.next=12;break}return window.scrollTo(0,0),c((function(e){return Object(_.a)(Object(_.a)({},e),{},{limit:10})})),e.next=8,C(Object(_.a)(Object(_.a)({},r),{},{limit:10,language:null===(s=r.language)||void 0===s?void 0:s.filter((function(e){return"all"!==e}))}));case 8:o=e.sent,i(o),e.next=13;break;case 12:i(a);case 13:n(!1),O(!1);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f&&h()}),[f]),Object(a.useEffect)((function(){t&&g()}),[t]),Object(a.useEffect)((function(){var e=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight&&O(!0)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(x.jsxs)("div",{className:w.a.storiesContainer,children:[s.map((function(e,t){return Object(x.jsx)(F,{story:e},e.uuid+t)})),f||t?Object(x.jsx)(l.c,{className:w.a.loading}):null]})}var A=n(19),E=n(8),B=n.n(E),T=[{name:"all",label:"Select / Unselect All"},{name:"en",label:"English"},{name:"de",label:"German"},{name:"zh",label:"Chinese"},{name:"it",label:"Italian"}];function R(e){var t=e.form,n=e.setForm,r=Object(a.useState)(!1),c=Object(o.a)(r,2),s=c[0],l=c[1],i=function(){l(!s)};Object(a.useEffect)((function(){var e=function(e){"language"!==e.target.id&&l(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]);var u=function(e){"all"===e.target.name?e.target.checked?n(Object(_.a)(Object(_.a)({},t),{},{language:T.map((function(e){return e.name}))})):n(Object(_.a)(Object(_.a)({},t),{},{language:[]})):e.target.checked?n(Object(_.a)(Object(_.a)({},t),{},{language:[].concat(Object(b.a)(t.language),[e.target.name])})):n(Object(_.a)(Object(_.a)({},t),{},{language:t.language.filter((function(t){return t!==e.target.name&&"all"!==t}))}))};return Object(x.jsxs)("div",{className:B.a.multiSelect,children:[Object(x.jsxs)("div",{className:B.a.selectBox,onClick:i,children:[Object(x.jsxs)("div",{id:"language",className:B.a.select,children:[t.language.filter((function(e){return"all"!==e})).join(", "),Object(x.jsx)(A.a,{className:B.a.arrow})]}),Object(x.jsx)("label",{className:B.a.label,htmlFor:"language",children:"Languages"})]}),Object(x.jsx)("div",{className:B.a.modal,style:{display:s?"grid":"none"},onClick:i,children:Object(x.jsx)("div",{className:B.a.modalContent,children:T.map((function(e){return Object(x.jsxs)("label",{htmlFor:e.name,className:B.a.leb,onClick:function(e){return e.stopPropagation()},children:[Object(x.jsx)("input",{type:"checkbox",id:e.name,name:e.name,onChange:u,checked:t.language.some((function(t){return t===e.name})),onClick:function(e){return e.stopPropagation()}}),e.label]},e.name)}))})})]})}var P=n(18),U=n(9),W=n.n(U);function D(e){var t=e.form,n=e.setForm,r=e.options,c=e.label,s=e.formKey,l=Object(a.useState)(!1),i=Object(o.a)(l,2),u=i[0],m=i[1],j=function(){m(!u)};Object(a.useEffect)((function(){var e=function(e){e.target.id!==c&&m(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]);var b=function(e,a){n(Object(_.a)(Object(_.a)({},t),{},Object(P.a)({},s,a)))};return Object(x.jsxs)("div",{className:W.a.multiSelect,children:[Object(x.jsxs)("div",{className:W.a.selectBox,onClick:j,children:[Object(x.jsxs)("div",{id:c,className:W.a.select,children:[r.find((function(e){return e.value===t[s]})).label,Object(x.jsx)(A.a,{className:W.a.arrow})]}),Object(x.jsx)("label",{className:W.a.label,htmlFor:c,children:c})]}),Object(x.jsx)("div",{className:W.a.modal,style:{display:u?"grid":"none"},onClick:j,children:Object(x.jsx)("div",{className:W.a.modalContent,children:r.map((function(e){return Object(x.jsxs)("label",{htmlFor:e.value,className:W.a.leb,onClick:function(t){return b(0,e.value)},children:[Object(x.jsx)("div",{id:e.value,onClick:function(t){return b(0,e.value)}}),e.label]},e.value)}))})})]})}var M=n(10),H=n.n(M);function K(e){var t=e.form,n=e.setForm,r=e.refresh,c=e.setRefresh,s=e.setData,i=Object(a.useState)(!1),u=Object(o.a)(i,2),m=u[0],j=u[1];return Object(x.jsxs)("div",{className:H.a.root,children:[Object(x.jsxs)("div",{className:H.a.buttonsContainer,children:[Object(x.jsxs)("button",{className:H.a.button,onClick:function(){r||(s([]),c(!0))},children:[Object(x.jsx)(l.e,{className:H.a.icon}),Object(x.jsx)("p",{children:"Refresh"})]}),Object(x.jsxs)("button",{className:H.a.button,style:{background:m?"#eee":"#fff"},onClick:function(){j((function(e){return!e}))},children:[Object(x.jsx)(h.a,{className:H.a.icon}),Object(x.jsx)("p",{children:"Filters"})]})]}),m?Object(x.jsxs)("div",{className:H.a.filtersContainer,children:[Object(x.jsx)(D,{form:t,setForm:n,options:[{value:1e4,label:"10 sec"},{value:3e4,label:"30 sec"},{value:6e4,label:"1 min"},{value:6e5,label:"10 min"}],formKey:"refreshTime",label:"Autorefresh"}),Object(x.jsx)(D,{form:t,setForm:n,options:[{value:"top",label:"Top Rated"},{value:"latest",label:"latest"},{value:"retweeted",label:"Most Read"},{value:"read",label:"Popular"}],formKey:"order",label:"Order"}),Object(x.jsx)(R,{form:t,setForm:n}),Object(x.jsx)("button",{className:H.a.reset,onClick:function(){n({refreshTime:6e4,order:"top",language:[],limit:10})},children:"RESET"})]}):null]})}var q=n(6),z=n.n(q);function J(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(o.a)(c,2),m=s[0],j=s[1],b=Object(a.useState)(null),_=Object(o.a)(b,2),d=_[0],f=_[1],O=Object(a.useState)({refreshTime:6e4,order:"top",language:[],limit:10,isFirstRun:!0}),h=Object(o.a)(O,2),g=h[0],p=h[1];return Object(a.useEffect)((function(){g.isFirstRun||j(!0)}),[g.language,g.order]),Object(a.useEffect)((function(){d&&clearInterval(d);var e=setInterval((function(){j(!0)}),g.refreshTime);return f(e),function(){clearInterval(e)}}),[g.refreshTime]),Object(x.jsxs)("div",{className:z.a.app,children:[Object(x.jsx)("header",{className:z.a.headerWrapper,children:Object(x.jsxs)("div",{className:z.a.header,children:[Object(x.jsxs)("div",{className:z.a.menuContainer,children:[Object(x.jsx)(l.d,{className:z.a.menuIcon}),Object(x.jsx)("img",{src:i,className:z.a.logo,alt:"logo"})]}),Object(x.jsxs)("div",{className:z.a.userContainer,children:[Object(x.jsx)("img",{src:u,className:z.a.userImage,alt:"User"}),Object(x.jsx)(l.a,{className:z.a.arrowIcon})]})]})}),Object(x.jsx)("main",{className:z.a.mainWrapper,children:Object(x.jsxs)("div",{className:z.a.main,children:[Object(x.jsx)("h1",{className:z.a.title,children:"Watchlist Name"}),Object(x.jsx)(K,{form:g,setForm:p,refresh:m,setRefresh:j,setData:r}),Object(x.jsx)(L,{refresh:m,setRefresh:j,form:g,setForm:p,data:n,setData:r})]})})]})}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(J,{})}),document.getElementById("root")),V()},4:function(e,t,n){e.exports={root:"StoryItem_root__2f1qu",containerStory:"StoryItem_containerStory__1SKjc",storyImage:"StoryItem_storyImage__2oPnl",storyImageNull:"StoryItem_storyImageNull__u3Ubz",content:"StoryItem_content__3ZFB7",storyContent:"StoryItem_storyContent__1sBeu",storyTitle:"StoryItem_storyTitle__29PjR",authorContainer:"StoryItem_authorContainer__1emru",authorImage:"StoryItem_authorImage__2Zo7X",authorInfo:"StoryItem_authorInfo__16V5W",description:"StoryItem_description__mUOwM",toolSection:"StoryItem_toolSection__1JC7z",percent:"StoryItem_percent__3nIAf",arrowButton:"StoryItem_arrowButton__3O1Pg",arrowIcon:"StoryItem_arrowIcon__FIl0L"}},6:function(e,t,n){e.exports={headerWrapper:"App_headerWrapper__17www",header:"App_header__BhjMM",menuContainer:"App_menuContainer__qtVKu",menuIcon:"App_menuIcon__U1mSU",logo:"App_logo__3Lgxh",userContainer:"App_userContainer__1G4jW",userImage:"App_userImage__dmQ9L",arrowIcon:"App_arrowIcon__3lHM2",mainWrapper:"App_mainWrapper__-gluL",main:"App_main__1SL4l",title:"App_title__fyezq"}},8:function(e,t,n){e.exports={multiSelect:"FilterLang_multiSelect__2fDE1",selectBox:"FilterLang_selectBox__Vbm2G",select:"FilterLang_select__i44PQ",label:"FilterLang_label__1o-Mf",overSelect:"FilterLang_overSelect__1yPfa",selectContainer:"FilterLang_selectContainer__rnl30",modal:"FilterLang_modal__wrETy",modalContent:"FilterLang_modalContent__2Sf9S",checkboxes:"FilterLang_checkboxes__1o5sy",leb:"FilterLang_leb__TwAiq",arrow:"FilterLang_arrow__2IU73"}},9:function(e,t,n){e.exports={multiSelect:"FilterItem_multiSelect__3AP-l",selectBox:"FilterItem_selectBox__2aCOE",select:"FilterItem_select__2gRPG",label:"FilterItem_label__3xJpP",overSelect:"FilterItem_overSelect__1a7ZH",selectContainer:"FilterItem_selectContainer__2e1Wn",modal:"FilterItem_modal__3hDPB",modalContent:"FilterItem_modalContent__2-Qon",checkboxes:"FilterItem_checkboxes__38PRW",leb:"FilterItem_leb__2ar12",arrow:"FilterItem_arrow__1LXul"}}},[[32,1,2]]]);
//# sourceMappingURL=main.9a508f51.chunk.js.map