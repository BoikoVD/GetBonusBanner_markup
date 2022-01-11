"use strict";const ratings=document.querySelectorAll(".rating"),ratingValues=document.querySelectorAll(".rate__value");function initRatings(){let t,e;for(let t=0;t<ratings.length;t++){n(ratings[t])}function n(t){a(t),i(),function(t){const e=t.querySelectorAll(".rating__item");for(let n=0;n<e.length;n++){const s=e[n];s.addEventListener("mouseenter",(function(e){a(t),i(s.value)})),s.addEventListener("mouseleave",(function(t){i()})),s.addEventListener("click",(function(e){a(t),r(s.value,t)}))}}(t)}function a(n){t=n.querySelector(".rating__active-wrapper");for(let t=0;t<ratingValues.length;t++)n.dataset.rating===ratingValues[t].dataset.rating&&(e=ratingValues[t])}function i(n=e.innerHTML){const a=n/.1;t.style.width=`${a}%`}async function r(t,n){if(n.classList.contains("rating_sending"))alert("ERROR"),n.classList.remove("rating_sending");else{n.classList.add("rating_sending");let t=await fetch("rating.json",{method:"GET"});if(t.ok){const a=(await t.json())[`newRating-${n.dataset.rating}`];e.innerHTML=a,i(),n.classList.remove("rating_sending")}}}}function DynamicAdapt(t){this.type=t}ratings.length>0&&initRatings(),DynamicAdapt.prototype.init=function(){const t=this;this.оbjects=[],this.daClassname="_dynamic_adapt_",this.nodes=document.querySelectorAll("[data-da]");for(let t=0;t<this.nodes.length;t++){const e=this.nodes[t],n=e.dataset.da.trim().split(","),a={};a.element=e,a.parent=e.parentNode,a.destination=document.querySelector(n[0].trim()),a.breakpoint=n[1]?n[1].trim():"767",a.place=n[2]?n[2].trim():"last",a.index=this.indexInParent(a.parent,a.element),this.оbjects.push(a)}this.arraySort(this.оbjects),this.mediaQueries=Array.prototype.map.call(this.оbjects,(function(t){return"("+this.type+"-width: "+t.breakpoint+"px),"+t.breakpoint}),this),this.mediaQueries=Array.prototype.filter.call(this.mediaQueries,(function(t,e,n){return Array.prototype.indexOf.call(n,t)===e}));for(let e=0;e<this.mediaQueries.length;e++){const n=this.mediaQueries[e],a=String.prototype.split.call(n,","),i=window.matchMedia(a[0]),r=a[1],s=Array.prototype.filter.call(this.оbjects,(function(t){return t.breakpoint===r}));i.addListener((function(){t.mediaHandler(i,s)})),this.mediaHandler(i,s)}},DynamicAdapt.prototype.mediaHandler=function(t,e){if(t.matches)for(let t=0;t<e.length;t++){const n=e[t];n.index=this.indexInParent(n.parent,n.element),this.moveTo(n.place,n.element,n.destination)}else for(let t=0;t<e.length;t++){const n=e[t];n.element.classList.contains(this.daClassname)&&this.moveBack(n.parent,n.element,n.index)}},DynamicAdapt.prototype.moveTo=function(t,e,n){e.classList.add(this.daClassname),"last"===t||t>=n.children.length?n.insertAdjacentElement("beforeend",e):"first"!==t?n.children[t].insertAdjacentElement("beforebegin",e):n.insertAdjacentElement("afterbegin",e)},DynamicAdapt.prototype.moveBack=function(t,e,n){e.classList.remove(this.daClassname),void 0!==t.children[n]?t.children[n].insertAdjacentElement("beforebegin",e):t.insertAdjacentElement("beforeend",e)},DynamicAdapt.prototype.indexInParent=function(t,e){const n=Array.prototype.slice.call(t.children);return Array.prototype.indexOf.call(n,e)},DynamicAdapt.prototype.arraySort=function(t){"min"===this.type?Array.prototype.sort.call(t,(function(t,e){return t.breakpoint===e.breakpoint?t.place===e.place?0:"first"===t.place||"last"===e.place?-1:"last"===t.place||"first"===e.place?1:t.place-e.place:t.breakpoint-e.breakpoint})):Array.prototype.sort.call(t,(function(t,e){return t.breakpoint===e.breakpoint?t.place===e.place?0:"first"===t.place||"last"===e.place?1:"last"===t.place||"first"===e.place?-1:e.place-t.place:e.breakpoint-t.breakpoint}))};const da=new DynamicAdapt("min");da.init();