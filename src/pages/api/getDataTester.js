import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "employees",
    user: "root",
    password: "zaq1@WSX",
    port: 3310,
  });
  dbconnection.connect();
  try {
    const query = "SELECT * FROM  tester_skills";
    const values = [];
    const [data] = await dbconnection.execute(query, values);

    res.status(200).json({ results: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
