import{d as h,D as b,j as p,J as y,o as _,a as k,C as $,v as B,w as C,e as S,A as g,b as v,W as w,B as A,g as z,F as x,q as N}from"./index-bea90600.js";import{f as q,H as D}from"./RouteView.vue_vue_type_script_setup_true_lang-f5e9f947.js";const E={key:0,class:"app-collection-toolbar"},L=h({__name:"AppCollection",props:{total:{default:0},pageNumber:{},pageSize:{},items:{},error:{}},emits:["change"],setup(d,{emit:i}){const o=d,u=b(),r=p(o.items),s=p(0);y(()=>o.items,()=>{s.value++,r.value=o.items});const a=n=>{const c=n.target.closest("tr");if(c){const t=c.querySelector("a");t!==null&&t.click()}};return(n,c)=>(_(),k(v(w),{class:"app-collection","has-error":typeof o.error<"u","pagination-total-items":o.total,"initial-fetcher-params":{page:o.pageNumber,pageSize:o.pageSize},"fetcher-cache-key":String(s.value),fetcher:({page:t,pageSize:l,query:e})=>(i("change",{page:t,size:l,s:e}),{data:r.value}),"cell-attrs":({headerKey:t})=>({class:`${t}-column`}),"empty-state-icon-size":"96","disable-sorting":"","hide-pagination-when-optional":"","onRow:click":a},$({_:2},[B(Object.keys(v(u)),t=>({name:t,fn:C(({row:l,rowValue:e})=>[t==="toolbar"?(_(),S("div",E,[g(n.$slots,"toolbar",{},void 0,!0)])):g(n.$slots,t,{key:1,row:l,rowValue:e},void 0,!0)])}))]),1032,["has-error","pagination-total-items","initial-fetcher-params","fetcher-cache-key","fetcher","cell-attrs"]))}});const W=q(L,[["__scopeId","data-v-f33076d8"]]),j=N("span",{class:"visually-hidden"},null,-1),H=h({__name:"DataSource",props:{src:{type:String,required:!0}},emits:["change","error"],setup(d,{emit:i}){const o=d,u=D(),r=p(void 0),s=p(void 0);let a={};const n=Symbol(""),c=async e=>{if(r.value=void 0,a=t(a),a.src=e,e==="")return;a.controller=new AbortController;const f=u.source(e,n);f.addEventListener("message",m=>{r.value=m.data,s.value=void 0,i("change",r.value)},{signal:a.controller.signal}),f.addEventListener("error",m=>{s.value=m.error,i("error",s.value)},{signal:a.controller.signal})},t=e=>(typeof e.controller<"u"&&e.controller.abort(),typeof e.src<"u"&&u.close(e.src,n),{});y(()=>o.src,e=>c(e),{immediate:!0}),A(()=>{a=t(a)});const l=()=>{c(o.src)};return(e,f)=>(_(),S(x,null,[g(e.$slots,"default",{data:r.value,error:s.value,refresh:l}),z(),j],64))}});export{W as A,H as _};
