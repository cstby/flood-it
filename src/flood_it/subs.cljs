(ns flood-it.subs
  "All re-frame subscriptions."
  (:require
   [flood-it.util :as util]
   [re-frame.core :as rf]))

(rf/reg-sub
 :board
 (fn [db _]
   (:board db)))

(rf/reg-sub
 :move
 (fn [db _]
   (:move db)))

(rf/reg-sub
 :levels
 (fn [db _]
   (:levels db)))

(rf/reg-sub
 :current-level-num
 (fn [db _]
   (:current-level-num db)))

(rf/reg-sub
 :current-level
 (fn []
   [(rf/subscribe [:levels])
    (rf/subscribe [:current-level-num])])
 (fn [[levels current-level-num]]
   (get levels current-level-num)))

(rf/reg-sub
 :next-size
 (fn []
   [(rf/subscribe [:levels])
    (rf/subscribe [:current-level-num])])
 (fn [[levels current-level-num]]
   (get-in levels [(inc current-level-num) :size])))

(rf/reg-sub
 :size
 (fn []
   (rf/subscribe [:current-level]))
 (fn [current-level]
   (:size current-level)))

(rf/reg-sub
 :colors
 (fn []
   (rf/subscribe [:current-level]))
 (fn [current-level]
   (:colors current-level)))

(rf/reg-sub
 :max
 (fn []
   (rf/subscribe [:current-level]))
 (fn [current-level]
   (:max current-level)))

(rf/reg-sub
 :text
 (fn []
   (rf/subscribe [:current-level]))
 (fn [current-level]
   (:text current-level)))

(rf/reg-sub
 :password
 (fn []
   (rf/subscribe [:current-level]))
 (fn [current-level]
   (:password current-level)))

(rf/reg-sub
 :passwords
 (fn [db _]
   (clojure.set/map-invert (util/map-kv #(:password %) (:levels db)))))

