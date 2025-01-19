import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Response_Back() {
  const Backend_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  const [data, setData] = useState(true);
  const [result, setresult] = useState([]);
  const [reload, setReload] = useState("");

  useEffect(() => {
    findData();
  }, []);

  async function findData() {
    // let responce = await fetch(`http://localhost:6005/responce`
    let responce = await fetch(`${Backend_URL}responce`, {
      method: "Get",
    });
    responce = await responce.json();
    console.log(responce.length);

    setresult(responce);
  }

  async function Deletedata(id) {
    // let deletetion = await fetch(`http://localhost:6005/submitdlt/${id}`
    let deletetion = await fetch(`${Backend_URL}submitdlt/${id}`, {
      method: "Delete",
    });
    window.location.reload();
  }

  return (
    <>
      {data ? (
        <div className="SubmittedJob">
          <div id="Sub-Heading">
            <h1>Responce Back</h1>
          </div>
          {result.map((item, index) => (
            <div className="Submitted_Div" key={index}>
              <div className="Submitted_Content">
                <ul>
                  <li>
                    <span>Name :</span> {item.Name}
                  </li>
                  <li>
                    <span>Email :</span> {item.Email}
                  </li>
                  <li>
                    <span>Mobile :</span> {item.Mobile}
                  </li>
                  <li>
                    <span>Location :</span> Beesapur Bhitaura Fatehpur
                  </li>
                </ul>
              </div>
              <div className="Submitted_Img">
                <img src={item.Image} alt="img" />
                <button
                  onClick={() => {
                    Deletedata(item._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}{" "}
        </div>
      ) : (
        <div className="Notfount">
          <img src="../public/Image/notfound.png" alt="" />
        </div>
      )}
    </>
  );
}

export default Response_Back;
