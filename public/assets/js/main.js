/*! HarvardJOLT 2016-03-23 */
start=function(){var a=document.body,b=document.getElementById("js--nav-button"),c=document.getElementById("js--nav-close"),d=document.getElementById("js--global-nav");b.addEventListener("click",function(){d.classList.add("nav--open")}),c.addEventListener("click",function(){d.classList.remove("nav--open")});var e=document.querySelector(".abstract-modal"),f=document.getElementById("js--abstract-button"),g=document.getElementById("js--abstract-close");f.addEventListener("click",function(){e.classList.add("abstract-modal--open"),a.classList.add("body--no-scroll")}),g.addEventListener("click",function(){e.classList.remove("abstract-modal--open"),a.classList.remove("body--no-scroll")})},!function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c,d){"use strict";if(!b.history.pushState)return a.fn.smoothState=function(){return this},void(a.fn.smoothState.options={});if(!a.fn.smoothState){var e=a("html, body"),f=b.console,g={debug:!1,anchors:"a",hrefRegex:"",forms:"form",allowFormCaching:!1,repeatDelay:500,blacklist:".no-smoothState",prefetch:!1,prefetchOn:"mouseover touchstart",prefetchBlacklist:".no-prefetch",cacheLength:0,loadingClass:"is-loading",scroll:!0,alterRequest:function(a){return a},alterChangeState:function(a,b,c){return a},onBefore:function(a,b){},onStart:{duration:0,render:function(a){}},onProgress:{duration:0,render:function(a){}},onReady:{duration:0,render:function(a,b){a.html(b)}},onAfter:function(a,b){}},h={isExternal:function(a){var c=a.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof c[1]&&c[1].length>0&&c[1].toLowerCase()!==b.location.protocol?!0:"string"==typeof c[2]&&c[2].length>0&&c[2].replace(new RegExp(":("+{"http:":80,"https:":443}[b.location.protocol]+")?$"),"")!==b.location.host?!0:!1},stripHash:function(a){return a.replace(/#.*/,"")},isHash:function(a,c){c=c||b.location.href;var d=a.indexOf("#")>-1?!0:!1,e=h.stripHash(a)===h.stripHash(c)?!0:!1;return d&&e},translate:function(b){var c={dataType:"html",type:"GET"};return b="string"==typeof b?a.extend({},c,{url:b}):a.extend({},c,b)},shouldLoadAnchor:function(a,b,c){var e=a.prop("href");return!(h.isExternal(e)||h.isHash(e)||a.is(b)||a.prop("target")||typeof c!==d&&""!==c&&-1===a.prop("href").search(c))},clearIfOverCapacity:function(a,b){return Object.keys||(Object.keys=function(a){var b,c=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&c.push(b);return c}),Object.keys(a).length>b&&(a={}),a},storePageIn:function(b,c,d,e,f){var g=a("<html></html>").append(a(d));return b[c]={status:"loaded",title:g.find("title").first().text(),html:g.find("#"+e),doc:d,state:f},b},triggerAllAnimationEndEvent:function(b,c){c=" "+c||"";var d=0,e="animationstart webkitAnimationStart oanimationstart MSAnimationStart",f="animationend webkitAnimationEnd oanimationend MSAnimationEnd",g="allanimationend",i=function(c){a(c.delegateTarget).is(b)&&(c.stopPropagation(),d++)},j=function(c){a(c.delegateTarget).is(b)&&(c.stopPropagation(),d--,0===d&&b.trigger(g))};b.on(e,i),b.on(f,j),b.on("allanimationend"+c,function(){d=0,h.redraw(b)})},redraw:function(a){a.height()}},i=function(c){if(null!==c.state){var d=b.location.href,e=a("#"+c.state.id),f=e.data("smoothState"),g=f.href!==d&&!h.isHash(d,f.href),i=event.state!==f.cache[f.href].state;(g||i)&&(i&&f.clear(f.href),f.load(d,!1))}},j=function(g,i){var j=a(g),k=j.prop("id"),l=null,m=!1,n={},o={},p=b.location.href,q=function(a){a=a||!1,a&&n.hasOwnProperty(a)?delete n[a]:n={},j.data("smoothState").cache=n},r=function(b,c){c=c||a.noop;var d=h.translate(b);if(n=h.clearIfOverCapacity(n,i.cacheLength),!n.hasOwnProperty(d.url)||"undefined"!=typeof d.data){n[d.url]={status:"fetching"};var e=a.ajax(d);e.done(function(a){h.storePageIn(n,d.url,a,k),j.data("smoothState").cache=n}),e.fail(function(){n[d.url].status="error"}),c&&e.always(c)}},s=function(){if(l){var b=a(l,j);if(b.length){var c=b.offset().top;e.scrollTop(c)}l=null}},t=function(d){var g="#"+k,h=n[d]?a(n[d].html.html()):null;h.length?(c.title=n[d].title,j.data("smoothState").href=d,i.loadingClass&&e.removeClass(i.loadingClass),i.onReady.render(j,h),j.one("ss.onReadyEnd",function(){m=!1,i.onAfter(j,h),i.scroll&&s()}),b.setTimeout(function(){j.trigger("ss.onReadyEnd")},i.onReady.duration)):!h&&i.debug&&f?f.warn("No element with an id of "+g+" in response from "+d+" in "+n):b.location=d},u=function(a,c,d){var g=h.translate(a);"undefined"==typeof c&&(c=!0),"undefined"==typeof d&&(d=!0);var l=!1,m=!1,p={loaded:function(){var a=l?"ss.onProgressEnd":"ss.onStartEnd";m&&l?m&&t(g.url):j.one(a,function(){t(g.url),d||q(g.url)}),c&&(o=i.alterChangeState({id:k},n[g.url].title,g.url),n[g.url].state=o,b.history.pushState(o,n[g.url].title,g.url)),m&&!d&&q(g.url)},fetching:function(){l||(l=!0,j.one("ss.onStartEnd",function(){i.loadingClass&&e.addClass(i.loadingClass),i.onProgress.render(j),b.setTimeout(function(){j.trigger("ss.onProgressEnd"),m=!0},i.onProgress.duration)})),b.setTimeout(function(){n.hasOwnProperty(g.url)&&p[n[g.url].status]()},10)},error:function(){i.debug&&f?f.log("There was an error loading: "+g.url):b.location=g.url}};n.hasOwnProperty(g.url)||r(g),i.onStart.render(j),b.setTimeout(function(){i.scroll&&e.scrollTop(0),j.trigger("ss.onStartEnd")},i.onStart.duration),p[n[g.url].status]()},v=function(b){var c,d=a(b.currentTarget);h.shouldLoadAnchor(d,i.blacklist,i.hrefRegex)&&!m&&(b.stopPropagation(),c=h.translate(d.prop("href")),c=i.alterRequest(c),r(c))},w=function(b){var c=a(b.currentTarget);if(!b.metaKey&&!b.ctrlKey&&h.shouldLoadAnchor(c,i.blacklist,i.hrefRegex)&&(b.stopPropagation(),b.preventDefault(),!z())){A();var d=h.translate(c.prop("href"));m=!0,l=c.prop("hash"),d=i.alterRequest(d),i.onBefore(c,j),u(d)}},x=function(b){var c=a(b.currentTarget);if(!c.is(i.blacklist)&&(b.preventDefault(),b.stopPropagation(),!z())){A();var e={url:c.prop("action"),data:c.serialize(),type:c.prop("method")};m=!0,e=i.alterRequest(e),"get"===e.type.toLowerCase()&&(e.url=e.url+"?"+e.data),i.onBefore(c,j),u(e,d,i.allowFormCaching)}},y=0,z=function(){var a=null===i.repeatDelay,b=parseInt(Date.now())>y;return!(a||b)},A=function(){y=parseInt(Date.now())+parseInt(i.repeatDelay)},B=function(a){i.anchors&&(a.on("click",i.anchors,w),i.prefetch&&a.find(i.anchors).not(i.prefetchBlacklist).on(i.prefetchOn,null,v)),i.forms&&a.on("submit",i.forms,x)},C=function(){var a=j.prop("class");j.removeClass(a),h.redraw(j),j.addClass(a)};return i=a.extend({},a.fn.smoothState.options,i),null===b.history.state?(o=i.alterChangeState({id:k},c.title,p),b.history.replaceState(o,c.title,p)):o={},h.storePageIn(n,p,c.documentElement.outerHTML,k,o),h.triggerAllAnimationEndEvent(j,"ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),B(j),{href:p,cache:n,clear:q,load:u,fetch:r,restartCSSAnimations:C}},k=function(b){return this.each(function(){var c=this.tagName.toLowerCase();this.id&&"body"!==c&&"html"!==c&&!a.data(this,"smoothState")?a.data(this,"smoothState",new j(this,b)):!this.id&&f?f.warn("Every smoothState container needs an id but the following one does not have one:",this):"body"!==c&&"html"!==c||!f||f.warn("The smoothstate container cannot be the "+this.tagName+" tag")})};b.onpopstate=i,a.smoothStateUtility=h,a.fn.smoothState=k,a.fn.smoothState.options=g}}),$(document).ready(function(){start()}),$(function(){"use strict";var a=$("html, body"),b={prefetch:!0,cacheLength:2,onStart:{duration:500,render:function(b){b.addClass("is-exiting"),a.animate({scrollTop:0}),c.restartCSSAnimations()}},onReady:{duration:0,render:function(a,b){a.removeClass("is-exiting"),a.html(b)}},onAfter:function(a){start(),ga("set",{page:document.location.pathname,title:document.title}),ga("send","pageview")}},c=$("#main").smoothState(b).data("smoothState")});