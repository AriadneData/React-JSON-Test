import React, { useState } from 'react';
import Form from 'react-jsonschema-form';

export const JSONEntry = (props) => {

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
      
    const [jsonSchemaData, setJsonSchemaData ] = useState(JSONSchemaData);
    // setJsonSchemaData(JSON.stringify(JSON.parse(jsonSchemaData),null,'\t'));

    const updateJSON = event => {
        setJsonSchemaData(JSON.parse(event.target.value));
        console.log(JSON.parse(event.target.value))
    };

    return (
        <div>
            <textarea onChange={updateJSON} value={JSON.stringify(jsonSchemaData)} cols = "150" rows = "30" ></textarea>
            <br />
            <div className="col-md-offset-3 col-md-6">               
                <Form schema={jsonSchemaData} />
            </div> 
        </div>      
    );
};

export default JSONEntry;