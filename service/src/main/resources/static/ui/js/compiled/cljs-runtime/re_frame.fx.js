goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52028 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52029 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52029);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___52121 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___52121)){
var new_db_52122 = temp__5753__auto___52121;
var fexpr__52031_52124 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52031_52124.cljs$core$IFn$_invoke$arity$1 ? fexpr__52031_52124.cljs$core$IFn$_invoke$arity$1(new_db_52122) : fexpr__52031_52124.call(null,new_db_52122));
} else {
}

var seq__52032 = cljs.core.seq(effects_without_db);
var chunk__52033 = null;
var count__52034 = (0);
var i__52035 = (0);
while(true){
if((i__52035 < count__52034)){
var vec__52054 = chunk__52033.cljs$core$IIndexed$_nth$arity$2(null,i__52035);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52054,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52054,(1),null);
var temp__5751__auto___52126 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52126)){
var effect_fn_52127 = temp__5751__auto___52126;
(effect_fn_52127.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52127.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52127.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52128 = seq__52032;
var G__52129 = chunk__52033;
var G__52130 = count__52034;
var G__52131 = (i__52035 + (1));
seq__52032 = G__52128;
chunk__52033 = G__52129;
count__52034 = G__52130;
i__52035 = G__52131;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52032);
if(temp__5753__auto__){
var seq__52032__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52032__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52032__$1);
var G__52132 = cljs.core.chunk_rest(seq__52032__$1);
var G__52133 = c__4638__auto__;
var G__52134 = cljs.core.count(c__4638__auto__);
var G__52135 = (0);
seq__52032 = G__52132;
chunk__52033 = G__52133;
count__52034 = G__52134;
i__52035 = G__52135;
continue;
} else {
var vec__52058 = cljs.core.first(seq__52032__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52058,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52058,(1),null);
var temp__5751__auto___52136 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52136)){
var effect_fn_52137 = temp__5751__auto___52136;
(effect_fn_52137.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52137.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52137.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52138 = cljs.core.next(seq__52032__$1);
var G__52139 = null;
var G__52140 = (0);
var G__52141 = (0);
seq__52032 = G__52138;
chunk__52033 = G__52139;
count__52034 = G__52140;
i__52035 = G__52141;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51378__auto___52142 = re_frame.interop.now();
var duration__51379__auto___52143 = (end__51378__auto___52142 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51379__auto___52143,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51378__auto___52142);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52028);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___52144 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___52144)){
var new_db_52145 = temp__5753__auto___52144;
var fexpr__52062_52146 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52062_52146.cljs$core$IFn$_invoke$arity$1 ? fexpr__52062_52146.cljs$core$IFn$_invoke$arity$1(new_db_52145) : fexpr__52062_52146.call(null,new_db_52145));
} else {
}

var seq__52063 = cljs.core.seq(effects_without_db);
var chunk__52064 = null;
var count__52065 = (0);
var i__52066 = (0);
while(true){
if((i__52066 < count__52065)){
var vec__52074 = chunk__52064.cljs$core$IIndexed$_nth$arity$2(null,i__52066);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52074,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52074,(1),null);
var temp__5751__auto___52147 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52147)){
var effect_fn_52148 = temp__5751__auto___52147;
(effect_fn_52148.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52148.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52148.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52149 = seq__52063;
var G__52150 = chunk__52064;
var G__52151 = count__52065;
var G__52152 = (i__52066 + (1));
seq__52063 = G__52149;
chunk__52064 = G__52150;
count__52065 = G__52151;
i__52066 = G__52152;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52063);
if(temp__5753__auto__){
var seq__52063__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52063__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52063__$1);
var G__52153 = cljs.core.chunk_rest(seq__52063__$1);
var G__52154 = c__4638__auto__;
var G__52155 = cljs.core.count(c__4638__auto__);
var G__52156 = (0);
seq__52063 = G__52153;
chunk__52064 = G__52154;
count__52065 = G__52155;
i__52066 = G__52156;
continue;
} else {
var vec__52079 = cljs.core.first(seq__52063__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52079,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52079,(1),null);
var temp__5751__auto___52157 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52157)){
var effect_fn_52158 = temp__5751__auto___52157;
(effect_fn_52158.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52158.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52158.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52159 = cljs.core.next(seq__52063__$1);
var G__52160 = null;
var G__52161 = (0);
var G__52162 = (0);
seq__52063 = G__52159;
chunk__52064 = G__52160;
count__52065 = G__52161;
i__52066 = G__52162;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__52084){
var map__52085 = p__52084;
var map__52085__$1 = cljs.core.__destructure_map(map__52085);
var effect = map__52085__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52085__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52085__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__52086 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52087 = null;
var count__52088 = (0);
var i__52089 = (0);
while(true){
if((i__52089 < count__52088)){
var effect = chunk__52087.cljs$core$IIndexed$_nth$arity$2(null,i__52089);
re_frame.fx.dispatch_later(effect);


var G__52163 = seq__52086;
var G__52164 = chunk__52087;
var G__52165 = count__52088;
var G__52166 = (i__52089 + (1));
seq__52086 = G__52163;
chunk__52087 = G__52164;
count__52088 = G__52165;
i__52089 = G__52166;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52086);
if(temp__5753__auto__){
var seq__52086__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52086__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52086__$1);
var G__52167 = cljs.core.chunk_rest(seq__52086__$1);
var G__52168 = c__4638__auto__;
var G__52169 = cljs.core.count(c__4638__auto__);
var G__52170 = (0);
seq__52086 = G__52167;
chunk__52087 = G__52168;
count__52088 = G__52169;
i__52089 = G__52170;
continue;
} else {
var effect = cljs.core.first(seq__52086__$1);
re_frame.fx.dispatch_later(effect);


var G__52171 = cljs.core.next(seq__52086__$1);
var G__52172 = null;
var G__52173 = (0);
var G__52174 = (0);
seq__52086 = G__52171;
chunk__52087 = G__52172;
count__52088 = G__52173;
i__52089 = G__52174;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__52090 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__52091 = null;
var count__52092 = (0);
var i__52093 = (0);
while(true){
if((i__52093 < count__52092)){
var vec__52103 = chunk__52091.cljs$core$IIndexed$_nth$arity$2(null,i__52093);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52103,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52103,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___52175 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52175)){
var effect_fn_52176 = temp__5751__auto___52175;
(effect_fn_52176.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52176.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52176.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__52177 = seq__52090;
var G__52178 = chunk__52091;
var G__52179 = count__52092;
var G__52180 = (i__52093 + (1));
seq__52090 = G__52177;
chunk__52091 = G__52178;
count__52092 = G__52179;
i__52093 = G__52180;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52090);
if(temp__5753__auto__){
var seq__52090__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52090__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52090__$1);
var G__52181 = cljs.core.chunk_rest(seq__52090__$1);
var G__52182 = c__4638__auto__;
var G__52183 = cljs.core.count(c__4638__auto__);
var G__52184 = (0);
seq__52090 = G__52181;
chunk__52091 = G__52182;
count__52092 = G__52183;
i__52093 = G__52184;
continue;
} else {
var vec__52106 = cljs.core.first(seq__52090__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52106,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52106,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___52185 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___52185)){
var effect_fn_52186 = temp__5751__auto___52185;
(effect_fn_52186.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52186.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52186.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__52187 = cljs.core.next(seq__52090__$1);
var G__52188 = null;
var G__52189 = (0);
var G__52190 = (0);
seq__52090 = G__52187;
chunk__52091 = G__52188;
count__52092 = G__52189;
i__52093 = G__52190;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52110 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52111 = null;
var count__52112 = (0);
var i__52113 = (0);
while(true){
if((i__52113 < count__52112)){
var event = chunk__52111.cljs$core$IIndexed$_nth$arity$2(null,i__52113);
re_frame.router.dispatch(event);


var G__52192 = seq__52110;
var G__52193 = chunk__52111;
var G__52194 = count__52112;
var G__52195 = (i__52113 + (1));
seq__52110 = G__52192;
chunk__52111 = G__52193;
count__52112 = G__52194;
i__52113 = G__52195;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52110);
if(temp__5753__auto__){
var seq__52110__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52110__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52110__$1);
var G__52196 = cljs.core.chunk_rest(seq__52110__$1);
var G__52197 = c__4638__auto__;
var G__52198 = cljs.core.count(c__4638__auto__);
var G__52199 = (0);
seq__52110 = G__52196;
chunk__52111 = G__52197;
count__52112 = G__52198;
i__52113 = G__52199;
continue;
} else {
var event = cljs.core.first(seq__52110__$1);
re_frame.router.dispatch(event);


var G__52200 = cljs.core.next(seq__52110__$1);
var G__52201 = null;
var G__52202 = (0);
var G__52203 = (0);
seq__52110 = G__52200;
chunk__52111 = G__52201;
count__52112 = G__52202;
i__52113 = G__52203;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52116 = cljs.core.seq(value);
var chunk__52117 = null;
var count__52118 = (0);
var i__52119 = (0);
while(true){
if((i__52119 < count__52118)){
var event = chunk__52117.cljs$core$IIndexed$_nth$arity$2(null,i__52119);
clear_event(event);


var G__52204 = seq__52116;
var G__52205 = chunk__52117;
var G__52206 = count__52118;
var G__52207 = (i__52119 + (1));
seq__52116 = G__52204;
chunk__52117 = G__52205;
count__52118 = G__52206;
i__52119 = G__52207;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52116);
if(temp__5753__auto__){
var seq__52116__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52116__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52116__$1);
var G__52210 = cljs.core.chunk_rest(seq__52116__$1);
var G__52211 = c__4638__auto__;
var G__52212 = cljs.core.count(c__4638__auto__);
var G__52213 = (0);
seq__52116 = G__52210;
chunk__52117 = G__52211;
count__52118 = G__52212;
i__52119 = G__52213;
continue;
} else {
var event = cljs.core.first(seq__52116__$1);
clear_event(event);


var G__52214 = cljs.core.next(seq__52116__$1);
var G__52215 = null;
var G__52216 = (0);
var G__52217 = (0);
seq__52116 = G__52214;
chunk__52117 = G__52215;
count__52118 = G__52216;
i__52119 = G__52217;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
