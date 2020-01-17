(ns flood-it.db
  "Initialize the database"
  (:require
   [flood-it.logic :as logic]
   [re-frame.core :as rf]))

(rf/reg-event-db 
 :initialize                 
 (fn [_ _]                   
   {:board             (logic/new-board 4)
    :move              0
    :current-level-num 1
    :levels            {1 {:size     4
                           :max      10
                           :colors   {0 "#ffb3ba" ; pastel
                                      1 "#ffdfba"
                                      2 "#ffffba"
                                      3 "#baffc9"
                                      4 "#bae1ff"}
                           :text     "Nice!"
                           :password "ABC's"}
                        2 {:size     8
                           :max      16
                           :colors   {0 "#feda75" ; instagram
                                      1 "#fa7e1e"
                                      2 "#d62976"
                                      3 "#962fbf"
                                      4 "#4f5bd5"}
                           :text     "Awesome!"
                           :password "daily insta"}
                        3 {:size     9
                           :max      16
                           :colors   {0 "#ee4035" ; rainbow dash
                                      1 "#f37736"
                                      2 "#fdf498"
                                      3 "#7bc043"
                                      4 "#0392cf"}
                           :text     "You Rock!"
                           :password "rainbow"}
                        4 {:size     10
                           :max      16
                           :colors   {0 "#ef4566" ; minimalist floral  
                                      1 "#f69a9a "
                                      2 "#f9cdae"
                                      3 "#cbcba9"
                                      4 "#83ae9b"}
                           :text     "Stellar!"
                           :password "floral wallpaper"}
                        5 {:size     12
                           :max      20
                           :colors   {0 "#bbf7e5" ; mint choco cherry   
                                      1 "#f7f4de "
                                      2 "#d1b2a3"
                                      3 "#77543e"
                                      4 "#fc5555"}
                           :password "ice cream dream"
                           :text     "Marvelous!"}
                        6 {:size     14
                           :max      22
                           :colors   {0 "#435070" ; clouds and cardigans
                                      1 "#72acaa"
                                      2 "#c5d377"
                                      3 "#ffe28f"
                                      4 "#8f3d5e"}
                           :password "sweater weather"
                           :text     "Fabulous!"}
                        7 {:size     18
                           :max      26
                           :colors   {0 "#ffea93" ; i do adore
                                      1 "#ffc266"
                                      2 "#ff8d71"
                                      3 "#ff5d86"
                                      4 "#ff355d"}
                           :password "beach sunset"
                           :text     "Spectacular!"}
                        8 {:size     20
                           :max      30
                           :colors   {0 "#333333" ; shades of grey (mine)
                                      1 "#666666"
                                      2 "#999999"
                                      3 "#cccccc"
                                      4 "#eeeeee"}
                           :password "before color"
                           :text     "You Win!!"}
                        }}))

