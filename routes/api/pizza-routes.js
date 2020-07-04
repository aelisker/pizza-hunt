const router = require('express').Router();
const {
  getAllPizza,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza
} = require('../../controllers/pizza-controller');

//setup get all and post at /api/pizzas
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

// setup get one, put and delete at /api/pizas/:id
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

module.exports = router;