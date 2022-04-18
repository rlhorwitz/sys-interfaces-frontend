var P=Object.defineProperty;var B=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var p=(s,i,n)=>i in s?P(s,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[i]=n,E=(s,i)=>{for(var n in i||(i={}))F.call(i,n)&&p(s,n,i[n]);if(B)for(var n of B(i))h.call(i,n)&&p(s,n,i[n]);return s};var U=(s,i)=>{var n={};for(var r in s)F.call(s,r)&&i.indexOf(r)<0&&(n[r]=s[r]);if(s!=null&&B)for(var r of B(s))i.indexOf(r)<0&&h.call(s,r)&&(n[r]=s[r]);return n};import{j as S,a as d,N as v,C as R,F as x,r as m,s as T,l as N,m as W,x as G,y as H,b as q,d as j,_ as b,o as z,R as $,c as J}from"./vendor.6f1c16cb.js";const Z=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};Z();const V=({keys:s,swatchScale:i})=>S("div",{className:"mx-3 card",children:[d("div",{className:"card-header",children:d("h2",{children:"Legend"})}),d("div",{className:"mx-2",children:s.map(n=>S("div",{className:"d-flex gap-2 my-2",children:[d("div",{style:{backgroundColor:i(n),width:24,height:24}}),n]},n))})]});var K="/sys-interfaces-frontend/assets/logo.34216470.svg";const X=({switchChecked:s,onChange:i})=>d(v,{bg:"secondary",expand:"lg",children:S(R,{children:[d(v.Brand,{children:d("img",{width:"100",src:K,alt:"logo"})}),d(x,{children:d(x.Check,{type:"switch",checked:s,label:`Showing ${s?"Business Owners":"System Admins"}`,onChange:i})})]})}),Y=n=>{var r=n,{generateGraph:s}=r,i=U(r,["generateGraph"]);const t=m.exports.useRef(null);return m.exports.useEffect(()=>{let o;if(t.current){const{destroy:a}=s(t.current);o=a}return o},[]),d("div",E({ref:t},i))},u={nodes:[{id:"DocuSign",sysAdmin:"Business Systems",businessOwner:""},{id:"Salesforce B2B",sysAdmin:"Business Systems"},{id:"Quickbase",sysAdmin:"Content"},{id:"Gainsight",sysAdmin:"Business Systems"},{id:"Salesforce B2C",sysAdmin:"Business Systems"},{id:"Marketo",sysAdmin:"Business Systems"},{id:"MS SQL Server",sysAdmin:"Engineering"},{id:"INT-US-SQL-01",sysAdmin:"Unknown"},{id:"Intacct",sysAdmin:"Business Systems"},{id:"Kentico",sysAdmin:"Engineering; Marketplaces"},{id:"MS SQL Server (Omega)",sysAdmin:"Unknown"},{id:"Multipub",sysAdmin:"Business Systems"},{id:"Mailchimp AHC",sysAdmin:"Unknown"},{id:"Expense Connect",sysAdmin:"Business Systems"},{id:"AIS Exam",sysAdmin:"Unknown"},{id:"Assessment DB",sysAdmin:"Unknown"},{id:"Contractors (QB)",sysAdmin:"Content"},{id:"RLMS",sysAdmin:"DBAs"},{id:"AWS S3",sysAdmin:"Engineering"},{id:"LinkedIn",sysAdmin:"Marketing"},{id:"Zapier",sysAdmin:"Marketing"},{id:"Paxata",sysAdmin:"Unknown"},{id:"Coupa",sysAdmin:"Business Systems"},{id:"Magento",sysAdmin:"Engineering; Marketplaces"},{id:"LevelEleven",sysAdmin:"Business Systems"},{id:"Salesforce Mergers & Acquisitions",sysAdmin:"Business Systems"},{id:"Geopointe",sysAdmin:"Business Systems"},{id:"Salesforce CPQ",sysAdmin:"Business Systems"},{id:"Salesforce Advanced Approvals",sysAdmin:"Business Systems"},{id:"Salesforce Quip",sysAdmin:"Business Systems"},{id:"Docusign",sysAdmin:"Business Systems"},{id:"Atlassian Jira/Confluence",sysAdmin:"Business Systems"},{id:"Clairzen",sysAdmin:"Business Systems"},{id:"WalkMe",sysAdmin:"Business Systems"},{id:"Coupa",sysAdmin:"Business Systems"},{id:"2CP",sysAdmin:"Business Systems"},{id:"Avalara",sysAdmin:"Business Systems"},{id:"Armatic",sysAdmin:"Business Systems"},{id:"Salesforce Live Agent",sysAdmin:"Business Systems"},{id:"Miro",sysAdmin:"Business Systems"},{id:"Validity Demand Tools",sysAdmin:"Business Systems"},{id:"Salesforce Security Shield",sysAdmin:"Business Systems"},{id:"Zoominfo",sysAdmin:"Business Systems"},{id:"Multipub",sysAdmin:"Business Systems"},{id:"Magento",sysAdmin:"Business Systems"},{id:"Epublishing",sysAdmin:"Business Systems"},{id:"Rievent",sysAdmin:"Business Systems"},{id:"Mulesoft",sysAdmin:"Business Systems"},{id:"SmartSheet",sysAdmin:"Business Systems"},{id:"Pluralsight",sysAdmin:"Business Systems"},{id:"Insomnia",sysAdmin:"Business Systems"},{id:"Azure DevOps",sysAdmin:"Business Systems"},{id:"IntelliJ IDEA Ultimate",sysAdmin:"Business Systems"},{id:"Postman",sysAdmin:"Business Systems"},{id:"DBAMP",sysAdmin:"Business Systems"},{id:"Highspot",sysAdmin:"Business Systems"},{id:"CI Radar",sysAdmin:"Business Systems"},{id:"BrowserStack",sysAdmin:"Business Systems"},{id:"Bloomfire",sysAdmin:"Business Systems"},{id:"Definitive Healthcare Database",sysAdmin:"Business Systems"},{id:"Bucher-Suter Salesforce Connect License",sysAdmin:"Business Systems"},{id:"ON24",sysAdmin:"Business Systems"},{id:"FloQast",sysAdmin:"Business Systems"},{id:"Airtable",sysAdmin:"Business Systems"},{id:"ProductBoard",sysAdmin:"Business Systems"},{id:"OvalEdge",sysAdmin:"Business Systems"},{id:"Test Rail (Gurock)",sysAdmin:"Business Systems"},{id:"PluralSight",sysAdmin:"Business Systems"},{id:"Pendo",sysAdmin:"Business Systems"},{id:"PostivePay(Wipfli)",sysAdmin:"Business Systems"},{id:"FocusVision (Decipher)",sysAdmin:"Business Systems"},{id:"Admin's Helper",sysAdmin:"Business Systems"},{id:"Concur",sysAdmin:"Business Systems"},{id:"Pardot",sysAdmin:"Business Systems"},{id:"Camtasia",sysAdmin:"Business Systems"},{id:"Crayon",sysAdmin:"Business Systems"},{id:"Big Picture POC",sysAdmin:"Business Systems"},{id:"Juiced",sysAdmin:"Business Systems"},{id:"Adaptive Insights",sysAdmin:"Finance"},{id:"GovSpend",sysAdmin:"Solutions Group"},{id:"Terminus",sysAdmin:"Marketing"},{id:"Authorize.net",sysAdmin:"Finance"},{id:"Bizzabo",sysAdmin:"Marketing"},{id:"G2",sysAdmin:"Marketing"},{id:"Figma",sysAdmin:"User Experience"},{id:"OneTrust",sysAdmin:"Information Security"},{id:"Wrike",sysAdmin:"Marketing"},{id:"Xactly",sysAdmin:"Sales"},{id:"AHREFS",sysAdmin:"Marketing"},{id:"Awario",sysAdmin:"Marketing"},{id:"CookieBot",sysAdmin:"Marketing"},{id:"CoSchedule",sysAdmin:"Marketing"},{id:"Funnel.io",sysAdmin:"Marketing"},{id:"HotJar",sysAdmin:"Marketing"},{id:"iSpoinage",sysAdmin:"Marketing"},{id:"Screaming Frog",sysAdmin:"Marketing"},{id:"Swiftype",sysAdmin:"Marketing"},{id:"TreeHouse",sysAdmin:"Marketing"},{id:"Wavve (DG)",sysAdmin:"Marketing"},{id:"Wistia",sysAdmin:"Marketing"},{id:"Wordpress",sysAdmin:"Marketing"},{id:"Wufuu-Digital Form",sysAdmin:"Marketing"},{id:"Sprout Social",sysAdmin:"Marketing"},{id:"iThenticate",sysAdmin:"Content"},{id:"Kentico",sysAdmin:"Engineering"},{id:"Postman (B2C Engineering Account)",sysAdmin:"Engineering"},{id:"Ongage",sysAdmin:"Marketing"},{id:"ManageEngine: AD Manager Plus",sysAdmin:"IT"},{id:"Unknown",sysAdmin:"IT"},{id:"ReliasMedia",sysAdmin:"Unknown"},{id:"freeCME",sysAdmin:"Unknown"},{id:"PositivePay",sysAdmin:"Unknown"},{id:"Znode",sysAdmin:"Unknown"},{id:"iSponiage",sysAdmin:"Unknown"},{id:"Wave (DG)",sysAdmin:"Unknown"}],links:[{source:"DocuSign",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Sales; Content; Legal",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce B2B",target:"DocuSign",destinationOwner:"Sales; Legal; Content",sourceOwner:"All",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Quickbase",target:"RLMS",destinationOwner:"Unknown",sourceOwner:"Content",destinationAdmin:"DBAs",sourceAdmin:"Content"},{source:"Salesforce B2B",target:"Gainsight",destinationOwner:"Client Care; Sales",sourceOwner:"All",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Quickbase",target:"MS SQL Server",destinationOwner:"Engineering",sourceOwner:"Content",destinationAdmin:"Engineering",sourceAdmin:"Content"},{source:"Gainsight",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Client Care; Sales",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce B2C",target:"Marketo",destinationOwner:"Marketing",sourceOwner:"Marketplaces",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Marketo",target:"Salesforce B2C",destinationOwner:"Marketplaces",sourceOwner:"Marketing",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"MS SQL Server",target:"Quickbase",destinationOwner:"Content",sourceOwner:"Engineering",destinationAdmin:"Content",sourceAdmin:"Engineering"},{source:"INT-US-SQL-01",target:"MS SQL Server",destinationOwner:"Engineering",sourceOwner:"Unknown",destinationAdmin:"Engineering",sourceAdmin:"Unknown"},{source:"Intacct",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce B2B",target:"Intacct",destinationOwner:"Finance",sourceOwner:"All",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Kentico",target:"Salesforce B2C",destinationOwner:"Marketplaces",sourceOwner:"Engineering; Marketplaces",destinationAdmin:"Business Systems",sourceAdmin:"Engineering; Marketplaces"},{source:"MS SQL Server (Omega)",target:"Paxata",destinationOwner:"Unknown",sourceOwner:"Unknown",destinationAdmin:"Unknown",sourceAdmin:"Unknown"},{source:"MS SQL Server",target:"Paxata",destinationOwner:"Unknown",sourceOwner:"Engineering",destinationAdmin:"Unknown",sourceAdmin:"Engineering"},{source:"MS SQL Server",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Engineering",destinationAdmin:"Business Systems",sourceAdmin:"Engineering"},{source:"MS SQL Server",target:"Mailchimp AHC",destinationOwner:"Marketing",sourceOwner:"Engineering",destinationAdmin:"Unknown",sourceAdmin:"Engineering"},{source:"MS SQL Server",target:"Salesforce B2C",destinationOwner:"Marketplaces",sourceOwner:"Engineering",destinationAdmin:"Business Systems",sourceAdmin:"Engineering"},{source:"Salesforce B2B",target:"MS SQL Server",destinationOwner:"Salesforce B2B",sourceOwner:"All",destinationAdmin:"Engineering",sourceAdmin:"Business Systems"},{source:"Multipub",target:"MS SQL Server",destinationOwner:"Engineering",sourceOwner:"Unknown",destinationAdmin:"Engineering",sourceAdmin:"Business Systems"},{source:"Mailchimp AHC",target:"MS SQL Server",destinationOwner:"Engineering",sourceOwner:"Marketing",destinationAdmin:"Engineering",sourceAdmin:"Unknown"},{source:"Salesforce B2C",target:"MS SQL Server",destinationOwner:"Engineering",sourceOwner:"Marketplaces",destinationAdmin:"Engineering",sourceAdmin:"Business Systems"},{source:"Expense Connect",target:"Intacct",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"AIS Exam",target:"Quickbase",destinationOwner:"Content",sourceOwner:"Unknown",destinationAdmin:"Content",sourceAdmin:"Unknown"},{source:"AIS Exam",target:"Quickbase",destinationOwner:"Content",sourceOwner:"Unknown",destinationAdmin:"Content",sourceAdmin:"Unknown"},{source:"Assessment DB",target:"Quickbase",destinationOwner:"Content",sourceOwner:"Unknown",destinationAdmin:"Content",sourceAdmin:"Unknown"},{source:"Contractors (QB)",target:"Quickbase",destinationOwner:"Content",sourceOwner:"Content",destinationAdmin:"Content",sourceAdmin:"Content"},{source:"Intacct",target:"Quickbase",destinationOwner:"Content",sourceOwner:"Finance",destinationAdmin:"Content",sourceAdmin:"Business Systems"},{source:"RLMS",target:"Quickbase",destinationOwner:"Content",sourceOwner:"Unknown",destinationAdmin:"Content",sourceAdmin:"DBAs"},{source:"Salesforce B2B",target:"Quickbase",destinationOwner:"Content",sourceOwner:"All",destinationAdmin:"Content",sourceAdmin:"Business Systems"},{source:"Quickbase",target:"Quickbase",destinationOwner:"Content",sourceOwner:"Content",destinationAdmin:"Content",sourceAdmin:"Content"},{source:"Quickbase",target:"AIS Exam",destinationOwner:"Unknown",sourceOwner:"Content",destinationAdmin:"Unknown",sourceAdmin:"Content"},{source:"Quickbase",target:"Assessment DB",destinationOwner:"Unknown",sourceOwner:"Content",destinationAdmin:"Unknown",sourceAdmin:"Content"},{source:"Quickbase",target:"Coupa",destinationOwner:"Finance",sourceOwner:"Content",destinationAdmin:"Business Systems",sourceAdmin:"Content"},{source:"Quickbase",target:"Magento",destinationOwner:"Engineering; Marketplaces",sourceOwner:"Content",destinationAdmin:"Engineering; Marketplaces",sourceAdmin:"Content"},{source:"RLMS",target:"AWS S3",destinationOwner:"Unknown",sourceOwner:"Unknown",destinationAdmin:"Engineering",sourceAdmin:"DBAs"},{source:"AWS S3",target:"RLMS",destinationOwner:"Unknown",sourceOwner:"Unknown",destinationAdmin:"DBAs",sourceAdmin:"Engineering"},{source:"AWS S3",target:"Gainsight",destinationOwner:"Client Care; Sales",sourceOwner:"Unknown",destinationAdmin:"Business Systems",sourceAdmin:"Engineering"},{source:"LinkedIn",target:"Zapier",destinationOwner:"Marketing",sourceOwner:"Marketing",destinationAdmin:"Marketing",sourceAdmin:"Marketing"},{source:"Zapier",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Marketing",destinationAdmin:"Business Systems",sourceAdmin:"Marketing"},{source:"LevelEleven",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Sales",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Geopointe",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Sales",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce CPQ",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Sales",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce Advanced Approvals",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Sales",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce Quip",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Sales",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"DocuSign",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Sales",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Atlassian Jira/Confluence",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Engineering",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Clairzen",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Client Care-PS",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"WalkMe",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Client Care",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"WalkMe",target:"RLMS",destinationOwner:"DBA's",sourceOwner:"Client Care",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Intacct",target:"Coupa",destinationOwner:"All",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Intacct",target:"Concur",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Intacct",target:"2CP",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Intacct",target:"Avalara",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Intacct",target:"Armatic",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Coupa",target:"Intacct",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"2CP",target:"Intacct",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Avalara",target:"Intacct",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Marketo",target:"Salesforce B2C",destinationOwner:"Marketing",sourceOwner:"Marketplaces",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Pardot",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Marketing",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Armatic",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Marketing",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce Live Agent",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Client Care",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Intacct",target:"Coupa",destinationOwner:"All",sourceOwner:"Sales",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Intacct",target:"Concur",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Intacct",target:"2CP",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Intacct",target:"Avalara",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Intacct",target:"Armatic",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Coupa",target:"Intacct",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"2CP",target:"Intacct",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Avalara",target:"Intacct",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Marketo",target:"Salesforce B2C",destinationOwner:"All",sourceOwner:"Marketing",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Pardot",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Marketing",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Armatic",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Marketing",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce Live Agent",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Client Care",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Validity Demand Tools",target:"Salesforce B2C",destinationOwner:"Marketplaces",sourceOwner:"Business Systems",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Validity Demand Tools",target:"Salesforce Mergers & Acquisitions",destinationOwner:"Mergers & Acquisitions",sourceOwner:"Business Systems",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Validity Demand Tools",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Business Systems",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce Security Shield",target:"Salesforce B2C",destinationOwner:"Marketplaces",sourceOwner:"Business Systems",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce Security Shield",target:"Salesforce Mergers & Acquisitions",destinationOwner:"Mergers & Acquisitions",sourceOwner:"Business Systems",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Salesforce Security Shield",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Business Systems",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Zoominfo",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Sales",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Epublishing",target:"ReliasMedia",destinationOwner:"Unknown",sourceOwner:"Unknown",destinationAdmin:"Unknown",sourceAdmin:"Business Systems"},{source:"Epublishing",target:"freeCME",destinationOwner:"Unknown",sourceOwner:"Unknown",destinationAdmin:"Unknown",sourceAdmin:"Business Systems"},{source:"Rievent",target:"ReliasMedia",destinationOwner:"Unknown",sourceOwner:"Unknown",destinationAdmin:"Unknown",sourceAdmin:"Business Systems"},{source:"Rievent",target:"freeCME",destinationOwner:"Unknown",sourceOwner:"Unknown",destinationAdmin:"Unknown",sourceAdmin:"Business Systems"},{source:"Epublishing",target:"ReliasMedia",destinationOwner:"Unknown",sourceOwner:"Unknown",destinationAdmin:"Unknown",sourceAdmin:"Business Systems"},{source:"Mulesoft",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Business Systems",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Epublishing",target:"ReliasMedia",destinationOwner:"Unknown",sourceOwner:"Unknown",destinationAdmin:"Unknown",sourceAdmin:"Business Systems"},{source:"Postman",target:"Mulesoft",destinationOwner:"Business Systems",sourceOwner:"Business Systems",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"DBAMP",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Business Systems",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Definitive Healthcare Database",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Sales",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Concur",target:"Expense Connect",destinationOwner:"Finance",sourceOwner:"Finance",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Bucher-Suter Salesforce Connect License",target:"Salesforce B2B",destinationOwner:"All",sourceOwner:"Sales, Client Care, Support",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Admin's Helper",target:"Expense Connect",destinationOwner:"Unknown",sourceOwner:"Client Care",destinationAdmin:"Unknown",sourceAdmin:"Business Systems"},{source:"Big Picture POC",target:"Atlassian Jira/Confluence",destinationOwner:"IT",sourceOwner:"IT",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Juiced",target:"Quickbase",destinationOwner:"Content",sourceOwner:"IT",destinationAdmin:"Business Systems",sourceAdmin:"Business Systems"},{source:"Epublishing",target:"ReliasMedia",destinationOwner:"Unknown",sourceOwner:"Unknown",destinationAdmin:"Unknown",sourceAdmin:"Business Systems"},{source:"Authorize.net",target:"Znode",destinationOwner:"Unknown",sourceOwner:"Finance",destinationAdmin:"Unknown",sourceAdmin:"Finance"},{source:"OneTrust",target:"Intacct",destinationOwner:"Finance",sourceOwner:"Information Security",destinationAdmin:"Business Systems",sourceAdmin:"Information Security"}]},_=({container:s,linksData:i,nodesData:n,sysAdmins:r,location:t,color:o,showOwners:a})=>{const O=i.map(e=>Object.assign({},e)),k=n.map(e=>Object.assign({},e)),f=s.getBoundingClientRect(),C=f.height,M=f.width,D=e=>{const l=(A,c)=>{A.active||e.alphaTarget(.3).restart(),c.fx=c.x,c.fy=c.y},L=(A,c)=>{c.fx=A.x,c.fy=A.y},Q=(A,c)=>{A.active||e.alphaTarget(0),c.fx=void 0,c.fy=void 0};return j().on("start",l).on("drag",L).on("end",Q)},g=T(k).force("link",N(O).id(e=>e.id)).force("charge",W().strength(-500).distanceMax(400)).force("x",G()).force("y",H()),y=q(s).append("svg").attr("viewBox",[-M/2,-C/2,M,C]);y.append("defs").selectAll("marker").data(r).join("marker").attr("id",e=>`arrow-${e}`).attr("viewBox","0 -5 10 10").attr("refX",20).attr("refY",-.5).attr("markerWidth",6).attr("markerHeight",6).attr("orient","auto").append("path").attr("fill","currentColor").attr("d","M0,-5L10,0L0,5");const I=y.append("g").attr("stroke","currentColor").selectAll("line").data(O).join("line").attr("stroke-width",1.5).attr("marker-end",e=>`url(${new URL(`#arrow-${e.destinationAdmin}`,t)})`),w=y.append("g").attr("fill","currentColor").attr("stroke-linecap","round").attr("stroke-linejoin","round").selectAll("g").data(k).join("g").call(D(g));return w.append("circle").attr("stroke","white").attr("stroke-width",1.5).attr("r",10).attr("fill",e=>{var l;return o(a&&(l=e.businessOwner)!=null?l:e.sysAdmin)}),w.append("text").attr("x",10).attr("y","0.4em").attr("font-size",".75em").text(e=>e.id).clone(!0).lower().attr("fill","none").attr("stroke","white").attr("stroke-width",3),g.on("tick",()=>{I.attr("x1",e=>e.source.x).attr("y1",e=>e.source.y).attr("x2",e=>e.target.x).attr("y2",e=>e.target.y),w.attr("transform",e=>`translate(${e.x},${e.y})`)}),{destroy:()=>{g.stop()},nodes:()=>y.node()}},ss=["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"];function es(){const[s,i]=m.exports.useState(!1),n=m.exports.useMemo(()=>b.uniq(u.nodes.map(a=>a.sysAdmin)),[u]),r=m.exports.useMemo(()=>b.uniq(u.nodes.map(a=>a.businessOwner).filter(a=>!!a)),[u]),t=m.exports.useMemo(()=>z(s?r:n,ss),[u,s,r,n]),o=m.exports.useCallback(()=>i(!s),[s]);return S("div",{className:"bg-light vh-100 d-flex flex-column",children:[d(X,{switchChecked:s,onChange:o}),S("div",{className:"d-flex flex-grow-1 align-items-center",children:[d(V,{keys:s?r:n,swatchScale:t}),d(Y,{className:"flex-grow-1 h-100",generateGraph:a=>_({container:a,linksData:u.links,nodesData:u.nodes,sysAdmins:n,location:window.location.href,color:t,showOwners:s})})]})]})}$.render(d(J.StrictMode,{children:d(es,{})}),document.getElementById("root"));
