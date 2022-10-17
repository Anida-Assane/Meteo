import React from "react";

export default function AfficheDate() {
  const date = new Date();
  const tabjours = ["Mon", "Tues", "Wed", "Thur", "Sat", "Sun"];
  const jour = date.getDay();
  const mois = date.getMonth();
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
    <div style={{ color: "#666" }}>
      <p>{`${date.getHours()} : ${date.getMinutes()}, ${tabjours[jour - 1]}, ${
        teabmois[mois]
      } ${date.getDate()} ${date.getFullYear()}`}</p>
    </div>
  );
}
