import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axiosInstance from "../../config/axiosInstance";
import Modal from "../modal/Modal";
import { toast } from "react-toastify";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const { data, loading, error } = useFetch(`/api/${path}`);

  useEffect(() => {
    setList(data)
  }, [data]);

  console.log(data);

  const openModal = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/api/${path}/${deleteId}`);
      const res = await axiosInstance.get(`/api/${path}`);
      setList(res.data);
      closeModal(); // Đóng modal sau khi xóa
      toast.success("User deleted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 4000);      
    } catch (err) {
      console.error("Failed to delete user:", err);
      toast.error('Failed to delete user!');
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => openModal(params.row.id)}
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

      {/* Modal */}
      <Modal
        show={showModal}
        onClose={closeModal}
        onConfirm={handleDelete}
        entity={path}
      />
    </div>
  );
};

export default Datatable;
