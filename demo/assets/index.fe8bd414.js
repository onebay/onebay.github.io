/* empty css              */import{w as a}from"./index.ff1bd30d.js";import{d as e,r as l,o as n,c as s,a as d,t}from"./vendor.5a70ca8d.js";const i=e({name:"RangePage",components:{Range:a},data:()=>({value1:[50,60],value2:[50,60]}),methods:{handleChange(a,e){this[a]=e}}}),v={class:"page"},o={class:"doc-body"},c={class:"panel"},u=d("div",{class:"panel__title"},"Basic usage",-1),r={class:"panel__content"},g={class:"example-item"},p={class:"panel"},m=d("div",{class:"panel__title"},"Custom style",-1),h={class:"panel__content"},_={class:"example-item"},C={class:"panel"},b=d("div",{class:"panel__title"},"Disabled state",-1),f={class:"panel__content"};i.render=function(a,e,i,x,R,j){const y=l("DocsHeader"),D=l("Range");return n(),s("div",v,[d(y,{title:"Range"}),d("div",o,[d("div",c,[u,d("div",r,[d("div",g,"Value range："+t(a.value1[0])+"~"+t(a.value1[1]),1),d(D,{min:30,max:90,value:a.value1,onChange:a.handleChange.bind(this,"value1")},null,8,["value","onChange"])])]),d("div",p,[m,d("div",h,[d("div",_,"Value range："+t(a.value2[0])+"~"+t(a.value2[1]),1),d(D,{sliderStyle:{backgroundColor:"#6190E8"},value:a.value2,onChange:a.handleChange.bind(this,"value2")},null,8,["value","onChange"])])]),d("div",C,[b,d("div",f,[d(D,{value:[30,50],disabled:""})])])])])};export default i;
