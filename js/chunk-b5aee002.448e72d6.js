(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b5aee002"],{"0ccb":function(e,t,n){var i=n("50c4"),a=n("1148"),o=n("1d80"),s=Math.ceil,r=function(e){return function(t,n,r){var c,l,h=String(o(t)),u=h.length,d=void 0===r?" ":String(r),m=i(n);return m<=u||""==d?h:(c=m-u,l=a.call(d,s(c/d.length)),l.length>c&&(l=l.slice(0,c)),e?h+l:l+h)}};e.exports={start:r(!1),end:r(!0)}},1148:function(e,t,n){"use strict";var i=n("a691"),a=n("1d80");e.exports=function(e){var t=String(a(this)),n="",o=i(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},"25f0":function(e,t,n){"use strict";var i=n("6eeb"),a=n("825a"),o=n("d039"),s=n("ad6d"),r="toString",c=RegExp.prototype,l=c[r],h=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),u=l.name!=r;(h||u)&&i(RegExp.prototype,r,(function(){var e=a(this),t=String(e.source),n=e.flags,i=String(void 0===n&&e instanceof RegExp&&!("flags"in c)?s.call(e):n);return"/"+t+"/"+i}),{unsafe:!0})},"498a":function(e,t,n){"use strict";var i=n("23e7"),a=n("58a8").trim,o=n("c8d2");i({target:"String",proto:!0,forced:o("trim")},{trim:function(){return a(this)}})},"4d90":function(e,t,n){"use strict";var i=n("23e7"),a=n("0ccb").start,o=n("9a0c");i({target:"String",proto:!0,forced:o},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var i=n("1d80"),a=n("5899"),o="["+a+"]",s=RegExp("^"+o+o+"*"),r=RegExp(o+o+"*$"),c=function(e){return function(t){var n=String(i(t));return 1&e&&(n=n.replace(s,"")),2&e&&(n=n.replace(r,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},8418:function(e,t,n){"use strict";var i=n("c04e"),a=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=i(t);s in e?a.f(e,s,o(0,n)):e[s]=n}},"8a40":function(e,t,n){},9377:function(e,t,n){"use strict";n("9b7a")},"972f":function(e,t,n){},"99af":function(e,t,n){"use strict";var i=n("23e7"),a=n("d039"),o=n("e8b5"),s=n("861d"),r=n("7b0b"),c=n("50c4"),l=n("8418"),h=n("65f0"),u=n("1dde"),d=n("b622"),m=n("2d00"),f=d("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",v=m>=51||!a((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),g=u("concat"),w=function(e){if(!s(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)},C=!v||!g;i({target:"Array",proto:!0,forced:C},{concat:function(e){var t,n,i,a,o,s=r(this),u=h(s,0),d=0;for(t=-1,i=arguments.length;t<i;t++)if(o=-1===t?s:arguments[t],w(o)){if(a=c(o.length),d+a>p)throw TypeError(b);for(n=0;n<a;n++,d++)n in o&&l(u,d,o[n])}else{if(d>=p)throw TypeError(b);l(u,d++,o)}return u.length=d,u}})},"9a0c":function(e,t,n){var i=n("342f");e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(i)},"9b7a":function(e,t,n){},a5d6:function(e,t,n){"use strict";n("ce17")},ab06:function(e,t,n){"use strict";n("8a40")},ad6d:function(e,t,n){"use strict";var i=n("825a");e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},af7b:function(e,t,n){"use strict";n("972f")},bb51:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[e.selectChallenge?e._e():n("TodayChallengeList",{on:{"join-challenge":e.joinChallenge,"preview-challenge":e.previewChallenge}}),e.selectChallenge?n("Timeline",{attrs:{title:e.selectChallenge,totalCount:Math.ceil(100*Math.random())+300,successCount:Math.ceil(100*Math.random())+100,isPreview:e.isPreview}}):e._e()],1)],1)},a=[],o=n("d4ec"),s=n("bee2"),r=n("262e"),c=n("2caf"),l=n("9ab4"),h=n("1b40"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"font-weight-normal mb-4"},[e._v("Today's Challenge List")]),n("b-row",e._l(e.challengeList,(function(t,i){return n("b-col",{key:i,staticClass:"mb-4",attrs:{cols:"6"}},[n("TodayChallengeItem",{attrs:{id:i,title:t,totalCount:Math.ceil(100*Math.random())+300,successCount:Math.ceil(100*Math.random())+100},on:{"join-challenge":e.joinChallenge,"preview-challenge":e.previewChallenge}})],1)})),1)],1)},d=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"today-challenge-item pt-5 text-center"},[n("div",{staticClass:"pb-4"},[n("h3",[e._v(e._s(e.title))]),n("p",[e._v("( "+e._s(e.successCount)+" / "+e._s(e.totalCount)+" )")])]),n("b-button-group",[n("b-button",{attrs:{id:"tooltip-target-"+e.id,variant:"outline-secondary"},on:{click:e.onClickJoinBtn}},[e._v("참여 하기")]),e.isLogin?e._e():n("b-tooltip",{attrs:{target:"tooltip-target-"+e.id,triggers:"hover"}},[e._v(" 로그인 후 이용 가능합니다. ")]),n("b-button",{attrs:{variant:"outline-secondary"},on:{click:e.onClickPreviewBtn}},[e._v("미리 보기")])],1)],1)},f=[],p=n("bf4e"),b=function(e){Object(r["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(s["a"])(n,[{key:"isLogin",get:function(){return p["a"].instance.isLogin}},{key:"onClickJoinBtn",value:function(){p["a"].instance.isLogin&&this.$emit("join-challenge",this.title)}},{key:"onClickPreviewBtn",value:function(){this.$emit("preview-challenge",this.title)}}]),n}(h["c"]);Object(l["a"])([Object(h["b"])()],b.prototype,"id",void 0),Object(l["a"])([Object(h["b"])()],b.prototype,"title",void 0),Object(l["a"])([Object(h["b"])()],b.prototype,"totalCount",void 0),Object(l["a"])([Object(h["b"])()],b.prototype,"successCount",void 0),b=Object(l["a"])([h["a"]],b);var v=b,g=v,w=(n("a5d6"),n("2877")),C=Object(w["a"])(g,m,f,!1,null,"10094474",null),y=C.exports,k=function(e){Object(r["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(s["a"])(n,[{key:"challengeList",get:function(){return["그림 그리기","라디오 듣기","일기 쓰기","요리 하기"]}},{key:"joinChallenge",value:function(e){this.$emit("join-challenge",e)}},{key:"previewChallenge",value:function(e){this.$emit("preview-challenge",e)}}]),n}(h["c"]);k=Object(l["a"])([Object(h["a"])({components:{TodayChallengeItem:y}})],k);var j=k,O=j,_=Object(w["a"])(O,u,d,!1,null,null,null),x=_.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline"},[n("div",{staticClass:"challenge-info d-flex align-items-end py-3 px-4 mb-4"},[n("div",[n("p",{staticClass:"text-left mb-0 font-weight-bold"},[e._v("Today's Challenge!!")]),n("h2",{staticClass:"text-left mb-0"},[e._v(" "+e._s(e.title)+" "),n("span",[n("small",[e._v("( "+e._s(e.successCount)+" / "+e._s(e.totalCount)+" )")])])])]),n("div",{staticClass:"ml-auto"},[n("p",{staticClass:"text-left mb-0 font-weight-bold"},[e._v("Remained Time")]),n("p",{staticClass:"text-left mb-0 font-weight-bold"},[e._v(e._s(e.remainedTime))])])]),e._l(Array(100),(function(t,i){return n("TimelineItem",{key:i,attrs:{id:i,isPreview:e.isPreview}})})),e.isPreview?n("span",{staticClass:"preview-info"},[e._v("현재 미리보기 중입니다")]):e._e()],2)},M=[],T=(n("99af"),n("4d90"),n("d3b7"),n("25f0"),n("c1df")),I=n.n(T),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"timeline-item mb-4"},[n("p",{staticClass:"nickname"},[e._v(e._s(e.nickname))]),n("img",{attrs:{src:e.imageUrl}}),n("div",{staticClass:"icon-list d-flex"},[n("div",{staticClass:"flex-1 d-flex align-items-end justify-content-center border-right"},[e.isGood?n("font-awesome-icon",{class:{"cursor-pointer":!e.isPreview},attrs:{icon:["fas","heart"],size:"lg",color:"red"},on:{click:e.onClickGood}}):e._e(),e.isGood?e._e():n("font-awesome-icon",{class:{"cursor-pointer":!e.isPreview},attrs:{icon:["far","heart"],size:"lg"},on:{click:e.onClickGood}}),n("span",{staticClass:"good-count"},[e._v(e._s(e.isGoodCount))])],1),n("div",{staticClass:"flex-1 d-flex justify-content-center"},[n("font-awesome-icon",{class:{"cursor-pointer":!e.isPreview},attrs:{icon:"share-alt",size:"lg"},on:{click:e.onClickShare}})],1)]),n("hr",{staticClass:"m-0"}),n("p",{staticClass:"timeline-content mb-0"},[e._v(e._s(e.content))]),n("hr",{staticClass:"m-0"}),n("div",{staticClass:"comment-list"},[e._l(e.commentList.slice(0,2),(function(t,i){return n("div",{key:i,staticClass:"comment mb-1"},[n("span",{staticClass:"nickname"},[e._v(e._s(t.nickname))]),n("span",[e._v(e._s(t.comment))])])})),2<e.commentList.length?n("b-button",{directives:[{name:"show",rawName:"v-show",value:!e.isCommentOpen,expression:"!isCommentOpen"}],staticClass:"more-btn",attrs:{size:"sm"},on:{click:e.onClickMoreBtn}},[e._v("more ...")]):e._e(),n("b-collapse",{attrs:{id:""+e.collapseId,visible:e.isCommentOpen}},e._l(e.commentList.slice(2),(function(t,i){return n("div",{key:i,staticClass:"comment mb-1"},[n("span",{staticClass:"nickname"},[e._v(e._s(t.nickname))]),n("span",[e._v(e._s(t.comment))])])})),0),e.isPreview?e._e():n("b-input-group",{attrs:{size:"sm"}},[n("b-form-input",{attrs:{placeholder:"댓글 달기"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onClickNewComment.apply(null,arguments)}},model:{value:e.newComment,callback:function(t){e.newComment=t},expression:"newComment"}}),n("b-input-group-append",[n("b-button",{attrs:{variant:"outline-secondary"},on:{click:e.onClickNewComment}},[e._v("게시")])],1)],1)],2)])},L=[],E=(n("498a"),function(e){Object(r["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.imageUrl="https://picsum.photos/500?random=".concat(Math.ceil(100*Math.random())),e.nickname="",e.content="",e.isGood=!1,e.isGoodCount=Math.ceil(100*Math.random()),e.commentList=[],e.isCommentOpen=!1,e.newComment="",e.collapseId="collapse-".concat(e.id),e}return Object(s["a"])(n,[{key:"onClickGood",value:function(){console.log("onClickGood"),this.isPreview||(this.isGood=!this.isGood,this.isGood?this.isGoodCount+=1:this.isGoodCount-=1)}},{key:"onClickShare",value:function(){console.log("onClickShare")}},{key:"onClickMoreBtn",value:function(){console.log("onClickMoreBtn"),this.isCommentOpen=!0}},{key:"onClickNewComment",value:function(){var e=this.newComment.trim();e&&(this.commentList.push({nickname:"me",comment:e}),this.isCommentOpen||(this.isCommentOpen=!0)),this.newComment=""}},{key:"mounted",value:function(){var e=["scanties","conclusory","diestrus","ataxic","saccharometers","oddish","fastener","fisherfolk","pooftahs","ruthful"];this.nickname=e[Math.floor(Math.random()*e.length)];var t=["She nervously peered over the edge. She understood in her mind that the view was supposed to be beautiful, but all she felt was fear. There had always been something about heights that disturbed her, and now she could feel the full force of this unease. She reluctantly crept a little closer with the encouragement of her friends as the fear continued to build. She couldn't help but feel that something horrible was about to happen.","There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.","I'm going to hire professional help tomorrow. I can't handle this anymore. She fell over the coffee table and now there is blood in her catheter. This is much more than I ever signed up to do.","Since they are still preserved in the rocks for us to see, they must have been formed quite recently, that is, geologically speaking. What can explain these striations and their common orientation? ","He picked up the burnt end of the branch and made a mark on the stone. Day 52 if the marks on the stone were accurate. He couldn't be sure. Day and nights had begun to blend together creating confusion, but he knew it was a long time. Much too long.","What was beyond the bend in the stream was unknown. Both were curious, but only one was brave enough to want to explore. That was the problem. There was always one that let fear rule her life.","It was difficult to explain to them how the diagnosis of certain death had actually given him life. While everyone around him was in tears and upset, he actually felt more at ease.","She wondered if the note had reached him. She scolded herself for not handing it to him in person. She trusted her friend, but so much could happen. She waited impatiently for word.","She had been told time and time again that the most important steps were the first and the last.","He heard the crack echo in the late afternoon about a mile away. ","He watched as the young man tried to impress everyone in the room with his intelligence. ","A car was coming down the street and with her arm outstretched and thumb in the air, she had a plan.","he continued, laying the trap he'd been planning for years.","Sleeping in his car was never the plan but sometimes things don't work out as planned."];this.content=t[Math.floor(Math.random()*t.length)];for(var n=["It was getting dark, and we weren’t there yet.","A purple pig and a green donkey flew a kite in the middle of the night and ended up sunburnt.","She only paints with bold colors; she does not like pastels.","He shaved the peach to prove a point.","Americans use forks instead of chopsticks.","The blue parrot drove by the hitchhiking mongoose.","The bullet pierced the window shattering it before missing Danny's head by mere millimeters.","We're careful about orange ping pong balls because people might think they're fruit.","I don't like driving in the city.","The hummingbird's wings blurred while it eagerly sipped the sugar water from the feeder."],i=0;i<Math.floor(10*Math.random());++i)this.commentList.push({nickname:e[Math.floor(Math.random()*e.length)],comment:n[Math.floor(Math.random()*n.length)]})}}]),n}(h["c"]));Object(l["a"])([Object(h["b"])()],E.prototype,"id",void 0),Object(l["a"])([Object(h["b"])()],E.prototype,"isPreview",void 0),E=Object(l["a"])([h["a"]],E);var G=E,$=G,B=(n("af7b"),Object(w["a"])($,P,L,!1,null,"4a1051b6",null)),R=B.exports,A=function(e){Object(r["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.currentTime=new Date,e}return Object(s["a"])(n,[{key:"mounted",value:function(){var e=this;this.intervalId=setInterval((function(){e.currentTime=new Date}),100),console.log(I()().endOf("days").diff(I()())/1e3/60/60)}},{key:"destroyed",value:function(){clearInterval(this.intervalId)}},{key:"remainedTime",get:function(){var e=I.a.duration(I()().endOf("days").diff(this.currentTime));return"".concat(e.hours().toString().padStart(2,"0")," : ").concat(e.minutes().toString().padStart(2,"0")," : ").concat(e.seconds().toString().padStart(2,"0"))}}]),n}(h["c"]);Object(l["a"])([Object(h["b"])()],A.prototype,"title",void 0),Object(l["a"])([Object(h["b"])()],A.prototype,"totalCount",void 0),Object(l["a"])([Object(h["b"])()],A.prototype,"successCount",void 0),Object(l["a"])([Object(h["b"])()],A.prototype,"isPreview",void 0),A=Object(l["a"])([Object(h["a"])({components:{TimelineItem:R}})],A);var z=A,D=z,H=(n("ab06"),Object(w["a"])(D,S,M,!1,null,"b7862ae0",null)),W=H.exports,J=n("3f65"),N=function(e){Object(r["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return Object(s["a"])(n,[{key:"selectChallenge",get:function(){return J["a"].instance.selectedChallenge}},{key:"isPreview",get:function(){return J["a"].instance.isPreview}},{key:"joinChallenge",value:function(e){console.log("joinChallenge",e),J["a"].instance.setSelectedChallenge(e),J["a"].instance.setIsPreview(!1)}},{key:"previewChallenge",value:function(e){console.log("previewChallenge",e),J["a"].instance.setSelectedChallenge(e),J["a"].instance.setIsPreview(!0)}}]),n}(h["c"]);N=Object(l["a"])([Object(h["a"])({components:{TodayChallengeList:x,Timeline:W}})],N);var U=N,q=U,V=(n("9377"),Object(w["a"])(q,i,a,!1,null,"0b49cc46",null));t["default"]=V.exports},c8d2:function(e,t,n){var i=n("d039"),a=n("5899"),o="​᠎";e.exports=function(e){return i((function(){return!!a[e]()||o[e]()!=o||a[e].name!==e}))}},ce17:function(e,t,n){}}]);
//# sourceMappingURL=chunk-b5aee002.448e72d6.js.map