import{r as e,o as a,c as l,a as r,u as s,F as o,b as i,p as t,t as n,v as c}from"./vendor.fec48b8d.js";import{i as d,D as w,b as h}from"./index.3a4d1d1e.js";import{c as m}from"./index.75c6a0fb.js";const C={name:"DrawerPage",components:{Button:d,Drawer:w,Badge:h},data:()=>({leftDrawerShow:!1,rightDrawerShow:!1,childrenDrawerShow:!1,childrenItem:["首页","可自定义结构","或自定义样式","消息","个人"],icons:["home","","","message","user"]}),methods:{classNames:m,leftDrawerClick(){this.leftDrawerShow=!this.leftDrawerShow},rightDrawerClick(){this.rightDrawerShow=!this.rightDrawerShow},childrenDrawerClick(){this.childrenDrawerShow=!this.childrenDrawerShow},onItemClick(e){let a;a="number"!=typeof e?"":`你点击了第 ${+e+1} 个项目`,a&&alert(a)},onClose(){this.leftDrawerShow=!1,this.rightDrawerShow=!1,this.childrenDrawerShow=!1}}},k={class:"page"},D={class:"doc-body"},p={class:"panel"},f=r("div",{class:"panel__title"},"左边滑出",-1),v={class:"panel__content no-padding"},u={class:"example"},g=t("显示 Drawer"),_={class:"panel"},S=r("div",{class:"panel__title"},"右边滑出",-1),I={class:"panel__content no-padding"},b={class:"example"},x=t("显示 Drawer"),y={class:"panel"},B=r("div",{class:"panel__title"},"自定义内容",-1),j={class:"panel__content no-padding"},N={class:"example"},$=t("显示 Drawer");C.render=function(d,w,h,m,C,F){const H=e("DocsHeader"),P=e("Button"),q=e("Drawer"),z=e("Badge");return a(),l("div",k,[r(H,{title:"Drawer 抽屉"}),r("div",D,[r("div",p,[f,r("div",v,[r("div",u,[r(P,{onClick:F.leftDrawerClick},{default:s((()=>[g])),_:1},8,["onClick"]),r(q,{show:C.leftDrawerShow,mask:"",onItemClick:F.onItemClick,onClose:F.onClose,items:["菜单1","菜单2"]},null,8,["show","onItemClick","onClose"])])])]),r("div",_,[S,r("div",I,[r("div",b,[r(P,{onClick:F.rightDrawerClick},{default:s((()=>[x])),_:1},8,["onClick"]),r(q,{show:C.rightDrawerShow,right:"",mask:"",onItemClick:F.onItemClick,onClose:F.onClose,items:["菜单1","菜单2"]},null,8,["show","onItemClick","onClose"])])])]),r("div",y,[B,r("div",j,[r("div",N,[r(P,{onClick:F.childrenDrawerClick},{default:s((()=>[$])),_:1},8,["onClick"]),r(q,{show:C.childrenDrawerShow,mask:"",onItemClick:F.onItemClick,onClose:F.onClose},{default:s((()=>[(a(!0),l(o,null,i(C.childrenItem,((e,r)=>(a(),l("div",{class:F.classNames("drawer-item",{"drawer-item--sub":1===r||2===r}),onClick:F.onItemClick.bind(this,r),key:`drawer-item-${r}`},[t(n(e)+" ",1),3===r&&C.icons[r]?(a(),l(z,{key:0,value:"3"})):c("",!0)],10,["onClick"])))),128))])),_:1},8,["show","onItemClick","onClose"])])])])])])};export default C;
