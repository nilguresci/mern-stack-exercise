// @desc Get goals
// @route GET /api/goals
// @access private
const getGoals = (req, res) => {
    res.status(200).json({message:'get goals'})
}

// @desc Set goal
// @route POST /api/goals
// @access private
const setGoal = (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'create goal'})
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = (req, res) => {
    res.status(200).json({message:`update goal ${req.params.id}`})
}

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access private
const deleteGoal = (req, res) => {
    res.status(200).json({message:`deleted goal ${req.params.id}`})
}
module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}