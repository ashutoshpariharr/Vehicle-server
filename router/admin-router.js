// userRoutes.js

const express = require("express");
const adminController = require("../controllers/admin-controller");
const router = express.Router();
const authMiddleWare = require("../middlewale/auth-authMiddleWare");

router
  .route("/users")
  .get(authMiddleWare, adminController.getAllUsers);

router
  .route("/users/update/:id")
  .patch(authMiddleWare, adminController.updateUserById);

router
  .route("/users/delete/edit/:id")
  .get(authMiddleWare, adminController.getUserById);

router
  .route("/users/delete/:id")
  .delete(authMiddleWare, adminController.DeleteUser);

router
  .route("/contacts")
  .get( adminController.getAllContacts);

router
  .route("/contacts/delete/:id")
  .delete(authMiddleWare, adminController.deleteContact);

module.exports = router;
