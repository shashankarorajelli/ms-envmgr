goog.provide('malli.edn');
malli.edn.write_string = (function malli$edn$write_string(var_args){
var G__67085 = arguments.length;
switch (G__67085) {
case 1:
return malli.edn.write_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.edn.write_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.edn.write_string.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.edn.write_string.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.edn.write_string.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.form.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,options)], 0));
}));

(malli.edn.write_string.cljs$lang$maxFixedArity = 2);

malli.edn.read_string = (function malli$edn$read_string(var_args){
var G__67105 = arguments.length;
switch (G__67105) {
case 1:
return malli.edn.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.edn.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.edn.read_string.cljs$core$IFn$_invoke$arity$1 = (function (form){
return malli.edn.read_string.cljs$core$IFn$_invoke$arity$2(form,null);
}));

(malli.edn.read_string.cljs$core$IFn$_invoke$arity$2 = (function (form,options){
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentArrayMap(null, 1, ["#",new cljs.core.PersistentArrayMap(null, 1, ["\"",(function (p1__67090_SHARP_){
return cljs.core.re_pattern(p1__67090_SHARP_);
})], null)], null)], null)),options);
}));

(malli.edn.read_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.edn.js.map
