import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import dayjs from "dayjs";

const Single = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];
  const path = location.pathname.split("/")[1];

  const [info, setInfo] = useState(null); // Lưu thông tin người dùng
  const { data, loading, error } = useFetch(`/api/${path}/${id}`);

  useEffect(() => {
    if (data) {
      setInfo(data);
    }
  }, [data]);

  console.log(info);
  if (loading) return <div>Loading...</div>;

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton" onClick={() => navigate(`/${path}/edit/${id}`)}>Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={info?.avatar || "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}
                alt=""
                className="itemImg"
              />
              <div className="details">
                {path === "users" ? (
                  <>
                    <h1 className="itemTitle">{info?.username}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{info?.email}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">{info?.phone || "N/A"}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Address:</span>
                      <span className="itemValue">{info?.address || "N/A"}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Country:</span>
                      <span className="itemValue">{info?.country || "N/A"}</span>
                    </div>
                  </>
                ) : path === "airplanes" ? (
                  <>
                    <h1 className="itemTitle">{info?.model || "N/A"}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Manufacturer:</span>
                      <span className="itemValue">{info?.manufacturer || "N/A"}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Year of Manufacture:</span>
                      <span className="itemValue">{info?.year_of_manufacture || "N/A"}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Registration Number:</span>
                      <span className="itemValue">{info?.registration_number || "N/A"}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Fuel Capacity:</span>
                      <span className="itemValue">{info?.fuel_capacity || "N/A"}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Last Inspection Date:</span>
                      <span className="itemValue">
                        {info?.last_inspection_date
                          ? dayjs(info.last_inspection_date).format("DD/MM/YYYY")
                          : "N/A"}
                      </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Status:</span>
                      <span className={`itemValue ${info?.status}`}>{info?.status || "N/A"}</span>
                    </div>
                  </>
                ) : (
                  <div>No data available for this entity.</div>
                )}
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
