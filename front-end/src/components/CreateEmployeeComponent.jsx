import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function CreateEmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  //console.log(firstName);

  const firstNameHandle = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
    //console.log(firstName);
  };
  const lastNameHandle = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const emailHandle = (e) => {
    e.preventDefault();
    setEmailId(e.target.value);
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    // console.log("employee => " + JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then((res) => {
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
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={emailHandle}
                  ></input>
                </div>
                <button className="btn btn-success" onClick={saveEmployee}>
                  save
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
}

export default CreateEmployeeComponent;
