import{d as x,a3 as R,a4 as $,r as o,o as r,g as c,w as t,h as s,i as w,m as k,a5 as B,l as V,E as C,s as G,j as N,F as T,n as D}from"./index-77212499.js";import{N as P}from"./NavTabs-e0c1bcdf.js";const j=x({__name:"DataPlaneDetailTabsView",props:{isGatewayView:{type:Boolean,required:!1,default:!1}},setup(b){var _;const n=b,{t:p}=R(),v=(((_=$().getRoutes().find(a=>a.name===`${n.isGatewayView?"gateway":"data-plane"}-detail-tabs-view`))==null?void 0:_.children)??[]).map(a=>{var i,m;const u=typeof a.name>"u"?(i=a.children)==null?void 0:i[0]:a,l=u.name,d=((m=u.meta)==null?void 0:m.module)??"";return{title:p(`${n.isGatewayView?"gateways":"data-planes"}.routes.item.navigation.${l}`),routeName:l,module:d}});return(a,u)=>{const l=o("RouteTitle"),d=o("RouterView"),f=o("DataSource"),i=o("AppView"),m=o("RouteView");return r(),c(m,{name:"data-plane-detail-tabs-view",params:{mesh:"",dataPlane:""}},{default:t(({route:e})=>[s(i,{breadcrumbs:[{to:{name:"mesh-detail-view",params:{mesh:e.params.mesh}},text:e.params.mesh},{to:{name:`${n.isGatewayView?"gateways":"data-planes"}-list-view`,params:{mesh:e.params.mesh}},text:w(p)(`${n.isGatewayView?"gateways":"data-planes"}.routes.item.breadcrumbs`)}]},{title:t(()=>[k("h1",null,[s(B,{text:e.params.dataPlane},{default:t(()=>[s(l,{title:w(p)(`${n.isGatewayView?"gateways":"data-planes"}.routes.item.title`,{name:e.params.dataPlane}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:t(()=>[V(),s(f,{src:`/meshes/${e.params.mesh}/dataplane-overviews/${e.params.dataPlane}`},{default:t(({data:y,error:h})=>[h?(r(),c(C,{key:0,error:h},null,8,["error"])):y===void 0?(r(),c(G,{key:1})):(r(),N(T,{key:2},[s(P,{class:"route-data-plane-view-tabs",tabs:w(v)},null,8,["tabs"]),V(),s(d,null,{default:t(g=>[(r(),c(D(g.Component),{data:y},null,8,["data"]))]),_:2},1024)],64))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1})}}});export{j as default};
