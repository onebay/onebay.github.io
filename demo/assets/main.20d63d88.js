import{A as e,i as t,t as o}from"./index.3a4d1d1e.js";import{D as a}from"./DocsHeader.6a620ff6.js";import{d as n,i,j as c}from"./vendor.fec48b8d.js";const l=e.item;var s=n({name:"ActionSheetPage",components:{ActionSheet:e,ActionSheetItem:l,Button:t},setup(){const n=i(!1),s=()=>{n.value=!n.value},d=e=>{o({text:e})};return()=>c("div",{class:"page"},c(a,{title:"ActionSheet"}),c("div",{class:"doc-body"},c("div",{class:"panel"},c("div",{class:"panel__title"},"Basic Modal"),c("div",{class:"panel__content"},c("div",{class:"example-item"},c(t,{onClick:s},"toggle ActionSheet")))),c(e,{onClose:s,cancelText:"cancel",isOpened:n.value,title:"After clearing the location information, others will not be able to see you"},c(l,{onClick:()=>d("click button 1")}," button 1 "),c(l,{onClick:()=>d("click button 2")}," button 2 "))))}});export default s;