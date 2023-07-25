import{A as x,_ as b,S as D,a as O}from"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-cb670599.js";import{a as B,D as C}from"./DefinitionListItem-852da124.js";import{E as c}from"./EnvoyData-6808ddfa.js";import{T as S}from"./TabsWidget-a07f49a9.js";import{T as g}from"./TextWithCopyButton-96eef015.js";import{i as T}from"./RouteView.vue_vue_type_script_setup_true_lang-5211ad2b.js";import{d as A,c as m,r as q,o as t,a as l,w as e,k as L,g as d,h as s,t as h,e as v,j as y,b as V,F as p}from"./index-9404de83.js";const Z={class:"entity-heading"},H=A({__name:"ZoneIngressDetails",props:{zoneIngressOverview:{type:Object,required:!0}},setup(f){const u=f,{t:_}=T(),z=[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Ingress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],I=m(()=>({name:"zone-ingress-detail-view",params:{zoneIngress:u.zoneIngressOverview.name}})),n=m(()=>{const{type:i,name:a}=u.zoneIngressOverview;return{type:i,name:a}}),k=m(()=>{var a;const i=((a=u.zoneIngressOverview.zoneIngressInsight)==null?void 0:a.subscriptions)??[];return Array.from(i).reverse()});return(i,a)=>{const w=q("router-link");return t(),l(S,{tabs:z},{tabHeader:e(()=>[L("h1",Z,[d(`
        Zone Ingress:

        `),s(g,{text:n.value.name},{default:e(()=>[s(w,{to:I.value},{default:e(()=>[d(h(n.value.name),1)]),_:1},8,["to"])]),_:1},8,["text"])])]),overview:e(()=>[s(C,null,{default:e(()=>[(t(!0),v(p,null,y(n.value,(o,r)=>(t(),l(B,{key:r,term:V(_)(`http.api.property.${r}`)},{default:e(()=>[r==="name"?(t(),l(g,{key:0,text:o},null,8,["text"])):(t(),v(p,{key:1},[d(h(o),1)],64))]),_:2},1032,["term"]))),128))]),_:1})]),insights:e(()=>[s(O,{"initially-open":0},{default:e(()=>[(t(!0),v(p,null,y(k.value,(o,r)=>(t(),l(x,{key:r},{"accordion-header":e(()=>[s(b,{details:o},null,8,["details"])]),"accordion-content":e(()=>[s(D,{details:o,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),"xds-configuration":e(()=>[s(c,{"data-path":"xds","zone-ingress-name":n.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),"envoy-stats":e(()=>[s(c,{"data-path":"stats","zone-ingress-name":n.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),"envoy-clusters":e(()=>[s(c,{"data-path":"clusters","zone-ingress-name":n.value.name,"query-key":"envoy-data-zone-ingress"},null,8,["zone-ingress-name"])]),_:1})}}});export{H as _};