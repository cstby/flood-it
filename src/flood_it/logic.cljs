(ns flood-it.logic
  "Pure functions for game logic.")

(def board-size 12)

(defn new-board
  ""
  [board-size]
  (->> (take (* board-size board-size) (repeatedly #(rand-int 5)))
       (partition board-size)
       (mapv vec)))

(defn valid?
  [[x y]]
  (and (not (neg? x)) (not (neg? y))))

(defn nbs
  [[x y]]
  (filter valid? [[x (dec y)] [x (inc y)] [(inc x) y] [(dec x) y]]))

(defn same-colored-nbs
  "Given the board and a celll, returns neigboring cells of the origin color."
  [board cell]
  (filter #(= (get-in board [0 0]) (get-in board %)) (nbs cell)))

(defn cells-to-change
  "Gives a set of the cells that need to change"
  [board]
  (loop [cells #{[0 0]}]
    (let [new-cells (->> (mapcat #(same-colored-nbs board %) cells)
                         set
                         (clojure.set/union cells))]
      (if (= cells new-cells)
        cells
        (recur new-cells)))))

(defn flood
  "Given a color, returns a new board after flooding."
  [board color]
  (reduce #(assoc-in %1 %2 color) board (cells-to-change board)))

(defn win?
  "Retruns true if player has won."
  [board]
  (apply = (apply concat board)))

