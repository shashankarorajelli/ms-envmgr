goog.provide('malli.util');
malli.util.equals = (function malli$util$equals(var_args){
var G__67072 = arguments.length;
switch (G__67072) {
case 2:
return malli.util.equals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.equals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.equals.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.equals.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.equals.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema1,options),malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema2,options));
}));

(malli.util.equals.cljs$lang$maxFixedArity = 3);

malli.util.simplify_map_entry = (function malli$util$simplify_map_entry(p__67078){
var vec__67079 = p__67078;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67079,(0),null);
var _QMARK_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67079,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67079,(2),null);
if(cljs.core.not(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,_QMARK_p], null);
} else {
if(cljs.core.truth_((function (){var and__4210__auto__ = _QMARK_p;
if(cljs.core.truth_(and__4210__auto__)){
return ((new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === false) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(_QMARK_p))));
} else {
return and__4210__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
} else {
if(cljs.core.not(cljs.core.seq(_QMARK_p))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
} else {
if(new cljs.core.Keyword(null,"optional","optional",2053951509).cljs$core$IFn$_invoke$arity$1(_QMARK_p) === false){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_p,new cljs.core.Keyword(null,"optional","optional",2053951509)),s], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,_QMARK_p,s], null);

}
}
}
}
});
malli.util._entry = (function malli$util$_entry(p__67091,p__67092,merge_required,merge,options){
var vec__67097 = p__67091;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67097,(0),null);
var _QMARK_p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67097,(1),null);
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67097,(2),null);
var e1 = vec__67097;
var vec__67100 = p__67092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67100,(0),null);
var _QMARK_p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67100,(1),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67100,(2),null);
var e2 = vec__67100;
var required = (function (){var G__67107 = malli.core.required_map_entry_QMARK_(e1);
var G__67108 = malli.core.required_map_entry_QMARK_(e2);
return (merge_required.cljs$core$IFn$_invoke$arity$2 ? merge_required.cljs$core$IFn$_invoke$arity$2(G__67107,G__67108) : merge_required.call(null,G__67107,G__67108));
})();
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_QMARK_p1,_QMARK_p2], 0));
return malli.util.simplify_map_entry(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p,new cljs.core.Keyword(null,"optional","optional",2053951509),cljs.core.not(required)),(merge.cljs$core$IFn$_invoke$arity$3 ? merge.cljs$core$IFn$_invoke$arity$3(s1,s2,options) : merge.call(null,s1,s2,options))], null));
});
/**
 * Merges two schemas into one with the following rules:
 * 
 *   * if either schemas is `nil`, the other one is used, regardless of value
 *   * with two :map schemas, both keys and values are merged
 *   * with two :map entries, `:merge-entries` fn is used (default last one wins)
 *   * with any other schemas, `:merge-default` fn is used (default last one wins)
 * 
 *   | key               | description
 *   | ------------------|-------------
 *   | `:merge-default`  | `schema1 schema2 options -> schema` fn to merge unknown entries
 *   | `:merge-required` | `boolean boolean -> boolean` fn to resolve how required keys are merged
 */
malli.util.merge = (function malli$util$merge(var_args){
var G__67119 = arguments.length;
switch (G__67119) {
case 2:
return malli.util.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.merge.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.merge.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
var vec__67126 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_schema1)?malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema1,options):null),(cljs.core.truth_(_QMARK_schema2)?malli.core.schema.cljs$core$IFn$_invoke$arity$2(_QMARK_schema2,options):null)], null);
var schema1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67126,(0),null);
var schema2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67126,(1),null);
var schemas = vec__67126;
var map__67129 = options;
var map__67129__$1 = cljs.core.__destructure_map(map__67129);
var merge_default = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67129__$1,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083),(function (_,s2,___$1){
return s2;
}));
var merge_required = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__67129__$1,new cljs.core.Keyword(null,"merge-required","merge-required",75277811),(function (_,r2){
return r2;
}));
if(cljs.core.not(schema1)){
return schema2;
} else {
if(cljs.core.not(schema2)){
return schema1;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.name.cljs$core$IFn$_invoke$arity$1(schema1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.name.cljs$core$IFn$_invoke$arity$1(schema2)], 0))){
return (merge_default.cljs$core$IFn$_invoke$arity$3 ? merge_default.cljs$core$IFn$_invoke$arity$3(schema1,schema2,options) : merge_default.call(null,schema1,schema2,options));
} else {
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema1),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema2)], 0));
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__67143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null);
if(cljs.core.truth_(p)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__67143,p);
} else {
return G__67143;
}
})(),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__67145,p__67146){
var map__67149 = p__67145;
var map__67149__$1 = cljs.core.__destructure_map(map__67149);
var acc = map__67149__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67149__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vec__67150 = p__67146;
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67150,(0),null);
var e2 = vec__67150;
if(cljs.core.truth_((keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(k2) : keys.call(null,k2)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_SINGLEQUOTE_,p__67157){
var vec__67158 = p__67157;
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67158,(0),null);
var e1 = vec__67158;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_SINGLEQUOTE_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2))?malli.util._entry(e1,e2,merge_required,malli.util.merge,options):e1));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(acc)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.conj,e2),new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.conj,k2);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(malli.core.map_entries,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schemas], 0))))),options);

}
}
}
}));

(malli.util.merge.cljs$lang$maxFixedArity = 3);

/**
 * Union of two schemas. See [[merge]] for more details.
 */
malli.util.union = (function malli$util$union(var_args){
var G__67167 = arguments.length;
switch (G__67167) {
case 2:
return malli.util.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return malli.util.union.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.util.union.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema1,_QMARK_schema2){
return malli.util.union.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,null);
}));

(malli.util.union.cljs$core$IFn$_invoke$arity$3 = (function (_QMARK_schema1,_QMARK_schema2,options){
var merge_default = (function (s1,s2,options__$1){
if(cljs.core.truth_(malli.util.equals.cljs$core$IFn$_invoke$arity$2(s1,s2))){
return s1;
} else {
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),s1,s2], null),options__$1);
}
});
var merge_required = (function (r1,r2){
var and__4210__auto__ = r1;
if(cljs.core.truth_(and__4210__auto__)){
return r2;
} else {
return and__4210__auto__;
}
});
return malli.util.merge.cljs$core$IFn$_invoke$arity$3(_QMARK_schema1,_QMARK_schema2,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"merge-default","merge-default",1152742083),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,merge_default)),new cljs.core.Keyword(null,"merge-required","merge-required",75277811),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,merge_required)));
}));

(malli.util.union.cljs$lang$maxFixedArity = 3);

/**
 * Returns a Schema instance with updated properties.
 */
malli.util.update_properties = (function malli$util$update_properties(var_args){
var args__4824__auto__ = [];
var len__4818__auto___67258 = arguments.length;
var i__4819__auto___67259 = (0);
while(true){
if((i__4819__auto___67259 < len__4818__auto___67258)){
args__4824__auto__.push((arguments[i__4819__auto___67259]));

var G__67260 = (i__4819__auto___67259 + (1));
i__4819__auto___67259 = G__67260;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic = (function (schema,f,args){
var schema__$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$1(schema);
var properties = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1),args);
return malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(malli.core.name.cljs$core$IFn$_invoke$arity$1(schema__$1),((cljs.core.seq(properties))?properties:null),malli.core.children.cljs$core$IFn$_invoke$arity$1(schema__$1),malli.core.options.cljs$core$IFn$_invoke$arity$1(schema__$1));
}));

(malli.util.update_properties.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(malli.util.update_properties.cljs$lang$applyTo = (function (seq67181){
var G__67182 = cljs.core.first(seq67181);
var seq67181__$1 = cljs.core.next(seq67181);
var G__67183 = cljs.core.first(seq67181__$1);
var seq67181__$2 = cljs.core.next(seq67181__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67182,G__67183,seq67181__$2);
}));

/**
 * Closes recursively all :map schemas by adding `{:closed true}`
 *   property, unless schema explicitely open with `{:closed false}`
 */
malli.util.closed_schema = (function malli$util$closed_schema(schema){
return malli.core.accept.cljs$core$IFn$_invoke$arity$2(schema,malli.core.schema_visitor((function (schema__$1){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.name.cljs$core$IFn$_invoke$arity$1(schema__$1))) && ((!(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1)) === false))))){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed","closed",-919675359),true], 0));
} else {
return schema__$1;
}
})));
});
/**
 * Closes recursively all :map schemas by removing `:closed`
 *   property, unless schema explicitely open with `{:closed false}`
 */
malli.util.open_schema = (function malli$util$open_schema(schema){
return malli.core.accept.cljs$core$IFn$_invoke$arity$2(schema,malli.core.schema_visitor((function (schema__$1){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),malli.core.name.cljs$core$IFn$_invoke$arity$1(schema__$1))) && ((!(new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1)) === false))))){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"closed","closed",-919675359)], 0));
} else {
return schema__$1;
}
})));
});

//# sourceMappingURL=malli.util.js.map
