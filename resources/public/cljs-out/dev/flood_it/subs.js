// Compiled by ClojureScript 1.10.520 {}
goog.provide('flood_it.subs');
goog.require('cljs.core');
goog.require('flood_it.util');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),(function (db,_){
return new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"move","move",-2110884309),(function (db,_){
return new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"levels","levels",-950747887),(function (db,_){
return new cljs.core.Keyword(null,"levels","levels",-950747887).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-level-num","current-level-num",-1029201441),(function (db,_){
return new cljs.core.Keyword(null,"current-level-num","current-level-num",-1029201441).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"current-level","current-level",-11925890),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"levels","levels",-950747887)], null)),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-num","current-level-num",-1029201441)], null))], null);
}),(function (p__33057){
var vec__33058 = p__33057;
var levels = cljs.core.nth.call(null,vec__33058,(0),null);
var current_level_num = cljs.core.nth.call(null,vec__33058,(1),null);
return cljs.core.get.call(null,levels,current_level_num);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"next-size","next-size",404375148),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"levels","levels",-950747887)], null)),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-num","current-level-num",-1029201441)], null))], null);
}),(function (p__33061){
var vec__33062 = p__33061;
var levels = cljs.core.nth.call(null,vec__33062,(0),null);
var current_level_num = cljs.core.nth.call(null,vec__33062,(1),null);
return cljs.core.get_in.call(null,levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(current_level_num + (1)),new cljs.core.Keyword(null,"size","size",1098693007)], null));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"size","size",1098693007),(function (){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null));
}),(function (current_level){
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(current_level);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732),(function (){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null));
}),(function (current_level){
return new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(current_level);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"max","max",61366548),(function (){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null));
}),(function (current_level){
return new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(current_level);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null));
}),(function (current_level){
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(current_level);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"password","password",417022471),(function (){
return re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level","current-level",-11925890)], null));
}),(function (current_level){
return new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(current_level);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"passwords","passwords",-403324634),(function (db,_){
return clojure.set.map_invert.call(null,flood_it.util.map_kv.call(null,(function (p1__33065_SHARP_){
return new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(p1__33065_SHARP_);
}),new cljs.core.Keyword(null,"levels","levels",-950747887).cljs$core$IFn$_invoke$arity$1(db)));
}));

//# sourceMappingURL=subs.js.map
