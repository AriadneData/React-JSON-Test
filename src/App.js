import React, {useContext} from 'react';
import './App.css';
import JSONEntry from './components/JSONEntry';
import JSONForm from './components/JSONForm';

const JSONSchemaContext = React.createContext()

const JSONSchemaData = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
  },
  "required": [
    "name",
  ]
};

function App() {
  return (
    <div className="App">
      <JSONSchemaContext.Provider value={JSONSchemaData}>
        <JSONEntry />
        <JSONForm />
      </JSONSchemaContext.Provider>
    </div>
  );
}

export default App;
export {JSONSchemaContext};