goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_60585 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_60585(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_60591 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_60591(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__59515 = coll;
var G__59516 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__59515,G__59516) : shadow.dom.lazy_native_coll_seq.call(null,G__59515,G__59516));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__59555 = arguments.length;
switch (G__59555) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__59558 = arguments.length;
switch (G__59558) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__59566 = arguments.length;
switch (G__59566) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__59578 = arguments.length;
switch (G__59578) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__59593 = arguments.length;
switch (G__59593) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__59605 = arguments.length;
switch (G__59605) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e59612){if((e59612 instanceof Object)){
var e = e59612;
return console.log("didnt support attachEvent",el,e);
} else {
throw e59612;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__59620 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__59621 = null;
var count__59622 = (0);
var i__59623 = (0);
while(true){
if((i__59623 < count__59622)){
var el = chunk__59621.cljs$core$IIndexed$_nth$arity$2(null,i__59623);
var handler_60628__$1 = ((function (seq__59620,chunk__59621,count__59622,i__59623,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59620,chunk__59621,count__59622,i__59623,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60628__$1);


var G__60629 = seq__59620;
var G__60630 = chunk__59621;
var G__60631 = count__59622;
var G__60632 = (i__59623 + (1));
seq__59620 = G__60629;
chunk__59621 = G__60630;
count__59622 = G__60631;
i__59623 = G__60632;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59620);
if(temp__5753__auto__){
var seq__59620__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59620__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__59620__$1);
var G__60633 = cljs.core.chunk_rest(seq__59620__$1);
var G__60634 = c__4638__auto__;
var G__60635 = cljs.core.count(c__4638__auto__);
var G__60636 = (0);
seq__59620 = G__60633;
chunk__59621 = G__60634;
count__59622 = G__60635;
i__59623 = G__60636;
continue;
} else {
var el = cljs.core.first(seq__59620__$1);
var handler_60637__$1 = ((function (seq__59620,chunk__59621,count__59622,i__59623,el,seq__59620__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59620,chunk__59621,count__59622,i__59623,el,seq__59620__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60637__$1);


var G__60639 = cljs.core.next(seq__59620__$1);
var G__60640 = null;
var G__60641 = (0);
var G__60642 = (0);
seq__59620 = G__60639;
chunk__59621 = G__60640;
count__59622 = G__60641;
i__59623 = G__60642;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__59644 = arguments.length;
switch (G__59644) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__59654 = cljs.core.seq(events);
var chunk__59655 = null;
var count__59656 = (0);
var i__59657 = (0);
while(true){
if((i__59657 < count__59656)){
var vec__59666 = chunk__59655.cljs$core$IIndexed$_nth$arity$2(null,i__59657);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59666,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59666,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60652 = seq__59654;
var G__60653 = chunk__59655;
var G__60654 = count__59656;
var G__60655 = (i__59657 + (1));
seq__59654 = G__60652;
chunk__59655 = G__60653;
count__59656 = G__60654;
i__59657 = G__60655;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59654);
if(temp__5753__auto__){
var seq__59654__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59654__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__59654__$1);
var G__60659 = cljs.core.chunk_rest(seq__59654__$1);
var G__60660 = c__4638__auto__;
var G__60661 = cljs.core.count(c__4638__auto__);
var G__60662 = (0);
seq__59654 = G__60659;
chunk__59655 = G__60660;
count__59656 = G__60661;
i__59657 = G__60662;
continue;
} else {
var vec__59669 = cljs.core.first(seq__59654__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59669,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59669,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60663 = cljs.core.next(seq__59654__$1);
var G__60664 = null;
var G__60665 = (0);
var G__60666 = (0);
seq__59654 = G__60663;
chunk__59655 = G__60664;
count__59656 = G__60665;
i__59657 = G__60666;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__59675 = cljs.core.seq(styles);
var chunk__59676 = null;
var count__59677 = (0);
var i__59678 = (0);
while(true){
if((i__59678 < count__59677)){
var vec__59697 = chunk__59676.cljs$core$IIndexed$_nth$arity$2(null,i__59678);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59697,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59697,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60667 = seq__59675;
var G__60668 = chunk__59676;
var G__60669 = count__59677;
var G__60670 = (i__59678 + (1));
seq__59675 = G__60667;
chunk__59676 = G__60668;
count__59677 = G__60669;
i__59678 = G__60670;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59675);
if(temp__5753__auto__){
var seq__59675__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59675__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__59675__$1);
var G__60671 = cljs.core.chunk_rest(seq__59675__$1);
var G__60672 = c__4638__auto__;
var G__60673 = cljs.core.count(c__4638__auto__);
var G__60674 = (0);
seq__59675 = G__60671;
chunk__59676 = G__60672;
count__59677 = G__60673;
i__59678 = G__60674;
continue;
} else {
var vec__59703 = cljs.core.first(seq__59675__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59703,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60675 = cljs.core.next(seq__59675__$1);
var G__60676 = null;
var G__60677 = (0);
var G__60678 = (0);
seq__59675 = G__60675;
chunk__59676 = G__60676;
count__59677 = G__60677;
i__59678 = G__60678;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__59717_60681 = key;
var G__59717_60682__$1 = (((G__59717_60681 instanceof cljs.core.Keyword))?G__59717_60681.fqn:null);
switch (G__59717_60682__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_60684 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_60684,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_60684,"aria-");
}
})())){
el.setAttribute(ks_60684,value);
} else {
(el[ks_60684] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59745){
var map__59746 = p__59745;
var map__59746__$1 = cljs.core.__destructure_map(map__59746);
var props = map__59746__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59746__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59748 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59748,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59748,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59748,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__59752 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__59752,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__59752;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__59757 = arguments.length;
switch (G__59757) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__59767){
var vec__59768 = p__59767;
var seq__59769 = cljs.core.seq(vec__59768);
var first__59770 = cljs.core.first(seq__59769);
var seq__59769__$1 = cljs.core.next(seq__59769);
var nn = first__59770;
var first__59770__$1 = cljs.core.first(seq__59769__$1);
var seq__59769__$2 = cljs.core.next(seq__59769__$1);
var np = first__59770__$1;
var nc = seq__59769__$2;
var node = vec__59768;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59774 = nn;
var G__59775 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59774,G__59775) : create_fn.call(null,G__59774,G__59775));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59776 = nn;
var G__59777 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59776,G__59777) : create_fn.call(null,G__59776,G__59777));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__59787 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59787,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59787,(1),null);
var seq__59790_60691 = cljs.core.seq(node_children);
var chunk__59794_60692 = null;
var count__59795_60693 = (0);
var i__59796_60694 = (0);
while(true){
if((i__59796_60694 < count__59795_60693)){
var child_struct_60695 = chunk__59794_60692.cljs$core$IIndexed$_nth$arity$2(null,i__59796_60694);
var children_60696 = shadow.dom.dom_node(child_struct_60695);
if(cljs.core.seq_QMARK_(children_60696)){
var seq__59849_60697 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60696));
var chunk__59851_60698 = null;
var count__59852_60699 = (0);
var i__59853_60700 = (0);
while(true){
if((i__59853_60700 < count__59852_60699)){
var child_60701 = chunk__59851_60698.cljs$core$IIndexed$_nth$arity$2(null,i__59853_60700);
if(cljs.core.truth_(child_60701)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60701);


var G__60702 = seq__59849_60697;
var G__60703 = chunk__59851_60698;
var G__60704 = count__59852_60699;
var G__60705 = (i__59853_60700 + (1));
seq__59849_60697 = G__60702;
chunk__59851_60698 = G__60703;
count__59852_60699 = G__60704;
i__59853_60700 = G__60705;
continue;
} else {
var G__60706 = seq__59849_60697;
var G__60707 = chunk__59851_60698;
var G__60708 = count__59852_60699;
var G__60709 = (i__59853_60700 + (1));
seq__59849_60697 = G__60706;
chunk__59851_60698 = G__60707;
count__59852_60699 = G__60708;
i__59853_60700 = G__60709;
continue;
}
} else {
var temp__5753__auto___60710 = cljs.core.seq(seq__59849_60697);
if(temp__5753__auto___60710){
var seq__59849_60711__$1 = temp__5753__auto___60710;
if(cljs.core.chunked_seq_QMARK_(seq__59849_60711__$1)){
var c__4638__auto___60712 = cljs.core.chunk_first(seq__59849_60711__$1);
var G__60713 = cljs.core.chunk_rest(seq__59849_60711__$1);
var G__60714 = c__4638__auto___60712;
var G__60715 = cljs.core.count(c__4638__auto___60712);
var G__60716 = (0);
seq__59849_60697 = G__60713;
chunk__59851_60698 = G__60714;
count__59852_60699 = G__60715;
i__59853_60700 = G__60716;
continue;
} else {
var child_60717 = cljs.core.first(seq__59849_60711__$1);
if(cljs.core.truth_(child_60717)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60717);


var G__60718 = cljs.core.next(seq__59849_60711__$1);
var G__60719 = null;
var G__60720 = (0);
var G__60721 = (0);
seq__59849_60697 = G__60718;
chunk__59851_60698 = G__60719;
count__59852_60699 = G__60720;
i__59853_60700 = G__60721;
continue;
} else {
var G__60722 = cljs.core.next(seq__59849_60711__$1);
var G__60723 = null;
var G__60724 = (0);
var G__60725 = (0);
seq__59849_60697 = G__60722;
chunk__59851_60698 = G__60723;
count__59852_60699 = G__60724;
i__59853_60700 = G__60725;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60696);
}


var G__60726 = seq__59790_60691;
var G__60727 = chunk__59794_60692;
var G__60728 = count__59795_60693;
var G__60729 = (i__59796_60694 + (1));
seq__59790_60691 = G__60726;
chunk__59794_60692 = G__60727;
count__59795_60693 = G__60728;
i__59796_60694 = G__60729;
continue;
} else {
var temp__5753__auto___60731 = cljs.core.seq(seq__59790_60691);
if(temp__5753__auto___60731){
var seq__59790_60732__$1 = temp__5753__auto___60731;
if(cljs.core.chunked_seq_QMARK_(seq__59790_60732__$1)){
var c__4638__auto___60733 = cljs.core.chunk_first(seq__59790_60732__$1);
var G__60734 = cljs.core.chunk_rest(seq__59790_60732__$1);
var G__60735 = c__4638__auto___60733;
var G__60736 = cljs.core.count(c__4638__auto___60733);
var G__60737 = (0);
seq__59790_60691 = G__60734;
chunk__59794_60692 = G__60735;
count__59795_60693 = G__60736;
i__59796_60694 = G__60737;
continue;
} else {
var child_struct_60738 = cljs.core.first(seq__59790_60732__$1);
var children_60739 = shadow.dom.dom_node(child_struct_60738);
if(cljs.core.seq_QMARK_(children_60739)){
var seq__59868_60740 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60739));
var chunk__59870_60741 = null;
var count__59871_60742 = (0);
var i__59872_60743 = (0);
while(true){
if((i__59872_60743 < count__59871_60742)){
var child_60744 = chunk__59870_60741.cljs$core$IIndexed$_nth$arity$2(null,i__59872_60743);
if(cljs.core.truth_(child_60744)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60744);


var G__60745 = seq__59868_60740;
var G__60746 = chunk__59870_60741;
var G__60747 = count__59871_60742;
var G__60748 = (i__59872_60743 + (1));
seq__59868_60740 = G__60745;
chunk__59870_60741 = G__60746;
count__59871_60742 = G__60747;
i__59872_60743 = G__60748;
continue;
} else {
var G__60749 = seq__59868_60740;
var G__60750 = chunk__59870_60741;
var G__60751 = count__59871_60742;
var G__60752 = (i__59872_60743 + (1));
seq__59868_60740 = G__60749;
chunk__59870_60741 = G__60750;
count__59871_60742 = G__60751;
i__59872_60743 = G__60752;
continue;
}
} else {
var temp__5753__auto___60753__$1 = cljs.core.seq(seq__59868_60740);
if(temp__5753__auto___60753__$1){
var seq__59868_60754__$1 = temp__5753__auto___60753__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59868_60754__$1)){
var c__4638__auto___60755 = cljs.core.chunk_first(seq__59868_60754__$1);
var G__60756 = cljs.core.chunk_rest(seq__59868_60754__$1);
var G__60757 = c__4638__auto___60755;
var G__60758 = cljs.core.count(c__4638__auto___60755);
var G__60759 = (0);
seq__59868_60740 = G__60756;
chunk__59870_60741 = G__60757;
count__59871_60742 = G__60758;
i__59872_60743 = G__60759;
continue;
} else {
var child_60761 = cljs.core.first(seq__59868_60754__$1);
if(cljs.core.truth_(child_60761)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60761);


var G__60762 = cljs.core.next(seq__59868_60754__$1);
var G__60763 = null;
var G__60764 = (0);
var G__60765 = (0);
seq__59868_60740 = G__60762;
chunk__59870_60741 = G__60763;
count__59871_60742 = G__60764;
i__59872_60743 = G__60765;
continue;
} else {
var G__60766 = cljs.core.next(seq__59868_60754__$1);
var G__60767 = null;
var G__60768 = (0);
var G__60769 = (0);
seq__59868_60740 = G__60766;
chunk__59870_60741 = G__60767;
count__59871_60742 = G__60768;
i__59872_60743 = G__60769;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60739);
}


var G__60770 = cljs.core.next(seq__59790_60732__$1);
var G__60771 = null;
var G__60772 = (0);
var G__60773 = (0);
seq__59790_60691 = G__60770;
chunk__59794_60692 = G__60771;
count__59795_60693 = G__60772;
i__59796_60694 = G__60773;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__59894 = cljs.core.seq(node);
var chunk__59895 = null;
var count__59896 = (0);
var i__59897 = (0);
while(true){
if((i__59897 < count__59896)){
var n = chunk__59895.cljs$core$IIndexed$_nth$arity$2(null,i__59897);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60775 = seq__59894;
var G__60776 = chunk__59895;
var G__60777 = count__59896;
var G__60778 = (i__59897 + (1));
seq__59894 = G__60775;
chunk__59895 = G__60776;
count__59896 = G__60777;
i__59897 = G__60778;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__59894);
if(temp__5753__auto__){
var seq__59894__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59894__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__59894__$1);
var G__60779 = cljs.core.chunk_rest(seq__59894__$1);
var G__60780 = c__4638__auto__;
var G__60781 = cljs.core.count(c__4638__auto__);
var G__60782 = (0);
seq__59894 = G__60779;
chunk__59895 = G__60780;
count__59896 = G__60781;
i__59897 = G__60782;
continue;
} else {
var n = cljs.core.first(seq__59894__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60783 = cljs.core.next(seq__59894__$1);
var G__60784 = null;
var G__60785 = (0);
var G__60786 = (0);
seq__59894 = G__60783;
chunk__59895 = G__60784;
count__59896 = G__60785;
i__59897 = G__60786;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__59912 = arguments.length;
switch (G__59912) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__59927 = arguments.length;
switch (G__59927) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__59960 = arguments.length;
switch (G__59960) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___60794 = arguments.length;
var i__4819__auto___60795 = (0);
while(true){
if((i__4819__auto___60795 < len__4818__auto___60794)){
args__4824__auto__.push((arguments[i__4819__auto___60795]));

var G__60799 = (i__4819__auto___60795 + (1));
i__4819__auto___60795 = G__60799;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__59995_60801 = cljs.core.seq(nodes);
var chunk__59996_60802 = null;
var count__59997_60803 = (0);
var i__59998_60804 = (0);
while(true){
if((i__59998_60804 < count__59997_60803)){
var node_60806 = chunk__59996_60802.cljs$core$IIndexed$_nth$arity$2(null,i__59998_60804);
fragment.appendChild(shadow.dom._to_dom(node_60806));


var G__60807 = seq__59995_60801;
var G__60808 = chunk__59996_60802;
var G__60809 = count__59997_60803;
var G__60810 = (i__59998_60804 + (1));
seq__59995_60801 = G__60807;
chunk__59996_60802 = G__60808;
count__59997_60803 = G__60809;
i__59998_60804 = G__60810;
continue;
} else {
var temp__5753__auto___60811 = cljs.core.seq(seq__59995_60801);
if(temp__5753__auto___60811){
var seq__59995_60812__$1 = temp__5753__auto___60811;
if(cljs.core.chunked_seq_QMARK_(seq__59995_60812__$1)){
var c__4638__auto___60813 = cljs.core.chunk_first(seq__59995_60812__$1);
var G__60814 = cljs.core.chunk_rest(seq__59995_60812__$1);
var G__60815 = c__4638__auto___60813;
var G__60816 = cljs.core.count(c__4638__auto___60813);
var G__60817 = (0);
seq__59995_60801 = G__60814;
chunk__59996_60802 = G__60815;
count__59997_60803 = G__60816;
i__59998_60804 = G__60817;
continue;
} else {
var node_60818 = cljs.core.first(seq__59995_60812__$1);
fragment.appendChild(shadow.dom._to_dom(node_60818));


var G__60819 = cljs.core.next(seq__59995_60812__$1);
var G__60820 = null;
var G__60821 = (0);
var G__60822 = (0);
seq__59995_60801 = G__60819;
chunk__59996_60802 = G__60820;
count__59997_60803 = G__60821;
i__59998_60804 = G__60822;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq59985){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59985));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__60008_60824 = cljs.core.seq(scripts);
var chunk__60009_60825 = null;
var count__60010_60826 = (0);
var i__60011_60827 = (0);
while(true){
if((i__60011_60827 < count__60010_60826)){
var vec__60020_60832 = chunk__60009_60825.cljs$core$IIndexed$_nth$arity$2(null,i__60011_60827);
var script_tag_60833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60020_60832,(0),null);
var script_body_60834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60020_60832,(1),null);
eval(script_body_60834);


var G__60835 = seq__60008_60824;
var G__60836 = chunk__60009_60825;
var G__60837 = count__60010_60826;
var G__60838 = (i__60011_60827 + (1));
seq__60008_60824 = G__60835;
chunk__60009_60825 = G__60836;
count__60010_60826 = G__60837;
i__60011_60827 = G__60838;
continue;
} else {
var temp__5753__auto___60839 = cljs.core.seq(seq__60008_60824);
if(temp__5753__auto___60839){
var seq__60008_60840__$1 = temp__5753__auto___60839;
if(cljs.core.chunked_seq_QMARK_(seq__60008_60840__$1)){
var c__4638__auto___60841 = cljs.core.chunk_first(seq__60008_60840__$1);
var G__60842 = cljs.core.chunk_rest(seq__60008_60840__$1);
var G__60843 = c__4638__auto___60841;
var G__60844 = cljs.core.count(c__4638__auto___60841);
var G__60845 = (0);
seq__60008_60824 = G__60842;
chunk__60009_60825 = G__60843;
count__60010_60826 = G__60844;
i__60011_60827 = G__60845;
continue;
} else {
var vec__60026_60846 = cljs.core.first(seq__60008_60840__$1);
var script_tag_60847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60026_60846,(0),null);
var script_body_60848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60026_60846,(1),null);
eval(script_body_60848);


var G__60852 = cljs.core.next(seq__60008_60840__$1);
var G__60853 = null;
var G__60854 = (0);
var G__60855 = (0);
seq__60008_60824 = G__60852;
chunk__60009_60825 = G__60853;
count__60010_60826 = G__60854;
i__60011_60827 = G__60855;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__60029){
var vec__60031 = p__60029;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60031,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60031,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__60045 = arguments.length;
switch (G__60045) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__60072 = cljs.core.seq(style_keys);
var chunk__60073 = null;
var count__60074 = (0);
var i__60075 = (0);
while(true){
if((i__60075 < count__60074)){
var it = chunk__60073.cljs$core$IIndexed$_nth$arity$2(null,i__60075);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60863 = seq__60072;
var G__60864 = chunk__60073;
var G__60865 = count__60074;
var G__60866 = (i__60075 + (1));
seq__60072 = G__60863;
chunk__60073 = G__60864;
count__60074 = G__60865;
i__60075 = G__60866;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60072);
if(temp__5753__auto__){
var seq__60072__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60072__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__60072__$1);
var G__60867 = cljs.core.chunk_rest(seq__60072__$1);
var G__60868 = c__4638__auto__;
var G__60869 = cljs.core.count(c__4638__auto__);
var G__60870 = (0);
seq__60072 = G__60867;
chunk__60073 = G__60868;
count__60074 = G__60869;
i__60075 = G__60870;
continue;
} else {
var it = cljs.core.first(seq__60072__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60871 = cljs.core.next(seq__60072__$1);
var G__60872 = null;
var G__60873 = (0);
var G__60874 = (0);
seq__60072 = G__60871;
chunk__60073 = G__60872;
count__60074 = G__60873;
i__60075 = G__60874;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k60100,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__60111 = k60100;
var G__60111__$1 = (((G__60111 instanceof cljs.core.Keyword))?G__60111.fqn:null);
switch (G__60111__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60100,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__60124){
var vec__60125 = p__60124;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60125,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60125,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60099){
var self__ = this;
var G__60099__$1 = this;
return (new cljs.core.RecordIter((0),G__60099__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60101,other60102){
var self__ = this;
var this60101__$1 = this;
return (((!((other60102 == null)))) && ((((this60101__$1.constructor === other60102.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60101__$1.x,other60102.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60101__$1.y,other60102.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60101__$1.__extmap,other60102.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k60100){
var self__ = this;
var this__4468__auto____$1 = this;
var G__60146 = k60100;
var G__60146__$1 = (((G__60146 instanceof cljs.core.Keyword))?G__60146.fqn:null);
switch (G__60146__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60100);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__60099){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__60149 = cljs.core.keyword_identical_QMARK_;
var expr__60150 = k__4470__auto__;
if(cljs.core.truth_((pred__60149.cljs$core$IFn$_invoke$arity$2 ? pred__60149.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__60150) : pred__60149.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__60150)))){
return (new shadow.dom.Coordinate(G__60099,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60149.cljs$core$IFn$_invoke$arity$2 ? pred__60149.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__60150) : pred__60149.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__60150)))){
return (new shadow.dom.Coordinate(self__.x,G__60099,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__60099),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__60099){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__60099,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__60106){
var extmap__4501__auto__ = (function (){var G__60166 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60106,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__60106)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60166);
} else {
return G__60166;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__60106),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__60106),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k60178,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__60202 = k60178;
var G__60202__$1 = (((G__60202 instanceof cljs.core.Keyword))?G__60202.fqn:null);
switch (G__60202__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60178,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__60206){
var vec__60207 = p__60206;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60207,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60207,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60177){
var self__ = this;
var G__60177__$1 = this;
return (new cljs.core.RecordIter((0),G__60177__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60179,other60180){
var self__ = this;
var this60179__$1 = this;
return (((!((other60180 == null)))) && ((((this60179__$1.constructor === other60180.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60179__$1.w,other60180.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60179__$1.h,other60180.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60179__$1.__extmap,other60180.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k60178){
var self__ = this;
var this__4468__auto____$1 = this;
var G__60224 = k60178;
var G__60224__$1 = (((G__60224 instanceof cljs.core.Keyword))?G__60224.fqn:null);
switch (G__60224__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60178);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__60177){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__60230 = cljs.core.keyword_identical_QMARK_;
var expr__60231 = k__4470__auto__;
if(cljs.core.truth_((pred__60230.cljs$core$IFn$_invoke$arity$2 ? pred__60230.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__60231) : pred__60230.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__60231)))){
return (new shadow.dom.Size(G__60177,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60230.cljs$core$IFn$_invoke$arity$2 ? pred__60230.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60231) : pred__60230.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60231)))){
return (new shadow.dom.Size(self__.w,G__60177,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__60177),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__60177){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__60177,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__60183){
var extmap__4501__auto__ = (function (){var G__60249 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60183,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__60183)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60249);
} else {
return G__60249;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__60183),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__60183),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__60924 = (i + (1));
var G__60925 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__60924;
ret = G__60925;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60280){
var vec__60282 = p__60280;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60282,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60282,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__60289 = arguments.length;
switch (G__60289) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__60941 = ps;
var G__60942 = (i + (1));
el__$1 = G__60941;
i = G__60942;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__60330 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60330,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60330,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60330,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__60337_60964 = cljs.core.seq(props);
var chunk__60338_60965 = null;
var count__60339_60966 = (0);
var i__60340_60967 = (0);
while(true){
if((i__60340_60967 < count__60339_60966)){
var vec__60355_60968 = chunk__60338_60965.cljs$core$IIndexed$_nth$arity$2(null,i__60340_60967);
var k_60969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60355_60968,(0),null);
var v_60970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60355_60968,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_60969);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60969),v_60970);


var G__60975 = seq__60337_60964;
var G__60976 = chunk__60338_60965;
var G__60977 = count__60339_60966;
var G__60978 = (i__60340_60967 + (1));
seq__60337_60964 = G__60975;
chunk__60338_60965 = G__60976;
count__60339_60966 = G__60977;
i__60340_60967 = G__60978;
continue;
} else {
var temp__5753__auto___60983 = cljs.core.seq(seq__60337_60964);
if(temp__5753__auto___60983){
var seq__60337_60985__$1 = temp__5753__auto___60983;
if(cljs.core.chunked_seq_QMARK_(seq__60337_60985__$1)){
var c__4638__auto___60986 = cljs.core.chunk_first(seq__60337_60985__$1);
var G__60991 = cljs.core.chunk_rest(seq__60337_60985__$1);
var G__60992 = c__4638__auto___60986;
var G__60993 = cljs.core.count(c__4638__auto___60986);
var G__60994 = (0);
seq__60337_60964 = G__60991;
chunk__60338_60965 = G__60992;
count__60339_60966 = G__60993;
i__60340_60967 = G__60994;
continue;
} else {
var vec__60359_60995 = cljs.core.first(seq__60337_60985__$1);
var k_60996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60359_60995,(0),null);
var v_60997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60359_60995,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_60996);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60996),v_60997);


var G__60998 = cljs.core.next(seq__60337_60985__$1);
var G__60999 = null;
var G__61000 = (0);
var G__61001 = (0);
seq__60337_60964 = G__60998;
chunk__60338_60965 = G__60999;
count__60339_60966 = G__61000;
i__60340_60967 = G__61001;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__60376 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60376,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60376,(1),null);
var seq__60380_61003 = cljs.core.seq(node_children);
var chunk__60382_61004 = null;
var count__60383_61005 = (0);
var i__60384_61006 = (0);
while(true){
if((i__60384_61006 < count__60383_61005)){
var child_struct_61007 = chunk__60382_61004.cljs$core$IIndexed$_nth$arity$2(null,i__60384_61006);
if((!((child_struct_61007 == null)))){
if(typeof child_struct_61007 === 'string'){
var text_61008 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61008),child_struct_61007].join(''));
} else {
var children_61009 = shadow.dom.svg_node(child_struct_61007);
if(cljs.core.seq_QMARK_(children_61009)){
var seq__60433_61012 = cljs.core.seq(children_61009);
var chunk__60437_61013 = null;
var count__60438_61014 = (0);
var i__60439_61015 = (0);
while(true){
if((i__60439_61015 < count__60438_61014)){
var child_61016 = chunk__60437_61013.cljs$core$IIndexed$_nth$arity$2(null,i__60439_61015);
if(cljs.core.truth_(child_61016)){
node.appendChild(child_61016);


var G__61017 = seq__60433_61012;
var G__61018 = chunk__60437_61013;
var G__61019 = count__60438_61014;
var G__61020 = (i__60439_61015 + (1));
seq__60433_61012 = G__61017;
chunk__60437_61013 = G__61018;
count__60438_61014 = G__61019;
i__60439_61015 = G__61020;
continue;
} else {
var G__61021 = seq__60433_61012;
var G__61022 = chunk__60437_61013;
var G__61023 = count__60438_61014;
var G__61024 = (i__60439_61015 + (1));
seq__60433_61012 = G__61021;
chunk__60437_61013 = G__61022;
count__60438_61014 = G__61023;
i__60439_61015 = G__61024;
continue;
}
} else {
var temp__5753__auto___61025 = cljs.core.seq(seq__60433_61012);
if(temp__5753__auto___61025){
var seq__60433_61027__$1 = temp__5753__auto___61025;
if(cljs.core.chunked_seq_QMARK_(seq__60433_61027__$1)){
var c__4638__auto___61028 = cljs.core.chunk_first(seq__60433_61027__$1);
var G__61030 = cljs.core.chunk_rest(seq__60433_61027__$1);
var G__61031 = c__4638__auto___61028;
var G__61032 = cljs.core.count(c__4638__auto___61028);
var G__61033 = (0);
seq__60433_61012 = G__61030;
chunk__60437_61013 = G__61031;
count__60438_61014 = G__61032;
i__60439_61015 = G__61033;
continue;
} else {
var child_61034 = cljs.core.first(seq__60433_61027__$1);
if(cljs.core.truth_(child_61034)){
node.appendChild(child_61034);


var G__61039 = cljs.core.next(seq__60433_61027__$1);
var G__61040 = null;
var G__61041 = (0);
var G__61042 = (0);
seq__60433_61012 = G__61039;
chunk__60437_61013 = G__61040;
count__60438_61014 = G__61041;
i__60439_61015 = G__61042;
continue;
} else {
var G__61044 = cljs.core.next(seq__60433_61027__$1);
var G__61045 = null;
var G__61046 = (0);
var G__61047 = (0);
seq__60433_61012 = G__61044;
chunk__60437_61013 = G__61045;
count__60438_61014 = G__61046;
i__60439_61015 = G__61047;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61009);
}
}


var G__61049 = seq__60380_61003;
var G__61050 = chunk__60382_61004;
var G__61051 = count__60383_61005;
var G__61052 = (i__60384_61006 + (1));
seq__60380_61003 = G__61049;
chunk__60382_61004 = G__61050;
count__60383_61005 = G__61051;
i__60384_61006 = G__61052;
continue;
} else {
var G__61057 = seq__60380_61003;
var G__61058 = chunk__60382_61004;
var G__61059 = count__60383_61005;
var G__61060 = (i__60384_61006 + (1));
seq__60380_61003 = G__61057;
chunk__60382_61004 = G__61058;
count__60383_61005 = G__61059;
i__60384_61006 = G__61060;
continue;
}
} else {
var temp__5753__auto___61063 = cljs.core.seq(seq__60380_61003);
if(temp__5753__auto___61063){
var seq__60380_61064__$1 = temp__5753__auto___61063;
if(cljs.core.chunked_seq_QMARK_(seq__60380_61064__$1)){
var c__4638__auto___61066 = cljs.core.chunk_first(seq__60380_61064__$1);
var G__61071 = cljs.core.chunk_rest(seq__60380_61064__$1);
var G__61072 = c__4638__auto___61066;
var G__61073 = cljs.core.count(c__4638__auto___61066);
var G__61074 = (0);
seq__60380_61003 = G__61071;
chunk__60382_61004 = G__61072;
count__60383_61005 = G__61073;
i__60384_61006 = G__61074;
continue;
} else {
var child_struct_61076 = cljs.core.first(seq__60380_61064__$1);
if((!((child_struct_61076 == null)))){
if(typeof child_struct_61076 === 'string'){
var text_61081 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61081),child_struct_61076].join(''));
} else {
var children_61082 = shadow.dom.svg_node(child_struct_61076);
if(cljs.core.seq_QMARK_(children_61082)){
var seq__60461_61083 = cljs.core.seq(children_61082);
var chunk__60463_61084 = null;
var count__60464_61085 = (0);
var i__60465_61086 = (0);
while(true){
if((i__60465_61086 < count__60464_61085)){
var child_61088 = chunk__60463_61084.cljs$core$IIndexed$_nth$arity$2(null,i__60465_61086);
if(cljs.core.truth_(child_61088)){
node.appendChild(child_61088);


var G__61092 = seq__60461_61083;
var G__61093 = chunk__60463_61084;
var G__61094 = count__60464_61085;
var G__61095 = (i__60465_61086 + (1));
seq__60461_61083 = G__61092;
chunk__60463_61084 = G__61093;
count__60464_61085 = G__61094;
i__60465_61086 = G__61095;
continue;
} else {
var G__61097 = seq__60461_61083;
var G__61098 = chunk__60463_61084;
var G__61099 = count__60464_61085;
var G__61100 = (i__60465_61086 + (1));
seq__60461_61083 = G__61097;
chunk__60463_61084 = G__61098;
count__60464_61085 = G__61099;
i__60465_61086 = G__61100;
continue;
}
} else {
var temp__5753__auto___61101__$1 = cljs.core.seq(seq__60461_61083);
if(temp__5753__auto___61101__$1){
var seq__60461_61102__$1 = temp__5753__auto___61101__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60461_61102__$1)){
var c__4638__auto___61103 = cljs.core.chunk_first(seq__60461_61102__$1);
var G__61104 = cljs.core.chunk_rest(seq__60461_61102__$1);
var G__61105 = c__4638__auto___61103;
var G__61106 = cljs.core.count(c__4638__auto___61103);
var G__61107 = (0);
seq__60461_61083 = G__61104;
chunk__60463_61084 = G__61105;
count__60464_61085 = G__61106;
i__60465_61086 = G__61107;
continue;
} else {
var child_61112 = cljs.core.first(seq__60461_61102__$1);
if(cljs.core.truth_(child_61112)){
node.appendChild(child_61112);


var G__61113 = cljs.core.next(seq__60461_61102__$1);
var G__61114 = null;
var G__61115 = (0);
var G__61116 = (0);
seq__60461_61083 = G__61113;
chunk__60463_61084 = G__61114;
count__60464_61085 = G__61115;
i__60465_61086 = G__61116;
continue;
} else {
var G__61117 = cljs.core.next(seq__60461_61102__$1);
var G__61118 = null;
var G__61119 = (0);
var G__61120 = (0);
seq__60461_61083 = G__61117;
chunk__60463_61084 = G__61118;
count__60464_61085 = G__61119;
i__60465_61086 = G__61120;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61082);
}
}


var G__61124 = cljs.core.next(seq__60380_61064__$1);
var G__61125 = null;
var G__61126 = (0);
var G__61127 = (0);
seq__60380_61003 = G__61124;
chunk__60382_61004 = G__61125;
count__60383_61005 = G__61126;
i__60384_61006 = G__61127;
continue;
} else {
var G__61128 = cljs.core.next(seq__60380_61064__$1);
var G__61129 = null;
var G__61130 = (0);
var G__61131 = (0);
seq__60380_61003 = G__61128;
chunk__60382_61004 = G__61129;
count__60383_61005 = G__61130;
i__60384_61006 = G__61131;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___61133 = arguments.length;
var i__4819__auto___61134 = (0);
while(true){
if((i__4819__auto___61134 < len__4818__auto___61133)){
args__4824__auto__.push((arguments[i__4819__auto___61134]));

var G__61135 = (i__4819__auto___61134 + (1));
i__4819__auto___61134 = G__61135;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq60491){
var G__60492 = cljs.core.first(seq60491);
var seq60491__$1 = cljs.core.next(seq60491);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60492,seq60491__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__60517 = arguments.length;
switch (G__60517) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__56206__auto___61144 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_60537){
var state_val_60538 = (state_60537[(1)]);
if((state_val_60538 === (1))){
var state_60537__$1 = state_60537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60537__$1,(2),once_or_cleanup);
} else {
if((state_val_60538 === (2))){
var inst_60529 = (state_60537[(2)]);
var inst_60534 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_60537__$1 = (function (){var statearr_60550 = state_60537;
(statearr_60550[(7)] = inst_60529);

return statearr_60550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60537__$1,inst_60534);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55985__auto__ = null;
var shadow$dom$state_machine__55985__auto____0 = (function (){
var statearr_60552 = [null,null,null,null,null,null,null,null];
(statearr_60552[(0)] = shadow$dom$state_machine__55985__auto__);

(statearr_60552[(1)] = (1));

return statearr_60552;
});
var shadow$dom$state_machine__55985__auto____1 = (function (state_60537){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_60537);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e60553){var ex__55988__auto__ = e60553;
var statearr_60554_61151 = state_60537;
(statearr_60554_61151[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_60537[(4)]))){
var statearr_60555_61152 = state_60537;
(statearr_60555_61152[(1)] = cljs.core.first((state_60537[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61153 = state_60537;
state_60537 = G__61153;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
shadow$dom$state_machine__55985__auto__ = function(state_60537){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55985__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55985__auto____1.call(this,state_60537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55985__auto____0;
shadow$dom$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55985__auto____1;
return shadow$dom$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_60558 = f__56207__auto__();
(statearr_60558[(6)] = c__56206__auto___61144);

return statearr_60558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
