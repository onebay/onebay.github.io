import{i,s as a,z as s}from"./index.a3d8f6d2.js";import{d as e,r as o,o as t,c as n,a as c,u as l,p as g}from"./vendor.5db8655b.js";const d=["//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg","//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png","//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg","//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg"],m=e({name:"ImagePreviewPage",components:{Button:i,Swiper:a},data:()=>({imgs:d,show:!1,paginationVisible:!0,startPosition:1}),methods:{toggleShow(){s({images:d})},changeStartPosition(){s({images:d,startPosition:2,paginationVisible:this.paginationVisible})},changePaginationVisible(){s({images:d,paginationVisible:!1})}}}),b={class:"page"},p={class:"doc-body"},f={class:"panel"},r=c("div",{class:"panel__title"},"Basic usage",-1),u=g("toggle show"),_={class:"panel"},h=c("div",{class:"panel__title"},"startPosition = 2",-1),v=g("toggle show"),P={class:"panel"},j=c("div",{class:"panel__title"},"paginationVisible = false",-1),w=g("toggle show");m.render=function(i,a,s,e,g,d){const m=o("DocsHeader"),V=o("Button");return t(),n("div",b,[c(m,{title:"ImagePreview"}),c("div",p,[c("div",f,[r,c(V,{onClick:i.toggleShow},{default:l((()=>[u])),_:1},8,["onClick"])]),c("div",_,[h,c(V,{onClick:i.changeStartPosition},{default:l((()=>[v])),_:1},8,["onClick"])]),c("div",P,[j,c(V,{onClick:i.changePaginationVisible},{default:l((()=>[w])),_:1},8,["onClick"])])])])};export default m;