const TableHeader = ({
    tableColumns,
  }) => {
    const headers = tableColumns.map((column, index) => {
      return (
        <th scope="col" className="py-3 px-6" key={`headCell-${index}`}>
          {column.header}
        </th>
      );
    });
  
    return (
      <thead>
        <tr>{headers}</tr>
      </thead>
    );
  };

  export default TableHeader;