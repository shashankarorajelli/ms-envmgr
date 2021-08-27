goog.provide('malli.swagger');
if((typeof malli !== 'undefined') && (typeof malli.swagger !== 'undefined') && (typeof malli.swagger.accept !== 'undefined')){
} else {
malli.swagger.accept = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("malli.swagger","default","malli.swagger/default",799472521)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67330 = cljs.core.get_global_hierarchy;
return (fexpr__67330.cljs$core$IFn$_invoke$arity$0 ? fexpr__67330.cljs$core$IFn$_invoke$arity$0() : fexpr__67330.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.swagger","accept"),(function (name,_schema,_children,_options){
return name;
}),new cljs.core.Keyword("malli.swagger","default","malli.swagger/default",799472521),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.swagger","default","malli.swagger/default",799472521),(function (name,schema,children,options){
return malli.json_schema.accept.cljs$core$IFn$_invoke$arity$4(name,schema,children,options);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"float?","float?",673884616,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"float"], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"double?","double?",-2146564276,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (_,___$1,children,___$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),new cljs.core.Keyword(null,"x-allOf","x-allOf",-1697874638),children);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (_,___$1,children,___$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),children);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi","multi",-190293005),(function (_,___$1,children,___$2){
var cs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.last,children);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(cs),new cljs.core.Keyword(null,"x-anyOf","x-anyOf",-1948185231),cs);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"maybe","maybe",-314397560),(function (_,___$1,children,p__67349){
var map__67350 = p__67349;
var map__67350__$1 = cljs.core.__destructure_map(map__67350);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67350__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67350__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var k = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"parameter","parameter",1978789597))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(in$,new cljs.core.Keyword(null,"body","body",-2049205669)))))?new cljs.core.Keyword(null,"allowEmptyValue","allowEmptyValue",-1066530890):new cljs.core.Keyword(null,"x-nullable","x-nullable",1492681247));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(children),k,true);
}));
malli.swagger.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"x-items","x-items",-710213657),children], null);
}));
malli.swagger._swagger_visitor = (function malli$swagger$_swagger_visitor(schema,children,options){
var or__4212__auto__ = malli.json_schema.maybe_prefix(schema,new cljs.core.Keyword(null,"swagger","swagger",-79684232));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = malli.json_schema.maybe_prefix(schema,new cljs.core.Keyword(null,"json-schema","json-schema",389191695));
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.swagger.accept.cljs$core$IFn$_invoke$arity$4(malli.core.name.cljs$core$IFn$_invoke$arity$1(schema),schema,children,options),malli.json_schema.json_schema_props(schema,"swagger")], 0));
}
}
});
malli.swagger.transform = (function malli$swagger$transform(var_args){
var G__67361 = arguments.length;
switch (G__67361) {
case 1:
return malli.swagger.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.swagger.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.swagger.transform.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.swagger.transform.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.swagger.transform.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.accept.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.swagger._swagger_visitor,options);
}));

(malli.swagger.transform.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.swagger.js.map
