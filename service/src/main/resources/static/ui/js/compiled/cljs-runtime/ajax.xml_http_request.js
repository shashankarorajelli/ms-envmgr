goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__69165 = e.target.readyState;
var fexpr__69164 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__69164.cljs$core$IFn$_invoke$arity$1 ? fexpr__69164.cljs$core$IFn$_invoke$arity$1(G__69165) : fexpr__69164.call(null,G__69165));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__69176,handler){
var map__69177 = p__69176;
var map__69177__$1 = cljs.core.__destructure_map(map__69177);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69177__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69177__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69177__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69177__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69177__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69177__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69177__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__69175_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__69175_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___69212 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___69212)){
var response_type_69213 = temp__5753__auto___69212;
(this$__$1.responseType = cljs.core.name(response_type_69213));
} else {
}

var seq__69183_69214 = cljs.core.seq(headers);
var chunk__69184_69215 = null;
var count__69185_69216 = (0);
var i__69186_69217 = (0);
while(true){
if((i__69186_69217 < count__69185_69216)){
var vec__69199_69223 = chunk__69184_69215.cljs$core$IIndexed$_nth$arity$2(null,i__69186_69217);
var k_69224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69199_69223,(0),null);
var v_69225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69199_69223,(1),null);
this$__$1.setRequestHeader(k_69224,v_69225);


var G__69226 = seq__69183_69214;
var G__69227 = chunk__69184_69215;
var G__69228 = count__69185_69216;
var G__69229 = (i__69186_69217 + (1));
seq__69183_69214 = G__69226;
chunk__69184_69215 = G__69227;
count__69185_69216 = G__69228;
i__69186_69217 = G__69229;
continue;
} else {
var temp__5753__auto___69230 = cljs.core.seq(seq__69183_69214);
if(temp__5753__auto___69230){
var seq__69183_69231__$1 = temp__5753__auto___69230;
if(cljs.core.chunked_seq_QMARK_(seq__69183_69231__$1)){
var c__4638__auto___69232 = cljs.core.chunk_first(seq__69183_69231__$1);
var G__69233 = cljs.core.chunk_rest(seq__69183_69231__$1);
var G__69234 = c__4638__auto___69232;
var G__69235 = cljs.core.count(c__4638__auto___69232);
var G__69236 = (0);
seq__69183_69214 = G__69233;
chunk__69184_69215 = G__69234;
count__69185_69216 = G__69235;
i__69186_69217 = G__69236;
continue;
} else {
var vec__69205_69237 = cljs.core.first(seq__69183_69231__$1);
var k_69238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69205_69237,(0),null);
var v_69239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69205_69237,(1),null);
this$__$1.setRequestHeader(k_69238,v_69239);


var G__69240 = cljs.core.next(seq__69183_69231__$1);
var G__69241 = null;
var G__69242 = (0);
var G__69243 = (0);
seq__69183_69214 = G__69240;
chunk__69184_69215 = G__69241;
count__69185_69216 = G__69242;
i__69186_69217 = G__69243;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4212__auto__ = body;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
