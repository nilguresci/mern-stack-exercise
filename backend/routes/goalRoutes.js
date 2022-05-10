const express = require("express"); // common.js module syntax
const router = express.Router();

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoal);

// router.get('/', getGoals) //get ve post request routeları aynı olduğu için üstte ki satırda birleştirildi.
// router.post('/', setGoal)

router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);
// router.put('/:id', updateGoal) //put ve delete request routeları aynı olduğu için üstte ki satırda birleştirildi.
// router.delete('/:id', deleteGoal)

module.exports = router;
