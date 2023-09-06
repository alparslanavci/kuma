import{d as V,c as P,r as x,o as e,e as i,i as s,g as t,F as f,v as b,t as c,h as d,w as n,f as B,a as y,E as A,q as R,s as C,b as D,k as j}from"./index-8422fc56.js";import{A as F,a as K}from"./AccordionList-0d929a26.js";import{d as O,e as q,A as H,g as I,E as S,f as M,_ as T}from"./RouteView.vue_vue_type_script_setup_true_lang-90043e39.js";import{_ as z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-2207a44e.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-0fd32299.js";const v=h=>(R("data-v-c7f30269"),h=h(),C(),h),E={class:"policies-list"},J={class:"mesh-gateway-policy-list"},Q=v(()=>s("h3",{class:"mb-2"},`
        Gateway policies
      `,-1)),U={key:0},W=v(()=>s("h3",{class:"mt-6 mb-2"},`
        Listeners
      `,-1)),X=v(()=>s("b",null,"Host",-1)),Y=v(()=>s("h4",{class:"mt-2 mb-2"},`
                Routes
              `,-1)),Z={class:"dataplane-policy-header"},ee=v(()=>s("b",null,"Route",-1)),te=v(()=>s("b",null,"Service",-1)),se={key:0,class:"badge-list"},ae={class:"mt-1"},oe=V({__name:"GatewayDataplanePolicyList",props:{gatewayDataplane:{},policyTypesByName:{}},setup(h){const w=h,G=P(()=>N(w.gatewayDataplane)),L=P(()=>g(w.gatewayDataplane.policies));function N(r){const u=[],o=r.listeners??[];for(const p of o)for(const a of p.hosts)for(const _ of a.routes){const l=[];for(const $ of _.destinations){const m=g($.policies),k={routeName:_.route,route:{name:"policy-detail-view",params:{mesh:r.gateway.mesh,policyPath:"meshgatewayroutes",policy:_.route}},service:$.tags["kuma.io/service"],policies:m};l.push(k)}u.push({protocol:p.protocol,port:p.port,hostName:a.hostName,routeEntries:l})}return u}function g(r){if(r===void 0)return[];const u=[];for(const o of Object.values(r)){const p=w.policyTypesByName[o.type];u.push({type:o.type,name:o.name,route:{name:"policy-detail-view",params:{mesh:o.mesh,policyPath:p.path,policy:o.name}}})}return u}return(r,u)=>{const o=x("router-link"),p=x("KBadge");return e(),i("div",E,[s("div",J,[Q,t(),L.value.length>0?(e(),i("ul",U,[(e(!0),i(f,null,b(L.value,(a,_)=>(e(),i("li",{key:_},[s("span",null,c(a.type),1),t(`:

          `),d(o,{to:a.route},{default:n(()=>[t(c(a.name),1)]),_:2},1032,["to"])]))),128))])):B("",!0),t(),W,t(),s("div",null,[(e(!0),i(f,null,b(G.value,(a,_)=>(e(),i("div",{key:_},[s("div",null,[s("div",null,[X,t(": "+c(a.hostName)+":"+c(a.port)+" ("+c(a.protocol)+`)
            `,1)]),t(),a.routeEntries.length>0?(e(),i(f,{key:0},[Y,t(),d(K,{"initially-open":[],"multiple-open":""},{default:n(()=>[(e(!0),i(f,null,b(a.routeEntries,(l,$)=>(e(),y(F,{key:$},A({"accordion-header":n(()=>[s("div",Z,[s("div",null,[s("div",null,[ee,t(": "),d(o,{to:l.route},{default:n(()=>[t(c(l.routeName),1)]),_:2},1032,["to"])]),t(),s("div",null,[te,t(": "+c(l.service),1)])]),t(),l.policies.length>0?(e(),i("div",se,[(e(!0),i(f,null,b(l.policies,(m,k)=>(e(),y(p,{key:`${_}-${k}`},{default:n(()=>[t(c(m.type),1)]),_:2},1024))),128))])):B("",!0)])]),_:2},[l.policies.length>0?{name:"accordion-content",fn:n(()=>[s("ul",ae,[(e(!0),i(f,null,b(l.policies,(m,k)=>(e(),i("li",{key:`${_}-${k}`},[t(c(m.type)+`:

                        `,1),d(o,{to:m.route},{default:n(()=>[t(c(m.name),1)]),_:2},1032,["to"])]))),128))])]),key:"0"}:void 0]),1024))),128))]),_:2},1024)],64)):B("",!0)])]))),128))])])])}}});const ne=O(oe,[["__scopeId","data-v-c7f30269"]]),pe=V({__name:"GatewayPoliciesView",setup(h){const{t:w}=q();return(G,L)=>(e(),y(T,{name:"gateway-policies-view","data-testid":"gateway-policies-view"},{default:n(({route:N})=>[d(H,null,{title:n(()=>[s("h2",null,[d(z,{title:D(w)("gateways.routes.item.navigation.gateway-policies-view"),render:!0},null,8,["title"])])]),default:n(()=>[t(),d(D(j),null,{body:n(()=>[d(I,{src:"/*/policy-types"},{default:n(({data:g,error:r})=>[d(I,{src:`/meshes/${N.params.mesh}/gateways/${N.params.name}/policies`},{default:n(({data:u,error:o})=>[r?(e(),y(S,{key:0,error:r},null,8,["error"])):o?(e(),y(S,{key:1,error:o},null,8,["error"])):u===void 0||g===void 0?(e(),y(M,{key:2})):(e(),y(ne,{key:3,"policy-types-by-name":g.policies.reduce((p,a)=>Object.assign(p,{[a.name]:a}),{}),"gateway-dataplane":u},null,8,["policy-types-by-name","gateway-dataplane"]))]),_:2},1032,["src"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}))}});export{pe as default};
