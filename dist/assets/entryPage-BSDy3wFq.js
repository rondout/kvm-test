var oo=Object.defineProperty;var no=(e,o,n)=>o in e?oo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n;var ye=(e,o,n)=>(no(e,typeof o!="symbol"?o+"":o,n),n);import{e as m,i as to,K as _e,P as E,d as A,r as B,f as j,a as f,g as S,h as Be,w as Fe,v as Re,T as Le,n as ao,j as ae,s as T,k as ne,l as fe,m as lo,p as Y,q as ro,t as io,x as so,y as co,z as uo,A as fo,B as mo,C as go,D as po,E as me,F as vo,G as Co,H as yo,I as te,J as ho,L as k,M as He,N as De,O as bo,Q as xo,S as So,U as wo,V as To,W as he,X as Eo,Y as $o,Z as Mo,$ as No,a0 as Po,a1 as Io,u as oe,a2 as Oo,a3 as J,a4 as be,a5 as Ao,a6 as _o,a7 as Bo,o as se,c as ce,b as _,a8 as Fo,a9 as Ro,aa as Lo,ab as Ho,ac as Do,ad as zo,ae as Uo,_ as Wo}from"./index-DVrPov3n.js";import{o as ze,c as Ko}from"./styleChecker-Dycu5JlT.js";import{B as de,c as Ue}from"./index-CFkPqT7l.js";const c={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(o){const{keyCode:n}=o;if(o.altKey&&!o.ctrlKey||o.metaKey||n>=c.F1&&n<=c.F12)return!1;switch(n){case c.ALT:case c.CAPS_LOCK:case c.CONTEXT_MENU:case c.CTRL:case c.DOWN:case c.END:case c.ESC:case c.HOME:case c.INSERT:case c.LEFT:case c.MAC_FF_META:case c.META:case c.NUMLOCK:case c.NUM_CENTER:case c.PAGE_DOWN:case c.PAGE_UP:case c.PAUSE:case c.PRINT_SCREEN:case c.RIGHT:case c.SHIFT:case c.UP:case c.WIN_KEY:case c.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(o){if(o>=c.ZERO&&o<=c.NINE||o>=c.NUM_ZERO&&o<=c.NUM_MULTIPLY||o>=c.A&&o<=c.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&o===0)return!0;switch(o){case c.SPACE:case c.QUESTION_MARK:case c.NUM_PLUS:case c.NUM_MINUS:case c.NUM_PERIOD:case c.NUM_DIVISION:case c.SEMICOLON:case c.DASH:case c.EQUALS:case c.COMMA:case c.PERIOD:case c.SLASH:case c.APOSTROPHE:case c.SINGLE_QUOTE:case c.OPEN_SQUARE_BRACKET:case c.BACKSLASH:case c.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},Vo=`accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`,Go=`onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,xe=`${Vo} ${Go}`.split(/[\s\n]+/),ko="aria-",jo="data-";function Se(e,o){return e.indexOf(o)===0}function Qo(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n;o===!1?n={aria:!0,data:!0,attr:!0}:o===!0?n={aria:!0}:n=m({},o);const t={};return Object.keys(e).forEach(a=>{(n.aria&&(a==="role"||Se(a,ko))||n.data&&Se(a,jo)||n.attr&&(xe.includes(a)||xe.includes(a.toLowerCase())))&&(t[a]=e[a])}),t}const Xo=new _e("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),Yo=new _e("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),Zo=function(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const{antCls:n}=e,t=`${n}-fade`,a=o?"&":"";return[to(t,Xo,Yo,e.motionDurationMid,o),{[`
        ${a}${t}-enter,
        ${a}${t}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${a}${t}-leave`]:{animationTimingFunction:"linear"}}]};function ge(){return{keyboard:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},afterClose:Function,closable:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},destroyOnClose:{type:Boolean,default:void 0},mousePosition:E.shape({x:Number,y:Number}).loose,title:E.any,footer:E.any,transitionName:String,maskTransitionName:String,animation:E.any,maskAnimation:E.any,wrapStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},maskStyle:{type:Object,default:void 0},prefixCls:String,wrapClassName:String,rootClassName:String,width:[String,Number],height:[String,Number],zIndex:Number,bodyProps:E.any,maskProps:E.any,wrapProps:E.any,getContainer:E.any,dialogStyle:{type:Object,default:void 0},dialogClass:String,closeIcon:E.any,forceRender:{type:Boolean,default:void 0},getOpenCount:Function,focusTriggerAfterClose:{type:Boolean,default:void 0},onClose:Function,modalRender:Function}}function we(e,o,n){let t=o;return!t&&n&&(t=`${e}-${n}`),t}let Te=-1;function qo(){return Te+=1,Te}function Ee(e,o){let n=e[`page${o?"Y":"X"}Offset`];const t=`scroll${o?"Top":"Left"}`;if(typeof n!="number"){const a=e.document;n=a.documentElement[t],typeof n!="number"&&(n=a.body[t])}return n}function Jo(e){const o=e.getBoundingClientRect(),n={left:o.left,top:o.top},t=e.ownerDocument,a=t.defaultView||t.parentWindow;return n.left+=Ee(a),n.top+=Ee(a,!0),n}const $e={width:0,height:0,overflow:"hidden",outline:"none"},en=A({compatConfig:{MODE:3},name:"DialogContent",inheritAttrs:!1,props:m(m({},ge()),{motionName:String,ariaId:String,onVisibleChanged:Function,onMousedown:Function,onMouseup:Function}),setup(e,o){let{expose:n,slots:t,attrs:a}=o;const s=B(),p=B(),C=B();n({focus:()=>{var l;(l=s.value)===null||l===void 0||l.focus()},changeActive:l=>{const{activeElement:r}=document;l&&r===p.value?s.value.focus():!l&&r===s.value&&p.value.focus()}});const w=B(),d=j(()=>{const{width:l,height:r}=e,v={};return l!==void 0&&(v.width=typeof l=="number"?`${l}px`:l),r!==void 0&&(v.height=typeof r=="number"?`${r}px`:r),w.value&&(v.transformOrigin=w.value),v}),g=()=>{ao(()=>{if(C.value){const l=Jo(C.value);w.value=e.mousePosition?`${e.mousePosition.x-l.left}px ${e.mousePosition.y-l.top}px`:""}})},i=l=>{e.onVisibleChanged(l)};return()=>{var l,r,v,b;const{prefixCls:x,footer:u=(l=t.footer)===null||l===void 0?void 0:l.call(t),title:y=(r=t.title)===null||r===void 0?void 0:r.call(t),ariaId:h,closable:$,closeIcon:M=(v=t.closeIcon)===null||v===void 0?void 0:v.call(t),onClose:P,bodyStyle:I,bodyProps:F,onMousedown:R,onMouseup:H,visible:U,modalRender:W=t.modalRender,destroyOnClose:Q,motionName:L}=e;let K;u&&(K=f("div",{class:`${x}-footer`},[u]));let V;y&&(V=f("div",{class:`${x}-header`},[f("div",{class:`${x}-title`,id:h},[y])]));let D;$&&(D=f("button",{type:"button",onClick:P,"aria-label":"Close",class:`${x}-close`},[M||f("span",{class:`${x}-close-x`},null)]));const O=f("div",{class:`${x}-content`},[D,V,f("div",S({class:`${x}-body`,style:I},F),[(b=t.default)===null||b===void 0?void 0:b.call(t)]),K]),le=Be(L);return f(Le,S(S({},le),{},{onBeforeEnter:g,onAfterEnter:()=>i(!0),onAfterLeave:()=>i(!1)}),{default:()=>[U||!Q?Fe(f("div",S(S({},a),{},{ref:C,key:"dialog-element",role:"document",style:[d.value,a.style],class:[x,a.class],onMousedown:R,onMouseup:H}),[f("div",{tabindex:0,ref:s,style:$e,"aria-hidden":"true"},null),W?W({originVNode:O}):O,f("div",{tabindex:0,ref:p,style:$e,"aria-hidden":"true"},null)]),[[Re,U]]):null]})}}}),on=A({compatConfig:{MODE:3},name:"DialogMask",props:{prefixCls:String,visible:Boolean,motionName:String,maskProps:Object},setup(e,o){return()=>{const{prefixCls:n,visible:t,maskProps:a,motionName:s}=e,p=Be(s);return f(Le,p,{default:()=>[Fe(f("div",S({class:`${n}-mask`},a),null),[[Re,t]])]})}}}),Me=A({compatConfig:{MODE:3},name:"VcDialog",inheritAttrs:!1,props:ae(m(m({},ge()),{getOpenCount:Function,scrollLocker:Object}),{mask:!0,visible:!1,keyboard:!0,closable:!0,maskClosable:!0,destroyOnClose:!1,prefixCls:"rc-dialog",getOpenCount:()=>null,focusTriggerAfterClose:!0}),setup(e,o){let{attrs:n,slots:t}=o;const a=T(),s=T(),p=T(),C=T(e.visible),w=T(`vcDialogTitle${qo()}`),d=u=>{var y,h;if(u)ro(s.value,document.activeElement)||(a.value=document.activeElement,(y=p.value)===null||y===void 0||y.focus());else{const $=C.value;if(C.value=!1,e.mask&&a.value&&e.focusTriggerAfterClose){try{a.value.focus({preventScroll:!0})}catch{}a.value=null}$&&((h=e.afterClose)===null||h===void 0||h.call(e))}},g=u=>{var y;(y=e.onClose)===null||y===void 0||y.call(e,u)},i=T(!1),l=T(),r=()=>{clearTimeout(l.value),i.value=!0},v=()=>{l.value=setTimeout(()=>{i.value=!1})},b=u=>{if(!e.maskClosable)return null;i.value?i.value=!1:s.value===u.target&&g(u)},x=u=>{if(e.keyboard&&u.keyCode===c.ESC){u.stopPropagation(),g(u);return}e.visible&&u.keyCode===c.TAB&&p.value.changeActive(!u.shiftKey)};return ne(()=>e.visible,()=>{e.visible&&(C.value=!0)},{flush:"post"}),fe(()=>{var u;clearTimeout(l.value),(u=e.scrollLocker)===null||u===void 0||u.unLock()}),lo(()=>{var u,y;(u=e.scrollLocker)===null||u===void 0||u.unLock(),C.value&&((y=e.scrollLocker)===null||y===void 0||y.lock())}),()=>{const{prefixCls:u,mask:y,visible:h,maskTransitionName:$,maskAnimation:M,zIndex:P,wrapClassName:I,rootClassName:F,wrapStyle:R,closable:H,maskProps:U,maskStyle:W,transitionName:Q,animation:L,wrapProps:K,title:V=t.title}=e,{style:D,class:O}=n;return f("div",S({class:[`${u}-root`,F]},Qo(e,{data:!0})),[f(on,{prefixCls:u,visible:y&&h,motionName:we(u,$,M),style:m({zIndex:P},W),maskProps:U},null),f("div",S({tabIndex:-1,onKeydown:x,class:Y(`${u}-wrap`,I),ref:s,onClick:b,role:"dialog","aria-labelledby":V?w.value:null,style:m(m({zIndex:P},R),{display:C.value?null:"none"})},K),[f(en,S(S({},ze(e,["scrollLocker"])),{},{style:D,class:O,onMousedown:r,onMouseup:v,ref:p,closable:H,ariaId:w.value,prefixCls:u,visible:h,onClose:g,onVisibleChanged:d,motionName:we(u,Q,L)}),t)])])}}}),nn=ge(),tn=A({compatConfig:{MODE:3},name:"DialogWrap",inheritAttrs:!1,props:ae(nn,{visible:!1}),setup(e,o){let{attrs:n,slots:t}=o;const a=B(e.visible);return io({},{inTriggerContext:!1}),ne(()=>e.visible,()=>{e.visible&&(a.value=!0)},{flush:"post"}),()=>{const{visible:s,getContainer:p,forceRender:C,destroyOnClose:w=!1,afterClose:d}=e;let g=m(m(m({},e),n),{ref:"_component",key:"dialog"});return p===!1?f(Me,S(S({},g),{},{getOpenCount:()=>2}),t):!C&&w&&!a.value?null:f(so,{autoLock:!0,visible:s,forceRender:C,getContainer:p},{default:i=>(g=m(m(m({},g),i),{afterClose:()=>{d==null||d(),a.value=!1}}),f(Me,g,t))})}}});function Ne(e){return{position:e,top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0}}const an=e=>{const{componentCls:o}=e;return[{[`${o}-root`]:{[`${o}${e.antCls}-zoom-enter, ${o}${e.antCls}-zoom-appear`]:{transform:"none",opacity:0,animationDuration:e.motionDurationSlow,userSelect:"none"},[`${o}${e.antCls}-zoom-leave ${o}-content`]:{pointerEvents:"none"},[`${o}-mask`]:m(m({},Ne("fixed")),{zIndex:e.zIndexPopupBase,height:"100%",backgroundColor:e.colorBgMask,[`${o}-hidden`]:{display:"none"}}),[`${o}-wrap`]:m(m({},Ne("fixed")),{overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"})}},{[`${o}-root`]:Zo(e)}]},ln=e=>{const{componentCls:o}=e;return[{[`${o}-root`]:{[`${o}-wrap`]:{zIndex:e.zIndexPopupBase,position:"fixed",inset:0,overflow:"auto",outline:0,WebkitOverflowScrolling:"touch"},[`${o}-wrap-rtl`]:{direction:"rtl"},[`${o}-centered`]:{textAlign:"center","&::before":{display:"inline-block",width:0,height:"100%",verticalAlign:"middle",content:'""'},[o]:{top:0,display:"inline-block",paddingBottom:0,textAlign:"start",verticalAlign:"middle"}},[`@media (max-width: ${e.screenSMMax})`]:{[o]:{maxWidth:"calc(100vw - 16px)",margin:`${e.marginXS} auto`},[`${o}-centered`]:{[o]:{flex:1}}}}},{[o]:m(m({},mo(e)),{pointerEvents:"none",position:"relative",top:100,width:"auto",maxWidth:`calc(100vw - ${e.margin*2}px)`,margin:"0 auto",paddingBottom:e.paddingLG,[`${o}-title`]:{margin:0,color:e.modalHeadingColor,fontWeight:e.fontWeightStrong,fontSize:e.modalHeaderTitleFontSize,lineHeight:e.modalHeaderTitleLineHeight,wordWrap:"break-word"},[`${o}-content`]:{position:"relative",backgroundColor:e.modalContentBg,backgroundClip:"padding-box",border:0,borderRadius:e.borderRadiusLG,boxShadow:e.boxShadowSecondary,pointerEvents:"auto",padding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`},[`${o}-close`]:m({position:"absolute",top:(e.modalHeaderCloseSize-e.modalCloseBtnSize)/2,insetInlineEnd:(e.modalHeaderCloseSize-e.modalCloseBtnSize)/2,zIndex:e.zIndexPopupBase+10,padding:0,color:e.modalCloseColor,fontWeight:e.fontWeightStrong,lineHeight:1,textDecoration:"none",background:"transparent",borderRadius:e.borderRadiusSM,width:e.modalConfirmIconSize,height:e.modalConfirmIconSize,border:0,outline:0,cursor:"pointer",transition:`color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,"&-x":{display:"block",fontSize:e.fontSizeLG,fontStyle:"normal",lineHeight:`${e.modalCloseBtnSize}px`,textAlign:"center",textTransform:"none",textRendering:"auto"},"&:hover":{color:e.modalIconHoverColor,backgroundColor:e.wireframe?"transparent":e.colorFillContent,textDecoration:"none"},"&:active":{backgroundColor:e.wireframe?"transparent":e.colorFillContentHover}},go(e)),[`${o}-header`]:{color:e.colorText,background:e.modalHeaderBg,borderRadius:`${e.borderRadiusLG}px ${e.borderRadiusLG}px 0 0`,marginBottom:e.marginXS},[`${o}-body`]:{fontSize:e.fontSize,lineHeight:e.lineHeight,wordWrap:"break-word"},[`${o}-footer`]:{textAlign:"end",background:e.modalFooterBg,marginTop:e.marginSM,[`${e.antCls}-btn + ${e.antCls}-btn:not(${e.antCls}-dropdown-trigger)`]:{marginBottom:0,marginInlineStart:e.marginXS}},[`${o}-open`]:{overflow:"hidden"}})},{[`${o}-pure-panel`]:{top:"auto",padding:0,display:"flex",flexDirection:"column",[`${o}-content,
          ${o}-body,
          ${o}-confirm-body-wrapper`]:{display:"flex",flexDirection:"column",flex:"auto"},[`${o}-confirm-body`]:{marginBottom:"auto"}}}]},rn=e=>{const{componentCls:o}=e,n=`${o}-confirm`;return{[n]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${n}-body-wrapper`]:m({},po()),[`${n}-body`]:{display:"flex",flexWrap:"wrap",alignItems:"center",[`${n}-title`]:{flex:"0 0 100%",display:"block",overflow:"hidden",color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:e.modalHeaderTitleFontSize,lineHeight:e.modalHeaderTitleLineHeight,[`+ ${n}-content`]:{marginBlockStart:e.marginXS,flexBasis:"100%",maxWidth:`calc(100% - ${e.modalConfirmIconSize+e.marginSM}px)`}},[`${n}-content`]:{color:e.colorText,fontSize:e.fontSize},[`> ${e.iconCls}`]:{flex:"none",marginInlineEnd:e.marginSM,fontSize:e.modalConfirmIconSize,[`+ ${n}-title`]:{flex:1},[`+ ${n}-title + ${n}-content`]:{marginInlineStart:e.modalConfirmIconSize+e.marginSM}}},[`${n}-btns`]:{textAlign:"end",marginTop:e.marginSM,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${n}-error ${n}-body > ${e.iconCls}`]:{color:e.colorError},[`${n}-warning ${n}-body > ${e.iconCls},
        ${n}-confirm ${n}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${n}-info ${n}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${n}-success ${n}-body > ${e.iconCls}`]:{color:e.colorSuccess},[`${o}-zoom-leave ${o}-btns`]:{pointerEvents:"none"}}},sn=e=>{const{componentCls:o}=e;return{[`${o}-root`]:{[`${o}-wrap-rtl`]:{direction:"rtl",[`${o}-confirm-body`]:{direction:"rtl"}}}}},cn=e=>{const{componentCls:o,antCls:n}=e,t=`${o}-confirm`;return{[o]:{[`${o}-content`]:{padding:0},[`${o}-header`]:{padding:e.modalHeaderPadding,borderBottom:`${e.modalHeaderBorderWidth}px ${e.modalHeaderBorderStyle} ${e.modalHeaderBorderColorSplit}`,marginBottom:0},[`${o}-body`]:{padding:e.modalBodyPadding},[`${o}-footer`]:{padding:`${e.modalFooterPaddingVertical}px ${e.modalFooterPaddingHorizontal}px`,borderTop:`${e.modalFooterBorderWidth}px ${e.modalFooterBorderStyle} ${e.modalFooterBorderColorSplit}`,borderRadius:`0 0 ${e.borderRadiusLG}px ${e.borderRadiusLG}px`,marginTop:0}},[t]:{[`${n}-modal-body`]:{padding:`${e.padding*2}px ${e.padding*2}px ${e.paddingLG}px`},[`${t}-body`]:{[`> ${e.iconCls}`]:{marginInlineEnd:e.margin,[`+ ${t}-title + ${t}-content`]:{marginInlineStart:e.modalConfirmIconSize+e.margin}}},[`${t}-btns`]:{marginTop:e.marginLG}}}},dn=co("Modal",e=>{const o=e.padding,n=e.fontSizeHeading5,t=e.lineHeightHeading5,a=uo(e,{modalBodyPadding:e.paddingLG,modalHeaderBg:e.colorBgElevated,modalHeaderPadding:`${o}px ${e.paddingLG}px`,modalHeaderBorderWidth:e.lineWidth,modalHeaderBorderStyle:e.lineType,modalHeaderTitleLineHeight:t,modalHeaderTitleFontSize:n,modalHeaderBorderColorSplit:e.colorSplit,modalHeaderCloseSize:t*n+o*2,modalContentBg:e.colorBgElevated,modalHeadingColor:e.colorTextHeading,modalCloseColor:e.colorTextDescription,modalFooterBg:"transparent",modalFooterBorderColorSplit:e.colorSplit,modalFooterBorderStyle:e.lineType,modalFooterPaddingVertical:e.paddingXS,modalFooterPaddingHorizontal:e.padding,modalFooterBorderWidth:e.lineWidth,modalConfirmTitleFontSize:e.fontSizeLG,modalIconHoverColor:e.colorIconHover,modalConfirmIconSize:e.fontSize*e.lineHeight,modalCloseBtnSize:e.controlHeightLG*.55});return[ln(a),rn(a),sn(a),an(a),e.wireframe&&cn(a),fo(a,"zoom")]});var un=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)o.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};let ue;const fn=e=>{ue={x:e.pageX,y:e.pageY},setTimeout(()=>ue=null,100)};Ko()&&ho(document.documentElement,"click",fn,!0);const mn=()=>({prefixCls:String,visible:{type:Boolean,default:void 0},open:{type:Boolean,default:void 0},confirmLoading:{type:Boolean,default:void 0},title:E.any,closable:{type:Boolean,default:void 0},closeIcon:E.any,onOk:Function,onCancel:Function,"onUpdate:visible":Function,"onUpdate:open":Function,onChange:Function,afterClose:Function,centered:{type:Boolean,default:void 0},width:[String,Number],footer:E.any,okText:E.any,okType:String,cancelText:E.any,icon:E.any,maskClosable:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},okButtonProps:k(),cancelButtonProps:k(),destroyOnClose:{type:Boolean,default:void 0},wrapClassName:String,maskTransitionName:String,transitionName:String,getContainer:{type:[String,Function,Boolean,Object],default:void 0},zIndex:Number,bodyStyle:k(),maskStyle:k(),mask:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},wrapProps:Object,focusTriggerAfterClose:{type:Boolean,default:void 0},modalRender:Function,mousePosition:k()}),N=A({compatConfig:{MODE:3},name:"AModal",inheritAttrs:!1,props:ae(mn(),{width:520,confirmLoading:!1,okType:"primary"}),setup(e,o){let{emit:n,slots:t,attrs:a}=o;const[s]=me("Modal"),{prefixCls:p,rootPrefixCls:C,direction:w,getPopupContainer:d}=vo("modal",e),[g,i]=dn(p);Co(e.visible===void 0);const l=b=>{n("update:visible",!1),n("update:open",!1),n("cancel",b),n("change",!1)},r=b=>{n("ok",b)},v=()=>{var b,x;const{okText:u=(b=t.okText)===null||b===void 0?void 0:b.call(t),okType:y,cancelText:h=(x=t.cancelText)===null||x===void 0?void 0:x.call(t),confirmLoading:$}=e;return f(He,null,[f(de,S({onClick:l},e.cancelButtonProps),{default:()=>[h||s.value.cancelText]}),f(de,S(S({},Ue(y)),{},{loading:$,onClick:r},e.okButtonProps),{default:()=>[u||s.value.okText]})])};return()=>{var b,x;const{prefixCls:u,visible:y,open:h,wrapClassName:$,centered:M,getContainer:P,closeIcon:I=(b=t.closeIcon)===null||b===void 0?void 0:b.call(t),focusTriggerAfterClose:F=!0}=e,R=un(e,["prefixCls","visible","open","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"]),H=Y($,{[`${p.value}-centered`]:!!M,[`${p.value}-wrap-rtl`]:w.value==="rtl"});return g(f(tn,S(S(S({},R),a),{},{rootClassName:i.value,class:Y(i.value,a.class),getContainer:P||(d==null?void 0:d.value),prefixCls:p.value,wrapClassName:H,visible:h??y,onClose:l,focusTriggerAfterClose:F,transitionName:te(C.value,"zoom",e.transitionName),maskTransitionName:te(C.value,"fade",e.maskTransitionName),mousePosition:(x=R.mousePosition)!==null&&x!==void 0?x:ue}),m(m({},t),{footer:t.footer||v,closeIcon:()=>f("span",{class:`${p.value}-close-x`},[I||f(yo,{class:`${p.value}-close-icon`},null)])})))}}}),gn=()=>{const e=T(!1);return fe(()=>{e.value=!0}),e},pn={type:{type:String},actionFn:Function,close:Function,autofocus:Boolean,prefixCls:String,buttonProps:k(),emitEvent:Boolean,quitOnNullishReturnValue:Boolean};function Pe(e){return!!(e&&e.then)}const Ie=A({compatConfig:{MODE:3},name:"ActionButton",props:pn,setup(e,o){let{slots:n}=o;const t=T(!1),a=T(),s=T(!1);let p;const C=gn();De(()=>{e.autofocus&&(p=setTimeout(()=>{var i,l;return(l=(i=bo(a.value))===null||i===void 0?void 0:i.focus)===null||l===void 0?void 0:l.call(i)}))}),fe(()=>{clearTimeout(p)});const w=function(){for(var i,l=arguments.length,r=new Array(l),v=0;v<l;v++)r[v]=arguments[v];(i=e.close)===null||i===void 0||i.call(e,...r)},d=i=>{Pe(i)&&(s.value=!0,i.then(function(){C.value||(s.value=!1),w(...arguments),t.value=!1},l=>(C.value||(s.value=!1),t.value=!1,Promise.reject(l))))},g=i=>{const{actionFn:l}=e;if(t.value)return;if(t.value=!0,!l){w();return}let r;if(e.emitEvent){if(r=l(i),e.quitOnNullishReturnValue&&!Pe(r)){t.value=!1,w(i);return}}else if(l.length)r=l(e.close),t.value=!1;else if(r=l(),!r){w();return}d(r)};return()=>{const{type:i,prefixCls:l,buttonProps:r}=e;return f(de,S(S(S({},Ue(i)),{},{onClick:g,loading:s.value,prefixCls:l},r),{},{ref:a}),n)}}});function G(e){return typeof e=="function"?e():e}const We=A({name:"ConfirmDialog",inheritAttrs:!1,props:["icon","onCancel","onOk","close","closable","zIndex","afterClose","visible","open","keyboard","centered","getContainer","maskStyle","okButtonProps","cancelButtonProps","okType","prefixCls","okCancel","width","mask","maskClosable","okText","cancelText","autoFocusButton","transitionName","maskTransitionName","type","title","content","direction","rootPrefixCls","bodyStyle","closeIcon","modalRender","focusTriggerAfterClose","wrapClassName","confirmPrefixCls","footer"],setup(e,o){let{attrs:n}=o;const[t]=me("Modal");return()=>{const{icon:a,onCancel:s,onOk:p,close:C,okText:w,closable:d=!1,zIndex:g,afterClose:i,keyboard:l,centered:r,getContainer:v,maskStyle:b,okButtonProps:x,cancelButtonProps:u,okCancel:y,width:h=416,mask:$=!0,maskClosable:M=!1,type:P,open:I,title:F,content:R,direction:H,closeIcon:U,modalRender:W,focusTriggerAfterClose:Q,rootPrefixCls:L,bodyStyle:K,wrapClassName:V,footer:D}=e;let O=a;if(!a&&a!==null)switch(P){case"info":O=f(To,null,null);break;case"success":O=f(wo,null,null);break;case"error":O=f(So,null,null);break;default:O=f(xo,null,null)}const le=e.okType||"primary",re=e.prefixCls||"ant-modal",X=`${re}-confirm`,Ze=n.style||{},ve=y??P==="confirm",Ce=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",q=`${re}-confirm`,qe=Y(q,`${q}-${e.type}`,{[`${q}-rtl`]:H==="rtl"},n.class),ie=t.value,Je=ve&&f(Ie,{actionFn:s,close:C,autofocus:Ce==="cancel",buttonProps:u,prefixCls:`${L}-btn`},{default:()=>[G(e.cancelText)||ie.cancelText]});return f(N,{prefixCls:re,class:qe,wrapClassName:Y({[`${q}-centered`]:!!r},V),onCancel:eo=>C==null?void 0:C({triggerCancel:!0},eo),open:I,title:"",footer:"",transitionName:te(L,"zoom",e.transitionName),maskTransitionName:te(L,"fade",e.maskTransitionName),mask:$,maskClosable:M,maskStyle:b,style:Ze,bodyStyle:K,width:h,zIndex:g,afterClose:i,keyboard:l,centered:r,getContainer:v,closable:d,closeIcon:U,modalRender:W,focusTriggerAfterClose:Q},{default:()=>[f("div",{class:`${X}-body-wrapper`},[f("div",{class:`${X}-body`},[G(O),F===void 0?null:f("span",{class:`${X}-title`},[G(F)]),f("div",{class:`${X}-content`},[G(R)])]),D!==void 0?G(D):f("div",{class:`${X}-btns`},[Je,f(Ie,{type:le,actionFn:p,close:C,autofocus:Ce==="ok",buttonProps:x,prefixCls:`${L}-btn`},{default:()=>[G(w)||(ve?ie.okText:ie.justOkText)]})])])]})}}}),z=[],Z=e=>{const o=document.createDocumentFragment();let n=m(m({},ze(e,["parentContext","appContext"])),{close:s,open:!0}),t=null;function a(){t&&(he(null,o),t=null);for(var d=arguments.length,g=new Array(d),i=0;i<d;i++)g[i]=arguments[i];const l=g.some(r=>r&&r.triggerCancel);e.onCancel&&l&&e.onCancel(()=>{},...g.slice(1));for(let r=0;r<z.length;r++)if(z[r]===s){z.splice(r,1);break}}function s(){for(var d=arguments.length,g=new Array(d),i=0;i<d;i++)g[i]=arguments[i];n=m(m({},n),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),a.apply(this,g)}}),n.visible&&delete n.visible,p(n)}function p(d){typeof d=="function"?n=d(n):n=m(m({},n),d),t&&Eo(t,n,o)}const C=d=>{const g=Mo,i=g.prefixCls,l=d.prefixCls||`${i}-modal`,r=g.iconPrefixCls,v=No();return f($o,S(S({},g),{},{prefixCls:i}),{default:()=>[f(We,S(S({},d),{},{rootPrefixCls:i,prefixCls:l,iconPrefixCls:r,locale:v,cancelText:d.cancelText||v.cancelText}),null)]})};function w(d){const g=f(C,m({},d));return g.appContext=e.parentContext||e.appContext||g.appContext,he(g,o),g}return t=w(n),z.push(s),{destroy:s,update:p}};function Ke(e){return m(m({},e),{type:"warning"})}function Ve(e){return m(m({},e),{type:"info"})}function Ge(e){return m(m({},e),{type:"success"})}function ke(e){return m(m({},e),{type:"error"})}function je(e){return m(m({},e),{type:"confirm"})}const vn=()=>({config:Object,afterClose:Function,destroyAction:Function,open:Boolean}),Cn=A({name:"HookModal",inheritAttrs:!1,props:ae(vn(),{config:{width:520,okType:"primary"}}),setup(e,o){let{expose:n}=o;var t;const a=j(()=>e.open),s=j(()=>e.config),{direction:p,getPrefixCls:C}=Po(),w=C("modal"),d=C(),g=()=>{var v,b;e==null||e.afterClose(),(b=(v=s.value).afterClose)===null||b===void 0||b.call(v)},i=function(){e.destroyAction(...arguments)};n({destroy:i});const l=(t=s.value.okCancel)!==null&&t!==void 0?t:s.value.type==="confirm",[r]=me("Modal",Io.Modal);return()=>f(We,S(S({prefixCls:w,rootPrefixCls:d},s.value),{},{close:i,open:a.value,afterClose:g,okText:s.value.okText||(l?r==null?void 0:r.value.okText:r==null?void 0:r.value.justOkText),direction:s.value.direction||p.value,cancelText:s.value.cancelText||(r==null?void 0:r.value.cancelText)}),null)}});let Oe=0;const yn=A({name:"ElementsHolder",inheritAttrs:!1,setup(e,o){let{expose:n}=o;const t=T([]);return n({addModal:s=>(t.value.push(s),t.value=t.value.slice(),()=>{t.value=t.value.filter(p=>p!==s)})}),()=>t.value.map(s=>s())}});function hn(){const e=T(null),o=T([]);ne(o,()=>{o.value.length&&([...o.value].forEach(p=>{p()}),o.value=[])},{immediate:!0});const n=s=>function(C){var w;Oe+=1;const d=T(!0),g=T(null),i=T(oe(C)),l=T({});ne(()=>C,h=>{x(m(m({},Oo(h)?h.value:h),l.value))});const r=function(){d.value=!1;for(var h=arguments.length,$=new Array(h),M=0;M<h;M++)$[M]=arguments[M];const P=$.some(I=>I&&I.triggerCancel);i.value.onCancel&&P&&i.value.onCancel(()=>{},...$.slice(1))};let v;const b=()=>f(Cn,{key:`modal-${Oe}`,config:s(i.value),ref:g,open:d.value,destroyAction:r,afterClose:()=>{v==null||v()}},null);v=(w=e.value)===null||w===void 0?void 0:w.addModal(b),v&&z.push(v);const x=h=>{i.value=m(m({},i.value),h)};return{destroy:()=>{g.value?r():o.value=[...o.value,r]},update:h=>{l.value=h,g.value?x(h):o.value=[...o.value,()=>x(h)]}}},t=j(()=>({info:n(Ve),success:n(Ge),error:n(ke),warning:n(Ke),confirm:n(je)})),a=Symbol("modalHolderKey");return[t.value,()=>f(yn,{key:a,ref:e},null)]}function Qe(e){return Z(Ke(e))}N.useModal=hn;N.info=function(o){return Z(Ve(o))};N.success=function(o){return Z(Ge(o))};N.error=function(o){return Z(ke(o))};N.warning=Qe;N.warn=Qe;N.confirm=function(o){return Z(je(o))};N.destroyAll=function(){for(;z.length;){const o=z.pop();o&&o()}};N.install=function(e){return e.component(N.name,N),e};const bn="/assets/kvm-Cmg_feMa.svg",xn="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2018.1.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2031.586%2031.586'%20style='enable-background:new%200%200%2031.586%2031.586;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M29.331,2.256H2.259C1.01,2.256,0,3.265,0,4.511v22.565c0,1.244,1.01,2.255,2.259,2.255h27.072%20c1.242,0,2.255-1.011,2.255-2.255V4.511C31.586,3.265,30.573,2.256,29.331,2.256z%20M10.788,3.95c0.623,0,1.126,0.502,1.126,1.128%20c0,0.623-0.503,1.125-1.126,1.125S9.659,5.701,9.659,5.078C9.659,4.452,10.165,3.95,10.788,3.95z%20M7.334,3.95%20c0.623,0,1.129,0.502,1.129,1.128c0,0.623-0.506,1.125-1.129,1.125c-0.625,0-1.131-0.503-1.131-1.125%20C6.203,4.452,6.709,3.95,7.334,3.95z%20M3.947,3.95c0.623,0,1.129,0.502,1.129,1.128c0,0.623-0.506,1.125-1.129,1.125%20c-0.621,0-1.126-0.503-1.126-1.125C2.821,4.452,3.326,3.95,3.947,3.95z%20M29.331,27.076H2.259V7.922h27.072%20C29.331,7.922,29.331,27.076,29.331,27.076z%20M29.331,5.665H13.536V4.537h15.795C29.331,4.537,29.331,5.665,29.331,5.665z'/%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e";var Xe=(e=>(e.JANUS="janus",e.WEBTERM="webterm",e.KVM="kvm",e))(Xe||{});class pe{constructor(o,n,t,a){this.name=o,this.path=n,this.icon=t,this.onClick=a}}class Sn extends pe{constructor(n,t,a,s){super(n,t,a,s);ye(this,"isOriginal",!0)}}const Ae=new Map([["janus",new pe("KVM","/kvm",bn)],["webterm",new Sn("Terminal","https://192.168.8.240/extras/webterm/ttyd/",xn)]]),ee=new Map([[0,"default"],[90,"90°"],[270,"270°"],[180,"180°"]]);new J(0,ee.get(0)),new J(270,ee.get(270)),new J(90,ee.get(90)),new J(180,ee.get(180));const wn={loadKvmInfo(e=null){return be.get("/api/info",{params:e})},updateH264Args(e){return be.post("/api/streamer/set_params",null,{params:e})}},Tn="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2016.0.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='46.782px'%20height='46.782px'%20viewBox='0%200%2046.782%2046.782'%20style='enable-background:new%200%200%2046.782%2046.782;'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M46.629,33.693l-1.262-2.219c-0.204-0.358-0.709-0.651-1.121-0.651L27.75,30.825c-0.412,0-0.979-0.25-1.256-0.555%20l-0.985-1.08c-0.278-0.305-0.844-0.554-1.256-0.554h-5.604l-0.231-2.796c-0.347-2.177-2.387-3.554-4.535-3.072l-9.977,2.247%20c-2.148,0.483-3.904,2.669-3.903,4.871L0,38.807c0,2.194,1.758,4.386,3.903,4.873l9.979,2.245%20c2.148,0.482,4.188-0.896,4.535-3.075l0.231-2.792l0,0l3.609-0.001c0.412,0,0.978-0.25,1.255-0.556l0.984-1.078%20c0.277-0.305,0.843-0.555,1.255-0.555h1.163c0.412,0,0.9-0.302,1.084-0.672l0.154-0.313c0.185-0.37,0.673-0.673,1.084-0.673h0.705%20c0.412,0,0.836,0.326,0.94,0.726l0.056,0.208c0.105,0.398,0.514,0.725,0.904,0.725s0.862-0.302,1.047-0.672l0.155-0.314%20c0.185-0.37,0.671-0.672,1.083-0.672h0.705c0.412,0,0.835,0.326,0.939,0.726l0.055,0.208c0.104,0.398,0.527,0.727,0.939,0.727%20h7.478c0.411,0,0.917-0.293,1.12-0.652l1.263-2.219C46.833,34.639,46.833,34.052,46.629,33.693z%20M6.883,40.389%20c-1.857,0-3.357-2.705-3.357-6.042c0-3.338,1.5-6.043,3.357-6.043c1.855,0,3.356,2.705,3.356,6.043%20C10.239,37.684,8.738,40.389,6.883,40.389z'/%3e%3cpolygon%20points='17.709,21.248%2023.5,15.458%2029.291,21.248%2033.744,16.794%2027.953,11.006%2033.744,5.214%2029.291,0.761%2023.5,6.553%2017.709,0.761%2013.256,5.214%2019.048,11.006%2013.256,16.794%20'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e",En=Ao("kvm",()=>{const e=B(),o=B(!1),n=B(!1),t=B(!1),a=async(d=!0)=>{try{o.value=!0;const g=await wn.loadKvmInfo(d?{fields:"auth,meta,extras"}:null);e.value=g,o.value=!1}catch{o.value=!1}},s=j(()=>{var l,r,v,b,x;const d=[];return e.value?(((v=(r=(l=e.value)==null?void 0:l.meta)==null?void 0:r.web)==null?void 0:v.hide_kvm_button)||d.push(Ae.get(Xe.JANUS)),Object.entries(e.value.extras).map(([u,y])=>({...y,key:u})).sort((u,y)=>u.place<y.place?-1:u.place>y.place?1:0).forEach(u=>{u.place>=0&&(u.enabled||u.started)&&d.push(Ae.get(u.key))}),(x=(b=e.value)==null?void 0:b.auth)!=null&&x.enabled&&d.push(new pe("Logout",null,Tn,async()=>{N.confirm({title:"Logout",content:"Are you sure you want to logout?",okText:"Logout",cancelText:"Cancel",onOk:async()=>{await _o.logout(),Bo.push({name:"login"})}})})),d.filter(u=>!!u)):d}),p=d=>{n.value=d},C=j(()=>n.value?"Stream is active":"Stream inactive");return{kvmInfo:e,kvmInfoLoading:o,getKvmInfo:a,apps:s,streamState:n,streamStateTitle:C,setStreamState:p,mouseEnabled:t,setMouseEnabled:d=>{t.value=d}}}),Ye=e=>(zo("data-v-341371f3"),e=e(),Uo(),e),$n={class:"entry-page"},Mn={class:"entry-content"},Nn={class:"entry-box"},Pn=Ye(()=>_("div",{class:"title flex-start"},[_("span",null,"KVM"),_("span",{class:"subtitle"},"The AstroWarp KVM and Switch Robot .")],-1)),In={class:"feature-box flex-btw"},On=["onClick"],An=["src"],_n={class:"name"},Bn=Ye(()=>_("div",null,"Please note that when you are working with a KVM session or another application that captures the keyboard, you can't use some keyboard shortcuts such as Ctrl+Alt+Del (which will be caught by your OS) or Ctrl+W (caught by your browser). To override this limitation you can use Google Chrome or Chromium in application mode.",-1)),Fn=A({__name:"entryPage",setup(e){const o=En(),n=Ho(),t=a=>{var s;(s=a.onClick)==null||s.call(a),console.log(a),a.path&&(a.isOriginal?location.href=a.path:n.push(a.path))};return De(async()=>{await o.getKvmInfo()}),(a,s)=>(se(),ce("div",$n,[_("div",Mn,[_("div",Nn,[Pn,f(oe(Lo),{spinning:oe(o).kvmInfoLoading},{default:Fo(()=>[_("div",In,[(se(!0),ce(He,null,Ro(oe(o).apps,p=>(se(),ce("div",{onClick:C=>t(p),class:"app-item pointer flex flex-column",key:p.name},[_("img",{src:p.icon,alt:""},null,8,An),_("div",_n,Do(p.name),1)],8,On))),128))])]),_:1},8,["spinning"]),Bn])])]))}}),zn=Wo(Fn,[["__scopeId","data-v-341371f3"]]);export{zn as default};
