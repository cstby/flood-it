// Compiled by ClojureScript 1.10.520 {}
goog.provide('flood_it.events');
goog.require('cljs.core');
goog.require('flood_it.logic');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"flood","flood",557419261),(function (db,p__33102){
var vec__33103 = p__33102;
var _ = cljs.core.nth.call(null,vec__33103,(0),null);
var new_color = cljs.core.nth.call(null,vec__33103,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"board","board",-1907017633),((function (vec__33103,_,new_color){
return (function (p1__33101_SHARP_){
return flood_it.logic.flood.call(null,p1__33101_SHARP_,new_color);
});})(vec__33103,_,new_color))
);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-move","inc-move",-1890506383),(function (db,_){
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"move","move",-2110884309),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"go-to-level","go-to-level",-753870480),(function (db,p__33106){
var vec__33107 = p__33106;
var _ = cljs.core.nth.call(null,vec__33107,(0),null);
var new_level = cljs.core.nth.call(null,vec__33107,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-level-num","current-level-num",-1029201441),new_level),new cljs.core.Keyword(null,"move","move",-2110884309),(0)),new cljs.core.Keyword(null,"board","board",-1907017633),flood_it.logic.new_board.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"levels","levels",-950747887)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_level,new cljs.core.Keyword(null,"size","size",1098693007)], null))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"next-level","next-level",-1215231698),(function (db,_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"current-level-num","current-level-num",-1029201441),cljs.core.inc),new cljs.core.Keyword(null,"move","move",-2110884309),(0)),new cljs.core.Keyword(null,"board","board",-1907017633),flood_it.logic.new_board.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-size","next-size",404375148)], null)))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),(function (db,_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-level-num","current-level-num",-1029201441),(1)),new cljs.core.Keyword(null,"move","move",-2110884309),(0)),new cljs.core.Keyword(null,"board","board",-1907017633),flood_it.logic.new_board.call(null,(4)));
}));

//# sourceMappingURL=events.js.map
