import{d as e,r as n,o as i,c as o,a,F as t,b as A,t as d,e as s,f as p,g as c,h as m}from"./vendor.fec48b8d.js";!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(i){const o=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((i,t)=>{const A=new URL(e,o);if(self[n].moduleMap[A])return i(self[n].moduleMap[A]);const d=new Blob([`import * as m from '${A}';`,`${n}.moduleMap['${A}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){t(new Error(`Failed to import: ${e}`)),a(s)},onload(){i(self[n].moduleMap[A]),a(s)}});document.head.appendChild(s)})),self[n].moduleMap={}}}("assets/");const r=e({name:"App"});r.render=function(e,a,t,A,d,s){const p=n("router-view");return i(),o(p)};let g;const l={},_=function(e,n){if(!n)return e();if(void 0===g){const e=document.createElement("link").relList;g=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(n.map((e=>{if(e in l)return;l[e]=!0;const n=e.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const o=document.createElement("link");return o.rel=n?"stylesheet":g,n||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),n?new Promise(((e,n)=>{o.addEventListener("load",e),o.addEventListener("error",n)})):void 0}))).then((()=>e()))};var E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJFBMVEUAAAB0n/Jgg8hwmepmi9Nrkt9df8Fjhs1uluRynO5pj9l4pPpuZQxgAAAAC3RSTlMA+mnwr9g6keb2x9K3PwMAAANHSURBVFjDlZe/b9pAFMcdfpiCl0hpu3hxVHVpFtKxLETdykK7shBVqlSxsLNk68CCOnTJgqouFYsphB/xP1ewv7znu3d3xm8Iuef73Pt557Mn5d1tcpSr395Z0gqTkyznXrHcJXl5WTh/kKjyVDy/FNFLpKwd879jztWfoed/usXol3V+I5uwizCuTDPF2B3A+5zmjTOMi/RpX9HVU92lGUgL1taUX9MC2g38E+obmDAb2Bn0U4uJC1s+ahYTAzgkZUKJEjUYYvA2PLrxBSPfaHt0UG5Qrw5KvIrEM5bHgzLK5uf2Q0TW94bItpkDB5RkNaSe7KpAcFA9IEQSWuTF4b9Y5gi9wMKdIvNEOc0cetX1ap8zp6jcWo+hi5pprN0sLm6uKmwpIXCHj7k2cMXXg+jhQSOh4BEs8IG2VUMsMEJieCGULNAa8OTrIzsEpxB2VY26hTJXyACb4CdztbXxiwg4CrQ2fjlJO0q3uUBTJU030HbYI/YJaykNuwBOdqW3AeUVK18isq6hjaMMXCllaKNBPF3QFFWlEFj5gpXKYjNkXgCBabMPsvhqOjBUAquHybKPNGWArwPIRIyOoK4jpRMY0KFdDMAATJwJBABiAViCHgB4kkHLtCL1u28dFMWW1nl2AiwxfMCWEYWTrQEP4YNsDdl8iA9/W8bm63EmYg0IjO094m21VgDeQBPeQHKLan83cos284eAAlRzh8DMfMzEChDgiboZme8YgBX7wBLyidhXXeIzdK+8WbFQJf0hILUZmQ6ggN+5CgDBcS9eKHagyTHznK0DkGfogjQCQAhrw2vXCcTyqhE7XYpowB0ugA9jaGrwSPVprgMHWf7wLOKHzzLo4puxBCg9xQDdgtpnAvd0a7JOxP3iJxJa+QgjM/v8SgI5jf8eB892YKIBuG4MXdd7ALyGK+xAAGia4g8aRWkPIjzeVe80INC2s7wFXVN1KWwbgIRc7/taJmxVMz+yAw1YkIAzBjcgs1QAyDq8LgBkpSM3IHtpXQDIbu27AWli6Qbkp1CyOR/A98O4BFDHWSQAd9ztEoCfxj08G8B5tHUD8vM26ZYAWviwFoAz7l0ZwA9LAl5TcSlEs7hkkQ/6Xt0j/wG8np5SDq4EQAAAAABJRU5ErkJggg==",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJ1BMVEUAAAB9p/eCntV+lcOCpeqBm85/mMmCpOWCoNqBpu6DouCAp/J4pPoCEz3vAAAADHRSTlMA/q868JFp5sf22Pq3icc7AAABfElEQVRYw+yVu0oDQRiFfyPeooVoUIQtIpZaqFgo2ATBKoUPYKGlYKG9hWBrofgCPoCF+ATGW0T+h3L2ZIezAzmE6XOK7JnzkX8uOztjlWY7hfdat5ZKo00f6C1JNVr3qCWjNDpw6omxRFNe14lRAp0m6TcyhViltWG7HdYRiFWOYS9YR6PJ0q3YQOdlYxtWornw/LKobmg9wEm0FZ7PFtUMrQ84iYqqCuv0YBRquPuiUROh3YYTaD78nhk1HdqvcAItoNu043cYge7df5L00v0XRqBuNU6ONNYVqHC/StKZuEwCcVGMawMjELdCbT/ACBQxFROBMv+QP6TsSWcva/aLy98ah0N22CeMQLnbO/sDwlr0jbrhJypQ7iGAjvqswmEohNNquQp3eJBphPPwCOFeclQq1PRSq21rXMPxclLoxev6M0ig/AuF84E4R43yL0XGDEej/ceQrd2lYYrGGut/1AWjrcrRVuVoq3K0VTnaqhxtVY62KkdyqxIA1YQ8GZWiH3YAAAAASUVORK5CYII=",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJ1BMVEUAAAB0n/Jjhs1wmepdf8F2ofVgg8hrkt9uluRmi9Npj9lynO54pPrdM8LLAAAADHRSTlMA+pHwOv1p2Oavx/Za7Wu8AAAB/0lEQVRYw+2YsU7CUBSGKyBqZHBgZOgDODCocWCAuDqYsHZgNXHwAdicTJidHHRn8BGoWMDkfygt0py0f+75OzD6L3Tgy3d6em5ubyPLDUq5iEQaqCQWwG0V+BLAoAosBQDK3oCjxP7BfPYY6A4BwW5NFbAmgQewoqOBBVXkAFxTAiyH4ba2BkBWbX/few5NAFVg6I1GCwz4wxcAwuPdQ0qAu4BG6DKg074ExpP6QCPZDmJcG5hhm01d4AC7nNUEegWwMUAIisQGCEEaN/KfOwOEIP57tCsDfMFnfnEOLA0Qgt1VZoAWRCcADFCCPCVghEq6JQEDvSqQlgRcEigksJsOAiawtvolmYAeHN80CeRosAATF2DB2sZbC3gBaUEaESAEBCgBAUJAgBIQIAQEKAEBUsCAFvDwdX0Bj3fqC3gBISAIAyFBsKSQIHjTvoDbKgQMCIEBQkCAFhigBT5wygIfeCCBAAYkEEBCAgEAeCOBACYkcIA2ABIEANuXSOAAx0BGAg9oAksSeMAhsCGBB3SAbxIIYJU3a14IGKBRWtw/JSgE8jX0lTZeMa0zA2w/8IBBWaABeyP4qAfMi/PYVSQBOxSNn38H1gcs79cvxaUALP/AHoBhFEjo4Nf3gGYO8OE1GD68TiGzplkTWdARXySOuCZdESu0gD+EcPhDyA8E65pf+djXngAAAABJRU5ErkJggg==",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAIVBMVEUAAAC6yeifvPWuxO+rw/GOsvmaufeowfK2yOt4pPqIrvq8cth0AAAACXRSTlMALfLB0v344HeUs92fAAAA8UlEQVRYw+2XMQ6CMBSGIcboSIwXcHRzdWRkc/UIOrm6cQZFzNcDmPSWwlRD4aVv0pp+0+sLX2goeemffbJi4xZ+02fLTWr6AKPNJPyHMDsTyGvXP788Esyj7oQ9Cu7dC1BRZ3NUHPod6fZ0gmcR9lnzK7SZhUvoOSzA9OsiVMj7Ggg/6QgEeS45IXzyOUEmCVEIa8sQU0pChU8jCRYfIwmM8XVhUCQhCSphbREYESqUgtUK/KQwVSQhCRNFNL+3RcBoh0CjHDOmjOxykoRRocgCyQEXmkRcaHKxTMTFMnXwU0dLdXjVxmN1ANdF/LaL+G9UV0cKloM0+wAAAABJRU5ErkJggg==",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAFVBMVEUAAABwmep0n/Jpj9pjh85vl+V4pPrMnV0iAAAABnRSTlMA5/imRtkzWYE3AAAAkUlEQVRYw+3YOwqAMBCE4bWxtvIE4hE8gIVHsI6vuf8RFExSCMJsF3H+JhDykbQbK7QWVIvFBpBt9/kKdE26wHcFHMUX+d5UX2tnRCOAcIPVqPoMdg5MGQQO1AICHwRs/wbBHr1sCggICAgICAgIFAN2DkwZrBzoM0BHgDS8+sdj8wD3iO/+RHB/U8RmUB1WZied+CXVXNCGEwAAAABJRU5ErkJggg==",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAGFBMVEUAAABjh85NaZ90n/NScaxcfsBuluR4pPo12DsVAAAAB3RSTlMA2Sj9bbj23SUm6gAAANdJREFUWMPt1rEOAiEMBuAe6m5cbtXJ1Y2VR7jNR7hVJcDr69ZcUlr/mBiG/vsXCC1NiS6xdZJPJGTflCQBXDXwEsCsgacAogayAJoaGVAnDhxgQA3c3vAHwr/o70MAGjP2Ow4Bzig4QmD9lAo64r551bqYYKfXza56se8EHxG34EFWDqtyJyNhbq0SkgntlDBm89IX8d3AdwMHvhsMvRsMNzP/D+xHZACViYHdCAyQVmNgN7MAmhoZUCcDg4CCCQO8B9mAU1BwQ0ECQSEM5ISBuvisBmf1G+jRsaBhq2A7AAAAAElFTkSuQmCC",C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgBAMAAAAQtmoLAAAAJFBMVEUAAACAj66Np9iJrfSFlrmLoMuNreqMpNGJncV4pPqFrPd/qfmpup8zAAAACXRSTlMALeD9d8H40q2eBq/qAAABZklEQVRYw+2YsUrDUBiFTzSi3ULdnFqc6iRubgE3p67iE6hP4CO4SUsKp12qiNAXEHw7Y8A0+bly7r+1cD9op3xQmv+cPzcATh4ZyecUNfk1o5mXtXBPBxWQf9NDiUO6WOOFLio8kLMCUWQTcoENOUIkB+QKJItYISOJ3080SdhFYdgm6apATXbe5mZsBZu8D9TcsGVZBoRTdi4ogKwb3beAMGGHUTOaW2YBodcFl+hHcR4Q2OUVGLBLWAAaBrXw992QhD0TPHfazNJSC3ZatZBtTB6UgFuTOClkF+31Y2ihTxKCrWGrUvXS2lalbj5dlWemW+Xw5Ztee+uqxLA13guIABnsn5uE8NrVgl27VpBr1wpy+Kyg164WuGWH90MSnIL7AUtWpVi7+iFRVqVdu7Iq7dqVVWnW7r4cB5Lwr+A+HrsO4MfkynXEfyYXuKOLyv+aIqeLEr7fVLVJE/SSd/TESL6mwA85jKuBGZe0fwAAAABJRU5ErkJggg==";const w=[{id:"Basic",title:"基础",content:"包含颜色、文本、图标等",icon:B},{id:"View",title:"视图",content:"包含通告栏、标签、徽标等",icon:C},{id:"Action",title:"操作反馈",content:"包含对话框、进度条、动作面板等",icon:E},{id:"Form",title:"表单",content:"包含输入框、单选框、复选框等",icon:h},{id:"Layout",title:"布局",content:"包含列表、浮层、卡片等",icon:x},{id:"Navigation",title:"导航",content:"包含标签栏、导航栏、分段器等",icon:R},{id:"Advanced",title:"高阶组件",content:"包含日历等",icon:u}],V=e({data:()=>({taroLogo:"./assets/logo_onebay.a08244ba.png",list:w}),methods:{gotoPanel(e){this.$router.push(`/pages/panel/index?id=${e.toLowerCase()}`)}}}),f={class:"page page-index"},I={class:"logo"},L=a("div",{class:"page-title"},"onebay UI",-1),O={class:"module-list"},P={class:"module-list__icon"},D={class:"module-list__info"},T={class:"title"},b={class:"content"},v=a("div",{class:"module-list__arrow"},[a("span",{class:"ob-icon ob-icon-chevron-right"})],-1);V.render=function(e,n,s,p,c,m){return i(),o("div",f,[a("div",I,[a("img",{class:"img",src:e.taroLogo},null,8,["src"])]),L,a("div",O,[(i(!0),o(t,null,A(e.list,((n,t)=>(i(),o("div",{key:t,class:"module-list__item",onClick:i=>e.gotoPanel(n.id)},[a("div",P,[a("img",{src:n.icon,class:"img",mode:"widthFix"},null,8,["src"])]),a("div",D,[a("div",T,d(n.title),1),a("div",b,d(n.content),1)]),v],8,["onClick"])))),128))])])};const j={basic:[{id:"Color",name:"颜色"},{id:"Icon",name:"图标"},{id:"Typo",name:"字体"},{id:"Button",name:"按钮"}],view:[{id:"Avatar",name:"头像"},{id:"Article",name:"文章"},{id:"Badge",name:"徽标"},{id:"Countdown",name:"倒计时"},{id:"Curtain",name:"幕帘"},{id:"Divider",name:"分割线"},{id:"NoticeBar",name:"通告栏"},{id:"Tag",name:"标签"},{id:"Timeline",name:"时间轴"},{id:"Swiper",name:"滑块视图容器"},{id:"Load-More",name:"页面提示"},{id:"Steps",name:"步骤条"},{id:"Image-Preview",name:"ImagePreview"}],action:[{id:"Action-Sheet",name:"动作面板"},{id:"Activity-Indicator",name:"活动指示器"},{id:"Modal",name:"模态框"},{id:"Progress",name:"进度条"},{id:"Toast",name:"轻提示"},{id:"Swipe-Action",name:"滑动操作"},{id:"Message",name:"消息通知"},{id:"Pull-To-Refresh",name:"PullToRefresh"}],form:[{id:"Form",name:"表单"},{id:"Input",name:"输入框"},{id:"Radio",name:"单选框"},{id:"Checkbox",name:"复选框"},{id:"Switch",name:"开关"},{id:"Rate",name:"评分"},{id:"Input-Number",name:"数字输入框"},{id:"Textarea",name:"多行文本框"},{id:"Picker",name:"选择器"},{id:"Slider",name:"滑动条"},{id:"Search-Bar",name:"搜索栏"},{id:"Image-Picker",name:"图片选择器"},{id:"Range",name:"范围选择器"}],layout:[{id:"Flex",name:"弹性布局"},{id:"Row",name:"Percentage layout"},{id:"Grid",name:"栅格"},{id:"List",name:"列表"},{id:"Card",name:"卡片"},{id:"Float-Layout",name:"浮动弹层"},{id:"Accordion",name:"手风琴"}],navigation:[{id:"NavBar",name:"导航栏"},{id:"TabBar",name:"标签栏"},{id:"Tabs",name:"标签页"},{id:"Segmented-Control",name:"分段器"},{id:"Pagination",name:"分页器"},{id:"Drawer",name:"抽屉"},{id:"Indexes",name:"索引选择器"},{id:"Back-Top",name:"Back Top Button"}],advanced:[{id:"Calendar",name:"日历"}]},U={basic:{name:"基础",icon:B},view:{name:"视图",icon:C},action:{name:"操作反馈",icon:E},form:{name:"表单",icon:h},layout:{name:"布局",icon:x},navigation:{name:"导航",icon:R},advanced:{name:"高阶组件",icon:u}};const M=e({data:()=>({list:j,currentId:"",title:"",icon:"",itemList:[]}),mounted(){const{id:e}=this.$route.query;if(e){const n=e;this.itemList=j[n]||[],this.title=U[n]&&U[n].name||"",this.icon=U[n]&&U[n].icon||"",this.currentId=n}},methods:{gotoComponent(e,n){this.$router.push(`/pages/${n.toLowerCase()}/${e.toLowerCase()}/index`)}}}),Q={class:"page"},S={class:"panel-header"},y={class:"panel-header__icon"},k={key:1,class:"ob-icon ob-icon-list"},F={class:"panel-header__title"},N={class:"panel-body"},G={class:"component-list"},Y={class:"name"},K=a("span",{class:"ob-icon ob-icon-chevron-right"},null,-1);M.render=function(e,n,s,p,c,m){return i(),o("div",Q,[a("div",S,[a("div",y,[e.icon?(i(),o("img",{key:0,src:e.icon,class:"img"},null,8,["src"])):(i(),o("span",k))]),a("div",F,d(e.title),1)]),a("div",N,[a("div",G,[(i(!0),o(t,null,A(e.itemList,((n,t)=>(i(),o("div",{key:t,class:"component-list__item",onClick:i=>e.gotoComponent(n.id,e.currentId)},[a("span",Y,d(`${n.id} ${n.name}`),1),K],8,["onClick"])))),128))])])])},_((()=>__import__("./main.8ec155c8.js")),["./assets/main.8ec155c8.js","./assets/index.35996694.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js","./assets/DocsHeader.6a620ff6.js","./assets/DocsHeader.ef48a98e.css"]);const W=[{path:"/",component:V},{path:"/pages/panel/index",component:M},{path:"/pages/action/action-sheet/index",component:()=>_((()=>__import__("./index.5471e628.js")),["./assets/index.5471e628.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/action/activity-indicator/index",component:()=>_((()=>__import__("./index.db5706aa.js")),["./assets/index.db5706aa.js","./assets/index.6c1dcdac.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/view/badge/index",component:()=>_((()=>__import__("./index.fc81216d.js")),["./assets/index.fc81216d.js","./assets/index.b80234fd.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/basic/button/index",component:()=>_((()=>__import__("./index.9789e597.js")),["./assets/index.9789e597.js","./assets/index.35996694.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/basic/icon/index",component:()=>_((()=>__import__("./index.11821842.js")),["./assets/index.11821842.js","./assets/index.a48cca81.js","./assets/index.2e2f2d54.css","./assets/vendor.fec48b8d.js"])},{path:"/pages/form/checkbox/index",component:()=>_((()=>__import__("./index.ba742ff1.js")),["./assets/index.ba742ff1.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/layout/accordion/index",component:()=>_((()=>__import__("./index.4dc14ddf.js")),["./assets/index.4dc14ddf.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/layout/list/index",component:()=>_((()=>__import__("./index.bb7a36d1.js")),["./assets/index.bb7a36d1.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/view/divider/index",component:()=>_((()=>__import__("./index.c03475e3.js")),["./assets/index.c03475e3.js","./assets/index.edbce111.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/navigation/drawer/index",component:()=>_((()=>__import__("./index.93b274f1.js")),["./assets/index.93b274f1.js","./assets/vendor.fec48b8d.js","./assets/index.3a4d1d1e.js","./assets/index.75c6a0fb.js","./assets/index.e3c68c3c.css"])},{path:"/pages/layout/float-layout/index",component:()=>_((()=>__import__("./index.fc9df8ee.js")),["./assets/index.fc9df8ee.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/form/input/index",component:()=>_((()=>__import__("./index.0ccdd292.js")),["./assets/index.0ccdd292.js","./assets/vendor.fec48b8d.js","./assets/verification_code.7bb1fd9b.js","./assets/index.3a4d1d1e.js"])},{path:"/pages/action/message/index",component:()=>_((()=>__import__("./index.f4b64829.js")),["./assets/index.f4b64829.js","./assets/main.324ef9b6.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/action/modal/index",component:()=>_((()=>__import__("./index.d1bda480.js")),["./assets/index.d1bda480.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/navigation/navbar/index",component:()=>_((()=>__import__("./index.802402c8.js")),["./assets/index.802402c8.js","./assets/index.da2e5193.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/view/noticebar/index",component:()=>_((()=>__import__("./index.e1a60d70.js")),["./assets/index.e1a60d70.js","./assets/index.edbce111.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/navigation/pagination/index",component:()=>_((()=>__import__("./index.fdb3fb8a.js")),["./assets/index.fdb3fb8a.js","./assets/index.6beb2079.css","./assets/vendor.fec48b8d.js","./assets/index.3a4d1d1e.js"])},{path:"/pages/action/progress/index",component:()=>_((()=>__import__("./index.e2c351ac.js")),["./assets/index.e2c351ac.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/form/radio/index",component:()=>_((()=>__import__("./index.c4ced35a.js")),["./assets/index.c4ced35a.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/form/rate/index",component:()=>_((()=>__import__("./index.4c61350b.js")),["./assets/index.4c61350b.js","./assets/index.09afb7fd.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/navigation/segmented-control/index",component:()=>_((()=>__import__("./index.85fbfa75.js")),["./assets/index.85fbfa75.js","./assets/index.cdb114e8.css","./assets/vendor.fec48b8d.js","./assets/index.3a4d1d1e.js"])},{path:"/pages/form/slider/index",component:()=>_((()=>__import__("./index.952e8678.js")),["./assets/index.952e8678.js","./assets/index.0002c01f.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/view/steps/index",component:()=>_((()=>__import__("./index.cb79feb4.js")),["./assets/index.cb79feb4.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/view/tag/index",component:()=>_((()=>__import__("./index.38610d0b.js")),["./assets/index.38610d0b.js","./assets/vendor.fec48b8d.js","./assets/index.3a4d1d1e.js"])},{path:"/pages/navigation/tabbar/index",component:()=>_((()=>__import__("./index.fd1d2148.js")),["./assets/index.fd1d2148.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/view/swiper/index",component:()=>_((()=>__import__("./index.9f899736.js")),["./assets/index.9f899736.js","./assets/index.357032e8.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/form/picker/index",component:()=>_((()=>__import__("./index.54ee0b66.js")),["./assets/index.54ee0b66.js","./assets/index.2583fd5b.css","./assets/vendor.fec48b8d.js","./assets/index.3a4d1d1e.js"])},{path:"/pages/form/input-number/index",component:()=>_((()=>__import__("./index.9e519c42.js")),["./assets/index.9e519c42.js","./assets/index.b4d38c6f.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/form/switch/index",component:()=>_((()=>__import__("./index.8b733b07.js")),["./assets/index.8b733b07.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/form/textarea/index",component:()=>_((()=>__import__("./index.663de864.js")),["./assets/index.663de864.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/form/range/index",component:()=>_((()=>__import__("./index.78389049.js")),["./assets/index.78389049.js","./assets/index.10e4e5e1.css","./assets/vendor.fec48b8d.js","./assets/index.3a4d1d1e.js"])},{path:"/pages/form/image-picker/index",component:()=>_((()=>__import__("./index.4c111a5d.js")),["./assets/index.4c111a5d.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/form/search-bar/index",component:()=>_((()=>__import__("./index.03f9c5a3.js")),["./assets/index.03f9c5a3.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/view/image-preview/index",component:()=>_((()=>__import__("./index.545fb786.js")),["./assets/index.545fb786.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/layout/flex/index",component:()=>_((()=>__import__("./index.be5f766d.js")),["./assets/index.be5f766d.js","./assets/index.a7c0ae16.css","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/navigation/back-top/index",component:()=>_((()=>__import__("./index.62e22255.js")),["./assets/index.62e22255.js","./assets/index.17749fd7.css","./assets/vendor.fec48b8d.js","./assets/index.3a4d1d1e.js"])},{path:"/pages/view/timeline/index",component:()=>_((()=>__import__("./index.e94b8741.js")),["./assets/index.e94b8741.js","./assets/index.3a4d1d1e.js","./assets/vendor.fec48b8d.js"])},{path:"/pages/action/pull-to-refresh/index",component:()=>_((()=>__import__("./index.29265a1e.js")),["./assets/index.29265a1e.js","./assets/vendor.fec48b8d.js","./assets/index.3a4d1d1e.js"])}],X=c({history:"undefined"==typeof window?s():p(),routes:W});const q=e({props:{title:{type:String,default:"标题"}}}),J={class:"doc-header"},H={class:"doc-header__title"};q.render=function(e,n,t,A,s,p){return i(),o("div",J,[a("div",H,d(e.title),1)])};const z=m(r);z.component("DocsHeader",q),z.use(X),z.mount("#app");
