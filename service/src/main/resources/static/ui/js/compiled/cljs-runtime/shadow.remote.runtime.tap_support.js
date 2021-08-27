goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__61857,p__61858){
var map__61859 = p__61857;
var map__61859__$1 = cljs.core.__destructure_map(map__61859);
var svc = map__61859__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61859__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61859__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61859__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61860 = p__61858;
var map__61860__$1 = cljs.core.__destructure_map(map__61860);
var msg = map__61860__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61860__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61860__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61860__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61860__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__61868,p__61869){
var map__61870 = p__61868;
var map__61870__$1 = cljs.core.__destructure_map(map__61870);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61870__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__61871 = p__61869;
var map__61871__$1 = cljs.core.__destructure_map(map__61871);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61871__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__61876,p__61877){
var map__61880 = p__61876;
var map__61880__$1 = cljs.core.__destructure_map(map__61880);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61880__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61880__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__61881 = p__61877;
var map__61881__$1 = cljs.core.__destructure_map(map__61881);
var msg = map__61881__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61881__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__61891,tid){
var map__61892 = p__61891;
var map__61892__$1 = cljs.core.__destructure_map(map__61892);
var svc = map__61892__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61892__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__61901 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__61902 = null;
var count__61903 = (0);
var i__61904 = (0);
while(true){
if((i__61904 < count__61903)){
var vec__61920 = chunk__61902.cljs$core$IIndexed$_nth$arity$2(null,i__61904);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61920,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61920,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61963 = seq__61901;
var G__61964 = chunk__61902;
var G__61965 = count__61903;
var G__61966 = (i__61904 + (1));
seq__61901 = G__61963;
chunk__61902 = G__61964;
count__61903 = G__61965;
i__61904 = G__61966;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__61901);
if(temp__5753__auto__){
var seq__61901__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__61901__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__61901__$1);
var G__61975 = cljs.core.chunk_rest(seq__61901__$1);
var G__61976 = c__4638__auto__;
var G__61977 = cljs.core.count(c__4638__auto__);
var G__61978 = (0);
seq__61901 = G__61975;
chunk__61902 = G__61976;
count__61903 = G__61977;
i__61904 = G__61978;
continue;
} else {
var vec__61925 = cljs.core.first(seq__61901__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61925,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61925,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__61989 = cljs.core.next(seq__61901__$1);
var G__61990 = null;
var G__61991 = (0);
var G__61992 = (0);
seq__61901 = G__61989;
chunk__61902 = G__61990;
count__61903 = G__61991;
i__61904 = G__61992;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__61894_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__61894_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__61895_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__61895_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__61897_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__61897_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__61898_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__61898_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__61933){
var map__61935 = p__61933;
var map__61935__$1 = cljs.core.__destructure_map(map__61935);
var svc = map__61935__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61935__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61935__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
