import{d,L as p,a7 as h,r as f,o as w,g as b,w as n,h as t,A as x,m as R,a8 as V,C as N,i as l,l as c,_ as v}from"./index-c9de75c3.js";import{N as C}from"./NavTabs-6bbcae9b.js";const A=d({__name:"MeshTabsView",setup(B){var m;const{t:r}=p(),_=(((m=h().getRoutes().find(e=>e.name==="mesh-tabs-view"))==null?void 0:m.children)??[]).map(e=>{var u,i;const o=typeof e.name>"u"?(u=e.children)==null?void 0:u[0]:e,s=o.name,a=((i=o.meta)==null?void 0:i.module)??"";return{title:r(`meshes.routes.item.navigation.${s}`),routeName:s,module:a}});return(e,o)=>{const s=f("RouterView");return w(),b(v,null,{default:n(({route:a})=>[t(x,null,{title:n(()=>[R("h1",null,[t(V,{text:a.params.mesh},{default:n(()=>[t(N,{title:l(r)("meshes.routes.item.title",{name:a.params.mesh}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:n(()=>[c(),t(C,{class:"route-mesh-view-tabs",tabs:l(_)},null,8,["tabs"]),c(),t(s)]),_:2},1024)]),_:1})}}});export{A as default};