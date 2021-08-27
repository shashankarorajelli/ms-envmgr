goog.provide('malli.json_schema');
malli.json_schema.unlift_keys = (function malli$json_schema$unlift_keys(m,ns_str){
return cljs.core.reduce_kv((function (p1__67074_SHARP_,p2__67073_SHARP_,p3__67075_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,cljs.core.namespace(p2__67073_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__67074_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p2__67073_SHARP_)),p3__67075_SHARP_);
} else {
return p1__67074_SHARP_;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
malli.json_schema.maybe_prefix = (function malli$json_schema$maybe_prefix(schema,prefix){
var G__67077 = schema;
var G__67077__$1 = (((G__67077 == null))?null:malli.core.properties.cljs$core$IFn$_invoke$arity$1(G__67077));
if((G__67077__$1 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__67077__$1,prefix);
}
});
malli.json_schema.json_schema_props = (function malli$json_schema$json_schema_props(schema,prefix){
var $ = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys($,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"default","default",-1987822328)], null)),malli.json_schema.unlift_keys($,prefix)], 0));
});
if((typeof malli !== 'undefined') && (typeof malli.json_schema !== 'undefined') && (typeof malli.json_schema.accept !== 'undefined')){
} else {
malli.json_schema.accept = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("malli.json-schema","default","malli.json-schema/default",-421449099)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67088 = cljs.core.get_global_hierarchy;
return (fexpr__67088.cljs$core$IFn$_invoke$arity$0 ? fexpr__67088.cljs$core$IFn$_invoke$arity$0() : fexpr__67088.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("malli.json-schema","accept"),(function (name,_schema,_children,_options){
return name;
}),new cljs.core.Keyword("malli.json-schema","default","malli.json-schema/default",-421449099),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.json-schema","default","malli.json-schema/default",-421449099),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"any?","any?",-318999933,null),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"some?","some?",234752293,null),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"number?","number?",-1747282210,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"int?","int?",1799729645,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64",new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(1)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64",new cljs.core.Keyword(null,"maximum","maximum",573880714),(-1)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"format","format",-1306924766),"int64",new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"float?","float?",673884616,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"number"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"double?","double?",-2146564276,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"number"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"string?","string?",-1129175764,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uuid"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"uri?","uri?",2029475116,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uri"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"decimal?","decimal?",687666240,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"date-time"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"indexed?","indexed?",1234610384,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"map?","map?",-1780568534,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"object"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"list?","list?",-1494629,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"char?","char?",-1072221244,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"set?","set?",1636014792,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"uniqueItems","uniqueItems",-826722268),true], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"null"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"false?","false?",-1522377573,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"true?","true?",-1600332395,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"zero?","zero?",325758897,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"object"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"empty?","empty?",76408555,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"maxItems","maxItems",576652798),(0),new cljs.core.Keyword(null,"minItems","minItems",1950622069),(0)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"associative?","associative?",-141666771,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"object"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"array"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ratio?","ratio?",-498643049,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"bytes?","bytes?",-1745721485,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"byte"], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">",">",-555517146),(function (_,___$1,p__67198,___$2){
var vec__67200 = p__67198;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67200,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double",new cljs.core.Keyword(null,"exclusiveMinimum","exclusiveMinimum",-869557322),value], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">=",">=",-623615505),(function (_,___$1,p__67205,___$2){
var vec__67206 = p__67205;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67206,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double",new cljs.core.Keyword(null,"minimum","minimum",-1621006059),value], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<","<",-646864291),(function (_,___$1,p__67212,___$2){
var vec__67213 = p__67212;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67213,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double",new cljs.core.Keyword(null,"exclusiveMaximum","exclusiveMaximum",1883434466),value], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<=","<=",-395636158),(function (_,___$1,p__67218,___$2){
var vec__67219 = p__67218;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67219,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double",new cljs.core.Keyword(null,"maximum","maximum",573880714),value], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=","=",1152933628),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not=","not=",-173995323),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allOf","allOf",857821143),children], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anyOf","anyOf",-1046092155),children], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (_,schema,children,___$1){
var required = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,new cljs.core.Keyword(null,"optional","optional",2053951509),cljs.core.second),children));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"object",new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__67232){
var vec__67233 = p__67232;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67233,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67233,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67233,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,s], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([children], 0))),new cljs.core.Keyword(null,"required","required",1807647006),required], null),malli.json_schema.json_schema_props(schema,"json-schema")], 0));
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi","multi",-190293005),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oneOf","oneOf",1209080187),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.last,children)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"object",new cljs.core.Keyword(null,"additionalProperties","additionalProperties",-1203767392),cljs.core.second(children)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(children)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(children)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(children)], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(children),new cljs.core.Keyword(null,"uniqueItems","uniqueItems",-826722268),true], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"enum","enum",1679018432),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),children], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"maybe","maybe",-314397560),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oneOf","oneOf",1209080187),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(children,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"null"], null))], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),children,new cljs.core.Keyword(null,"additionalItems","additionalItems",630706986),false], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"re","re",228676202),(function (_,schema,___$1,options){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options))], null);
}));
malli.json_schema.accept.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
malli.json_schema._json_schema_visitor = (function malli$json_schema$_json_schema_visitor(schema,children,options){
var or__4212__auto__ = malli.json_schema.maybe_prefix(schema,new cljs.core.Keyword(null,"json-schema","json-schema",389191695));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.json_schema.accept.cljs$core$IFn$_invoke$arity$4(malli.core.name.cljs$core$IFn$_invoke$arity$1(schema),schema,children,options),malli.json_schema.json_schema_props(schema,"json-schema")], 0));
}
});
malli.json_schema.transform = (function malli$json_schema$transform(var_args){
var G__67288 = arguments.length;
switch (G__67288) {
case 1:
return malli.json_schema.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.json_schema.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.json_schema.transform.cljs$core$IFn$_invoke$arity$1 = (function (_QMARK_schema){
return malli.json_schema.transform.cljs$core$IFn$_invoke$arity$2(_QMARK_schema,null);
}));

(malli.json_schema.transform.cljs$core$IFn$_invoke$arity$2 = (function (_QMARK_schema,options){
return malli.core.accept.cljs$core$IFn$_invoke$arity$3(_QMARK_schema,malli.json_schema._json_schema_visitor,options);
}));

(malli.json_schema.transform.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.json_schema.js.map
