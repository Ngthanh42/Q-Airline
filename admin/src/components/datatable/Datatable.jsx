import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axiosInstance from "../../config/axiosInstance";

const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();

  const { data, loading, error } = useFetch(`/api/${path}`);

  useEffect(() => {
    setList(data)
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/${path}/${id}`);
      setList(list.filter((item) => item.id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row => row.id}
      />
    </div>
  );
};

export default Datatable;
