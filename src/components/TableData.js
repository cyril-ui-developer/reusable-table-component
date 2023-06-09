export const TableData = ({
    className = 'py-4 px-6',
    children,
  }) => {
    return (
      <td className={className} role="gridcell">
        {children}
      </td>
    );
  };

  export default TableData;