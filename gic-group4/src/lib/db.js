import mysql from "mysql2/promise";

// export async function query() {
//   const dbconfig = {
//     host: process.env.MYSQL_HOST,
//     port: 3306,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//   };
//   const pool = mysql.createPool(dbconfig);

//   try {
//     const connection = await pool.getConnection();
//     await connection.ping();
//     connection.release();
//     console.log("Database connection successful!");
//   } catch (error) {
//     console.error("Database connection failed:", error);
//   }
// }

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: 3306,
    database: process.env.MYSQL_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
  }
}
