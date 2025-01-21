import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {RotatingLines} from "react-loader-spinner";

function Jobs() {
  const Backend_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL; 
  //console.log(`${Backend_URL}`);
  const [Datajob, setData] = useState([]);
  const [Loader, setLoader] = useState(true);
  const [findData, setFindData] = useState(false); 

  useEffect(() => {
    GetJobs();
  }, []);

  const GetJobs = async () => {
  //  var getjobs = await fetch("http://localhost:6005/Getjob",
    var getjobs = await fetch(`${Backend_URL}/Getjob`, {
      method: "GET",
    });
      setLoader(false);
      setFindData(true);
    
    getjobs = await getjobs.json();
  //  console.log(getjobs[0].Title);
    
    setData(getjobs);
  };
  return (
    <>
       <div id="Jobs-Body">
        <h1 id="Jobs-Heading">Jobs</h1>

        <div id="Jobs-Main">
          <>
            {" "}
            {Datajob.map((item, index) => (
              <div className="Jobs" key={index}>
                <div className="Jobs-Name">
                  <h1>{item.Title}</h1>
                </div>
                <div className="Jobs-Type">{item.Category}</div>
                <div className="Jobs-Country">{item.Country}</div>
                <button className="Jobs-Btn">
                  <Link to={"/JobDetails/" + item._id}>More Details</Link>
                </button>
              </div>
            ))}{" "}
          </>
        </div>
      
      {findData? (
          ""
        ) : (
          <div id="Loader">
            {" "}
            <RotatingLines
              visible={Loader}
              height="120"
              width="120"
              color="blue"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <p>Finding Jobs....</p>
          </div>
        )} 
        </div> 
    </>
  );
}

export default Jobs;
