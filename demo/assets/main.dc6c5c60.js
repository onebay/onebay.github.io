/* empty css              */import{n as e}from"./index.453c288b.js";import{D as a}from"./DocsHeader.287bb2e1.js";import{d as l,n as s,j as t}from"./vendor.5db8655b.js";var n=l({name:"RatePage",components:{Rate:e},setup(){const l=s({rateValue1:3,rateValue2:3,rateValue3:3,rateValue4:3}),n=(e,a)=>{l[e]=a};return()=>{const{rateValue1:s,rateValue2:i,rateValue3:c,rateValue4:d}=l;return t("div",{class:"page"},t(a,{title:"Rate"}),t("div",{class:"doc-body"},t("div",{class:"panel"},t("div",{class:"panel__title"},"Basic usage"),t("div",{class:"panel__content"},t("div",{class:"example-item"},t(e,{value:s,onChange:e=>n("rateValue1",e)})))),t("div",{class:"panel"},t("div",{class:"panel__title"},"Custom size"),t("div",{class:"panel__content"},t("div",{class:"example-item"},t(e,{size:"16",value:i,onChange:e=>n("rateValue2",e)})))),t("div",{class:"panel"},t("div",{class:"panel__title"},"Custom rate"),t("div",{class:"panel__content"},t("div",{class:"example-item"},t(e,{max:10,value:c,onChange:e=>n("rateValue3",e)})))),t("div",{class:"panel"},t("div",{class:"panel__title"},"Custom margin"),t("div",{class:"panel__content"},t("div",{class:"example-item"},t(e,{margin:15,value:d,onChange:e=>n("rateValue4",e)})))),t("div",{class:"panel"},t("div",{class:"panel__title"},"Readonly"),t("div",{class:"panel__content"},t("div",{class:"example-item"},t("div",null,"rate: 3.5"),t("div",null,t(e,{value:3.5})))))))}}});export default n;