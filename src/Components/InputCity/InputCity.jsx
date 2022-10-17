import React from "react";
import { TextField } from "@mui/material";
import "./titre.css";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
export default function InputCity({ city, setCity, func }) {
  const handleChangeText = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    func();
  };
  console.log("hello page input");
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
      <span style={{ fontWeight: "bold" }} className="titre">
        Your City
      </span>

      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        size="small"
        onChange={handleChangeText}
        value={city}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: 100,
          outline: "none",
          border: "1px solid #77B5FE",
          height: "6vh",
          backgroundColor: "#77B5FE",
          color: "#fff",
          borderRadius: 5,
        }}
      >
        Entrer
      </button>
    </div>
  );
}
