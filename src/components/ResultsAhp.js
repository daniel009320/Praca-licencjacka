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

  useEffect(() => {
    if (sortedEmployeesArray) {
      sortedEmployeesArray.designer.bestDesigners.map((element) => {
        console.log(element);

        setSelectedEmployees({
          ...selectedEmployees,
          selectedDesigners: employeesData.filter(
            (employeesElement) =>
              employeesElement.id === element.employeeID &&
              "grafic designer" === employeesElement.zawod
          ),
        });
      });
      sortedEmployeesArray.frontend.bestFrontend.map((element) => {
        setSelectedEmployees({
          ...selectedEmployees,
          selectedFrontends: employeesData.filter(
            (employeesElement) =>
              employeesElement.id === element.employeeID &&
              "frontend developer" === employeesElement.zawod
          ),
          selectedDesigners: { ...selectedEmployees.selectedDesigners },
        });
      });
      //   sortedEmployeesArray.backend.bestBackend.map((element) => {
      //     setSelectedEmployees({
      //       ...selectedEmployees,
      //       selectedBakends: employeesData.filter(
      //         (employeesElement) =>
      //           employeesElement.id === element.employeeID &&
      //           "backend developer" === employeesElement.zawod
      //       ),
      //     });
      //   });

      //   sortedEmployeesArray.tester.bestTester.map((element) => {
      //     setSelectedEmployees({
      //       ...selectedEmployees,
      //       selectedTesters: employeesData.filter(
      //         (employeesElement) =>
      //           employeesElement.id === element.employeeID &&
      //           "tester" === employeesElement.zawod
      //       ),
      //     });
      //   });
      //   sortedEmployeesArray.manager.bestManager.map((element) => {
      //     setSelectedEmployees({
      //       ...selectedEmployees,
      //       selectedManager: employeesData.filter(
      //         (employeesElement) =>
      //           employeesElement.id === element.employeeID &&
      //           "project manager" === employeesElement.zawod
      //       ),
      //     });
      //   });
    }
  }, [sortedEmployeesArray]);

  console.log(selectedEmployees);
  return (
    <div>
      <h2>Graficy</h2>
      {/* <div>{sortedEmployeesArray.designer.bestDesigners}</div> */}
    </div>
  );
};
