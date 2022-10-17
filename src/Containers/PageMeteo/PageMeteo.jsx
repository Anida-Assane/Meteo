import React, { useEffect } from "react";
import BasicCard from "../../Components/Card/Card";
import Card from "../../Components/Card/Card";
import InputCity from "../../Components/InputCity/InputCity";
import CityNotExist from "../../Components/CityNotExist/CityNotExist";
import CityExist from "../../Components/CityExist/CityExist";
export default function PageMeteo() {
  const [city, setCity] = React.useState("Dakar");
  const [fiveDaysAll, setFiveDaysAll] = React.useState({ city: "" });
  const api_key = "7050f7953a884c5b33cefcd18155a4dc";
  //
  function execapi() {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setFiveDaysAll(response);
      })
      .catch((error) => console.error(error));
  }
  useEffect(() => execapi(), []);
  console.log(city);
  console.log(fiveDaysAll);
  if (fiveDaysAll.cod == 200) {
    const tempmax = fiveDaysAll.list[0].main.temp_min;
  }

  return (
    <div className="container">
      <h1
        style={{ textAlign: "center", fontWeight: "bold" }}
        className="mt-5 text-white "
      >
        {fiveDaysAll.city == "" && <span>Dakar </span>}
        {fiveDaysAll.cod == 200 ? fiveDaysAll.city.name : <span>{city}</span>}
      </h1>
      <BasicCard>
        <InputCity city={city} setCity={setCity} func={execapi} />
        {fiveDaysAll.cod == 200 ? (
          <CityExist
            temperature={fiveDaysAll.list[0].main.temp}
            speed={fiveDaysAll.list[0].wind.speed}
            humidity={fiveDaysAll.list[0].main.humidity}
            right={fiveDaysAll}
          />
        ) : (
          <CityNotExist />
        )}
      </BasicCard>
    </div>
  );
}
