import{L as g}from"./kongponents.es-79677c68.js";import{_ as h}from"./CodeBlock.vue_vue_type_style_index_0_lang-65c4c937.js";import{_ as v}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-01ce080a.js";import{E}from"./ErrorBlock-6baedf31.js";import{_ as N}from"./LoadingBlock.vue_vue_type_script_setup_true_lang-d0e41aae.js";import{d as _,o as r,h as f,a as i,R as k,r as d,q as u,i as q,g as z,e as c,w as p,f as y,u as P}from"./runtime-dom.esm-bundler-062436f2.js";import{u as S}from"./index-c2dc68c3.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const I={key:3},$=_({__name:"StatusInfo",props:{isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},error:{type:[Error,null],required:!1,default:null}},setup(t){return(e,o)=>(r(),f("div",null,[t.isLoading?(r(),i(N,{key:0})):t.hasError?(r(),i(E,{key:1,error:t.error},null,8,["error"])):t.isEmpty?(r(),i(v,{key:2})):(r(),f("div",I,[k(e.$slots,"default")]))]))}}),D={class:"envoy-data"},b={class:"envoy-data-actions"},w=_({__name:"EnvoyData",props:{dataPath:{type:String,required:!0},queryKey:{type:String,required:!1,default:null},mesh:{type:String,required:!1,default:""},dppName:{type:String,required:!1,default:""},zoneIngressName:{type:String,required:!1,default:""},zoneEgressName:{type:String,required:!1,default:""}},setup(t){const e=t,o=S(),n=d(!0),l=d(null),m=d("");u(()=>e.dppName,function(){s()}),u(()=>e.zoneIngressName,function(){s()}),u(()=>e.zoneEgressName,function(){s()}),q(function(){s()});async function s(){l.value=null,n.value=!0;try{let a="";e.mesh!==""&&e.dppName!==""?a=await o.getDataplaneData({dataPath:e.dataPath,mesh:e.mesh,dppName:e.dppName}):e.zoneIngressName!==""?a=await o.getZoneIngressData({dataPath:e.dataPath,zoneIngressName:e.zoneIngressName}):e.zoneEgressName!==""&&(a=await o.getZoneEgressData({dataPath:e.dataPath,zoneEgressName:e.zoneEgressName})),m.value=typeof a=="string"?a:JSON.stringify(a,null,2)}catch(a){a instanceof Error?l.value=a:console.error(a)}finally{n.value=!1}}return(a,x)=>(r(),f("div",D,[z("div",b,[c(P(g),{disabled:n.value,appearance:"primary",icon:"redo","data-testid":"envoy-data-refresh-button",onClick:s},{default:p(()=>[y(`
        Refresh
      `)]),_:1},8,["disabled"])]),y(),c($,{"has-error":l.value!==null,"is-loading":n.value,error:l.value},{default:p(()=>[c(h,{id:`code-block-${e.dataPath}`,language:"json",code:m.value,"is-searchable":"","query-key":e.queryKey??`code-block-${e.dataPath}`},null,8,["id","code","query-key"])]),_:1},8,["has-error","is-loading","error"])]))}});const J=B(w,[["__scopeId","data-v-94cfd170"]]);export{J as E,$ as _};
