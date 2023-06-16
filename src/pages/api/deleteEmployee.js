import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const pool = mysql.createPool({
    host: "localhost",
    database: "employees",
    user: "root",
    password: "zaq1@WSX",
    port: 3310,
  });
  console.log(req.body.id);
  const returnCorrectTable = (type) => {
    switch (type) {
      case "frontend developer":
        return "frontend_developer_skills";
      case "backend developer":
        return "backend_developer_skills";
      case "tester":
        return "tester_skills";
      case "grafic designer":
        return "grafic_designer_skills";
      case "project manager":
        return "project_manager_skills";
    }
  };
  try {
    const { id, type } = req.body;
    console.log(type);
    await pool.execute(
      `DELETE FROM ${returnCorrectTable(type)} WHERE employee_id = ?`,
      [id]
    );
    const [rows] = await pool.execute("DELETE FROM employee WHERE id = ?", [
      id,
    ]);

    if (rows.affectedRows > 0) {
      res.status(200).json({ message: "Pomyślnie usunięto rekord." });
    } else {
      res.status(404).json({ message: "Nie znaleziono rekordu o podanym ID." });
    }
  } catch (e) {
    res
      .status(500)
      .json({ message: "Wystąpił błąd podczas usuwania rekordu." });
  }
}
