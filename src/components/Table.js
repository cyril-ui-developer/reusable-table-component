import TableHeader from './TableHeader';
import TableRows from './TableRows';


const Table = ({
    data,
    tableColumns,
    TableRow,
  }) => {
    return (
      <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TableHeader tableColumns={tableColumns} />
          <TableRows
            data={data}
            tableColumns={tableColumns}
            TableRow={TableRow}
          />
        </table>
      </div>
    );
  };
  
  export default Table;