import React from "react";
import { useEffect, useState } from "react";
import shortid from "shortid"


const Logs = () => {

  const [logs, setLogs] = useState([]);

  const fetchdata = async () => {
    const res = await fetch("http://localhost:9000/gett");
    const data = await res.json();
    setLogs(data);
  };

  useEffect( () => {
    fetchdata();

  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center text-center">
       
            <div className="h1">Logs</div>
        {logs.map((i) => {
          return (
            <p key={shortid.generate()}>
              {
                 i.watts.map((arr) => {
                  return (
                 
                      <span key={shortid.generate()} className="m-0">
                        {arr} ,
                      </span>
      
                  );
                })
              }
            </p>
          )
        })}
      </div>
    </div>
  );
};

export default Logs;
