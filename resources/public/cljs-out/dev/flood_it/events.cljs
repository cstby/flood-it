(ns flood-it.events
  "All re-frame events."
  (:require
   [flood-it.logic :as logic]
   [re-frame.core :as rf]))

(rf/reg-event-db              
 :flood
 (fn [db [_ new-color]]
   (update db :board #(logic/flood % new-color ))))

(rf/reg-event-db              
 :inc-move
 (fn [db _]
   (update db :move inc)))

(rf/reg-event-db              
 :go-to-level
 (fn [db [_ new-level]]
   (-> db
       (assoc :current-level-num new-level)
       (assoc :move 0)
       (assoc :board (logic/new-board (get-in @(rf/subscribe [:levels]) [new-level :size]))))))

(rf/reg-event-db              
 :next-level
 (fn [db _]
   (-> db
       (update :current-level-num inc)
       (assoc :move 0)
       (assoc :board (logic/new-board @(rf/subscribe [:next-size]))))))

(rf/reg-event-db              
 :game-over
 (fn [db _]
   (-> db
       (assoc :current-level-num 1)
       (assoc :move 0)
       (assoc :board (logic/new-board 4)))))
