import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const pool = mysql.createPool({
    host: "localhost",
    database: "employees",
    user: "root",
    password: "zaq1@WSX",
    port: 3310,
  });
  console.log(req.body, req.body.id + 1);

  res.status(200).json({ message: "xd" });
  const returnValidQuerry = async (status) => {
    switch (status) {
      case "grafic_designer_skills":
        await pool.execute(
          `INSERT INTO employee (id, imie, nazwisko, zawod, zarobki)
            VALUES (${req.body.id + 1},'${req.body.data.name}', '${
            req.body.data.surname
          }', 'grafic designer',${req.body.data.salary});`
        );
        await pool.execute(
          `INSERT INTO grafic_designer_skills (employee_id, doswiadczenie, kreatywnosc, szybkosc_pracy, komunikacja, responsywnosc) VALUES (${
            req.body.id + 1
          }, ${req.body.data.designerExperience}, ${
            req.body.data.creativity
          }, ${req.body.data.workSpeed}, ${
            req.body.data.designerComunication
          }, ${req.body.data.responsiveness});`
        );
      case "frontend_developer_skills":
        await pool.execute(
          `INSERT INTO employee (id, imie, nazwisko, zawod, zarobki)
            VALUES (${req.body.id + 1},'${req.body.data.name}', '${
            req.body.data.surname
          }', 'frontend developer',${req.body.data.salary});`
        );
        await pool.execute(
          `INSERT INTO frontend_developer_skills (employee_id, doswiadczenie,szybkosc_pisania_kodu,testowanie_wlasnego_kodu, praca_zespolowa, komunikacja, adaptacja, stylowanie) VALUES (${
            req.body.id + 1
          }, ${req.body.data.frontendExperience}, ${
            req.body.data.codeWritingSpeed
          }, ${req.body.data.codeTesting}, ${req.body.data.teamwork}, ${
            req.body.data.comunication
          }, ${req.body.data.adaptation}, ${req.body.data.styling});`
        );
      case "backend_developer_skills":
        await pool.execute(
          `INSERT INTO employee (id, imie, nazwisko, zawod, zarobki)
            VALUES (${req.body.id + 1},'${req.body.data.name}', '${
            req.body.data.surname
          }', 'backend developer',${req.body.data.salary});`
        );
        await pool.execute(
          `INSERT INTO backend_developer_skills (employee_id, doswiadczenie,szybkosc_pisania_kodu,testowanie_wlasnego_kodu, praca_zespolowa, komunikacja, adaptacja) VALUES (${
            req.body.id + 1
          }, ${req.body.data.BackendExperience}, ${
            req.body.data.backeneCodeWritingSpeed
          }, ${req.body.data.backendCodeTesting}, ${
            req.body.data.backendTeamwork
          }, ${req.body.data.backendComunication}, ${
            req.body.data.backendAdaptation
          });`
        );
      case "tester_skills":
        await pool.execute(
          `INSERT INTO employee (id, imie, nazwisko, zawod, zarobki)
            VALUES (${req.body.id + 1},'${req.body.data.name}', '${
            req.body.data.surname
          }', 'tester',${req.body.data.salary});`
        );
        await pool.execute(
          `INSERT INTO tester_skills (employee_id, doswiadczenie, komunikacja, testy_manualne, testy_automatyczne,  adaptacja) VALUES (${
            req.body.id + 1
          }, ${req.body.data.testerExperience}, ${
            req.body.data.testerComunication
          }, ${req.body.data.manualTest}, ${req.body.data.automaticTest}, ${
            req.body.data.testerAdaptation
          });`
        );

      case "project_manager_skills":
        await pool.execute(
          `INSERT INTO employee (id, imie, nazwisko, zawod, zarobki)
            VALUES (${req.body.id + 1},'${req.body.data.name}', '${
            req.body.data.surname
          }', 'project manager',${req.body.data.salary});`
        );
        await pool.execute(
          `INSERT INTO project_manager_skills (employee_id, doswiadczenie, zarzadzanie_zespolem , komunikacja, organizacja_pracy,  adaptacja) VALUES (${
            req.body.id + 1
          }, ${req.body.data.managerExperience}, ${
            req.body.data.zarzadzanie
          }, ${req.body.data.managerComunication}, ${
            req.body.data.organization
          }, ${req.body.data.managerAdaptation});`
        );
    }
  };
  try {
    // const { id, type } = req.body;
    // console.log(type);
    returnValidQuerry(req.body.type);

    //   if (rows.affectedRows > 0) {
    //     res.status(200).json({ message: "Pomyślnie usunięto rekord." });
    //   } else {
    //     res.status(404).json({ message: "Nie znaleziono rekordu o podanym ID." });
    //   }
  } catch (e) {
    res
      .status(500)
      .json({ message: "Wystąpił błąd podczas usuwania rekordu." });
  }
}
