import React from "react";
import { ChartVisual } from "../Chart/ChartVisual";
import DisplayConditions from "../DisplayConditions/DisplayConditions";
export default function WeatherRight({ right }) {
  let day_1 = right.list[0].main.humidity;
  let day_2 = right.list[8].main.humidity;
  let day_3 = right.list[16].main.humidity;
  let day_4 = right.list[25].main.humidity;
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let teabmois = [
    "Jan",
    "Fev",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Aout",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div
      className="ps-5 right d-flex"
      style={{ flex: 3, flexDirection: "column" }}
    >
      <ChartVisual />
      <div
        className="display d-flex"
        style={{
          width: "100%",
          gap: 20,

          flexWrap: "wrap",

          justifyContent: "center",
        }}
      >
        <DisplayConditions right={day_1} days="Today" />
        <DisplayConditions
          right={day_2}
          days={day + 1}
          mois={teabmois[month]}
        />
        <DisplayConditions
          right={day_3}
          days={day + 2}
          mois={teabmois[month]}
        />
        <DisplayConditions
          right={day_4}
          days={day + 3}
          mois={teabmois[month]}
        />
      </div>
    </div>
  );
}
