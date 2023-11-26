const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host:'127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'BD_TFG_WINDOWS',
    connectionLimit: 10
   

});

async function getConnection(){
    try{
        const connection = await pool.getConnection();
        return connection;
    }catch(error){
        console.log(error);
    }

}



module.exports = {getConnection};