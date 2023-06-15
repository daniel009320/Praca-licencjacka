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
  }, [employeesData]);

  console.log(selectedEmployees);
  let budgetProjectManager = 0;
  let budgetDesigner = 0;
  let budgetFront = 0;
  let budgetBack = 0;
  let budgetTester = 0;

  return (
    <section className="flex justify-center flex-col items-center">
      <h2 className="p-8 text-5xl font-semibold">Podsumowanie</h2>
      <div className="  gap-12 flex flex-col  ">
        <div className="flex gap-10 justify-center">
          <div className="border-black border-2 rounded-xl ">
            <h3 className="p-2 bg-black text-white text-center rounded-lg  text-xl">
              Project Menager
            </h3>
            <div className="text-center py-6 px-12 text-lg">
              {selectedEmployees.selectedManager.map((element, index) => {
                console.log(element.zarobki);

                if (index <= 0) {
                  budgetProjectManager +=
                    element.zarobki * ahpVariables.pmHours;
                  return (
                    <div>
                      <div
                        key={element.id}
                        className="flex justify-between gap-4 p-2"
                      >
                        <p className="font-semibold">{element.imie}</p>
                        <p className="font-semibold">{element.nazwisko}</p>
                        <p className="font-semibold">
                          {element.zarobki + " "} zł/h{" "}
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <h4 className="p-2 bg-black text-xl text-white rounded-lg text-center ">
              <p>Budżet: {budgetProjectManager} zł</p>
            </h4>
          </div>
          {ahpVariables.designer && (
            <div className="border-black border-2 rounded-xl ">
              <h3 className="p-2 bg-black text-white text-center rounded-lg text-xl">
                Designer
              </h3>
              <div className="text-center py-6 px-12 text-lg">
                {selectedEmployees.selectedDesigners.map((element, index) => {
                  if (ahpVariables.designer && index < 1) {
                    budgetDesigner +=
                      element.zarobki * ahpVariables.designerHours;
                    return (
                      <div
                        key={element.id}
                        className="flex justify-between gap-4 p-2"
                      >
                        <p className="font-semibold">{element.imie}</p>
                        <p className="font-semibold">{element.nazwisko}</p>
                        <p className="font-semibold">
                          {element.zarobki + " "} zł/h{" "}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
              <h4 className="p-2 bg-black text-xl text-white rounded-lg text-center ">
                <p>Budżet: {budgetDesigner} zł</p>
              </h4>
            </div>
          )}
        </div>
        <div className="flex gap-10">
          <div className="border-black border-2 rounded-xl flex flex-col justify-between ">
            <h3 className="p-2 bg-black text-white text-center rounded-lg text-xl">
              Programiści frontendowi
            </h3>
            <div className="text-center py-2 px-12 text-lg">
              {selectedEmployees.selectedFrontends.map((element, index) => {
                if (index + 1 <= ahpVariables.frontend) {
                  budgetFront += element.zarobki * ahpVariables.frontHours;
                  return (
                    <div
                      key={element.id}
                      className="flex justify-between gap-4 p-2"
                    >
                      <p className="font-semibold">{element.imie}</p>
                      <p className="font-semibold">{element.nazwisko}</p>
                      <p className="font-semibold">
                        {element.zarobki + " "} zł/h{" "}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <h4 className="p-2 bg-black text-xl text-white rounded-lg text-center ">
              <p>Budżet: {budgetFront} zł</p>
            </h4>
          </div>
          <div className="border-black border-2 rounded-xl flex flex-col justify-between ">
            <h3 className="p-2 bg-black text-white text-center rounded-lg  text-xl">
              Programiści backendowi
            </h3>
            <div className="text-center py-2 px-12 text-lg">
              {selectedEmployees.selectedBakends.map((element, index) => {
                if (index + 1 <= ahpVariables.backend) {
                  budgetBack += element.zarobki * ahpVariables.backendHours;
                  return (
                    <div
                      key={element.id}
                      className="flex justify-between gap-4 p-2"
                    >
                      <p className="font-semibold">{element.imie}</p>
                      <p className="font-semibold">{element.nazwisko}</p>
                      <p className="font-semibold">
                        {element.zarobki + " "} zł/h{" "}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <h4 className="p-2 bg-black text-xl text-white rounded-lg text-center ">
              <p>Budżet: {budgetBack} zł</p>
            </h4>
          </div>
          <div className="border-black border-2 rounded-xl flex flex-col justify-between ">
            <h3 className="p-2 bg-black text-white text-center rounded-lg  text-xl">
              Testerzy
            </h3>
            <div className="text-center py-2 px-12 text-lg">
              {selectedEmployees.selectedTesters.map((element, index) => {
                if (index + 1 <= ahpVariables.tester) {
                  budgetTester += element.zarobki * ahpVariables.testerHours;
                  return (
                    <div
                      key={element.id}
                      className="flex justify-between gap-4 p-2"
                    >
                      <p className="font-semibold">{element.imie}</p>
                      <p className="font-semibold">{element.nazwisko}</p>
                      <p className="font-semibold">
                        {element.zarobki + " "} zł/h{" "}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <h4 className="p-2 bg-black text-xl text-white rounded-lg text-center ">
              <p>Budżet: {budgetTester} zł</p>
            </h4>
          </div>
        </div>
        <div className="flex justify-evenly w-full">
          <div className="bg-black rounded-3xl text-white text-lg  font-semibold w-[250px]">
            <div className="px-12 py-6 text-center flex flex-col gap-4 ">
              <p>Podany budżet:</p>
              <p>{ahpVariables.budget} zł</p>
            </div>
          </div>
          <div className="bg-black rounded-3xl text-white font-semibold text-lg w-[250px]">
            <div className="px-12 py-6 text-center flex flex-col gap-4 ">
              <p>Wyliczony budżet:</p>
              <p>
                {budgetDesigner +
                  budgetFront +
                  budgetProjectManager +
                  budgetBack +
                  budgetTester}{" "}
                zł
              </p>
            </div>
          </div>
        </div>
        <div className=" font-semibold text-2xl text-white text-center  justify-center">
          <button className="bg-black px-12 py-4 rounded-full  ">
            Wyeksportuj do PDF
          </button>
        </div>
      </div>
    </section>
  );
};
