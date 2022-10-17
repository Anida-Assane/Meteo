import React from "react";
import AfficheDate from "../AfficheDate/AfficheDate";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
export default function WeatherLeft({ temperature, humidity, speed }) {
  let calculTemperature = ((temperature - 273.15) * 9) / 5 + 32;
  console.log(temperature);

  return (
    <div className="p-5" style={{ flex: 1 }}>
      <AfficheDate />
      <div className="d-flex justifty-content-center mt-2">
        <div className="d-flex  container" style={{ flexDirection: "column" }}>
          <div className="d-flex align-items-center" style={{ gap: 20 }}>
            <CloudQueueIcon sx={{ fontSize: 40 }} />
            <h1 style={{ fontWeight: "bold" }}>
              {calculTemperature.toFixed(0)} <sup>° F</sup>
            </h1>
          </div>
          <h3
            className="mt-3"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Cloudy
          </h3>
        </div>
      </div>

      <div className=" mt-5 d-flex" style={{ justifyContent: "space-around" }}>
        <div className="d-flex" style={{ flexDirection: "column" }}>
          <h6 style={{ color: "#999" }}>Humidity</h6>
          <span className="mt-2 text-center" style={{ fontSize: 18 }}>
            {humidity}%
          </span>
        </div>
        <div className="d-flex" style={{ flexDirection: "column" }}>
          <h6 style={{ color: "#999" }}>Wind Speed</h6>
          <span className="mt-2 text-center" style={{ fontSize: 18 }}>
            {speed} km/j
          </span>
        </div>
      </div>
    </div>
  );
}
