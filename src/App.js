import './App.css';

import Table from './components/Table'
import data from './db.json';

function App() {
  return (
    <div className="App">
      <header className="font-bold">
          <h1>Reusable Table demonstrating the React Component Composition  </h1>
      </header>
      <div className="flex justify-center ">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              {data.employees.length > 0 ? (
                <Table
                  data={data.employees}
                />
              ) : (
                <>No match</>
              )}
            </div>
            </div>
    </div>
  );
}

export default App;
