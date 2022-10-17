import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

export default function OutlinedCard({ right, days, mois }) {
  return (
    <Box sx={{ minWidth: 150 }} className="mt-3 ">
      <Card
        variant="outlined"
        sx={{ backgroundColor: "#77B5FE", height: "auto" }}
      >
        <React.Fragment>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, color: "#fff", textAlign: "center" }}
              gutterBottom
            >
              {mois} {days}
            </Typography>
            <Typography
              sx={{ fontSize: 14, color: "#fff", textAlign: "center" }}
              className="mt-2"
            >
              <CloudQueueIcon sx={{ fontSize: 30 }} />
            </Typography>
            <Typography
              className="mt-2"
              style={{ fontSize: 14, color: "#999", textAlign: "center" }}
            >
              Humidity
            </Typography>
            <Typography
              className="mt-2 text-center"
              style={{ fontSize: 15, color: "#fff", textAlign: "center" }}
            >
              {right}%
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Box>
  );
}
