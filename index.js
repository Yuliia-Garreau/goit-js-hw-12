import{a as y,i as c,S as u}from"./assets/vendor-D0cagnvz.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const f=async(l,e=1)=>await y.get("https://pixabay.com/api/",{params:{key:"47281419-922d6d2c66ee391f8ff42b6d3",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}}),g=l=>l.map(e=>`
      <li class="item-gallery">
      <a class="link-gallery" href="${e.largeImageURL}">
        <img  
        src="${e.webformatURL}"
        class="img-gallery"
           
          alt="${e.tags}"
          title=""
        />
      
        <ul class="list-info">
          
        <li class="list-item-info">
            <p class="info-title">Likes</p>
            <p class="info-value">${e.likes}</p>
        </li>

          <li class="list-item-info">
            <p class="info-title">Views</p>
            <p class="info-value">${e.views}</p>
          </li>

          <li class="list-item-info">
            <p class="info-title">Comments</p>
            <p class="info-value">${e.comments}</p>
          </li>

          <li class="list-item-info">
            <p class="info-title">Downloads</p>
            <p class="info-value">${e.downloads}</p>
          </li>

        </ul>
        </a>
      </li>
    
  `).join(""),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAETSURBVHgBrVVbDoJADCwEwq83kaN4I+UkHgGP4mH4YTGslFBB2e0UYZImG9rO7KMtRBG0bXd1rvMW49gYTxYjTxK6eU+PNKUnKeh7Kjl2yKGiyCtCmHf+upMRHItO8je5WWQPORQ5gjwqopE7586YcB3zJTIt6kBiiR5ONtc0TRnw1ewbBbouTMLfYyJCjnJVgZgIIl/mZQSQ53k1BPNybCYGNxYb+1A+FPgVEQELOSMlI4aREFwjmE4gs4lt+mSePVBgSS7XsnwTKKJVg1YtWgkv/bDRLKWoNpoEDYShUVESQChGRsVnc5rIVqzIBUeIRMmPEIHke0Q08lUfyFjwPuE6P1l++kT+smV8jJhPgk27ljfw3ToafivEMQAAAABJRU5ErkJggg==";c.settings({timeout:1e3,position:"topRight"});const A=new u(".item-gallery a",{captionsData:"alt",captionDelay:300,className:"bg-color"}),h=document.querySelector(".form-search"),m=document.querySelector(".gallery-list"),i=document.querySelector(".loader"),a=document.querySelector(".load-more");i.style.display="none";a.style.display="none";let w=100;h.addEventListener("submit",b);function b(l){l.preventDefault();let e=l.target.elements.input.value.trim();if(e===""){i.style.display="none",a.style.display="none",c.warning({title:"Caution",iconUrl:p,message:"The field is empty, please type your request"});return}e&&(i.style.display="block"),f(e).then(s=>{if(s.data.totalHits===0)a.style.display="none",i.style.display="none",c.error({iconUrl:p,titleColor:"#fff",messageColor:"#fff",imageWidth:24,iconColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"});else{m.innerHTML=g(s.data.hits),i.style.display="none",A.refresh(),a.style.display="block";const r=s.data.totalHits/w;a.addEventListener("click",t);async function t(){s.config.params.page+=1,i.style.display="block";try{const{data:o}=await f(e,s.config.params.page);m.insertAdjacentHTML("beforeend",g(o.hits)),i.style.display="none";const d=document.querySelector(".item-gallery").getBoundingClientRect().height;if(window.scrollBy({left:0,top:d*2,behavior:"smooth"}),s.config.params.page>=r){a.style.display="none";const S=setTimeout(()=>{c.info({position:"topRight",iconUrl:p,message:"We're sorry, there are no more images to load"})},3e3)}}catch(o){console.log(o.message)}}}}).catch(s=>{console.log(s.message)}).finally(()=>{l.target.elements.input.value=""})}
//# sourceMappingURL=index.js.map
