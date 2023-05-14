import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "employees",
    user: "root",
    password: "zaq1@WSX",
    port: 3310,
  });
  try {
    const query = "SELECT * FROM  frontend_developer_skills";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end;
    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
