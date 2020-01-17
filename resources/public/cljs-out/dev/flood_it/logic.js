// Compiled by ClojureScript 1.10.520 {}
goog.provide('flood_it.logic');
goog.require('cljs.core');
flood_it.logic.board_size = (12);
/**
 * 
 */
flood_it.logic.new_board = (function flood_it$logic$new_board(board_size){
return cljs.core.mapv.call(null,cljs.core.vec,cljs.core.partition.call(null,board_size,cljs.core.take.call(null,(board_size * board_size),cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_int.call(null,(5));
})))));
});
flood_it.logic.valid_QMARK_ = (function flood_it$logic$valid_QMARK_(p__33070){
var vec__33071 = p__33070;
var x = cljs.core.nth.call(null,vec__33071,(0),null);
var y = cljs.core.nth.call(null,vec__33071,(1),null);
return (((!((x < (0))))) && ((!((y < (0))))));
});
flood_it.logic.nbs = (function flood_it$logic$nbs(p__33074){
var vec__33075 = p__33074;
var x = cljs.core.nth.call(null,vec__33075,(0),null);
var y = cljs.core.nth.call(null,vec__33075,(1),null);
return cljs.core.filter.call(null,flood_it.logic.valid_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null)], null));
});
/**
 * Given the board and a celll, returns neigboring cells of the origin color.
 */
flood_it.logic.same_colored_nbs = (function flood_it$logic$same_colored_nbs(board,cell){
return cljs.core.filter.call(null,(function (p1__33078_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.get_in.call(null,board,p1__33078_SHARP_));
}),flood_it.logic.nbs.call(null,cell));
});
/**
 * Gives a set of the cells that need to change
 */
flood_it.logic.cells_to_change = (function flood_it$logic$cells_to_change(board){
var cells = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)]);
while(true){
var new_cells = clojure.set.union.call(null,cells,cljs.core.set.call(null,cljs.core.mapcat.call(null,((function (cells){
return (function (p1__33079_SHARP_){
return flood_it.logic.same_colored_nbs.call(null,board,p1__33079_SHARP_);
});})(cells))
,cells)));
if(cljs.core._EQ_.call(null,cells,new_cells)){
return cells;
} else {
var G__33080 = new_cells;
cells = G__33080;
continue;
}
break;
}
});
/**
 * Given a color, returns a new board after flooding.
 */
flood_it.logic.flood = (function flood_it$logic$flood(board,color){
return cljs.core.reduce.call(null,(function (p1__33081_SHARP_,p2__33082_SHARP_){
return cljs.core.assoc_in.call(null,p1__33081_SHARP_,p2__33082_SHARP_,color);
}),board,flood_it.logic.cells_to_change.call(null,board));
});
/**
 * Retruns true if player has won.
 */
flood_it.logic.win_QMARK_ = (function flood_it$logic$win_QMARK_(board){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.apply.call(null,cljs.core.concat,board));
});

//# sourceMappingURL=logic.js.map
