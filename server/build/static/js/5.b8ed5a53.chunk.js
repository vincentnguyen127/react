(this["webpackJsonpteltrium-spetrum-dashboard"]=this["webpackJsonpteltrium-spetrum-dashboard"]||[]).push([[5],{747:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a(0),c=a.n(r),o=a(707),i=a(15),l=a(100),s=a(732),m=a(726),u=a(715),d=a(733),b=a(716),p=a(714),f=[{name:"HF",label:"HF (3 to 30 MHz)",value:"3/30"},{name:"VHF",label:"VHF (30 to 300 MHz)",value:"30/300"},{name:"UHF",label:"UHF (300\tto 1,000 MHz)",value:"300/1000"},{name:"L-Band",label:"L-Band (1,000 to 2,000 MHz)",value:"1000/2000"},{name:"S-Band",label:"S-Band  (2,000 to 4,000 MHz)",value:"2000/4000"},{name:"C-Band",label:"C-Band  (4,000 to 7,000 MHz)",value:"4000/7000"},{name:"X-Band",label:"X-Band (7,000 to 1,2000 MHz)",value:"7000/12000"},{name:"Ku-Band",label:"Ku-Band (12,000 to 20.000 MHz)",value:"12000/20000"},{name:"Ka-Band",label:"Ka-Band (20,000 to 40,000 MHz)",value:"20000/40000"},{name:"V-Band",label:"V-Band (40,000 to 75,000 MHz)",value:"40000/75000"},{name:"W-Band",label:"W-Band  (75,000 to 110,000 MHz)",value:"75000/110000"}],h=a(108),E=a.n(h),y=a(26),g=a(95),j=a(708),O=a(709),v=a(710),S=a(711),x=a(712),_=a(713),k=["#808000","#FFFF00","#00FF00","#00FFFF","#FF00FF","#0000FF","#FF0000","#000080","#008080","#008000","#800080","#800000","#808080","#FEC433","#C0C0C0"],F=a(109),H=a(33),z=[{id:"no",name:"no"},{id:"Customer",name:"name"},{id:"Chart_Type",name:"band"},{id:"Link_Type",name:"link type"},{id:"SFreq_GHz",name:"min freq (ghz)"},{id:"EFreq_GHz",name:"max freq (ghz)"},{id:"SDate",name:"start date"},{id:"EDate",name:"end date"}],w={y_start:0,y_stop:0,y_step:0},C=function(e){var t=e.scope,a=Object(r.useState)([]),o=Object(n.a)(a,2),i=o[0],s=o[1],m=Object(r.useState)([]),u=Object(n.a)(m,2),d=u[0],b=u[1],f=Object(r.useState)(0),h=Object(n.a)(f,2),C=h[0],M=h[1],N=Object(r.useState)(w),B=Object(n.a)(N,2),q=B[0],T=B[1],D=Object(r.useState)([]),G=Object(n.a)(D,2),A=G[0],I=G[1],R=Object(F.a)();return Object(r.useEffect)((function(){var e={},t=new XMLHttpRequest;t.open("GET","static/excel/data.xlsx",!0),t.responseType="arraybuffer",t.onload=function(a){var n=new Uint8Array(t.response),r=y.read(n,{type:"array"});r.SheetNames.forEach((function(t){var a=[],n=y.utils.sheet_to_json(r.Sheets[t],{header:1});e[t]=[],n.forEach((function(e,t){t>0&&a.push(g.a.object(n[0],e))})),e[t]=a})),e[Object.keys(e)[0]].forEach((function(t){t.data=e[Object.keys(e)[1]].filter((function(e){return t.Chart_Type===e.Chart_Type}))})),s(e[Object.keys(e)[0]])},t.send()}),[]),Object(r.useEffect)((function(){var e=0,a=0,n=0,r=0,c=[];i.forEach((function(o){var i=o;if(o.Chart_Type===t.split("_").join(" ")){if(e=Object.keys(o).includes("data")&&o.data.length>0?o.data[0].SDate:o.X_Axis_Start,n=o.Y_Axis_Step_Size,a=o.Y_Axis_Start,r=o.Y_Axis_Stop,Object.keys(i).includes("data")&&i.data.length>0)o.data.forEach((function(t,a){var r=new Date(t.SDate),i=new Date(e),l=t.SFreq_GHz+Math.abs(t.SFreq_GHz-t.EFreq_GHz)/2,s=!0;r<i&&(e=t.SDate),o.data.forEach((function(e,n){n<a&&e.Customer===t.Customer&&(a=n,s=!1)}));var m={name:t.Customer,x:[Object(H.a)(t.SDate,0),Object(H.a)(t.EDate,0)],y:[l,l],mode:"lines",line:{width:Math.abs(t.SFreq_GHz-t.EFreq_GHz)/(10*n)*340,color:k[a%k.length]},showlegend:s};c.push(m)}));else{var l={name:"",x:[e,e+10],y:[a,a],mode:"lines",line:{width:Math.abs(a-r)/(10*n)*340,color:"transparent"},showlegend:!1,marker:{size:12,shape:["line-ew","diamond-open","line-ew","line-ew","diamond-open","line-ew"]}};c.push(l)}I(o.data)}})),b(c),M(e),T({y_start:a,y_stop:r,y_step:n})}),[t,i]),c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{container:!0,alignItems:"center",justify:"center",spacing:3},c.a.createElement(p.a,{item:!0,md:12},c.a.createElement(l.a,{variant:"h6",component:"strong"},"Known LEO's supported by system"))),c.a.createElement(p.a,{container:!0,alignItems:"center",justify:"center",spacing:3},c.a.createElement(p.a,{item:!0,md:12},c.a.createElement(E.a,{data:d,layout:{width:.75*R.width,xaxis:{title:"",titlefont:{size:10,color:"#212529"},tickfont:{size:12},range:[Object(H.a)(C,-1),Object(H.a)(C,7)],dtick:"M12",showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},yaxis:{title:"Frequency (GHZ)",titlefont:{size:12,color:"#212529"},tickfont:{size:12},range:[q.y_start,q.y_stop],dtick:q.y_step,showgrid:!0,zerolinecolor:"#969696",zerolinewidth:1},legend:{orientation:"h",xanchor:"right",x:1,traceorder:"normal",font:{family:"sans-serif",size:12,color:"#000"},bordercolor:"#212529",borderwidth:1,tracegroupgap:100},margin:{l:60,b:80,r:30,t:30,pad:5},showlegend:!0},config:{displayModeBar:!1}})),c.a.createElement(p.a,{item:!0,md:12},c.a.createElement(j.a,{style:{maxHeight:440}},c.a.createElement(O.a,{stickyHeader:!0,"aria-label":"sticky table",className:"customized-gantt-chart-table"},c.a.createElement(v.a,null,c.a.createElement(S.a,null,z.map((function(e){return c.a.createElement(x.a,{key:e.id,align:"center"},e.name.toUpperCase())})))),c.a.createElement(_.a,null,A.map((function(e,t){return c.a.createElement(S.a,{hover:!0,key:"".concat(e.Chart_Type.split(" ").join("_"),"_").concat(t)},z.map((function(a,n){return c.a.createElement(x.a,{key:a.id,align:"center"},0!==n?"SFreq_GHz"===a.id||"EFreq_GHz"===a.id?e[a.id].toFixed(7):"SDate"===a.id||"EDate"===a.id?Object(H.a)(e[a.id],0):e[a.id]:t+1)})))}))))))))},M=a(742),N=a(722),B=a(3),q=Object(o.a)((function(e){return{root:{textAlignLast:"center"},default:{color:i.a.grey[500],opacity:.9}}})),T=function(e){var t=e.className,a=e.menu,n=e.onMenu,r=q();return c.a.createElement(M.a,{name:"",value:a,onChange:n,className:Object(B.a)(r.root,t),fullWidth:!0},c.a.createElement(N.a,{value:"none",className:r.default,disabled:!0},"Select Frequency Band"),f.map((function(e){return c.a.createElement(N.a,{value:e.name,key:e.name},e.label)})))},D=a(737),G=a(739),A=function(e,t,a){return{width:Math.abs(e-t)/a*95+"%"}},I=function(e){return e.split(" ").join("_")},R=function(e,t){var a=40/t+"vh";return e.vertical?{writingMode:"vertical-rl",backgroundColor:e.Hex,minHeight:a,maxHeight:a,transform:"rotate(-180deg)"}:{backgroundColor:e.Hex,minHeight:a,maxHeight:a,textAlign:"center"}},L=Object(o.a)((function(e){return{root:{position:"relative"},grid:{minHeight:e.spacing(2),"&:before":{content:"attr(data-start)"},"&:after":{content:"attr(data-end)",position:"absolute",right:e.spacing(3),top:0}},block:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid #000",cursor:"pointer"},scoped:{boxShadow:e.shadows[10],zIndex:1e3},service:{fontSize:e.typography.pxToRem(12)},remark:{fontSize:e.typography.pxToRem(10)},announce:{marginTop:e.spacing(1)},box:{width:"100%",minHeight:e.spacing(30),justifyContent:"center",alignItems:"center",display:"flex"}}})),W=function(e){var t=e.className,a=e.menu,o=e.scope,s=e.onScope,m=e.onContent,u=Object(r.useState)([]),d=Object(n.a)(u,2),b=d[0],f=d[1],h=Object(r.useState)([]),E=Object(n.a)(h,2),j=E[0],O=E[1],v=Object(r.useState)(0),S=Object(n.a)(v,2),x=S[0],_=S[1],k=Object(r.useState)(1),F=Object(n.a)(k,2),H=F[0],z=F[1],w=Object(r.useState)(1),C=Object(n.a)(w,2),M=C[0],N=C[1],q=L();Object(r.useEffect)((function(){var e=new XMLHttpRequest;e.open("GET","/static/excel/dataset.xlsx",!0),e.responseType="arraybuffer",e.onload=function(t){var a=new Uint8Array(e.response),n=y.read(a,{type:"array"}),r=y.utils.sheet_to_json(n.Sheets[n.SheetNames[0]],{header:1}),c=[],o=[];Object.keys(r).length>2?(r.forEach((function(e,t){t>0&&c.push(g.a.object(r[0],e))})),c.forEach((function(e){var t=c.filter((function(t){return e.master===t.master}));g.a.filter(o,(function(t){return e.master===t.master})).length<1&&e.master&&o.push({master:e.master,start:e.start,end:e.end,data:t,vertical:e.vertical})})),f(o),N(Object.keys(o).length/8),s(o[0].data[0].chart_type),m(o[0].data[0].content)):(f([]),N(0),z(1),s(""),m(""))},e.send()}),[a]),Object(r.useEffect)((function(){if(Object.keys(b).length>0){var e=b[8*(H-1)],t=H<M?b[8*H-1]:b[8*M-1];if(t&&Object.keys(t).includes("end")){var a=Math.abs(e.start-t.end),n=Object.values(b).filter((function(e){return e.master>8*(H-1)&&e.master<=8*H}));_(a),O(n)}}else _(0),O([])}),[H,b,M]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{container:!0,alignItems:"center",justify:"center",style:{position:"relative"},className:Object(B.a)(t,q.root)},0===Object.keys(j).length&&c.a.createElement(D.a,{border:1,borderColor:i.a.blue[200],className:q.box,textAlign:"center"},c.a.createElement(l.a,{variant:"body2",color:"textSecondary"},"No Band Data Entered Yet.")),Object.keys(j).length>0&&Object.values(j).map((function(e,t){return c.a.createElement(p.a,{item:!0,key:e.master,className:q.grid,style:A(e.start,e.end,x),"data-start":e.start,"data-end":7===t?e.end:""},c.a.createElement(p.a,{container:!0,alignItems:"center",justify:"center"},e.data.map((function(a,n){return c.a.createElement(p.a,{item:!0,md:12,id:I(a.chart_type),key:"".concat(I(a.service),"-").concat(t,"-").concat(n),onClick:function(){return e=a.chart_type,t=a.content,s(e),void m(t);var e,t},style:R(a,e.data.length),className:Object(B.a)(q.block,a.chart_type===o&&q.scoped)},c.a.createElement(l.a,{className:q.service},a.service),""!==a.remark&&c.a.createElement(l.a,{className:q.remark},a.remark))}))))}))),c.a.createElement(p.a,{container:!0,alignItems:"center",spacing:3,className:q.announce},c.a.createElement(p.a,{item:!0,md:9},c.a.createElement(l.a,{variant:"body1"},"This chart will only work with 1024 x 768. We recommend full screen mode.")),c.a.createElement(p.a,{item:!0,md:3},c.a.createElement(p.a,{container:!0,justify:"flex-end"},c.a.createElement(p.a,{item:!0,md:12},c.a.createElement(G.a,{count:Math.ceil(M),page:H,defaultPage:1,variant:"outlined",shape:"rounded",onChange:function(e,t){z(t)}}))))))},K=Object(o.a)((function(e){return{root:{}}})),U=function(e){var t=e.className,a=e.content,n=K();return c.a.createElement(p.a,{container:!0,justify:"center",alignItems:"center",className:Object(B.a)(t,n.root)},c.a.createElement(p.a,{item:!0,md:4},c.a.createElement(l.a,{variant:"h6",component:"strong"},"Regulatory Notes")),c.a.createElement(p.a,{item:!0,md:8}),c.a.createElement(p.a,{item:!0,md:12},c.a.createElement(D.a,{borderColor:"primary.main",border:2,borderRadius:5,padding:2},c.a.createElement(l.a,{variant:"body2"},a))))},X=a(703),Y=a(724),V=a(725),J=a(727),P=a(728),Z=a(729),Q=Object(r.forwardRef)((function(e,t){return c.a.createElement(X.a,Object.assign({direction:"left",ref:t},e))})),$=Object(o.a)((function(e){return{root:{},content:{marginBottom:e.spacing(6)}}})),ee=function(){var e=Object(Y.a)("(max-width: 1000px)"),t=$();return c.a.createElement(V.a,{open:e,TransitionComponent:Q,keepMounted:!0},c.a.createElement(m.a,null),c.a.createElement(J.a,null,"Screen Resolution Alert"),c.a.createElement(P.a,null,c.a.createElement(Z.a,{className:t.content},"Your screen resolution is under 1024 x 768. We can't confirm your resolution of this Spectrum Chart. Please Check your screen mode again.")))},te=Object(o.a)((function(e){return{root:{margin:e.spacing(5)},card:{padding:e.spacing(2)},content:{backgroundColor:i.a.grey[50]}}})),ae=function(){return c.a.createElement(l.a,{component:"h1",variant:"h5",color:"textSecondary"},"Spectrum Dashboard ",c.a.createElement("small",null,"(maintenance version)"))};t.default=function(){var e=Object(r.useState)(f[3].name),t=Object(n.a)(e,2),a=t[0],o=t[1],i=Object(r.useState)(""),l=Object(n.a)(i,2),h=l[0],E=l[1],y=Object(r.useState)(""),g=Object(n.a)(y,2),j=g[0],O=g[1],v=te();return c.a.createElement("div",{className:v.root},c.a.createElement(s.a,{component:"main",maxWidth:"lg"},c.a.createElement(m.a,null),c.a.createElement(u.a,{className:v.card},c.a.createElement(d.a,{title:c.a.createElement(ae,null)}),c.a.createElement(b.a,null,c.a.createElement(p.a,{container:!0,alignItems:"center",spacing:3},c.a.createElement(p.a,{item:!0,md:3},c.a.createElement(T,{menu:a,onMenu:function(e){o(e.target.value)}})),c.a.createElement(p.a,{item:!0,md:12},c.a.createElement(W,{scope:j,menu:a,onScope:function(e){return O(e)},onContent:function(e){E(e)}})),c.a.createElement(p.a,{item:!0,md:12,className:v.content},h&&""!==h&&c.a.createElement(U,{content:h})),c.a.createElement(p.a,{item:!0,md:12},c.a.createElement(C,{scope:j})))))),c.a.createElement(ee,null))}}}]);
//# sourceMappingURL=5.b8ed5a53.chunk.js.map