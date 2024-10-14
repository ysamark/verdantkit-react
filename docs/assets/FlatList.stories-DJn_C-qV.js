import{j as e}from"./jsx-runtime-Cw0GR0a5.js";import{F as b}from"./index-BWj8BeO3.js";import"./index-CTjT7uj6.js";import"./index-hRver1QQ.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./utils-DnNDQBbQ.js";import"./Spinner-BWM7T8oc.js";import"./index-DuhVpxmO.js";import"./index-00KHdqLW.js";const y=j=>{const N=Array.from({length:100}).map((s,o)=>({id:o,name:`User of number ${o}`,username:`user-of-number-${o}`}));return e.jsx(b,{...j,data:N,title:"Usuários",className:"flex flex-col gap-3 w-full",renderItem:s=>e.jsxs("div",{className:"w-full flex flex-row justify-between items-center gap-3 bg-zinc-200 rounded-md p-6 dark:bg-zinc-800",children:[e.jsx("h5",{className:"font-bold",children:s.name}),e.jsx("span",{className:"text-xs text-zinc-500 dark:text-zinc-400",children:s.username})]})})};y.__docgenInfo={description:"",methods:[],displayName:"FlatListElement"};const C={title:"components/FlatList",component:y,args:{paginationStyle:"standard",itemsCountPerIteration:8},argTypes:{paginationStyle:{options:["standard","client-demand","infinite-scroll"],control:"select"}}},a={args:{paginationStyle:"standard"}},t={args:{showSearchBox:!1}},r={args:{paginationStyle:"client-demand"}},n={args:{paginationStyle:"infinite-scroll"}};var i,c,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    paginationStyle: "standard"
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    showSearchBox: false
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,u,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    paginationStyle: "client-demand"
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var x,S,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    paginationStyle: "infinite-scroll"
  }
}`,...(h=(S=n.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const D=["Default","WithNoSearchBox","ClientDemandPagination","InfiniteScrollPagination"];export{r as ClientDemandPagination,a as Default,n as InfiniteScrollPagination,t as WithNoSearchBox,D as __namedExportsOrder,C as default};
