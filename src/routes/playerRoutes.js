import express from "express";
import {changePlayerPortrait, createPlayer, deletePlayer, findPlayerbyEmail, findPlayerbyID, updatePlayer} from "../controllers/playerController.js"

const router = express.Router()

router.post("/newPlayer", createPlayer)
router.get("/findOneByID/:playerID", findPlayerbyID)
router.get("/findOnebyEmail/:email", findPlayerbyEmail)
router.put("/updatePlayer/:playerID", updatePlayer)
router.patch("/changePlayerPortrait", changePlayerPortrait)
router.delete("/deletePlayer/:playerID", deletePlayer)

export default router