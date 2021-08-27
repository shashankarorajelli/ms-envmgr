goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___63605 = arguments.length;
var i__4819__auto___63606 = (0);
while(true){
if((i__4819__auto___63606 < len__4818__auto___63605)){
args__4824__auto__.push((arguments[i__4819__auto___63606]));

var G__63609 = (i__4819__auto___63606 + (1));
i__4819__auto___63606 = G__63609;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63077){
var G__63078 = cljs.core.first(seq63077);
var seq63077__$1 = cljs.core.next(seq63077);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63078,seq63077__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63085 = cljs.core.seq(sources);
var chunk__63086 = null;
var count__63087 = (0);
var i__63088 = (0);
while(true){
if((i__63088 < count__63087)){
var map__63117 = chunk__63086.cljs$core$IIndexed$_nth$arity$2(null,i__63088);
var map__63117__$1 = cljs.core.__destructure_map(map__63117);
var src = map__63117__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63117__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63117__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63117__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63117__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63121){var e_63627 = e63121;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63627);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63627.message)].join('')));
}

var G__63630 = seq__63085;
var G__63631 = chunk__63086;
var G__63632 = count__63087;
var G__63633 = (i__63088 + (1));
seq__63085 = G__63630;
chunk__63086 = G__63631;
count__63087 = G__63632;
i__63088 = G__63633;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63085);
if(temp__5753__auto__){
var seq__63085__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63085__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__63085__$1);
var G__63634 = cljs.core.chunk_rest(seq__63085__$1);
var G__63635 = c__4638__auto__;
var G__63636 = cljs.core.count(c__4638__auto__);
var G__63637 = (0);
seq__63085 = G__63634;
chunk__63086 = G__63635;
count__63087 = G__63636;
i__63088 = G__63637;
continue;
} else {
var map__63135 = cljs.core.first(seq__63085__$1);
var map__63135__$1 = cljs.core.__destructure_map(map__63135);
var src = map__63135__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63135__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63135__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63135__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63135__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63145){var e_63638 = e63145;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63638);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63638.message)].join('')));
}

var G__63640 = cljs.core.next(seq__63085__$1);
var G__63641 = null;
var G__63642 = (0);
var G__63643 = (0);
seq__63085 = G__63640;
chunk__63086 = G__63641;
count__63087 = G__63642;
i__63088 = G__63643;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__63155 = cljs.core.seq(js_requires);
var chunk__63156 = null;
var count__63157 = (0);
var i__63158 = (0);
while(true){
if((i__63158 < count__63157)){
var js_ns = chunk__63156.cljs$core$IIndexed$_nth$arity$2(null,i__63158);
var require_str_63648 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63648);


var G__63649 = seq__63155;
var G__63650 = chunk__63156;
var G__63651 = count__63157;
var G__63652 = (i__63158 + (1));
seq__63155 = G__63649;
chunk__63156 = G__63650;
count__63157 = G__63651;
i__63158 = G__63652;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63155);
if(temp__5753__auto__){
var seq__63155__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63155__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__63155__$1);
var G__63653 = cljs.core.chunk_rest(seq__63155__$1);
var G__63654 = c__4638__auto__;
var G__63655 = cljs.core.count(c__4638__auto__);
var G__63656 = (0);
seq__63155 = G__63653;
chunk__63156 = G__63654;
count__63157 = G__63655;
i__63158 = G__63656;
continue;
} else {
var js_ns = cljs.core.first(seq__63155__$1);
var require_str_63659 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63659);


var G__63661 = cljs.core.next(seq__63155__$1);
var G__63662 = null;
var G__63663 = (0);
var G__63664 = (0);
seq__63155 = G__63661;
chunk__63156 = G__63662;
count__63157 = G__63663;
i__63158 = G__63664;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63185){
var map__63190 = p__63185;
var map__63190__$1 = cljs.core.__destructure_map(map__63190);
var msg = map__63190__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63190__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63190__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63191(s__63192){
return (new cljs.core.LazySeq(null,(function (){
var s__63192__$1 = s__63192;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63192__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__63197 = cljs.core.first(xs__6308__auto__);
var map__63197__$1 = cljs.core.__destructure_map(map__63197);
var src = map__63197__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63197__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63197__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__63192__$1,map__63197,map__63197__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63190,map__63190__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63191_$_iter__63193(s__63194){
return (new cljs.core.LazySeq(null,((function (s__63192__$1,map__63197,map__63197__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63190,map__63190__$1,msg,info,reload_info){
return (function (){
var s__63194__$1 = s__63194;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__63194__$1);
if(temp__5753__auto____$1){
var s__63194__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63194__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__63194__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__63196 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__63195 = (0);
while(true){
if((i__63195 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__63195);
cljs.core.chunk_append(b__63196,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__63667 = (i__63195 + (1));
i__63195 = G__63667;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63196),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63191_$_iter__63193(cljs.core.chunk_rest(s__63194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63196),null);
}
} else {
var warning = cljs.core.first(s__63194__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63191_$_iter__63193(cljs.core.rest(s__63194__$2)));
}
} else {
return null;
}
break;
}
});})(s__63192__$1,map__63197,map__63197__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63190,map__63190__$1,msg,info,reload_info))
,null,null));
});})(s__63192__$1,map__63197,map__63197__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63190,map__63190__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63191(cljs.core.rest(s__63192__$1)));
} else {
var G__63675 = cljs.core.rest(s__63192__$1);
s__63192__$1 = G__63675;
continue;
}
} else {
var G__63676 = cljs.core.rest(s__63192__$1);
s__63192__$1 = G__63676;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__63208_63677 = cljs.core.seq(warnings);
var chunk__63209_63678 = null;
var count__63210_63679 = (0);
var i__63211_63680 = (0);
while(true){
if((i__63211_63680 < count__63210_63679)){
var map__63226_63681 = chunk__63209_63678.cljs$core$IIndexed$_nth$arity$2(null,i__63211_63680);
var map__63226_63682__$1 = cljs.core.__destructure_map(map__63226_63681);
var w_63683 = map__63226_63682__$1;
var msg_63684__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63226_63682__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63226_63682__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63226_63682__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63226_63682__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63687)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63685),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63686),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63684__$1)].join(''));


var G__63688 = seq__63208_63677;
var G__63689 = chunk__63209_63678;
var G__63690 = count__63210_63679;
var G__63691 = (i__63211_63680 + (1));
seq__63208_63677 = G__63688;
chunk__63209_63678 = G__63689;
count__63210_63679 = G__63690;
i__63211_63680 = G__63691;
continue;
} else {
var temp__5753__auto___63693 = cljs.core.seq(seq__63208_63677);
if(temp__5753__auto___63693){
var seq__63208_63694__$1 = temp__5753__auto___63693;
if(cljs.core.chunked_seq_QMARK_(seq__63208_63694__$1)){
var c__4638__auto___63695 = cljs.core.chunk_first(seq__63208_63694__$1);
var G__63696 = cljs.core.chunk_rest(seq__63208_63694__$1);
var G__63697 = c__4638__auto___63695;
var G__63698 = cljs.core.count(c__4638__auto___63695);
var G__63699 = (0);
seq__63208_63677 = G__63696;
chunk__63209_63678 = G__63697;
count__63210_63679 = G__63698;
i__63211_63680 = G__63699;
continue;
} else {
var map__63232_63700 = cljs.core.first(seq__63208_63694__$1);
var map__63232_63701__$1 = cljs.core.__destructure_map(map__63232_63700);
var w_63702 = map__63232_63701__$1;
var msg_63703__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232_63701__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232_63701__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232_63701__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63232_63701__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63706)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63704),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63705),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63703__$1)].join(''));


var G__63709 = cljs.core.next(seq__63208_63694__$1);
var G__63710 = null;
var G__63711 = (0);
var G__63712 = (0);
seq__63208_63677 = G__63709;
chunk__63209_63678 = G__63710;
count__63210_63679 = G__63711;
i__63211_63680 = G__63712;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63182_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63182_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__63251){
var map__63252 = p__63251;
var map__63252__$1 = cljs.core.__destructure_map(map__63252);
var msg = map__63252__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63252__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__63253 = cljs.core.seq(updates);
var chunk__63255 = null;
var count__63256 = (0);
var i__63257 = (0);
while(true){
if((i__63257 < count__63256)){
var path = chunk__63255.cljs$core$IIndexed$_nth$arity$2(null,i__63257);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63343_63721 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63347_63722 = null;
var count__63348_63723 = (0);
var i__63349_63724 = (0);
while(true){
if((i__63349_63724 < count__63348_63723)){
var node_63728 = chunk__63347_63722.cljs$core$IIndexed$_nth$arity$2(null,i__63349_63724);
if(cljs.core.not(node_63728.shadow$old)){
var path_match_63729 = shadow.cljs.devtools.client.browser.match_paths(node_63728.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63729)){
var new_link_63730 = (function (){var G__63376 = node_63728.cloneNode(true);
G__63376.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63729),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63376;
})();
(node_63728.shadow$old = true);

(new_link_63730.onload = ((function (seq__63343_63721,chunk__63347_63722,count__63348_63723,i__63349_63724,seq__63253,chunk__63255,count__63256,i__63257,new_link_63730,path_match_63729,node_63728,path,map__63252,map__63252__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_63728);
});})(seq__63343_63721,chunk__63347_63722,count__63348_63723,i__63349_63724,seq__63253,chunk__63255,count__63256,i__63257,new_link_63730,path_match_63729,node_63728,path,map__63252,map__63252__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63729], 0));

goog.dom.insertSiblingAfter(new_link_63730,node_63728);


var G__63734 = seq__63343_63721;
var G__63735 = chunk__63347_63722;
var G__63736 = count__63348_63723;
var G__63737 = (i__63349_63724 + (1));
seq__63343_63721 = G__63734;
chunk__63347_63722 = G__63735;
count__63348_63723 = G__63736;
i__63349_63724 = G__63737;
continue;
} else {
var G__63738 = seq__63343_63721;
var G__63739 = chunk__63347_63722;
var G__63740 = count__63348_63723;
var G__63741 = (i__63349_63724 + (1));
seq__63343_63721 = G__63738;
chunk__63347_63722 = G__63739;
count__63348_63723 = G__63740;
i__63349_63724 = G__63741;
continue;
}
} else {
var G__63743 = seq__63343_63721;
var G__63744 = chunk__63347_63722;
var G__63745 = count__63348_63723;
var G__63746 = (i__63349_63724 + (1));
seq__63343_63721 = G__63743;
chunk__63347_63722 = G__63744;
count__63348_63723 = G__63745;
i__63349_63724 = G__63746;
continue;
}
} else {
var temp__5753__auto___63747 = cljs.core.seq(seq__63343_63721);
if(temp__5753__auto___63747){
var seq__63343_63748__$1 = temp__5753__auto___63747;
if(cljs.core.chunked_seq_QMARK_(seq__63343_63748__$1)){
var c__4638__auto___63749 = cljs.core.chunk_first(seq__63343_63748__$1);
var G__63750 = cljs.core.chunk_rest(seq__63343_63748__$1);
var G__63751 = c__4638__auto___63749;
var G__63752 = cljs.core.count(c__4638__auto___63749);
var G__63753 = (0);
seq__63343_63721 = G__63750;
chunk__63347_63722 = G__63751;
count__63348_63723 = G__63752;
i__63349_63724 = G__63753;
continue;
} else {
var node_63757 = cljs.core.first(seq__63343_63748__$1);
if(cljs.core.not(node_63757.shadow$old)){
var path_match_63758 = shadow.cljs.devtools.client.browser.match_paths(node_63757.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63758)){
var new_link_63759 = (function (){var G__63390 = node_63757.cloneNode(true);
G__63390.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63758),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63390;
})();
(node_63757.shadow$old = true);

(new_link_63759.onload = ((function (seq__63343_63721,chunk__63347_63722,count__63348_63723,i__63349_63724,seq__63253,chunk__63255,count__63256,i__63257,new_link_63759,path_match_63758,node_63757,seq__63343_63748__$1,temp__5753__auto___63747,path,map__63252,map__63252__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_63757);
});})(seq__63343_63721,chunk__63347_63722,count__63348_63723,i__63349_63724,seq__63253,chunk__63255,count__63256,i__63257,new_link_63759,path_match_63758,node_63757,seq__63343_63748__$1,temp__5753__auto___63747,path,map__63252,map__63252__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63758], 0));

goog.dom.insertSiblingAfter(new_link_63759,node_63757);


var G__63764 = cljs.core.next(seq__63343_63748__$1);
var G__63765 = null;
var G__63766 = (0);
var G__63767 = (0);
seq__63343_63721 = G__63764;
chunk__63347_63722 = G__63765;
count__63348_63723 = G__63766;
i__63349_63724 = G__63767;
continue;
} else {
var G__63768 = cljs.core.next(seq__63343_63748__$1);
var G__63769 = null;
var G__63770 = (0);
var G__63771 = (0);
seq__63343_63721 = G__63768;
chunk__63347_63722 = G__63769;
count__63348_63723 = G__63770;
i__63349_63724 = G__63771;
continue;
}
} else {
var G__63772 = cljs.core.next(seq__63343_63748__$1);
var G__63773 = null;
var G__63774 = (0);
var G__63775 = (0);
seq__63343_63721 = G__63772;
chunk__63347_63722 = G__63773;
count__63348_63723 = G__63774;
i__63349_63724 = G__63775;
continue;
}
}
} else {
}
}
break;
}


var G__63776 = seq__63253;
var G__63777 = chunk__63255;
var G__63778 = count__63256;
var G__63779 = (i__63257 + (1));
seq__63253 = G__63776;
chunk__63255 = G__63777;
count__63256 = G__63778;
i__63257 = G__63779;
continue;
} else {
var G__63780 = seq__63253;
var G__63781 = chunk__63255;
var G__63782 = count__63256;
var G__63783 = (i__63257 + (1));
seq__63253 = G__63780;
chunk__63255 = G__63781;
count__63256 = G__63782;
i__63257 = G__63783;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63253);
if(temp__5753__auto__){
var seq__63253__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63253__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__63253__$1);
var G__63784 = cljs.core.chunk_rest(seq__63253__$1);
var G__63785 = c__4638__auto__;
var G__63786 = cljs.core.count(c__4638__auto__);
var G__63787 = (0);
seq__63253 = G__63784;
chunk__63255 = G__63785;
count__63256 = G__63786;
i__63257 = G__63787;
continue;
} else {
var path = cljs.core.first(seq__63253__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63399_63788 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63403_63789 = null;
var count__63404_63790 = (0);
var i__63405_63791 = (0);
while(true){
if((i__63405_63791 < count__63404_63790)){
var node_63792 = chunk__63403_63789.cljs$core$IIndexed$_nth$arity$2(null,i__63405_63791);
if(cljs.core.not(node_63792.shadow$old)){
var path_match_63793 = shadow.cljs.devtools.client.browser.match_paths(node_63792.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63793)){
var new_link_63794 = (function (){var G__63431 = node_63792.cloneNode(true);
G__63431.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63793),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63431;
})();
(node_63792.shadow$old = true);

(new_link_63794.onload = ((function (seq__63399_63788,chunk__63403_63789,count__63404_63790,i__63405_63791,seq__63253,chunk__63255,count__63256,i__63257,new_link_63794,path_match_63793,node_63792,path,seq__63253__$1,temp__5753__auto__,map__63252,map__63252__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_63792);
});})(seq__63399_63788,chunk__63403_63789,count__63404_63790,i__63405_63791,seq__63253,chunk__63255,count__63256,i__63257,new_link_63794,path_match_63793,node_63792,path,seq__63253__$1,temp__5753__auto__,map__63252,map__63252__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63793], 0));

goog.dom.insertSiblingAfter(new_link_63794,node_63792);


var G__63795 = seq__63399_63788;
var G__63796 = chunk__63403_63789;
var G__63797 = count__63404_63790;
var G__63798 = (i__63405_63791 + (1));
seq__63399_63788 = G__63795;
chunk__63403_63789 = G__63796;
count__63404_63790 = G__63797;
i__63405_63791 = G__63798;
continue;
} else {
var G__63800 = seq__63399_63788;
var G__63801 = chunk__63403_63789;
var G__63802 = count__63404_63790;
var G__63803 = (i__63405_63791 + (1));
seq__63399_63788 = G__63800;
chunk__63403_63789 = G__63801;
count__63404_63790 = G__63802;
i__63405_63791 = G__63803;
continue;
}
} else {
var G__63804 = seq__63399_63788;
var G__63805 = chunk__63403_63789;
var G__63806 = count__63404_63790;
var G__63807 = (i__63405_63791 + (1));
seq__63399_63788 = G__63804;
chunk__63403_63789 = G__63805;
count__63404_63790 = G__63806;
i__63405_63791 = G__63807;
continue;
}
} else {
var temp__5753__auto___63808__$1 = cljs.core.seq(seq__63399_63788);
if(temp__5753__auto___63808__$1){
var seq__63399_63811__$1 = temp__5753__auto___63808__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63399_63811__$1)){
var c__4638__auto___63812 = cljs.core.chunk_first(seq__63399_63811__$1);
var G__63813 = cljs.core.chunk_rest(seq__63399_63811__$1);
var G__63814 = c__4638__auto___63812;
var G__63815 = cljs.core.count(c__4638__auto___63812);
var G__63816 = (0);
seq__63399_63788 = G__63813;
chunk__63403_63789 = G__63814;
count__63404_63790 = G__63815;
i__63405_63791 = G__63816;
continue;
} else {
var node_63817 = cljs.core.first(seq__63399_63811__$1);
if(cljs.core.not(node_63817.shadow$old)){
var path_match_63820 = shadow.cljs.devtools.client.browser.match_paths(node_63817.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63820)){
var new_link_63821 = (function (){var G__63436 = node_63817.cloneNode(true);
G__63436.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63820),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63436;
})();
(node_63817.shadow$old = true);

(new_link_63821.onload = ((function (seq__63399_63788,chunk__63403_63789,count__63404_63790,i__63405_63791,seq__63253,chunk__63255,count__63256,i__63257,new_link_63821,path_match_63820,node_63817,seq__63399_63811__$1,temp__5753__auto___63808__$1,path,seq__63253__$1,temp__5753__auto__,map__63252,map__63252__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_63817);
});})(seq__63399_63788,chunk__63403_63789,count__63404_63790,i__63405_63791,seq__63253,chunk__63255,count__63256,i__63257,new_link_63821,path_match_63820,node_63817,seq__63399_63811__$1,temp__5753__auto___63808__$1,path,seq__63253__$1,temp__5753__auto__,map__63252,map__63252__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63820], 0));

goog.dom.insertSiblingAfter(new_link_63821,node_63817);


var G__63824 = cljs.core.next(seq__63399_63811__$1);
var G__63825 = null;
var G__63826 = (0);
var G__63827 = (0);
seq__63399_63788 = G__63824;
chunk__63403_63789 = G__63825;
count__63404_63790 = G__63826;
i__63405_63791 = G__63827;
continue;
} else {
var G__63828 = cljs.core.next(seq__63399_63811__$1);
var G__63829 = null;
var G__63830 = (0);
var G__63831 = (0);
seq__63399_63788 = G__63828;
chunk__63403_63789 = G__63829;
count__63404_63790 = G__63830;
i__63405_63791 = G__63831;
continue;
}
} else {
var G__63832 = cljs.core.next(seq__63399_63811__$1);
var G__63833 = null;
var G__63834 = (0);
var G__63835 = (0);
seq__63399_63788 = G__63832;
chunk__63403_63789 = G__63833;
count__63404_63790 = G__63834;
i__63405_63791 = G__63835;
continue;
}
}
} else {
}
}
break;
}


var G__63836 = cljs.core.next(seq__63253__$1);
var G__63837 = null;
var G__63838 = (0);
var G__63839 = (0);
seq__63253 = G__63836;
chunk__63255 = G__63837;
count__63256 = G__63838;
i__63257 = G__63839;
continue;
} else {
var G__63840 = cljs.core.next(seq__63253__$1);
var G__63841 = null;
var G__63842 = (0);
var G__63843 = (0);
seq__63253 = G__63840;
chunk__63255 = G__63841;
count__63256 = G__63842;
i__63257 = G__63843;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__63459){
var map__63460 = p__63459;
var map__63460__$1 = cljs.core.__destructure_map(map__63460);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63460__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__63492){
var map__63494 = p__63492;
var map__63494__$1 = cljs.core.__destructure_map(map__63494);
var _ = map__63494__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63494__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__63502,done,error){
var map__63507 = p__63502;
var map__63507__$1 = cljs.core.__destructure_map(map__63507);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63507__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__63528,done,error){
var map__63533 = p__63528;
var map__63533__$1 = cljs.core.__destructure_map(map__63533);
var msg = map__63533__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63533__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63533__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63533__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__63547){
var map__63550 = p__63547;
var map__63550__$1 = cljs.core.__destructure_map(map__63550);
var src = map__63550__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63550__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__63553 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__63553) : done.call(null,G__63553));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__63562){
var map__63563 = p__63562;
var map__63563__$1 = cljs.core.__destructure_map(map__63563);
var msg__$1 = map__63563__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63563__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e63565){var ex = e63565;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__63569){
var map__63570 = p__63569;
var map__63570__$1 = cljs.core.__destructure_map(map__63570);
var env = map__63570__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63570__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__63576){
var map__63578 = p__63576;
var map__63578__$1 = cljs.core.__destructure_map(map__63578);
var msg = map__63578__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63578__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__63593){
var map__63594 = p__63593;
var map__63594__$1 = cljs.core.__destructure_map(map__63594);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63594__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63594__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__63596){
var map__63597 = p__63596;
var map__63597__$1 = cljs.core.__destructure_map(map__63597);
var svc = map__63597__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63597__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
