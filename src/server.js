import express from "express";
import playerRoutes from "./routes/playerRoutes.js"
import dbConnection from "./config/db.js";
import Player from "./model/player.js";
import bodyParser from "body-parser";

const api = new express()
const port = 18061


api.use("/player", playerRoutes)
api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json())
api.use(function (rq, rs) {
    rs.setHeader('Content-Type', 'text/plain')
    rs.write('you posted:\n')
    rs.end(JSON.stringify(rq.body, null, 2))
  })

try{
    console.log("STATUS -> Intentando conectarse a la base de datos.");
    dbConnection.authenticate();
    console.log("STATUS -> Conexion a la bd exitosa.");
    console.log("STATUS -> Sincronizando la bd con los objetos existentes");
    dbConnection.sync(); // dbConnection.sync({force:true});
    console.log("STATUS -> BD Lista para realizar operaciones");

}catch (error){
    console.log("Han ocurrido errores intentando conectarse a la BD");
    console.log(error);
}

api.listen(port, () => {
    console.log(`El api de videojuegos a sido iniciada y se encuentra escuchando por el puerto: http://localhost:${port}/player/`)
})



