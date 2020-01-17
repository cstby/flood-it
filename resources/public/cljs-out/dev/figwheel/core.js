// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__32704_SHARP_){
var k = f.call(null,p1__32704_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__32705){
var vec__32706 = p__32705;
var k = cljs.core.nth.call(null,vec__32706,(0),null);
var v = cljs.core.nth.call(null,vec__32706,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32710 = arguments.length;
var i__4731__auto___32711 = (0);
while(true){
if((i__4731__auto___32711 < len__4730__auto___32710)){
args__4736__auto__.push((arguments[i__4731__auto___32711]));

var G__32712 = (i__4731__auto___32711 + (1));
i__4731__auto___32711 = G__32712;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq32709){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32709));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__32715){
var map__32716 = p__32715;
var map__32716__$1 = (((((!((map__32716 == null))))?(((((map__32716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32716):map__32716);
var message = cljs.core.get.call(null,map__32716__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__32716__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__32716,map__32716__$1,message,column){
return (function (p1__32714_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32714_SHARP_], null)));
});})(map__32716,map__32716__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__32716,map__32716__$1,message,column){
return (function (p1__32713_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__32713_SHARP_);
});})(map__32716,map__32716__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__32719){
var map__32720 = p__32719;
var map__32720__$1 = (((((!((map__32720 == null))))?(((((map__32720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32720):map__32720);
var message_data = map__32720__$1;
var message = cljs.core.get.call(null,map__32720__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__32720__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32720__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__32720__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__32722 = file_excerpt;
var map__32722__$1 = (((((!((map__32722 == null))))?(((((map__32722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32722):map__32722);
var start_line = cljs.core.get.call(null,map__32722__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__32722__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__32722__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__32722,map__32722__$1,start_line,path,excerpt,map__32720,map__32720__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__32722,map__32722__$1,start_line,path,excerpt,map__32720,map__32720__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__32723 = cljs.core.split_with.call(null,((function (map__32722,map__32722__$1,start_line,path,excerpt,lines,map__32720,map__32720__$1,message_data,message,line,column,file_excerpt){
return (function (p1__32718_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__32718_SHARP_));
});})(map__32722,map__32722__$1,start_line,path,excerpt,lines,map__32720,map__32720__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__32723,(0),null);
var end = cljs.core.nth.call(null,vec__32723,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__32727){
var map__32728 = p__32727;
var map__32728__$1 = (((((!((map__32728 == null))))?(((((map__32728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32728):map__32728);
var file = cljs.core.get.call(null,map__32728__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32728__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32728__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32730 = "";
var G__32730__$1 = (cljs.core.truth_(file)?[G__32730,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32730);
var G__32730__$2 = (cljs.core.truth_(line)?[G__32730__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32730__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__32730__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32730__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_32785 = (new goog.debug.Console());
var G__32737_32786 = c_32785.getFormatter();
goog.object.set(G__32737_32786,"showAbsoluteTime",false);

goog.object.set(G__32737_32786,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_32785);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__32738 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__32738,"data",(function (){var or__4131__auto__ = data;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__32738;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5455__auto__ = e.event_;
if(cljs.core.truth_(temp__5455__auto__)){
var e__$1 = temp__5455__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && ((!((goog.global.document == null)))));
});

var last_reload_timestamp_32787 = cljs.core.atom.call(null,(0));
var promise_chain_32788 = (new goog.Promise(((function (last_reload_timestamp_32787){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_32787))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_32787,promise_chain_32788){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5455__auto__ = (function (){var temp__5457__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5457__auto__)){
var ts = temp__5457__auto__;
var and__4120__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_32787) < ts);
if(and__4120__auto__){
return ts;
} else {
return and__4120__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var ts = temp__5455__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_32787,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_32788.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_32787,promise_chain_32788){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__32739 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__32740 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__32740;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__32739,_STAR_inline_code_message_max_column_STAR__temp_val__32740,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_32787,promise_chain_32788){
return (function (){
var seq__32741 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__32742 = null;
var count__32743 = (0);
var i__32744 = (0);
while(true){
if((i__32744 < count__32743)){
var w = cljs.core._nth.call(null,chunk__32742,i__32744);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__32789 = seq__32741;
var G__32790 = chunk__32742;
var G__32791 = count__32743;
var G__32792 = (i__32744 + (1));
seq__32741 = G__32789;
chunk__32742 = G__32790;
count__32743 = G__32791;
i__32744 = G__32792;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32741);
if(temp__5457__auto__){
var seq__32741__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32741__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32741__$1);
var G__32793 = cljs.core.chunk_rest.call(null,seq__32741__$1);
var G__32794 = c__4550__auto__;
var G__32795 = cljs.core.count.call(null,c__4550__auto__);
var G__32796 = (0);
seq__32741 = G__32793;
chunk__32742 = G__32794;
count__32743 = G__32795;
i__32744 = G__32796;
continue;
} else {
var w = cljs.core.first.call(null,seq__32741__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__32797 = cljs.core.next.call(null,seq__32741__$1);
var G__32798 = null;
var G__32799 = (0);
var G__32800 = (0);
seq__32741 = G__32797;
chunk__32742 = G__32798;
count__32743 = G__32799;
i__32744 = G__32800;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__32739,_STAR_inline_code_message_max_column_STAR__temp_val__32740,warn,warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_32787,promise_chain_32788))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__32739;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_32787,promise_chain_32788))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_32788.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_32787,promise_chain_32788){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__32745 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__32746 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__32746;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__32745;
}});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_32787,promise_chain_32788))
);
} else {
return promise_chain_32788.then(((function (warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_32787,promise_chain_32788){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5455__auto__,last_reload_timestamp_32787,promise_chain_32788))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_32787,promise_chain_32788))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4120__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4120__auto____$1){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32801 = arguments.length;
var i__4731__auto___32802 = (0);
while(true){
if((i__4731__auto___32802 < len__4730__auto___32801)){
args__4736__auto__.push((arguments[i__4731__auto___32802]));

var G__32803 = (i__4731__auto___32802 + (1));
i__4731__auto___32802 = G__32803;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__32749){
var vec__32750 = p__32749;
var n = cljs.core.nth.call(null,vec__32750,(0),null);
var mdata = cljs.core.nth.call(null,vec__32750,(1),null);
var temp__5457__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5457__auto__)){
var f = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__32753 = cljs.core.seq.call(null,hooks);
var chunk__32754 = null;
var count__32755 = (0);
var i__32756 = (0);
while(true){
if((i__32756 < count__32755)){
var vec__32763 = cljs.core._nth.call(null,chunk__32754,i__32756);
var n = cljs.core.nth.call(null,vec__32763,(0),null);
var f = cljs.core.nth.call(null,vec__32763,(1),null);
var temp__5455__auto___32804 = cljs.core.reduce.call(null,((function (seq__32753,chunk__32754,count__32755,i__32756,vec__32763,n,f,hooks){
return (function (p1__32731_SHARP_,p2__32732_SHARP_){
if(cljs.core.truth_(p1__32731_SHARP_)){
return goog.object.get(p1__32731_SHARP_,p2__32732_SHARP_);
} else {
return null;
}
});})(seq__32753,chunk__32754,count__32755,i__32756,vec__32763,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___32804)){
var hook_32805 = temp__5455__auto___32804;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_32805,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__32806 = seq__32753;
var G__32807 = chunk__32754;
var G__32808 = count__32755;
var G__32809 = (i__32756 + (1));
seq__32753 = G__32806;
chunk__32754 = G__32807;
count__32755 = G__32808;
i__32756 = G__32809;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32753);
if(temp__5457__auto__){
var seq__32753__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32753__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32753__$1);
var G__32810 = cljs.core.chunk_rest.call(null,seq__32753__$1);
var G__32811 = c__4550__auto__;
var G__32812 = cljs.core.count.call(null,c__4550__auto__);
var G__32813 = (0);
seq__32753 = G__32810;
chunk__32754 = G__32811;
count__32755 = G__32812;
i__32756 = G__32813;
continue;
} else {
var vec__32766 = cljs.core.first.call(null,seq__32753__$1);
var n = cljs.core.nth.call(null,vec__32766,(0),null);
var f = cljs.core.nth.call(null,vec__32766,(1),null);
var temp__5455__auto___32814 = cljs.core.reduce.call(null,((function (seq__32753,chunk__32754,count__32755,i__32756,vec__32766,n,f,seq__32753__$1,temp__5457__auto__,hooks){
return (function (p1__32731_SHARP_,p2__32732_SHARP_){
if(cljs.core.truth_(p1__32731_SHARP_)){
return goog.object.get(p1__32731_SHARP_,p2__32732_SHARP_);
} else {
return null;
}
});})(seq__32753,chunk__32754,count__32755,i__32756,vec__32766,n,f,seq__32753__$1,temp__5457__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5455__auto___32814)){
var hook_32815 = temp__5455__auto___32814;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_32815,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__32816 = cljs.core.next.call(null,seq__32753__$1);
var G__32817 = null;
var G__32818 = (0);
var G__32819 = (0);
seq__32753 = G__32816;
chunk__32754 = G__32817;
count__32755 = G__32818;
i__32756 = G__32819;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq32747){
var G__32748 = cljs.core.first.call(null,seq32747);
var seq32747__$1 = cljs.core.next.call(null,seq32747);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32748,seq32747__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__32769){
var vec__32770 = p__32769;
var k = cljs.core.nth.call(null,vec__32770,(0),null);
var v = cljs.core.nth.call(null,vec__32770,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__32733_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__32733_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__32733_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__32734_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__32734_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__4120__auto__ = (!(figwheel.core.load_warninged_code));
if(and__4120__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4120__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__32735_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__32735_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__32773_32820 = cljs.core.seq.call(null,to_reload);
var chunk__32774_32821 = null;
var count__32775_32822 = (0);
var i__32776_32823 = (0);
while(true){
if((i__32776_32823 < count__32775_32822)){
var ns_32824 = cljs.core._nth.call(null,chunk__32774_32821,i__32776_32823);
goog.require(cljs.core.name.call(null,ns_32824),true);


var G__32825 = seq__32773_32820;
var G__32826 = chunk__32774_32821;
var G__32827 = count__32775_32822;
var G__32828 = (i__32776_32823 + (1));
seq__32773_32820 = G__32825;
chunk__32774_32821 = G__32826;
count__32775_32822 = G__32827;
i__32776_32823 = G__32828;
continue;
} else {
var temp__5457__auto___32829 = cljs.core.seq.call(null,seq__32773_32820);
if(temp__5457__auto___32829){
var seq__32773_32830__$1 = temp__5457__auto___32829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32773_32830__$1)){
var c__4550__auto___32831 = cljs.core.chunk_first.call(null,seq__32773_32830__$1);
var G__32832 = cljs.core.chunk_rest.call(null,seq__32773_32830__$1);
var G__32833 = c__4550__auto___32831;
var G__32834 = cljs.core.count.call(null,c__4550__auto___32831);
var G__32835 = (0);
seq__32773_32820 = G__32832;
chunk__32774_32821 = G__32833;
count__32775_32822 = G__32834;
i__32776_32823 = G__32835;
continue;
} else {
var ns_32836 = cljs.core.first.call(null,seq__32773_32830__$1);
goog.require(cljs.core.name.call(null,ns_32836),true);


var G__32837 = cljs.core.next.call(null,seq__32773_32830__$1);
var G__32838 = null;
var G__32839 = (0);
var G__32840 = (0);
seq__32773_32820 = G__32837;
chunk__32774_32821 = G__32838;
count__32775_32822 = G__32839;
i__32776_32823 = G__32840;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_32841 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5457__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5457__auto__)){
var not_loaded = temp__5457__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_32841);
} else {
setTimeout(after_reload_fn_32841,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__32777 = cljs.core.seq.call(null,warnings);
var chunk__32778 = null;
var count__32779 = (0);
var i__32780 = (0);
while(true){
if((i__32780 < count__32779)){
var warning = cljs.core._nth.call(null,chunk__32778,i__32780);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__32842 = seq__32777;
var G__32843 = chunk__32778;
var G__32844 = count__32779;
var G__32845 = (i__32780 + (1));
seq__32777 = G__32842;
chunk__32778 = G__32843;
count__32779 = G__32844;
i__32780 = G__32845;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32777);
if(temp__5457__auto__){
var seq__32777__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32777__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32777__$1);
var G__32846 = cljs.core.chunk_rest.call(null,seq__32777__$1);
var G__32847 = c__4550__auto__;
var G__32848 = cljs.core.count.call(null,c__4550__auto__);
var G__32849 = (0);
seq__32777 = G__32846;
chunk__32778 = G__32847;
count__32779 = G__32848;
i__32780 = G__32849;
continue;
} else {
var warning = cljs.core.first.call(null,seq__32777__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__32850 = cljs.core.next.call(null,seq__32777__$1);
var G__32851 = null;
var G__32852 = (0);
var G__32853 = (0);
seq__32777 = G__32850;
chunk__32778 = G__32851;
count__32779 = G__32852;
i__32780 = G__32853;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__32781){
var map__32782 = p__32781;
var map__32782__$1 = (((((!((map__32782 == null))))?(((((map__32782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32782):map__32782);
var exception_data = map__32782__$1;
var file = cljs.core.get.call(null,map__32782__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__32782__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32782__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__32782,map__32782__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__32782,map__32782__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__32782,map__32782__$1,exception_data,file,type,message){
return (function (p1__32736_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__32736_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__32782,map__32782__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__32784 = "Compile Exception - ";
var G__32784__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return message;
}
})())?[G__32784,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__32784);
if(cljs.core.truth_(file)){
return [G__32784__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__32784__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
