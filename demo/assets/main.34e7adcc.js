import{i as e,l as s}from"./index.3a4d1d1e.js";import{D as a}from"./DocsHeader.6a620ff6.js";import{d as l,i as t,j as i}from"./vendor.fec48b8d.js";var c=l({name:"ProgressPage",components:{Button:e,Progress:s},setup(){const l=t(0),c=()=>{0!==l.value&&(l.value=l.value-15<0?0:l.value-15)},p=()=>{100!==l.value&&(l.value=l.value+15>100?100:l.value+15)};return()=>i("div",{class:"page progress-page"},i(a,{title:"Progress"}),i("div",{class:"doc-body"},i("div",{class:"panel"},i("div",{class:"panel__title"},"Basic process"),i("div",{class:"panel__content"},i("div",{class:"example-item"},i(s,{percent:25})),i("div",{class:"example-item"},i(s,{percent:50})),i("div",{class:"example-item"},i(s,{percent:75})))),i("div",{class:"panel"},i("div",{class:"panel__title"},"Hide progress text"),i("div",{class:"panel__content"},i("div",{class:"example-item"},i(s,{percent:25,isHidePercent:!0})),i("div",{class:"example-item"},i(s,{percent:75,isHidePercent:!0})))),i("div",{class:"panel"},i("div",{class:"panel__title"},"Custom progress bar line width"),i("div",{class:"panel__content"},i("div",{class:"example-item"},i(s,{percent:25,strokeWidth:6})),i("div",{class:"example-item"},i(s,{percent:50,strokeWidth:8})),i("div",{class:"example-item"},i(s,{percent:75,strokeWidth:10})))),i("div",{class:"panel"},i("div",{class:"panel__title"},"Custom color"),i("div",{class:"panel__content"},i("div",{class:"example-item"},i(s,{percent:25,color:"#FF4949"})),i("div",{class:"example-item"},i(s,{percent:50,color:"#13CE66"})),i("div",{class:"example-item"},i(s,{percent:75,color:"#FFC82C"})))),i("div",{class:"panel"},i("div",{class:"panel__title"},"Different states"),i("div",{class:"panel__content"},i("div",{class:"example-item"},i("div",{class:"example-item__desc"},"time out"),i(s,{percent:25})),i("div",{class:"example-item"},i("div",{class:"example-item__desc"},"processing"),i(s,{percent:50,status:"progress"})),i("div",{class:"example-item"},i("div",{class:"example-item__desc"},"error"),i(s,{percent:75,status:"error"})),i("div",{class:"example-item"},i("div",{class:"example-item__desc"},"completed"),i(s,{percent:100,status:"success"})))),i("div",{class:"panel"},i("div",{class:"panel__title"},"actual case"),i("div",{class:"panel__content"},i("div",{class:"example-item"},i(s,{percent:l.value}),i("div",{class:"example-item__buttons"},i("div",{class:"btn"},i(e,{size:"small",onClick:c}," subtract ")),i("div",{class:"btn"},i(e,{size:"small",onClick:p}," add "))))))))}});export default c;