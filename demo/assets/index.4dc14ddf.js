import{c as t,L as e}from"./index.3a4d1d1e.js";import{d as i,r as o,o as a,c as l,a as n,u as s}from"./vendor.fec48b8d.js";const d=i({name:"AccordionPage",components:{Accordion:t,List:e,ListItem:e.ListItem},data:()=>({value1:!1,value2:!0,value3:!1,value4:!1}),methods:{onClick(t){this[t]=!this[t]}}}),c={class:"page"},p={class:"doc-body"},m={class:"panel"},u=n("div",{class:"panel__title"},"Basic usage",-1),f={class:"panel__content no-padding"},g={class:"example-item"},h={class:"panel"},r=n("div",{class:"panel__title"},"setting icon",-1),_={class:"panel__content no-padding"},v={class:"example-item"},b={class:"panel"},x=n("div",{class:"panel__title"},"description info",-1),j={class:"panel__content no-padding"},y={class:"example-item"};d.render=function(t,e,i,d,N,k){const C=o("DocsHeader"),L=o("ListItem"),B=o("List"),A=o("Accordion");return a(),l("div",c,[n(C,{title:"Accordion"}),n("div",p,[n("div",m,[u,n("div",f,[n("div",g,[n(A,{onClick:e[1]||(e[1]=e=>t.onClick("value1")),title:"title1",open:t.value1},{default:s((()=>[n(B,{hasBorder:!1},{default:s((()=>[n(L,{title:"title text",thumb:"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"}),n(L,{title:"title text",note:"description info",thumb:"http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"})])),_:1})])),_:1},8,["open"]),n(A,{open:t.value2,title:"default open",onClick:e[2]||(e[2]=e=>t.onClick("value2"))},{default:s((()=>[n(B,{hasBorder:!1},{default:s((()=>[n(L,{title:"title text",thumb:"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"}),n(L,{title:"title text",note:"description info",thumb:"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"}),n(L,{title:"title text",note:"description info",thumb:"http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"})])),_:1})])),_:1},8,["open"])])])]),n("div",h,[r,n("div",_,[n("div",v,[n(A,{title:"title3",open:t.value3,icon:{value:"tags",color:"#77a1fd"},onClick:e[3]||(e[3]=e=>t.onClick("value3"))},{default:s((()=>[n(B,{hasBorder:!1},{default:s((()=>[n(L,{title:"title text",thumb:"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"}),n(L,{title:"title text",note:"description info",thumb:"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"})])),_:1})])),_:1},8,["open"])])])]),n("div",b,[x,n("div",j,[n("div",y,[n(A,{title:"title4",note:"description info",open:t.value4,icon:{value:"tags",color:"#77a1fd"},onClick:e[4]||(e[4]=e=>t.onClick("value4"))},{default:s((()=>[n(B,{hasBorder:!1},{default:s((()=>[n(L,{title:"title text",thumb:"https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png"}),n(L,{title:"title text",note:"description info",thumb:"http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png"}),n(L,{title:"title text",note:"description info",thumb:"http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png"})])),_:1})])),_:1},8,["open"])])])])])])};export default d;
