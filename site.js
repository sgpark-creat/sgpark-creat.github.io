(async()=>{
 const q=s=>document.querySelector(s), qa=s=>[...document.querySelectorAll(s)];
 const safeURL=(u)=>{try{const x=new URL(u,location.href);return ['https:','http:','mailto:'].includes(x.protocol)?x.href:null}catch{return null}};
 const put=(el,t)=>{if(el&&typeof t==='string')el.textContent=t};
 const link=(el,u)=>{if(!el)return;const v=safeURL(u||'');if(v){el.href=v;el.style.display=''}else{el.removeAttribute('href');el.style.display='none'}};
 const node=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=txt;return e};
 try{
 const r=await fetch('./content.json',{cache:'no-store'});if(!r.ok)throw Error('Content unavailable');const d=await r.json();
 put(q('.brand'),d.profile.name);put(q('h1'),d.profile.name);put(q('.role'),d.profile.role);put(q('.statement'),d.profile.tagline);put(q('.description'),d.profile.summary);
 const paras=(d.profile.bio||'').split(/\n\s*\n/).filter(Boolean), about=q('#about .two>div:last-child');if(about){about.replaceChildren(...paras.map(t=>node('p','',t)))}
 const photo=q('.portrait');if(photo&&d.profile.photo){const url=safeURL(d.profile.photo);if(url){photo.replaceChildren();const img=node('img');img.src=url;img.alt='Portrait of '+d.profile.name;img.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:inherit';photo.style.padding='0';photo.append(img)}}
 const areas=q('.areas');if(areas){areas.replaceChildren(...(d.research||[]).map((x,i)=>{const a=node('article','area');a.append(node('span','num',String(i+1).padStart(2,'0')),node('h3','',x.title),node('p','',x.description));return a}))}
 put(q('.featured h3'),d.dissertation.title);put(q('.featured p'),d.dissertation.description);
 const build=(arr,allowLinks)=>arr.map(x=>{const e=node('div','item');const title=node('strong','',x.title);if(allowLinks&&x.url&&safeURL(x.url)){const a=node('a','',x.title);a.href=safeURL(x.url);a.target='_blank';a.rel='noopener noreferrer';title.replaceChildren(a)}e.append(title,node('span','',x.detail||''));return e});
 const pubs=q('#publications .items');if(pubs)pubs.replaceChildren(...build(d.publications||[],true));
 const lead=q('#leadership .items');if(lead)lead.replaceChildren(...build(d.leadership||[],false));
 qa('a[href*="scholar.google.com"]').forEach(a=>link(a,d.links.scholar));
 const cv=q('#cv');if(cv){link(cv,d.links.cv);if(d.links.cv)cv.textContent='Download CV ↗'}
 const navcv=q('.navlinks .cv');if(navcv){link(navcv,d.links.cv);if(d.links.cv)navcv.textContent='CV ↗'}
 const contacts=q('.contactlinks');if(contacts){if(d.links.email){const a=node('a','', 'Email ↗');link(a,'mailto:'+d.links.email);contacts.append(a)}if(d.links.linkedin){const a=node('a','','LinkedIn ↗');link(a,d.links.linkedin);a.target='_blank';a.rel='noopener noreferrer';contacts.append(a)}}
 }catch(e){console.warn('Using built-in fallback content',e)}
})();
