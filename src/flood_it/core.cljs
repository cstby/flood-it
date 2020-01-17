(ns ^:figwheel-hooks flood-it.core
  (:require
   [flood-it.db :as db]
   [flood-it.subs :as subs]
   [flood-it.view :as view]
   [flood-it.events :as events]
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [re-frame.core :as rf]))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (rf/dispatch-sync [:initialize])
  (reagent/render-component [view/flood-it] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
