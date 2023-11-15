import express from "express";
import {changePlayerPortrait, createPlayer, deletePlayer, findAll, findPlayerbyEmail, updatePlayer, findOneByid} from "../controllers/playerController.js"

const router = express.Router()

router.post("/newPlayer", createPlayer)
router.get("/findAll", findAll)
router.get("/findOneByid/:playerID", findOneByid)
router.get("/findOnebyEmail/:playerEmail", findPlayerbyEmail)
router.put("/updatePlayer/:playerID", updatePlayer)
router.patch("/changePlayerPortrait/:playerID", changePlayerPortrait)
router.delete("/deletePlayer/:playerID", deletePlayer)

export default router