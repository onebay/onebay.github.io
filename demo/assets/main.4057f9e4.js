import{f as e,S as l}from"./index.453c288b.js";import{D as s}from"./DocsHeader.287bb2e1.js";import{d as t,n as a,j as i}from"./vendor.5db8655b.js";var c=t({name:"SwitchPage",components:{Form:e,Switch:l},setup(){const t=a({switchValue1:!0,switchValue2:!1}),c=(e,l)=>{t[e]=l};return()=>{const{switchValue1:a,switchValue2:d}=t;return i("div",{class:"page"},i(s,{title:"Switch"}),i("div",{class:"doc-body"},i("div",{class:"panel"},i("div",{class:"panel__title"},"Basic usage"),i("div",{class:"panel__content no-padding"},i("div",{class:"example-item"},i(e,null,i(l,{title:a?"Opening":"Closed",checked:a,onChange:e=>c("switchValue1",e)}),i(l,{title:d?"Opening":"Closed",checked:d,onChange:e=>c("switchValue2",e)}),i(l,{title:"No border",border:!1}),i(l,{title:"Custom color",checked:!0,color:"#f45"}))))),i("div",{class:"panel"},i("div",{class:"panel__title"},"Disabled state"),i("div",{class:"panel__content no-padding"},i("div",{class:"example-item"},i(e,null,i(l,{title:"Not clickable",checked:!0,disabled:!0}),i(l,{title:"Not clickable",border:!1,disabled:!0})))))))}}});export default c;