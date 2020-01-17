(ns flood-it.view
  (:require
   [flood-it.logic :as logic]
   [reagent.core :as reagent :refer [atom]]
   [re-frame.core :as rf]))

(defn square [i j]
  [:rect
   {:width    1 
    :height   1 
    :x        i 
    :y        j 
    :style    {:fill       (@(rf/subscribe [:colors]) (get-in @(rf/subscribe [:board]) [i j]))
               :transition "fill 1s linear"}
    :on-click (fn [e]
                (when (not= (get-in @(rf/subscribe [:board]) [i j])
                            (get-in @(rf/subscribe [:board]) [0 0]))
                  (rf/dispatch [:flood (get-in @(rf/subscribe [:board]) [i j])])
                  (rf/dispatch [:inc-move])))}])

(defn overlay-text
  [text on-click-event]
  (reagent/with-let [color (reagent/atom "#3a3a3a")]
    [:text
     {:x                 "50%"
      :y                 "50%"
      :dominant-baseline "middle"
      :text-anchor       "middle"
      :style             {:transition "all 0.5s linear"}
      :font-size         (* 0.15 @(rf/subscribe [:size]))
      :fill              @color
      :on-click          #(rf/dispatch [on-click-event])
      :on-mouse-over     (fn [e] (reset! color "#fafafa"))
      :on-mouse-out      (fn [e] (reset! color "#3a3a3a"))}
     text]))

(defn win-lose-overlay []
  (cond
    (logic/win? @(rf/subscribe [:board])) (overlay-text @(rf/subscribe [:text]) :next-level)
    (>= @(rf/subscribe [:move])
        @(rf/subscribe [:max]))           (overlay-text "Game Over" :game-over)))

(defn password-input [value]
  [:div
   [:p "Enter password to skip to level: "
    [:input
     {:type      "text"
      :value     @value
      :on-change (fn [e]
                   (.preventDefault e)
                   (reset! value (-> e .-target .-value))
                   (when (contains? (set (keys @(rf/subscribe [:passwords]))) @value)
                     (rf/dispatch [:go-to-level (get @(rf/subscribe [:passwords]) @value)])))}]]])

(defn dashboard []
  [:div.my-class
   [:p {:style {:float "left"}} "Move: " @(rf/subscribe [:move]) "/" @(rf/subscribe [:max])]
   [:p  {:style {:float "right"}} "Level: " @(rf/subscribe [:current-level-num]) "/8"]])

(defn password []
  [:div.my-class
   (if (= 1 @(rf/subscribe [:current-level-num]))
     [password-input (atom "")]
     [:p "Password: " @(rf/subscribe [:password])])])

(defn board []
  [:svg
   {:shape-rendering "crispEdges"
    :view-box        (str "0 0 " @(rf/subscribe [:size]) " "  @(rf/subscribe [:size]))
    :width           400
    :height          400
    :style           {:border-style  "solid"
                      :border-width  "10px"
                      :border-radius "10px"
                      :box-shadow    "0 5px 5px rgba(0,0,0,0.5)"}}
   (let [size @(rf/subscribe [:size])]
     (for [i (range size)
           j (range size)]
       ^{:key [i j]} [square i j]))
   [win-lose-overlay]])

(defn flood-it []
  [:center
   [:h1 "Flood It!"]
   [dashboard]
   [board]
   [password]])
