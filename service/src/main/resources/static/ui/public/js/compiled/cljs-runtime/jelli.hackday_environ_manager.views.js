goog.provide('jelli.hackday_environ_manager.views');
jelli.hackday_environ_manager.views.version_tag = (function jelli$hackday_environ_manager$views$version_tag(version){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__71246 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__71246.cljs$core$IFn$_invoke$arity$1 ? fexpr__71246.cljs$core$IFn$_invoke$arity$1(version) : fexpr__71246.call(null,version));
})())?"is-danger":"is-info")], null),version], null);
});
jelli.hackday_environ_manager.views.techops_link = (function jelli$hackday_environ_manager$views$techops_link(p__71247){
var map__71248 = p__71247;
var map__71248__$1 = cljs.core.__destructure_map(map__71248);
var link = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71248__$1,new cljs.core.Keyword(null,"link","link",-1769163468));
var friendly_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71248__$1,new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71248__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.block.tag.dropdown.is-hoverable","a.block.tag.dropdown.is-hoverable",-1009623178),jelli.hackday_environ_manager.simple_interop.new_tab_href(link),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-trigger","div.dropdown-trigger",646734844),friendly_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-menu>div.dropdown-content>div.dropdown-item","div.dropdown-menu>div.dropdown-content>div.dropdown-item",408280085),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"normal"], null)], null),description], null)], null)], null);
});
jelli.hackday_environ_manager.views.techops_link_editor = (function jelli$hackday_environ_manager$views$techops_link_editor(p__71258){
var map__71259 = p__71258;
var map__71259__$1 = cljs.core.__destructure_map(map__71259);
var link_def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71259__$1,new cljs.core.Keyword(null,"link-def","link-def",-1004269408));
var on_save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71259__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var with_let71260 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71260","with-let71260",-1787466590));
var temp__5757__auto___71377 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___71377 == null)){
} else {
var c__50045__auto___71378 = temp__5757__auto___71377;
if((with_let71260.generation === c__50045__auto___71378.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71260.generation = c__50045__auto___71378.ratomGeneration);
}

var init71261 = (with_let71260.length === (0));
var local_def = ((((init71261) || (cljs.core.not(with_let71260.hasOwnProperty((0))))))?(with_let71260[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(link_def)):(with_let71260[(0)]));
var link = ((((init71261) || (cljs.core.not(with_let71260.hasOwnProperty((1))))))?(with_let71260[(1)] = reagent.core.cursor(local_def,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468)], null))):(with_let71260[(1)]));
var friendly_name = ((((init71261) || (cljs.core.not(with_let71260.hasOwnProperty((2))))))?(with_let71260[(2)] = reagent.core.cursor(local_def,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795)], null))):(with_let71260[(2)]));
var description = ((((init71261) || (cljs.core.not(with_let71260.hasOwnProperty((3))))))?(with_let71260[(3)] = reagent.core.cursor(local_def,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544)], null))):(with_let71260[(3)]));
var playground_only_QMARK_ = ((((init71261) || (cljs.core.not(with_let71260.hasOwnProperty((4))))))?(with_let71260[(4)] = reagent.core.cursor(local_def,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground-only?","playground-only?",1856996799)], null))):(with_let71260[(4)]));
var res71262 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container>div.columns","div.container>div.columns",2101809062),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-three-fifths","div.column.is-three-fifths",-1830219941),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"label","label",1718410804),"Playground Only?",new cljs.core.Keyword(null,"class","class",-2030961996),"checkbox",new cljs.core.Keyword(null,"model","model",331153215),playground_only_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__71250_SHARP_){
return cljs.core.reset_BANG_(playground_only_QMARK_,p1__71250_SHARP_);
})], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"model","model",331153215),link,new cljs.core.Keyword(null,"width","width",-384071477),"1",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Link",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__71251_SHARP_){
return cljs.core.reset_BANG_(link,p1__71251_SHARP_);
})], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"model","model",331153215),friendly_name,new cljs.core.Keyword(null,"width","width",-384071477),"1",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Display Name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__71252_SHARP_){
return cljs.core.reset_BANG_(friendly_name,p1__71252_SHARP_);
})], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"class","class",-2030961996),"textarea",new cljs.core.Keyword(null,"model","model",331153215),description,new cljs.core.Keyword(null,"width","width",-384071477),"1",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Description",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__71253_SHARP_){
return cljs.core.reset_BANG_(description,p1__71253_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-fifth","div.column.is-one-fifth",401057644),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block","div.block",1082647483),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.techops_link,cljs.core.deref(local_def)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block>button.button.is-primary","div.block>button.button.is-primary",1429337139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__71272 = cljs.core.deref(local_def);
return (on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(G__71272) : on_save.call(null,G__71272));
})], null),"Save"], null)], null)], null);
return res71262;
});
jelli.hackday_environ_manager.views.techops_link_edit_page = (function jelli$hackday_environ_manager$views$techops_link_edit_page(){
var techops_links = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","all-techops-links","jelli.hackday-environ-manager.subs/all-techops-links",-1005097699)], null));
var return_env = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-environment","jelli.hackday-environ-manager.subs/selected-environment",65518252)], null))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"TechOps Links"], null),(function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$views$techops_link_edit_page_$_iter__71281(s__71282){
return (new cljs.core.LazySeq(null,(function (){
var s__71282__$1 = s__71282;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71282__$1);
if(temp__5753__auto__){
var s__71282__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71282__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71282__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71284 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71283 = (0);
while(true){
if((i__71283 < size__4610__auto__)){
var vec__71288 = cljs.core._nth(c__4609__auto__,i__71283);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71288,(0),null);
var link_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71288,(1),null);
cljs.core.chunk_append(b__71284,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.techops_link_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"link-def","link-def",-1004269408),link_def,new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (i__71283,vec__71288,k,link_def,c__4609__auto__,size__4610__auto__,b__71284,s__71282__$2,temp__5753__auto__,techops_links,return_env){
return (function (p1__71276_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","save-techops-link","jelli.hackday-environ-manager.events/save-techops-link",-1480463455),k,p1__71276_SHARP_,return_env], null));
});})(i__71283,vec__71288,k,link_def,c__4609__auto__,size__4610__auto__,b__71284,s__71282__$2,temp__5753__auto__,techops_links,return_env))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__71387 = (i__71283 + (1));
i__71283 = G__71387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71284),jelli$hackday_environ_manager$views$techops_link_edit_page_$_iter__71281(cljs.core.chunk_rest(s__71282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71284),null);
}
} else {
var vec__71291 = cljs.core.first(s__71282__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71291,(0),null);
var link_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71291,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.techops_link_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"link-def","link-def",-1004269408),link_def,new cljs.core.Keyword(null,"on-save","on-save",1618176266),((function (vec__71291,k,link_def,s__71282__$2,temp__5753__auto__,techops_links,return_env){
return (function (p1__71276_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","save-techops-link","jelli.hackday-environ-manager.events/save-techops-link",-1480463455),k,p1__71276_SHARP_,return_env], null));
});})(vec__71291,k,link_def,s__71282__$2,temp__5753__auto__,techops_links,return_env))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),jelli$hackday_environ_manager$views$techops_link_edit_page_$_iter__71281(cljs.core.rest(s__71282__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(techops_links));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.techops_link_editor,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"link-def","link-def",-1004269408),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on-save","on-save",1618176266),(function (p1__71277_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","save-techops-link","jelli.hackday-environ-manager.events/save-techops-link",-1480463455),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795).cljs$core$IFn$_invoke$arity$1(p1__71277_SHARP_)),p1__71277_SHARP_,return_env], null));
})], null)], null)], null)], null);
});
jelli.hackday_environ_manager.views.deployment_page = (function jelli$hackday_environ_manager$views$deployment_page(){
var with_let71300 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71300","with-let71300",75883820));
var temp__5757__auto___71388 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___71388 == null)){
} else {
var c__50045__auto___71389 = temp__5757__auto___71388;
if((with_let71300.generation === c__50045__auto___71389.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71300.generation = c__50045__auto___71389.ratomGeneration);
}

var init71301 = (with_let71300.length === (0));
var selected_version = ((((init71301) || (cljs.core.not(with_let71300.hasOwnProperty((0))))))?(with_let71300[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let71300[(0)]));
var selected_env = ((((init71301) || (cljs.core.not(with_let71300.hasOwnProperty((1))))))?(with_let71300[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let71300[(1)]));
var res71302 = (function (){var project_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-project-data","jelli.hackday-environ-manager.subs/selected-project-data",-1346287000)], null)));
var environments = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","environments","jelli.hackday-environ-manager.subs/environments",-1048347539)], null)));
var known_versions = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","known-versions","jelli.hackday-environ-manager.subs/known-versions",-1802372779),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(project_data)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Deploy ",new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795).cljs$core$IFn$_invoke$arity$1(project_data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-edit","routes/project-edit",-357000476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-project","jelli.hackday-environ-manager.subs/selected-project",1399636539)], null)))], null)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-pencil","span.icon>i.mdi.mdi-pencil",-1485371791)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field.is-grouped.is-grouped-multiline","div.field.is-grouped.is-grouped-multiline",-2028572565),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$views$deployment_page_$_iter__71313(s__71314){
return (new cljs.core.LazySeq(null,(function (){
var s__71314__$1 = s__71314;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71314__$1);
if(temp__5753__auto__){
var s__71314__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71314__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71314__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71316 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71315 = (0);
while(true){
if((i__71315 < size__4610__auto__)){
var env = cljs.core._nth(c__4609__auto__,i__71315);
cljs.core.chunk_append(b__71316,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control>div.tags.has-addons","div.control>div.tags.has-addons",1017990528),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag.is-dark","span.tag.is-dark",-1679372441),env], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.version_tag,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployed-version","jelli.hackday-environ-manager.subs/deployed-version",-297554104),env,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(project_data)], null)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),env], null)));

var G__71396 = (i__71315 + (1));
i__71315 = G__71396;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71316),jelli$hackday_environ_manager$views$deployment_page_$_iter__71313(cljs.core.chunk_rest(s__71314__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71316),null);
}
} else {
var env = cljs.core.first(s__71314__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control>div.tags.has-addons","div.control>div.tags.has-addons",1017990528),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag.is-dark","span.tag.is-dark",-1679372441),env], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.version_tag,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployed-version","jelli.hackday-environ-manager.subs/deployed-version",-297554104),env,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(project_data)], null)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),env], null)),jelli$hackday_environ_manager$views$deployment_page_$_iter__71313(cljs.core.rest(s__71314__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),environments));
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),((cljs.core.seq(known_versions))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select>select","div.select>select",419369002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__71298_SHARP_){
return cljs.core.reset_BANG_(selected_version,jelli.hackday_environ_manager.simple_interop.event__GT_value(p1__71298_SHARP_));
})], null),(function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$views$deployment_page_$_iter__71317(s__71318){
return (new cljs.core.LazySeq(null,(function (){
var s__71318__$1 = s__71318;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71318__$1);
if(temp__5753__auto__){
var s__71318__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71318__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71318__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71320 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71319 = (0);
while(true){
if((i__71319 < size__4610__auto__)){
var version = cljs.core._nth(c__4609__auto__,i__71319);
cljs.core.chunk_append(b__71320,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),version], null),version], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version], null)));

var G__71399 = (i__71319 + (1));
i__71319 = G__71399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71320),jelli$hackday_environ_manager$views$deployment_page_$_iter__71317(cljs.core.chunk_rest(s__71318__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71320),null);
}
} else {
var version = cljs.core.first(s__71318__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),version], null),version], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),version], null)),jelli$hackday_environ_manager$views$deployment_page_$_iter__71317(cljs.core.rest(s__71318__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(known_versions);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select>select","div.select>select",419369002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__71299_SHARP_){
return cljs.core.reset_BANG_(selected_env,jelli.hackday_environ_manager.simple_interop.event__GT_value(p1__71299_SHARP_));
})], null),(function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$views$deployment_page_$_iter__71322(s__71323){
return (new cljs.core.LazySeq(null,(function (){
var s__71323__$1 = s__71323;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71323__$1);
if(temp__5753__auto__){
var s__71323__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71323__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71323__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71325 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71324 = (0);
while(true){
if((i__71324 < size__4610__auto__)){
var env = cljs.core._nth(c__4609__auto__,i__71324);
cljs.core.chunk_append(b__71325,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(env)], null),env], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),env], null)));

var G__71400 = (i__71324 + (1));
i__71324 = G__71400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71325),jelli$hackday_environ_manager$views$deployment_page_$_iter__71322(cljs.core.chunk_rest(s__71323__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71325),null);
}
} else {
var env = cljs.core.first(s__71323__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name(env)], null),env], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),env], null)),jelli$hackday_environ_manager$views$deployment_page_$_iter__71322(cljs.core.rest(s__71323__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),environments));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-info","a.button.is-info",-547749464),jelli.hackday_environ_manager.simple_interop.new_tab_href([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("deployment","non-play-job","deployment/non-play-job",-216020288).cljs$core$IFn$_invoke$arity$1(project_data)),"parambuild?Artifact_Version=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_version)),"&Environment=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_env))].join('')),"Deploy"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.notification.is-warning","div.notification.is-warning",1258242542),"No Known Versions Available, Cannot Deploy"], null))], null)], null);
})();
return res71302;
});
jelli.hackday_environ_manager.views.deployment_dashboard = (function jelli$hackday_environ_manager$views$deployment_dashboard(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Deployments"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.is-narrow.is-hoverable.is-fullwidth","table.table.is-narrow.is-hoverable.is-fullwidth",1109066762),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Dev"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Int"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Stage"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Prod"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$views$deployment_dashboard_$_iter__71328(s__71329){
return (new cljs.core.LazySeq(null,(function (){
var s__71329__$1 = s__71329;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71329__$1);
if(temp__5753__auto__){
var s__71329__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71329__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71329__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71331 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71330 = (0);
while(true){
if((i__71330 < size__4610__auto__)){
var vec__71333 = cljs.core._nth(c__4609__auto__,i__71330);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71333,(0),null);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71333,(1),null);
cljs.core.chunk_append(b__71331,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__71330,vec__71333,k,project,c__4609__auto__,size__4610__auto__,b__71331,s__71329__$2,temp__5753__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-edit","routes/project-edit",-357000476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),k], null)], null));
});})(i__71330,vec__71333,k,project,c__4609__auto__,size__4610__auto__,b__71331,s__71329__$2,temp__5753__auto__))
], null),new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795).cljs$core$IFn$_invoke$arity$1(project)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = ((function (i__71330,vec__71333,k,project,c__4609__auto__,size__4610__auto__,b__71331,s__71329__$2,temp__5753__auto__){
return (function jelli$hackday_environ_manager$views$deployment_dashboard_$_iter__71328_$_iter__71336(s__71337){
return (new cljs.core.LazySeq(null,((function (i__71330,vec__71333,k,project,c__4609__auto__,size__4610__auto__,b__71331,s__71329__$2,temp__5753__auto__){
return (function (){
var s__71337__$1 = s__71337;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__71337__$1);
if(temp__5753__auto____$1){
var s__71337__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__71337__$2)){
var c__4609__auto____$1 = cljs.core.chunk_first(s__71337__$2);
var size__4610__auto____$1 = cljs.core.count(c__4609__auto____$1);
var b__71339 = cljs.core.chunk_buffer(size__4610__auto____$1);
if((function (){var i__71338 = (0);
while(true){
if((i__71338 < size__4610__auto____$1)){
var env = cljs.core._nth(c__4609__auto____$1,i__71338);
var version = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployed-version","jelli.hackday-environ-manager.subs/deployed-version",-297554104),env,k], null));
cljs.core.chunk_append(b__71339,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tags.has-addons","div.tags.has-addons",119759135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.version_tag,cljs.core.deref(version)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag.is-dark","a.tag.is-dark",1240038067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__71338,i__71330,version,env,c__4609__auto____$1,size__4610__auto____$1,b__71339,s__71337__$2,temp__5753__auto____$1,vec__71333,k,project,c__4609__auto__,size__4610__auto__,b__71331,s__71329__$2,temp__5753__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-deployment","routes/project-deployment",-1601423603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),k], null)], null));
});})(i__71338,i__71330,version,env,c__4609__auto____$1,size__4610__auto____$1,b__71339,s__71337__$2,temp__5753__auto____$1,vec__71333,k,project,c__4609__auto__,size__4610__auto__,b__71331,s__71329__$2,temp__5753__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-cloud-upload","span.icon>i.mdi.mdi-cloud-upload",1825920809)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(env)].join('')], null)));

var G__71401 = (i__71338 + (1));
i__71338 = G__71401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71339),jelli$hackday_environ_manager$views$deployment_dashboard_$_iter__71328_$_iter__71336(cljs.core.chunk_rest(s__71337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71339),null);
}
} else {
var env = cljs.core.first(s__71337__$2);
var version = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployed-version","jelli.hackday-environ-manager.subs/deployed-version",-297554104),env,k], null));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tags.has-addons","div.tags.has-addons",119759135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.version_tag,cljs.core.deref(version)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag.is-dark","a.tag.is-dark",1240038067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__71330,version,env,s__71337__$2,temp__5753__auto____$1,vec__71333,k,project,c__4609__auto__,size__4610__auto__,b__71331,s__71329__$2,temp__5753__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-deployment","routes/project-deployment",-1601423603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),k], null)], null));
});})(i__71330,version,env,s__71337__$2,temp__5753__auto____$1,vec__71333,k,project,c__4609__auto__,size__4610__auto__,b__71331,s__71329__$2,temp__5753__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-cloud-upload","span.icon>i.mdi.mdi-cloud-upload",1825920809)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(env)].join('')], null)),jelli$hackday_environ_manager$views$deployment_dashboard_$_iter__71328_$_iter__71336(cljs.core.rest(s__71337__$2)));
}
} else {
return null;
}
break;
}
});})(i__71330,vec__71333,k,project,c__4609__auto__,size__4610__auto__,b__71331,s__71329__$2,temp__5753__auto__))
,null,null));
});})(i__71330,vec__71333,k,project,c__4609__auto__,size__4610__auto__,b__71331,s__71329__$2,temp__5753__auto__))
;
return iter__4611__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dev","int","stage","prod"], null));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__71402 = (i__71330 + (1));
i__71330 = G__71402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71331),jelli$hackday_environ_manager$views$deployment_dashboard_$_iter__71328(cljs.core.chunk_rest(s__71329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71331),null);
}
} else {
var vec__71342 = cljs.core.first(s__71329__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71342,(0),null);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71342,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__71342,k,project,s__71329__$2,temp__5753__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-edit","routes/project-edit",-357000476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),k], null)], null));
});})(vec__71342,k,project,s__71329__$2,temp__5753__auto__))
], null),new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795).cljs$core$IFn$_invoke$arity$1(project)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = ((function (vec__71342,k,project,s__71329__$2,temp__5753__auto__){
return (function jelli$hackday_environ_manager$views$deployment_dashboard_$_iter__71328_$_iter__71345(s__71346){
return (new cljs.core.LazySeq(null,(function (){
var s__71346__$1 = s__71346;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__71346__$1);
if(temp__5753__auto____$1){
var s__71346__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__71346__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71346__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71348 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71347 = (0);
while(true){
if((i__71347 < size__4610__auto__)){
var env = cljs.core._nth(c__4609__auto__,i__71347);
var version = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployed-version","jelli.hackday-environ-manager.subs/deployed-version",-297554104),env,k], null));
cljs.core.chunk_append(b__71348,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tags.has-addons","div.tags.has-addons",119759135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.version_tag,cljs.core.deref(version)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag.is-dark","a.tag.is-dark",1240038067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__71347,version,env,c__4609__auto__,size__4610__auto__,b__71348,s__71346__$2,temp__5753__auto____$1,vec__71342,k,project,s__71329__$2,temp__5753__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-deployment","routes/project-deployment",-1601423603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),k], null)], null));
});})(i__71347,version,env,c__4609__auto__,size__4610__auto__,b__71348,s__71346__$2,temp__5753__auto____$1,vec__71342,k,project,s__71329__$2,temp__5753__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-cloud-upload","span.icon>i.mdi.mdi-cloud-upload",1825920809)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(env)].join('')], null)));

var G__71403 = (i__71347 + (1));
i__71347 = G__71403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71348),jelli$hackday_environ_manager$views$deployment_dashboard_$_iter__71328_$_iter__71345(cljs.core.chunk_rest(s__71346__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71348),null);
}
} else {
var env = cljs.core.first(s__71346__$2);
var version = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployed-version","jelli.hackday-environ-manager.subs/deployed-version",-297554104),env,k], null));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tags.has-addons","div.tags.has-addons",119759135),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.version_tag,cljs.core.deref(version)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.tag.is-dark","a.tag.is-dark",1240038067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (version,env,s__71346__$2,temp__5753__auto____$1,vec__71342,k,project,s__71329__$2,temp__5753__auto__){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-deployment","routes/project-deployment",-1601423603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),k], null)], null));
});})(version,env,s__71346__$2,temp__5753__auto____$1,vec__71342,k,project,s__71329__$2,temp__5753__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-cloud-upload","span.icon>i.mdi.mdi-cloud-upload",1825920809)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(env)].join('')], null)),jelli$hackday_environ_manager$views$deployment_dashboard_$_iter__71328_$_iter__71345(cljs.core.rest(s__71346__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__71342,k,project,s__71329__$2,temp__5753__auto__))
;
return iter__4611__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dev","int","stage","prod"], null));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),jelli$hackday_environ_manager$views$deployment_dashboard_$_iter__71328(cljs.core.rest(s__71329__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployable-projects","jelli.hackday-environ-manager.subs/deployable-projects",1731613913)], null))));
})())], null)], null)], null)], null);
});
jelli.hackday_environ_manager.views.environment_dashboard = (function jelli$hackday_environ_manager$views$environment_dashboard(){
var env_name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-environment-name","jelli.hackday-environ-manager.subs/selected-environment-name",934927623)], null));
var project_links = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","environment-links","jelli.hackday-environ-manager.subs/environment-links",-1840237336)], null));
var project_data = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-data","jelli.hackday-environ-manager.subs/project-data",-2119034128)], null));
var techops_links = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","visible-techops-links","jelli.hackday-environ-manager.subs/visible-techops-links",1293862276)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.panel","nav.panel",-933286493),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.panel-heading","p.panel-heading",1850435418),cljs.core.deref(env_name)," Application Links"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$views$environment_dashboard_$_iter__71349(s__71350){
return (new cljs.core.LazySeq(null,(function (){
var s__71350__$1 = s__71350;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71350__$1);
if(temp__5753__auto__){
var s__71350__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71350__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71350__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71352 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71351 = (0);
while(true){
if((i__71351 < size__4610__auto__)){
var vec__71353 = cljs.core._nth(c__4609__auto__,i__71351);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71353,(0),null);
var base_link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71353,(1),null);
var be_version = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","backend-version","jelli.hackday-environ-manager.subs/backend-version",849522184),project], null)));
var friendly_name = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-friendly-name","jelli.hackday-environ-manager.subs/project-friendly-name",-78595346),project], null)));
var link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(project_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project,new cljs.core.Keyword(null,"landing-endpoint","landing-endpoint",600640415)], null)))].join('');
cljs.core.chunk_append(b__71352,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon>i.mdi.mdi-link","span.panel-icon>i.mdi.mdi-link",-155818779)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__71351,be_version,friendly_name,link,vec__71353,project,base_link,c__4609__auto__,size__4610__auto__,b__71352,s__71350__$2,temp__5753__auto__,env_name,project_links,project_data,techops_links){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-edit","routes/project-edit",-357000476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),project], null)], null));
});})(i__71351,be_version,friendly_name,link,vec__71353,project,base_link,c__4609__auto__,size__4610__auto__,b__71352,s__71350__$2,temp__5753__auto__,env_name,project_links,project_data,techops_links))
], null),friendly_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-two-fifths","div.column.is-two-fifths",-1783669686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),jelli.hackday_environ_manager.simple_interop.new_tab_href(link),link], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-two-fifths","div.column.is-two-fifths",-1783669686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control>div.tags.has-addons","div.control>div.tags.has-addons",1017990528),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag.is-dark","span.tag.is-dark",-1679372441),"BE-version"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.version_tag,be_version], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),project], null)));

var G__71404 = (i__71351 + (1));
i__71351 = G__71404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71352),jelli$hackday_environ_manager$views$environment_dashboard_$_iter__71349(cljs.core.chunk_rest(s__71350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71352),null);
}
} else {
var vec__71356 = cljs.core.first(s__71350__$2);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71356,(0),null);
var base_link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71356,(1),null);
var be_version = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","backend-version","jelli.hackday-environ-manager.subs/backend-version",849522184),project], null)));
var friendly_name = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-friendly-name","jelli.hackday-environ-manager.subs/project-friendly-name",-78595346),project], null)));
var link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(project_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [project,new cljs.core.Keyword(null,"landing-endpoint","landing-endpoint",600640415)], null)))].join('');
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon>i.mdi.mdi-link","span.panel-icon>i.mdi.mdi-link",-155818779)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (be_version,friendly_name,link,vec__71356,project,base_link,s__71350__$2,temp__5753__auto__,env_name,project_links,project_data,techops_links){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-edit","routes/project-edit",-357000476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),project], null)], null));
});})(be_version,friendly_name,link,vec__71356,project,base_link,s__71350__$2,temp__5753__auto__,env_name,project_links,project_data,techops_links))
], null),friendly_name], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-two-fifths","div.column.is-two-fifths",-1783669686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),jelli.hackday_environ_manager.simple_interop.new_tab_href(link),link], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-two-fifths","div.column.is-two-fifths",-1783669686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control>div.tags.has-addons","div.control>div.tags.has-addons",1017990528),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag.is-dark","span.tag.is-dark",-1679372441),"BE-version"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.version_tag,be_version], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),project], null)),jelli$hackday_environ_manager$views$environment_dashboard_$_iter__71349(cljs.core.rest(s__71350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(project_links));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card","div.card",-459317104),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header>p.card-header-title","div.card-header>p.card-header-title",-575598691),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Handy Links"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","techops-link-edit","routes/techops-link-edit",-855825461)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-pencil","span.icon>i.mdi.mdi-pencil",-1485371791)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content>div.content>div.tags","div.card-content>div.content>div.tags",-734111888),(function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$views$environment_dashboard_$_iter__71359(s__71360){
return (new cljs.core.LazySeq(null,(function (){
var s__71360__$1 = s__71360;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71360__$1);
if(temp__5753__auto__){
var s__71360__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71360__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71360__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71362 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71361 = (0);
while(true){
if((i__71361 < size__4610__auto__)){
var vec__71363 = cljs.core._nth(c__4609__auto__,i__71361);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71363,(0),null);
var link_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71363,(1),null);
cljs.core.chunk_append(b__71362,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.techops_link,link_def], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__71405 = (i__71361 + (1));
i__71361 = G__71405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71362),jelli$hackday_environ_manager$views$environment_dashboard_$_iter__71359(cljs.core.chunk_rest(s__71360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71362),null);
}
} else {
var vec__71366 = cljs.core.first(s__71360__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71366,(0),null);
var link_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71366,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.techops_link,link_def], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),jelli$hackday_environ_manager$views$environment_dashboard_$_iter__71359(cljs.core.rest(s__71360__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(techops_links));
})()], null)], null)], null);
});
jelli.hackday_environ_manager.views.main_panel = (function jelli$hackday_environ_manager$views$main_panel(){
var current_panel = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null)));
var dashboard_env = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-environment","jelli.hackday-environ-manager.subs/selected-environment",65518252)], null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar","nav.navbar",-121192499),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-brand","div.navbar-brand",1304438848),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.subtitle.has-text-centered.has-text-weight-bold.navbar-item","a.subtitle.has-text-centered.has-text-weight-bold.navbar-item",-1870503721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","home","routes/home",-1297486007)], null));
})], null),"EnviroManager"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-list","routes/project-list",-1361208132)], null));
})], null),"Projects"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","deployment","routes/deployment",906275488)], null));
})], null),"Deployments"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-item.has-dropdown.is-hoverable","div.navbar-item.has-dropdown.is-hoverable",-748810466),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-link","a.navbar-link",1730266033),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","env-dashboard","routes/env-dashboard",1685992275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",-1815813235),dashboard_env], null)], null));
})], null),"Environment Dashboard"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-dropdown","div.navbar-dropdown",-445802110),(function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$views$main_panel_$_iter__71369(s__71370){
return (new cljs.core.LazySeq(null,(function (){
var s__71370__$1 = s__71370;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71370__$1);
if(temp__5753__auto__){
var s__71370__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71370__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71370__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71372 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71371 = (0);
while(true){
if((i__71371 < size__4610__auto__)){
var map__71373 = cljs.core._nth(c__4609__auto__,i__71371);
var map__71373__$1 = cljs.core.__destructure_map(map__71373);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71373__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var friendly_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71373__$1,new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795));
cljs.core.chunk_append(b__71372,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__71371,map__71373,map__71373__$1,key,friendly_name,c__4609__auto__,size__4610__auto__,b__71372,s__71370__$2,temp__5753__auto__,current_panel,dashboard_env){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","env-dashboard","routes/env-dashboard",1685992275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",-1815813235),key], null)], null));
});})(i__71371,map__71373,map__71373__$1,key,friendly_name,c__4609__auto__,size__4610__auto__,b__71372,s__71370__$2,temp__5753__auto__,current_panel,dashboard_env))
,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__71374 = cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
return (fexpr__71374.cljs$core$IFn$_invoke$arity$1 ? fexpr__71374.cljs$core$IFn$_invoke$arity$1(dashboard_env) : fexpr__71374.call(null,dashboard_env));
})())?"is-active":null)], null),friendly_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)));

var G__71406 = (i__71371 + (1));
i__71371 = G__71406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71372),jelli$hackday_environ_manager$views$main_panel_$_iter__71369(cljs.core.chunk_rest(s__71370__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71372),null);
}
} else {
var map__71375 = cljs.core.first(s__71370__$2);
var map__71375__$1 = cljs.core.__destructure_map(map__71375);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71375__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var friendly_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71375__$1,new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__71375,map__71375__$1,key,friendly_name,s__71370__$2,temp__5753__auto__,current_panel,dashboard_env){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","env-dashboard","routes/env-dashboard",1685992275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",-1815813235),key], null)], null));
});})(map__71375,map__71375__$1,key,friendly_name,s__71370__$2,temp__5753__auto__,current_panel,dashboard_env))
,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__71376 = cljs.core.PersistentHashSet.createAsIfByAssoc([key]);
return (fexpr__71376.cljs$core$IFn$_invoke$arity$1 ? fexpr__71376.cljs$core$IFn$_invoke$arity$1(dashboard_env) : fexpr__71376.call(null,dashboard_env));
})())?"is-active":null)], null),friendly_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null)),jelli$hackday_environ_manager$views$main_panel_$_iter__71369(cljs.core.rest(s__71370__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","environments","jelli.hackday-environ-manager.subs/environments",-1048347539)], null))));
})()], null)], null)], null),(cljs.core.truth_(current_panel)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section>div.container","div.section>div.container",745095741),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_panel))], null)], null):null)], null);
});

//# sourceMappingURL=jelli.hackday_environ_manager.views.js.map
