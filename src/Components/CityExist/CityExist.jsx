import React from "react";
import AfficheDate from "../AfficheDate/AfficheDate";
import "./weathers.css";
import WeatherLeft from "../WeatherLeft/WeatherLeft";
import WeatherRight from "../WeatherRight/WeatherRight";

export default function ({ temperature, humidity, speed, right }) {
  return (
    <div className=" d-flex weathers " style={{ height: "65vh" }}>
      <WeatherLeft
        temperature={temperature}
        humidity={humidity}
        speed={speed}
      />
      <WeatherRight right={right} />
    </div>
  );
}
