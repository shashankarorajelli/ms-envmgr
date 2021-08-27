goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__51408){
var map__51409 = p__51408;
var map__51409__$1 = cljs.core.__destructure_map(map__51409);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51409__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51409__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51409__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51409__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__51422_51468 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__51423_51469 = null;
var count__51424_51470 = (0);
var i__51425_51471 = (0);
while(true){
if((i__51425_51471 < count__51424_51470)){
var vec__51442_51472 = chunk__51423_51469.cljs$core$IIndexed$_nth$arity$2(null,i__51425_51471);
var k_51473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51442_51472,(0),null);
var cb_51474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51442_51472,(1),null);
try{var G__51446_51475 = cljs.core.deref(re_frame.trace.traces);
(cb_51474.cljs$core$IFn$_invoke$arity$1 ? cb_51474.cljs$core$IFn$_invoke$arity$1(G__51446_51475) : cb_51474.call(null,G__51446_51475));
}catch (e51445){var e_51479 = e51445;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51473,"while storing",cljs.core.deref(re_frame.trace.traces),e_51479], 0));
}

var G__51480 = seq__51422_51468;
var G__51481 = chunk__51423_51469;
var G__51482 = count__51424_51470;
var G__51483 = (i__51425_51471 + (1));
seq__51422_51468 = G__51480;
chunk__51423_51469 = G__51481;
count__51424_51470 = G__51482;
i__51425_51471 = G__51483;
continue;
} else {
var temp__5753__auto___51484 = cljs.core.seq(seq__51422_51468);
if(temp__5753__auto___51484){
var seq__51422_51485__$1 = temp__5753__auto___51484;
if(cljs.core.chunked_seq_QMARK_(seq__51422_51485__$1)){
var c__4638__auto___51486 = cljs.core.chunk_first(seq__51422_51485__$1);
var G__51487 = cljs.core.chunk_rest(seq__51422_51485__$1);
var G__51488 = c__4638__auto___51486;
var G__51489 = cljs.core.count(c__4638__auto___51486);
var G__51490 = (0);
seq__51422_51468 = G__51487;
chunk__51423_51469 = G__51488;
count__51424_51470 = G__51489;
i__51425_51471 = G__51490;
continue;
} else {
var vec__51447_51491 = cljs.core.first(seq__51422_51485__$1);
var k_51492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51447_51491,(0),null);
var cb_51493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51447_51491,(1),null);
try{var G__51451_51494 = cljs.core.deref(re_frame.trace.traces);
(cb_51493.cljs$core$IFn$_invoke$arity$1 ? cb_51493.cljs$core$IFn$_invoke$arity$1(G__51451_51494) : cb_51493.call(null,G__51451_51494));
}catch (e51450){var e_51495 = e51450;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_51492,"while storing",cljs.core.deref(re_frame.trace.traces),e_51495], 0));
}

var G__51496 = cljs.core.next(seq__51422_51485__$1);
var G__51497 = null;
var G__51498 = (0);
var G__51499 = (0);
seq__51422_51468 = G__51496;
chunk__51423_51469 = G__51497;
count__51424_51470 = G__51498;
i__51425_51471 = G__51499;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
