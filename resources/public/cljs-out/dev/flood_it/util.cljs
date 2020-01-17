(ns flood-it.util
  (:require
   [re-frame.core :as rf]))

(defn map-kv [f coll]
  (reduce-kv (fn [m k v] (assoc m k (f v))) (empty coll) coll))
