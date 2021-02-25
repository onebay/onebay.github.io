import{r as e,m as t,a as n,n as o,i as a,w as r,o as s,b as i,c as l,h as c,d,e as u,f as p,g as h,j as m,k as f,l as v,t as g,p as b,q as k,s as w,F as y,u as x,v as L,x as $,y as C,z as T,A as S,B}from"./common-fdfbc665.js";const A=Symbol();function E(){return function(){const e=a(A);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function O(e,t,n=!1){const o=document.querySelector(".navbar").offsetHeight,a=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(a){const e=a.offsetTop-o-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}function _(e,t){const n=Array.from(document.querySelectorAll("meta"));let o=!0;const a=e=>{o?o=!1:(n.forEach((e=>document.head.removeChild(e))),n.length=0,e&&e.length&&e.forEach((e=>{const t=function([e,t,n]){const o=document.createElement(e);for(const e in t)o.setAttribute(e,t[e]);n&&(o.innerHTML=n);return o}(e);document.head.appendChild(t),n.push(t)})))};r((()=>{const n=e.data,o=t.value,r=n&&n.title;document.title=(r?r+" | ":"")+o.title,a([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:o.description}],...o.head,...n&&n.frontmatter.head||[]])}))}const I="undefined"!=typeof window;function N(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),I){const e="/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}_assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const D=new Set,q=()=>document.createElement("link");let j;const H=I&&(j=q())&&j.relList&&j.relList.supports&&j.relList.supports("prefetch")?e=>{const t=q();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const P={setup(){const e=E();return function(){if(!I)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const o=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:o}=t;if(!D.has(o)){D.add(o);const e=N(o);H(e)}}}))})),t((()=>{document.querySelectorAll(".vitepress-content a").forEach((e=>{const{target:t,hostname:o,pathname:a}=e;"_blank"!==t&&o===location.hostname&&(a!==location.pathname?n.observe(e):D.add(a))}))}))};s(o),i(o),l((()=>{n&&n.disconnect()}))}(),()=>e.component?c(e.component):null}};const z=d((M='{"lang":"en-US","title":"onebay","description":"A mobile web UI library write by vue3","base":"/","head":[["link",{"rel":"shortcut icon","type":"image/x-icon","href":"/assets/images/favicon.ico"}]],"themeConfig":{"logo":"/assets/images/onebay.png","sidebar":[{"text":"introduce","link":"/"},{"text":"action","children":[{"text":"action-sheet","link":"/docs/action/action-sheet"},{"text":"activity-indicator","link":"/docs/action/activity-indicator"},{"text":"message","link":"/docs/action/message"},{"text":"modal","link":"/docs/action/modal"},{"text":"progress","link":"/docs/action/progress"},{"text":"pull-to-refresh","link":"/docs/action/pull-to-refresh"}]},{"text":"basic","children":[{"text":"button","link":"/docs/basic/button"},{"text":"icon","link":"/docs/basic/icon"}]},{"text":"form","children":[{"text":"checkbox","link":"/docs/form/checkbox"},{"text":"image-picker","link":"/docs/form/image-picker"},{"text":"input","link":"/docs/form/input"},{"text":"input-number","link":"/docs/form/input-number"},{"text":"picker","link":"/docs/form/picker"},{"text":"radio","link":"/docs/form/radio"},{"text":"range","link":"/docs/form/range"},{"text":"rate","link":"/docs/form/rate"},{"text":"search-bar","link":"/docs/form/search-bar"},{"text":"slider","link":"/docs/form/slider"},{"text":"switch","link":"/docs/form/switch"},{"text":"textarea","link":"/docs/form/textarea"}]},{"text":"layout","children":[{"text":"accordion","link":"/docs/layout/accordion"},{"text":"flex","link":"/docs/layout/flex"},{"text":"float-layout","link":"/docs/layout/float-layout"},{"text":"list","link":"/docs/layout/list"}]},{"text":"navigation","children":[{"text":"back-top","link":"/docs/navigation/back-top"},{"text":"drawer","link":"/docs/navigation/drawer"},{"text":"navbar","link":"/docs/navigation/navbar"},{"text":"pagination","link":"/docs/navigation/pagination"},{"text":"segmented-control","link":"/docs/navigation/segmented-control"},{"text":"tabbar","link":"/docs/navigation/tabbar"}]},{"text":"view","children":[{"text":"badge","link":"/docs/view/badge"},{"text":"divider","link":"/docs/view/divider"},{"text":"image-preview","link":"/docs/view/image-preview"},{"text":"noticebar","link":"/docs/view/noticebar"},{"text":"steps","link":"/docs/view/steps"},{"text":"swiper","link":"/docs/view/swiper"},{"text":"tag","link":"/docs/view/tag"},{"text":"timeline","link":"/docs/view/timeline"}]}]},"locales":{}}',n(JSON.parse(M))));var M;function W(){return z}const R="undefined"!=typeof window;function F(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}function U(e,t){t=function(e,t){if(!R)return t;const n=e.base,o=n.endsWith("/")?n.slice(0,-1):n;return t.slice(o.length)}(e,t);const n=F(e.locales||{},t)||{},o=F(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...o,locales:{}},locales:{}}}function V(e=E()){return u((()=>U(z.value,e.path)))}const K=/#.*$/,G=/(index)?\.(md|html)$/,Y=/\/$/,J=/^[a-z]+:/i;function X(e){return(W().value.base+e).replace(/\/+/g,"/")}function Z(e){return J.test(e)}function Q(e){return decodeURI(e).replace(K,"").replace(G,"")}const ee={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},te=m("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),ne=m("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1);const oe={render:function(e,t){return p(),h("svg",ee,[te,ne])}},ae=e=>((e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.html$/,"")).endsWith("/")&&(e+="index"),e);var re=f({components:{OutboundLink:oe},props:{item:{type:Object,required:!0}},setup(e){const t=e.item,n=E(),o=u((()=>({active:a.value,external:r.value}))),a=u((()=>ae(X(t.link))===ae(n.path))),r=u((()=>Z(t.link))),s=u((()=>r.value?t.link:X(t.link))),i=u((()=>t.target?t.target:r.value?"_blank":"")),l=u((()=>t.rel?t.rel:r.value?"noopener noreferrer":""));return{classes:o,isActiveLink:a,isExternalLink:r,href:s,target:i,rel:l}}});const se={class:"nav-item"};re.render=function(e,t,n,o,a,r){const s=k("OutboundLink");return p(),h("div",se,[m("a",{class:["nav-link",e.classes],href:e.href,target:e.target,rel:e.rel,"aria-label":e.item.ariaLabel},[v(g(e.item.text)+" ",1),e.isExternalLink?(p(),h(s,{key:0})):b("v-if",!0)],10,["href","target","rel","aria-label"])])};var ie=f({name:"DropdownLink",components:{NavBarLink:re},props:{item:{type:Object,required:!0}},setup(e){const t=d(!1),n=E();w((()=>n.path),(()=>{t.value=!1}));return{open:t,setOpen:e=>{t.value=e},isLastItemOfArray:(e,t)=>t.length&&t.indexOf(e)===t.length-1}}});const le={class:"nav-dropdown"},ce={key:0},de={key:1,class:"dropdown-subitem-wrapper"};ie.render=function(e,t,n,o,a,r){const s=k("NavBarLink");return p(),h("div",{class:["dropdown-wrapper",{open:e.open}]},[m("button",{class:"dropdown-title",type:"button","aria-label":e.item.ariaLabel,onClick:t[1]||(t[1]=t=>e.setOpen(!e.open))},[m("span",null,g(e.item.text),1),m("span",{class:["arrow",e.open?"down":"right"]},null,2)],8,["aria-label"]),m("ul",le,[(p(!0),h(y,null,x(e.item.items,((t,n)=>(p(),h("li",{key:t.link||n,class:"dropdown-item"},[t.items?(p(),h("h4",ce,g(t.text),1)):b("v-if",!0),t.items?(p(),h("ul",de,[(p(!0),h(y,null,x(t.items,(n=>(p(),h("li",{key:n.link,class:"dropdown-subitem"},[m(s,{item:n,onFocusout:o=>e.isLastItemOfArray(n,t.items)&&e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"])])))),128))])):(p(),h(s,{key:2,item:t,onFocusout:n=>e.isLastItemOfArray(t,e.item.items)&&e.setOpen(!1)},null,8,["item","onFocusout"]))])))),128))])],2)};const ue=["GitHub","GitLab","Bitbucket"].map((e=>[e,new RegExp(e,"i")]));var pe={components:{NavBarLink:re,NavDropdownLink:ie},setup(){const e=V(),t=W(),n=E(),o=u((()=>{const e=t.value.themeConfig,n=e.docsRepo||e.repo;let o=e.repoLabel;if(n){const e=/^https?:/.test(n)?n:`https://github.com/${n}`;if(!o){const t=e.match(/^https?:\/\/[^/]+/);if(t){const e=t[0],n=ue.find((([t,n])=>n.test(e)));o=n&&n[0]}}return{link:e,text:o||"Source"}}return null})),a=u((()=>{const e=t.value.themeConfig.locales;if(!e)return null;const o=Object.keys(e);if(o.length<=1)return null;const a=I?t.value.base:"/",r=a.endsWith("/")?a.slice(0,-1):a,s=n.path.slice(r.length),i=o.find((e=>"/"!==e&&s.startsWith(e))),l=i?s.substring(i.length-1):s,c=o.map((t=>{const n=t.endsWith("/")?t.slice(0,-1):t;return{text:e[t].label||e[t].lang,link:`${n}${l}`}})),d=i||"/";return{text:e[d].selectText?e[d].selectText:"Languages",items:c}}));return{navData:u((()=>e.value.themeConfig.nav)),repoInfo:o,localeCandidates:a}}};const he={key:0,class:"nav-links"};pe.render=function(e,t,n,o,a,r){const s=k("NavDropdownLink"),i=k("NavBarLink");return e.navData||e.repoInfo?(p(),h("nav",he,[e.navData?(p(!0),h(y,{key:0},x(e.navData,(e=>(p(),h(y,null,[e.items?(p(),h(s,{key:0,item:e},null,8,["item"])):(p(),h(i,{key:1,item:e},null,8,["item"]))],64)))),256)):b("v-if",!0),e.localeCandidates?(p(),h(s,{key:1,item:e.localeCandidates},null,8,["item"])):b("v-if",!0),e.repoInfo?(p(),h(i,{key:2,item:e.repoInfo},null,8,["item"])):b("v-if",!0)])):b("v-if",!0)};var me={components:{NavBarLinks:pe},setup:()=>({withBase:X})};const fe=m("div",{class:"flex-grow"},null,-1);me.render=function(e,t,n,o,a,r){const s=k("NavBarLinks");return p(),h(y,null,[m("a",{class:"title","aria-label":e.$site.title+", back to home",href:e.$site.base},[e.$theme.logo?(p(),h("img",{key:0,class:"logo",src:e.withBase(e.$theme.logo),alt:"logo"},null,8,["src"])):b("v-if",!0),m("span",null,g(e.$site.title),1)],8,["aria-label","href"]),fe,m(s,{class:"hide-mobile"}),L(e.$slots,"search")],64)};var ve=f({components:{NavBarLink:re},setup(){const e=E(),t=W(),n=u((()=>e.data.frontmatter)),o=u((()=>({link:n.value.actionLink,text:n.value.actionText}))),a=u((()=>X(n.value.heroImage))),r=u((()=>t.value.title)),s=u((()=>t.value.description));return{data:n,actionLink:o,heroImageSrc:a,siteTitle:r,siteDescription:s}}});const ge=$("data-v-00153174");C("data-v-00153174");const be={class:"hero"},ke={key:1,id:"main-title"},we={key:2,class:"description"},ye={key:3,class:"action"},xe={key:0,class:"features"},Le={key:1,class:"footer"};T();const $e=ge(((e,t,n,o,a,r)=>{const s=k("NavBarLink");return p(),h(y,null,[m("header",be,[e.data.heroImage?(p(),h("img",{key:0,src:e.heroImageSrc,alt:e.data.heroAlt||"hero"},null,8,["src","alt"])):b("v-if",!0),null!==e.data.heroText?(p(),h("h1",ke,g(e.data.heroText||e.siteTitle||"Hello"),1)):b("v-if",!0),null!==e.data.tagline?(p(),h("p",we,g(e.data.tagline||e.siteDescription||"Welcome to your VitePress site"),1)):b("v-if",!0),e.data.actionText&&e.data.actionLink?(p(),h("p",ye,[m(s,{item:e.actionLink},null,8,["item"])])):b("v-if",!0),L(e.$slots,"hero")]),e.data.features&&e.data.features.length?(p(),h("div",xe,[(p(!0),h(y,null,x(e.data.features,((e,t)=>(p(),h("div",{key:t,class:"feature"},[m("h2",null,g(e.title),1),m("p",null,g(e.details),1)])))),128)),L(e.$slots,"features")])):b("v-if",!0),e.data.footer?(p(),h("div",Le,[v(g(e.data.footer)+" ",1),L(e.$slots,"footer")])):b("v-if",!0)],64)}));ve.render=$e,ve.__scopeId="data-v-00153174";var Ce={emits:["toggle"]};const Te=m("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[m("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1);function Se(){let e=null,t=null;const n=decodeURIComponent,o=e=>e&&e.classList.remove("active"),a=n=>{if(o(t),o(e),t=document.querySelector(`.sidebar a[href="${n}"]`),t){t.classList.add("active");const n=t.closest(".sidebar > ul > li");n&&n!==t.parentElement?(e=n.querySelector("a"),e&&e.classList.add("active")):e=null}},r=()=>{const e=[].slice.call(document.querySelectorAll(".sidebar a")),t=[].slice.call(document.querySelectorAll(".header-anchor")).filter((t=>e.some((e=>e.hash===t.hash)))),o=document.querySelector(".navbar").offsetHeight,r=window.scrollY,s=e=>e.parentElement.offsetTop-o-15;for(let e=0;e<t.length;e++){const o=t[e],i=t[e+1];if(0===e&&0===r||r>=s(o)&&(!i||r<s(i))){const e=n(o.hash);return history.replaceState(null,document.title,e),void a(e)}}},c=function(e,t){let n,o=!1;return()=>{n&&clearTimeout(n),o?n=setTimeout(e,t):(e(),o=!0,setTimeout((()=>{o=!1}),t))}}(r,300);s((()=>{r(),window.addEventListener("scroll",c)})),i((()=>{a(n(location.hash))})),l((()=>{window.removeEventListener("scroll",c)}))}Ce.render=function(e,t,n,o,a,r){return p(),h("div",{class:"sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[Te])};const Be=e=>{const{item:{link:t,text:n,children:o}}=e,a=E(),r=W(),s=(i=r.value.base,(l=t||"")?l.startsWith("#")?l:function(e,t){const n=e.endsWith("/"),o=t.startsWith("/");return n&&o?e.slice(0,-1)+t:n||o?e+t:`${e}/${t}`}(i,l):void 0);var i,l;const d=function(e,t){return void 0!==t&&Q(e.path)===Q(t)}(a,s),u=Ae(d,o,a.data.headers);return c("li",{class:"sidebar-item"},[c(s?"a":"p",{class:{"sidebar-link":!0,active:d},href:s},n),u])};function Ae(e,t,n){return t&&t.length>0?c("ul",{class:"sidebar-items"},t.map((e=>c(Be,{item:e})))):e&&n?Ae(!1,function(e){return Ee(function(e){let t;return(e=e.map((e=>Object.assign({},e)))).forEach((e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((e=>2===e.level))}(e))}(n)):null}function Ee(e){return e.map((e=>({text:e.title,link:`#${e.slug}`,children:e.children?Ee(e.children):void 0})))}var Oe={components:{NavBarLinks:pe,SideBarItem:Be},setup(){const e=E(),t=V();return Se(),{items:u((()=>{const{headers:n,frontmatter:{sidebar:o,sidebarDepth:a=2}}=e.data;if("auto"===o)return _e(n,a);if(Array.isArray(o))return Ie(o);if(!1===o)return[];{const{sidebar:o}=t.value.themeConfig;if("auto"===o)return _e(n,a);if(Array.isArray(o))return Ie(o);if(!1===o)return[];if("object"==typeof o)return function(e,t,n,o){const a=[t,Object.keys(e)[0]].map((t=>e[function(e){const t=e.split("/");return t[t.length-1]&&t.pop(),function(e){return/(\.html|\/)$/.test(e)?e:`${e}/`}(t.join("/"))}(t)])).find(Boolean);if(Array.isArray(a))return Ie(a);if("auto"===a)return _e(n,o);return[]}(o,e.path,n,a)}}))}}};function _e(e,t){const n=[];if(void 0===e)return[];let o;return e.forEach((({level:e,title:a,slug:r})=>{if(e-1>t)return;const s={text:a,link:`#${r}`};2===e?(o=s,n.push(s)):o&&(o.children||(o.children=[])).push(s)})),n}function Ie(e,t){return e}const Ne={class:"sidebar"};Oe.render=function(e,t,n,o,a,r){const s=k("NavBarLinks"),i=k("SideBarItem");return p(),h(y,null,[m(s,{class:"show-mobile"}),L(e.$slots,"top"),m("ul",Ne,[(p(!0),h(y,null,x(e.items,(e=>(p(),h(i,{item:e},null,8,["item"])))),256))]),L(e.$slots,"bottom")],64)};var De={setup(){const e=E(),t=W(),n=e=>{let n;return Object.keys(t.value.themeConfig.sidebar).some((o=>t.value.themeConfig.sidebar[o].some((t=>(Array.isArray(t.children)&&(n=t.children.find((t=>t.link===e))),!!n))))),n},o=u((()=>{const t=e.data;if(!1!==t.frontmatter.next)return"string"==typeof t.frontmatter.next?n(t.frontmatter.next):t.next})),a=u((()=>{const t=e.data;if(!1!==t.frontmatter.prev)return"string"==typeof t.frontmatter.prev?n(t.frontmatter.prev):t.prev})),r=u((()=>!!o||!!a));return{next:o,prev:a,hasLinks:r}}};const qe={key:0,class:"links-wrapper"},je={class:"prev-link"},He={key:0},Pe=v(" ← "),ze={class:"next-link"},Me={key:0},We=v(" → ");De.render=function(e,t,n,o,a,r){return e.hasLinks?(p(),h("div",qe,[m("div",je,[e.prev?(p(),h("div",He,[Pe,m("a",{href:e.prev.link},g(e.prev.text),9,["href"])])):b("v-if",!0)]),m("div",ze,[e.next?(p(),h("div",Me,[m("a",{href:e.next.link},g(e.next.text),9,["href"]),We])):b("v-if",!0)])])):b("v-if",!0)};var Re={components:{OutboundLink:oe},setup(){const e=E(),t=W();return{editLink:u((()=>{const n=e.data,o=null==n.frontmatter.editLink?t.value.themeConfig.editLinks:n.frontmatter.editLink,{repo:a,docsDir:r="",docsBranch:s="master",docsRepo:i=a}=t.value.themeConfig,{relativePath:l}=n;return o&&l&&a?function(e,t,n,o,a){if(/bitbucket.org/.test(e))return(Z(t)?t:e).replace(Y,"")+`/src/${o}/`+(n?n.replace(Y,"")+"/":"")+a+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`;return(Z(t)?t:`https://github.com/${t}`).replace(Y,"")+`/edit/${o}/`+(n?n.replace(Y,"")+"/":"")+a}(a,i||a,r,s,l):null})),editLinkText:u((()=>t.value.themeConfig.editLinkText||"Edit this page"))}}};const Fe={class:"page-edit"};Re.render=function(e,t,n,o,a,r){const s=k("OutboundLink");return p(),h("footer",Fe,[e.editLink?(p(),h("a",{key:0,href:e.editLink,target:"_blank",rel:"noopener noreferrer"},[v(g(e.editLinkText)+" ",1),m(s)],8,["href"])):b("v-if",!0)])};var Ue={components:{NextAndPrevLinks:De,PageEdit:Re}};const Ve={class:"content"};Ue.render=function(e,t,n,o,a,r){const s=k("Content"),i=k("NextAndPrevLinks"),l=k("PageEdit");return p(),h("div",Ve,[L(e.$slots,"top"),m(s),m(i),m(l),L(e.$slots,"bottom")])};var Ke={components:{Home:ve,NavBar:me,ToggleSideBarButton:Ce,SideBar:Oe,Page:Ue},setup(){const e=E(),t=W(),n=V(),o=d(!1),a=u((()=>!!e.data.frontmatter.home)),r=u((()=>{const{themeConfig:o}=n.value,{frontmatter:a}=e.data;return!1!==a.navbar&&!1!==o.navbar&&(t.value.title||o.logo||o.repo||o.nav)})),s=u((()=>{const{frontmatter:t}=e.data,{themeConfig:o}=n.value;return!t.home&&!1!==t.sidebar&&("object"==typeof o.sidebar&&0!=Object.keys(o.sidebar).length||Array.isArray(o.sidebar)&&0!=o.sidebar.length)})),i=u((()=>[{"no-navbar":!r.value,"sidebar-open":o.value,"no-sidebar":!s.value}])),l=e=>{o.value="boolean"==typeof e?e:!o.value},c=l.bind(null,!1);return w(e,c),{showNavbar:r,showSidebar:s,openSideBar:o,pageClasses:i,enableHome:a,toggleSidebar:l}}};const Ge={key:0,class:"navbar"},Ye={key:1,class:"home","aria-labelledby":"main-title"},Je={key:2};Ke.render=function(e,t,n,o,a,r){const s=k("NavBar"),i=k("ToggleSideBarButton"),l=k("SideBar"),c=k("Home"),d=k("Page"),u=k("Debug");return p(),h(y,null,[m("div",{class:["theme",o.pageClasses]},[o.showNavbar?(p(),h("header",Ge,[m(s,null,{search:S((()=>[L(e.$slots,"navbar-search")])),_:1}),m(i,{onToggle:o.toggleSidebar},null,8,["onToggle"])])):b("v-if",!0),m("aside",{class:{open:o.openSideBar}},[m(l,null,{top:S((()=>[L(e.$slots,"sidebar-top")])),bottom:S((()=>[L(e.$slots,"sidebar-bottom")])),_:1})],2),b(" TODO: make this button accessible "),m("div",{class:"sidebar-mask",onClick:t[1]||(t[1]=e=>o.toggleSidebar(!1))}),o.enableHome?(p(),h("main",Ye,[m(c,null,{hero:S((()=>[L(e.$slots,"home-hero")])),features:S((()=>[L(e.$slots,"home-features")])),footer:S((()=>[L(e.$slots,"home-footer")])),_:1})])):(p(),h("main",Je,[m(d,null,{top:S((()=>[L(e.$slots,"page-top")])),bottom:S((()=>[L(e.$slots,"page-bottom")])),_:1})]))],2),m(u)],64)};const Xe=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];var Ze={setup:()=>({getMsg:()=>Xe[Math.floor(Math.random()*Xe.length)]})};const Qe={class:"theme"},et=m("h1",null,"404",-1);Ze.render=function(e,t,n,o,a,r){return p(),h("div",Qe,[et,m("blockquote",null,g(e.getMsg()),1),m("a",{href:e.$site.base,"aria-label":"go to home"}," Take me home. ",8,["href"])])};const tt={Layout:Ke,NotFound:Ze},nt=$("data-v-07043557");C("data-v-07043557");const ot={class:"loading-container"},at=m("svg",{class:"loading",t:"1605617717566",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1397",width:"200",height:"200"},[m("path",{d:"M910.222 455.111V512H682.667v-56.889h227.555z m-625.778 0V512H56.89v-56.889h227.555z m170.667 227.556H512v227.555h-56.889V682.667z m0-625.778H512v227.555h-56.889V56.89z m341.333 699.733l-39.822 39.822-159.289-159.288 39.823-39.823 159.288 159.29zM369.778 329.956l-39.822 39.822-159.29-159.29 39.823-39.821 159.289 159.289z m-39.822 267.377l39.822 39.823-159.29 159.288-39.821-39.822 159.289-159.289z m426.666-426.666l39.822 39.822-159.288 159.289-39.823-39.822 159.29-159.29z",fill:"#1296db","p-id":"1398","data-spm-anchor-id":"a313x.7781069.0.i0",class:"selected"})],-1);T();const rt=nt(((e,t)=>(p(),h("div",ot,[at])))),st={};st.render=rt,st.__scopeId="data-v-07043557";var it={name:"Demoview",components:{Loading:st},created(){const e=this.$router.route.path.split(".")[0].replace("/docs/","");console.log("route",e),this.src=`http://localhost:3333/#/pages/${e}/index`},mounted(){setTimeout((()=>{const e=document.querySelector(".code-box"),t=document.querySelector(".code-tabs");["vue","tsx"].forEach((n=>{if(document.querySelector(`.code-box .language-${n}`)){const o=document.createElement("button");o.textContent=n,o.className=`btn-${n}`,o.onclick=()=>{e.classList.remove("code-vue-active","code-tsx-active"),e.classList.add(`code-${n}-active`)},t.append(o)}}))}),0)},data:()=>({src:"",loaded:!1}),methods:{load(){this.loaded=!0}}};const lt=$("data-v-840e0546");C("data-v-840e0546");const ct={class:"iframe"};T();const dt=lt(((e,t,n,o,a,r)=>{const s=k("Loading");return p(),h("div",ct,[a.loaded?b("v-if",!0):(p(),h(s,{key:0})),m("iframe",{src:a.src,frameborder:"0",onLoad:t[1]||(t[1]=(...e)=>r.load&&r.load(...e)),class:"iframe-window"},null,40,["src"])])}));it.render=dt,it.__scopeId="data-v-840e0546";var ut,pt,ht=(function(e){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
!function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var s=n.apply(null,a);s&&e.push(s)}else if("object"===r)for(var i in a)t.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}(pt={path:ut,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&pt.path)}},pt.exports),pt.exports);var mt=f({name:"BackTop",props:{className:{type:String,default:""},distance:{type:Number,default:100}},emits:["click"],setup(e,{slots:t,emit:n}){const o=(()=>{const e=d(document.documentElement.scrollTop||document.body.scrollTop),t=()=>{e.value=document.documentElement.scrollTop||document.body.scrollTop};return s((()=>{window.addEventListener("scroll",t)})),l((()=>{window.removeEventListener("scroll",t)})),e})(),a=u((()=>o.value>e.distance));return{backTop:e=>{window.scrollTo({top:0,behavior:"smooth"}),n("click",e)},wrapperCls:u((()=>ht("ob-back-top",e.className,{"ob-back-top__hide":!a.value})))}}});const ft=$("data-v-60de5c7e");C("data-v-60de5c7e");const vt=m("svg",{t:"1606313325998",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1414",width:"64",height:"64"},[m("path",{d:"M522.439258 279.608186 69.730643 732.316801 975.145827 732.316801Z","p-id":"1415",fill:"#3eaf7c"})],-1);T();const gt=ft(((e,t,n,o,a,r)=>(p(),h("div",{class:e.wrapperCls,onClick:t[1]||(t[1]=(...t)=>e.backTop&&e.backTop(...t))},[L(e.$slots,"default",{},(()=>[vt]))],2))));mt.render=gt,mt.__scopeId="data-v-60de5c7e";var bt={...tt,enhanceApp({app:e,router:t,siteData:n}){e.config.globalProperties.$router=t,e.component("DemoView",it),e.component("BackToTop",mt)}};const kt=bt.NotFound||(()=>"404 Not Found");function wt(){let a,r=I;const s=function(a,r){const s=e({path:"/",component:null,data:null}),i="undefined"!=typeof window;function l(e=(i?location.href:"/")){const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),i&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),d(e)}let c=null;async function d(e,l=0){const d=new URL(e,"http://a.com"),u=c=d.pathname;try{let e=a(u);if("then"in e&&"function"==typeof e.then&&(e=await e),c===u){c=null;const{default:a,__pageData:r}=e;if(!a)throw new Error(`Invalid route component: ${a}`);s.path=u,s.component=t(a),s.data=n(JSON.parse(r)),i&&o((()=>{if(d.hash&&!l){const e=document.querySelector(decodeURIComponent(d.hash));if(e)return void O(e,d.hash)}window.scrollTo(0,l)}))}}catch(e){e.message.match(/fetch/)||console.error(e),c===u&&(c=null,s.path=u,s.component=r?t(r):null)}}return i&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:o,hostname:a,pathname:r,hash:s,target:i}=t,c=window.location;e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===i||o!==c.protocol||a!==c.hostname||(e.preventDefault(),r===c.pathname?s&&s!==c.hash&&(history.pushState(null,"",s),O(t,s,t.classList.contains("header-anchor"))):l(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{d(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:s,go:l}}((e=>{let t=N(e);return r&&(a=t),(r||a===t)&&(t=t.replace(/\.js$/,".lean.js")),I?(r=!1,import(t)):require(t)}),kt),i=B(bt.Layout);i.provide(A,s),i.component("Content",P),i.component("Debug",(()=>null));const l=V(s.route);return I&&_(s.route,l),Object.defineProperties(i.config.globalProperties,{$site:{get:()=>z.value},$siteByRoute:{get:()=>l.value},$page:{get:()=>s.route.data},$theme:{get:()=>l.value.themeConfig}}),bt.enhanceApp&&bt.enhanceApp({app:i,router:s,siteData:l}),{app:i,router:s}}if(I){const{app:e,router:t}=wt();t.go().then((()=>{e.mount("#app")}))}export{wt as createApp};