import{y as n,t as e}from"./index.3a4d1d1e.js";import{d as a,r as l,o,c as t,a as i}from"./vendor.fec48b8d.js";const c=a({name:"SearchBarPage",components:{SearchBar:n},data:()=>({value1:"",value2:"",value3:"",value4:""}),methods:{onChange(n,e){this[n]=e},onActionClick(){e({text:"start search",status:"success"})}}}),s={class:"page"},d={class:"doc-body"},u={class:"panel"},v=i("div",{class:"panel__title"},"Basic usage",-1),p={class:"panel__content no-padding"},h={class:"component-item"},C={class:"panel"},r=i("div",{class:"panel__title"},"Custom button text and click event",-1),m={class:"panel__content no-padding"},g={class:"component-item"},_={class:"panel"},k=i("div",{class:"panel__title"},"Always show button",-1),A={class:"panel__content no-padding"},b={class:"component-item"},B={class:"panel"},f=i("div",{class:"panel__title"},"Custom input box type",-1),x={class:"panel__content no-padding"},y={class:"component-item"};c.render=function(n,e,a,c,S,w){const j=l("DocsHeader"),N=l("SearchBar");return o(),t("div",s,[i(j,{title:"SearchBar"}),i("div",d,[i("div",u,[v,i("div",p,[i("div",h,[i(N,{value:n.value1,onChange:n.onChange.bind(this,"value1"),onActionClick:n.onActionClick},null,8,["value","onChange","onActionClick"])])])]),i("div",C,[r,i("div",m,[i("div",g,[i(N,{actionName:"Check",value:n.value2,onChange:n.onChange.bind(this,"value2"),onActionClick:n.onActionClick},null,8,["value","onChange","onActionClick"])])])]),i("div",_,[k,i("div",A,[i("div",b,[i(N,{placeholder:"Please enter the ISBN number",showActionButton:"",value:n.value3,onChange:n.onChange.bind(this,"value3"),onActionClick:n.onActionClick},null,8,["value","onChange","onActionClick"])])])]),i("div",B,[f,i("div",x,[i("div",y,[i(N,{placeholder:"input number",inputType:"number",value:n.value4,onChange:n.onChange.bind(this,"value4"),onActionClick:n.onActionClick},null,8,["value","onChange","onActionClick"])])])])])])};export default c;
