import{D as e}from"./DocsHeader.350642af.js";import{q as t}from"./index.ff1bd30d.js";import{d as i,n as s,j as n}from"./vendor.5a70ca8d.js";const a=[{title:"step 1"},{title:"step 2"}],r=[{title:"step 1"},{title:"step 2"},{title:"step 3"}],o=[{title:"step 1",desc:"Here is additional information, up to two lines"},{title:"step 2",desc:"Here is additional information, up to two lines"},{title:"step 3",desc:"Here is additional information, up to two lines"}],l=[{title:"step 1",desc:"Here is additional information, up to two lines",icon:{value:"sound",activeColor:"#fff",inactiveColor:"#78A4FA",size:"14"}},{title:"step 2",desc:"Here is additional information, up to two lines",icon:{value:"shopping-cart",activeColor:"#fff",inactiveColor:"#78A4FA",size:"14"}},{title:"step 3",desc:"Here is additional information, up to two lines",icon:{value:"camera",activeColor:"#fff",inactiveColor:"#78A4FA",size:"14"}}],c=[{title:"step 1",desc:"Here is additional information, up to two lines",status:"success"},{title:"step 2",desc:"Here is additional information, up to two lines"},{title:"step 3",desc:"Here is additional information, up to two lines",status:"error"}];var d=i({name:"StepsPage",components:{Steps:t},data:()=>({current1:0,current2:0,current3:0,current4:0,current5:1,items1:a,items2:r,items3:o,items4:l,items5:c}),setup(){const i=s({current1:0,current2:0,current3:0,current4:0,current5:1}),d=(e,t)=>{i[e]=t};return()=>{const{current1:s,current2:p,current3:u,current4:m,current5:v}=i;return n("div",{class:"page"},n(e,{title:"Steps"}),n("div",{class:"doc-body"},n("div",{class:"panel"},n("div",{class:"panel__title"},"Basic usage"),n("div",{class:"panel__content"},n("div",{class:"example-item"},n(t,{items:a,current:s,onChange:e=>{d("current1",e)}}),n(t,{items:r,current:p,onChange:e=>d("current2",e)})))),n("div",{class:"panel"},n("div",{class:"panel__title"},"With additional information"),n("div",{class:"panel__content"},n("div",{class:"example-item"},n(t,{items:o,current:u,onChange:e=>d("current3",e)})))),n("div",{class:"panel"},n("div",{class:"panel__title"},"Custom icon"),n("div",{class:"panel__content"},n("div",{class:"example-item"},n(t,{items:l,current:m,onChange:e=>d("current4",e)})))),n("div",{class:"panel"},n("div",{class:"panel__title"},"Status step bar"),n("div",{class:"panel__content"},n("div",{class:"example-item"},n(t,{items:c,current:v,onChange:e=>d("current5",e)}))))))}}});export default d;