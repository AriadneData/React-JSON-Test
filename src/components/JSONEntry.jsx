import React, { useState } from 'react';
import {JSONSchemaContext} from '../App';


export const JSONEntry = () => {

    const [jsonSchemaData, setJsonSchemaData ] = useState("Enter JSON");

    const prettifyJSON = () => {
        // setJsonSchemaData(JSON.stringify(JSON.parse(jsonSchemaData),null,'\t'));
        setJsonSchemaData(jsonSchemaData)
    };

    const updateJSON = event => {
        setJsonSchemaData(event.target.value);
    };

    return (
        <JSONSchemaContext.Provider value={jsonSchemaData}>
            <div>
                <textarea onChange={updateJSON} value={jsonSchemaData} cols = "150" rows = "30" ></textarea>
                <br />
                <button onClick={prettifyJSON}>Prettify</button>
                
                {/* <button onClick={props.submitJSON(setJsonSchemaData)}>Submit</button> */}
            </div>   
        </JSONSchemaContext.Provider>    
    );


};

export default JSONEntry;