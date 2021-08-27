goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__57559,res){
var map__57560 = p__57559;
var map__57560__$1 = cljs.core.__destructure_map(map__57560);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57560__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57560__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__57563 = res;
var G__57563__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57563,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__57563);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57563__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__57563__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__57572 = arguments.length;
switch (G__57572) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__57576,msg,handlers,timeout_after_ms){
var map__57577 = p__57576;
var map__57577__$1 = cljs.core.__destructure_map(map__57577);
var runtime = map__57577__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57577__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___57913 = arguments.length;
var i__4819__auto___57914 = (0);
while(true){
if((i__4819__auto___57914 < len__4818__auto___57913)){
args__4824__auto__.push((arguments[i__4819__auto___57914]));

var G__57916 = (i__4819__auto___57914 + (1));
i__4819__auto___57914 = G__57916;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__57612,ev,args){
var map__57614 = p__57612;
var map__57614__$1 = cljs.core.__destructure_map(map__57614);
var runtime = map__57614__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57614__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__57620 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57623 = null;
var count__57624 = (0);
var i__57625 = (0);
while(true){
if((i__57625 < count__57624)){
var ext = chunk__57623.cljs$core$IIndexed$_nth$arity$2(null,i__57625);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__57918 = seq__57620;
var G__57919 = chunk__57623;
var G__57920 = count__57624;
var G__57921 = (i__57625 + (1));
seq__57620 = G__57918;
chunk__57623 = G__57919;
count__57624 = G__57920;
i__57625 = G__57921;
continue;
} else {
var G__57922 = seq__57620;
var G__57923 = chunk__57623;
var G__57924 = count__57624;
var G__57925 = (i__57625 + (1));
seq__57620 = G__57922;
chunk__57623 = G__57923;
count__57624 = G__57924;
i__57625 = G__57925;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57620);
if(temp__5753__auto__){
var seq__57620__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57620__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__57620__$1);
var G__57927 = cljs.core.chunk_rest(seq__57620__$1);
var G__57928 = c__4638__auto__;
var G__57929 = cljs.core.count(c__4638__auto__);
var G__57930 = (0);
seq__57620 = G__57927;
chunk__57623 = G__57928;
count__57624 = G__57929;
i__57625 = G__57930;
continue;
} else {
var ext = cljs.core.first(seq__57620__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__57934 = cljs.core.next(seq__57620__$1);
var G__57936 = null;
var G__57937 = (0);
var G__57938 = (0);
seq__57620 = G__57934;
chunk__57623 = G__57936;
count__57624 = G__57937;
i__57625 = G__57938;
continue;
} else {
var G__57939 = cljs.core.next(seq__57620__$1);
var G__57940 = null;
var G__57941 = (0);
var G__57942 = (0);
seq__57620 = G__57939;
chunk__57623 = G__57940;
count__57624 = G__57941;
i__57625 = G__57942;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq57599){
var G__57604 = cljs.core.first(seq57599);
var seq57599__$1 = cljs.core.next(seq57599);
var G__57605 = cljs.core.first(seq57599__$1);
var seq57599__$2 = cljs.core.next(seq57599__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57604,G__57605,seq57599__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__57673,p__57674){
var map__57675 = p__57673;
var map__57675__$1 = cljs.core.__destructure_map(map__57675);
var runtime = map__57675__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57675__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57676 = p__57674;
var map__57676__$1 = cljs.core.__destructure_map(map__57676);
var msg = map__57676__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57676__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__57677 = cljs.core.deref(state_ref);
var map__57677__$1 = cljs.core.__destructure_map(map__57677);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57677__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57677__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__57681){
var map__57682 = p__57681;
var map__57682__$1 = cljs.core.__destructure_map(map__57682);
var runtime = map__57682__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57682__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__57692,msg){
var map__57693 = p__57692;
var map__57693__$1 = cljs.core.__destructure_map(map__57693);
var runtime = map__57693__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57693__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__57707,key,p__57708){
var map__57709 = p__57707;
var map__57709__$1 = cljs.core.__destructure_map(map__57709);
var state = map__57709__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57709__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__57710 = p__57708;
var map__57710__$1 = cljs.core.__destructure_map(map__57710);
var spec = map__57710__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57710__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__57714,key,spec){
var map__57715 = p__57714;
var map__57715__$1 = cljs.core.__destructure_map(map__57715);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57715__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__57718_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__57718_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__57719_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__57719_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__57720_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__57720_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__57721_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__57721_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__57722_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__57722_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__57747,key){
var map__57748 = p__57747;
var map__57748__$1 = cljs.core.__destructure_map(map__57748);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57748__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__57770,msg){
var map__57773 = p__57770;
var map__57773__$1 = cljs.core.__destructure_map(map__57773);
var runtime = map__57773__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57773__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__57820,p__57821){
var map__57824 = p__57820;
var map__57824__$1 = cljs.core.__destructure_map(map__57824);
var runtime = map__57824__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57824__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__57825 = p__57821;
var map__57825__$1 = cljs.core.__destructure_map(map__57825);
var msg = map__57825__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57825__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__57868 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__57871 = null;
var count__57872 = (0);
var i__57873 = (0);
while(true){
if((i__57873 < count__57872)){
var map__57889 = chunk__57871.cljs$core$IIndexed$_nth$arity$2(null,i__57873);
var map__57889__$1 = cljs.core.__destructure_map(map__57889);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57889__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__58018 = seq__57868;
var G__58019 = chunk__57871;
var G__58020 = count__57872;
var G__58021 = (i__57873 + (1));
seq__57868 = G__58018;
chunk__57871 = G__58019;
count__57872 = G__58020;
i__57873 = G__58021;
continue;
} else {
var G__58022 = seq__57868;
var G__58023 = chunk__57871;
var G__58024 = count__57872;
var G__58025 = (i__57873 + (1));
seq__57868 = G__58022;
chunk__57871 = G__58023;
count__57872 = G__58024;
i__57873 = G__58025;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57868);
if(temp__5753__auto__){
var seq__57868__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57868__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__57868__$1);
var G__58027 = cljs.core.chunk_rest(seq__57868__$1);
var G__58028 = c__4638__auto__;
var G__58029 = cljs.core.count(c__4638__auto__);
var G__58030 = (0);
seq__57868 = G__58027;
chunk__57871 = G__58028;
count__57872 = G__58029;
i__57873 = G__58030;
continue;
} else {
var map__57894 = cljs.core.first(seq__57868__$1);
var map__57894__$1 = cljs.core.__destructure_map(map__57894);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57894__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__58032 = cljs.core.next(seq__57868__$1);
var G__58033 = null;
var G__58034 = (0);
var G__58035 = (0);
seq__57868 = G__58032;
chunk__57871 = G__58033;
count__57872 = G__58034;
i__57873 = G__58035;
continue;
} else {
var G__58036 = cljs.core.next(seq__57868__$1);
var G__58037 = null;
var G__58038 = (0);
var G__58039 = (0);
seq__57868 = G__58036;
chunk__57871 = G__58037;
count__57872 = G__58038;
i__57873 = G__58039;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
