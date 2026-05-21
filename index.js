import{S as u,a as f,i}from"./assets/vendor-DZWlGVzj.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();let l;function m(e){return`
        <li class="gallery-item">
            <a href="${e.largeImageURL}" class="gallery-link">
                <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" loading="lazy" />
            </a>
            <ul class="gallery-info">
                <li class="gallery-info-item"><p>Likes</p><span>${e.likes}</span></li>
                <li class="gallery-info-item"><p>Views</p><span>${e.views}</span></li>
                <li class="gallery-info-item"><p>Comments</p><span>${e.comments}</span></li>
                <li class="gallery-info-item"><p>Downloads</p><span>${e.downloads}</span></li>
            </ul>
        </li>
    `}function d(e){return e.map(m).join("")}function g(){return l=new u(".gallery-link",{captionsData:"alt",captionDelay:250}),l}function p(e){return d(e)}function y(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function h(){const e=document.querySelector(".loader");e&&e.classList.remove("is-hidden")}function L(){const e=document.querySelector(".loader");e&&e.classList.add("is-hidden")}const w=f.create({baseURL:"https://pixabay.com/api/"}),b=e=>w.get("",{params:{key:"55965686-0954e8ecbc9e6337c09710879",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data),c=document.querySelector(".form"),S=document.querySelector(".gallery");document.querySelector(".loader");const q=g();c.addEventListener("submit",e=>{var n;e.preventDefault();const a=(n=new FormData(c).get("search-text"))==null?void 0:n.trim();if(!a){i.warning({title:"Warning",message:"Please enter a search term!"});return}y(),h(),b(a).then(r=>{if(r.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}S.innerHTML=p(r.hits),q.refresh()}).catch(r=>{console.error(r),i.error({title:"Error",message:"Something went wrong while loading images."})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
