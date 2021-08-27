goog.provide('malli.transform');
malli.transform._STAR_max_compile_depth_STAR_ = (10);
/**
 * Utility function to convert input into an interceptor. Works with functions,
 *   map and sequence of those.
 */
malli.transform.__GT_interceptor = (function malli$transform$__GT_interceptor(_QMARK_interceptor,schema,options){
if(cljs.core.fn_QMARK_(_QMARK_interceptor)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),_QMARK_interceptor], null);
} else {
if(((cljs.core.map_QMARK_(_QMARK_interceptor)) && (cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"compile","compile",608186429))))){
var compiled = new cljs.core.Keyword("malli.transform","compiled","malli.transform/compiled",-1910053091).cljs$core$IFn$_invoke$arity$2(options,(0));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.transform","compiled","malli.transform/compiled",-1910053091),(compiled + (1)));
if((compiled >= malli.transform._STAR_max_compile_depth_STAR_)){
malli.core.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.transform","too-deep-compilation","malli.transform/too-deep-compilation",-1157462070),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"this","this",-611633625),_QMARK_interceptor,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"options","options",99638489),options__$1], null));
} else {
}

var temp__5751__auto__ = (function (){var G__67094 = (function (){var fexpr__67103 = new cljs.core.Keyword(null,"compile","compile",608186429).cljs$core$IFn$_invoke$arity$1(_QMARK_interceptor);
return (fexpr__67103.cljs$core$IFn$_invoke$arity$2 ? fexpr__67103.cljs$core$IFn$_invoke$arity$2(schema,options__$1) : fexpr__67103.call(null,schema,options__$1));
})();
var G__67095 = schema;
var G__67096 = options__$1;
return (malli.transform.__GT_interceptor.cljs$core$IFn$_invoke$arity$3 ? malli.transform.__GT_interceptor.cljs$core$IFn$_invoke$arity$3(G__67094,G__67095,G__67096) : malli.transform.__GT_interceptor.call(null,G__67094,G__67095,G__67096));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var interceptor = temp__5751__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_interceptor,new cljs.core.Keyword(null,"compile","compile",608186429)),interceptor], 0));
} else {
return null;
}
} else {
if(((cljs.core.map_QMARK_(_QMARK_interceptor)) && (((cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"enter","enter",1792452624))) || (cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"leave","leave",1022579443))))))){
return _QMARK_interceptor;
} else {
if(cljs.core.coll_QMARK_(_QMARK_interceptor)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p__67110,p__67111){
var map__67112 = p__67110;
var map__67112__$1 = cljs.core.__destructure_map(map__67112);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67112__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67112__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
var map__67113 = p__67111;
var map__67113__$1 = cljs.core.__destructure_map(map__67113);
var new_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67113__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var new_leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67113__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
var enter__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = enter;
if(cljs.core.truth_(and__4210__auto__)){
return new_enter;
} else {
return and__4210__auto__;
}
})())?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new_enter,enter):(function (){var or__4212__auto__ = enter;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new_enter;
}
})());
var leave__$1 = (cljs.core.truth_((function (){var and__4210__auto__ = leave;
if(cljs.core.truth_(and__4210__auto__)){
return new_leave;
} else {
return and__4210__auto__;
}
})())?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new_leave,leave):(function (){var or__4212__auto__ = leave;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new_leave;
}
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),enter__$1,new cljs.core.Keyword(null,"leave","leave",1022579443),leave__$1], null);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__67086_SHARP_){
return (malli.transform.__GT_interceptor.cljs$core$IFn$_invoke$arity$3 ? malli.transform.__GT_interceptor.cljs$core$IFn$_invoke$arity$3(p1__67086_SHARP_,schema,options) : malli.transform.__GT_interceptor.call(null,p1__67086_SHARP_,schema,options));
}),_QMARK_interceptor));
} else {
if((_QMARK_interceptor == null)){
return null;
} else {
return malli.core.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.transform","invalid-transformer","malli.transform/invalid-transformer",-1717093616),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),_QMARK_interceptor], null));

}
}
}
}
}
});
malli.transform.transformer = (function malli$transform$transformer(var_args){
var args__4824__auto__ = [];
var len__4818__auto___67346 = arguments.length;
var i__4819__auto___67347 = (0);
while(true){
if((i__4819__auto___67347 < len__4818__auto___67346)){
args__4824__auto__.push((arguments[i__4819__auto___67347]));

var G__67348 = (i__4819__auto___67347 + (1));
i__4819__auto___67347 = G__67348;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_transformers){
var __GT_data = (function (ts,default$,name,key){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),ts,new cljs.core.Keyword(null,"default","default",-1987822328),default$,new cljs.core.Keyword(null,"key","key",-1516042587),(cljs.core.truth_(name)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')):null)], null);
});
var __GT_eval = (function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (x__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x__$1,k,malli.core.eval(v));
}),x,x);
} else {
return malli.core.eval(x);
}
});
var __GT_chain = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(malli.core._transformer_chain,malli.core.into_transformer);
var chain = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__67123_SHARP_){
if(cljs.core.map_QMARK_(p1__67123_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67123_SHARP_], null);
} else {
return __GT_chain(p1__67123_SHARP_);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,_QMARK_transformers)], 0)));
var chain_SINGLEQUOTE_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67124_SHARP_){
var name = (function (){var G__67156 = p1__67124_SHARP_;
var G__67156__$1 = (((G__67156 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__67156));
if((G__67156__$1 == null)){
return null;
} else {
return cljs.core.name(G__67156__$1);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decode","decode",-1306165281),__GT_data(new cljs.core.Keyword(null,"decoders","decoders",1132818244).cljs$core$IFn$_invoke$arity$1(p1__67124_SHARP_),new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161).cljs$core$IFn$_invoke$arity$1(p1__67124_SHARP_),name,"decode"),new cljs.core.Keyword(null,"encode","encode",-1753429702),__GT_data(new cljs.core.Keyword(null,"encoders","encoders",-111722908).cljs$core$IFn$_invoke$arity$1(p1__67124_SHARP_),new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207).cljs$core$IFn$_invoke$arity$1(p1__67124_SHARP_),name,"encode")], null);
}),chain);
if(cljs.core.seq(chain)){
if((typeof malli !== 'undefined') && (typeof malli.transform !== 'undefined') && (typeof malli.transform.t_malli$transform67161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.core.Transformer}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.transform.t_malli$transform67161 = (function (_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,meta67162){
this._QMARK_transformers = _QMARK_transformers;
this.__GT_data = __GT_data;
this.__GT_eval = __GT_eval;
this.__GT_chain = __GT_chain;
this.chain = chain;
this.chain_SINGLEQUOTE_ = chain_SINGLEQUOTE_;
this.meta67162 = meta67162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.transform.t_malli$transform67161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67163,meta67162__$1){
var self__ = this;
var _67163__$1 = this;
return (new malli.transform.t_malli$transform67161(self__._QMARK_transformers,self__.__GT_data,self__.__GT_eval,self__.__GT_chain,self__.chain,self__.chain_SINGLEQUOTE_,meta67162__$1));
}));

(malli.transform.t_malli$transform67161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67163){
var self__ = this;
var _67163__$1 = this;
return self__.meta67162;
}));

(malli.transform.t_malli$transform67161.prototype.malli$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(malli.transform.t_malli$transform67161.prototype.malli$core$Transformer$_transformer_chain$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.chain;
}));

(malli.transform.t_malli$transform67161.prototype.malli$core$Transformer$_value_transformer$arity$4 = (function (_,schema,method,options){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__67172){
var map__67173 = p__67172;
var map__67173__$1 = cljs.core.__destructure_map(map__67173);
var map__67174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67173__$1,method);
var map__67174__$1 = cljs.core.__destructure_map(map__67174);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67174__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67174__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67174__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var temp__5751__auto__ = (function (){var or__4212__auto__ = (function (){var G__67176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),key);
if((G__67176 == null)){
return null;
} else {
return (self__.__GT_eval.cljs$core$IFn$_invoke$arity$1 ? self__.__GT_eval.cljs$core$IFn$_invoke$arity$1(G__67176) : self__.__GT_eval.call(null,G__67176));
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(transformers,malli.core.name.cljs$core$IFn$_invoke$arity$1(schema));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return default$;
}
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var _QMARK_interceptor = temp__5751__auto__;
var interceptor = malli.transform.__GT_interceptor(_QMARK_interceptor,schema,options);
if((acc == null)){
return interceptor;
} else {
return malli.transform.__GT_interceptor(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,interceptor], null),schema,options);
}
} else {
return acc;
}
}),null,self__.chain_SINGLEQUOTE_);
}));

(malli.transform.t_malli$transform67161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?transformers","?transformers",1611212010,null),new cljs.core.Symbol(null,"->data","->data",912474639,null),new cljs.core.Symbol(null,"->eval","->eval",1090195269,null),new cljs.core.Symbol(null,"->chain","->chain",923961567,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),new cljs.core.Symbol(null,"chain'","chain'",-156051191,null),new cljs.core.Symbol(null,"meta67162","meta67162",921835675,null)], null);
}));

(malli.transform.t_malli$transform67161.cljs$lang$type = true);

(malli.transform.t_malli$transform67161.cljs$lang$ctorStr = "malli.transform/t_malli$transform67161");

(malli.transform.t_malli$transform67161.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"malli.transform/t_malli$transform67161");
}));

/**
 * Positional factory function for malli.transform/t_malli$transform67161.
 */
malli.transform.__GT_t_malli$transform67161 = (function malli$transform$__GT_t_malli$transform67161(_QMARK_transformers__$1,__GT_data__$1,__GT_eval__$1,__GT_chain__$1,chain__$1,chain_SINGLEQUOTE___$1,meta67162){
return (new malli.transform.t_malli$transform67161(_QMARK_transformers__$1,__GT_data__$1,__GT_eval__$1,__GT_chain__$1,chain__$1,chain_SINGLEQUOTE___$1,meta67162));
});

}

return (new malli.transform.t_malli$transform67161(_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));

(malli.transform.transformer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.transform.transformer.cljs$lang$applyTo = (function (seq67131){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67131));
}));

malli.transform.string__GT_long = (function malli$transform$string__GT_long(x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e67188){if((e67188 instanceof Error)){
var _ = e67188;
return x;
} else {
throw e67188;

}
}} else {
return x;
}
});
malli.transform.string__GT_double = (function malli$transform$string__GT_double(x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
return x_SINGLEQUOTE_;
}
}catch (e67191){if((e67191 instanceof Error)){
var _ = e67191;
return x;
} else {
throw e67191;

}
}} else {
return x;
}
});
malli.transform.number__GT_double = (function malli$transform$number__GT_double(x){
if(typeof x === 'number'){
return x;
} else {
return x;
}
});
malli.transform.string__GT_keyword = (function malli$transform$string__GT_keyword(x){
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
malli.transform.string__GT_boolean = (function malli$transform$string__GT_boolean(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",x)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",x)){
return false;
} else {
return x;

}
}
} else {
return x;
}
});
malli.transform.string__GT_uuid = (function malli$transform$string__GT_uuid(x){
if(typeof x === 'string'){
try{if(cljs.core.truth_(cljs.core.re_find(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,x))){
return cljs.core.uuid(x);
} else {
return x;
}
}catch (e67210){if((e67210 instanceof Error)){
var _ = e67210;
return x;
} else {
throw e67210;

}
}} else {
return x;
}
});
malli.transform.string__GT_date = (function malli$transform$string__GT_date(x){
if(typeof x === 'string'){
try{return (new Date(goog.date.UtcDateTime.fromIsoString(x).getTime()));
}catch (e67217){if((e67217 instanceof Error)){
var _ = e67217;
return x;
} else {
throw e67217;

}
}} else {
return x;
}
});
malli.transform.date__GT_string = (function malli$transform$date__GT_string(x){
if(cljs.core.inst_QMARK_(x)){
try{return x.toISOString();
}catch (e67226){if((e67226 instanceof Error)){
var _ = e67226;
return x;
} else {
throw e67226;

}
}} else {
return x;
}
});
malli.transform.string__GT_symbol = (function malli$transform$string__GT_symbol(x){
if(typeof x === 'string'){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
malli.transform.string__GT_nil = (function malli$transform$string__GT_nil(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",x)){
return null;
} else {
return x;
}
});
malli.transform.any__GT_string = (function malli$transform$any__GT_string(x){
if((!((x == null)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
});
malli.transform.any__GT_any = (function malli$transform$any__GT_any(x){
return x;
});
malli.transform.coerce_map_keys = (function malli$transform$coerce_map_keys(transform){
return (function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__67243){
var vec__67244 = p__67243;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67244,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67244,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(k) : transform.call(null,k)),v], null);
})),x);
} else {
return x;
}
});
});
malli.transform._PLUS_json_decoders_PLUS_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Symbol(null,"double?","double?",-2146564276,null)],[malli.transform.string__GT_keyword,malli.transform.string__GT_uuid,malli.transform.string__GT_date,malli.transform.string__GT_keyword,malli.transform.string__GT_keyword,malli.transform.string__GT_symbol,malli.transform.string__GT_keyword,malli.transform.string__GT_keyword,malli.transform.string__GT_symbol,malli.transform.coerce_map_keys(malli.core.keyword__GT_string),malli.transform.string__GT_keyword,malli.transform.string__GT_symbol,malli.transform.number__GT_double]);
malli.transform._PLUS_json_encoders_PLUS_ = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),malli.core.keyword__GT_string,new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),malli.core.keyword__GT_string,new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),malli.core.keyword__GT_string,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),malli.transform.any__GT_string,new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),malli.transform.any__GT_string,new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),malli.transform.any__GT_string,new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),malli.transform.any__GT_string,new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),malli.transform.date__GT_string], null);
malli.transform._PLUS_string_decoders_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform._PLUS_json_decoders_PLUS_,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)],[malli.transform.string__GT_boolean,malli.transform.string__GT_long,malli.transform.string__GT_long,malli.transform.string__GT_long,malli.transform.string__GT_long,malli.transform.string__GT_double,malli.transform.string__GT_boolean,malli.transform.string__GT_long,malli.transform.string__GT_long,malli.transform.string__GT_long,malli.transform.string__GT_long,malli.transform.string__GT_long,malli.transform.string__GT_boolean,malli.transform.string__GT_double,malli.transform.string__GT_double,malli.transform.string__GT_long,malli.transform.string__GT_long,malli.transform.string__GT_long])], 0));
malli.transform._PLUS_string_encoders_PLUS_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform._PLUS_json_encoders_PLUS_,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"double","double",-1769548886,null),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)],[malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string,malli.transform.any__GT_string])], 0));
malli.transform.json_transformer = (function malli$transform$json_transformer(){
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoders","decoders",1132818244),malli.transform._PLUS_json_decoders_PLUS_,new cljs.core.Keyword(null,"encoders","encoders",-111722908),malli.transform._PLUS_string_encoders_PLUS_], null)], 0));
});
malli.transform.string_transformer = (function malli$transform$string_transformer(){
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"decoders","decoders",1132818244),malli.transform._PLUS_string_decoders_PLUS_,new cljs.core.Keyword(null,"encoders","encoders",-111722908),malli.transform._PLUS_string_encoders_PLUS_], null)], 0));
});
malli.transform.strip_extra_keys_transformer = (function malli$transform$strip_extra_keys_transformer(var_args){
var G__67272 = arguments.length;
switch (G__67272) {
case 0:
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1 = (function (p__67276){
var map__67277 = p__67276;
var map__67277__$1 = cljs.core.__destructure_map(map__67277);
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67277__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.true_QMARK_),new cljs.core.Keyword(null,"closed","closed",-919675359),malli.core.properties));
var transform = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(schema) : accept.call(null,schema)))){
var temp__5751__auto__ = (function (){var G__67284 = schema;
var G__67284__$1 = (((G__67284 == null))?null:malli.core.map_entries.cljs$core$IFn$_invoke$arity$1(G__67284));
var G__67284__$2 = (((G__67284__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,G__67284__$1));
var G__67284__$3 = (((G__67284__$2 == null))?null:cljs.core.seq(G__67284__$2));
if((G__67284__$3 == null)){
return null;
} else {
return cljs.core.set(G__67284__$3);
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var ks = temp__5751__auto__;
return (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
if(cljs.core.not((ks.cljs$core$IFn$_invoke$arity$1 ? ks.cljs$core$IFn$_invoke$arity$1(k) : ks.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),x,cljs.core.keys(x));
});
} else {
return null;
}
} else {
return null;
}
})], null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),transform], null),new cljs.core.Keyword(null,"encoders","encoders",-111722908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),transform], null)], null)], 0));
}));

(malli.transform.strip_extra_keys_transformer.cljs$lang$maxFixedArity = 1);

malli.transform.key_transformer = (function malli$transform$key_transformer(p__67294){
var map__67295 = p__67294;
var map__67295__$1 = cljs.core.__destructure_map(map__67295);
var decode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67295__$1,new cljs.core.Keyword(null,"decode","decode",-1306165281));
var encode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67295__$1,new cljs.core.Keyword(null,"encode","encode",-1753429702));
var transform = (function (f){
if(cljs.core.truth_(f)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),(function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.empty(x),x);
} else {
return x;
}
})], null);
} else {
return null;
}
});
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),transform(decode)], null),new cljs.core.Keyword(null,"encoders","encoders",-111722908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),transform(encode)], null)], null)], 0));
});
malli.transform.default_value_transformer = (function malli$transform$default_value_transformer(){
var get_default = (function (schema){
var G__67309 = schema;
var G__67309__$1 = (((G__67309 == null))?null:malli.core.properties.cljs$core$IFn$_invoke$arity$1(G__67309));
if((G__67309__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(G__67309__$1);
}
});
var set_default = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var temp__5751__auto__ = get_default(schema);
if(cljs.core.truth_(temp__5751__auto__)){
var default$ = temp__5751__auto__;
return (function (x){
if((x == null)){
return default$;
} else {
return x;
}
});
} else {
return null;
}
})], null);
var add_defaults = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var entries = malli.core.map_entries.cljs$core$IFn$_invoke$arity$1(schema);
var defaults = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__67317){
var vec__67318 = p__67317;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67318,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67318,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67318,(2),null);
var temp__5751__auto__ = get_default(v);
if(cljs.core.truth_(temp__5751__auto__)){
var default$ = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,default$], null);
} else {
return null;
}
}),entries));
if(cljs.core.seq(defaults)){
return (function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,k,v){
if((!(cljs.core.contains_QMARK_(x,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
} else {
return acc;
}
}),x,defaults);
} else {
return x;
}
});
} else {
return null;
}
})], null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161),set_default,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),set_default], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),add_defaults], null),new cljs.core.Keyword(null,"encoders","encoders",-111722908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),add_defaults], null)], null)], 0));
});
malli.transform.collection_transformer = (function malli$transform$collection_transformer(){
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("malli.transform","collection","malli.transform/collection",-1007623639)], null)], 0));
});

//# sourceMappingURL=malli.transform.js.map
