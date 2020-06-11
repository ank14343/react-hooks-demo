import React from 'react';
import './App.css';
import DataFetchingUseReducer from './components/Fetching Data/DataFetchingUseReducer';

// export const UserContext = React.createContext()
// export const AnotherContext = React.createContext()

function App() {
  return (
    <div className="App">

      <DataFetchingUseReducer />


      {/* <UserContext.Provider value='Arya'>
        <AnotherContext.Provider value="Ankur">
          <ComponentC />
        </AnotherContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
