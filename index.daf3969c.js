/**
 * A lightweight youtube embed. Still should feel the same to the user, just MUCH faster to initialize and paint.
 *
 * Thx to these as the inspiration
 *   https://storage.googleapis.com/amp-vs-non-amp/youtube-lazy.html
 *   https://autoplay-youtube-player.glitch.me/
 *
 * Once built it, I also found these:
 *   https://github.com/ampproject/amphtml/blob/master/extensions/amp-youtube (👍👍)
 *   https://github.com/Daugilas/lazyYT
 *   https://github.com/vb/lazyframe
 */class e extends HTMLElement{connectedCallback(){this.videoId=this.getAttribute("videoid");let t=this.querySelector(".lty-playbtn");if(// A label for the button takes priority over a [playlabel] attribute on the custom-element
this.playLabel=t&&t.textContent.trim()||this.getAttribute("playlabel")||"Play",this.style.backgroundImage||(this.posterUrl=`https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg`,// Warm the connection for the poster image
e.addPrefetch("preload",this.posterUrl,"image"),this.style.backgroundImage=`url("${this.posterUrl}")`),t||((t=document.createElement("button")).type="button",t.classList.add("lty-playbtn"),this.append(t)),!t.textContent){let e=document.createElement("span");e.className="lyt-visually-hidden",e.textContent=this.playLabel,t.append(e)}// On hover (or tap), warm up the TCP connections we're (likely) about to use.
this.addEventListener("pointerover",e.warmConnections,{once:!0}),// Once the user clicks, add the real iframe and drop our play button
// TODO: In the future we could be like amp-youtube and silently swap in the iframe during idle time
//   We'd want to only do this for in-viewport or near-viewport ones: https://github.com/ampproject/amphtml/pull/5003
this.addEventListener("click",e=>this.addIframe())}// // TODO: Support the the user changing the [videoid] attribute
// attributeChangedCallback() {
// }
/**
     * Add a <link rel={preload | preconnect} ...> to the head
     */static addPrefetch(e,t,a){let n=document.createElement("link");n.rel=e,n.href=t,a&&(n.as=a),document.head.append(n)}/**
     * Begin pre-connecting to warm up the iframe load
     * Since the embed's network requests load within its iframe,
     *   preload/prefetch'ing them outside the iframe will only cause double-downloads.
     * So, the best we can do is warm up a few connections to origins that are in the critical path.
     *
     * Maybe `<link rel=preload as=document>` would work, but it's unsupported: http://crbug.com/593267
     * But TBH, I don't think it'll happen soon with Site Isolation and split caches adding serious complexity.
     */static warmConnections(){e.preconnected||(// The iframe document and most of its subresources come right off youtube.com
e.addPrefetch("preconnect","https://www.youtube-nocookie.com"),// The botguard script is fetched off from google.com
e.addPrefetch("preconnect","https://www.google.com"),// Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
e.addPrefetch("preconnect","https://googleads.g.doubleclick.net"),e.addPrefetch("preconnect","https://static.doubleclick.net"),e.preconnected=!0)}addIframe(){let e=new URLSearchParams(this.getAttribute("params")||[]);e.append("autoplay","1");let t=document.createElement("iframe");t.width=560,t.height=315,// No encoding necessary as [title] is safe. https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#:~:text=Safe%20HTML%20Attributes%20include
t.title=this.playLabel,t.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",t.allowFullscreen=!0,// AFAIK, the encoding here isn't necessary for XSS, but we'll do it only because this is a URL
// https://stackoverflow.com/q/64959723/89484
t.src=`https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${e.toString()}`,this.append(t),this.classList.add("lyt-activated"),// Set focus for a11y
this.querySelector("iframe").focus()}}// Register custom element
customElements.define("lite-youtube",e);//# sourceMappingURL=index.daf3969c.js.map

//# sourceMappingURL=index.daf3969c.js.map
