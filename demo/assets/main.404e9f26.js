import{I as e,f as a,t as l}from"./index.a3d8f6d2.js";import{D as t}from"./DocsHeader.287bb2e1.js";import{v as n}from"./verification_code.7bb1fd9b.js";import{d as u,i as o,n as v,j as i}from"./vendor.5db8655b.js";var r=u({name:"InputPage",components:{Input:e,Form:a},setup(){const u=o(!1),r=o(60),d=v({value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:"",value8:"",value9:"",value10:"",value11:"",value13:"",value14:"",value15:"",value16:"",value17:""}),s=()=>{if(u.value)return;u.value=!0;const e=setInterval((()=>{r.value>0?r.value-=1:(r.value=60,u.value=!1,clearInterval(e))}),1e3)},c=(e,a)=>{d[e]=a,console.log(e,a)},p=()=>{l({text:"Please enter the numbers",status:"error",duration:2e3})};return()=>i("div",{class:"page"},i(t,{title:"Input"}),i("div",{class:"doc-body"},i("div",{class:"panel"},i("div",{class:"panel__title"},"Basic usage"),i("div",{class:"panel__content no-padding"},i("div",{class:"component-item"},i(a,null,i(e,{name:"value1",title:"Standard",type:"text",placeholder:"Standard",value:d.value1,onChange:e=>c("value1",e)}),i(e,{name:"value2",title:"The title is really long, just wrap",placeholder:"Keep other columns with normal spacing",value:d.value2,onChange:e=>c("value2",e)}),i(e,{name:"value3",border:!1,placeholder:"Untitled",value:d.value3,onChange:e=>c("value3",e)}))))),i("div",{class:"panel"},i("div",{class:"panel__title"},"Inputtype"),i("div",{class:"panel__content no-padding"},i("div",{class:"component-item"},i(a,null,i(e,{name:"value4",title:"text",type:"text",placeholder:"Single line text",value:d.value4,onChange:e=>c("value4",e)}),i(e,{name:"value5",title:"digital",type:"number",placeholder:"Please enter the digits",value:d.value5,onChange:e=>c("value5",e)}),i(e,{name:"value6",title:"password",type:"password",placeholder:"Password cannot be less than 10 digits",value:d.value6,onChange:e=>c("value6",e)}),i(e,{name:"value7",title:"ID card",type:"idcard",placeholder:"identification number",value:d.value7,onChange:e=>c("value7",e)}),i(e,{name:"value8",title:"Decimal",type:"digit",placeholder:"Please enter a decimal",value:d.value8,onChange:e=>c("value8",e)}),i(e,{name:"value9",border:!1,title:"mobile phone number",type:"phone",placeholder:"mobile phone number",value:d.value9,onChange:e=>c("value9",e)}))))),i("div",{class:"panel"},i("div",{class:"panel__title"},"status"),i("div",{class:"panel__content no-padding"},i("div",{class:"component-item"},i(a,null,i(e,{name:"value10",disabled:!0,title:"disabled",type:"text",placeholder:"disabled input",value:d.value10,onChange:e=>c("value10",e)}),i(e,{name:"value11",error:!0,title:"An error occurred",type:"text",placeholder:"Click the button to trigger the callback",value:d.value11,onChange:e=>c("value11",e),onErrorClick:p}),i(e,{name:"value12",editable:!1,title:"Not editable",type:"text",placeholder:"Not editable",value:"Uneditable content"}),i(e,{name:"value13",border:!1,clear:!0,title:"Clear button",type:"text",placeholder:"Click the clear button to empty the content",value:d.value13,onChange:e=>c("value13",e)}),i(e,{name:"value16",border:!1,required:!0,title:"Required",type:"text",placeholder:"Required",value:d.value16,onChange:e=>c("value16",e)}))))),i("div",{class:"panel"},i("div",{class:"panel__title"},"Customize the right sidebar"),i("div",{class:"panel__content no-padding"},i("div",{class:"component-item"},i(a,null,i(e,{name:"value14",title:"code",type:"text",maxLength:4,clear:!0,placeholder:"Verification code",value:d.value14,onChange:e=>c("value4",e)},i("img",{src:n})),i(e,{name:"value15",border:!1,type:"phone",clear:!0,placeholder:"Please enter the phone number",value:d.value15,onChange:e=>c("value15",e)},i("div",{style:{color:u.value?"#FF4949":"",fontSize:"12px",width:"90px"},onClick:s},u.value?`Retry in ${r.value} seconds`:"Send the verification code"))))))))}});export default r;
