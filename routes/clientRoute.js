const express = require("express");
const {
    getApi,
  createClient,
  updateClient,
  getClientById,
  deleteClient
} = require("../controllers/clientController");

const router = express.Router();

router.route("/").get(getApi)
router.route("/create").post(createClient)
router.route("/update").patch(updateClient)
router.route("/get/:id").patch(getClientById)
router.route("/delete").patch(deleteClient)

module.exports = router;
