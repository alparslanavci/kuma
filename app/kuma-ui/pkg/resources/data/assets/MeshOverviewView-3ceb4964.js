import{W as L,N as O}from"./kongponents.es-a3b26540.js";import{d as W,u as F,q as h,c as f,o as u,e as p,h as l,g as c,r as Q,a as y,w as i,b as m,k as N,j as S,t as b,F as w,f as E}from"./index-54ac506b.js";import{i as q,g as H,H as j,J,K as C,f as z,e as U,x as R,A as X,_ as Y}from"./RouteView.vue_vue_type_script_setup_true_lang-071b2880.js";import{_ as Z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-0234a2f7.js";import{D as T,a as A}from"./DefinitionListItem-374855f2.js";import{_ as ee}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-6c0510f8.js";import{_ as te}from"./StatusInfo.vue_vue_type_script_setup_true_lang-d60d8e1f.js";import{T as ae}from"./TextWithCopyButton-672300e4.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-ed4b2628.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-b8c360c8.js";import"./ErrorBlock-f3571895.js";const ne={class:"chart-box-list"},se=W({__name:"MeshCharts",setup(G){const o=q(),D=H(),x=F(),g=h(!1),_=h({total:0,online:0,partiallyDegraded:0,offline:0}),v=h({total:0,internal:0,external:0}),s=h({kumaDp:{},envoy:{}}),d=f(()=>{const e=[],{internal:t,external:a}=v.value;return t&&e.push({title:o.t("common.charts.services.internalLabel"),data:t}),a&&e.push({title:o.t("common.charts.services.externalLabel"),data:a}),{title:o.t("common.charts.services.title"),showTotal:!0,dataPoints:e}}),M=f(()=>{const e=[],{total:t,online:a,partiallyDegraded:n}=_.value;if(t>0){e.push({title:o.t("http.api.value.online"),statusKeyword:"online",data:a}),n>0&&e.push({title:o.t("http.api.value.partially_degraded"),statusKeyword:"partially_degraded",data:n});const r=t-n-a;r>0&&e.push({title:o.t("http.api.value.offline"),statusKeyword:"offline",data:r})}return{title:o.t("common.charts.dataPlaneProxies.title"),showTotal:!0,dataPoints:e}}),P=f(()=>{const e=Object.entries(s.value.kumaDp).map(([t,a])=>({title:t,data:a.total??0}));return e.sort((t,a)=>t.title==="unknown"?1:a.title==="unknown"?-1:j(t.title,a.title)),{title:o.t("common.charts.kumaDp.title"),subtitle:o.t("common.charts.kumaDp.subtitle"),dataPoints:e}}),V=f(()=>{const e=Object.entries(s.value.envoy).map(([t,a])=>({title:t,data:a.total??0}));return e.sort((t,a)=>t.title==="unknown"?1:a.title==="unknown"?-1:j(t.title,a.title)),{title:o.t("common.charts.envoy.title"),subtitle:o.t("common.charts.envoy.subtitle"),dataPoints:e}});B();async function B(){g.value=!0;const e=x.params.mesh;try{const t=await D.getMeshInsights({name:e}),a=J([t]);I(a),k(a),$(a)}catch{_.value={total:0,online:0,partiallyDegraded:0,offline:0},v.value={total:0,internal:0,external:0},s.value={kumaDp:{},envoy:{}}}finally{g.value=!1}}function I(e){const{total:t,online:a,partiallyDegraded:n}=e.dataplanes;_.value={total:t,online:a,partiallyDegraded:n,offline:t-a-n}}function k(e){const{total:t,internal:a,external:n}=e.services;v.value={total:t,internal:a,external:n}}function $(e){s.value=e.dpVersions}return(e,t)=>(u(),p("div",ne,[l(C,{data:d.value},null,8,["data"]),c(),l(C,{data:M.value},null,8,["data"]),c(),l(C,{data:P.value},null,8,["data"]),c(),l(C,{data:V.value},null,8,["data"])]))}});const le=z(se,[["__scopeId","data-v-375c50a1"]]),oe={class:"stack"},re={class:"columns"},ie={key:0},ue=W({__name:"MeshOverviewView",setup(G){const{t:o}=q(),D=H(),x=F(),g=U(),_=h(!0),v=h(!1),s=h(null),d=h(null),M=f(()=>{if(s.value===null||d.value===null)return null;const{name:e,creationTime:t,modificationTime:a}=s.value;return{name:e,created:R(t),modified:R(a),"Data Plane Proxies":d.value.dataplanes.total}}),P=f(()=>{var K;if(s.value===null)return null;const e=k(s.value,"mtls"),t=k(s.value,"logging"),a=k(s.value,"metrics"),n=k(s.value,"tracing"),r=!!((K=s.value.routing)!=null&&K.localityAwareLoadBalancing);return{mtls:e,logging:t,metrics:a,tracing:n,localityAwareLoadBalancing:r}}),V=f(()=>g.state.sidebar.insights.mesh.policies.total),B=f(()=>g.state.policyTypes.map(e=>{var t,a;return{...e,length:((a=(t=d.value)==null?void 0:t.policies[e.name])==null?void 0:a.total)??0}}));I();async function I(){_.value=!0,v.value=!1;const e=x.params.mesh;try{s.value=await D.getMesh({name:e}),d.value=await D.getMeshInsights({name:e});const t=J([d.value]);g.state.currentMeshPolicies=t.policies}catch(t){v.value=!0,s.value=null,d.value=null,console.error(t)}finally{_.value=!1}}function k(e,t){if(e===null||e[t]===void 0)return!1;const a=e[t].enabledBackend??e[t].defaultBackend??e[t].backends[0].name,n=e[t].backends.find(r=>r.name===a);return`${n.type} / ${n.name}`}async function $(e){const t=x.params.mesh;return await D.getMesh({name:t},e)}return(e,t)=>{const a=Q("router-link");return u(),y(Y,null,{default:i(()=>[l(Z,{title:m(o)("meshes.routes.overview.title")},null,8,["title"]),c(),l(X,null,{default:i(()=>[N("div",oe,[l(m(L),null,{body:i(()=>[l(le)]),_:1}),c(),s.value!==null?(u(),y(m(L),{key:0},{body:i(()=>[N("div",re,[l(te,{"is-loading":_.value,"has-error":v.value,"is-empty":s.value===null||d.value===null},{default:i(()=>[l(T,null,{default:i(()=>[(u(!0),p(w,null,S(M.value,(n,r)=>(u(),y(A,{key:r,term:m(o)(`http.api.property.${r}`)},{default:i(()=>[typeof n=="boolean"?(u(),y(m(O),{key:0,appearance:n?"success":"danger"},{default:i(()=>[c(b(n?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):r==="name"&&typeof n=="string"?(u(),y(ae,{key:1,text:n},null,8,["text"])):(u(),p(w,{key:2},[c(b(n),1)],64))]),_:2},1032,["term"]))),128))]),_:1})]),_:1},8,["is-loading","has-error","is-empty"]),c(),l(T,null,{default:i(()=>[(u(!0),p(w,null,S(P.value,(n,r)=>(u(),y(A,{key:r,term:m(o)(`http.api.property.${r}`)},{default:i(()=>[typeof n=="boolean"?(u(),y(m(O),{key:0,appearance:n?"success":"danger"},{default:i(()=>[c(b(n?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(u(),p(w,{key:1},[c(b(n),1)],64))]),_:2},1032,["term"]))),128))]),_:1}),c(),l(T,null,{default:i(()=>[l(A,{term:`Policies (${V.value})`},{default:i(()=>[N("ul",null,[(u(!0),p(w,null,S(B.value,(n,r)=>(u(),p(w,{key:r},[n.length!==0?(u(),p("li",ie,[l(a,{to:{name:"policies-list-view",params:{policyPath:n.path}}},{default:i(()=>[c(b(n.name)+": "+b(n.length),1)]),_:2},1032,["to"])])):E("",!0)],64))),128))])]),_:1},8,["term"])]),_:1})])]),_:1})):E("",!0),c(),l(m(L),null,{body:i(()=>{var n;return[l(ee,{id:"code-block-mesh","resource-fetcher":$,"resource-fetcher-watch-key":((n=s.value)==null?void 0:n.name)||null},null,8,["resource-fetcher-watch-key"])]}),_:1})])]),_:1})]),_:1})}}});const be=z(ue,[["__scopeId","data-v-6d669c67"]]);export{be as default};