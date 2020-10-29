import React, { useState } from "react";

function ListForm({ addList }) {
  const divStyle = {
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: "40px",
  };

  const inputStyle = {
    height: "30px",
  };

  const buttonStyle = {
    marginLeft: "10px",
    border: "solid 1px",
    backgroundColor: "white",
    height: "35px",
  };

  const [edit, setEdit] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setEdit(e.target.value);
  };

  const handleSubmit = () => {
    if (edit != "") {
      addList(edit);
      setEdit("");
    }
    return;
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && edit !== "") {
      addList(edit);
      setEdit("");
    }
    return;
  };

  return (
    <div style={divStyle}>
      <h3>Create List</h3>
      <input
        style={inputStyle}
        value={edit}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
      <button style={buttonStyle} onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default ListForm;
