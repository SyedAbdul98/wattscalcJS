import React from "react";
import { Slider } from "@mui/material";
import { useState } from "react";
import LightBulb from "./LightBulb";
import axios from "axios";

const SliderComponent = () => {
  let watts = [5, 10, 20];

  let [logsArray, setLogsArray] = useState([]);
  const [watt, setWatt] = useState("");

  const postData = async () => {
    try {
      await axios.post("http://localhost:9000/gett", { logsArray });
    } catch (error) {
      console.log(error);
    }
  };

  const getValue = (e) => {
    setWatt(e.target.value);
    setFrequency(watt);
  };

  const setFrequency = (watt) => {
    let minValue = 5;
    let logs = watts.map((i) => {
      return ((watt - minValue) / 10) * i;
    });
    setLogsArray(logs);
    postData();
  };

  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-4 card m-2">
          <Slider
            aria-label="Temperature"
            defaultValue={5}
            valueLabelDisplay="auto"
            step={5}
            marks
            min={5}
            max={20}
            onChange={getValue}
          />
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <LightBulb />
      </div>
    </div>
  );
};

export default SliderComponent;
