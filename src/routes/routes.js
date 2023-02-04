const express = require ("express");
const router = express.Router()
const whatsappcontroller = require("../controllers/whatsappcontroller")

router
.get("/", whatsappcontroller.Verifytoken)
.post("/", whatsappcontroller.ReceiveMessage)

module.exports=router