var e,t,i,n,s,o,r,a,l,c,h,d=/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*//*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*//*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},u=/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:null!==e&&"object"==typeof e&&"number"==typeof e.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&(0===e.length||d(e[0]))},f=function(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(d);if(d(e))return[e];if(u(e))return Array.prototype.slice.call(e);if("string"==typeof e)try{var i=t.querySelectorAll(e);return Array.prototype.slice.call(i)}catch(e){}return[]};/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*//**
 * @module Rematrix
 *//**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */function m(e){if(e.constructor!==Array)throw TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=g();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw RangeError("Expected array with either 6 or 16 values.")}/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */function g(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */function p(e,t){for(var i=m(e),n=m(t),s=[],o=0;o<4;o++)for(var r=[i[o],i[o+4],i[o+8],i[o+12]],a=0;a<4;a++){var l=4*a,c=[n[l],n[l+1],n[l+2],n[l+3]],h=r[0]*c[0]+r[1]*c[1]+r[2]*c[2]+r[3]*c[3];s[o+l]=h}return s}/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */function v(e,t){var i=g();return i[0]=e,i[5]="number"==typeof t?t:e,i}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var y=(e=Date.now(),function(t){var i=Date.now();i-e>16?(e=i,t(i)):setTimeout(function(){return y(t)},0)}),b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y,w={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}},E={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function x(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function T(e,t){if(x(e))return Object.keys(e).forEach(function(i){return t(e[i],i,e)});if(e instanceof Array)return e.forEach(function(i,n){return t(i,n,e)});throw TypeError("Expected either an array or object literal.")}function L(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(this.constructor.debug&&console){var n="%cScrollReveal: "+e;t.forEach(function(e){return n+="\n — "+e}),console.log(n,"color: #ea654b;")}}function M(){var e=this,t=function(){return{active:[],stale:[]}},i=t(),n=t(),s=t();/**
	 * Take stock of active element IDs.
	 */try{T(f("[data-sr-id]"),function(e){var t=parseInt(e.getAttribute("data-sr-id"));i.active.push(t)})}catch(e){throw e}/**
	 * Destroy stale elements.
	 */T(this.store.elements,function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)}),T(i.stale,function(t){return delete e.store.elements[t]}),/**
	 * Take stock of active container and sequence IDs.
	 */T(this.store.elements,function(e){-1===s.active.indexOf(e.containerId)&&s.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)}),/**
	 * Destroy stale containers.
	 */T(this.store.containers,function(e){-1===s.active.indexOf(e.id)&&s.stale.push(e.id)}),T(s.stale,function(t){var i=e.store.containers[t].node;i.removeEventListener("scroll",e.delegate),i.removeEventListener("resize",e.delegate),delete e.store.containers[t]}),/**
	 * Destroy stale sequences.
	 */T(this.store.sequences,function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)}),T(n.stale,function(t){return delete e.store.sequences[t]})}var j=function(){var e={},t=document.documentElement.style;function i(i,n){if(void 0===n&&(n=t),i&&"string"==typeof i){if(e[i])return e[i];if("string"==typeof n[i])return e[i]=i;if("string"==typeof n["-webkit-"+i])return e[i]="-webkit-"+i;throw RangeError('Unable to find "'+i+'" style property.')}throw TypeError("Expected a string.")}return i.clearCache=function(){return e={}},i}();/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Styles to apply.
 */function z(e,t){t.split(";").forEach(function(t){var i=t.split(":"),n=i[0],s=i.slice(1);n&&s&&(e.style[n.trim()]=s.join(":"))})}function A(e){var t,i=this;try{T(f(e),function(e){var n=e.getAttribute("data-sr-id");if(null!==n){t=!0;var s=i.store.elements[n];s.callbackTimer&&window.clearTimeout(s.callbackTimer.clock),z(s.node,s.styles.inline.generated),e.removeAttribute("data-sr-id"),delete i.store.elements[n]}})}catch(e){return L.call(this,"Clean failed.",e.message)}if(t)try{M.call(this)}catch(e){return L.call(this,"Clean failed.",e.message)}}function O(){var e=this;/**
	 * Remove all generated styles and element ids
	 */T(this.store.elements,function(e){z(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),/**
	 * Remove all event listeners.
	 */T(this.store.containers,function(t){var i=t.node===document.documentElement?window:t.node;i.removeEventListener("scroll",e.delegate),i.removeEventListener("resize",e.delegate)}),/**
	 * Clear all data from the store
	 */this.store={containers:{},elements:{},history:[],sequences:{}}}function S(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(x(e))return T(t,function(t){T(t,function(t,i){x(t)?(e[i]&&x(e[i])||(e[i]={}),S(e[i],t)):e[i]=t})}),e;throw TypeError("Target must be an object literal.")}function P(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var k=(t=0,function(){return t++});function C(){var e=this;M.call(this),T(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),z(e.node,t.filter(function(e){return""!==e}).join(" "))}),T(this.store.containers,function(t){var i=t.node===document.documentElement?window:t.node;i.addEventListener("scroll",e.delegate),i.addEventListener("resize",e.delegate)}),/**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */this.delegate(),/**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */this.initTimeout=null}function q(e,t){void 0===t&&(t={});var i=t.pristine||this.pristine,n="always"===e.config.useDelay||"onload"===e.config.useDelay&&i||"once"===e.config.useDelay&&!e.seen,s=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||s?W.call(this,e,n):t.reset||o?R.call(this,e):void 0}function W(e,t){var i=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?i.push(e.styles.transition.generated.delayed):i.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,z(e.node,i.filter(function(e){return""!==e}).join(" ")),Y.call(this,e,t)}function R(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,z(e.node,t.filter(function(e){return""!==e}).join(" ")),Y.call(this,e)}function Y(e,t){var i=this,n=t?e.config.duration+e.config.delay:e.config.duration,s=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,r=0;e.callbackTimer&&(r=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),s(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&A.call(i,e.node)},n-r)}}function B(e,t){/**
	 * We first check if the element should reset.
	 */if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return q.call(this,e,{reset:!0});var i=this.store.sequences[e.sequence.id],n=e.sequence.index;if(i){var s=new N(i,"visible",this.store),o=new N(i,"revealed",this.store);/**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */if(i.models={visible:s,revealed:o},!o.body.length){var r=i.members[s.body[0]],a=this.store.elements[r];if(a)return F.call(this,i,s.body[0],-1,t),F.call(this,i,s.body[0],1,t),q.call(this,a,{reveal:!0,pristine:t})}/**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */if(!i.blocked.head&&n===[].concat(o.head).pop()&&n>=[].concat(s.body).shift())return F.call(this,i,n,-1,t),q.call(this,e,{reveal:!0,pristine:t});if(!i.blocked.foot&&n===[].concat(o.foot).shift()&&n<=[].concat(s.body).pop())return F.call(this,i,n,1,t),q.call(this,e,{reveal:!0,pristine:t})}}function X(e){var t=Math.abs(e);if(isNaN(t))throw RangeError("Invalid sequence interval.");this.id=k(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function N(e,t,i){var n=this;this.head=[],this.body=[],this.foot=[],T(e.members,function(e,s){var o=i.elements[e];o&&o[t]&&n.body.push(s)}),this.body.length&&T(e.members,function(e,s){var o=i.elements[e];o&&!o[t]&&(s<n.body[0]?n.head.push(s):n.foot.push(s))})}function F(e,t,i,n){var s=this,o=["head",null,"foot"][1+i],r=e.members[t+i],a=this.store.elements[r];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&B.call(s,a,n)},e.interval)}function I(e,t,i){var n,s=this;void 0===t&&(t={}),void 0===i&&(i=!1);var o=[],r=t.interval||w.interval;try{r&&(n=new X(r));var a=f(e);if(!a.length)throw Error("Invalid reveal target.");var l=a.reduce(function(e,i){var r,a={},l=i.getAttribute("data-sr-id");l?(S(a,s.store.elements[l]),/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */z(a.node,a.styles.inline.computed)):(a.id=k(),a.node=i,a.seen=!1,a.revealed=!1,a.visible=!1);var c=S({},a.config||s.defaults,t);if(!c.mobile&&P()||!c.desktop&&!P())return l&&A.call(s,a),e// skip elements that are disabled
;var h=f(c.container)[0];if(!h)throw Error("Invalid container.");return h.contains(i)&&(r=function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var n=null;return T(t,function(t){T(t,function(t){null===n&&t.node===e&&(n=t.id)})}),n}(h,o,s.store.containers),null===r&&(r=k(),o.push({id:r,node:h})),a.config=c,a.containerId=r,a.styles=function(e){var t,i,n,s,o,r,a=window.getComputedStyle(e.node),l=a.position,c=e.config,h={},d=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];h.computed=d?d.map(function(e){return e.trim()}).join("; ")+";":"",h.generated=d.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?h.computed:d.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";/**
	 * Generate opacity styles
	 */var u=parseFloat(a.opacity),f=isNaN(parseFloat(c.opacity))?parseFloat(a.opacity):parseFloat(c.opacity),y={computed:u!==f?"opacity: "+u+";":"",generated:u!==f?"opacity: "+f+";":""},b=[];if(parseFloat(c.distance)){var w,E,x,T,L="top"===c.origin||"bottom"===c.origin?"Y":"X",M=c.distance;("top"===c.origin||"left"===c.origin)&&(M=/^-/.test(M)?M.substr(1):"-"+M);var z=M.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),A=z[0];switch(z[1]){case"em":M=parseInt(a.fontSize)*A;break;case"px":M=A;break;case"%":/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */M="Y"===L?e.node.getBoundingClientRect().height*A/100:e.node.getBoundingClientRect().width*A/100;break;default:throw RangeError("Unrecognized or missing distance unit.")}"Y"===L?b.push((w=M,(E=g())[13]=w,E)):b.push((x=M,(T=g())[12]=x,T))}c.rotate.x&&b.push((t=Math.PI/180*c.rotate.x,(i=g())[5]=i[10]=Math.cos(t),i[6]=i[9]=Math.sin(t),i[9]*=-1,i)),c.rotate.y&&b.push((n=Math.PI/180*c.rotate.y,(s=g())[0]=s[10]=Math.cos(n),s[2]=s[8]=Math.sin(n),s[2]*=-1,s)),c.rotate.z&&b.push((o=Math.PI/180*c.rotate.z,(r=g())[0]=r[5]=Math.cos(o),r[1]=r[4]=Math.sin(o),r[4]*=-1,r)),1!==c.scale&&(0===c.scale?/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */b.push(v(2e-4)):b.push(v(c.scale)));var O={};if(b.length){O.property=j("transform"),/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */O.computed={raw:a[O.property],matrix:/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */function(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return m(t[2].split(", ").map(parseFloat))}return g()}(a[O.property])},b.unshift(O.computed.matrix);var S=b.reduce(p);O.generated={initial:O.property+": matrix3d("+S.join(", ")+");",final:O.property+": matrix3d("+O.computed.matrix.join(", ")+");"}}else O.generated={initial:"",final:""};/**
	 * Generate transition styles
	 */var P={};if(y.generated||O.generated.initial){P.property=j("transition"),P.computed=a[P.property],P.fragments=[];var k=c.delay,C=c.duration,q=c.easing;y.generated&&P.fragments.push({delayed:"opacity "+C/1e3+"s "+q+" "+k/1e3+"s",instant:"opacity "+C/1e3+"s "+q+" 0s"}),O.generated.initial&&P.fragments.push({delayed:O.property+" "+C/1e3+"s "+q+" "+k/1e3+"s",instant:O.property+" "+C/1e3+"s "+q+" 0s"}),P.computed&&!P.computed.match(/all 0s|none 0s/)&&P.fragments.unshift({delayed:P.computed,instant:P.computed});var W=P.fragments.reduce(function(e,t,i){return e.delayed+=0===i?t.delayed:", "+t.delayed,e.instant+=0===i?t.instant:", "+t.instant,e},{delayed:"",instant:""});P.generated={delayed:P.property+": "+W.delayed+";",instant:P.property+": "+W.instant+";"}}else P.generated={delayed:"",instant:""};return{inline:h,opacity:y,position:l,transform:O,transition:P}}(a),n&&(a.sequence={id:n.id,index:n.members.length},n.members.push(a.id)),e.push(a)),e// skip elements found outside the container
},[]);/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */T(l,function(e){s.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)})}catch(e){return L.call(this,"Reveal failed.",e.message)}/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */T(o,function(e){s.store.containers[e.id]={id:e.id,node:e.node}}),n&&(this.store.sequences[n.id]=n),!0!==i&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(C.bind(this),0))}/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */function D(){var e=this;T(this.store.history,function(t){I.call(e,t.target,t.options,!0)}),C.call(this)}var H=Math.sign||function(e){return(e>0)-(e<0)||+e};function _(e,t){/**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */var i=t?e.node.clientHeight:e.node.offsetHeight,n=t?e.node.clientWidth:e.node.offsetWidth,s=0,o=0,r=e.node;do isNaN(r.offsetTop)||(s+=r.offsetTop),isNaN(r.offsetLeft)||(o+=r.offsetLeft),r=r.offsetParent;while(r)return{bounds:{top:s,right:o+n,bottom:s+i,left:o},height:i,width:n}}function G(e){var t,i;return e.node===document.documentElement?(t=window.pageYOffset,i=window.pageXOffset):(t=e.node.scrollTop,i=e.node.scrollLeft),{top:t,left:i}}function V(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var i=Math.max(0,Math.min(1,e.config.viewFactor)),n=e.config.viewOffset,s={top:e.geometry.bounds.top+e.geometry.height*i,right:e.geometry.bounds.right-e.geometry.width*i,bottom:e.geometry.bounds.bottom-e.geometry.height*i,left:e.geometry.bounds.left+e.geometry.width*i},o={top:t.geometry.bounds.top+t.scroll.top+n.top,right:t.geometry.bounds.right+t.scroll.left-n.right,bottom:t.geometry.bounds.bottom+t.scroll.top-n.bottom,left:t.geometry.bounds.left+t.scroll.left+n.left};return s.top<o.bottom&&s.right>o.left&&s.bottom>o.top&&s.left<o.right||"fixed"===e.styles.position}}function $(e,t){var i=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),b(function(){var n="init"===e.type||"resize"===e.type;T(i.store.containers,function(e){n&&(e.geometry=_.call(i,e,!0));var t=G.call(i,e);e.scroll&&(e.direction={x:H(t.left-e.scroll.left),y:H(t.top-e.scroll.top)}),e.scroll=t}),/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */T(t,function(e){(n||void 0===e.geometry)&&(e.geometry=_.call(i,e)),e.visible=V.call(i,e)}),T(t,function(e){e.sequence?B.call(i,e):q.call(i,e)}),i.pristine=!1})}function U(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==U.prototype)return new U(e);if(!U.isSupported())return L.call(this,"Instantiation failed.","This browser is not supported."),E.failure();try{t=l?S({},l,e):S({},w,e)}catch(e){return L.call(this,"Invalid configuration.",e.message),E.failure()}try{if(!f(t.container)[0])throw Error("Invalid container.")}catch(e){return L.call(this,e.message),E.failure()}return!(l=t).mobile&&P()||!l.desktop&&!P()?(L.call(this,"This device is disabled.","desktop: "+l.desktop,"mobile: "+l.mobile),E.failure()):(E.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,n=n||$.bind(this),s=s||O.bind(this),o=o||I.bind(this),r=r||A.bind(this),a=a||D.bind(this),Object.defineProperty(this,"delegate",{get:function(){return n}}),Object.defineProperty(this,"destroy",{get:function(){return s}}),Object.defineProperty(this,"reveal",{get:function(){return o}}),Object.defineProperty(this,"clean",{get:function(){return r}}),Object.defineProperty(this,"sync",{get:function(){return a}}),Object.defineProperty(this,"defaults",{get:function(){return l}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),h||(h=this))}U.isSupported=function(){var e,t;return("transform"in(e=document.documentElement.style)||"WebkitTransform"in e)&&("transition"in(t=document.documentElement.style)||"WebkitTransition"in t)},Object.defineProperty(U,"debug",{get:function(){return c||!1},set:function(e){return c="boolean"==typeof e?e:c}}),U();var J={},K=function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")},Q=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(K(this,e),!(t instanceof Node))throw"Can't initialize VanillaTilt because "+t+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,// for Gyroscope sampling
this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=t,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.resetToStart=e.isSettingTrue(this.settings["reset-to-start"]),this.glare=e.isSettingTrue(this.settings.glare),this.glarePrerender=e.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=e.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=e.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),!1===this.resetToStart&&(this.settings.startX=0,this.settings.startY=0)}return e.isSettingTrue=function(e){return""===e||!0===e||1===e},/**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */e.prototype.getElementListener=function(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){var e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element},/**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */e.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)},/**
   * Method remove event listeners from current this.elementListener
   */e.prototype.removeEventListeners=function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)},e.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.element.style.willChange="",this.element.style.transition="",this.element.style.transform="",this.resetGlare(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},e.prototype.onDeviceOrientation=function(e){if(null!==e.gamma&&null!==e.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var t=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,n=t/this.width,s=i/this.height,o=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),r=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero);null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:o/n+this.left,clientY:r/s+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}},e.prototype.onMouseEnter=function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},e.prototype.onMouseMove=function(e){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)},e.prototype.onMouseLeave=function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)},e.prototype.reset=function(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()},e.prototype.resetGlare=function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")},e.prototype.getValues=function(){var e=void 0,t=void 0;return this.fullPageListening?(e=this.event.clientX/this.clientWidth,t=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1),{tiltX:(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(t*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*e,percentageY:100*t,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}},e.prototype.updateElementPosition=function(){var e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top},e.prototype.update=function(){var e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:e.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+e.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+e.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null},/**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */e.prototype.prepareGlare=function(){// If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
if(!this.glarePrerender){// Create glare element
var e=document.createElement("div");e.classList.add("js-tilt-glare");var t=document.createElement("div");t.classList.add("js-tilt-glare-inner"),e.appendChild(t),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())},e.prototype.updateGlareSize=function(){if(this.glare){var e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:e+"px",height:e+"px"})}},e.prototype.updateClientSize=function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},e.prototype.onWindowResize=function(){this.updateGlareSize(),this.updateClientSize()},e.prototype.setTransition=function(){var e=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout(function(){e.element.style.transition="",e.glare&&(e.glareElement.style.transition="")},this.settings.speed)},/**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param {string|null} settings.axis - What axis should be enabled. Can be "x" or "y"
   * @param {boolean} settings.glare - if it should have a "glare" effect
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {boolean} settings.reset-to-start - true = On reset event (mouse leave) will return to initial start angle (if startX or startY is set)
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
   */e.prototype.extendSettings=function(e){var t={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var n in t)if(n in e)i[n]=e[n];else if(this.element.hasAttribute("data-tilt-"+n)){var s=this.element.getAttribute("data-tilt-"+n);try{i[n]=JSON.parse(s)}catch(e){i[n]=s}}else i[n]=t[n];return i},e.init=function(t,i){t instanceof Node&&(t=[t]),t instanceof NodeList&&(t=[].slice.call(t)),t instanceof Array&&t.forEach(function(t){"vanillaTilt"in t||(t.vanillaTilt=new e(t,i))})},e}();"undefined"!=typeof document&&(/* expose the class to window */window.VanillaTilt=Q,/**
   * Auto load
   */Q.init(document.querySelectorAll("[data-tilt]"))),J=Q;const Z=[{element:".section-title",animation:{delay:300,distance:"0px",origin:"bottom"}},{element:".hero-title",animation:{delay:500,origin:window.innerWidth>768?"left":"bottom"}},{element:".hero-cta",animation:{delay:1e3,origin:window.innerWidth>768?"left":"bottom"}},{element:".about-wrapper__image",animation:{delay:600,origin:"bottom"}},{element:".about-wrapper__info",animation:{delay:1e3,origin:window.innerWidth>768?"left":"bottom"}},{element:".project-wrapper__text",animation:{delay:500,origin:window.innerWidth>768?"left":"bottom"}},{element:".project-wrapper__image",animation:{delay:1e3,origin:window.innerWidth>768?"right":"bottom"}},{element:".contact-wrapper",animation:{delay:800,origin:"bottom"}}];i={easing:"cubic-bezier(0.5, 0, 0, 1)",distance:"30px",duration:1e3,desktop:!0,mobile:!0},Z.length&&(U({reset:!1}),Z.forEach(({element:e,animation:t})=>{U().reveal(e,Object.assign({},i,t))})),function(){var e;let t=document.querySelectorAll(".js-tilt");((e=J)&&e.__esModule?e.default:e).init(t)}();//# sourceMappingURL=index.d726f4f7.js.map

//# sourceMappingURL=index.d726f4f7.js.map
