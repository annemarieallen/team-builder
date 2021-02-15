import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: "",
  });

  const clearForm = () => {
    setFormData({ id: Date.now(), name: "", email: "", role: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(formData);
    clearForm();
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/*NAME*/}
      <label htmlFor="name"> Member Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="enter name"
        value={formData.name}
        onChange={(event) => {
          setFormData({ ...formData, name: event.target.value });
        }}
      />
      {/*EMAIL*/}
      <label htmlFor="email"> email: </label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
      />
      {/*ROLE*/}
      <label htmlFor="role"> role: </label>
      <input
        id="role"
        name="role"
        type="text"
        placeholder="(backend, frontend, designer, etc)"
        value={formData.role}
        onChange={handleChange}
      />
      <button type="submit">Save!</button>
    </form>
  );
};

export default Form;
