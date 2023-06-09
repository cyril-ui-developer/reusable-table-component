import TableData from "../components/TableData";
import Table from "../components/Table";

function CustomersList({ data }) {
  console.log("data", data);
  const tableColumns = [
    {
      key: "id",
      header: "S/N",
    },
    {
      key: "companyName",
      header: "Company Name and Location",
      width: 150,
    },
    {
      key: "category",
      header: "Category",
    },
    {
      key: "status",
      header: "Status",
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "tel",
      header: "Phone number",
    },
    {
      key: "createdDate",
      header: "Customer Since",
    },
  ];

  const TableRow = (props) => {
    const {
      id,
      companyName,
      category,
      email,
      tel,
      location,
      createdDate,
      status,
    } = props;

    return (
      <>
        <TableData>{id || "-"}</TableData>
        <TableData>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{companyName}</p>
            <p className="text-gray-600 whitespace-no-wrap">{location}</p>
          </div>
        </TableData>
        <TableData>{category || "-"}</TableData>
        <TableData>{status || "-"}</TableData>
        <TableData>{email || "-"}</TableData>
        <TableData>{tel || "-"}</TableData>
        <TableData>{createdDate || "-"}</TableData>
      </>
    );
  };
  return (
    <>
      <h2 className="font-bold">Customers List</h2>
      <div className="flex justify-center">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          {data.length > 0 ? (
            <Table
              tableColumns={tableColumns}
              TableRow={TableRow}
              data={data}
            />
          ) : (
            <>No match</>
          )}
        </div>
      </div>
    </>
  );
}

export default CustomersList;
