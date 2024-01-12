import{_ as y,d as C,e as N,u as D,o as V,b as I,c as L}from"./Alert.Nu-LSzrx.js";import{_ as k,m as T,f as $,g as m,h as w,o as r,c as n,F as U,q as S,l as _,w as j,k as v,n as g,r as d,B as b,t as f,C as E,s as F,a as t,b as u,v as h,D as M,i as O}from"./entry.doh9f5nY.js";import"./Icon.v1fm9ltD.js";import"./index.lSDm5iYo.js";import"./nuxt-link.lbh_diE-.js";const P={wrapper:"relative",base:"group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-3 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-4 h-4",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"3xs"},badge:{base:"relative ms-auto inline-block py-0.5 px-2 text-xs rounded-md -me-1 -my-0.5",active:"bg-white dark:bg-gray-900",inactive:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-white dark:group-hover:bg-gray-900"}},R=T($.ui.strategy,$.ui.verticalNavigation,P),H=m({components:{UIcon:y,UAvatar:C,ULink:N},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:o}=D("verticalNavigation",w(e,"ui"),R,w(e,"class"));return{ui:s,attrs:o,omit:V}}});function J(e,s,o,p,i,l){const x=C,z=y,A=N;return r(),n("nav",v({class:e.ui.wrapper},e.attrs),[(r(!0),n(U,null,S(e.links,(a,B)=>(r(),_(A,v({key:B},e.omit(a,["label","icon","iconClass","avatar","badge","click"]),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:s[0]||(s[0]=E(c=>c.target.blur(),["enter"]))}),{default:j(({isActive:c})=>[d(e.$slots,"avatar",{link:a,isActive:c},()=>[a.avatar?(r(),_(x,v({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):g("",!0)]),d(e.$slots,"icon",{link:a,isActive:c},()=>[a.icon?(r(),_(z,{key:0,name:a.icon,class:b([e.ui.icon.base,c?e.ui.icon.active:e.ui.icon.inactive,a.iconClass])},null,8,["name","class"])):g("",!0)]),d(e.$slots,"default",{link:a,isActive:c},()=>[a.label?(r(),n("span",{key:0,class:b(e.ui.label)},f(a.label),3)):g("",!0)]),d(e.$slots,"badge",{link:a,isActive:c},()=>[a.badge?(r(),n("span",{key:0,class:b([e.ui.badge.base,c?e.ui.badge.active:e.ui.badge.inactive])},f(a.badge),3)):g("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))],16)}const K=k(H,[["render",J]]),q=m({__name:"verticalNav",setup(e){const s=[{label:" Github",to:"https://github.com/oowais",target:"_blank",icon:"i-mdi-open-in-new"},{label:"Projects",to:"#projects"},{label:"Work Experience",to:"#work"}];return(o,p)=>{const i=K;return r(),_(i,{links:s,ui:{base:"group block border-s -ms-px lg:leading-8 before:hidden",padding:"p-0 ps-4",rounded:"",ring:"",active:"text-primary-700 dark:text-primary-400 border-current font-semibold",inactive:"border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"}})}}}),G={class:"card w-10/12"},Q={class:"content shadow-2xl"},W={class:"back bg-primary-400 dark:bg-primary-950"},X={class:"back-content bg-primary-400 dark:bg-primary-950"},Y=t("strong",{class:"text-primary-900 dark:text-primary-100"}," Skills & Interests ",-1),Z=t("p",{class:"text-xs text-primary-900 dark:text-primary-100"}," Hover me! ",-1),ee={class:"front bg-primary-400 dark:bg-primary-950"},te=t("div",{class:"img"},[t("div",{class:"circle"}),t("div",{class:"circle",id:"right"}),t("div",{class:"circle",id:"bottom"})],-1),ae={class:"front-content"},se={class:"flex flex-wrap gap-1"},re={class:"badge"},oe=t("div",{class:"description"},[t("div",{class:"title"},[t("p",{class:"title"},[t("strong",null,"More to learn...")])])],-1),ie=m({__name:"skillsCard",setup(e){const s=F(["Vue","Typescript","Node.js","Vuetify","Javascript","Pyhton","Rest","Nuxt","REST","Django","Angular","Java","Docker","SQL","Flask"]);return(o,p)=>{const i=y;return r(),n("div",G,[t("div",Q,[t("div",W,[t("div",X,[u(i,{class:"text-primary-900 dark:text-primary-100",name:"i-heroicons-code-bracket-solid",width:"96",height:"96"}),Y,Z])]),t("div",ee,[te,t("div",ae,[t("div",se,[(r(!0),n(U,null,S(h(s),l=>(r(),n("small",re,f(l),1))),256))]),oe])])])])}}}),ne=()=>M("color-mode").value,ce=m({__name:"oldThemeSwitch",setup(e){const s=ne(),o=O({get(){return s.value==="dark"},set(){s.preference=s.value==="dark"?"light":"dark"}});return(p,i)=>{const l=I;return r(),_(l,{id:"edu",icon:h(o)?"i-heroicons-sun":"i-heroicons-moon",color:"gray",variant:"ghost","aria-label":"Theme",onClick:i[0]||(i[0]=x=>o.value=!h(o))},null,8,["icon"])}}}),le={},de={class:"flex flex-wrap w-full"},ue=t("div",{class:"w-1/12 bg-primary-400 dark:bg-primary-950"},null,-1),pe={class:"w-2/12 rounded bg-primary-300 dark:bg-primary-900 h-screen sticky top-0"},_e={class:"flex flex-col items-center h-screen space-x-4 p-2 mb-5"},ge={class:"w-full flex justify-center items-center rounded p-5"},me=t("div",{class:"flex-1"},null,-1),ve={class:"w-8/12"},be={class:"w-1/12 bg-primary-400 dark:bg-primary-950"},fe={class:"fixed right-5 bottom-5"};function he(e,s){const o=L,p=q,i=ie,l=ce;return r(),n("div",de,[ue,t("div",pe,[t("div",_e,[t("div",ge,[u(o,{avatar:{src:"https://avatars.githubusercontent.com/u/6773030?v=4"},title:"Hey there!"},null,8,["avatar"])]),u(p,{class:"pt-6 w-full pl-10"}),me,u(i)])]),t("div",ve,[d(e.$slots,"default")]),t("div",be,[t("div",fe,[u(l)])])])}const ye=k(le,[["render",he]]),ke={},xe={class:"DefaultLayout"},$e={class:"shadow-sm container mx-auto p-4"};function we(e,s){const o=ye;return r(),n("div",xe,[u(o,null,{default:j(()=>[t("header",$e,[d(e.$slots,"default")])]),_:3})])}const ze=k(ke,[["render",we]]);export{ze as default};
