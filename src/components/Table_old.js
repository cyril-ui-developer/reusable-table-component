import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Table = ({ data}) => (
  <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Name and Job Title
          </th>
          <th scope="col" className="py-3 px-6">
            Project
          </th>
          <th scope="col" className="py-3 px-6">
            Team
          </th>
          <th scope="col" className="py-3 px-6">
            Location
          </th>
          <th scope="col" className="py-3 px-6">
            Hire Date
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row) => (
          <tr
            key={row.id}
            className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          >
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="flex">
                <div className="flex-shrink-0 w-10 h-10">
                  {row.avatarUrl ? (
                    <img alt='user'
                      src={row.avatarUrl}
                      className="object-cover border-2 border-gray-350 rounded-full"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faUser} />
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {row.firstName} {row.lastName}
                  </p>
                  <p className="text-gray-600 whitespace-no-wrap">
                    {row.jobTitle}
                  </p>
                </div>
              </div>
            </td>
            <td className="py-4 px-6">{row.project || '-'}</td>
            <td className="py-4 px-6">{row.teamName || '-'}</td>
            <td className="py-4 px-6">{row.workLocation || '-'}</td>
            <td className="py-4 px-6">
              {row.hireDate || '-'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
