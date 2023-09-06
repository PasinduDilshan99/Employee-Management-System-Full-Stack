import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ViewEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
      //   console.log(employee);
      employee.firstName = res.data.firstName;
      employee.lastName = res.data.lastName;
      employee.emailId = res.data.emailId;
      //   console.log(employee);
    });
  }, []);
  return (
    <div>
      <br />
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <hr />
        <div className="card-body">
          <div className="row" style={{ marginTop: "1rem" }}>
            <label>Employee First Name: {employee.firstName}</label>
          </div>
          <div className="row" style={{ marginTop: "1rem" }}>
            <label>Employee Last Name: {employee.lastName}</label>
          </div>
          <div className="row" style={{ marginTop: "1rem" }}>
            <label>Employee E-mail: {employee.emailId}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;
