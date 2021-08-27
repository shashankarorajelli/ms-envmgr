goog.provide('jelli.hackday_environ_manager.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","name","jelli.hackday-environ-manager.subs/name",-2061109397),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","environments","jelli.hackday-environ-manager.subs/environments",-1048347539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"environments","environments",-1203608657).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","env-keys","jelli.hackday-environ-manager.subs/env-keys",-183117844),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","environments","jelli.hackday-environ-manager.subs/environments",-1048347539)], null),(function (environments){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),environments);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-environment","jelli.hackday-environ-manager.subs/selected-environment",65518252),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword("env-dashboard","current-environment","env-dashboard/current-environment",1586864754).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-project","jelli.hackday-environ-manager.subs/selected-project",1399636539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword("project-edit","selected-project","project-edit/selected-project",125046075).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","version-data","jelli.hackday-environ-manager.subs/version-data",1403454386),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"version-data","version-data",-320496904).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","backend-version","jelli.hackday-environ-manager.subs/backend-version",849522184),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-environment","jelli.hackday-environ-manager.subs/selected-environment",65518252)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","version-data","jelli.hackday-environ-manager.subs/version-data",1403454386)], null),(function (p__63071,p__63073){
var vec__63079 = p__63071;
var selected_environment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63079,(0),null);
var version_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63079,(1),null);
var vec__63082 = p__63073;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63082,(0),null);
var project_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63082,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(version_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(selected_environment),project_key], null),"?");
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployed-version","jelli.hackday-environ-manager.subs/deployed-version",-297554104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","version-data","jelli.hackday-environ-manager.subs/version-data",1403454386)], null),(function (version_data,p__63086){
var vec__63087 = p__63086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63087,(0),null);
var env_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63087,(1),null);
var project_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63087,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(version_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env_key,project_key], null),"?");
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-friendly-name","jelli.hackday-environ-manager.subs/project-friendly-name",-78595346),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__63091){
var vec__63092 = p__63091;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63092,(0),null);
var project_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63092,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-data","project-data",-1812708430),project_key,new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795)], null),project_key);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-environment-name","jelli.hackday-environ-manager.subs/selected-environment-name",934927623),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-environment","jelli.hackday-environ-manager.subs/selected-environment",65518252)], null),(function (environment){
return new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795).cljs$core$IFn$_invoke$arity$1(environment);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","playground-selected?","jelli.hackday-environ-manager.subs/playground-selected?",930360698),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-environment","jelli.hackday-environ-manager.subs/selected-environment",65518252)], null),(function (environment){
return new cljs.core.Keyword(null,"playground?","playground?",-1754037124).cljs$core$IFn$_invoke$arity$1(environment);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","all-techops-links","jelli.hackday-environ-manager.subs/all-techops-links",-1005097699),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"techops-links","techops-links",1679511575).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","visible-techops-links","jelli.hackday-environ-manager.subs/visible-techops-links",1293862276),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","all-techops-links","jelli.hackday-environ-manager.subs/all-techops-links",-1005097699)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","playground-selected?","jelli.hackday-environ-manager.subs/playground-selected?",930360698)], null),(function (p__63100){
var vec__63101 = p__63100;
var links = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63101,(0),null);
var play_selected_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63101,(1),null);
if(cljs.core.truth_(play_selected_QMARK_)){
return links;
} else {
return medley.core.remove_vals(new cljs.core.Keyword(null,"playground-only?","playground-only?",1856996799),links);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","link-overrides","jelli.hackday-environ-manager.subs/link-overrides",-1130023014),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword("env-dashboard","link-overrides","env-dashboard/link-overrides",-1891221468).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-data","jelli.hackday-environ-manager.subs/project-data",-2119034128),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"project-data","project-data",-1812708430).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-fields","jelli.hackday-environ-manager.subs/project-fields",773400503),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"project-fields","project-fields",1398247541).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-project-data","jelli.hackday-environ-manager.subs/selected-project-data",-1346287000),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-data","jelli.hackday-environ-manager.subs/project-data",-2119034128)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-project","jelli.hackday-environ-manager.subs/selected-project",1399636539)], null),(function (p__63112){
var vec__63113 = p__63112;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63113,(0),null);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63113,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,project),new cljs.core.Keyword(null,"key","key",-1516042587),project);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","environment-links","jelli.hackday-environ-manager.subs/environment-links",-1840237336),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","selected-environment","jelli.hackday-environ-manager.subs/selected-environment",65518252)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-data","jelli.hackday-environ-manager.subs/project-data",-2119034128)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","link-overrides","jelli.hackday-environ-manager.subs/link-overrides",-1130023014)], null),(function (p__63117){
var vec__63118 = p__63117;
var environment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63118,(0),null);
var project_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63118,(1),null);
var link_overrides = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63118,(2),null);
return jelli.hackday_environ_manager.db.__GT_env_links(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"environment","environment",-666037640),environment,new cljs.core.Keyword(null,"project-data","project-data",-1812708430),medley.core.filter_vals(new cljs.core.Keyword(null,"env-dashboard?","env-dashboard?",-989913730),project_data)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployable-projects","jelli.hackday-environ-manager.subs/deployable-projects",1731613913),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","project-data","jelli.hackday-environ-manager.subs/project-data",-2119034128)], null),(function (project_data){
return medley.core.filter_vals((function (p1__63122_SHARP_){
var or__4212__auto__ = new cljs.core.Keyword(null,"microservice-name","microservice-name",-818687414).cljs$core$IFn$_invoke$arity$1(p1__63122_SHARP_);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = new cljs.core.Keyword("deployment","non-play-job","deployment/non-play-job",-216020288).cljs$core$IFn$_invoke$arity$1(p1__63122_SHARP_);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return new cljs.core.Keyword("deployment","play-job","deployment/play-job",-297445111).cljs$core$IFn$_invoke$arity$1(p1__63122_SHARP_);
}
}
}),project_data);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployable-project-keys","jelli.hackday-environ-manager.subs/deployable-project-keys",-922724416),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","deployable-projects","jelli.hackday-environ-manager.subs/deployable-projects",1731613913)], null),(function (deployable_projects){
return cljs.core.keys(deployable_projects);
})], 0));
jelli.hackday_environ_manager.subs.semver__GT_vernums = (function jelli$hackday_environ_manager$subs$semver__GT_vernums(semver_str){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.rest(cljs.core.re_find(/(\d+)\.(\d+)\.(\d+)-?.*/,semver_str)));
});
jelli.hackday_environ_manager.subs.semver_sort = (function jelli$hackday_environ_manager$subs$semver_sort(a,b){
if(cljs.core.every_QMARK_((function (p1__63125_SHARP_){
return cljs.core.re_matches(/\d+\.\d+\.\d+-?.*/,p1__63125_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null))){
return cljs.core.compare(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(jelli.hackday_environ_manager.subs.semver__GT_vernums(b),a),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(jelli.hackday_environ_manager.subs.semver__GT_vernums(a),b));
} else {
return cljs.core.compare(b,a);
}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("jelli.hackday-environ-manager.subs","known-versions","jelli.hackday-environ-manager.subs/known-versions",-1802372779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","version-data","jelli.hackday-environ-manager.subs/version-data",1403454386)], null),(function (version_data,p__63134){
var vec__63135 = p__63134;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63135,(0),null);
var project_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63135,(1),null);
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(jelli.hackday_environ_manager.subs.semver_sort,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),cljs.core.vals(medley.core.map_vals.cljs$core$IFn$_invoke$arity$2((function (p1__63133_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__63133_SHARP_,project_key);
}),version_data))))));
})], 0));

//# sourceMappingURL=jelli.hackday_environ_manager.subs.js.map
