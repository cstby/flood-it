(ns flood-it.styles
  (:require
   [garden.def :refer [defstyles]]))

(defstyles style
  [:body {:background       "#fafafa"
          :margin           "10px 10px 10px 10px"
          :height           "100%"
          :color            "#3a3a3a"
          :font-family      "Futura, \"Century Gothic\" Palatino, sans-serif"
          :user-select      "none"
          :overflow         "hidden"
          :text-size-adjust "100%"}]
  [:h1 {:margin-bottom "30px"}]
  [:.my-class {:width "400px" :clear "both"}]
  #_[:.my-class {:font-size "20px" :background "#ddf"}])
