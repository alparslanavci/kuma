import{d as h,o,a as n,w as i,h as s,i as b,b as c,g as p,e as w,F as x,v as $,k,$ as S,t as z,f as V}from"./index-8422fc56.js";import{e as q,A as C,g as P,_ as B,d as T}from"./RouteView.vue_vue_type_script_setup_true_lang-90043e39.js";import{_ as F}from"./RouteTitle.vue_vue_type_script_setup_true_lang-2207a44e.js";import{D as N,K as A}from"./KFilterBar-a7462acc.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-0fd32299.js";import"./dataplane-30467516.js";const I=h({__name:"ServiceDataPlaneProxiesView",props:{page:{},size:{},search:{},query:{},gatewayType:{}},setup(_){const r=_,{t:f}=q();return(K,L)=>(o(),n(B,{name:"service-data-plane-proxies-view","data-testid":"service-data-plane-proxies-view"},{default:i(({route:a})=>[s(C,null,{title:i(()=>[b("h2",null,[s(F,{title:c(f)("services.routes.item.navigation.service-data-plane-proxies-view"),render:!0},null,8,["title"])])]),default:i(()=>[p(),s(P,{src:`/meshes/${a.params.mesh}/dataplanes/for/${a.params.service}/of/${r.gatewayType}?page=${r.page}&size=${r.size}&search=${r.search}`},{default:i(({data:t,error:y})=>{var m,u,d,g;return[(o(!0),w(x,null,$([typeof((g=(d=(u=(m=t==null?void 0:t.items)==null?void 0:m[0])==null?void 0:u.dataplane)==null?void 0:d.networking)==null?void 0:g.gateway)>"u"],l=>(o(),n(c(k),{key:l},{body:i(()=>[s(N,{"data-testid":"data-plane-collection",class:"data-plane-collection","page-number":r.page,"page-size":r.size,total:t==null?void 0:t.total,items:t==null?void 0:t.items,error:y,gateways:l,onChange:({page:e,size:v})=>{a.update({page:String(e),size:String(v)})}},{toolbar:i(()=>[s(A,{class:"data-plane-proxy-filter",placeholder:"tag: 'kuma.io/protocol: http'",query:r.query,fields:{name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},onFieldsChange:e=>a.update({query:e.query,s:e.query.length>0?JSON.stringify(e.fields):""})},null,8,["placeholder","query","fields","onFieldsChange"]),p(),l?(o(),n(c(S),{key:0,label:"Type","overlay-label":!0,items:[{label:"All",value:"all"},{label:"Builtin",value:"builtin"},{label:"Delegated",value:"delegated"}].map(e=>({...e,selected:e.value===r.gatewayType})),appearance:"select",onSelected:e=>a.update({gatewayType:String(e.value)})},{"item-template":i(({item:e})=>[p(z(e.label),1)]),_:2},1032,["items","onSelected"])):V("",!0)]),_:2},1032,["page-number","page-size","total","items","error","gateways","onChange"])]),_:2},1024))),128))]}),_:2},1032,["src"])]),_:2},1024)]),_:1}))}});const M=T(I,[["__scopeId","data-v-2791905d"]]);export{M as default};
