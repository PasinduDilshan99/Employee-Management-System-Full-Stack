import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployeeComponent = () => {
  let { id } = useParams();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [emailId, setEmailId] = useState("");
  let navigate = useNavigate();
  //console.log(firstName);

  const firstNameHandle = (e) => {
    setFirstName(e.target.value);
    //console.log(firstName);
  };
  const lastNameHandle = (e) => {
    setLastName(e.target.value);
  };
  const emailHandle = (e) => {
    setEmailId(e.target.value);
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      let employee = res.data;
      // console.log(employee);
      // console.log(employee.firstName);
      // console.log(employee.lastName);
      // console.log(employee.emailId);
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setEmailId(employee.emailId);
    });
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    // console.log("employee => " + JSON.stringify(employee));
    EmployeeService.updateEmployee(employee, id).then((res) => {
      navigate("/employees");
    });
  };

  const cancel = (e) => {
    setFirstName("");
    setLastName("");
    setEmailId("");
    navigate("/employees");
  };
  return (
    <div>
      <div className="container" style={{ marginTop: "2rem" }}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Label:</label>
                  <input
                    style={{ marginTop: "0.8rem", marginBottom: "0.8rem" }}
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={firstNameHandle}
                  ></input>
                </div>
                <div className="form-group">
                  <label>Last Label:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    style={{ marginTop: "0.8rem", marginBottom: "0.8rem" }}
                    value={lastName}
                    onChange={lastNameHandle}
                  ></input>
                </div>
                <div className="form-group">
                  <label>E-mail:</label>
                  <input
                    style={{ marginTop: "0.8rem", marginBottom: "0.8rem" }}
                    placeholder="Emil Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={emailHandle}
                  ></input>
                </div>
                <button className="btn btn-success" onClick={updateEmployee}>
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeComponent;
