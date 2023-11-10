import express from "express";
import playerRoutes from "./routes/playerRoutes.js"


const api = new express()
const port = 18061

api.use("/player", playerRoutes)

api.listen(port, () => {
    console.log(`El api ha sido iniciada y se encuentra escuchando por el puerto: http://localhost:${port}/`)
})

