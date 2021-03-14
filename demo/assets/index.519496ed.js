import{d as e,r as i,o as n,c as o,a as t,F as a,b as A,t as s,e as d,f as p,g as c,h as r}from"./vendor.5a70ca8d.js";!function(e=".",i="__import__"){try{self[i]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),t=e=>{URL.revokeObjectURL(e.src),e.remove()};self[i]=e=>new Promise(((n,a)=>{const A=new URL(e,o);if(self[i].moduleMap[A])return n(self[i].moduleMap[A]);const s=new Blob([`import * as m from '${A}';`,`${i}.moduleMap['${A}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){a(new Error(`Failed to import: ${e}`)),t(d)},onload(){n(self[i].moduleMap[A]),t(d)}});document.head.appendChild(d)})),self[i].moduleMap={}}}("assets/");const m=e({name:"App"});m.render=function(e,t,a,A,s,d){const p=i("router-view");return n(),o(p)};let g;const l={},_=function(e,i){if(!i)return e();if(void 0===g){const e=document.createElement("link").relList;g=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(i.map((e=>{if(e in l)return;l[e]=!0;const i=e.endsWith(".css"),n=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=i?"stylesheet":g,i||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),i?new Promise(((e,i)=>{o.addEventListener("load",e),o.addEventListener("error",i)})):void 0}))).then((()=>e()))};var E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJFBMVEUAAAB0n/Jgg8hwmepmi9Nrkt9df8Fjhs1uluRynO5pj9l4pPpuZQxgAAAAC3RSTlMA+mnwr9g6keb2x9K3PwMAAANHSURBVFjDlZe/b9pAFMcdfpiCl0hpu3hxVHVpFtKxLETdykK7shBVqlSxsLNk68CCOnTJgqouFYsphB/xP1ewv7znu3d3xm8Iuef73Pt557Mn5d1tcpSr395Z0gqTkyznXrHcJXl5WTh/kKjyVDy/FNFLpKwd879jztWfoed/usXol3V+I5uwizCuTDPF2B3A+5zmjTOMi/RpX9HVU92lGUgL1taUX9MC2g38E+obmDAb2Bn0U4uJC1s+ahYTAzgkZUKJEjUYYvA2PLrxBSPfaHt0UG5Qrw5KvIrEM5bHgzLK5uf2Q0TW94bItpkDB5RkNaSe7KpAcFA9IEQSWuTF4b9Y5gi9wMKdIvNEOc0cetX1ap8zp6jcWo+hi5pprN0sLm6uKmwpIXCHj7k2cMXXg+jhQSOh4BEs8IG2VUMsMEJieCGULNAa8OTrIzsEpxB2VY26hTJXyACb4CdztbXxiwg4CrQ2fjlJO0q3uUBTJU030HbYI/YJaykNuwBOdqW3AeUVK18isq6hjaMMXCllaKNBPF3QFFWlEFj5gpXKYjNkXgCBabMPsvhqOjBUAquHybKPNGWArwPIRIyOoK4jpRMY0KFdDMAATJwJBABiAViCHgB4kkHLtCL1u28dFMWW1nl2AiwxfMCWEYWTrQEP4YNsDdl8iA9/W8bm63EmYg0IjO094m21VgDeQBPeQHKLan83cos284eAAlRzh8DMfMzEChDgiboZme8YgBX7wBLyidhXXeIzdK+8WbFQJf0hILUZmQ6ggN+5CgDBcS9eKHagyTHznK0DkGfogjQCQAhrw2vXCcTyqhE7XYpowB0ugA9jaGrwSPVprgMHWf7wLOKHzzLo4puxBCg9xQDdgtpnAvd0a7JOxP3iJxJa+QgjM/v8SgI5jf8eB892YKIBuG4MXdd7ALyGK+xAAGia4g8aRWkPIjzeVe80INC2s7wFXVN1KWwbgIRc7/taJmxVMz+yAw1YkIAzBjcgs1QAyDq8LgBkpSM3IHtpXQDIbu27AWli6Qbkp1CyOR/A98O4BFDHWSQAd9ztEoCfxj08G8B5tHUD8vM26ZYAWviwFoAz7l0ZwA9LAl5TcSlEs7hkkQ/6Xt0j/wG8np5SDq4EQAAAAABJRU5ErkJggg==",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJ1BMVEUAAAB9p/eCntV+lcOCpeqBm85/mMmCpOWCoNqBpu6DouCAp/J4pPoCEz3vAAAADHRSTlMA/q868JFp5sf22Pq3icc7AAABfElEQVRYw+yVu0oDQRiFfyPeooVoUIQtIpZaqFgo2ATBKoUPYKGlYKG9hWBrofgCPoCF+ATGW0T+h3L2ZIezAzmE6XOK7JnzkX8uOztjlWY7hfdat5ZKo00f6C1JNVr3qCWjNDpw6omxRFNe14lRAp0m6TcyhViltWG7HdYRiFWOYS9YR6PJ0q3YQOdlYxtWornw/LKobmg9wEm0FZ7PFtUMrQ84iYqqCuv0YBRquPuiUROh3YYTaD78nhk1HdqvcAItoNu043cYge7df5L00v0XRqBuNU6ONNYVqHC/StKZuEwCcVGMawMjELdCbT/ACBQxFROBMv+QP6TsSWcva/aLy98ah0N22CeMQLnbO/sDwlr0jbrhJypQ7iGAjvqswmEohNNquQp3eJBphPPwCOFeclQq1PRSq21rXMPxclLoxev6M0ig/AuF84E4R43yL0XGDEej/ceQrd2lYYrGGut/1AWjrcrRVuVoq3K0VTnaqhxtVY62KkdyqxIA1YQ8GZWiH3YAAAAASUVORK5CYII=",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJ1BMVEUAAAB0n/Jjhs1wmepdf8F2ofVgg8hrkt9uluRmi9Npj9lynO54pPrdM8LLAAAADHRSTlMA+pHwOv1p2Oavx/Za7Wu8AAAB/0lEQVRYw+2YsU7CUBSGKyBqZHBgZOgDODCocWCAuDqYsHZgNXHwAdicTJidHHRn8BGoWMDkfygt0py0f+75OzD6L3Tgy3d6em5ubyPLDUq5iEQaqCQWwG0V+BLAoAosBQDK3oCjxP7BfPYY6A4BwW5NFbAmgQewoqOBBVXkAFxTAiyH4ba2BkBWbX/few5NAFVg6I1GCwz4wxcAwuPdQ0qAu4BG6DKg074ExpP6QCPZDmJcG5hhm01d4AC7nNUEegWwMUAIisQGCEEaN/KfOwOEIP57tCsDfMFnfnEOLA0Qgt1VZoAWRCcADFCCPCVghEq6JQEDvSqQlgRcEigksJsOAiawtvolmYAeHN80CeRosAATF2DB2sZbC3gBaUEaESAEBCgBAUJAgBIQIAQEKAEBUsCAFvDwdX0Bj3fqC3gBISAIAyFBsKSQIHjTvoDbKgQMCIEBQkCAFhigBT5wygIfeCCBAAYkEEBCAgEAeCOBACYkcIA2ABIEANuXSOAAx0BGAg9oAksSeMAhsCGBB3SAbxIIYJU3a14IGKBRWtw/JSgE8jX0lTZeMa0zA2w/8IBBWaABeyP4qAfMi/PYVSQBOxSNn38H1gcs79cvxaUALP/AHoBhFEjo4Nf3gGYO8OE1GD68TiGzplkTWdARXySOuCZdESu0gD+EcPhDyA8E65pf+djXngAAAABJRU5ErkJggg==",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAFVBMVEUAAABwmep0n/Jpj9pjh85vl+V4pPrMnV0iAAAABnRSTlMA5/imRtkzWYE3AAAAkUlEQVRYw+3YOwqAMBCE4bWxtvIE4hE8gIVHsI6vuf8RFExSCMJsF3H+JhDykbQbK7QWVIvFBpBt9/kKdE26wHcFHMUX+d5UX2tnRCOAcIPVqPoMdg5MGQQO1AICHwRs/wbBHr1sCggICAgICAgIFAN2DkwZrBzoM0BHgDS8+sdj8wD3iO/+RHB/U8RmUB1WZied+CXVXNCGEwAAAABJRU5ErkJggg==",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAGFBMVEUAAABjh85NaZ90n/NScaxcfsBuluR4pPo12DsVAAAAB3RSTlMA2Sj9bbj23SUm6gAAANdJREFUWMPt1rEOAiEMBuAe6m5cbtXJ1Y2VR7jNR7hVJcDr69ZcUlr/mBiG/vsXCC1NiS6xdZJPJGTflCQBXDXwEsCsgacAogayAJoaGVAnDhxgQA3c3vAHwr/o70MAGjP2Ow4Bzig4QmD9lAo64r551bqYYKfXza56se8EHxG34EFWDqtyJyNhbq0SkgntlDBm89IX8d3AdwMHvhsMvRsMNzP/D+xHZACViYHdCAyQVmNgN7MAmhoZUCcDg4CCCQO8B9mAU1BwQ0ECQSEM5ISBuvisBmf1G+jRsaBhq2A7AAAAAElFTkSuQmCC",I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJFBMVEUAAACAj66Np9iJrfSFlrmLoMuNreqMpNGJncV4pPqFrPd/qfmpup8zAAAACXRSTlMALeD9d8H40q2eBq/qAAABZklEQVRYw+2YsUrDUBiFTzSi3ULdnFqc6iRubgE3p67iE6hP4CO4SUsKp12qiNAXEHw7Y8A0+bly7r+1cD9op3xQmv+cPzcATh4ZyecUNfk1o5mXtXBPBxWQf9NDiUO6WOOFLio8kLMCUWQTcoENOUIkB+QKJItYISOJ3080SdhFYdgm6apATXbe5mZsBZu8D9TcsGVZBoRTdi4ogKwb3beAMGGHUTOaW2YBodcFl+hHcR4Q2OUVGLBLWAAaBrXw992QhD0TPHfazNJSC3ZatZBtTB6UgFuTOClkF+31Y2ihTxKCrWGrUvXS2lalbj5dlWemW+Xw5Ztee+uqxLA13guIABnsn5uE8NrVgl27VpBr1wpy+Kyg164WuGWH90MSnIL7AUtWpVi7+iFRVqVdu7Iq7dqVVWnW7r4cB5Lwr+A+HrsO4MfkynXEfyYXuKOLyv+aIqeLEr7fVLVJE/SSd/TESL6mwA85jKuBGZe0fwAAAABJRU5ErkJggg==";const b=[{id:"Basic",title:"Basic",content:"Include Icon & Button",icon:B},{id:"View",title:"View",content:"Include Noticebar, Tag, Badge, etc.",icon:I},{id:"Action",title:"Action",content:"Include Modal, Progress, Toast, etc.",icon:E},{id:"Form",title:"Form",content:"Include Input, Radio, Checkbox, etc.",icon:u},{id:"Layout",title:"Layout",content:"Include Flex, List, Accordion, etc.",icon:h},{id:"Navigation",title:"Navigation",content:"Include NavBar, Tabs, Drawer, etc.",icon:x}],w=e({data:()=>({taroLogo:"./assets/logo_onebay.a08244ba.png",list:b}),methods:{gotoPanel(e){this.$router.push(`/pages/panel/index?id=${e.toLowerCase()}`)}}}),V={class:"page page-index"},R={class:"logo"},L=t("div",{class:"page-title"},"onebay UI",-1),C={class:"module-list"},O={class:"module-list__icon"},P={class:"module-list__info"},D={class:"title"},f={class:"content"},T=t("div",{class:"module-list__arrow"},[t("span",{class:"ob-icon ob-icon-chevron-right"})],-1);w.render=function(e,i,d,p,c,r){return n(),o("div",V,[t("div",R,[t("img",{class:"img",src:e.taroLogo},null,8,["src"])]),L,t("div",C,[(n(!0),o(a,null,A(e.list,((i,a)=>(n(),o("div",{key:a,class:"module-list__item",onClick:n=>e.gotoPanel(i.id)},[t("div",O,[t("img",{src:i.icon,class:"img",mode:"widthFix"},null,8,["src"])]),t("div",P,[t("div",D,s(i.title),1),t("div",f,s(i.content),1)]),T],8,["onClick"])))),128))])])};const v={basic:[{id:"Icon",name:"图标"},{id:"Button",name:"按钮"}],view:[{id:"Badge",name:"徽标"},{id:"Divider",name:"Divider"},{id:"NoticeBar",name:"通告栏"},{id:"Tag",name:"标签"},{id:"Timeline",name:"时间轴"},{id:"Swiper",name:"滑块视图容器"},{id:"Load-More",name:"页面提示"},{id:"Steps",name:"Steps"},{id:"Image-Preview",name:"ImagePreview"}],action:[{id:"Action-Sheet",name:"动作面板"},{id:"Activity-Indicator",name:"活动指示器"},{id:"Modal",name:"弹窗"},{id:"Progress",name:"进度条"},{id:"Swipe-Action",name:"滑动操作"},{id:"Message",name:"消息通知"},{id:"Pull-To-Refresh",name:"PullToRefresh"}],form:[{id:"Form",name:"表单"},{id:"Input",name:"输入框"},{id:"Radio",name:"单选框"},{id:"Checkbox",name:"复选框"},{id:"Switch",name:"开关"},{id:"Rate",name:"评分"},{id:"Input-Number",name:"数字输入框"},{id:"Textarea",name:"多行文本框"},{id:"Picker",name:"选择器"},{id:"Slider",name:"滑动条"},{id:"Search-Bar",name:"搜索栏"},{id:"Image-Picker",name:"图片选择器"},{id:"Range",name:"范围选择器"}],layout:[{id:"Flex",name:"弹性布局"},{id:"List",name:"列表"},{id:"Float-Layout",name:"浮动弹层"},{id:"Accordion",name:"手风琴"}],navigation:[{id:"NavBar",name:"导航栏"},{id:"TabBar",name:"标签栏"},{id:"Tabs",name:"标签页"},{id:"Segmented-Control",name:"分段器"},{id:"Pagination",name:"分页器"},{id:"Drawer",name:"抽屉"},{id:"Back-Top",name:"Back Top Button"}]},j={basic:{name:"Basic",icon:B},view:{name:"View",icon:I},action:{name:"Action",icon:E},form:{name:"Form",icon:u},layout:{name:"Layout",icon:h},navigation:{name:"Navigation",icon:x}};const M=e({data:()=>({list:v,currentId:"",title:"",icon:"",itemList:[]}),mounted(){const{id:e}=this.$route.query;if(e){const i=e;this.itemList=v[i]||[],this.title=j[i]&&j[i].name||"",this.icon=j[i]&&j[i].icon||"",this.currentId=i}},methods:{gotoComponent(e,i){this.$router.push(`/pages/${i.toLowerCase()}/${e.toLowerCase()}/index`)}}}),U={class:"page"},Q={class:"panel-header"},y={class:"panel-header__icon"},S={key:1,class:"ob-icon ob-icon-list"},F={class:"panel-header__title"},k={class:"panel-body"},N={class:"component-list"},Y={class:"name"},G=t("span",{class:"ob-icon ob-icon-chevron-right"},null,-1);M.render=function(e,i,d,p,c,r){return n(),o("div",U,[t("div",Q,[t("div",y,[e.icon?(n(),o("img",{key:0,src:e.icon,class:"img"},null,8,["src"])):(n(),o("span",S))]),t("div",F,s(e.title),1)]),t("div",k,[t("div",N,[(n(!0),o(a,null,A(e.itemList,((i,a)=>(n(),o("div",{key:a,class:"component-list__item",onClick:n=>e.gotoComponent(i.id,e.currentId)},[t("span",Y,s(`${i.id} ${i.name}`),1),G],8,["onClick"])))),128))])])])},_((()=>__import__("./main.eb442544.js")),["./assets/main.eb442544.js","./assets/index.35996694.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js","./assets/DocsHeader.350642af.js","./assets/DocsHeader.ef48a98e.css"]);const q=[{path:"/",component:w},{path:"/pages/panel/index",component:M},{path:"/pages/action/action-sheet/index",component:()=>_((()=>__import__("./index.2726f7be.js")),["./assets/index.2726f7be.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/action/activity-indicator/index",component:()=>_((()=>__import__("./index.a3826da3.js")),["./assets/index.a3826da3.js","./assets/index.6c1dcdac.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/view/badge/index",component:()=>_((()=>__import__("./index.b344e854.js")),["./assets/index.b344e854.js","./assets/index.b80234fd.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/basic/button/index",component:()=>_((()=>__import__("./index.89d2123b.js")),["./assets/index.89d2123b.js","./assets/index.35996694.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/basic/icon/index",component:()=>_((()=>__import__("./index.aadbc55b.js")),["./assets/index.aadbc55b.js","./assets/index.a48cca81.js","./assets/index.2e2f2d54.css","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/checkbox/index",component:()=>_((()=>__import__("./index.dd295a56.js")),["./assets/index.dd295a56.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/layout/accordion/index",component:()=>_((()=>__import__("./index.23b6888c.js")),["./assets/index.23b6888c.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/layout/list/index",component:()=>_((()=>__import__("./index.7c9245f5.js")),["./assets/index.7c9245f5.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/view/divider/index",component:()=>_((()=>__import__("./index.34c00390.js")),["./assets/index.34c00390.js","./assets/index.edbce111.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/navigation/drawer/index",component:()=>_((()=>__import__("./index.05a9e4f3.js")),["./assets/index.05a9e4f3.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js","./assets/index.75c6a0fb.js","./assets/index.e3c68c3c.css"])},{path:"/pages/layout/float-layout/index",component:()=>_((()=>__import__("./index.1aeeb711.js")),["./assets/index.1aeeb711.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/input/index",component:()=>_((()=>__import__("./index.b4348c3d.js")),["./assets/index.b4348c3d.js","./assets/verification_code.7bb1fd9b.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/action/message/index",component:()=>_((()=>__import__("./index.ab72938c.js")),["./assets/index.ab72938c.js","./assets/main.324ef9b6.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/action/modal/index",component:()=>_((()=>__import__("./index.25f223ec.js")),["./assets/index.25f223ec.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/navigation/navbar/index",component:()=>_((()=>__import__("./index.fb2bbc7b.js")),["./assets/index.fb2bbc7b.js","./assets/index.da2e5193.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/view/noticebar/index",component:()=>_((()=>__import__("./index.1b7e8bc3.js")),["./assets/index.1b7e8bc3.js","./assets/index.edbce111.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/navigation/pagination/index",component:()=>_((()=>__import__("./index.16e2294e.js")),["./assets/index.16e2294e.js","./assets/index.6beb2079.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/action/progress/index",component:()=>_((()=>__import__("./index.89bd8c57.js")),["./assets/index.89bd8c57.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/radio/index",component:()=>_((()=>__import__("./index.a969b3a7.js")),["./assets/index.a969b3a7.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/rate/index",component:()=>_((()=>__import__("./index.fb65d47d.js")),["./assets/index.fb65d47d.js","./assets/index.09afb7fd.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/navigation/segmented-control/index",component:()=>_((()=>__import__("./index.fb73af71.js")),["./assets/index.fb73af71.js","./assets/index.cdb114e8.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/slider/index",component:()=>_((()=>__import__("./index.c91a860f.js")),["./assets/index.c91a860f.js","./assets/index.0002c01f.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/view/steps/index",component:()=>_((()=>__import__("./index.ec86c0e8.js")),["./assets/index.ec86c0e8.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/view/tag/index",component:()=>_((()=>__import__("./index.9665b5cc.js")),["./assets/index.9665b5cc.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/navigation/tabbar/index",component:()=>_((()=>__import__("./index.0bc58832.js")),["./assets/index.0bc58832.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/view/swiper/index",component:()=>_((()=>__import__("./index.9d966061.js")),["./assets/index.9d966061.js","./assets/index.df757799.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/picker/index",component:()=>_((()=>__import__("./index.b0484579.js")),["./assets/index.b0484579.js","./assets/index.2583fd5b.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/input-number/index",component:()=>_((()=>__import__("./index.1797a257.js")),["./assets/index.1797a257.js","./assets/index.b4d38c6f.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/switch/index",component:()=>_((()=>__import__("./index.18777b45.js")),["./assets/index.18777b45.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/textarea/index",component:()=>_((()=>__import__("./index.d92bd869.js")),["./assets/index.d92bd869.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/range/index",component:()=>_((()=>__import__("./index.fe8bd414.js")),["./assets/index.fe8bd414.js","./assets/index.10e4e5e1.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/image-picker/index",component:()=>_((()=>__import__("./index.f44db25e.js")),["./assets/index.f44db25e.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/form/search-bar/index",component:()=>_((()=>__import__("./index.54e76b21.js")),["./assets/index.54e76b21.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/view/image-preview/index",component:()=>_((()=>__import__("./index.b6ac2b0d.js")),["./assets/index.b6ac2b0d.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/layout/flex/index",component:()=>_((()=>__import__("./index.6886e01b.js")),["./assets/index.6886e01b.js","./assets/index.a7c0ae16.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/navigation/back-top/index",component:()=>_((()=>__import__("./index.d5833413.js")),["./assets/index.d5833413.js","./assets/index.17749fd7.css","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/view/timeline/index",component:()=>_((()=>__import__("./index.5c1badb6.js")),["./assets/index.5c1badb6.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])},{path:"/pages/action/pull-to-refresh/index",component:()=>_((()=>__import__("./index.4e79521b.js")),["./assets/index.4e79521b.js","./assets/index.ff1bd30d.js","./assets/vendor.5a70ca8d.js"])}],W=c({history:"undefined"==typeof window?d():p(),routes:q});const J=e({props:{title:{type:String,default:"标题"}}}),K={class:"doc-header"},H={class:"doc-header__title"};J.render=function(e,i,a,A,d,p){return n(),o("div",K,[t("div",H,s(e.title),1)])};const X=r(m);X.component("DocsHeader",J),X.use(W),X.mount("#app");