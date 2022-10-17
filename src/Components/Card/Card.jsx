import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Card.css";
export default function BasicCard({ children }) {
  return (
    <Card
      sx={{
        width: "70%",
        height: "68vh",
      }}
      className=" mycard shadow-lg pt-2 mb-5 bg-body position-absolute top-50 start-50 translate-middle"
    >
      <CardContent>{children} </CardContent>
    </Card>
  );
}
