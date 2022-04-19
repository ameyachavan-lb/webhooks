const { Pool } = require("pg");
// const config = require(__dirname + "/../config/configEnv.js");

const credentials = {
  user: 'geras_admin',
  host: 'geras-01.postgres.database.azure.com',
  database: 'marketing_db',
  password: 'Litmus123!@#',
  port: 5432,
  ssl: true,
};

// Connect with a connection pool.

async function poolConnect(userData) {
  const pool = new Pool(credentials);
  var _query = `INSERT INTO sendinblue_logs VALUES (${userData.id}, '${userData.event}', '${userData.email}', '${userData.key}', '${userData.list_id}', '${userData.date}', ${userData.ts});`
  console.log(_query);
  const now = await pool.query(_query);
    // "SELECT * from company_master_data where userName = 'ameya' AND password = '1234';");
 
  // //   [userData.id, userData.event, userData.date, userData.ts]
  // // );
  await pool.end();
  // console.log(now);
  
  // if (now.rows.length) {
  //   return {
  //     status: 200,
  //   };
  // }
  // return {
  //   status: 404,
  // };
  // console.log(now);
   console.log(userData);
  return {
    status: 200
  }
 
}

module.exports.poolConnect = poolConnect;
