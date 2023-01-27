import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useRecoilState } from "recoil";
import Form from "react-bootstrap/Form";
import validator from "validator";
import { registration } from "../../recoil/registration";
const Form2 = () => {
  const [form, setForm] = useRecoilState(registration);
  const [records, setRecords] = useState([]);
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let formErrors = {};

    if (validator.isEmpty(value, { ignore_whitespace: true })) {
      formErrors = {
        ...form.formErrors,
        [name]: `${[name]} cannot be empty`,
      };
    } else {
      if (
        (name == "email" && !validator.isEmail(value)) ||
        (name == "mobile" && !validator.isMobilePhone(value, ["en-US"])) ||
        (name == "name" && (!validator.isAlpha(value) || value < 20)) ||
        (name == "password" &&
          !validator.isStrongPassword(value, { no_symbols: false }))
      ) {
        // || ((name=="name") && !validator.isAlpha(value))
        formErrors = {
          ...form.formErrors,
          [name]: `Invalid ${[name]}`,
        };
      } else {
        formErrors = {
          ...form.formErrors,
          [name]: "",
        };
      }
    }
    setForm({
      ...form,
      [name]: value,
      formErrors: formErrors,
      submitError: "",
      formValid: true,
    });
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    if (
      form.formErrors.name == "" &&
      form.name != "" &&
      form.formErrors.email == "" &&
      form.email != "" &&
      form.formErrors.mobile == "" &&
      form.mobile != "" &&
      form.formErrors.password == "" &&
      form.password != "" &&
      form.formValid == true
    ) {
      // setRecords((oldItems) => {
      //   return [...oldItems, form];
      // });

      // setRecords([...records, form]);

      const newRecord = form;
      setRecords([...records, newRecord]);
      setForm({
        ...form,
        formValid: false,
        submitError: "",
        email: "",
        name: "",
        mobile: "",
        password: "",
      });

      // setRecords((list) => {
      //   const updatedList = [...list, form];
      //   console.log(updatedList);
      //   setForm({
      //     ...form,
      //     formValid: false,
      //     submitError: "",
      //     email: "",
      //     name: "",
      //     mobile: "",
      //     password: "",
      //   });
      //   return updatedList;
      // });

      alert("Form submitted successfully");
    } else {
      setForm({ ...form, submitError: "Please fill all the values" });
    }
  }
  return (
    <React.Fragment>
      <div className="col-md-5 mx-auto mt-3 mb-3">
        <h4 className="text-center mb-3">Registration Form</h4>
        {form.submitError == "Your form successfully submitted" ? (
          <h5 className="text-success">{form.submitError}</h5>
        ) : (
          <h5 className="text-danger">{form.submitError}</h5>
        )}
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Text className="text-danger">{form.formErrors.name}</Form.Text>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Text className="text-danger">{form.formErrors.email}</Form.Text>
          <Form.Group className="mb-3" controlId="mobile">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              name="mobile"
              value={form.mobile}
              onChange={handleInputChange}
              placeholder="Enter Mobile number"
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {form.formErrors.mobile}
          </Form.Text>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {form.formErrors.password}
          </Form.Text>
          <Form.Group className="mb-3" controlId="checkbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleFormSubmit(e)}
          >
            Submit
          </Button>
        </Form>

        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {records != [] &&
              records.map((index, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{index.name}</td>
                    <td>{index.email}</td>
                    <td>{index.mobile}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Form2;
