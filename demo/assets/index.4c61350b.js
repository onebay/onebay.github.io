/* empty css              */import{n as a}from"./index.3a4d1d1e.js";import{d as e,r as l,o as n,c as s,a as t}from"./vendor.fec48b8d.js";const i=e({name:"RatePage",components:{Rate:a},data:()=>({rateValue1:3,rateValue2:3,rateValue3:3,rateValue4:3}),methods:{handleRateChange(a,e){this[a]=e}}}),d={class:"page"},c={class:"doc-body"},u={class:"panel"},v=t("div",{class:"panel__title"},"Basic usage",-1),o={class:"panel__content"},r={class:"example-item"},p={class:"panel"},h=t("div",{class:"panel__title"},"Custom size",-1),m={class:"panel__content"},_={class:"example-item"},g={class:"panel"},C=t("div",{class:"panel__title"},"Custom rate",-1),V={class:"panel__content"},R={class:"example-item"},x={class:"panel"},b=t("div",{class:"panel__title"},"Custom margin",-1),f={class:"panel__content"},j={class:"example-item"},y={class:"panel"},z=t("div",{class:"panel__title"},"Readonly",-1),B={class:"panel__content"},D={class:"example-item"},H=t("div",null,"rate: 3.5",-1);i.render=function(a,e,i,P,k,q){const w=l("DocsHeader"),A=l("Rate");return n(),s("div",d,[t(w,{title:"Rate"}),t("div",c,[t("div",u,[v,t("div",o,[t("div",r,[t(A,{value:a.rateValue1,onChange:a.handleRateChange.bind(this,"rateValue1")},null,8,["value","onChange"])])])]),t("div",p,[h,t("div",m,[t("div",_,[t(A,{size:16,value:a.rateValue2,onChange:a.handleRateChange.bind(this,"rateValue2")},null,8,["value","onChange"])])])]),t("div",g,[C,t("div",V,[t("div",R,[t(A,{max:10,value:a.rateValue3,onChange:a.handleRateChange.bind(this,"rateValue3")},null,8,["value","onChange"])])])]),t("div",x,[b,t("div",f,[t("div",j,[t(A,{margin:15,value:a.rateValue4,onChange:a.handleRateChange.bind(this,"rateValue4")},null,8,["value","onChange"])])])]),t("div",y,[z,t("div",B,[t("div",D,[H,t("div",null,[t(A,{value:3.5},null,8,["value"])])])])])])])};export default i;
