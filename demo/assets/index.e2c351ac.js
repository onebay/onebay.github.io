import{i as e,l as s}from"./index.3a4d1d1e.js";import{d as t,r as a,o as l,c,a as i,u as n,p as d}from"./vendor.fec48b8d.js";const p=t({name:"ProgressPage",components:{Button:e,Progress:s},data:()=>({state:{percent:0}}),methods:{reduce(){let{percent:e}=this.state;0!==e&&(e=e-15<0?0:e-15,this.state.percent=e)},increase(){let{percent:e}=this.state;100!==e&&(e=e+15>100?100:e+15,this.state.percent=e)}}}),r={class:"page progress-page"},m={class:"doc-body"},o={class:"panel"},v=i("div",{class:"panel__title"},"基础进度条",-1),_={class:"panel__content"},x={class:"example-item"},u={class:"example-item"},g={class:"example-item"},h={class:"panel"},f=i("div",{class:"panel__title"},"隐藏进度文案",-1),k={class:"panel__content"},P={class:"example-item"},b={class:"example-item"},F={class:"panel"},C=i("div",{class:"panel__title"},"自定义进度条线宽",-1),H={class:"panel__content"},W={class:"example-item"},j={class:"example-item"},z={class:"example-item"},B={class:"panel"},y=i("div",{class:"panel__title"},"自定义颜色",-1),D={class:"panel__content"},E={class:"example-item"},q={class:"example-item"},w={class:"example-item"},A={class:"panel"},G=i("div",{class:"panel__title"},"不同的状态",-1),I={class:"panel__content"},J={class:"example-item"},K=i("div",{class:"example-item__desc"},"暂停",-1),L={class:"example-item"},M=i("div",{class:"example-item__desc"},"进行中",-1),N={class:"example-item"},O=i("div",{class:"example-item__desc"},"错误",-1),Q={class:"example-item"},R=i("div",{class:"example-item__desc"},"已完成",-1),S={class:"panel"},T=i("div",{class:"panel__title"},"实际案例",-1),U={class:"panel__content"},V={class:"example-item"},X={class:"example-item__buttons"},Y={class:"btn"},Z=d(" subtract "),$={class:"btn"},ee=d(" add ");p.render=function(e,s,t,d,p,se){const te=a("DocsHeader"),ae=a("Progress"),le=a("Button");return l(),c("div",r,[i(te,{title:"Progress"}),i("div",m,[i("div",o,[v,i("div",_,[i("div",x,[i(ae,{percent:25})]),i("div",u,[i(ae,{percent:50})]),i("div",g,[i(ae,{percent:75})])])]),i("div",h,[f,i("div",k,[i("div",P,[i(ae,{percent:25,isHidePercent:""})]),i("div",b,[i(ae,{percent:75,isHidePercent:""})])])]),i("div",F,[C,i("div",H,[i("div",W,[i(ae,{percent:25,strokeWidth:6})]),i("div",j,[i(ae,{percent:50,strokeWidth:8})]),i("div",z,[i(ae,{percent:75,strokeWidth:10})])])]),i("div",B,[y,i("div",D,[i("div",E,[i(ae,{percent:25,color:"#FF4949"})]),i("div",q,[i(ae,{percent:50,color:"#13CE66"})]),i("div",w,[i(ae,{percent:75,color:"#FFC82C"})])])]),i("div",A,[G,i("div",I,[i("div",J,[K,i(ae,{percent:25})]),i("div",L,[M,i(ae,{percent:50,status:"progress"})]),i("div",N,[O,i(ae,{percent:75,status:"error"})]),i("div",Q,[R,i(ae,{percent:100,status:"success"})])])]),i("div",S,[T,i("div",U,[i("div",V,[i(ae,{percent:e.state.percent},null,8,["percent"]),i("div",X,[i("div",Y,[i(le,{size:"small","on-click":e.reduce},{default:n((()=>[Z])),_:1},8,["on-click"])]),i("div",$,[i(le,{size:"small","on-click":e.increase},{default:n((()=>[ee])),_:1},8,["on-click"])])])])])])])])};export default p;
