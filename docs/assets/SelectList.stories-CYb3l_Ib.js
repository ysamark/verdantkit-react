import{j as t}from"./jsx-runtime-Cw0GR0a5.js";import{e as Z,G as B,f as U,c as J}from"./index-00KHdqLW.js";import{r as o}from"./index-CTjT7uj6.js";import{F as K}from"./index-BWj8BeO3.js";import{u as H,b as X,c as ee}from"./index-BbWPryX7.js";import{d as x}from"./index-hRver1QQ.js";import{c as te}from"./index-DuhVpxmO.js";import{u as ne}from"./hook-CeBDSmy1.js";import"./utils-DnNDQBbQ.js";import"./Spinner-BWM7T8oc.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";const R=o.createContext({}),$=function(e){return t.jsx(R.Provider,{...e})};$.__docgenInfo={description:"",methods:[],displayName:"SelectListContextProvider"};const h=()=>o.useContext(R),O=()=>{const e=h(),n=a=>{const i=a.target;e.setQuery(i.value)};return t.jsxs("div",{className:"border-solid border-[1px] border-zinc-300 dark:border-zinc-600 w-full flex flex-row items-center rounded-md py-2 px-3 gap-2",children:[t.jsx("i",{className:"inline-flex text-lg text-zinc-600 font-light",children:t.jsx(Z,{})}),t.jsx("div",{className:"w-full inline-flex flex-row items-center",children:t.jsx("input",{value:e.query??"",onChange:n,className:"text-zinc-800 dark:text-zinc-50 w-full text-sm font-light bg-transparent border-0 outline-0"})})]})};O.__docgenInfo={description:"",methods:[],displayName:"SearchInput"};function ae(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m12 15 2 2 4-4"},child:[]},{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(e)}function re(e){return B({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(e)}const ie=e=>{if(!(e instanceof HTMLDivElement))return null;const a=window.innerHeight-10,r=e.parentNode.getBoundingClientRect();let l=r.y+r.height-e.offsetHeight;r.y+r.height>=a&&(l=a-e.offsetHeight),Object.assign(e.style,{top:`${l}px`,left:`${r.left}px`,width:`${r.width}px`})},W=()=>{const e=h(),n=H(),a=o.useRef(null);o.useEffect(()=>{const s=()=>{ie(a.current)};return window.addEventListener("resize",s),window.addEventListener("scroll",s),s(),()=>{window.removeEventListener("resize",s),window.removeEventListener("scroll",s)}},[]);const i=e.props.data.map(s=>e.props.map(s)),r=()=>{const s=i.map(y=>y.id);if(c)return n.deselectElements(s);n.selectElements(s)},l=s=>{s.preventDefault(),typeof e.props.onSelect=="function"&&e.props.multiple&&e.props.onSelect(i.filter(y=>n.isElementSelected(y.id)))},c=!i.some(s=>!n.isElementSelected(s.id));return t.jsxs("div",{className:"w-full bg-zinc-50 shadow-lg border-[1px] border-solid border-zinc-300 dark:border-[#32323a] dark:bg-[#1f1f1f] p-3 rounded-md flex flex-row gap-3 justify-between items-center fixed z-20",ref:a,children:[t.jsxs("span",{children:["Selecionados: ",n.selectedElements.length]}),t.jsxs("div",{className:"flex flex-row gap-3",children:[t.jsx("button",{type:"button",className:"px-3 py-2 rounded-lg border-0 outline-none bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 dark:bg-zinc-900 dark:hover:bg-zinc-950 dark:active:bg-black text-zinc-50",title:"Selecionar todos",onClick:r,children:c?t.jsx(re,{}):t.jsx(ae,{})}),t.jsx("button",{type:"button",className:"px-6 py-2 rounded-lg border-0 outline-none bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-zinc-50",onClick:l,children:"Selecionar"})]})]})};W.__docgenInfo={description:"",methods:[],displayName:"SelectListFooter"};function S({children:e,...n}){return t.jsxs(o.Fragment,{children:[e,t.jsx("div",{className:"w-full inline-flex items-center",children:t.jsx("strong",{className:"w-full block text-left",children:n.title})}),x.noEmpty(n.subTitle)&&t.jsx("div",{className:"w-full inline-flex justify-end items-center",children:t.jsx("span",{className:"dark:text-zinc-400 w-full block text-right",children:n.subTitle})}),t.jsx("i",{className:"inline-flex",children:t.jsx(J,{})})]})}function b(e){const n=o.useId(),a=h(),i=ne(),r=c=>{c.preventDefault(),typeof a.props.onSelect=="function"&&!a.props.multiple&&a.props.onSelect(e.data)};return typeof a.props.multiple=="boolean"&&a.props.multiple?t.jsx("label",{className:"bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400 dark:text-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:active:bg-zinc-800 w-full h-auto flex flex-row items-center text-sm rounded-md border-0 outline-0 p-3 gap-2 cursor-pointer select-none [&_*]:select-none",htmlFor:n,children:t.jsx(S,{...e,children:t.jsx("div",{className:"size-6 inline-flex",children:t.jsxs("div",{className:te("size-6 rounded-full border-[1px] flex flex-row justify-center items-center border-solid border-zinc-400 dark:border-zinc-600",i.selected?"bg-blue-500 text-zinc-50 dark:text-inherit shadow-sm":null),children:[i.selected&&t.jsx(U,{size:12}),t.jsx("input",{...i.inputProps,id:n,className:"hidden"})]})})})}):t.jsx("button",{type:"button",onClick:r,className:"bg-zinc-200 hover:bg-zinc-300 dark:text-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 w-full h-auto flex flex-row items-center text-sm rounded-md border-0 outline-0 p-3 gap-2",children:t.jsx(S,{...e})})}b.__docgenInfo={description:"",methods:[],displayName:"SelectListItem"};const se=(e,n)=>x.noEmpty(n)?!!(x.strMatches(e.title,n)||x.strMatches(e.subTitle||"",n)):!0,Y=()=>{const e=h(),n=H(),a=typeof e.props.multiple=="boolean"&&e.props.multiple,i=e.props.data.map(r=>e.props.map(r));return t.jsxs(o.Fragment,{children:[t.jsx(K,{data:i.filter(r=>se(r,e.query)),loading:!!e.loading,paginationStyle:e.props.listPaginationStyle||"client-demand",itemsCountPerIteration:20,showSearchBox:!1,className:"flex w-full flex-col gap-2",renderItem:r=>a?t.jsx(X,{id:r.id,children:t.jsx(b,{...r})}):t.jsx(b,{...r})}),n.selectedElements&&n.selectedElements.length>=1&&t.jsx("div",{className:"w-full block mt-2 h-12",children:t.jsx(W,{})})]})};Y.__docgenInfo={description:"",methods:[],displayName:"SelectListBody"};function G(e){const[n,a]=o.useState(null),[i,r]=o.useState(typeof e.loading=="boolean"?e.loading:!1),l={props:e,loading:i,setLoading:r,query:n,setQuery:a},c=typeof e.multiple=="boolean"&&e.multiple;o.useEffect(()=>{typeof e.loading=="boolean"&&(!e.loading&&typeof e.onLoadEnd=="function"&&e.onLoadEnd(),r(e.loading))},[e,e.loading,e.onLoadEnd]);const s=c?ee:o.Fragment;return t.jsx($,{value:l,children:t.jsx(s,{children:e.children})})}G.__docgenInfo={description:"",methods:[],displayName:"SelectListContainer"};function Q(e){return t.jsx(G,{...e,children:t.jsxs("div",{className:"w-full h-auto block",children:[t.jsx("div",{className:"w-full flex flex-row items-center",children:t.jsx(O,{})}),t.jsx("div",{className:"w-full h-auto block",children:t.jsx("div",{className:"w-full flex flex-col items-center",children:t.jsx(Y,{})})})]})})}Q.__docgenInfo={description:"",methods:[],displayName:"SelectList",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"ListDataType"}],raw:"Array<ListDataType>"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},listPaginationStyle:{required:!1,tsType:{name:"Nullish",elements:[{name:"FlatListPaginationStyle"}],raw:"Nullish<FlatListPaginationStyle>"},description:""},onLoadEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},map:{required:!0,tsType:{name:"signature",type:"function",raw:"(dataItem: ListDataType) => SelectListItemProps",signature:{arguments:[{type:{name:"ListDataType"},name:"dataItem"}],return:{name:"signature",type:"object",raw:`{\r
  id: string | number;\r
  title: string;\r
  subTitle?: string;\r
  data: ListDataType;\r
}`,signature:{properties:[{key:"id",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"subTitle",value:{name:"string",required:!1}},{key:"data",value:{name:"ListDataType",required:!0}}]}}}},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:`(\r
  selectedItem: ListDataType | Array<ListDataType>\r
) => void | Promise<void>`,signature:{arguments:[{type:{name:"union",raw:"ListDataType | Array<ListDataType>",elements:[{name:"ListDataType"},{name:"Array",elements:[{name:"ListDataType"}],raw:"Array<ListDataType>"}]},name:"selectedItem"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""}}};const V=e=>{const n=Array.from({length:100}).map((a,i)=>({id:i,name:`User of number ${i}`,username:`user-of-number-${i}`}));return t.jsx(Q,{...e,data:n,onSelect:a=>{console.log(">>> selected: ",a)},map:a=>({data:a,id:a.id,title:a.name,subTitle:a.username})})};V.__docgenInfo={description:"",methods:[],displayName:"SelectListElement"};const ye={title:"components/SelectList",component:V,argTypes:{listPaginationStyle:{control:"select",options:["standard","infinite-scroll","client-demand"]}}},d={args:{loading:!0}},u={args:{loading:!1}},m={args:{loading:!1,multiple:!0,listPaginationStyle:"client-demand"}},p={args:{loading:!0,listPaginationStyle:"standard"}},g={args:{loading:!1,listPaginationStyle:"standard"}},f={args:{loading:!1,multiple:!0,listPaginationStyle:"standard"}};var L,v,w;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,k,z;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    loading: false
  }
}`,...(z=(k=u.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var N,P,E;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    loading: false,
    multiple: true,
    listPaginationStyle: "client-demand"
  }
}`,...(E=(P=m.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var T,C,D;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    loading: true,
    listPaginationStyle: "standard"
  }
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var _,I,F;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    loading: false,
    listPaginationStyle: "standard"
  }
}`,...(F=(I=g.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var A,M,q;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    loading: false,
    multiple: true,
    listPaginationStyle: "standard"
  }
}`,...(q=(M=f.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};const be=["Loading","Default","Multiple","StandardPaginationLoading","StandardPaginationDefault","StandardPaginationMultiple"];export{u as Default,d as Loading,m as Multiple,g as StandardPaginationDefault,p as StandardPaginationLoading,f as StandardPaginationMultiple,be as __namedExportsOrder,ye as default};
