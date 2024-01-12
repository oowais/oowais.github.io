import te from"./Icon.v1fm9ltD.js";import{E as re,G as ae,_ as j,g as O,z as Q,i as u,o,l as v,c as b,B as p,H as ne,I as q,m as P,f as w,h as K,j as $,s as ie,J as se,k as m,t as z,n as h,r as S,w as M,x as le,P as oe,K as ue,L as ce,a as L,M as de,N as ge,O as fe,Q as pe,d as H,F as R,q as J,R as F}from"./entry.doh9f5nY.js";import{_ as W}from"./nuxt-link.lbh_diE-.js";var A=re(ae);function ye(e,a){const n={...e};for(const r of a)delete n[r];return n}function be(e,a,n){typeof a=="string"&&(a=a.split(".").map(t=>{const i=Number(t);return isNaN(i)?t:i}));let r=e;for(const t of a){if(r==null)return n;r=r[t]}return r!==void 0?r:n}const he=O({props:{name:{type:String,required:!0},dynamic:{type:Boolean,default:!1}},setup(e){const a=Q();return{dynamic:u(()=>{var r,t;return e.dynamic||((t=(r=a.ui)==null?void 0:r.icons)==null?void 0:t.dynamic)})}}});function ve(e,a,n,r,t,i){const s=te;return e.dynamic?(o(),v(s,{key:0,name:e.name},null,8,["name"])):(o(),b("span",{key:1,class:p(e.name)},null,2))}const B=j(he,[["render",ve]]),T=(e,a,n,r,t=!1)=>{const i=ne(),s=Q(),c=u(()=>{var f;const l=q(a),g=q(n),y=q(r);return P((l==null?void 0:l.strategy)||((f=s.ui)==null?void 0:f.strategy),y?{wrapper:y}:{},l||{},t?be(s.ui,e,{}):{},g||{})}),d=u(()=>ye(i,["class"]));return{ui:c,attrs:d}},me={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},ke={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},we={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},C=P(w.ui.strategy,w.ui.avatar,me),xe=O({components:{UIcon:B},inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>C.default.icon},size:{type:String,default:()=>C.default.size,validator(e){return Object.keys(C.size).includes(e)}},chipColor:{type:String,default:()=>C.default.chipColor,validator(e){return["gray",...w.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>C.default.chipPosition,validator(e){return Object.keys(C.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:a,attrs:n}=T("avatar",K(e,"ui"),C),r=u(()=>typeof e.src=="boolean"?null:e.src),t=u(()=>(e.alt||"").split(" ").map(y=>y.charAt(0)).join("").substring(0,2)),i=u(()=>A($(a.value.wrapper,(l.value||!r.value)&&a.value.background,a.value.rounded,a.value.size[e.size]),e.class)),s=u(()=>A($(a.value.rounded,a.value.size[e.size]),e.imgClass)),c=u(()=>$(a.value.icon.base,a.value.icon.size[e.size])),d=u(()=>$(a.value.chip.base,a.value.chip.size[e.size],a.value.chip.position[e.chipPosition],a.value.chip.background.replaceAll("{color}",e.chipColor))),l=ie(!1);se(()=>e.src,()=>{l.value&&(l.value=!1)});function g(){l.value=!0}return{ui:a,attrs:n,wrapperClass:i,imgClass:s,iconClass:c,chipClass:d,url:r,placeholder:t,error:l,onError:g}}}),$e=["alt","src"];function Se(e,a,n,r,t,i){const s=B;return o(),b("span",{class:p(e.wrapperClass)},[e.url&&!e.error?(o(),b("img",m({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:a[0]||(a[0]=(...c)=>e.onError&&e.onError(...c))}),null,16,$e)):e.text?(o(),b("span",{key:1,class:p(e.ui.text)},z(e.text),3)):e.icon?(o(),v(s,{key:2,name:e.icon,class:p(e.iconClass)},null,8,["name","class"])):e.placeholder?(o(),b("span",{key:3,class:p(e.ui.placeholder)},z(e.placeholder),3)):h("",!0),e.chipColor?(o(),b("span",{key:4,class:p(e.chipClass)},z(e.chipText),3)):h("",!0),S(e.$slots,"default")],2)}const X=j(xe,[["render",Se]]),V=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function G(e,a){a?a={...V,...a}:a=V;const n=Y(a);return n.dispatch(e),n.toString()}const Ce=Object.freeze(["prototype","__proto__","constructor"]);function Y(e){let a="",n=new Map;const r=t=>{a+=t};return{toString(){return a},getContext(){return n},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let s="";const c=i.length;c<10?s="unknown:["+i+"]":s=i.slice(8,c-1),s=s.toLowerCase();let d=null;if((d=n.get(t))===void 0)n.set(t,n.size);else return this.dispatch("[CIRCULAR:"+d+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return r("buffer:"),r(t.toString("utf8"));if(s!=="object"&&s!=="function"&&s!=="asyncfunction")this[s]?this[s](t):e.ignoreUnknown||this.unkown(t,s);else{let l=Object.keys(t);e.unorderedObjects&&(l=l.sort());let g=[];e.respectType!==!1&&!D(t)&&(g=Ce),e.excludeKeys&&(l=l.filter(f=>!e.excludeKeys(f)),g=g.filter(f=>!e.excludeKeys(f))),r("object:"+(l.length+g.length)+":");const y=f=>{this.dispatch(f),r(":"),e.excludeValues||this.dispatch(t[f]),r(",")};for(const f of l)y(f);for(const f of g)y(f)}},array(t,i){if(i=i===void 0?e.unorderedArrays!==!1:i,r("array:"+t.length+":"),!i||t.length<=1){for(const d of t)this.dispatch(d);return}const s=new Map,c=t.map(d=>{const l=Y(e);l.dispatch(d);for(const[g,y]of l.getContext())s.set(g,y);return l.toString()});return n=s,c.sort(),this.array(c,!1)},date(t){return r("date:"+t.toJSON())},symbol(t){return r("symbol:"+t.toString())},unkown(t,i){if(r(i),!!t&&(r(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return r("error:"+t.toString())},boolean(t){return r("bool:"+t)},string(t){r("string:"+t.length+":"),r(t)},function(t){r("fn:"),D(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return r("number:"+t)},xml(t){return r("xml:"+t.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(t){return r("regex:"+t.toString())},uint8array(t){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return r("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return r("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return r("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return r("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return r("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return r("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return r("url:"+t.toString())},map(t){r("map:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},set(t){r("set:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},file(t){return r("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(t){return r("bigint:"+t.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const Z="[native code] }",ze=Z.length;function D(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-ze)===Z}function Be(e,a,n={}){return e===a||G(e,n)===G(a,n)}const Ie=O({inheritAttrs:!1,props:{...W.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function a(n,r,{isActive:t,isExactActive:i}){return e.exactQuery&&!Be(n.query,r.query)||e.exactHash&&n.hash!==r.hash?e.inactiveClass:e.exact&&i||!e.exact&&t?e.activeClass:e.inactiveClass}return{resolveLinkClass:a}}}),Ae=["href","aria-disabled","role","rel","target","onClick"];function je(e,a,n,r,t,i){const s=W;return e.to?(o(),v(s,m({key:1},e.$props,{custom:""}),{default:M(({route:c,href:d,target:l,rel:g,navigate:y,isActive:f,isExactActive:N,isExternal:I})=>[L("a",m(e.$attrs,{href:e.disabled?void 0:d,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:g,target:l,class:e.active?e.activeClass:e.resolveLinkClass(c,e._.provides[oe]||e.$route,{isActive:f,isExactActive:N}),onClick:U=>!I&&y(U)}),[S(e.$slots,"default",ce(ue({isActive:e.exact?N:f})))],16,Ae)]),_:3},16)):(o(),v(le(e.as),m({key:0,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:M(()=>[S(e.$slots,"default")]),_:3},16,["disabled","class"]))}const _=j(Ie,[["render",je]]);function Oe({ui:e,props:a}){const n=pe();let r=n.parent,t;for(;r&&!t;){if(r.type.name==="ButtonGroup"){t=de(`group-${r.uid}`);break}r=r.parent}const i=u(()=>t==null?void 0:t.value.children.indexOf(n));return ge(()=>{t==null||t.value.register(n)}),fe(()=>{t==null||t.value.unregister(n)}),{size:u(()=>(t==null?void 0:t.value.size)||a.size),rounded:u(()=>!t||i.value===-1?e.value.rounded:t.value.children.length===1?t.value.ui.rounded:i.value===0?t.value.rounded.start:i.value===t.value.children.length-1?t.value.rounded.end:"rounded-none")}}const k=P(w.ui.strategy,w.ui.button,ke),Ne=O({components:{UIcon:B,ULink:_},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>k.default.size,validator(e){return Object.keys(k.size).includes(e)}},color:{type:String,default:()=>k.default.color,validator(e){return[...w.ui.colors,...Object.keys(k.color)].includes(e)}},variant:{type:String,default:()=>k.default.variant,validator(e){return[...Object.keys(k.variant),...Object.values(k.color).flatMap(a=>Object.keys(a))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>k.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:a}){const{ui:n,attrs:r}=T("button",K(e,"ui"),k),{size:t,rounded:i}=Oe({ui:n,props:e}),s=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),c=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),d=u(()=>e.square||!a.default&&!e.label),l=u(()=>{var U,E;const I=((E=(U=n.value.color)==null?void 0:U[e.color])==null?void 0:E[e.variant])||n.value.variant[e.variant];return A($(n.value.base,n.value.font,i.value,n.value.size[t.value],n.value.gap[t.value],e.padded&&n.value[d.value?"square":"padding"][t.value],I==null?void 0:I.replaceAll("{color}",e.color),e.block?n.value.block:n.value.inline),e.class)}),g=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),y=u(()=>e.loading&&!s.value?e.loadingIcon:e.trailingIcon||e.icon),f=u(()=>$(n.value.icon.base,n.value.icon.size[t.value],e.loading&&n.value.icon.loading)),N=u(()=>$(n.value.icon.base,n.value.icon.size[t.value],e.loading&&!s.value&&n.value.icon.loading));return{ui:n,attrs:r,isLeading:s,isTrailing:c,isSquare:d,buttonClass:l,leadingIconName:g,trailingIconName:y,leadingIconClass:f,trailingIconClass:N}}});function Ue(e,a,n,r,t,i){const s=B,c=_;return o(),v(c,m({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:M(()=>[S(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(o(),v(s,{key:0,name:e.leadingIconName,class:p(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):h("",!0)]),S(e.$slots,"default",{},()=>[e.label?(o(),b("span",{key:0,class:p([e.truncate?e.ui.truncate:""])},z(e.label),3)):h("",!0)]),S(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(o(),v(s,{key:0,name:e.trailingIconName,class:p(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):h("",!0)])]),_:3},16,["type","disabled","class"])}const ee=j(Ne,[["render",Ue]]),x=P(w.ui.strategy,w.ui.alert,we),Le=O({components:{UIcon:B,UAvatar:X,UButton:ee},inheritAttrs:!1,props:{title:{type:String,required:!0},description:{type:String,default:null},icon:{type:String,default:()=>x.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>x.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>x.default.color,validator(e){return[...w.ui.colors,...Object.keys(x.color)].includes(e)}},variant:{type:String,default:()=>x.default.variant,validator(e){return[...Object.keys(x.variant),...Object.values(x.color).flatMap(a=>Object.keys(a))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:a,attrs:n}=T("alert",K(e,"ui"),x),r=u(()=>{var i,s;const t=((s=(i=a.value.color)==null?void 0:i[e.color])==null?void 0:s[e.variant])||a.value.variant[e.variant];return A($(a.value.wrapper,a.value.rounded,a.value.shadow,a.value.padding,t==null?void 0:t.replaceAll("{color}",e.color)),e.class)});return{ui:a,attrs:n,alertClass:r,twMerge:A}}});function Pe(e,a,n,r,t,i){const s=B,c=X,d=ee;return o(),b("div",m({class:e.alertClass},e.attrs),[L("div",{class:p(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[e.icon?(o(),v(s,{key:0,name:e.icon,class:p(e.ui.icon.base)},null,8,["name","class"])):h("",!0),e.avatar?(o(),v(c,m({key:1},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):h("",!0),L("div",{class:p(e.ui.inner)},[L("p",{class:p(e.ui.title)},[S(e.$slots,"title",{title:e.title},()=>[H(z(e.title),1)])],2),e.description||e.$slots.description?(o(),b("p",{key:0,class:p(e.ui.description)},[S(e.$slots,"description",{description:e.description},()=>[H(z(e.description),1)])],2)):h("",!0),(e.description||e.$slots.description)&&e.actions.length?(o(),b("div",{key:1,class:p(e.ui.actions)},[(o(!0),b(R,null,J(e.actions,(l,g)=>(o(),v(d,m({key:g},{...e.ui.default.actionButton||{},...l},{onClick:F(l.click,["stop"])}),null,16,["onClick"]))),128))],2)):h("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(o(),b("div",{key:2,class:p(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(o(!0),b(R,{key:0},J(e.actions,(l,g)=>(o(),v(d,m({key:g},{...e.ui.default.actionButton||{},...l},{onClick:F(l.click,["stop"])}),null,16,["onClick"]))),128)):h("",!0),e.closeButton?(o(),v(d,m({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:a[0]||(a[0]=F(l=>e.$emit("close"),["stop"]))}),null,16)):h("",!0)],2)):h("",!0)],2)],16)}const Ke=j(Le,[["render",Pe]]);export{B as _,Oe as a,ee as b,Ke as c,X as d,_ as e,ye as o,A as t,T as u};
