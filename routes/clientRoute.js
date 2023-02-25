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
router.route("/update/:id").patch(updateClient)
router.route("/get/:id").get(getClientById)
router.route("/delete/:id").delete(deleteClient)

module.exports = router;
