import{i as e}from"./index.a48cca81.js";import{d as o,r as i,o as n,c as a,a as l,F as s,b as t,t as c}from"./vendor.5db8655b.js";var d=o({data:()=>({iconSize:30,icons:e,iconColor:"#999",types:[{type:"main",name:"Main"},{type:"file",name:"File"},{type:"text",name:"Text"},{type:"arrow",name:"Arrow"},{type:"media",name:"Media"},{type:"photo",name:"Photo"},{type:"logo",name:"Logo"}]}),methods:{handleClick(e){console.log(e)}}});const r={class:"doc-body"},p={class:"panel__content"},m={class:"icon-list"},y={class:"icon-list__icon"},v={class:"icon-list__name"};d.render=function(e,o,d,_,u,C){const b=i("DocsHeader");return n(),a("div",null,[l(b,{title:"ICON"}),l("div",r,[(n(!0),a(s,null,t(e.types,((i,d)=>(n(),a("div",{key:d,class:"panel"},[l("div",{class:"panel__title",onClick:o[1]||(o[1]=(...o)=>e.handleClick&&e.handleClick(...o))},c(i.name),1),l("div",p,[l("div",m,[(n(!0),a(s,null,t(e.icons[i.type],((o,i)=>(n(),a("div",{key:i,class:"icon-list__item"},[l("div",y,[l("i",{class:`ob-icon ob-icon-${o}`,style:{color:e.iconColor,fontSize:`${e.iconSize}px`}},null,6)]),l("div",v,c(o),1)])))),128))])])])))),128))])])};export default d;