import{D as e}from"./DocsHeader.287bb2e1.js";import{i as s,G as a,j as o,t}from"./index.a3d8f6d2.js";import{d as l,i,j as n}from"./vendor.5db8655b.js";var d=l({name:"PullToRefreshPage",components:{Button:s,PullToRefresh:a},setup(l){const d=i("down"),r=()=>{d.value="up"===d.value?"down":"up"},p=()=>{t({text:"onRefresh"})};return()=>n("div",{class:"page row-page"},n(o,{marquee:!0},"This component only supports Touch events, please use mobile mode/device to open this page."),n(e,{title:"PullToRefresh"}),n("div",{class:"doc-body",style:"height: 100%"},n("div",{class:"panel"},n("div",{class:"panel__title"},"Basic usage"),n("div",{class:"panel__content no-padding"},n(s,{onClick:r}," direction: ",d.value," "),n(a,{onRefresh:p,style:"height: 60vh; overflow: auto",direction:d.value},Array(20).fill(0).map(((e,s)=>n("div",{key:s,style:"text-align: center; padding: 20px"},"pull ",d.value," ",s))))))))}});export default d;
