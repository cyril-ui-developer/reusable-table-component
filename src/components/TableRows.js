const TableRows = ({
    data,
    TableRow,
  }) => {
    const rows = data.map((row, index) => {
      return (
        <tr
          key={`row-${index}`}
          className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
        >
          <TableRow {...row} />
        </tr>
      );
    });
  
    return <tbody>{rows}</tbody>;
  };

  export default TableRows;
  