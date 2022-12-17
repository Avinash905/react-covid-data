import React from "react";
import "./table.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Table() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const req = await axios.get(
      "https://data.covid19india.org/v4/min/data.min.json"
    );
    setData(req.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <table className="table table-stripped table-hover">
      <thead className="table-dark">
        <tr>
          <th>State</th>
          <th>Population</th>
          <th>Confirmed</th>
          <th>Recovered</th>
          <th>Tested</th>
          <th>Vaccinated dose 1</th>
          <th>Vaccinated dose 2</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((states, index) => {
          return (
            <tr key={index}>
              <td>{states}</td>
              <td>{data[states].meta.population}</td>
              <td>{data[states].total.confirmed}</td>
              <td>{data[states].total.recovered}</td>
              <td>{data[states].total.tested}</td>
              <td>{data[states].total.vaccinated1}</td>
              <td>{data[states].total.vaccinated2}</td>
              <td>{data[states].meta.last_updated.split("T")[0]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
