import{D as a}from"./DocsHeader.6a620ff6.js";import{k as e,i as t,t as i}from"./index.3a4d1d1e.js";/* empty css              */import{d as n,i as s,k as l,j as c}from"./vendor.fec48b8d.js";var d=n({name:"PaginationPage",setup(){const n=s([]),d=l((()=>n.value.length)),o=s(1),p=s(10),r=a=>{o.value=a.current,i({text:`Pagination: ${a}`})},v=()=>{const a=new Array(20).fill(1);n.value=n.value.concat(a)},g=()=>{o.value=1,n.value=[]};return()=>c("div",{class:"page"},c(a,{title:"Pagination"}),c("div",{class:"doc-body"},c("div",{class:"panel"},c("div",{class:"panel__title"},"Basic usage"),c("div",{class:"panel__content no-padding"},c("div",{class:"example-item"},c(e,{total:20,pageSize:10,current:1})))),c("div",{class:"panel"},c("div",{class:"panel__title"},"Icon type"),c("div",{class:"panel__content no-padding"},c("div",{class:"example-item"},c(e,{icon:!0,total:20,pageSize:10,current:1})))),c("div",{class:"panel"},c("div",{class:"panel__title"},"picker快速选择页码"),c("div",{class:"panel__content no-padding"},c("div",{class:"example-item"},c(e,{icon:!0,total:20,pageSize:10,current:1})))),c("div",{class:"panel"},c("div",{class:"panel__title"},"Change the data length"),c("div",{class:"panel__content no-padding"},c("div",{class:"example-item"},c(e,{icon:!0,total:d.value,pageSize:p.value,current:o.value,onPageChange:r}),c("div",{class:"btn-item"},"current page：",o,"，current data：",d," items, page size：",p),c("div",{class:"btn-item"},c(t,{type:"primary",onClick:v}," Add 20 data ")),c("div",{class:"btn-item"},c(t,{onClick:g}," reset ")))))))}});export default d;
