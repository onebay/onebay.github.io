import{D as a}from"./DocsHeader.287bb2e1.js";import{k as e,i as t,t as i}from"./index.a3d8f6d2.js";/* empty css              */import{d as n,i as l,k as s,j as c}from"./vendor.5db8655b.js";var d=n({name:"PaginationPage",setup(){const n=l([]),d=s((()=>n.value.length)),p=l(1),o=l(10),r=a=>{p.value=a.current,i({text:`Pagination: ${a}`})},v=()=>{const a=new Array(20).fill(1);n.value=n.value.concat(a)},g=()=>{p.value=1,n.value=[]};return()=>c("div",{class:"page"},c(a,{title:"Pagination"}),c("div",{class:"doc-body"},c("div",{class:"panel"},c("div",{class:"panel__title"},"Basic usage"),c("div",{class:"panel__content no-padding"},c("div",{class:"example-item"},c(e,{total:20,pageSize:10,current:1})))),c("div",{class:"panel"},c("div",{class:"panel__title"},"Icon type"),c("div",{class:"panel__content no-padding"},c("div",{class:"example-item"},c(e,{icon:!0,total:20,pageSize:10,current:1})))),c("div",{class:"panel"},c("div",{class:"panel__title"},"picker quickly select page number"),c("div",{class:"panel__content no-padding"},c("div",{class:"example-item"},c(e,{icon:!0,total:20,pageSize:10,current:1})))),c("div",{class:"panel"},c("div",{class:"panel__title"},"Change the data length"),c("div",{class:"panel__content no-padding"},c("div",{class:"example-item"},c(e,{icon:!0,total:d.value,pageSize:o.value,current:p.value,onPageChange:r}),c("div",{class:"btn-item"},"current page：",p,"，current data：",d," items, page size：",o),c("div",{class:"btn-item"},c(t,{type:"primary",onClick:v}," Add 20 data ")),c("div",{class:"btn-item"},c(t,{onClick:g}," reset ")))))))}});export default d;
