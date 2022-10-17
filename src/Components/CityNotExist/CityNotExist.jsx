import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
export default function CityNotExist() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <AccessTimeFilledIcon sx={{ fontSize: 90, color: "#77B5FE" }} />
      <p>La ville n'existe pas</p>
    </div>
  );
}
