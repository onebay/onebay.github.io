import{D as o}from"./DocsHeader.287bb2e1.js";import{h as l,t as i}from"./index.a3d8f6d2.js";/* empty css              */import{d as s,j as c}from"./vendor.5db8655b.js";var t=s({name:"NavbarPage",setup(){const s=o=>{i({text:o,duration:2e3,status:"success"})},t=()=>{i({text:"My",duration:2e3,status:"success"})},e=()=>{i({text:"function list",duration:2e3,status:"success"})};return()=>c("div",{class:"page"},c(o,{title:"NavBar"}),c("div",{class:"doc-body"},c("div",{class:"panel"},c("div",{class:"panel__title"},"Basic usage"),c("div",{class:"panel__content no-padding"},c("div",{class:"example-item"},c(l,{"v-slots":{left:()=>c("div",{class:"ob-icon ob-icon-chevron-left"}),right:()=>c(Fragment,null,c("div",{class:"ob-icon ob-icon-bullet-list"}),c("div",{class:"ob-icon ob-icon-user"}))},onClickLeftIcon:()=>s("go back"),title:"NavBar Title"})),c("div",{class:"example-item"},c(l,{onClickLeftIcon:()=>s("go back"),title:"NavBar Title","v-slots":{left:()=>c("div",{class:"ob-icon ob-icon-chevron-left"}),right:()=>c(Fragment,null,c("div",{class:"ob-icon ob-icon-bullet-list",onClick:e}),c("div",{class:"ob-icon ob-icon-user",onClick:t}))}})))),c("div",{class:"panel"},c("div",{class:"panel__title"},"Customize the upper left corner copy"),c("div",{class:"panel__content no-padding"},c("div",{class:"example-item"},c(l,{onClickLeftIcon:()=>s("go back"),title:"NavBar Title","v-slots":{left:()=>c("div",{class:"ob-icon ob-icon-chevron-left"}),right:()=>c(Fragment,null,c("div",{class:"ob-icon ob-icon-bullet-list",onClick:e}),c("div",{class:"ob-icon ob-icon-user",onClick:t}))}})),c("div",{class:"example-item"},c(l,{onClickLeftIcon:()=>s("go back"),title:"NavBar Title","v-slots":{left:()=>c("div",{class:"ob-icon ob-icon-chevron-left"}),right:()=>c(Fragment,null,c("div",{class:"ob-icon ob-icon-bullet-list",onClick:e}),c("div",{class:"ob-icon ob-icon-user",onClick:t}))}})))),c("div",{class:"panel"},c("div",{class:"panel__title"},"Custom color"),c("div",{class:"panel__content no-padding"},c(l,{onClickLeftIcon:()=>s("go back"),title:"NavBar Title","v-slots":{left:()=>c("div",{class:"ob-icon ob-icon-chevron-left",style:"color: #f45"}),right:()=>c(Fragment,null,c("div",{class:"ob-icon ob-icon-bullet-list",onClick:e,style:"color: #333"}),c("div",{class:"ob-icon ob-icon-user",onClick:t,style:"color: #f45"}))}}))),c("div",{class:"panel"},c("div",{class:"panel__title"},"Custom icon style"),c("div",{class:"panel__content no-padding"},c(l,{onClickLeftIcon:()=>s("go back"),title:"NavBar Title","v-slots":{left:()=>"go back",right:()=>c(Fragment,null,c("div",{class:"ob-icon ob-icon-bullet-list",onClick:e,style:"color: #333"}),c("div",{class:"ob-icon ob-icon-user",onClick:t,style:"color: #f45"}))}}))),c("div",{class:"panel"},c("div",{class:"panel__title"},"No underline"),c("div",{class:"panel__content no-padding"},c(l,{onClickLeftIcon:()=>s("go back"),title:"NavBar Title",border:!1,"v-slots":{left:()=>"go back",right:()=>c(Fragment,null,c("div",{class:"ob-icon ob-icon-bullet-list",onClick:e,style:"color: #333"}),c("div",{class:"ob-icon ob-icon-user",onClick:t,style:"color: #f45"}))}})))))}});export default t;