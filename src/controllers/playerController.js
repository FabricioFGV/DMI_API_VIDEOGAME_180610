const  createPlayer = (rq, rs) =>{
    console.log("Se ha solicitado la creacion de un nuevo jugador");
    rs.status(200);
    rs.send("Se ha solicitado la creacion de un nuevo jugador");
}

const  findPlayerbyID = (rq, rs) =>{
    const playerID = rq.params.playerID
    console.log(`Se ha solicitado la busqueda de un jugador: ${playerID}`);
    rs.status(200);
    rs.send(`Se ha solicitado la busqueda de un jugador: ${playerID}`)
}

const  findPlayerbyEmail = (rq, rs) =>{
    const playerEmail = rq.params.playerEmail
    console.log(`se ha solicitado buscar a un jugador con correo: ${playerEmail}`);
    rs.status(200);
    rs.send(`se ha solicitado buscar a un jugador con correo: ${playerEmail}`)
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

export {
    createPlayer, 
    findPlayerbyID, 
    findPlayerbyEmail, 
    updatePlayer, 
    deletePlayer, 
    changePlayerPortrait
}