import{d as I,j as N,o as s,a as r,w as t,A as M,g as a,b as e,X as R,f as S,Y as F,r as K,h as i,q as V,t as P,s as l,e as T,F as A,M as O,x as q,$ as W,E as X,H as D}from"./index-8624ce1f.js";import{_ as Y}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-d3e12fcd.js";import{_ as j,A as G}from"./DataSource.vue_vue_type_script_setup_true_lang-45095b77.js";import{z as H,g as J,n as U,e as Q,A as ee,_ as te,o as oe,f as ne}from"./RouteView.vue_vue_type_script_setup_true_lang-d02ca438.js";import{_ as ae}from"./RouteTitle.vue_vue_type_script_setup_true_lang-73a33c91.js";import{S as se}from"./StatusBadge-6fc805ee.js";const ie=I({__name:"DeleteResourceModal",props:{actionButtonText:{type:String,required:!1,default:"Yes, delete"},confirmationText:{type:String,required:!1,default:""},deleteFunction:{type:Function,required:!0},isVisible:{type:Boolean,required:!0},modalId:{type:String,required:!0},title:{type:String,required:!1,default:"Delete"}},emits:["cancel","delete"],setup(C,{emit:d}){const c=C,o=N(!1);async function x(){o.value=!1;try{await c.deleteFunction(),d("delete")}catch{o.value=!0}}return(f,m)=>(s(),r(e(F),{"action-button-text":c.actionButtonText,"confirmation-text":c.confirmationText,"is-visible":c.isVisible,"modal-id":c.modalId,title:c.title,type:"danger","data-testid":"delete-resource-modal",onCanceled:m[0]||(m[0]=_=>d("cancel")),onProceed:x},{"body-content":t(()=>[M(f.$slots,"body-content"),a(),o.value?(s(),r(e(R),{key:0,class:"mt-4",appearance:"danger","is-dismissible":""},{alertMessage:t(()=>[M(f.$slots,"error")]),_:3})):S("",!0)]),_:3},8,["action-button-text","confirmation-text","is-visible","modal-id","title"]))}}),le=I({__name:"ZoneListView",props:{page:{type:Number,required:!0},size:{type:Number,required:!0}},setup(C){const d=C,c=H(),{t:o}=J(),x=U(),f=Q(),m=N(!1),_=N("");function Z(b){return b.map(y=>{var $;const{name:g}=y,h={name:"zone-cp-detail-view",params:{zone:g}};let u="",v="kubernetes",k=!0;((($=y.zoneInsight)==null?void 0:$.subscriptions)??[]).forEach(p=>{if(p.version&&p.version.kumaCp){u=p.version.kumaCp.version;const{kumaCpGlobalCompatible:L=!0}=p.version.kumaCp;k=L}p.config&&(v=JSON.parse(p.config).environment)});const z=oe(y.zoneInsight);return{detailViewRoute:h,name:g,status:z,zoneCpVersion:u,type:v,warnings:!k}})}async function B(){await x.deleteZone({name:_.value})}function w(){m.value=!m.value}function E(b){w(),_.value=b}return(b,y)=>{const g=K("RouterLink");return s(),r(te,{name:"zone-cp-list-view"},{default:t(({route:h})=>[i(ee,null,{title:t(()=>[V("h2",null,[i(ae,{title:e(o)("zone-cps.routes.items.title"),render:!0},null,8,["title"])])]),default:t(()=>[a(),e(f).getters["config/getMulticlusterStatus"]===!1?(s(),r(Y,{key:0})):(s(),r(j,{key:1,src:`/zone-cps?size=${d.size}&page=${d.page}`},{default:t(({data:u,error:v,refresh:k})=>[i(e(P),null,{body:t(()=>[i(G,{class:"zone-cp-collection","data-testid":"zone-cp-collection",headers:[{label:"Name",key:"name"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Type",key:"type"},{label:"Status",key:"status"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],"page-number":d.page,"page-size":d.size,total:u==null?void 0:u.total,items:u?Z(u.items):void 0,error:v,onChange:h.update},{name:t(({row:n,rowValue:z})=>[i(g,{to:n.detailViewRoute,"data-testid":"detail-view-link"},{default:t(()=>[a(l(z),1)]),_:2},1032,["to"])]),zoneCpVersion:t(({rowValue:n})=>[a(l(n||e(o)("common.collection.none")),1)]),type:t(({rowValue:n})=>[a(l(n||e(o)("common.collection.none")),1)]),status:t(({rowValue:n})=>[n?(s(),r(se,{key:0,status:n},null,8,["status"])):(s(),T(A,{key:1},[a(l(e(o)("common.collection.none")),1)],64))]),warnings:t(({rowValue:n})=>[n?(s(),r(e(O),{key:0,label:e(o)("zone-cps.list.version_mismatch")},{default:t(()=>[i(e(q),{class:"mr-1",icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"20","hide-title":""})]),_:1},8,["label"])):(s(),T(A,{key:1},[a(l(e(o)("common.collection.none")),1)],64))]),actions:t(({row:n})=>[i(e(W),{class:"actions-dropdown","data-testid":"actions-dropdown","kpop-attributes":{placement:"bottomEnd",popoverClasses:"mt-5 more-actions-popover"},width:"150"},{default:t(()=>[i(e(X),{class:"non-visual-button",appearance:"secondary",size:"small"},{icon:t(()=>[i(e(q),{color:"var(--black-400)",icon:"more",size:"16"})]),_:1})]),items:t(()=>[i(e(D),{item:{to:n.detailViewRoute,label:e(o)("common.collection.actions.view")}},null,8,["item"]),a(),e(c)("KUMA_ZONE_CREATION_FLOW")==="enabled"?(s(),r(e(D),{key:0,"has-divider":"","is-dangerous":"","data-testid":"dropdown-delete-item",onClick:z=>E(n.name)},{default:t(()=>[a(l(e(o)("common.collection.actions.delete")),1)]),_:2},1032,["onClick"])):S("",!0)]),_:2},1024)]),_:2},1032,["page-number","page-size","total","items","error","onChange"])]),_:2},1024),a(),m.value?(s(),r(ie,{key:0,"confirmation-text":_.value,"delete-function":B,"is-visible":m.value,"modal-id":"delete-zone-modal","action-button-text":e(o)("zones.delete.confirmModal.proceedText"),title:e(o)("zones.delete.confirmModal.title"),onCancel:w,onDelete:()=>{w(),k()}},{"body-content":t(()=>[V("p",null,l(e(o)("zones.delete.confirmModal.text1",{zoneName:_.value})),1),a(),V("p",null,l(e(o)("zones.delete.confirmModal.text2")),1)]),error:t(()=>[a(l(e(o)("zones.delete.confirmModal.errorText")),1)]),_:2},1032,["confirmation-text","is-visible","action-button-text","title","onDelete"])):S("",!0)]),_:2},1032,["src"]))]),_:2},1024)]),_:1})}}});const fe=ne(le,[["__scopeId","data-v-8f37be0f"]]);export{fe as default};
