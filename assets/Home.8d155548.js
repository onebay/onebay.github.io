import{e,u as a,f as t,g as s,h as l,o,c as i,b as n,i as r,t as c,_ as v,w as d,p as u,j as f,F as m,k as p,r as h,l as k}from"./app.1827b798.js";const x=d("data-v-048d90ae");u("data-v-048d90ae");const y={key:0,class:"home-hero"},g={key:0,class:"figure"},b={key:1,id:"main-title",class:"title"},$={key:2,class:"description"};f();var _=e({expose:[],setup(e){const d=a(),u=t(),f=s((()=>u.value.heroImage||m.value||h.value||_.value)),m=s((()=>null!==u.value.heroText)),p=s((()=>u.value.heroText||d.value.title)),h=s((()=>null!==u.value.tagline)),k=s((()=>u.value.tagline||d.value.description)),_=s((()=>u.value.actionLink&&u.value.actionText)),I=s((()=>u.value.altActionLink&&u.value.altActionText));return x(((e,a)=>l(f)?(o(),i("header",y,[e.$frontmatter.heroImage?(o(),i("figure",g,[n("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):r("v-if",!0),l(m)?(o(),i("h1",b,c(l(p)),1)):r("v-if",!0),l(h)?(o(),i("p",$,c(l(k)),1)):r("v-if",!0),l(_)?(o(),i(v,{key:3,item:{link:l(u).actionLink,text:l(u).actionText},class:"action"},null,8,["item"])):r("v-if",!0),l(I)?(o(),i(v,{key:4,item:{link:l(u).altActionLink,text:l(u).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)))}});_.__scopeId="data-v-048d90ae";const I=d("data-v-291bd3d4");u("data-v-291bd3d4");const T={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},w={class:"features"},j={key:0,class:"title"},B={key:1,class:"details"};f();var C=e({expose:[],setup(e){const a=t(),v=s((()=>a.value.features&&a.value.features.length>0)),d=s((()=>a.value.features?a.value.features:[]));return I(((e,a)=>l(v)?(o(),i("div",T,[n("div",A,[n("div",L,[n("div",w,[(o(!0),i(m,null,p(l(d),((e,a)=>(o(),i("section",{key:a,class:"feature"},[e.title?(o(),i("h2",j,c(e.title),1)):r("v-if",!0),e.details?(o(),i("p",B,c(e.details),1)):r("v-if",!0)])))),128))])])])])):r("v-if",!0)))}});C.__scopeId="data-v-291bd3d4";const F={},q=d("data-v-04341408");u("data-v-04341408");const z={key:0,class:"footer"},D={class:"container"},E={class:"text"};f();const G=q(((e,a)=>e.$frontmatter.footer?(o(),i("footer",z,[n("div",D,[n("p",E,c(e.$frontmatter.footer),1)])])):r("v-if",!0)));F.render=G,F.__scopeId="data-v-04341408";const H=d("data-v-7bd00ee6");u("data-v-7bd00ee6");const J={class:"home","aria-labelledby":"main-title"},K={class:"home-content"};f();var M=e({expose:[],setup:e=>H(((e,a)=>{const t=h("Content");return o(),i("main",J,[n(_),k(e.$slots,"hero"),n(C),n("div",K,[n(t)]),k(e.$slots,"features"),n(F),k(e.$slots,"footer")])}))});M.__scopeId="data-v-7bd00ee6";export default M;
