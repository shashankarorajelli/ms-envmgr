goog.provide('edamame.impl.parser');
edamame.impl.parser.parse_comment = (function edamame$impl$parser$parse_comment(reader){
cljs.tools.reader.reader_types.read_line(reader);

return reader;
});
/**
 * Throw reader exception, including line line/column. line/column is
 *   read from the reader but it can be overriden by passing loc
 *   optional parameter.
 */
edamame.impl.parser.throw_reader = (function edamame$impl$parser$throw_reader(var_args){
var G__64318 = arguments.length;
switch (G__64318) {
case 2:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$2 = (function (reader,msg){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(reader,msg,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3 = (function (reader,msg,data){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(reader,msg,data,null);
}));

(edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4 = (function (reader,msg,data,loc){
var c = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_column_number(reader));
var l = new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$2(loc,cljs.tools.reader.reader_types.get_line_number(reader));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),"]"].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),l,new cljs.core.Keyword(null,"col","col",-1959363084),c], null),data], 0)));
}));

(edamame.impl.parser.throw_reader.cljs$lang$maxFixedArity = 4);

edamame.impl.parser.parse_to_delimiter = (function edamame$impl$parser$parse_to_delimiter(var_args){
var G__64334 = arguments.length;
switch (G__64334) {
case 3:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3 = (function (ctx,reader,delimiter){
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4(ctx,reader,delimiter,cljs.core.PersistentVector.EMPTY);
}));

(edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$4 = (function (ctx,reader,delimiter,into){
var row = reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null);
var col = reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null);
var opened = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),delimiter,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"char","char",-641587586),opened,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)], 0));
var vals = cljs.core.transient$(into);
while(true){
var next_val = (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,reader) : edamame.impl.parser.parse_next.call(null,ctx__$1,reader));
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),next_val)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$2(reader,["EOF while reading, expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter)," to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(opened)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''));
} else {
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),next_val)){
return cljs.core.persistent_BANG_(vals);
} else {
var G__64564 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vals,next_val);
vals = G__64564;
continue;

}
}
break;
}
}));

(edamame.impl.parser.parse_to_delimiter.cljs$lang$maxFixedArity = 4);

edamame.impl.parser.parse_list = (function edamame$impl$parser$parse_list(ctx,reader){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,")"));
});
/**
 * Modeled after tools.reader/read-regex.
 */
edamame.impl.parser.read_regex_pattern = (function edamame$impl$parser$read_regex_pattern(_ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var sb = (new goog.string.StringBuffer());
var ch = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
while(true){
if(("\"" === ch)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if((ch == null)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$2(reader,"Error while parsing regex");
} else {
sb.append(ch);

if(("\\" === ch)){
var ch_64571__$1 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if((ch_64571__$1 == null)){
edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$2(reader,"Error while parsing regex");
} else {
}

sb.append(ch_64571__$1);
} else {
}

var G__64573 = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
ch = G__64573;
continue;
}
}
break;
}
});
edamame.impl.parser.handle_dispatch = (function edamame$impl$parser$handle_dispatch(ctx,reader,c,sharp_QMARK_,f){
var regex_QMARK_ = (function (){var and__4210__auto__ = sharp_QMARK_;
if(cljs.core.truth_(and__4210__auto__)){
return ("\"" === c);
} else {
return and__4210__auto__;
}
})();
var next_val = (cljs.core.truth_(regex_QMARK_)?edamame.impl.parser.read_regex_pattern(ctx,reader):(edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader)));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(next_val) : f.call(null,next_val));
});
edamame.impl.parser.delimiter_QMARK_ = (function edamame$impl$parser$delimiter_QMARK_(c){
var G__64363 = c;
switch (G__64363) {
case "{":
case "(":
case "[":
case "\"":
return true;

break;
default:
return false;

}
});
edamame.impl.parser.location = (function edamame$impl$parser$location(reader){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),reader.cljs$tools$reader$reader_types$IndexingReader$get_line_number$arity$1(null),new cljs.core.Keyword(null,"col","col",-1959363084),reader.cljs$tools$reader$reader_types$IndexingReader$get_column_number$arity$1(null)], null);
});
edamame.impl.parser.duplicate_keys_error = (function edamame$impl$parser$duplicate_keys_error(msg,coll){
var duplicates = (function edamame$impl$parser$duplicate_keys_error_$_duplicates(seq){
var iter__4611__auto__ = (function edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__64400(s__64401){
return (new cljs.core.LazySeq(null,(function (){
var s__64401__$1 = s__64401;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__64401__$1);
if(temp__5753__auto__){
var s__64401__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__64401__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__64401__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__64403 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__64402 = (0);
while(true){
if((i__64402 < size__4610__auto__)){
var vec__64412 = cljs.core._nth(c__4609__auto__,i__64402);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64412,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64412,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__64403,id);

var G__64579 = (i__64402 + (1));
i__64402 = G__64579;
continue;
} else {
var G__64580 = (i__64402 + (1));
i__64402 = G__64580;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64403),edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__64400(cljs.core.chunk_rest(s__64401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64403),null);
}
} else {
var vec__64421 = cljs.core.first(s__64401__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64421,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64421,(1),null);
if((freq > (1))){
return cljs.core.cons(id,edamame$impl$parser$duplicate_keys_error_$_duplicates_$_iter__64400(cljs.core.rest(s__64401__$2)));
} else {
var G__64584 = cljs.core.rest(s__64401__$2);
s__64401__$1 = G__64584;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
edamame.impl.parser.throw_dup_keys = (function edamame$impl$parser$throw_dup_keys(reader,loc,kind,ks){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(reader,edamame.impl.parser.duplicate_keys_error([clojure.string.capitalize(cljs.core.name(kind))," literal contains duplicate key"].join(''),ks),null,loc);
});
edamame.impl.parser.parse_set = (function edamame$impl$parser$parse_set(ctx,reader){
var start_loc = edamame.impl.parser.location(reader);
var coll = edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var the_set = cljs.core.set(coll);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),cljs.core.count(the_set))){
} else {
edamame.impl.parser.throw_dup_keys(reader,start_loc,new cljs.core.Keyword(null,"set","set",304602554),coll);
}

return the_set;
});
edamame.impl.parser.parse_sharp = (function edamame$impl$parser$parse_sharp(ctx,reader){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var c = reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null);
var temp__5751__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),"#",c], null));
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
if(cljs.core.truth_(edamame.impl.parser.delimiter_QMARK_(c))){
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
}

return edamame.impl.parser.handle_dispatch(ctx,reader,c,true,f);
} else {
var G__64455 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__64455)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$2(reader,"Unexpected EOF.");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__64455)){
return edamame.impl.parser.parse_set(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__64455)){
return edamame.impl.parser.parse_list(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("_",G__64455)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(ctx,reader);

return (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
} else {
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,"#");

return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(ctx,reader);

}
}
}
}
}
});
edamame.impl.parser.throw_odd_map = (function edamame$impl$parser$throw_odd_map(reader,loc,elements){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$4(reader,["The map literal starting with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)))," contains ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(elements))," form(s). Map literals must contain an even number of forms."].join(''),null,loc);
});
edamame.impl.parser.parse_map = (function edamame$impl$parser$parse_map(ctx,reader){
var start_loc = edamame.impl.parser.location(reader);
var elements = edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"}");
var c = cljs.core.count(elements);
if((c > (0))){
if(cljs.core.odd_QMARK_(c)){
edamame.impl.parser.throw_odd_map(reader,start_loc,elements);
} else {
}

var ks_64596 = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),elements);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,ks_64596))){
} else {
edamame.impl.parser.throw_dup_keys(reader,start_loc,new cljs.core.Keyword(null,"map","map",1371690461),ks_64596);
}
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,elements);
});
edamame.impl.parser.parse_unquote_splice = (function edamame$impl$parser$parse_unquote_splice(){
return null;
});
edamame.impl.parser.dispatch = (function edamame$impl$parser$dispatch(p__64474,reader,path){
while(true){
var map__64477 = p__64474;
var map__64477__$1 = cljs.core.__destructure_map(map__64477);
var ctx = map__64477__$1;
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64477__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var sharp_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#"], null),path);
if(sharp_QMARK_){
return edamame.impl.parser.parse_sharp(ctx,reader);
} else {
var temp__5751__auto__ = (function (){var or__4212__auto__ = (function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,path);
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(path),v], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dispatch,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(path),new cljs.core.Keyword(null,"default","default",-1987822328)));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,v], null);
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var vec__64478 = temp__5751__auto__;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64478,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64478,(1),null);
if(cljs.core.map_QMARK_(f)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

var G__64603 = ctx;
var G__64604 = reader;
var G__64605 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,reader.cljs$tools$reader$reader_types$Reader$peek_char$arity$1(null));
p__64474 = G__64603;
reader = G__64604;
path = G__64605;
continue;
} else {
if(cljs.core.truth_(c)){
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
} else {
}

return edamame.impl.parser.handle_dispatch(ctx,reader,c,false,f);

}
} else {
var c = cljs.core.last(path);
var G__64486 = c;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__64486)){
return new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("(",G__64486)){
return edamame.impl.parser.parse_list(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("[",G__64486)){
return edamame.impl.parser.parse_to_delimiter.cljs$core$IFn$_invoke$arity$3(ctx,reader,"]");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",G__64486)){
return edamame.impl.parser.parse_map(ctx,reader);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("}",G__64486)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__64496 = temp__5753__auto__;
var map__64496__$1 = cljs.core.__destructure_map(map__64496);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64496__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64496__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64496__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("]",G__64486)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__64506 = temp__5753__auto__;
var map__64506__$1 = cljs.core.__destructure_map(map__64506);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64506__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64506__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64506__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(")",G__64486)){
var expected = new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,c)){
return edamame.impl.parser.throw_reader.cljs$core$IFn$_invoke$arity$3(reader,["Unmatched delimiter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),(cljs.core.truth_(expected)?[", expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),(function (){var temp__5753__auto__ = new cljs.core.Keyword("edamame.impl.parser","opened-delimiter","edamame.impl.parser/opened-delimiter",1199661648).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var map__64521 = temp__5753__auto__;
var map__64521__$1 = cljs.core.__destructure_map(map__64521);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var char$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64521__$1,new cljs.core.Keyword(null,"char","char",-641587586));
return [" to match ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(char$)," at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))].join('');
} else {
return null;
}
})()].join(''):null)].join(''),ctx);
} else {
reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);

return new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",G__64486)){
return edamame.impl.parser.parse_comment(reader);
} else {
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(ctx,reader);

}
}
}
}
}
}
}
}
}
}
break;
}
});
edamame.impl.parser.whitespace_QMARK_ = (function edamame$impl$parser$whitespace_QMARK_(c){
var and__4210__auto__ = c;
if(cljs.core.truth_(and__4210__auto__)){
return ((-1) < ["\r","\n","\t"," ",","].indexOf(c));
} else {
return and__4210__auto__;
}
});
edamame.impl.parser.parse_whitespace = (function edamame$impl$parser$parse_whitespace(_ctx,reader){
while(true){
var c = reader.cljs$tools$reader$reader_types$Reader$read_char$arity$1(null);
if(cljs.core.truth_(edamame.impl.parser.whitespace_QMARK_(c))){
continue;
} else {
reader.cljs$tools$reader$reader_types$IPushbackReader$unread$arity$2(null,c);

return reader;
}
break;
}
});
edamame.impl.parser.parse_next = (function edamame$impl$parser$parse_next(ctx,reader){
edamame.impl.parser.parse_whitespace(ctx,reader);

var temp__5751__auto__ = cljs.tools.reader.reader_types.peek_char(reader);
if(cljs.core.truth_(temp__5751__auto__)){
var c = temp__5751__auto__;
var loc = edamame.impl.parser.location(reader);
var obj = edamame.impl.parser.dispatch(ctx,reader,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
if((reader === obj)){
return (edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2 ? edamame.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader) : edamame.impl.parser.parse_next.call(null,ctx,reader));
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,obj))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.merge,loc);
} else {
return obj;
}
}
} else {
return new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006);
}
});
/**
 * Create reader for strings.
 */
edamame.impl.parser.string_reader = (function edamame$impl$parser$string_reader(s){
return cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
});
edamame.impl.parser.parse_string = (function edamame$impl$parser$parse_string(s,opts){
var r = edamame.impl.parser.string_reader(s);
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var v = edamame.impl.parser.parse_next(ctx,r);
if((new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006) === v)){
return null;
} else {
return v;
}
});
edamame.impl.parser.parse_string_all = (function edamame$impl$parser$parse_string_all(s,opts){
var r = edamame.impl.parser.string_reader(s);
var ctx = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword("edamame.impl.parser","expected-delimiter","edamame.impl.parser/expected-delimiter",2057965803),null);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var next_val = edamame.impl.parser.parse_next(ctx,r);
if(cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),next_val)){
return cljs.core.persistent_BANG_(ret);
} else {
var G__64639 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,next_val);
ret = G__64639;
continue;
}
break;
}
});

//# sourceMappingURL=edamame.impl.parser.js.map
