export const userColumns = [
  { field: "id", headerName: "ID", width: 30 },
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.avatar || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },

  {
    field: "address",
    headerName: "Address",
    width: 230,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 130,
  },
];

export const planeColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },
  {
    field: "model",
    headerName: "Model",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.avatar || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.model}
        </div>
      );
    },
  },
  {
    field: "manufacturer",
    headerName: "Manufacturer",
    width: 150,
  },
  {
    field: "year_of_manufacture",
    headerName: "Year of Manufacture",
    width: 150,
    type: "string",
  },
  {
    field: "registration_number",
    headerName: "Registration Number",
    width: 150,
  },
  {
    field: "capacity",
    headerName: "Capacity",
    width: 150,
    renderCell: (params) => `${params.row.capacity} seats`,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
export const notificationColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "message",
    headerName: "Message",
    width: 200,
  },
];

export const ticketColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "content",
    headerName: "Content",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
  },
  {
    field: "user",
    headerName: "UserId",
    width: 200,
  },
];
