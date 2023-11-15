import Player from "../model/player.js";
import dbConnection from "../config/db.js";

const  createPlayer = async (rq, rs) =>{
    console.log('Se ha solicitado la creacion de un nuevo jugador')
    //const attributes  = (R.pick{name,email,password,nickname,birhdate}, rq.body.Player)
    console.log(rq.body);
    const newPlayer = await Player.create(rq.body)

    if(newPlayer){
        rs.status(200);
        rs.send(`Se ha creado un nuevo jugador con el Nombre: ${name}, Email: ${email}, Contraseña: ${password}, Nickname: ${nickname}, Fecha de nacimiento: ${birhdate}`);
    }else{
        rs.status(400);
        rs.json({
            messageStatus: `Hubo un error al intentar crear al jugador`
        });
    }


}

const  findPlayerbyEmail = async (rq, rs) =>{
    const playerEmail = rq.params.playerEmail
    console.log(`se ha solicitado buscar a un jugador con correo: ${playerEmail}`);
    const playerFound = await Player.findOne({ where: { email: playerEmail } });

    if(playerFound === null){
        rs.status(400)
        rs.json({
            messageStatus: `El jugador con el email:${playerEmail}, no se encuentra en la BD.`
        })
    }else{
        rs.status(200);
        rs.json(playerFound)
    }
    
}

const  updatePlayer = (rq, rs) =>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado actuallizar un jugador: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado actuallizar un jugador: ${playerID}`)
}
const  deletePlayer = (rq, rs) =>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado borrar un jugador: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado borrar un jugador: ${playerID}`)
}
const  changePlayerPortrait = (rq, rs) =>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitad el cambio: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitad el cambio: ${playerID}`)
}

const findAll = async(rq,rs) =>{
    console.log("Se ha solicitado la consulta de todos los jugadores")
    const allPlayers = await Player.findAll();
    console.log(allPlayers);

    if(allPlayers === null){
        rs.json({
            messageStatus: 'No hay jugadores registrados.'
        });
    }else{
        rs.status(200);
        rs.json(allPlayers);
    }
}

const findOneByid = async (rq, rs) =>
{
    const playerID = rq.params.playerID
    console.log(`Se a solicitado buscar al jugador con id: ${playerID}`);

    const playerFound = await Player.findByPk(playerID)

    if(playerFound === null){
        rs.status(400)
        rs.json({
            messageStatus:`El jugador con ID: ${playerID}, no se encuentra en la BD`
        });

    }else{
        rs.status(200)
        rs.json(playerFound)
    }
}

export {
    createPlayer,  
    findPlayerbyEmail, 
    updatePlayer, 
    deletePlayer, 
    changePlayerPortrait,
    findAll,
    findOneByid
}