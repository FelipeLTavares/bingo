import{V as N,C as M}from"./CartelaBingo-BtZCnO0z.js";import{D as R}from"./DefaultLayout-BCDvamym.js";import{i as C}from"./indexedDbService-BELMguOp.js";import{d as S,r as h,k as T,Q as E,c as b,w as e,V as O,o as c,a as l,b as g,e as m,S as p,T as w,H as x,W,U as y,X as U}from"./index-iDuiBTVN.js";import{V as o,a as n,b as A,c as z,_ as F}from"./VMain-9hXKiq8B.js";import{a as B,b as H,d as Q}from"./VCard-VIAF0voS.js";const I=i=>{const v=Math.floor(Math.random()*76);if(!(i.length>74))return i.includes(v)?I(i):v},X=S({__name:"index",setup(i){const j=O().params.id,a=h(),k=h(null);let _=null;const G=async()=>{const u=await C.getOneGame(+j);u&&(a.value=u)},D=u=>{var t;const r=Object.values(u.ticketNumbers).flatMap(s=>s).filter(s=>s);let d=!0;for(let s of r){if(!d)break;d=!!((t=a.value)!=null&&t.drawnNumbers.includes(s))}return d},L=()=>{var r,d,t;if(!(a!=null&&a.value)||((r=a.value.winners)==null?void 0:r.length)>0)return;const u=I(((d=a.value)==null?void 0:d.drawnNumbers)||[]);a.value.drawnNumbers.push(u),a.value.drawnNumbers=[...((t=a.value)==null?void 0:t.drawnNumbers)||[]],k.value=u,a.value.players.forEach(s=>{var f;D(s)&&((f=a.value)==null||f.winners.push(s))}),a.value.drawnNumbers.length>75&&clearInterval(_),C.updateGame(Number(a.value.id),{...a.value,winners:[...a.value.winners],finished:a.value.winners.length>0,drawnNumbers:[...a.value.drawnNumbers||[]],lastNumber:u}),a.value.winners.length>0&&(window.alert(`BINGO!!! Vencedor(es): ${a.value.winners.map(s=>s.name)}`),clearInterval(_))};return T(()=>clearInterval(_)),E(()=>G()),(u,r)=>(c(),b(R,null,{default:e(()=>[l(z,{class:"mt-5"},{default:e(()=>{var d;return[l(o,{class:"d-flex justify-center mb-4"},{default:e(()=>[l(n,{cols:"12",md:"8"},{default:e(()=>r[0]||(r[0]=[g("h2",{class:"text-center"},"B I N G O",-1)])),_:1})]),_:1}),l(o,{class:"d-flex justify-center mb-4"},{default:e(()=>[l(n,{cols:"12",md:"4"},{default:e(()=>{var t;return[l(A,{class:"mx-auto d-block",onClick:L,color:"primary",disabled:(t=a.value)==null?void 0:t.finished},{default:e(()=>r[1]||(r[1]=[m(" CALL A NUMBER ")])),_:1},8,["disabled"])]}),_:1})]),_:1}),(d=a.value)!=null&&d.finished?(c(),b(o,{key:0,class:"mb-4"},{default:e(()=>[l(n,{cols:"12"},{default:e(()=>r[2]||(r[2]=[g("h2",{class:"text-center"},"WINNER(S):",-1)])),_:1}),(c(!0),p(x,null,w(a.value.winners,t=>(c(),b(n,{cols:"12",key:t.name,class:"mb-2"},{default:e(()=>[l(N,{class:"pa-3 text-center winner-card"},{default:e(()=>[m(y(t.name),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})):W("",!0),l(B,{class:"mb-4"},{default:e(()=>[l(H,null,{default:e(()=>[l(o,{class:"d-flex justify-center align-center"},{default:e(()=>[l(n,{cols:"12",md:"6",class:"text-center"},{default:e(()=>r[3]||(r[3]=[m(" Last called number: ")])),_:1}),l(n,{cols:"12",md:"6",class:"text-center"},{default:e(()=>[l(N,{class:"number-display"},{default:e(()=>{var t;return[m(y(k.value||((t=a.value)==null?void 0:t.lastNumber)),1)]}),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(B,{class:"mb-4"},{default:e(()=>[l(Q,null,{default:e(()=>[l(o,{class:"d-flex justify-center"},{default:e(()=>[l(n,{cols:"12"},{default:e(()=>[l(o,null,{default:e(()=>[(c(),p(x,null,w(75,t=>l(n,{cols:"2",key:t,class:"d-flex justify-center"},{default:e(()=>{var s;return[l(N,{class:U(["number-cell",{"selected-number":(s=a.value)==null?void 0:s.drawnNumbers.includes(t)}])},{default:e(()=>[m(y(t),1)]),_:2},1032,["class"])]}),_:2},1024)),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(o,{class:"d-flex justify-center"},{default:e(()=>[l(n,{cols:"12",md:"8"},{default:e(()=>[l(o,null,{default:e(()=>{var t;return[(c(!0),p(x,null,w((t=a.value)==null?void 0:t.players,(s,f)=>(c(),b(n,{cols:"12",md:"6",key:f,class:"mb-4"},{default:e(()=>{var V;return[l(M,{"player-name":s.name,"ticket-numbers":s.ticketNumbers,selecteds:(V=a.value)==null?void 0:V.drawnNumbers},null,8,["player-name","ticket-numbers","selecteds"])]}),_:2},1024))),128))]}),_:1})]),_:1})]),_:1})]}),_:1})]),_:1}))}}),Z=F(X,[["__scopeId","data-v-e9382574"]]);export{Z as default};