import "./single.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";
// import Chart from "../../components/chart/Chart";
import List from "../../../components/table/Projet_entreprise";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import API from "../../../api/index";


const Single_entreprise = () => {

  const parames = useParams();
  const [Entreprise, setEntreprise] = useState([]);
  useEffect((Entreprise) => {
    API.get(`getbyId_entreprise/${parames.id}`).then(function (res) {
      setEntreprise(res.data);
      //  console.log(res.data)
    });
  }, [])

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <Link className="editButton" to={`/entreprise/update/${Entreprise?.subInfo?.id}/${parames.id}`}>Edit</Link>
            <h1 className="title">Information</h1>
            <div className="item">
              {/* <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> */}
              <div className="details">
                <h1 className="itemTitle">{Entreprise?.subInfo?.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{Entreprise?.subInfo?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+216 {Entreprise?.subInfo?.telephone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {Entreprise?.subInfo?.adress}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Contact:</span>
                  <span className="itemValue">{Entreprise?.contact}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Mobile:</span>
                  <span className="itemValue">+216 {Entreprise?.mobile}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right">
            <Chart aspect={3 / 1} title="Entreprise Spending ( Last 6 Months)" />
          </div> */}
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List data={{ Entreprise: Entreprise.id, n_e: Entreprise.username }} />
        </div>
      </div>
    </div>
  );
};

export default Single_entreprise;