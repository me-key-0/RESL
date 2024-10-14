const express = require("express");
const validateToken = require("../middleware/validateToken");

const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  loginUser,
  logoutUser,
  refreshController,
  currentUser,
  updatePassword,
  forgetPassword,
  resetPassword,
  verifyEmail,
  isUser,
  isAdmin,
  postContact,
} = require("../controllers/employeeController");

router.route("/userhome").get(validateToken, isUser, currentUser);

// desc @create/register Users
// route @POST /users
// access-level @user, superadmin
router.route("/register").post(verifyEmail);
router.route("/register-user").post(createUser);

// desc @login a User
// route @POST /users/login
// access-level @user, superAdmin
router.route("/login").post(isUser, loginUser);


router.route("/contact").post(postContact);

// desc @login a User
// route @POST /users/login
// access-level @user, superAdmin
router.route("/logout").post(validateToken, logoutUser);

router.route("/refresh").post(refreshController);

router.route("/password/:id").put(validateToken, updatePassword);

router.route("/forget-password").post(forgetPassword);

router.route("/reset-password").post(resetPassword);

router.route("/admin").get(isAdmin, (req,res) =>  res.status(200).json({message:"Admin page returned"}))


// desc @get a User
// route @GET /users/:id
// access-level @user,Admin
router.route("/:id").get(getUserById);

// desc @update a User
// route @PUT /users/
// access-level @user, Admin
router.route("/").put(validateToken, updateUser);


// desc @get All Users
// route @GET /users
// access-level @Admin
router.route("/").get(isAdmin, getAllUsers);

const link = (module.exports = router);
