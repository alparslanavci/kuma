import{_ as y,V as T,W as p,r as h,o as s,f as n,h as a,t as c,n as r,e as i,F as b,j as I,b as w,w as f,d as x,z as R,B as C,X as V}from"./index.6180ff6f.js";const B={name:"SubscriptionDetails",props:{details:{type:Object,required:!0},isDiscoverySubscription:{type:Boolean,default:!1}},computed:{detailsIterator(){var e;if(this.isDiscoverySubscription){const{lastUpdateTime:_,total:t,...d}=this.details.status;return d}return(e=this.details.status)==null?void 0:e.stat}},methods:{formatValue(e){return e?parseInt(e,10).toLocaleString("en").toString():0},readableDate(e){return T(e)},humanReadable(e){return p(e)},formatError(e){return e==="--"?"error calculating":e}}},l=e=>(R("data-v-2dfb031a"),e=e(),C(),e),F={key:0},K=l(()=>a("h5",{class:"overview-tertiary-title"}," General Information: ",-1)),L={key:0},N=l(()=>a("strong",null,"Global Instance ID:",-1)),j=i("\xA0 "),E={class:"mono"},P={key:1},q=l(()=>a("strong",null,"Control Plane Instance ID:",-1)),A=i("\xA0 "),G={class:"mono"},H={key:2},O=l(()=>a("strong",null,"Last Connected:",-1)),W={key:3},z=l(()=>a("strong",null,"Last Disconnected:",-1)),M={key:1},U={class:"overview-stat-grid"},X={class:"overview-tertiary-title"},J=i("\xA0 "),Q={class:"mono"},Y=i(" There are no subscription statistics for ");function Z(e,_,t,d,g,o){const D=h("KIcon"),S=h("KAlert");return s(),n("div",null,[t.details.globalInstanceId||t.details.connectTime||t.details.disconnectTime?(s(),n("div",F,[K,a("ul",null,[t.details.globalInstanceId?(s(),n("li",L,[N,j,a("span",E,c(t.details.globalInstanceId),1)])):r("",!0),t.details.controlPlaneInstanceId?(s(),n("li",P,[q,A,a("span",G,c(t.details.controlPlaneInstanceId),1)])):r("",!0),t.details.connectTime?(s(),n("li",H,[O,i("\xA0 "+c(o.readableDate(t.details.connectTime)),1)])):r("",!0),t.details.disconnectTime?(s(),n("li",W,[z,i("\xA0 "+c(o.readableDate(t.details.disconnectTime)),1)])):r("",!0)])])):r("",!0),o.detailsIterator?(s(),n("div",M,[a("ul",U,[(s(!0),n(b,null,I(o.detailsIterator,(k,u)=>(s(),n("li",{key:u},[a("h6",X,c(o.humanReadable(u))+": ",1),a("ul",null,[(s(!0),n(b,null,I(k,(v,m)=>(s(),n("li",{key:m},[a("strong",null,c(o.humanReadable(m))+":",1),J,a("span",Q,c(o.formatError(o.formatValue(v))),1)]))),128))])]))),128))])])):(s(),w(S,{key:2,appearance:"info",class:"mt-4"},{alertIcon:f(()=>[x(D,{icon:"portal"})]),alertMessage:f(()=>[Y,a("strong",null,c(t.details.id),1)]),_:1}))])}const oe=y(B,[["render",Z],["__scopeId","data-v-2dfb031a"]]),$={name:"SubscriptionHeader",props:{details:{type:Object,required:!0}},methods:{rawReadableDateFilter(e){return V(e)}}},ee={class:"text-lg font-medium"},te={class:"color-green-400"},ae={key:0,class:"ml-4 color-red-400"};function se(e,_,t,d,g,o){return s(),n("h4",ee,[a("span",te," Connect time: "+c(o.rawReadableDateFilter(t.details.connectTime)),1),t.details.disconnectTime?(s(),n("span",ae," Disconnect time: "+c(o.rawReadableDateFilter(t.details.disconnectTime)),1)):r("",!0)])}const ce=y($,[["render",se]]);export{oe as S,ce as a};