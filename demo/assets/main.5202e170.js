import{i as e,D as r,b as a}from"./index.a3d8f6d2.js";import{c as o}from"./index.75c6a0fb.js";import{D as s}from"./DocsHeader.287bb2e1.js";import{d as t,n as i,j as l}from"./vendor.5db8655b.js";var n=t({name:"DrawerPage",components:{Button:e,Drawer:r,Badge:a},setup(){const t=i({leftDrawerShow:!1,rightDrawerShow:!1,childrenDrawerShow:!1,childrenItem:["Home page","Customizable structure","or custom style","message","personal"],icons:["home","","","message","user"]}),n=()=>{t.leftDrawerShow=!t.leftDrawerShow},c=()=>{t.rightDrawerShow=!t.rightDrawerShow},d=()=>{t.childrenDrawerShow=!t.childrenDrawerShow},w=e=>{let r;r="number"!=typeof e?"":`You clicked on the ${+e+1}  item`,r&&alert(r)},h=()=>{t.leftDrawerShow=!1,t.rightDrawerShow=!1,t.childrenDrawerShow=!1};return()=>{const{leftDrawerShow:i,rightDrawerShow:m,childrenDrawerShow:p,childrenItem:D,icons:u}=t;return l("div",{class:"page"},l(s,{title:"Drawer"}),l("div",{class:"doc-body"},l("div",{class:"panel"},l("div",{class:"panel__title"},"Slide out to the right"),l("div",{class:"panel__content no-padding"},l("div",{class:"example"},l(e,{onClick:n},"Show Drawer"),l(r,{show:i,mask:!0,onItemClick:w,onClose:h,items:["Menu11","Menu2"]})))),l("div",{class:"panel"},l("div",{class:"panel__title"},"Slide out to the right"),l("div",{class:"panel__content no-padding"},l("div",{class:"example"},l(e,{onClick:c},"Show Drawer"),l(r,{show:m,right:!0,mask:!0,onItemClick:w,onClose:h,items:["Menu1","Menu2"]})))),l("div",{class:"panel"},l("div",{class:"panel__title"},"Custom content"),l("div",{class:"panel__content no-padding"},l("div",{class:"example"},l(e,{onClick:d},"Show Drawer"),l(r,{show:p,mask:!0,onItemClick:w,onClose:h},D.map(((e,r)=>l("div",{class:o("drawer-item",{"drawer-item--sub":1===r||2===r}),onClick:()=>w(r),key:`drawer-item-${r}`},e,3===r&&u[r]&&l(a,{value:"3"}))))))))))}}});export default n;