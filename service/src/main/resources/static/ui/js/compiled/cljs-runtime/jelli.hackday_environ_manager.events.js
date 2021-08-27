goog.provide('jelli.hackday_environ_manager.events');
jelli.hackday_environ_manager.events.envmgr_be_base_url = envMgrBackendUrl;
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","initialize-db","jelli.hackday-environ-manager.events/initialize-db",-2074449732),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),jelli.hackday_environ_manager.db.default_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","gather-project-data","jelli.hackday-environ-manager.events/gather-project-data",1471994875)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","version-info-received","jelli.hackday-environ-manager.events/version-info-received",991349027),(function (db,p__71153){
var vec__71154 = p__71153;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71154,(0),null);
var environment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71154,(1),null);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71154,(2),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71154,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version-data","version-data",-320496904),environment,project], null),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(result));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","version-info-receipt-failure","jelli.hackday-environ-manager.events/version-info-receipt-failure",1854992546),(function (db,p__71157){
var vec__71158 = p__71157;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71158,(0),null);
var environment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71158,(1),null);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71158,(2),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71158,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version-data","version-data",-320496904),environment,project], null),new cljs.core.Keyword(null,"error","error",-978969032));
}));
jelli.hackday_environ_manager.events.defer_event_interceptor = (function jelli$hackday_environ_manager$events$defer_event_interceptor(condition_pred){
return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"defer-event","defer-event",368458724),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
if(cljs.core.truth_((function (){var G__71161 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null));
return (condition_pred.cljs$core$IFn$_invoke$arity$1 ? condition_pred.cljs$core$IFn$_invoke$arity$1(G__71161) : condition_pred.call(null,G__71161));
})())){
var db = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"db","db",993250759)], null)),new cljs.core.Keyword("intercept","deferred-events","intercept/deferred-events",1572484664),cljs.core.conj,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"coeffects","coeffects",497912985),new cljs.core.Keyword(null,"event","event",301435442)], null)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null),db),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.pop);
} else {
return context;
}
})], 0));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","realize-deferred-events","jelli.hackday-environ-manager.events/realize-deferred-events",-1092684094),(function (p__71162,_){
var map__71163 = p__71162;
var map__71163__$1 = cljs.core.__destructure_map(map__71163);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71163__$1,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5751__auto__ = new cljs.core.Keyword("intercept","deferred-events","intercept/deferred-events",1572484664).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(temp__5751__auto__)){
var deferred_events = temp__5751__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("intercept","deferred-events","intercept/deferred-events",1572484664)),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),deferred_events], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
jelli.hackday_environ_manager.events.project_gather_inflight_QMARK_ = (function jelli$hackday_environ_manager$events$project_gather_inflight_QMARK_(db){
return new cljs.core.Keyword("project-data","gather-inflight","project-data/gather-inflight",-565343296).cljs$core$IFn$_invoke$arity$1(db);
});
jelli.hackday_environ_manager.events.trace_interceptor = re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
console.log(context);

return context;
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","gather-version-data","jelli.hackday-environ-manager.events/gather-version-data",2077141996),(function (_,p__71164){
var vec__71165 = p__71164;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71165,(0),null);
var vec__71168 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71165,(1),null);
var environment = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71168,(0),null);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71168,(1),null);
var endpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71168,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),endpoint,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","version-info-received","jelli.hackday-environ-manager.events/version-info-received",991349027),environment,project], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","version-info-receipt-failure","jelli.hackday-environ-manager.events/version-info-receipt-failure",1854992546),environment,project], null)], null)], null);
}));
jelli.hackday_environ_manager.events.api_keys__GT_ui_keys = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"friendlyName","friendlyName",-425596270),new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795),new cljs.core.Keyword(null,"backendVersionEndpoint","backendVersionEndpoint",572478125),new cljs.core.Keyword(null,"backend-version-endpoint","backend-version-endpoint",-996216397),new cljs.core.Keyword(null,"defaultLinkPattern","defaultLinkPattern",-1571039645),new cljs.core.Keyword(null,"default-link-pattern","default-link-pattern",-1751468180),new cljs.core.Keyword(null,"linkOverrides","linkOverrides",-2070128773),new cljs.core.Keyword(null,"link-overrides","link-overrides",-750154088),new cljs.core.Keyword(null,"deploymentMetadata","deploymentMetadata",893346248),new cljs.core.Keyword(null,"deployment-metadata","deployment-metadata",1298326627),new cljs.core.Keyword(null,"onEnvDashboard","onEnvDashboard",-70599243),new cljs.core.Keyword(null,"env-dashboard?","env-dashboard?",-989913730),new cljs.core.Keyword(null,"landingEndpoint","landingEndpoint",-967920110),new cljs.core.Keyword(null,"landing-endpoint","landing-endpoint",600640415),new cljs.core.Keyword(null,"microserviceName","microserviceName",-1591600570),new cljs.core.Keyword(null,"microservice-name","microservice-name",-818687414)], null);
jelli.hackday_environ_manager.events.project_data_api__GT_ui = (function jelli$hackday_environ_manager$events$project_data_api__GT_ui(raw_project_data){
var project_data = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(clojure.set.rename_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(raw_project_data,new cljs.core.Keyword(null,"id","id",-1388402092)),jelli.hackday_environ_manager.events.api_keys__GT_ui_keys),new cljs.core.Keyword(null,"link-overrides","link-overrides",-750154088),(function (p1__71171_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)),p1__71171_SHARP_));
})),new cljs.core.Keyword(null,"deployment-metadata","deployment-metadata",1298326627),(function (p1__71172_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)),p1__71172_SHARP_));
}));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(project_data,new cljs.core.Keyword("deployment","non-play-job","deployment/non-play-job",-216020288),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(project_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deployment-metadata","deployment-metadata",1298326627),"non-play-job"], null)));
});
jelli.hackday_environ_manager.events.project_data_ui__GT_api = (function jelli$hackday_environ_manager$events$project_data_ui__GT_api(project_key,project_data){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.set.rename_keys(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(project_data,new cljs.core.Keyword(null,"link-overrides","link-overrides",-750154088),(function (p1__71173_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71174){
var vec__71175 = p__71174;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71175,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71175,(1),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"value","value",305978217)],[k,v]);
}),p1__71173_SHARP_);
})),new cljs.core.Keyword(null,"deployment-metadata","deployment-metadata",1298326627),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"non-play-job",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("deployment","non-play-job","deployment/non-play-job",-216020288).cljs$core$IFn$_invoke$arity$1(project_data)], null)], null)),clojure.set.map_invert(jelli.hackday_environ_manager.events.api_keys__GT_ui_keys)),new cljs.core.Keyword(null,"projectKey","projectKey",-998809248),project_key);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","project-data-received","jelli.hackday-environ-manager.events/project-data-received",716019433),(function (p__71179,p__71180){
var map__71181 = p__71179;
var map__71181__$1 = cljs.core.__destructure_map(map__71181);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71181__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__71182 = p__71180;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71182,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71182,(1),null);
var project_data = medley.core.map_keys(cljs.core.keyword,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"projectKey","projectKey",-998809248),(function (p1__71178_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__71178_SHARP_,new cljs.core.Keyword(null,"projectKey","projectKey",-998809248));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2(jelli.hackday_environ_manager.events.project_data_api__GT_ui,new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(result)))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"project-data","project-data",-1812708430),project_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("project-data","gather-inflight","project-data/gather-inflight",-565343296),false], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","realize-deferred-events","jelli.hackday-environ-manager.events/realize-deferred-events",-1092684094)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","project-data-receipt-failure","jelli.hackday-environ-manager.events/project-data-receipt-failure",880156574),(function (p__71185,p__71186){
var map__71187 = p__71185;
var map__71187__$1 = cljs.core.__destructure_map(map__71187);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71187__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__71188 = p__71186;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71188,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71188,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Couldn't retrieve project data, using default"], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"project-data","project-data",-1812708430),jelli.hackday_environ_manager.db.default_project_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("project-data","gather-inflight","project-data/gather-inflight",-565343296),false], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","realize-deferred-events","jelli.hackday-environ-manager.events/realize-deferred-events",-1092684094)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","gather-project-data","jelli.hackday-environ-manager.events/gather-project-data",1471994875),(function (p__71191,_){
var map__71192 = p__71191;
var map__71192__$1 = cljs.core.__destructure_map(map__71192);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71192__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("project-data","gather-inflight","project-data/gather-inflight",-565343296),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jelli.hackday_environ_manager.events.envmgr_be_base_url),"v1/projectdata"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","project-data-received","jelli.hackday-environ-manager.events/project-data-received",716019433)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","project-data-receipt-failure","jelli.hackday-environ-manager.events/project-data-receipt-failure",880156574)], null)], null)], null);
}));
jelli.hackday_environ_manager.events.version_links = (function jelli$hackday_environ_manager$events$version_links(var_args){
var G__71195 = arguments.length;
switch (G__71195) {
case 2:
return jelli.hackday_environ_manager.events.version_links.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jelli.hackday_environ_manager.events.version_links.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(jelli.hackday_environ_manager.events.version_links.cljs$core$IFn$_invoke$arity$2 = (function (env,db){
return jelli.hackday_environ_manager.events.version_links.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"project-data","project-data",-1812708430).cljs$core$IFn$_invoke$arity$1(db),db);
}));

(jelli.hackday_environ_manager.events.version_links.cljs$core$IFn$_invoke$arity$3 = (function (env,projects,db){
var links = jelli.hackday_environ_manager.db.__GT_env_links(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"environment","environment",-666037640),env,new cljs.core.Keyword(null,"project-data","project-data",-1812708430),projects], null));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__71193_SHARP_){
return cljs.core.cons(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(env),p1__71193_SHARP_);
}),jelli.hackday_environ_manager.db.links__GT_version_endpoints(links,projects));
}));

(jelli.hackday_environ_manager.events.version_links.cljs$lang$maxFixedArity = 3);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","gather-version-data-by-keys","jelli.hackday-environ-manager.events/gather-version-data-by-keys",44444284),(function (p__71198,p__71199){
var map__71200 = p__71198;
var map__71200__$1 = cljs.core.__destructure_map(map__71200);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71200__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__71201 = p__71199;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71201,(0),null);
var environment_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71201,(1),null);
var project_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71201,(2),null);
var envs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set(environment_keys),new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.Keyword(null,"environments","environments",-1203608657).cljs$core$IFn$_invoke$arity$1(db));
var v_links = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__71196_SHARP_){
return jelli.hackday_environ_manager.events.version_links.cljs$core$IFn$_invoke$arity$3(p1__71196_SHARP_,cljs.core.select_keys(new cljs.core.Keyword(null,"project-data","project-data",-1812708430).cljs$core$IFn$_invoke$arity$1(db),project_keys),db);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([envs], 0));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71197_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("jelli.hackday-environ-manager.events","gather-version-data","jelli.hackday-environ-manager.events/gather-version-data",2077141996),p1__71197_SHARP_],null));
}),v_links)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("jelli.hackday-environ-manager.events","gather-deployments-version-data","jelli.hackday-environ-manager.events/gather-deployments-version-data",-1797782961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.events.trace_interceptor,jelli.hackday_environ_manager.events.defer_event_interceptor(jelli.hackday_environ_manager.events.project_gather_inflight_QMARK_)], null),(function (p__71204,_){
var map__71205 = p__71204;
var map__71205__$1 = cljs.core.__destructure_map(map__71205);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71205__$1,new cljs.core.Keyword(null,"db","db",993250759));
var project_keys = cljs.core.keys(jelli.hackday_environ_manager.db.deployable_projects(new cljs.core.Keyword(null,"project-data","project-data",-1812708430).cljs$core$IFn$_invoke$arity$1(db)));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","gather-version-data-by-keys","jelli.hackday-environ-manager.events/gather-version-data-by-keys",44444284),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["int",null,"prod",null,"dev",null,"stage",null], null), null),project_keys], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("jelli.hackday-environ-manager.events","gather-project-version-data","jelli.hackday-environ-manager.events/gather-project-version-data",-1128600435),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.events.defer_event_interceptor(jelli.hackday_environ_manager.events.project_gather_inflight_QMARK_)], null),(function (p__71206,p__71207){
var map__71208 = p__71206;
var map__71208__$1 = cljs.core.__destructure_map(map__71208);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71208__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__71209 = p__71207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71209,(0),null);
var project_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71209,(1),null);
var env_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"environments","environments",-1203608657).cljs$core$IFn$_invoke$arity$1(db));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","gather-version-data-by-keys","jelli.hackday-environ-manager.events/gather-version-data-by-keys",44444284),env_keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [project_key], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("jelli.hackday-environ-manager.events","select-environment","jelli.hackday-environ-manager.events/select-environment",-853989372),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.events.defer_event_interceptor(jelli.hackday_environ_manager.events.project_gather_inflight_QMARK_)], null),(function (p__71213,p__71214){
var map__71215 = p__71213;
var map__71215__$1 = cljs.core.__destructure_map(map__71215);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71215__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__71216 = p__71214;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71216,(0),null);
var new_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71216,(1),null);
var new_environment = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([new_env]),new cljs.core.Keyword(null,"key","key",-1516042587)),new cljs.core.Keyword(null,"environments","environments",-1203608657).cljs$core$IFn$_invoke$arity$1(db)));
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("env-dashboard","current-environment","env-dashboard/current-environment",1586864754),new_environment);
var version_links = jelli.hackday_environ_manager.events.version_links.cljs$core$IFn$_invoke$arity$2(new_environment,new_db);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71212_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword("jelli.hackday-environ-manager.events","gather-version-data","jelli.hackday-environ-manager.events/gather-version-data",2077141996),p1__71212_SHARP_],null));
}),version_links)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("jelli.hackday-environ-manager.events","select-project","jelli.hackday-environ-manager.events/select-project",1547454699),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.events.defer_event_interceptor(jelli.hackday_environ_manager.events.project_gather_inflight_QMARK_)], null),(function (db,p__71219){
var vec__71220 = p__71219;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71220,(0),null);
var new_project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71220,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("project-edit","selected-project","project-edit/selected-project",125046075),new_project);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("jelli.hackday-environ-manager.events","deselect-project","jelli.hackday-environ-manager.events/deselect-project",1861211720),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.events.defer_event_interceptor(jelli.hackday_environ_manager.events.project_gather_inflight_QMARK_)], null),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword("project-edit","selected-project","project-edit/selected-project",125046075));
}));
jelli.hackday_environ_manager.events.ms_defaults = (function jelli$hackday_environ_manager$events$ms_defaults(new_project_name){
var path_end = [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new_project_name,(3)),"/"].join('');
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"microservice-name","microservice-name",-818687414),new_project_name,new cljs.core.Keyword(null,"default-link-pattern","default-link-pattern",-1751468180),["http://ENVIRONMENT-xapi.play.us-west-2.jelli.net/",path_end].join(''),new cljs.core.Keyword(null,"link-overrides","link-overrides",-750154088),new cljs.core.PersistentArrayMap(null, 4, ["prod",["https://xapi.jelli.com/",path_end].join(''),"dev",["https://xapi.dev.jelli.com/",path_end].join(''),"stage",["https://xapi.stage.jelli.com/",path_end].join(''),"int",["https://xapi.int.jelli.com/",path_end].join('')], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","create-project","jelli.hackday-environ-manager.events/create-project",-77975949),(function (p__71223,p__71224){
var map__71225 = p__71223;
var map__71225__$1 = cljs.core.__destructure_map(map__71225);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71225__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__71226 = p__71224;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71226,(0),null);
var new_project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71226,(1),null);
var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_project);
var new_project__$1 = (function (){var G__71229 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"friendly-name","friendly-name",44432795),new_project], null);
if(clojure.string.starts_with_QMARK_(new_project,"ms-")){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__71229,jelli.hackday_environ_manager.events.ms_defaults(new_project)], 0));
} else {
return G__71229;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-data","project-data",-1812708430),k], null),new_project__$1),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","edit-project","routes/edit-project",731538279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"project","project",1124394579),k], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","update-project-def","jelli.hackday-environ-manager.events/update-project-def",-141755124),k,new_project__$1], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","project-saved","jelli.hackday-environ-manager.events/project-saved",-1631666137),(function (_,p__71230){
var vec__71231 = p__71230;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71231,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71231,(1),null);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","update-project-def","jelli.hackday-environ-manager.events/update-project-def",-141755124),(function (p__71234,p__71235){
var map__71236 = p__71234;
var map__71236__$1 = cljs.core.__destructure_map(map__71236);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71236__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__71237 = p__71235;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71237,(0),null);
var project = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71237,(1),null);
var new_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71237,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-data","project-data",-1812708430),project], null),new_def),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(jelli.hackday_environ_manager.events.envmgr_be_base_url),"v1/projectdata"].join(''),new cljs.core.Keyword(null,"params","params",710516235),jelli.hackday_environ_manager.events.project_data_ui__GT_api(project,new_def),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","project-saved","jelli.hackday-environ-manager.events/project-saved",-1631666137)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","project-data-receipt-failure","jelli.hackday-environ-manager.events/project-data-receipt-failure",880156574)], null)], null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","project-list","routes/project-list",-1361208132)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("jelli.hackday-environ-manager.events","save-techops-link","jelli.hackday-environ-manager.events/save-techops-link",-1480463455),(function (p__71240,p__71241){
var map__71242 = p__71240;
var map__71242__$1 = cljs.core.__destructure_map(map__71242);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71242__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__71243 = p__71241;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71243,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71243,(1),null);
var link_def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71243,(2),null);
var return_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71243,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"techops-links","techops-links",1679511575),k], null),link_def),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword("routes","env-dashboard","routes/env-dashboard",1685992275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"env","env",-1815813235),return_env], null)], null)], null);
}));

//# sourceMappingURL=jelli.hackday_environ_manager.events.js.map
