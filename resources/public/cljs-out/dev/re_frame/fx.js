// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__17976 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17977 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17977;

try{try{var seq__17978 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__17979 = null;
var count__17980 = (0);
var i__17981 = (0);
while(true){
if((i__17981 < count__17980)){
var vec__17988 = cljs.core._nth.call(null,chunk__17979,i__17981);
var effect_key = cljs.core.nth.call(null,vec__17988,(0),null);
var effect_value = cljs.core.nth.call(null,vec__17988,(1),null);
var temp__5455__auto___18010 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___18010)){
var effect_fn_18011 = temp__5455__auto___18010;
effect_fn_18011.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18012 = seq__17978;
var G__18013 = chunk__17979;
var G__18014 = count__17980;
var G__18015 = (i__17981 + (1));
seq__17978 = G__18012;
chunk__17979 = G__18013;
count__17980 = G__18014;
i__17981 = G__18015;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17978);
if(temp__5457__auto__){
var seq__17978__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17978__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17978__$1);
var G__18016 = cljs.core.chunk_rest.call(null,seq__17978__$1);
var G__18017 = c__4550__auto__;
var G__18018 = cljs.core.count.call(null,c__4550__auto__);
var G__18019 = (0);
seq__17978 = G__18016;
chunk__17979 = G__18017;
count__17980 = G__18018;
i__17981 = G__18019;
continue;
} else {
var vec__17991 = cljs.core.first.call(null,seq__17978__$1);
var effect_key = cljs.core.nth.call(null,vec__17991,(0),null);
var effect_value = cljs.core.nth.call(null,vec__17991,(1),null);
var temp__5455__auto___18020 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___18020)){
var effect_fn_18021 = temp__5455__auto___18020;
effect_fn_18021.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18022 = cljs.core.next.call(null,seq__17978__$1);
var G__18023 = null;
var G__18024 = (0);
var G__18025 = (0);
seq__17978 = G__18022;
chunk__17979 = G__18023;
count__17980 = G__18024;
i__17981 = G__18025;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__15497__auto___18026 = re_frame.interop.now.call(null);
var duration__15498__auto___18027 = (end__15497__auto___18026 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__15498__auto___18027,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__15497__auto___18026);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17976;
}} else {
var seq__17994 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__17995 = null;
var count__17996 = (0);
var i__17997 = (0);
while(true){
if((i__17997 < count__17996)){
var vec__18004 = cljs.core._nth.call(null,chunk__17995,i__17997);
var effect_key = cljs.core.nth.call(null,vec__18004,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18004,(1),null);
var temp__5455__auto___18028 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___18028)){
var effect_fn_18029 = temp__5455__auto___18028;
effect_fn_18029.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18030 = seq__17994;
var G__18031 = chunk__17995;
var G__18032 = count__17996;
var G__18033 = (i__17997 + (1));
seq__17994 = G__18030;
chunk__17995 = G__18031;
count__17996 = G__18032;
i__17997 = G__18033;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17994);
if(temp__5457__auto__){
var seq__17994__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17994__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17994__$1);
var G__18034 = cljs.core.chunk_rest.call(null,seq__17994__$1);
var G__18035 = c__4550__auto__;
var G__18036 = cljs.core.count.call(null,c__4550__auto__);
var G__18037 = (0);
seq__17994 = G__18034;
chunk__17995 = G__18035;
count__17996 = G__18036;
i__17997 = G__18037;
continue;
} else {
var vec__18007 = cljs.core.first.call(null,seq__17994__$1);
var effect_key = cljs.core.nth.call(null,vec__18007,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18007,(1),null);
var temp__5455__auto___18038 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___18038)){
var effect_fn_18039 = temp__5455__auto___18038;
effect_fn_18039.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18040 = cljs.core.next.call(null,seq__17994__$1);
var G__18041 = null;
var G__18042 = (0);
var G__18043 = (0);
seq__17994 = G__18040;
chunk__17995 = G__18041;
count__17996 = G__18042;
i__17997 = G__18043;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__18044 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18045 = null;
var count__18046 = (0);
var i__18047 = (0);
while(true){
if((i__18047 < count__18046)){
var map__18052 = cljs.core._nth.call(null,chunk__18045,i__18047);
var map__18052__$1 = (((((!((map__18052 == null))))?(((((map__18052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18052):map__18052);
var effect = map__18052__$1;
var ms = cljs.core.get.call(null,map__18052__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18052__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__18044,chunk__18045,count__18046,i__18047,map__18052,map__18052__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__18044,chunk__18045,count__18046,i__18047,map__18052,map__18052__$1,effect,ms,dispatch))
,ms);
}


var G__18056 = seq__18044;
var G__18057 = chunk__18045;
var G__18058 = count__18046;
var G__18059 = (i__18047 + (1));
seq__18044 = G__18056;
chunk__18045 = G__18057;
count__18046 = G__18058;
i__18047 = G__18059;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__18044);
if(temp__5457__auto__){
var seq__18044__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18044__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18044__$1);
var G__18060 = cljs.core.chunk_rest.call(null,seq__18044__$1);
var G__18061 = c__4550__auto__;
var G__18062 = cljs.core.count.call(null,c__4550__auto__);
var G__18063 = (0);
seq__18044 = G__18060;
chunk__18045 = G__18061;
count__18046 = G__18062;
i__18047 = G__18063;
continue;
} else {
var map__18054 = cljs.core.first.call(null,seq__18044__$1);
var map__18054__$1 = (((((!((map__18054 == null))))?(((((map__18054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18054):map__18054);
var effect = map__18054__$1;
var ms = cljs.core.get.call(null,map__18054__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18054__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__18044,chunk__18045,count__18046,i__18047,map__18054,map__18054__$1,effect,ms,dispatch,seq__18044__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__18044,chunk__18045,count__18046,i__18047,map__18054,map__18054__$1,effect,ms,dispatch,seq__18044__$1,temp__5457__auto__))
,ms);
}


var G__18064 = cljs.core.next.call(null,seq__18044__$1);
var G__18065 = null;
var G__18066 = (0);
var G__18067 = (0);
seq__18044 = G__18064;
chunk__18045 = G__18065;
count__18046 = G__18066;
i__18047 = G__18067;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__18068 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18069 = null;
var count__18070 = (0);
var i__18071 = (0);
while(true){
if((i__18071 < count__18070)){
var event = cljs.core._nth.call(null,chunk__18069,i__18071);
re_frame.router.dispatch.call(null,event);


var G__18072 = seq__18068;
var G__18073 = chunk__18069;
var G__18074 = count__18070;
var G__18075 = (i__18071 + (1));
seq__18068 = G__18072;
chunk__18069 = G__18073;
count__18070 = G__18074;
i__18071 = G__18075;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__18068);
if(temp__5457__auto__){
var seq__18068__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18068__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18068__$1);
var G__18076 = cljs.core.chunk_rest.call(null,seq__18068__$1);
var G__18077 = c__4550__auto__;
var G__18078 = cljs.core.count.call(null,c__4550__auto__);
var G__18079 = (0);
seq__18068 = G__18076;
chunk__18069 = G__18077;
count__18070 = G__18078;
i__18071 = G__18079;
continue;
} else {
var event = cljs.core.first.call(null,seq__18068__$1);
re_frame.router.dispatch.call(null,event);


var G__18080 = cljs.core.next.call(null,seq__18068__$1);
var G__18081 = null;
var G__18082 = (0);
var G__18083 = (0);
seq__18068 = G__18080;
chunk__18069 = G__18081;
count__18070 = G__18082;
i__18071 = G__18083;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__18084 = cljs.core.seq.call(null,value);
var chunk__18085 = null;
var count__18086 = (0);
var i__18087 = (0);
while(true){
if((i__18087 < count__18086)){
var event = cljs.core._nth.call(null,chunk__18085,i__18087);
clear_event.call(null,event);


var G__18088 = seq__18084;
var G__18089 = chunk__18085;
var G__18090 = count__18086;
var G__18091 = (i__18087 + (1));
seq__18084 = G__18088;
chunk__18085 = G__18089;
count__18086 = G__18090;
i__18087 = G__18091;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__18084);
if(temp__5457__auto__){
var seq__18084__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18084__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18084__$1);
var G__18092 = cljs.core.chunk_rest.call(null,seq__18084__$1);
var G__18093 = c__4550__auto__;
var G__18094 = cljs.core.count.call(null,c__4550__auto__);
var G__18095 = (0);
seq__18084 = G__18092;
chunk__18085 = G__18093;
count__18086 = G__18094;
i__18087 = G__18095;
continue;
} else {
var event = cljs.core.first.call(null,seq__18084__$1);
clear_event.call(null,event);


var G__18096 = cljs.core.next.call(null,seq__18084__$1);
var G__18097 = null;
var G__18098 = (0);
var G__18099 = (0);
seq__18084 = G__18096;
chunk__18085 = G__18097;
count__18086 = G__18098;
i__18087 = G__18099;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
