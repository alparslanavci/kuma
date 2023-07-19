import{d as P,o as n,e as B,h as S,g as F,a as p,f as I,F as L,u as T,q as f,w as b,b as O,k as V}from"./index-54ac506b.js";import{S as $}from"./ServiceSummary-54f9b0d9.js";import{D as z}from"./DataPlaneList-dbdc9a72.js";import{g as j,i as C,A as R,h as G,_ as Q}from"./RouteView.vue_vue_type_script_setup_true_lang-071b2880.js";import{_ as W}from"./RouteTitle.vue_vue_type_script_setup_true_lang-0234a2f7.js";import{_ as J}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-b8c360c8.js";import{E as K}from"./ErrorBlock-f3571895.js";import{Q as M}from"./QueryParameter-70743f73.js";import"./kongponents.es-a3b26540.js";import"./DefinitionListItem-374855f2.js";import"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-6c0510f8.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ed4b2628.js";import"./TextWithCopyButton-672300e4.js";import"./StatusInfo.vue_vue_type_script_setup_true_lang-d60d8e1f.js";import"./StatusBadge-53125992.js";import"./TagList-95beb0f2.js";import"./ContentWrapper-44500e14.js";import"./DataOverview-e68871ac.js";const H=P({__name:"ServiceDetails",props:{service:{type:Object,required:!0},externalService:{type:Object,required:!1,default:null},dataPlaneOverviews:{type:Array,required:!1,default:null},dppFilterFields:{type:Object,required:!0},selectedDppName:{type:String,required:!1,default:null}},emits:["load-dataplane-overviews"],setup(w,{emit:_}){const e=w;function o(u,v){var c;(((c=e.service.serviceType)==null?void 0:c.startsWith("gateway"))??!1)||delete v.gateway,_("load-dataplane-overviews",u,v)}return(u,v)=>{var a;return n(),B(L,null,[S($,{service:e.service,"external-service":w.externalService},null,8,["service","external-service"]),F(),e.dataPlaneOverviews!==null?(n(),p(z,{key:0,class:"mt-4","data-plane-overviews":e.dataPlaneOverviews,"dpp-filter-fields":e.dppFilterFields,"selected-dpp-name":e.selectedDppName,"is-gateway-view":((a=e.dataPlaneOverviews[0])==null?void 0:a.dataplane.networking.gateway)!==void 0,onLoadData:o},null,8,["data-plane-overviews","dpp-filter-fields","selected-dpp-name","is-gateway-view"])):I("",!0)],64)}}}),U={class:"service-details"},fe=P({__name:"ServiceDetailView",props:{selectedDppName:{type:String,required:!1,default:null}},setup(w){const _=w,e=j(),o=T(),{t:u}=C(),v={name:{description:"filter by name or parts of a name"},protocol:{description:"filter by “kuma.io/protocol” value"},tag:{description:"filter by tags (e.g. “tag: version:2”)"},zone:{description:"filter by “kuma.io/zone” value"}},a=f(null),c=f(null),y=f(null),h=f(!0),g=f(null);N();function N(){const t=M.get("filterFields"),l=t!==null?JSON.parse(t):{};A(0,l)}async function A(t,l={}){h.value=!0,g.value=null,a.value=null,c.value=null,y.value=null;const r=o.params.mesh,m=o.params.service;try{a.value=await e.getServiceInsight({mesh:r,name:m}),a.value.serviceType==="external"?c.value=await e.getExternalServiceByServiceInsightName(r,m):await k(t,l)}catch(s){s instanceof Error?g.value=s:console.error(s)}finally{h.value=!1}}async function k(t,l){const r=o.params.mesh,m=o.params.service;try{const s=q(m,t,l),i=await e.getAllDataplaneOverviewsFromMesh({mesh:r},s);y.value=i.items??[]}catch{y.value=null}}function q(t,l,r){const s=`kuma.io/service:${t}`,i={...r,offset:l,size:50};if(i.tag){const x=Array.isArray(i.tag)?i.tag:[i.tag],D=[];for(const[d,E]of x.entries())E.startsWith("kuma.io/service:")&&D.push(d);for(let d=D.length-1;d===0;d--)x.splice(D[d],1);i.tag=x.concat(s)}else i.tag=s;return i}return(t,l)=>(n(),p(Q,null,{default:b(({route:r})=>[S(W,{title:O(u)("services.routes.item.title",{name:r.params.service})},null,8,["title"]),F(),S(R,{breadcrumbs:[{to:{name:"services-list-view",params:{mesh:r.params.mesh}},text:O(u)("services.routes.item.breadcrumbs")}]},{default:b(()=>[V("div",U,[h.value?(n(),p(G,{key:0})):g.value!==null?(n(),p(K,{key:1,error:g.value},null,8,["error"])):a.value===null?(n(),p(J,{key:2})):(n(),p(H,{key:3,service:a.value,"data-plane-overviews":y.value,"external-service":c.value,"dpp-filter-fields":v,"selected-dpp-name":_.selectedDppName,onLoadDataplaneOverviews:k},null,8,["service","data-plane-overviews","external-service","selected-dpp-name"]))])]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{fe as default};