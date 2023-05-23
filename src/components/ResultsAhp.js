import React, { useState, useEffect } from "react";

export const ResultsAhp = ({
  employees,
  ahpVariables,
  setAhpVariables,
  sortedEmployeesArray,
  setSortedEmployeesArray,
  employeesData,
}) => {
  const [selectedEmployees, setSelectedEmployees] = useState({
    selectedDesigners: [],
    selectedFrontends: [],
    selectedBakends: [],
    selectedManager: [],
    selectedTesters: [],
  });
  let frontendBudget = 0;
  let testerBudget = 0;
  let backendBudget = 0;

  console.log(selectedEmployees, ahpVariables);

  useEffect(() => {
    sortedEmployeesArray.designer.bestDesigners.map((element) => {
      employeesData.map((employeesElement) => {
        if (
          employeesElement.zawod === "grafic designer" &&
          element.employeeID === employeesElement.id &&
          ahpVariables.designer
        ) {
          setSelectedEmployees((state) => ({
            ...state,
            selectedDesigners: [...state.selectedDesigners, employeesElement],
          }));
        }
      });
    });
    sortedEmployeesArray.frontend.bestFrontend.map((element) => {
      employeesData.map((employeesElement) => {
        if (
          employeesElement.zawod === "frontend developer" &&
          element.employeeID === employeesElement.id
        ) {
          setSelectedEmployees((state) => ({
            ...state,
            selectedFrontends: [...state.selectedFrontends, employeesElement],
          }));
        }
      });
    });

    sortedEmployeesArray.backend.bestBackend.map((element) => {
      employeesData.map((employeesElement) => {
        if (
          employeesElement.zawod === "backend developer" &&
          element.employeeID === employeesElement.id
        ) {
          setSelectedEmployees((state) => ({
            ...state,
            selectedBakends: [...state.selectedBakends, employeesElement],
          }));
        }
      });
    });
    sortedEmployeesArray.tester.bestTester.map((element) => {
      employeesData.map((employeesElement) => {
        if (
          employeesElement.zawod === "tester" &&
          element.employeeID === employeesElement.id
        ) {
          setSelectedEmployees((state) => ({
            ...state,
            selectedTesters: [...state.selectedTesters, employeesElement],
          }));
        }
      });
    });
    sortedEmployeesArray.manager.bestManager.map((element) => {
      employeesData.map((employeesElement) => {
        if (
          employeesElement.zawod === "project manager" &&
          element.employeeID === employeesElement.id
        ) {
          setSelectedEmployees((state) => ({
            ...state,
            selectedManager: [...state.selectedManager, employeesElement],
          }));
        }
      });
    });
  }, []);

  console.log(selectedEmployees);
  return (
    <div>
      <div className="border-2 border-black mt-5 py-6 ">
        <h2 className="flex w-full justify-center text-4xl pb-6 ">
          Projekt Menager
        </h2>
        {selectedEmployees.selectedManager.map((element, index) => {
          if (index <= 0) {
            return (
              <div>
                <div
                  className="flex gap-10 py-4 text-2xl w-full justify-center "
                  key={index}
                >
                  <p>{element.imie}</p>
                  <p>{element.nazwisko}</p>
                  <p>{element.zawod}</p>
                  <p>{element.zarobki + " zł / godzine"}</p>
                </div>
                <div className="flex items-center justify-center text-3xl py-4 font-semibold ">
                  <p>
                    {"Budżet dla Projekt Managera: " +
                      element.zarobki * ahpVariables.pmHours +
                      " zł"}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
      {ahpVariables.designer ? (
        <div className="border-2 border-black mt-5 py-6">
          <h2 className="flex w-full justify-center text-4xl pb-6 ">Grafik</h2>
          {selectedEmployees.selectedDesigners.map((element, index) => {
            if (ahpVariables.designer && index < 1) {
              return (
                <div>
                  <div
                    className="flex gap-10 py-4 text-2xl w-full justify-center "
                    key={index}
                  >
                    <p>{element.imie}</p>
                    <p>{element.nazwisko}</p>
                    <p>{element.zawod}</p>
                    <p>{element.zarobki + " zł / godzine"}</p>
                  </div>
                  <div className="flex items-center justify-center text-3xl py-4 font-semibold ">
                    <p>
                      {"Budżet dla Grafika: " +
                        element.zarobki * ahpVariables.designerHours +
                        " zł"}
                    </p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        ""
      )}
      <div className="border-2 border-black mt-5 py-6">
        <h2 className="flex w-full justify-center text-4xl pb-6 ">
          Programiści Frontendowi
        </h2>
        {selectedEmployees.selectedFrontends.map((element, index) => {
          if (ahpVariables.frontend >= index + 1) {
            frontendBudget += element.zarobki * ahpVariables.frontHours;

            return (
              <div>
                <div
                  className="flex gap-10 py-4 text-2xl w-full justify-center "
                  key={index}
                >
                  <p>{element.imie}</p>
                  <p>{element.nazwisko}</p>
                  <p>{element.zawod}</p>
                  <p>{element.zarobki + " zł / godzine"}</p>
                  <p>
                    {element.zarobki *
                      (ahpVariables.frontHours / ahpVariables.frontend) +
                      " zł"}
                  </p>
                </div>
                <div className="flex items-center justify-center text-3xl py-4 font-semibold ">
                  {ahpVariables.frontend - 1 === index ? (
                    <p>
                      {"Budżet dla Frontendowców: " +
                        frontendBudget / ahpVariables.frontend +
                        " zł"}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="border-2 border-black mt-5 py-6">
        <h2 className="flex w-full justify-center text-4xl pb-6 ">
          Programiści Backendowi
        </h2>
        {selectedEmployees.selectedBakends.map((element, index) => {
          if (ahpVariables.backend >= index + 1) {
            backendBudget += element.zarobki * ahpVariables.backendHours;
            return (
              <div>
                <div
                  className="flex gap-10 py-4 text-2xl w-full justify-center "
                  key={index}
                >
                  <p>{element.imie}</p>
                  <p>{element.nazwisko}</p>
                  <p>{element.zawod}</p>
                  <p>{element.zarobki + " zł / godzine"}</p>
                  <p>
                    {element.zarobki *
                      (ahpVariables.backendHours / ahpVariables.backend) +
                      " zł"}
                  </p>
                </div>
                <div className="flex items-center justify-center text-3xl py-4 font-semibold ">
                  {ahpVariables.backend - 1 === index ? (
                    <p>
                      {"Budżet dla Backendowców: " +
                        backendBudget / ahpVariables.backend +
                        " zł"}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="border-2 border-black mt-5 py-6 mb-6">
        <h2 className="flex w-full justify-center text-4xl pb-6 ">Testerzy</h2>
        {selectedEmployees.selectedTesters.map((element, index) => {
          if (ahpVariables.tester >= index + 1) {
            testerBudget += element.zarobki * ahpVariables.testerHours;
            return (
              <div>
                <div
                  className="flex gap-10 py-4 text-2xl w-full justify-center "
                  key={index}
                >
                  <p>{element.imie}</p>
                  <p>{element.nazwisko}</p>
                  <p>{element.zawod}</p>
                  <p>{element.zarobki + " zł / godzine"}</p>
                  <p>
                    {element.zarobki *
                      (ahpVariables.testerHours / ahpVariables.tester) +
                      " zł"}
                  </p>
                </div>
                <div className="flex items-center justify-center text-3xl py-4 font-semibold ">
                  {ahpVariables.tester - 1 === index ? (
                    <p>
                      {"Budżet dla Testerów: " +
                        testerBudget / ahpVariables.tester +
                        " zł"}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
