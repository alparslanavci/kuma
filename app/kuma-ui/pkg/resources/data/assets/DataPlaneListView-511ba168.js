import{d as _,o,a as l,w as s,h as i,i as f,b as p,g,k as h}from"./index-8422fc56.js";import{D as y,K as b}from"./KFilterBar-a7462acc.js";import{e as k,g as z,A as v,E as q,_ as w,d as V}from"./RouteView.vue_vue_type_script_setup_true_lang-90043e39.js";import{_ as $}from"./RouteTitle.vue_vue_type_script_setup_true_lang-2207a44e.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-0fd32299.js";import"./dataplane-30467516.js";const x=_({__name:"DataPlaneListView",props:{page:{},size:{},search:{},query:{},mesh:{}},setup(c){const e=c,{t:u}=k();return(d,C)=>(o(),l(w,{name:"data-planes-list-view"},{default:s(({route:n})=>[i(z,{src:`/meshes/${e.mesh}/dataplanes?page=${e.page}&size=${d.size}&search=${e.search}`},{default:s(({data:a,error:r})=>[i(v,null,{title:s(()=>[f("h2",null,[i($,{title:p(u)("data-planes.routes.items.title"),render:!0},null,8,["title"])])]),default:s(()=>[g(),i(p(h),null,{body:s(()=>[r!==void 0?(o(),l(q,{key:0,error:r},null,8,["error"])):(o(),l(y,{key:1,"data-testid":"data-plane-collection",class:"data-plane-collection","page-number":e.page,"page-size":e.size,total:a==null?void 0:a.total,items:a==null?void 0:a.items,error:r,onChange:({page:t,size:m})=>{n.update({page:String(t),size:String(m)})}},{toolbar:s(()=>[i(b,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:e.query,fields:{name:{description:"filter by name or parts of a name"},service:{description:"filter by “kuma.io/service” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:t=>n.update({query:t.query,s:t.query.length>0?JSON.stringify(t.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"])]),_:2},1032,["page-number","page-size","total","items","error","onChange"]))]),_:2},1024)]),_:2},1024)]),_:2},1032,["src"])]),_:1}))}});const S=V(x,[["__scopeId","data-v-ed46ed4e"]]);export{S as default};
