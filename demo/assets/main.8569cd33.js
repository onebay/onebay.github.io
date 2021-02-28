import{u as e}from"./index.3a4d1d1e.js";import{D as a}from"./DocsHeader.6a620ff6.js";/* empty css              */import{d as s,n,j as l}from"./vendor.fec48b8d.js";var i=s({name:"InputNumberPage",components:{InputNumber:e},setup(){const s=n({number1:1,number2:1,number3:1,number4:1,number5:1,number6:1}),i=(e,a,n)=>{s[e]=a,console.log("Event:",n)};return()=>l("div",{class:"page"},l(a,{title:"Input Number"}),l("div",{class:"doc-body"},l("div",{class:"panel"},l("div",{class:"panel__title"},"Basic usage"),l("div",{class:"panel__content"},l("div",{class:"example-item"},l("div",{class:"example-item__desc"},"min=0, max=10, step=1"),l(e,{min:0,max:10,step:1,value:s.number1,onChange:(e,a)=>i("number1",e,a)})))),l("div",{class:"panel"},l("div",{class:"panel__title"},"Decimal"),l("div",{class:"panel__content"},l("div",{class:"example-item"},l("div",{class:"example-item__desc"},"min=0, max=10, step=0.1"),l(e,{type:"digit",min:0,max:10,step:.1,value:s.number2,onChange:(e,a)=>i("number2",e,a)})))),l("div",{class:"panel"},l("div",{class:"panel__title"},"Disabled state"),l("div",{class:"panel__content"},l("div",{class:"example-item"},l(e,{disabled:!0,min:0,max:10,step:1,value:s.number3,onChange:(e,a)=>i("number3",e,a)})))),l("div",{class:"panel"},l("div",{class:"panel__title"},"Disable input state"),l("div",{class:"panel__content"},l("div",{class:"example-item"},l(e,{disabledInput:!0,min:0,max:10,step:1,value:s.number4,onChange:(e,a)=>i("number4",e,a)})))),l("div",{class:"panel"},l("div",{class:"panel__title"},"Custom width"),l("div",{class:"panel__content"},l("div",{class:"example-item"},l(e,{width:200,min:0,max:10,step:1,value:s.number5,onChange:(e,a)=>i("number5",e,a)})))),l("div",{class:"panel"},l("div",{class:"panel__title"},"large size"),l("div",{class:"panel__content"},l("div",{class:"example-item"},l(e,{size:"large",min:0,max:10,step:1,value:s.number6,onChange:(e,a)=>i("number6",e,a)}))))))}});export default i;
