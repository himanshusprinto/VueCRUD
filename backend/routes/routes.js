const users = require("../controllers/users.controller");
var router = require("express").Router();

// Add new user
router.post("/users" , users.create);

// Retrieve all Users
router.get("/users", users.findAll);

// Retrieve a single user with id
router.get("/users/:id", users.findone);

// Update a user with id
router.put("/users/:id", users.update);

// Delete a user with id
router.delete("/users/:id", users.delete);

// Delete all users
router.delete("/users", users.deleteAll);

module.exports = router;