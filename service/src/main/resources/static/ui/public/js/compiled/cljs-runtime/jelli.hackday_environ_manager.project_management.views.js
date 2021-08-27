goog.provide('jelli.hackday_environ_manager.project_management.views');
jelli.hackday_environ_manager.project_management.views.project_deploy_link = (function jelli$hackday_environ_manager$project_management$views$project_deploy_link(project){
var deployable_project_keys = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployable-project-keys","jelli.hackday-environ-manager.subs/deployable-project-keys",-922724416)], null));
if(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.deref(deployable_project_keys)),project)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-deployment","routes/project-deployment",-1601423603),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),project], null)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-cloud-upload","span.icon>i.mdi.mdi-cloud-upload",1825920809)], null)], null);
} else {
return null;
}
});
jelli.hackday_environ_manager.project_management.views.project_env_links = (function jelli$hackday_environ_manager$project_management$views$project_env_links(env_keys,project_datum){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.is-narrow.is-hoverable","table.table.is-narrow.is-hoverable",-1827644761),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Env"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Link"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$project_management$views$project_env_links_$_iter__71254(s__71255){
return (new cljs.core.LazySeq(null,(function (){
var s__71255__$1 = s__71255;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71255__$1);
if(temp__5753__auto__){
var s__71255__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71255__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71255__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71257 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71256 = (0);
while(true){
if((i__71256 < size__4610__auto__)){
var vec__71264 = cljs.core._nth(c__4609__auto__,i__71256);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71264,(0),null);
var base_link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71264,(1),null);
var link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"landing-endpoint","landing-endpoint",600640415).cljs$core$IFn$_invoke$arity$2(project_datum,""))].join('');
cljs.core.chunk_append(b__71257,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),env], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>a","td>a",-678364948),jelli.hackday_environ_manager.simple_interop.new_tab_href(link),link,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-open-in-new","span.icon>i.mdi.mdi-open-in-new",-1782948014)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(env),"-",link].join('')], null)));

var G__71321 = (i__71256 + (1));
i__71256 = G__71321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71257),jelli$hackday_environ_manager$project_management$views$project_env_links_$_iter__71254(cljs.core.chunk_rest(s__71255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71257),null);
}
} else {
var vec__71267 = cljs.core.first(s__71255__$2);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71267,(0),null);
var base_link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71267,(1),null);
var link = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_link),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"landing-endpoint","landing-endpoint",600640415).cljs$core$IFn$_invoke$arity$2(project_datum,""))].join('');
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag","span.tag",-825095461),env], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td>a","td>a",-678364948),jelli.hackday_environ_manager.simple_interop.new_tab_href(link),link,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-open-in-new","span.icon>i.mdi.mdi-open-in-new",-1782948014)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(env),"-",link].join('')], null)),jelli$hackday_environ_manager$project_management$views$project_env_links_$_iter__71254(cljs.core.rest(s__71255__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__71249_SHARP_){
return jelli.hackday_environ_manager.db.get_link(p1__71249_SHARP_,project_datum);
})),env_keys));
})()], null)], null);
});
jelli.hackday_environ_manager.project_management.views.matches_search_QMARK_ = (function jelli$hackday_environ_manager$project_management$views$matches_search_QMARK_(term,p__71271){
var vec__71273 = p__71271;
var project_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71273,(0),null);
var project_datum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71273,(1),null);
var lower_term = clojure.string.lower_case(term);
return cljs.core.some((function (p1__71270_SHARP_){
return clojure.string.includes_QMARK_(p1__71270_SHARP_,lower_term);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.cons(cljs.core.name(project_key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795),new cljs.core.Keyword(null,"microservice-name","microservice-name",-818687414))(project_datum)))));
});
jelli.hackday_environ_manager.project_management.views.project_list_page = (function jelli$hackday_environ_manager$project_management$views$project_list_page(){
var with_let71285 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71285","with-let71285",-242279092));
var temp__5757__auto___71326 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___71326 == null)){
} else {
var c__50045__auto___71327 = temp__5757__auto___71326;
if((with_let71285.generation === c__50045__auto___71327.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71285.generation = c__50045__auto___71327.ratomGeneration);
}

var init71286 = (with_let71285.length === (0));
var term = ((((init71286) || (cljs.core.not(with_let71285.hasOwnProperty((0))))))?(with_let71285[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("")):(with_let71285[(0)]));
var res71287 = (function (){var project_data = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-data","jelli.hackday-environ-manager.subs/project-data",-2119034128)], null)));
var filtered_projects = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71278_SHARP_){
return jelli.hackday_environ_manager.project_management.views.matches_search_QMARK_(cljs.core.deref(term),p1__71278_SHARP_);
}),project_data);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field>div.control.has-icons-right","div.field>div.control.has-icons-right",257110177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__71279_SHARP_){
return cljs.core.reset_BANG_(term,jelli.hackday_environ_manager.simple_interop.event__GT_value(p1__71279_SHARP_));
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (p1__71280_SHARP_){
return cljs.core.reset_BANG_(term,jelli.hackday_environ_manager.simple_interop.event__GT_value(p1__71280_SHARP_));
}),new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search Projects"], null)], null),((clojure.string.blank_QMARK_(cljs.core.deref(term)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.is-right>i.mdi.mdi-magnify","span.icon.is-right>i.mdi.mdi-magnify",1000271409)], null):null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.help","p.help",-571957826),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((cljs.core.count(filtered_projects) === (0)))?"is-danger":"is-success")], null),cljs.core.count(filtered_projects),"/",cljs.core.count(project_data)," projects found"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$project_management$views$project_list_page_$_iter__71294(s__71295){
return (new cljs.core.LazySeq(null,(function (){
var s__71295__$1 = s__71295;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__71295__$1);
if(temp__5753__auto__){
var s__71295__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__71295__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__71295__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__71297 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__71296 = (0);
while(true){
if((i__71296 < size__4610__auto__)){
var vec__71303 = cljs.core._nth(c__4609__auto__,i__71296);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71303,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71303,(1),null);
cljs.core.chunk_append(b__71297,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.block","div.card.block",-1712086446),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header","div.card-header",1547492121),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.card-header-title","p.card-header-title",958312337),new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__71296,vec__71303,k,data,c__4609__auto__,size__4610__auto__,b__71297,s__71295__$2,temp__5753__auto__,project_data,filtered_projects,init71286,term,with_let71285){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-edit","routes/project-edit",-357000476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),k], null)], null));
});})(i__71296,vec__71303,k,data,c__4609__auto__,size__4610__auto__,b__71297,s__71295__$2,temp__5753__auto__,project_data,filtered_projects,init71286,term,with_let71285))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-pencil","span.icon>i.mdi.mdi-pencil",-1485371791)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.project_management.views.project_deploy_link,k], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.project_management.views.project_env_links,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["prod","stage","dev"], null),data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),"Metadata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),JSON.stringify(cljs.core.clj__GT_js(data),null," ")], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__71332 = (i__71296 + (1));
i__71296 = G__71332;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__71297),jelli$hackday_environ_manager$project_management$views$project_list_page_$_iter__71294(cljs.core.chunk_rest(s__71295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__71297),null);
}
} else {
var vec__71306 = cljs.core.first(s__71295__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71306,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71306,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.block","div.card.block",-1712086446),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-header","div.card-header",1547492121),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.card-header-title","p.card-header-title",958312337),new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__71306,k,data,s__71295__$2,temp__5753__auto__,project_data,filtered_projects,init71286,term,with_let71285){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-edit","routes/project-edit",-357000476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),k], null)], null));
});})(vec__71306,k,data,s__71295__$2,temp__5753__auto__,project_data,filtered_projects,init71286,term,with_let71285))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-pencil","span.icon>i.mdi.mdi-pencil",-1485371791)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.project_management.views.project_deploy_link,k], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-content","div.card-content",1464214949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.project_management.views.project_env_links,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["prod","stage","dev"], null),data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),"Metadata"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),JSON.stringify(cljs.core.clj__GT_js(data),null," ")], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),jelli$hackday_environ_manager$project_management$views$project_list_page_$_iter__71294(cljs.core.rest(s__71295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(filtered_projects);
})()),((clojure.string.blank_QMARK_(cljs.core.deref(term)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-primary","button.button.is-primary",-883309392),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","create-project","jelli.hackday-environ-manager.events/create-project",-77975949),cljs.core.deref(term)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Track New Project ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.is-family-monospace","span.is-family-monospace",884556466),cljs.core.deref(term)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-plus","span.icon>i.mdi.mdi-plus",-802878981)], null)], null))], null);
})();
return res71287;
});
jelli.hackday_environ_manager.project_management.views.project_edit_form = (function jelli$hackday_environ_manager$project_management$views$project_edit_form(project_key,project_fields,project_data){
var with_let71310 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71310","with-let71310",-1820416032));
var temp__5757__auto___71340 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___71340 == null)){
} else {
var c__50045__auto___71341 = temp__5757__auto___71340;
if((with_let71310.generation === c__50045__auto___71341.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71310.generation = c__50045__auto___71341.ratomGeneration);
}

var init71311 = (with_let71310.length === (0));
var data = ((((init71311) || (cljs.core.not(with_let71310.hasOwnProperty((0))))))?(with_let71310[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(project_data)):(with_let71310[(0)]));
var res71312 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns.container","div.columns.container",-141040382),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-half","div.column.is-half",1599821405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.forms.data_driven_form,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field-defs","field-defs",-852008759),project_fields,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414),data,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p1__71309_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","update-project-def","jelli.hackday-environ-manager.events/update-project-def",-141755124),project_key,p1__71309_SHARP_], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-half","div.column.is-half",1599821405),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box","div.box",2023391427),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.project_management.views.project_env_links,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["prod","stage","int","dev","play1"], null),cljs.core.deref(data)], null)], null)], null)], null);
return res71312;
});
jelli.hackday_environ_manager.project_management.views.project_edit_page = (function jelli$hackday_environ_manager$project_management$views$project_edit_page(){
var selected_project = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-project","jelli.hackday-environ-manager.subs/selected-project",1399636539)], null));
var project_fields = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-fields","jelli.hackday-environ-manager.subs/project-fields",773400503)], null));
var project_data = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-project-data","jelli.hackday-environ-manager.subs/selected-project-data",-1346287000)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(project_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.project_management.views.project_deploy_link,cljs.core.deref(selected_project)], null)], null),(cljs.core.truth_(cljs.core.deref(selected_project))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.project_management.views.project_edit_form,cljs.core.deref(selected_project),cljs.core.deref(project_fields),cljs.core.deref(project_data)], null)], null):null)], null);
});

//# sourceMappingURL=jelli.hackday_environ_manager.project_management.views.js.map
