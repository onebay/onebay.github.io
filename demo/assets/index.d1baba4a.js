import{i as e,m as a}from"./index.900d8e6a.js";import{d as s,r as l,o as i,c as n,a as c,u as t,p as d}from"./vendor.5a70ca8d.js";var o=s({name:"MessagePage",components:{Button:e},methods:{handleClick(e){a({message:"notification",type:e})}}});const m={class:"page toast-page"},r={class:"doc-body"},p={class:"panel"},g=c("div",{class:"panel__title"},"Basic usage",-1),u={class:"panel__content"},v={class:"example-item"},f=d(" normal message "),k={class:"example-item"},C=d(" success message "),_={class:"example-item"},h=d(" error message "),x={class:"example-item"},B=d(" warning message "),j={class:"example-item"},w=d(" prompt message ");o.render=function(e,a,s,d,o,y){const M=l("DocsHeader"),b=l("Button");return i(),n("div",m,[c(M,{title:"Message"}),c("div",r,[c("div",p,[g,c("div",u,[c("div",v,[c(b,{onClick:a[1]||(a[1]=a=>e.handleClick(""))},{default:t((()=>[f])),_:1})]),c("div",k,[c(b,{onClick:a[2]||(a[2]=a=>e.handleClick("success"))},{default:t((()=>[C])),_:1})]),c("div",_,[c(b,{onClick:a[3]||(a[3]=a=>e.handleClick("error"))},{default:t((()=>[h])),_:1})]),c("div",x,[c(b,{onClick:a[4]||(a[4]=a=>e.handleClick("warning"))},{default:t((()=>[B])),_:1})]),c("div",j,[c(b,{onClick:a[5]||(a[5]=a=>e.handleClick("info"))},{default:t((()=>[w])),_:1})])])])])])};export default o;
