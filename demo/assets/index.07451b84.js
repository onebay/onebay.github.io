import{i as e,m as s}from"./index.453c288b.js";import{d as a,r as l,o as i,c,a as n,u as t,p as d}from"./vendor.5db8655b.js";var o=a({name:"MessagePage",components:{Button:e},methods:{handleClick(e){s({message:"消息通知",type:e})}}});const m={class:"page toast-page"},r={class:"doc-body"},p={class:"panel"},g=n("div",{class:"panel__title"},"Basic usage",-1),u={class:"panel__content"},v={class:"example-item"},k=d(" normal message "),C={class:"example-item"},f=d(" success message "),_={class:"example-item"},h=d(" error message "),x={class:"example-item"},b=d(" warning message "),B={class:"example-item"},j=d(" prompt message ");o.render=function(e,s,a,d,o,w){const y=l("DocsHeader"),M=l("Button");return i(),c("div",m,[n(y,{title:"Message"}),n("div",r,[n("div",p,[g,n("div",u,[n("div",v,[n(M,{onClick:s[1]||(s[1]=s=>e.handleClick(""))},{default:t((()=>[k])),_:1})]),n("div",C,[n(M,{onClick:s[2]||(s[2]=s=>e.handleClick("success"))},{default:t((()=>[f])),_:1})]),n("div",_,[n(M,{onClick:s[3]||(s[3]=s=>e.handleClick("error"))},{default:t((()=>[h])),_:1})]),n("div",x,[n(M,{onClick:s[4]||(s[4]=s=>e.handleClick("warning"))},{default:t((()=>[b])),_:1})]),n("div",B,[n(M,{onClick:s[5]||(s[5]=s=>e.handleClick("info"))},{default:t((()=>[j])),_:1})])])])])])};export default o;
